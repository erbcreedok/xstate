import React, { FC } from 'react'
import { Box, Container, Typography, AppBar, Toolbar } from '@mui/material'

import { routes } from '../constants/routes'

import { LinkBase } from './LinkBase'

export const Layout: FC = ({ children }) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			flexGrow: 1,
			minHeight: '100vh',
		}}
	>
		<AppBar position="static">
			<Container>
				<Toolbar disableGutters>
					<LinkBase to={routes.home()}>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							XState
						</Typography>
					</LinkBase>
				</Toolbar>
			</Container>
		</AppBar>
		<Box sx={{ flexGrow: 1 }}>{children}</Box>
		<Box
			sx={{
				p: 2,
				position: 'relative',
				bottom: 0,
				width: '100%',
				backgroundColor: 'primary.main',
			}}
		>
			<Typography variant="body2" color="text.secondary" align="center">
				Footer Content Here
			</Typography>
		</Box>
	</Box>
)
