"use client";

import type { cardDataProps } from "@/types/definitions";
import styles from "./cardSpec.module.css";
import { cardData } from "@/assets/data/placeholder-data-spectacle";
import {
	ScrollAnimation3,
	ScrollAnimation4,
} from "@/components/ui/animation/ScrollAnimation";
import CardSpec from "@/features/spectacle/cardSpec/cardSpec";


export default function CardsSpec() {


	return (
		<>
			<main className={styles.main}>
				<ScrollAnimation3>
					<section className={styles.section}>
						{cardData.map((c: cardDataProps) => (
							<ScrollAnimation4 key={c.id} >

								<CardSpec data ={c}/>

							</ScrollAnimation4>
						))}
					</section>
				</ScrollAnimation3>
			</main>
		</>
	);
}
