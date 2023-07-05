import { Box, Container } from '@mui/material'
import { Placemark, YMaps, Map, Clusterer } from '@pbe/react-yandex-maps'
import React, { useRef, useState } from 'react'
import ymaps, { IEvent } from 'yandex-maps'

import { ApartmentsList } from '../components/ApartmentsList'
import { Flex } from '../components/Flex'
import { Layout } from '../components/Layout'
import { boxShadow } from '../constants/styles'
import { getApartments } from '../mocks/getApartments'

const apartments = getApartments()

export const Home = () => {
	const mapRef = useRef<ymaps.Map>()
	const [visibleApartments, setVisibleApartments] = useState(apartments)
	const defaultState = {
		center: [43.260753, 76.943512],
		zoom: 10,
	}

	const handleBoundChange = (event: IEvent) => {
		const { newBounds } = event.originalEvent as unknown as {
			newBounds: Array<[number, number]>
		}
		const filteredApartments = apartments.filter((apartment) => {
			const { latitude, longitude } = apartment.location

			return (
				latitude >= newBounds[0][0] &&
				latitude <= newBounds[1][0] &&
				longitude >= newBounds[0][1] &&
				longitude <= newBounds[1][1]
			)
		})
		setVisibleApartments(filteredApartments)
	}

	return (
		<Layout>
			<Box sx={{ background: '#359bff', overflow: 'auto' }}>
				<Container>
					<Flex
						height="720px"
						sx={{
							borderRadius: '8px',
							p: '8px',
							gap: '8px',
							my: 4,
						}}
					>
						<Flex
							flexGrow={1}
							sx={{ borderRadius: '8px', overflow: 'hidden', boxShadow }}
						>
							<YMaps>
								<Map
									instanceRef={(ref) => {
										if (ref) {
											mapRef.current = ref
											ref.events.add('boundschange', handleBoundChange)
										}
									}}
									defaultState={defaultState}
									width="100%"
									height="100%"
								>
									<Clusterer
										options={{
											preset: 'islands#invertedVioletClusterIcons',
											groupByCoordinates: false,
										}}
									>
										{apartments.map((apartment) => (
											<Placemark
												key={apartment.id}
												geometry={[
													apartment.location.latitude,
													apartment.location.longitude,
												]}
												properties={{
													hintContent: `${apartment.address}, Price: ${apartment.price}`,
												}}
											/>
										))}
									</Clusterer>
								</Map>
							</YMaps>
						</Flex>
						<ApartmentsList
							sx={{
								flexShrink: 0,
								flexGrow: 0,
								width: '320px',
								overflow: 'auto',
								gap: '4px',
								background: '#FFFFFF',
								borderRadius: '8px',
								p: '4px',
								boxShadow,
							}}
							apartments={visibleApartments}
						/>
					</Flex>
				</Container>
			</Box>
		</Layout>
	)
}
