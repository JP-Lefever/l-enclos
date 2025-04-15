"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import styles from "./navBar.module.css";
import { createPortal } from "react-dom";
import NavMenu from "../menuNav/NavMenu";

export default function NavBar() {
	const [openMenu, setOpenMenu] = useState(false);
	const handleClickOpenMenu = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<>
			<nav className={styles.nav}>
				<section>
					<Menu onClick={handleClickOpenMenu} size={48} />
					{openMenu &&
						createPortal(
							<NavMenu
								openMenu={openMenu}
								closeMenu={() => {
									setOpenMenu(false);
								}}
							/>,
							document.body,
						)}
				</section>
				<section className={styles.image}>
					<Image
						src="/images/logo.png"
						width={1280}
						height={760}
						alt="logo compagnie l'enclos"
						className={styles.logo}
					/>
				</section>
			</nav>
		</>
	);
}
