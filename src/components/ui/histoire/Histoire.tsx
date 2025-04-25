import Markdown from "react-markdown";
import styles from "./histoire.module.css";
import { compagnie } from "@/lib/placeholder-data";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "../animation/ScrollAnimation";

export default function Histoire() {
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation>
					<article className={styles.articleH1}>
						<h1 className={styles.h1}>
							<span className={styles.span}>La compagnie</span> l'enclos
						</h1>
					</article>
				</ScrollAnimation>
				<ScrollAnimation2>
					<article className={styles.paragraph}>
						<Markdown>{compagnie.about}</Markdown>
					</article>
				</ScrollAnimation2>
			</section>
		</>
	);
}
