import Link from "next/link";
import styles from "./navMenu.module.css";
export default function NavMenu({
	openMenu,
	closeMenu,
}: { openMenu: boolean; closeMenu: () => void }) {
	return (
		<>
			<section
				className={`${styles.section} ${openMenu ? styles.isOpen : styles.isClose}`}
			>
				<ul className={styles.ul}>
					<Link className={styles.link} href="/" onClick={closeMenu}>
						Accueil
					</Link>
					<Link className={styles.link} href="/compagnie" onClick={closeMenu}>
						Compagnie
					</Link>
					<Link className={styles.link} href="/spectacles" onClick={closeMenu}>
						Spectacle
					</Link>
					<Link className={styles.link} href="/mediation" onClick={closeMenu}>
						Mediations
					</Link>
					<Link className={styles.link} href="#">
						Contact
					</Link>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenu}>
					X
				</button>
			</section>
		</>
	);
}
