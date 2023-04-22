import { FC, PropsWithChildren } from 'react'

import Footer from './footer/Footer'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
