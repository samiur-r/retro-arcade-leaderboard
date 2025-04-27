import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.game.createMany({
    data: [
      {name: 'Snake', slug: 'snake'},
      {name: 'Pong', slug: 'pong'},
      {name: 'Tetris', slug: 'tetris'},
    ],
    skipDuplicates: true,
  });
  console.log('🎮 Games seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
