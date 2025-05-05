import Link from "next/link";
import styles from "./presCompagnie.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";

export default function PresCompagnie() {
	return (
		<>
			<section className={styles.section}>
				<figure>
					<Image
						className={styles.image}
						src={generalesInformations[0].image}
						alt={generalesInformations[0].title}
						width={1080}
						height={860}
					/>
				</figure>

				<article>
					<h1 className={styles.h1}>
						{generalesInformations[0].title}
					</h1>
					<p className={styles.paragraph}>
						{generalesInformations[0].paragraph}
					</p>

					<Link className={styles.link} href="/compagnie">
						{generalesInformations[0].button}
					</Link>
				</article>
			</section>
		</>
	);
}
