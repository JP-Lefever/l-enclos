import Link from "next/link";
import styles from "./adminMenu.module.css";
import { useState } from "react";
export default function NavMenu({
	openMenu,
	closeMenu,
}: { openMenu: boolean; closeMenu: () => void }) {
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
					<li className={styles.li}>
						<Link className={styles.link} href="#">
							Dates
						</Link>
					</li>

					<li className={styles.li}>
						<Link className={styles.link} href="#">
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
