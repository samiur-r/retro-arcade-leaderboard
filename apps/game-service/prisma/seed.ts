import {PrismaClient} from '.prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking if games already exist...');

  const existing = await prisma.game.count();

  if (existing > 0) {
    console.log(`${existing} game(s) already exist – skipping seeding.`);
    return;
  }

  await prisma.game.createMany({
    data: [
      { name: 'Snake', slug: 'snake' },
      { name: 'Pong', slug: 'pong' },
      { name: 'Tetris', slug: 'tetris' },
    ],
  });

  console.log('🎮 Games seeded successfully');
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

