import prisma from './src/config/db.js';
import bcrypt from 'bcrypt';

async function seed() {
    try {
        const email = 'admin@larsunlabs.com';
        const password = 'adminpassword123';
        const username = 'admin';

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('Creating admin user...');
        const admin = await prisma.admin.upsert({
            where: { email },
            update: {},
            create: {
                username,
                email,
                password: hashedPassword
            }
        });
        console.log('✅ Admin user created/verified:', admin.email);
    } catch (error) {
        console.error('❌ Seeding failed');
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
