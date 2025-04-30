"use client";

import styles from "./detailMediation.module.css";
import Image from "next/image";
import type { InterventionProps, MediationProps } from "@/lib/definitions";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "../animation/ScrollAnimation";
import Markdown from "react-markdown";
import { intervention } from "@/lib/placeholder-data";
import { ChevronRight } from "lucide-react";
import { AutoPlayMed } from "../slider/Autoplay";

export default function DetailMediation({
	mediation,
	id,
}: { mediation: MediationProps[]; id: string }) {
	const data = mediation.find((m) => m.id === Number(id));
	const dataInter: InterventionProps[] = intervention.filter(
		(i) => i.id_med === Number(id),
	);

	if (!data) {
		return <p>Projet Introuvable</p>;
	}

	const slider = AutoPlayMed(Number(id));

	return (
		<>
			<section className={styles.sectionInfo}>
				<ScrollAnimation className={styles.articleInfo}>
					<h2 className={styles.h2}>{data.name}</h2>
					<h2 className={styles.h3title}>{data.title}</h2>
					<article className={styles.article}>
						<div className={styles.div}>
							<h3 className={styles.h3}>{data.type}</h3>
							<h3 className={styles.h3}>Public : {data.public}</h3>
							<h3 className={styles.h3}>Durée : {data.duration}</h3>
							<h3 className={styles.h3}>Theme : {data.theme}</h3>
						</div>
						<ScrollAnimation2>
							<Image
								className={styles.imagePres}
								src={data.photoPres}
								alt={data.title}
								width={1080}
								height={860}
							/>
						</ScrollAnimation2>
					</article>
				</ScrollAnimation>
			</section>
			<section className={styles.sectionPres}>
				<ScrollAnimation className={styles.imagePresSpec}>
					<Image
						className={styles.imageSpec}
						src={data.photoDate}
						alt="Affiche spectacle"
						width={1080}
						height={860}
					/>
				</ScrollAnimation>
				<article className={styles.resume}>
					<ScrollAnimation2>
						<h2 className={styles.h2Pres}>{"LE PROPOS"}</h2>
						<article className={styles.divResume}>
							<Markdown>{data.pres}</Markdown>
						</article>
					</ScrollAnimation2>
				</article>
			</section>
			<ScrollAnimation className={styles.organisation}>
				<h2 className={styles.h2Orga}>Organisation</h2>
				<h3 className={styles.h3Deroul}>{data.organisation}</h3>
				<article className={styles.articleOrga}>
					<div>
						<h3 className={styles.h3Orga}>
							<Markdown>{data.first}</Markdown>
						</h3>

						<span className={styles.p}>
							<Markdown>{data.presFirst}</Markdown>
						</span>
					</div>

					<div className={styles.divDistrib}>
						<h3 className={styles.h3Orga}>
							<Markdown>{data.second}</Markdown>
						</h3>
						<span className={styles.p}>
							<Markdown>{data.presSecond}</Markdown>
						</span>
					</div>
					{data.third && (
						<div className={styles.divDistrib}>
							<h3 className={styles.h3Orga}>
								<Markdown>{data.third}</Markdown>
							</h3>
							<span className={styles.pDist}>
								<Markdown>{data.presThird}</Markdown>
							</span>
						</div>
					)}
					{data.fourth && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Orga}>
									<Markdown>{data.fourth}</Markdown>
								</h3>
								<span className={styles.pDist}>
									<Markdown>{data.presFourth}</Markdown>
								</span>
							</>
						</div>
					)}

					<div className={styles.divDistrib}>
						<>
							<h3 className={styles.h3Orga}>
								<Markdown>{data.final}</Markdown>
							</h3>
							<span className={styles.pDist}>
								<Markdown>{data.presFinal}</Markdown>
							</span>
						</>
					</div>

					{data.material && (
						<div className={styles.divDistrib}>
							<h3 className={styles.h3Orga}>
								{"Matériel fourni par la compagnie L'Enclos : "}
							</h3>
							{data.material.map((d) => (
								<p key={d} className={styles.pDist}>
									{d}
								</p>
							))}
						</div>
					)}
				</article>
			</ScrollAnimation>
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
							<div className={styles.articleInter} key={i.id}>
								<h3>{i.date}</h3>
								<p className={styles.pInter}>
									<ChevronRight />
									{i.info}
								</p>
							</div>
						))}
					</article>
				</ScrollAnimation2>
			</section>
		</>
	);
}
