"use client"
import Link from "next/link";
import styles from "./adminMenu.module.css";
import {useState} from "react";

export default function NavMenu({
	openMenu,
									closeMenuAction,
}: { openMenu: boolean; closeMenuAction: () => void }) {
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
							<div className={styles.divSubLink}>
							<Link className={styles.subLink} href="/admin/agenda/newDate" onClick={closeMenuAction}>Ajouter une date</Link>
							<Link className={styles.subLink} href="/admin/agenda/editDate" onClick={closeMenuAction}>Modifier une date</Link>
							</div>
						)}
					</li>

					<li className={styles.li}>
						<Link className={styles.link} href="/admin/messages" onClick={closeMenuAction}>
							Messages
						</Link>
					</li>
				</ul>
				<button className={styles.button} type="button" onClick={closeMenuAction}>
					X
				</button>
			</section>
		</>
	);
}
