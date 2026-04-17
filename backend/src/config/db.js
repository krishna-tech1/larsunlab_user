import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from 'dotenv';
import dns from 'dns';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import WebSocket from 'ws';

// Resolve absolute path to .env (src/config -> ../../ = backend/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../../.env') });

// ============================================================
// DNS FIX: Your local DNS (172.18.206.140) blocks neon.tech.
// We create a custom DNS Resolver that uses Google DNS (8.8.8.8)
// and pass a custom lookup function to the WebSocket constructor.
// ============================================================
const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

// Custom lookup that uses Google DNS for neon.tech hostnames
function customLookup(hostname, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  
  if (hostname.includes('neon.tech')) {
    resolver.resolve4(hostname, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        dns.lookup(hostname, options, callback);
        return;
      }
      
      const ip = addresses[0];
      if (options.all) {
        callback(null, [{ address: ip, family: 4 }]);
      } else {
        callback(null, ip, 4);
      }
    });
  } else {
    dns.lookup(hostname, options, callback);
  }
}

// Create a custom WebSocket class that uses our DNS lookup
class CustomWebSocket extends WebSocket {
  constructor(url, protocols, options) {
    super(url, protocols, {
      ...options,
      lookup: customLookup,
    });
  }
}

neonConfig.webSocketConstructor = CustomWebSocket;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ DATABASE_URL is not set! Check your .env file.');
  process.exit(1);
}

console.log('✅ DB: DATABASE_URL loaded. Custom DNS resolver active for neon.tech.');

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
