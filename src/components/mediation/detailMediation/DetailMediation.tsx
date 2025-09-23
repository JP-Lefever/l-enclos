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
		<section className={styles.section}>
			<section className={styles.sectionHead}>
				<ScrollAnimation className={styles.articleInfo}>
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
						<article className={styles.divHead}>
							<div>
								<h2 className={styles.h2}>{data.type} : {data.name} </h2>
								<h2 className={styles.h2Title}>{data.title}</h2>
							</div>
							<article className={styles.subArticle}>
								<div>
									<h3 className={styles.h3}>{"Public"}</h3>
									<p>{data.public}</p>
								</div>
								<div>
									<h3 className={styles.h3}>{"Durée"}</h3>
									<p>{data.duration}</p>
								</div>
								<div>
									<h3 className={styles.h3}>{"Theme"}</h3>
									<p>{data.theme}</p>
								</div>
							</article>
							<ScrollAnimation2 className={styles.sectionInter}>
								<h2 className={styles.h2Inter}>Interventions</h2>
								<article className={styles.articleInter}>
									{dataInter.map((i) => (
										<article  key={i.id}>
											<h3 className={styles.h3}>{i.date}</h3>
											<p className={styles.pInter}>{i.info}</p>
										</article>
									))}
								</article>
								<ScrollAnimation className={styles.sectionInter}>
									<h2 className={styles.h2Inter}>Remerciement</h2>
									<article className={styles.articleThanks}>
										<p className={styles.pThanks}> {data.thanks}</p>
									</article>
								</ScrollAnimation>
							</ScrollAnimation2>
						</article>
				</ScrollAnimation>
			</section>
			<section className={styles.sectionPres}>
					<ScrollAnimation2 className={styles.resume}>
						<article className={styles.divResume}>
							<h2 className={styles.h2Pres}>{"LE PROPOS"}</h2>
							<Markdown>{data.pres}</Markdown>
						</article>
						{data.extract && (
							<article className={styles.divResume}>
								<h2 className={styles.h2Pres}>{data.extract}</h2>
								<h3 className={styles.h3Extract}>{data.extractName}</h3>
								<Markdown>{data.textExtract}</Markdown>
							</article>


						)}
					</ScrollAnimation2>
			</section>
			<section className={styles.organisation}>
				<h2 className={styles.h2Pres}>Déroulement</h2>

				<article className={styles.articleOrga}>
					<ScrollAnimation className={styles.divDistrib}>
						<h3 className={styles.h3Orga}>
							<Markdown>{data.first}</Markdown>
						</h3>

						<span className={styles.p}>
							<Markdown>{data.presFirst}</Markdown>
						</span>
					</ScrollAnimation>

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
					{data.second && (
						<ScrollAnimation2 className={styles.divDistrib}>
							<h3 className={styles.h3Orga}>
								<Markdown>{data.second}</Markdown>
							</h3>
							<span className={styles.p}>
								<Markdown>{data.presSecond}</Markdown>
							</span>
						</ScrollAnimation2>
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
					{data.final && (
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
					)}

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
			</section>


			<section className={styles.carousel}>{slider}</section>


		</section>
	);
}
