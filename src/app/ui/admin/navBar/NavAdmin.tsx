"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import styles from "./navAdmin.module.css";
import { createPortal } from "react-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import Link from "next/link";

export default function NavAdmin() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClickOpenMenu = () => {
		setOpenMenu(!openMenu);
	};
	const handleClickCloseMenu = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<>
			<nav className={styles.nav}>
				<section>
					<Menu onClick={handleClickOpenMenu} size={48} />
					{openMenu &&
						createPortal(
							<AdminMenu
								openMenu={openMenu}
								closeMenu={handleClickCloseMenu}
							/>,
							document.body,
						)}
				</section>
				<section className={styles.image}>
					<Link href="/admin">
						<Image
							src="/images/logo.png"
							width={1280}
							height={760}
							alt={"logo compagnie l'enclos"}
							className={styles.logo}
						/>
					</Link>
				</section>
			</nav>
		</>
	);
}
