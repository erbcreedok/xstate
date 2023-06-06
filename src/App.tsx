import {
	Box,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	styled,
	Typography,
} from '@mui/material'
import { Placemark, YMaps, Map, Clusterer } from '@pbe/react-yandex-maps'
import React from 'react'

import { Flex } from './components/Flex'
import { getApartments } from './mocks/getApartments'

const apartments = getApartments()

const Image = styled('img')`
	width: 100px;
	height: 100px;
	border-radius: 4px;
	object-fit: cover;
`

const App = () => {
	const defaultState = {
		center: [43.260753, 76.943512],
		zoom: 10,
	}

	return (
		<Container>
			<Flex height="720px" sx={{ border: '1px solid lightgray', my: 4 }}>
				<Flex flexGrow={1}>
					<YMaps>
						<Map defaultState={defaultState} width="100%" height="100%">
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
									/>
								))}
							</Clusterer>
						</Map>
					</YMaps>
				</Flex>
				<List
					sx={{ flexShrink: 0, flexGrow: 0, width: '320px', overflow: 'auto' }}
				>
					{apartments.map((apartment) => (
						<ListItem
							key={apartment.id}
							sx={{ gap: '4px', alignItems: 'flex-start' }}
							divider
						>
							<ListItemAvatar>
								<Image width={100} height={100} src={apartment.image} alt="" />
							</ListItemAvatar>
							<Box>
								<Typography fontWeight="bold">{apartment.price}</Typography>
								<Typography>{apartment.address}</Typography>
							</Box>
						</ListItem>
					))}
				</List>
			</Flex>
			{/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
			<iframe
				width="100%"
				height="480"
				src="https://my.matterport.com/show?m=SxQL3iGyoDo&play=1&applicationKey=r4g2a1zpp98r895352itmgr7c"
				frameBorder="0"
				allow="fullscreen; vr"
				id="showcase-iframe"
			/>
		</Container>
	)
}

export default App
