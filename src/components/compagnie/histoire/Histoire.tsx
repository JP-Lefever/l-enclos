import Markdown from "react-markdown";
import styles from "./histoire.module.css";
import { compagnie } from "@/assets/data/placeholder-data-compagnie";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";

export default function Histoire() {
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation className={styles.articleH1}>
					<h1 className={styles.h1}>
						La compagnie {" l'enclos"}
					</h1>
				</ScrollAnimation>

				<ScrollAnimation2 className={styles.paragraph}>
					<Markdown>{compagnie.about}</Markdown>
				</ScrollAnimation2>
			</section>
		</>
	);
}
