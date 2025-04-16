import Link from "next/link";
import styles from "./adminMenu.module.css";
import { useState } from "react";
export default function NavMenu({
	openMenu,
	closeMenu,
}: { openMenu: boolean; closeMenu: () => void }) {
	console.log(openMenu);
	const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
	const handleClickMenu = (menuName: string) => {
		setOpenSubMenu((s) => (s === menuName ? null : menuName));
	};
	return (
		<>
			<section
				className={`${styles.section} ${openMenu ? styles.isOpen : styles.isClose}`}
			>
				<ul className={styles.ul}>
					<section className={styles.sectionMenu}>
						<li className={styles.li}>
							<button
								type="button"
								className={styles.link}
								onClick={() => handleClickMenu("compagnie")}
							>
								Compagnie
							</button>
							{openSubMenu === "compagnie" && (
								<ul className={styles.subMenu}>
									<Link href="#">{"L'histoire"}</Link>
									<Link href="#">{"L'équipe"}</Link>
								</ul>
							)}
						</li>
						<li className={styles.li}>
							<button
								type="button"
								className={styles.link}
								onClick={() => handleClickMenu("spectacle")}
							>
								Spectacles
							</button>
							{openSubMenu === "spectacle" && (
								<ul className={styles.subMenu}>
									<Link href="#">Ajouter</Link>
									<Link href="#">Modifier</Link>
								</ul>
							)}
						</li>
						<li className={styles.li}>
							<button
								type="button"
								className={styles.link}
								onClick={() => handleClickMenu("mediation")}
							>
								Mediations
							</button>
							{openSubMenu === "mediation" && (
								<ul className={styles.subMenu}>
									<Link href="#">Ajouter</Link>
									<Link href="#">Modifier</Link>
								</ul>
							)}
						</li>
						<li className={styles.li}>
							<Link className={styles.link} href="#">
								Dates
							</Link>
						</li>
					</section>
					<section className={styles.sectionMenu}>
						<li className={styles.li}>
							<Link className={styles.link} href="#">
								Partenaires
							</Link>
						</li>
						<li className={styles.li}>
							<Link className={styles.link} href="#">
								Messages
							</Link>
						</li>
						<li className={styles.li}>
							<button
								type="button"
								className={styles.link}
								onClick={() => handleClickMenu("photo")}
							>
								Photo
							</button>

							{openSubMenu === "photo" && (
								<ul className={styles.subMenu}>
									<Link href="#">{"Page daccueil"}</Link>
									<Link href="#">Compagnie</Link>
									<Link href="#">Spectacles</Link>
									<Link href="#">Mediations</Link>
								</ul>
							)}
						</li>
					</section>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenu}>
					X
				</button>
			</section>
		</>
	);
}
