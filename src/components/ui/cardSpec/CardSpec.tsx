"use client";

import type { cardDataProps } from "@/lib/definitions";
import styles from "./cardSpec.module.css";
import { cardData } from "@/lib/placeholder-data";
import Image from "next/image";

export default function CardSpec() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					{cardData.map((c: cardDataProps) => (
						<article className={styles.article} key={c.id}>
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
						</article>
					))}
				</section>
			</main>
		</>
	);
}
