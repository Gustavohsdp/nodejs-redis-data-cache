import { prisma } from '@/lib/prisma'
import { faker } from '@faker-js/faker'

async function main() {
  const user = []

  for (let i = 0; i < 1000000; i++) {
    user.push({
      name: faker.name.fullName(),
      email: `${faker.internet.email()}-${i}`,
    })
  }

  await prisma.user.createMany({
    data: user,
  })
}

main()
  .catch((err) => {
    console.log(err)
    console.log('caiu aqui')
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
