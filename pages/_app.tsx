import type { AppProps } from 'next/app'

import Layout from '@/app/Layout/Layout'
import '@/styles/globals.scss'
import { store } from '@/app/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</Provider>
	)
}
