import Link from "next/link";
import styles from "./presMediation.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";

export default function PresMediation() {
	return (
		<>
			<section className={styles.section}>
				<figure className={styles.figure}>
					<Image
						className={styles.image}
						src={generalesInformations[2].image}
						alt={generalesInformations[2].title}
						width={1080}
						height={860}
					/>
				</figure>

				<article className={styles.article}>
					<h1 className={styles.h1}>{generalesInformations[2].title}</h1>

						<p className={styles.paragraph}>
							{generalesInformations[2].paragraph}
						</p>
						<Link className={styles.link} href="/mediation">
							{generalesInformations[2].button}
						</Link>

				</article>
			</section>
		</>
	);
}
