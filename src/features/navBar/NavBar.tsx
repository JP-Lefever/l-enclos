"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import styles from "./navBar.module.css";
import { createPortal } from "react-dom";
import NavMenu from "../../components/ui/menuNav/NavMenu";
import Link from "next/link";

export default function NavBar() {
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
							<NavMenu openMenu={openMenu} closeMenu={handleClickCloseMenu} />,
							document.body,
						)}
				</section>
				<section className={styles.image}>
					<Link href="/">
						<Image
							src="/images/logo.png"
							width={1280}
							height={760}
							alt="logo compagnie l'enclos"
							className={styles.logo}
						/>
					</Link>
				</section>
			</nav>
		</>
	);
}
