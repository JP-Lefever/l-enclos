import Link from "next/link";
import styles from "./adminMenu.module.css";

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
					<li className={styles.li}>
						<Link className={styles.link} href="#">
							Dates
						</Link>
					</li>

					<li className={styles.li}>
						<Link className={styles.link} href="/admin/messages" onClick={closeMenu}>
							Messages
						</Link>
					</li>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenu}>
					X
				</button>
			</section>
		</>
	);
}
