"use client";

import styles from "./detailMediation.module.css";
import Image from "next/image";
import type { InterventionProps, MediationProps } from "@/types/definitions";

import Markdown from "react-markdown";
import { intervention } from "@/assets/data/placeholder-data-mediation";
import { AutoPlayMed } from "@/components/ui/slider/Autoplay";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import {notFound} from "next/navigation";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";
import {formatedDate} from "@/lib/helpers/formatedDate";

export default function DetailMediation({
	mediation, slug,
}: { mediation: MediationProps[]; slug: string }) {


	const data = mediation.find((m) => m.slug === slug);
	const dataInter: InterventionProps[] = intervention.filter(
		(i) => i.slug === slug,
	);

	if (!data) {
		notFound();
	}

	const slider = AutoPlayMed(slug);

	console.log(dataInter)
	return (
		<section className={styles.page}>
			<TransitionLink href={"/mediation"} className={styles.buttonBack}>{"Retour"}</TransitionLink>
			<header className={styles.sectionHead}>
				<article className={styles.head}>
					<h1 className={styles.h1}>{"La Compagnie L'Enclos"}</h1>
					<h2 className={styles.h2Title}>{data.title}</h2>
					<article className={styles.propos}>
								<Markdown>{data.shortPres}</Markdown>
					</article>
				</article>
				<article className={styles.articleInfo}>
					<ScrollAnimation className={styles.story}>
						<Markdown>{data.pres}</Markdown>
					</ScrollAnimation>
					<ScrollAnimation2 className={styles.imageWrapper}>
						<Image
							className={styles.imagePres}
							src={data.photoPres}
							alt={data.title}
							fill={true}
						/>
					</ScrollAnimation2>
				</article>
			</header>

			<section className={styles.carousel}>
				<article className={styles.articleCarousel}>{slider}</article>
			</section>

			<section className={styles.section}>
				<ScrollAnimation2 className={styles.title}>
					<h2 className={styles.h2Info}>{"Informations générales"}</h2>
				</ScrollAnimation2>
				<ScrollAnimation className={styles.info}>
					<article>
						<h3 className={styles.h3}>Public</h3>
						<p className={styles.p}>{data.public}</p>
					</article>
					<article>
						<h3 className={styles.h3}>Durée</h3>
						<p className={styles.p}>{data.duration}</p>
					</article>
					<article>
						<h3 className={styles.h3}>Thème</h3>
						<p className={styles.p}>{data.theme}</p>
					</article>
				</ScrollAnimation>
			</section>

			<section className={styles.section}>
				<ScrollAnimation2 className={styles.title}>
					<h2 className={styles.h2Info}>{"Déroulement du cycle"}</h2>
				</ScrollAnimation2>
				<ScrollAnimation className={styles.info} >
					<article>
						<h3 className={styles.h3}>{data.first}</h3>
						<p className={styles.p}>{data.presFirst}</p>
					</article>
					<article>
						<h3 className={styles.h3}>{data.second}</h3>
						<p className={styles.p}>{data.presSecond}</p>
					</article>
					<article>
						<h3 className={styles.h3}>{data.third}</h3>
						<p className={styles.p}>{data.presThird}</p>
					</article>
					<article>
						<h3 className={styles.h3}>{data.fourth}</h3>
						<p className={styles.p}>{data.presFourth}</p>
					</article>
					<article>
						{data.material && (
							<>
							<h3 className={styles.h3}>{"Matériel fourni par la compagnie L'Enclos :"}</h3>
							{data.material.map((m,i) => (
								<ul key={i}>
									<li className={styles.p}>{m}</li>
								</ul>
							))}
							</>
						)}

					</article>
				</ScrollAnimation>
			</section>


			<section className={styles.section}>
				<ScrollAnimation2 className={styles.title}>
					<h2 className={styles.h2Info}>{"Interventions"}</h2>
				</ScrollAnimation2>
				<ScrollAnimation  className={styles.info}>
						{dataInter.map((m)=>(
							<article key={m.id}>
								<h3 className={styles.h3}>{m.date}</h3>
								<p className={styles.p}>{m.info}</p>
							</article>
						))}
				</ScrollAnimation>
			</section>
			<section className={styles.section}>
				<ScrollAnimation2 className={styles.title}>
					<h2 className={styles.h2Info}>{"Remerciements"}</h2>
				</ScrollAnimation2>
				<ScrollAnimation  className={styles.info}>

						<article>
							<h3 className={styles.h3}></h3>
							<p className={styles.p}>{data.thanks}</p>
						</article>
				</ScrollAnimation>
			</section>



		</section>
			);
}
