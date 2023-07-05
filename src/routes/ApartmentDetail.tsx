import { faker } from '@faker-js/faker'
import React, { useEffect, useRef, useState } from 'react'
import { Typography, Box, Container, styled, css } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ApartmentViewer } from '../components/ApartmentViewer'
import { Layout } from '../components/Layout'
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
	message: faker.lorem.paragraph(10),
}

const GradientBox = styled(Box)<{ enabled?: boolean }>`
	background: ${({ enabled }) =>
		enabled
			? `linear-gradient(-45deg, #141414, #11080d, #2d001a, #111111)`
			: 'black'};
	background-size: 400% 400%;
	animation: gradient 15s 5s ease infinite;
	overflow: visible;
	z-index: 2;
	@keyframes gradient {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
`
const GradientContainer = styled(Container)<{ enabled?: boolean }>`
	position: relative;
	transition: ${({ enabled }) => (enabled ? '0s' : '0.3s')};
	box-shadow: ${({ enabled }) =>
		enabled ? '0 -5px 10px rgba(0, 0, 0, 0.1)' : 'none'};
	background: ${({ enabled }) =>
		enabled
			? `linear-gradient(-45deg, #141414, #11080d, #2d001a, #111111)`
			: 'transparent'};
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`
const StyledCarousel = styled(Carousel)<{ enabled?: boolean }>`
	display: flex;
	flex-direction: column;
	.carousel:last-child {
		order: -1;
		margin-top: ${({ enabled }) => (enabled ? `-80px` : '0')};
		.thumbs-wrapper {
			margin-left: 0;
			margin-right: 0;
		}
		.thumbs.animated {
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: flex-end;
			${({ enabled }) =>
				enabled &&
				css`
					.thumb {
						margin-left: -50px;
						box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
						padding: 0;
						&:first-child {
							transform: scale(1);
							z-index: 3;
						}
						&:nth-child(2) {
							transform: scale(0.99) rotate(1deg);
							z-index: 2;
						}
						&:nth-child(3) {
							transform: scale(0.97) rotate(2deg);
						}
						&:nth-child(n + 4) {
							display: none;
						}
					}
				`};
		}
	}
`
const Chip = styled(Typography)`
	border-radius: 8px;
	background: rgb(255, 255, 255, 0.76);
	padding: 4px 8px;
	backdrop-filter: blur(10px);
`
const gradientSx = {
	sx: {
		background: `linear-gradient(-45deg, #141414, #11080d, #2d001a, #111111)`,
		backgroundSize: `400% 400%`,
		animation: `gradient 15s 5s ease infinite`,
	},
}

export const ApartmentDetail = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const handleContainerClick = () => {
		const y = window.scrollY
		if (y < 100) window.scrollTo({ top: 400, behavior: 'smooth' })
	}

	useEffect(() => {
		const handler = () => {
			setIsScrolled(window.scrollY > 100)
		}

		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [])

	return (
		<Layout appBarProps={gradientSx} footerProps={gradientSx}>
			<Box sx={{ background: '#141414', overflow: 'visible' }}>
				<Box sx={{ flexGrow: 1 }}>
					<ApartmentViewer
						sx={{ height: 'calc(90vh - 40px)', width: '100%' }}
					/>
				</Box>
				<GradientBox enabled={isScrolled}>
					<Box
						sx={{
							mt: !isScrolled ? '-60px' : '0',
							transition: '0.3s',
							height: '100px',
						}}
					/>
					<GradientContainer
						enabled={!isScrolled}
						sx={{
							p: 4,
							pb: 10,
							mx: 'auto',
							gap: '10px',
							borderRadius: '10px',
							maxWidth: isScrolled ? 'none' : 'calc(100vw - 120px)',
							position: 'sticky',
							bottom: 0,
							transition: '0.3s',
						}}
						onClick={handleContainerClick}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									maxWidth: isScrolled ? '100%' : 'calc(100% - 180px)',
									gap: '10px',
									flexWrap: 'wrap',
								}}
							>
								<Typography variant="h5" color="white" component="div">
									{apartmentDetail.address}
								</Typography>
								<Typography
									variant="h5"
									color="white"
									sx={{
										ml: isScrolled ? 'auto' : 'none',
										border: '1px solid white',
										p: '4px 16px',
										borderRadius: '16px',
									}}
								>
									{apartmentDetail.price}$
								</Typography>
							</Box>
							<StyledCarousel enabled={!isScrolled}>
								{apartmentDetail.images.map((image, index) => (
									<Box key={index} sx={{ height: '500px' }}>
										<img src={image} height="100%" alt={`Apartment ${index}`} />
									</Box>
								))}
							</StyledCarousel>
							<Box>
								<Box sx={{ display: 'flex', gap: '8px' }} mt={2}>
									<Chip variant="subtitle1">
										{apartmentDetail.description.rooms},{' '}
										{apartmentDetail.description.area}
									</Chip>
									<Chip variant="subtitle1">
										District: {apartmentDetail.description.district}
									</Chip>
									<Chip variant="subtitle1">
										House type: {apartmentDetail.description.houseType}
									</Chip>
									<Chip variant="subtitle1">
										Year: {apartmentDetail.description.year}
									</Chip>
									<Chip variant="subtitle1">
										Floor: {apartmentDetail.description.floor}
									</Chip>
								</Box>
								<Typography mt={3} color="white">
									{apartmentDetail.message}
								</Typography>
							</Box>
						</Box>
					</GradientContainer>
				</GradientBox>
			</Box>
		</Layout>
	)
}
