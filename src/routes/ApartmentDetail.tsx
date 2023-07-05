import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ApartmentViewer } from '../components/ApartmentViewer'
import { getApartmentImage } from '../mocks/getApartmentImage'

const apartmentDetail = {
	id: '1',
	address: 'Dostyk Ave 128, Almaty 050000, Kazakhstan',
	location: {
		latitude: 43.2361,
		longitude: 76.9454,
	},
	images: [
		getApartmentImage(),
		getApartmentImage(),
		getApartmentImage(),
		getApartmentImage(),
		getApartmentImage(),
	],
	price: '3000',
	description: {
		area: '80 sq.m',
		rooms: '2 rooms',
		district: 'Medeu District',
		houseType: 'Brick',
		year: '2005',
		floor: '3/5',
	},
}
export const ApartmentDetail = () => {
	return (
		<Container sx={{ my: 3, gap: '10px' }}>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<Box sx={{ minWidth: '300px', width: '50%' }}>
					<Typography variant="h5" component="div">
						{apartmentDetail.address}
					</Typography>
					<Box mt={2}>
						<Typography variant="subtitle1" color="text.secondary">
							{apartmentDetail.description.rooms},{' '}
							{apartmentDetail.description.area}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							District: {apartmentDetail.description.district}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							House type: {apartmentDetail.description.houseType}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							Year: {apartmentDetail.description.year}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							Floor: {apartmentDetail.description.floor}
						</Typography>
						<Typography variant="h6">{apartmentDetail.price}$</Typography>
					</Box>
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<ApartmentViewer sx={{ height: '500px', width: '100%' }} />
				</Box>
			</Box>
		</Container>
	)
}
