"use client";
import styles from "./detailSpectacle.module.css";
import type {
	ModifyDateProps,
	Partnair,
	SpectacleProps,
} from "@/types/definitions";
import Image from "next/image";
import Markdown from "react-markdown";
import {partnair,} from "@/assets/data/placeholder-data-spectacle";
import { ChevronRight } from "lucide-react";
import { AutoPlaySpec } from "@/components/ui/slider/Autoplay";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import {formatedDate} from "@/lib/helpers/formatedDate";
import {notFound} from "next/navigation";
import {ButtonsSpectaclePage} from "@/components/ui/buttons/Buttons";

export default function DetailSpectacle({
	cardData,
	slug,
	dates,
	datesPassed,
}: { cardData: SpectacleProps[]; slug: string, dates : ModifyDateProps[], datesPassed : ModifyDateProps[] }) {


	const data: SpectacleProps | undefined = cardData.find(
		(c) => c.slug === slug,
	);

	const partnairSpec: Partnair[] = partnair.filter(
		(p) => p.slug === slug,
	);

	const dateSpec: ModifyDateProps[] = dates.filter(
		(d) => d.slug === slug,
	);

	const dateSpecOver: ModifyDateProps[] = datesPassed.filter(
		(p) => p.slug ===slug
	);

	const carousel = AutoPlaySpec(slug);

	if (!data) {
		notFound();
	}
	return (
		<>
			<section className={styles.sectionHead}>
				<ScrollAnimation className={styles.articleInfo}>
					<ScrollAnimation2 >
						<figure className={styles.imageWrapper}>
							<Image
								className={styles.imagePres}
								src={data.image_url}
								alt={data.title}
								fill={true}
							/>
						</figure>
					</ScrollAnimation2>
						<div className={styles.divHead}>
								<div>
									<h2 className={styles.h2}>{data.status}</h2>
									<h2 className={styles.h2Title}>{data.title}</h2>
								</div>
							<article className={styles.subArticle}>
								<div>
									<h3 className={styles.h3}>Thématique</h3>
									<p className={styles.p}>{data.theme}</p>
								</div>
								<div>
									<h3 className={styles.h3}>Age</h3>
									<p className={styles.p}>{data.public}</p>
								</div>
								<div>
									<h3 className={styles.h3}>Durée</h3>
									<p className={styles.p}>{data.duration}</p>
								</div>
								<div>
									<h3 className={styles.h3}>Jauge : </h3>
									<p className={styles.pDist}>{data.jauge}</p>
								</div>
								<div>
									<h3 className={styles.h3}>Plateau : </h3>
									<p className={styles.pDist}>{data.plateau}</p>
								</div>
								<div>
									<h3 className={styles.h3}>Régie : </h3>
									<p className={styles.pDist}> {data.regie}</p>
								</div>

							</article>

							<article  className={styles.articleDistrib}>
								<article className={styles.divDistrib}>
									<h3 className={styles.h3}>Ecriture</h3>
									<p className={styles.pDist}>{data.writing}</p>
								</article>
								<article className={styles.divDistrib}>
									<h3 className={styles.h3}>Mise en scène</h3>
									<p className={styles.pDist}>{data.directedBy}</p>
								</article>
								{data.interpretation && (
									<article className={styles.divDistrib}>
										<h3 className={styles.h3}>Interpretation</h3>
										<p className={styles.pDist}>{data.interpretation}</p>
									</article>
								)}
								<article className={styles.divDistrib}>
									<h3 className={styles.h3}>Composition musicales</h3>
									<p className={styles.pDist}>{data.music}</p>
								</article>
								{data.illustration && (
									<article className={styles.divDistrib}>
										<>
											<h3 className={styles.h3}>Illustration</h3>
											<p className={styles.pDist}>{data.illustration}</p>
										</>
									</article>
								)}
								{data.sceno && (
									<article className={styles.divDistrib}>
										<>
											<h3 className={styles.h3}>Conception scenographique</h3>
											<p className={styles.pDist}>{data.sceno}</p>
										</>
									</article>
								)}
								{data.light && (
									<article className={styles.divDistrib}>
										<>
											<h3 className={styles.h3}>Creation lumière</h3>
											<p className={styles.pDist}>{data.light}</p>
										</>
									</article>
								)}
								{data.video && (
									<article className={styles.divDistrib}>
										<>
											<h3 className={styles.h3}>Vidéaste</h3>
											<p className={styles.pDist}>{data.video}</p>
										</>
									</article>
								)}
								{data.illustration && (
									<article className={styles.divDistrib}>
										<>
											<h3 className={styles.h3}>
												Mise en page de la plaquette et affiche
											</h3>
											<p className={styles.pDist}>{data.illustration}</p>
										</>
									</article>
								)}
								<article className={styles.divDistrib}>
									<h3 className={styles.h3}>Oeil exterieur</h3>
									<p className={styles.pDist}>{data.assistant}</p>
								</article>
							</article>
						</div>
				</ScrollAnimation>
			</section>
			{/*<ButtonsSpectaclePage/>*/}

			<section className={styles.sectionPres}>
					<ScrollAnimation2 className={styles.resume}>
						<article className={styles.divResume}>
						<h2 className={styles.h2Pres}>{"L'HISTOIRE"}</h2>
							<Markdown>{data.resume}</Markdown>
						</article>
						{data.propos && (
							<>
								<article className={styles.divResume}>
								<h2 className={styles.h2Pres}>{"LE PROPOS"}</h2>
									<Markdown>{data.propos}</Markdown>
								</article>
							</>
						)}

					</ScrollAnimation2>

			</section>
			<section id="technique" className={styles.divTech}>
				<ScrollAnimation2 id="partenaires" className={styles.sectionPartner}>
					<h2 className={styles.h2Pres}>Les partenaires</h2>
					<article  className={styles.articlePartner}>
						{partnairSpec.map((s) => (
							<div key={s.id} className={styles.list}>
								<ChevronRight />
								<p className={styles.pPartnair} >
									{s.name}
								</p>
							</div>
						))}
					</article>
				</ScrollAnimation2>
			</section>
			<section>
				<article className={styles.articleCarousel}>{carousel}</article>
			</section>

			<ScrollAnimation id="dates"  className={styles.sectionDate}>
				<h2 className={styles.h2Date}>Dates</h2>
				<section className={styles.articles}>
					<ScrollAnimation className={styles.articleDate}>
						<h3 className={styles.h3Date}>A venir</h3>
						<article className={styles.divDate}>
							{dateSpec
								? dateSpec.map((d) => (
										<article className={styles.formatDate} key={d.id}>
											<h4 className={styles.h4Date}>{formatedDate(d.date)}</h4>
											<p className={styles.pDate3}>{d.place}</p>
											<p className={styles.pDate1}>{d.city} </p>
											<p className={styles.pDate2}>{d.hour}</p>
										</article>
									))
								: ""}
						</article>
					</ScrollAnimation>
					<ScrollAnimation2 className={styles.articleDatePassed}>
						<h3 className={styles.h3DatePass}>Passées</h3>
						<article className={styles.divDatePass}>
							{dateSpecOver
								? dateSpecOver.map((d) => (
										<article key={d.id}>
											<p>{d.place}</p>
										</article>
									))
								: ""}
						</article>
					</ScrollAnimation2>
				</section>
			</ScrollAnimation>
		</>
	);
}
