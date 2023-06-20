import React from 'react'
import {
	Box,
	Typography,
	List,
	ListProps,
	ListItemAvatar,
	ListItem,
	styled,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { routes } from '../constants/routes'
import { getApartments } from '../mocks/getApartments'

type Props = {
	apartments: ReturnType<typeof getApartments>
} & ListProps

const Image = styled('img')`
	width: 100px;
	height: 100px;
	border-radius: 4px;
	object-fit: cover;
`
export const ApartmentsList = ({ apartments, ...rest }: Props) => {
	return (
		<List {...rest}>
			{apartments.map((apartment) => (
				<ListItem
					key={apartment.id}
					sx={{
						gap: '12px',
						alignItems: 'flex-start',
						borderRadius: '8px',
						p: '8px',
						cursor: 'pointer',
						'&:hover': {
							background: '#f1f3f7',
						},
					}}
				>
					<ListItemAvatar sx={{ height: 100, width: 100 }}>
						<Image width="100%" height="100%" src={apartment.image} alt="" />
					</ListItemAvatar>
					<Box>
						<Typography fontWeight="bold">{apartment.price}</Typography>
						<Link to={routes.apartmentDetail(apartment.id)}>
							<Typography>{apartment.address}</Typography>
						</Link>
					</Box>
				</ListItem>
			))}
		</List>
	)
}
