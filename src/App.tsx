import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { routes } from './constants/routes'
import { ApartmentDetail } from './routes/ApartmentDetail'
import { Home } from './routes/Home'

export const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={routes.home()} element={<Home />} />
					<Route
						path={routes.apartmentDetail()}
						element={<ApartmentDetail />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
