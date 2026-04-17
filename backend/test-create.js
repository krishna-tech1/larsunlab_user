import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import WebSocket from 'ws';
import dns from 'dns';
import dotenv from 'dotenv';

dotenv.config();

const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
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
class CustomWebSocket extends WebSocket {
  constructor(url, protocols, options) {
    super(url, protocols, { ...options, lookup: customLookup });
  }
}
neonConfig.webSocketConstructor = CustomWebSocket;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const distributor = await prisma.distributor.create({
      data: {
        name: 'Test Name',
        person: 'Test Person',
        region: 'Test Region',
      },
    });
    console.log('Success:', distributor);
  } catch (error) {
    console.error('Prisma Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}
main();
