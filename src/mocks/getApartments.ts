import { faker } from '@faker-js/faker'

const KZT = new Intl.NumberFormat('ru-RU', {
	style: 'currency',
	currency: 'KZT',
})
export const getApartments = () => {
	return Array.from({ length: 120 }).map((_, index) => ({
		id: index,
		address: faker.location.streetAddress(),
		location: {
			latitude: faker.location.latitude({ max: 43.35, min: 43.2 }),
			longitude: faker.location.longitude({ max: 76.95, min: 76.7 }),
		},
		image: faker.image.city(300, 300, true),
		price: KZT.format(
			Math.round(
				Number(
					faker.commerce.price({
						min: 7000000,
						max: 100000000,
						dec: 0,
					})
				) / 100000
			) * 100000
		),
		description: faker.vehicle.vrm(),
	}))
}
