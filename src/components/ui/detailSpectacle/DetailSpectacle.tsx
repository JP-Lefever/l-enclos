"use client";
import styles from "./detailSpectacle.module.css";
import type {
	Partnair,
	PastSpectacleDateProps,
	SpectacleDateProps,
	SpectacleProps,
} from "@/lib/definitions";
import Image from "next/image";
import Markdown from "react-markdown";
import { partnair, date, datePassed } from "@/lib/placeholder-data";
import { ChevronRight } from "lucide-react";
import { AutoPlaySpec } from "../slider/Autoplay";

export default function DetailSpectacle({
	cardData,
	id,
}: { cardData: SpectacleProps[]; id: string }) {
	const data: SpectacleProps | undefined = cardData.find(
		(c) => c.id === Number(id),
	);

	const partnairSpec: Partnair[] = partnair.filter(
		(p) => p.id_spec === Number(id),
	);
	const dateSpec: SpectacleDateProps[] = date.filter(
		(p) => p.id_spec === Number(id),
	);
	const dateSpecOver: PastSpectacleDateProps[] = datePassed.filter(
		(p) => p.id_spec === Number(id),
	);

	const carousel = AutoPlaySpec(Number(id));

	if (!data) {
		return "Spectacle introuvable";
	}
	return (
		<>
			<section className={styles.sectionInfo}>
				<article className={styles.articleInfo}>
					<h2 className={styles.h2}>{data.title}</h2>
					<div className={styles.div}>
						<h3 className={styles.h3}>Résumé</h3>
						<p className={styles.p}>{data.shortResume}</p>
						<h3 className={styles.h3}>Age</h3>
						<p className={styles.p}>{data.public}</p>
						<h3 className={styles.h3}>Durée</h3>
						<p className={styles.p}>{data.duration}</p>
					</div>
				</article>
				<article className={styles.imageInfo}>
					<Image
						className={styles.imagePres}
						src={data.image_spec}
						alt={data.title}
						width={1080}
						height={860}
					/>
				</article>
			</section>

			<section className={styles.sectionPres}>
				<article className={styles.imagePresSpec}>
					<Image
						className={styles.imageSpec}
						src={data.image_url}
						alt=""
						width={1080}
						height={860}
					/>
				</article>
				<article className={styles.resume}>
					<h2 className={styles.h2Pres}>PRESENTATION</h2>
					<div className={styles.divResume}>
						<Markdown>{data.resume}</Markdown>
					</div>
				</article>
			</section>
			<section>
				<article className={styles.articleCarousel}>{carousel}</article>
			</section>
			<section className={styles.distribution}>
				<h2 className={styles.h2Dist}>DISTRIBUTION</h2>
				<article className={styles.articleDistrib}>
					<div className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Ecriture</h3>
						<p className={styles.pDist}>{data.writing}</p>
					</div>
					<div className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Mise en scène</h3>
						<p className={styles.pDist}>{data.directedBy}</p>
					</div>
					{data.interpretation && (
						<div className={styles.divDistrib}>
							<h3 className={styles.h3Dist}>Interpretation</h3>
							<p className={styles.pDist}>{data.interpretation}</p>
						</div>
					)}
					<div className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Composition musicales</h3>
						<p className={styles.pDist}>{data.music}</p>
					</div>
					{data.illustration && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Illustration</h3>
								<p className={styles.pDist}>{data.illustration}</p>
							</>
						</div>
					)}
					{data.sceno && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Conception scenographique</h3>
								<p className={styles.pDist}>{data.sceno}</p>
							</>
						</div>
					)}
					{data.light && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Creation lumière</h3>
								<p className={styles.pDist}>{data.light}</p>
							</>
						</div>
					)}
					{data.video && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Vidéaste</h3>
								<p className={styles.pDist}>{data.video}</p>
							</>
						</div>
					)}
					{data.illustration && (
						<div className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>
									Mise en page de la plaquette et affiche
								</h3>
								<p className={styles.pDist}>{data.illustration}</p>
							</>
						</div>
					)}
					<div className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Oeil exterieur</h3>
						<p className={styles.pDist}>{data.assistant}</p>
					</div>
				</article>
			</section>
			<div className={styles.divTech}>
				<section className={styles.sectionTech}>
					<h2 className={styles.h2Tech}>Technique</h2>
					<article className={styles.articleTech}>
						<h3 className={styles.h3Dist}>Jauge : </h3>
						<p className={styles.pDist}>{data.jauge}</p>
						<h3 className={styles.h3Dist}>Plateau : </h3>
						<p className={styles.pDist}>{data.plateau}</p>
						<h3 className={styles.h3Dist}>Régie : </h3>
						<p className={styles.pDist}> {data.regie}</p>
					</article>
				</section>
				<section className={styles.sectionPartnair}>
					<h2 className={styles.h2Partnair}>Les partenaires</h2>
					<article className={styles.articlePartnair}>
						{partnairSpec.map((s) => (
							<p className={styles.pPartnair} key={s.id}>
								<ChevronRight />
								{s.name}
							</p>
						))}
					</article>
				</section>
			</div>
			<section className={styles.sectionDate}>
				<h2 className={styles.h2Date}>Les Dates</h2>
				<section className={styles.articles}>
					<article className={styles.articleDate}>
						<h3 className={styles.h3Date}>A venir</h3>
						<div className={styles.divDate}>
							{dateSpec
								? dateSpec.map((d) => (
										<div key={d.id}>
											<h4 className={styles.h4Date}>{d.date}</h4>
											<p className={styles.pDate1}>{d.place}</p>
											<p className={styles.pDate2}>{d.info} </p>
											<p className={styles.pDate2}>{d.hour}</p>
										</div>
									))
								: ""}
						</div>
					</article>
					<article className={styles.articleDatePassed}>
						<h3 className={styles.h3Date}>Passées</h3>
						<div className={styles.divDatePass}>
							{dateSpecOver
								? dateSpecOver.map((d) => (
										<div key={d.id}>
											<h4>{d.place}</h4>
										</div>
									))
								: ""}
						</div>
					</article>
				</section>
			</section>
		</>
	);
}
