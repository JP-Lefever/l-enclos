"use client";

import type { cardDataProps } from "@/types/definitions";
import styles from "./cardSpec.module.css";
import { cardData } from "@/assets/data/placeholder-data-spectacle";
import Image from "next/image";
import Link from "next/link";
import {
	ScrollAnimation3,
	ScrollAnimation4,
} from "@/components/ui/animation/ScrollAnimation";

export default function CardSpec() {
	return (
		<>
			<main className={styles.main}>
				<ScrollAnimation3>
					<section className={styles.section}>
						{cardData.map((c: cardDataProps) => (
							<ScrollAnimation4 key={c.id}>
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
							</ScrollAnimation4>
						))}
					</section>
				</ScrollAnimation3>
			</main>
		</>
	);
}
