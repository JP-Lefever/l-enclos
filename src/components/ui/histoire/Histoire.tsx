import Markdown from "react-markdown";
import styles from "./histoire.module.css";
import { compagnie } from "@/lib/placeholder-data";

export default function Histoire() {
	return (
		<>
			<section className={styles.section}>
				<article className={styles.articleH1}>
					<h1 className={styles.h1}>
						<span className={styles.span}>La compagnie</span> l'enclos
					</h1>
				</article>

				<article className={styles.paragraph}>
					<Markdown>{compagnie.about}</Markdown>
				</article>
			</section>
		</>
	);
}
