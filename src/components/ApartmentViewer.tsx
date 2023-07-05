import { Box, BoxProps } from '@mui/material'

import { useRunMatterport } from '../hooks/useRunMatterport'

export const ApartmentViewer = (props: BoxProps) => {
	const ref = useRunMatterport()

	return <Box ref={ref} sx={{ height: '500px' }} {...props} />
}
