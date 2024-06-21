const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete all existing records
  await prisma.reservation.deleteMany();
  await prisma.listing.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // Create demo users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      emailVerified: new Date(),
      image: 'https://example.com/john.jpg',
      hashedPassword: 'hashedpassword1',
      favoriteIds: []
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      emailVerified: new Date(),
      image: 'https://example.com/jane.jpg',
      hashedPassword: 'hashedpassword2',
      favoriteIds: []
    },
  });

  // Create demo listings
  const listing1 = await prisma.listing.create({
    data: {
      title: 'Cozy Cottage',
      description: 'A cozy cottage in the countryside.',
      imageSrc: 'https://example.com/cottage.jpg',
      category: 'Cottage',
      roomCount: 3,
      bathroomCount: 2,
      guestCount: 4,
      locationValue: 'countryside',
      userId: user1.id,
      price: 100
    },
  });

  const listing2 = await prisma.listing.create({
    data: {
      title: 'Modern Apartment',
      description: 'A modern apartment in the city center.',
      imageSrc: 'https://example.com/apartment.jpg',
      category: 'Apartment',
      roomCount: 2,
      bathroomCount: 1,
      guestCount: 2,
      locationValue: 'city center',
      userId: user2.id,
      price: 200
    },
  });

  // Create demo reservations
  await prisma.reservation.create({
    data: {
      userId: user1.id,
      listingId: listing2.id,
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-06-10'),
      totalPrice: 2000,
    },
  });

  await prisma.reservation.create({
    data: {
      userId: user2.id,
      listingId: listing1.id,
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-07-10'),
      totalPrice: 1000,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
