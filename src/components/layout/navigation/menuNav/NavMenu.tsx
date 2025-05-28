import Link from "next/link";
import styles from "./navMenu.module.css";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";
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
					<li><TransitionLink className={styles.link} href="/" onClick={closeMenu}>
						Accueil
					</TransitionLink></li>
					<li><TransitionLink className={styles.link} href="/compagnie" onClick={closeMenu}>
						Compagnie
					</TransitionLink></li>
						<li><TransitionLink className={styles.link} href="/spectacles" onClick={closeMenu}>
						Spectacle
					</TransitionLink></li>
							<li><TransitionLink className={styles.link} href="/mediation" onClick={closeMenu}>
						Mediations
					</TransitionLink></li>
								<li><TransitionLink className={styles.link} href="/agenda/spectacles" onClick={closeMenu}>
						Les dates
					</TransitionLink></li>
									<li><TransitionLink className={styles.link} href="/contact" onClick={closeMenu}>
						Contact
					</TransitionLink></li>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenu}>
					X
				</button>
			</section>
		</>
	);
}
