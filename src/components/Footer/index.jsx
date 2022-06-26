import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Sakil
		</footer>
	);
}
export default Footer;
