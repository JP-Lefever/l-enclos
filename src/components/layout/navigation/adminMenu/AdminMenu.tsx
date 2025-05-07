"use client"
import Link from "next/link";
import styles from "./adminMenu.module.css";
import {useState} from "react";

export default function NavMenu({
	openMenu,
	closeMenu,
}: { openMenu: boolean; closeMenu: () => void }) {
	const [openMenuDate, setOpenMenuDate] = useState(false);
	const handleOpenMenu = ()=>setOpenMenuDate(!openMenuDate);

	return (
		<>
			<section
				className={`${styles.section} ${openMenu ? styles.isOpen : styles.isClose}`}
			>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<button type="button" className={styles.link} onClick={handleOpenMenu}>
							Dates
						</button>
						{openMenuDate && (
							<Link className={styles.subLink} href="/admin/agenda/newDate" onClick={closeMenu}>Ajouter une date</Link>
						)}
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
