import { FC } from 'react'
import styles from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__logo}>
					<img src="/images/footer_logo.svg" alt="Logo" />
				</div>

				<div className={styles.footer__top}>
					<div
						className={[styles.footer__links, styles.footer__text].join(' ')}
					>
						<a href="#">Support</a>&nbsp;|&nbsp;
						<a href="#">Privacy Policy</a>&nbsp;|&nbsp;
						<a href="#">Website</a>&nbsp;|&nbsp;
						<a href="#">Terms of Use</a>&nbsp;|&nbsp;
						<a href="#">Sitemap</a>&nbsp;|&nbsp;
						<a href="#">Legal</a>&nbsp;|&nbsp;
						<a href="#">About SIE</a>&nbsp;|&nbsp;
						<a href="#">PSN Terms of Service</a>&nbsp;|&nbsp;
						<a href="#">PS Store Cancellation Policy</a>&nbsp;|&nbsp;
						<a href="#">Health Warning</a>&nbsp;|&nbsp;
						<a href="#">About Ratings</a>
					</div>
				</div>
				<div className={[styles.footer__bottom, styles.footer__text].join(' ')}>
					<div className={styles.footer__socialLinks}>
						<a href="#">Facebook</a>&nbsp;|&nbsp;<a href="#">Twitter</a>&nbsp;|
						&nbsp;<a href="#">YouTube</a>&nbsp;|&nbsp;<a href="#">Instagram</a>
						&nbsp;| &nbsp;<a href="#">Android App</a>&nbsp;|&nbsp;
						<a href="#">iOS App</a>
					</div>
				</div>
				<p>© 2024 Sony Interactive Entertainment LLC</p>
			</div>
		</footer>
	)
}
export default Footer
