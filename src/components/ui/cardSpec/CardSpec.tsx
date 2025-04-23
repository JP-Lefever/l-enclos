"use client";

import type { cardDataProps } from "@/lib/definitions";
import styles from "./cardSpec.module.css";
import { cardData } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";

export default function CardSpec() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					{cardData.map((c: cardDataProps) => (
						<Link
							href={`/spectacles/${c.id}`}
							className={styles.article}
							key={c.id}
						>
							<p className={styles.p}>{c.public}</p>
							<figure className={styles.imageWrapper}>
								<Image
									className={styles.image}
									src={c.image_url}
									alt="Affiche spectacle"
									fill
								/>
							</figure>
							<h2 className={styles.h2}>{c.title}</h2>
						</Link>
					))}
				</section>
			</main>
		</>
	);
}
