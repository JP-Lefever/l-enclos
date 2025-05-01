"use client";

import Link from "next/link";
import styles from "./buttonSpec.module.css";
// import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { buttonSpec } from "@/lib/placeholder-data-spectacle";

export default function ButtonSpec() {
	const pathname = usePathname();
	return (
		<>
			<section className={styles.section}>
				{buttonSpec.map((b) => (
					<article
						key={b.id}
						className={clsx(styles.article, {
							[styles.isActive]: pathname === b.link,
						})}
					>
						<Link
							href={b.link}
							className={clsx(styles.button, {
								[styles.isActive]: pathname === b.link,
							})}
							type="button"
						>
							{/* <Image
								className={styles.image}
								src={b.img_src}
								width={128}
								height={84}
								alt={b.name}
							/> */}
							<p className={styles.text}>{b.name}</p>
						</Link>
					</article>
				))}
			</section>
		</>
	);
}
