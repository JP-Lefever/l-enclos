"use client";

import styles from "./detailMediation.module.css";
import Image from "next/image";
import type { InterventionProps, MediationProps } from "@/types/definitions";

import Markdown from "react-markdown";
import { intervention } from "@/assets/data/placeholder-data-mediation";
import { ChevronRight } from "lucide-react";
import { AutoPlayMed } from "@/components/ui/slider/Autoplay";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import {notFound} from "next/navigation";

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

	return (
		<>

				<ScrollAnimation className={styles.articleInfo}>
					<article className={styles.article}>
					<h2 className={styles.h2}>{data.name}</h2>
					<h2 className={styles.h3title}>{data.title}</h2>
					<h3 className={styles.h3}>{data.type}</h3>
					<h3 className={styles.h3}>Public : {data.public}</h3>
					<h3 className={styles.h3}>Durée : {data.duration}</h3>
					<h3 className={styles.h3}>Theme : {data.theme}</h3>

					</article>
						<ScrollAnimation2 >
							<figure className={styles.imageWrapper}>
							<Image
								className={styles.imagePres}
								src={data.photoPres}
								alt={data.title}
								fill={true}
							/>
							</figure>
						</ScrollAnimation2>
				</ScrollAnimation>

			<section className={styles.sectionPres}>
				<ScrollAnimation>
					<figure className={styles.imagePresWrapper}>
					<Image
						className={styles.imageSpec}
						src={data.photoDate}
						alt="Affiche spectacle"
						fill={true}
					/>
					</figure>
				</ScrollAnimation>
					<ScrollAnimation2>
				<article className={styles.resume}>
						<h2 className={styles.h2Pres}>{"LE PROPOS"}</h2>
						<article className={styles.divResume}>
							<Markdown>{data.pres}</Markdown>
						</article>
				</article>
					</ScrollAnimation2>
			</section>
			<article className={styles.organisation}>
				<h2 className={styles.h2Orga}>Organisation</h2>
				<h3 className={styles.h3Deroul}>{data.organisation}</h3>
				<article className={styles.articleOrga}>
					<ScrollAnimation>
						<h3 className={styles.h3Orga}>
							<Markdown>{data.first}</Markdown>
						</h3>

						<span className={styles.p}>
							<Markdown>{data.presFirst}</Markdown>
						</span>
					</ScrollAnimation>

					<ScrollAnimation2 className={styles.divDistrib}>
						<h3 className={styles.h3Orga}>
							<Markdown>{data.second}</Markdown>
						</h3>
						<span className={styles.p}>
							<Markdown>{data.presSecond}</Markdown>
						</span>
					</ScrollAnimation2>
					{data.third && (
						<ScrollAnimation className={styles.divDistrib}>
							<h3 className={styles.h3Orga}>
								<Markdown>{data.third}</Markdown>
							</h3>
							<span className={styles.pDist}>
								<Markdown>{data.presThird}</Markdown>
							</span>
						</ScrollAnimation>
					)}
					{data.fourth && (
						<ScrollAnimation2 className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Orga}>
									<Markdown>{data.fourth}</Markdown>
								</h3>
								<span className={styles.pDist}>
									<Markdown>{data.presFourth}</Markdown>
								</span>
							</>
						</ScrollAnimation2>
					)}

					<ScrollAnimation className={styles.divDistrib}>
						<>
							<h3 className={styles.h3Orga}>
								<Markdown>{data.final}</Markdown>
							</h3>
							<span className={styles.pDist}>
								<Markdown>{data.presFinal}</Markdown>
							</span>
						</>
					</ScrollAnimation>

					{data.material && (
						<ScrollAnimation2 className={styles.divDistrib}>
							<h3 className={styles.h3Orga}>
								{"Matériel fourni par la compagnie L'Enclos : "}
							</h3>
							{data.material.map((d) => (
								<p key={d} className={styles.pDist}>
									{d}
								</p>
							))}
						</ScrollAnimation2>
					)}
				</article>
			</article>
			{data.extract && (
				<section className={styles.sectionExtract}>
					<ScrollAnimation>
						<Image
							className={styles.imageExtract}
							src={data.photoSeance}
							alt="photo d'enfants jouant des personnages "
							width={1080}
							height={860}
						/>
					</ScrollAnimation>
					<ScrollAnimation2 className={styles.extract}>
						<h2 className={styles.h2Extract}>{data.extract}</h2>
						<article className={styles.divExtract}>
							<Markdown>{data.textExtract}</Markdown>
						</article>
					</ScrollAnimation2>
				</section>
			)}

			<section className={styles.carousel}>{slider}</section>

			<section className={styles.divThanks}>
				<ScrollAnimation className={styles.sectionThanks}>
					<h2 className={styles.h2Thanks}>Remerciement</h2>
					<article className={styles.articleThanks}>
						<p className={styles.pThanks}> {data.thanks}</p>
					</article>
				</ScrollAnimation>
				<ScrollAnimation2 className={styles.sectionInter}>
					<h2 className={styles.h2Inter}>Interventions</h2>
					<article>
						{dataInter.map((i) => (
							<article className={styles.articleInter} key={i.id}>
								<h3>{i.date}</h3>
								<p className={styles.pInter}>
									<ChevronRight />
									{i.info}
								</p>
							</article>
						))}
					</article>
				</ScrollAnimation2>
			</section>
		</>
	);
}
