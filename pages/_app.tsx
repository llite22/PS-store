import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '@/app/Layout/Layout'
import { store } from '@/app/redux/store'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
