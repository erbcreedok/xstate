import { setupSdk } from '@matterport/sdk'
import { useEffect, useRef } from 'react'

const runMatterport = async (container: HTMLElement) => {
	await setupSdk('r4g2a1zpp98r895352itmgr7c', {
		space: 'pmSSrD8saa2',
		container,
	})
}
export const useRunMatterport = () => {
	const ref = useRef<HTMLElement>()
	const refRunnedOnce = useRef(false)
	useEffect(() => {
		if (ref.current && !refRunnedOnce.current) {
			ref.current.innerHTML = ''
			runMatterport(ref.current)
		}
		refRunnedOnce.current = true
	}, [])

	return ref
}
