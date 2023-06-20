import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import checker from 'vite-plugin-checker'

export default defineConfig(({ command, mode }) => {
	const env = Object.entries(loadEnv(mode, process.cwd(), 'REACT')).reduce<
		Record<string, unknown>
	>(
		(acc, [key, value]) => ({
			...acc,
			[key.replace('REACT_', '')]: value,
		}),
		{}
	)

	return {
		build: {
			commonjsOptions: {
				transformMixedEsModules: true,
			},
			minify: 'esbuild',
			rollupOptions: {
				...(command === 'build' && {
					input: {
						planner: 'src/views/index.ts',
					},
				}),
				output: {
					format: 'iife',
					entryFileNames: '[name].js',
				},
			},
		},
		define: {
			'process.env': {
				...env,
				NODE_ENV: mode,
			},
		},
		server: {
			watch: {
				ignored: ['**/node_modules/**'],
			},
			hmr: {
				overlay: false,
			},
			port: 9000,
		},
		resolve: {
			alias: {
				src: '/src',
				dompurify: 'isomorphic-dompurify',
			},
		},
		plugins: [
			checker({ typescript: true, overlay: false }),
			react({
				jsxImportSource: '@emotion/react',
				babel: {
					plugins: ['@emotion/babel-plugin'],
				},
			}),
			svgr(),
			command === 'serve' &&
				createHtmlPlugin({
					template: 'public/index.html',
					entry: '/src/index.tsx',
				}),
			command === 'build' &&
				viteStaticCopy({
					targets: [
						{
							src: 'src/public/*',
							dest: 'assets',
						},
						{
							src: 'manifest.json',
							dest: './',
						},
					],
				}),
		],
	}
})
