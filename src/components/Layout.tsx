import React, { FC, PropsWithChildren } from 'react'
import {
	Box,
	Container,
	Typography,
	AppBar,
	Toolbar,
	Button,
	AppBarProps,
	BoxProps,
} from '@mui/material'

import { routes } from '../constants/routes'

import { Flex } from './Flex'
import { LinkBase } from './LinkBase'

type LayoutProps = {
	appBarProps?: AppBarProps
	footerProps?: BoxProps
	background?: string
}
export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	appBarProps,
	footerProps,
	background,
	children,
}) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			flexGrow: 1,
			minHeight: '100vh',
		}}
	>
		<AppBar position="static" sx={{ background }} {...appBarProps}>
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
			{...footerProps}
			sx={{
				py: 10,
				position: 'relative',
				bottom: 0,
				backgroundColor: background ?? 'primary.main',
				...(footerProps?.sx ?? {}),
			}}
		>
			<Typography variant="h3" color="#bddeff" align="center">
				Join Today
			</Typography>
			<Typography variant="body1" color="white" align="center">
				Don't miss out on your dream apartment. Register today and start
				exploring your future neighborhood from the comfort of your home.
			</Typography>
			<Flex
				sx={{ mt: 2, gap: '8px' }}
				alignItems="center"
				justifyContent="center"
			>
				<Button variant="contained" color="info">
					Login
				</Button>
				<Button variant="outlined" color="info" sx={{ background: 'white' }}>
					Create an account
				</Button>
			</Flex>
		</Box>
	</Box>
)
