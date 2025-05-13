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
					<li><Link className={styles.link} href="/" onClick={closeMenu}>
						Accueil
					</Link></li>
					<li><Link className={styles.link} href="/compagnie" onClick={closeMenu}>
						Compagnie
					</Link></li>
						<li><Link className={styles.link} href="/spectacles" onClick={closeMenu}>
						Spectacle
					</Link></li>
							<li><Link className={styles.link} href="/mediation" onClick={closeMenu}>
						Mediations
					</Link></li>
								<li><Link className={styles.link} href="/agenda/spectacles" onClick={closeMenu}>
						Les dates
					</Link></li>
									<li><Link className={styles.link} href="/contact" onClick={closeMenu}>
						Contact
					</Link></li>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenu}>
					X
				</button>
			</section>
		</>
	);
}
