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
	id,
	dates,
	datesPassed,
}: { cardData: SpectacleProps[]; id: string, dates : ModifyDateProps[], datesPassed : ModifyDateProps[] }) {


	const data: SpectacleProps | undefined = cardData.find(
		(c) => c.id === Number(id),
	);

	const partnairSpec: Partnair[] = partnair.filter(
		(p) => p.id_spec === Number(id),
	);

	const dateSpec: ModifyDateProps[] = dates.filter(
		(d) => d.spectacle_id === Number(id),
	);

	const dateSpecOver: ModifyDateProps[] = datesPassed.filter(
		(p) => p.spectacle_id ===Number(id)
	);

	const carousel = AutoPlaySpec(Number(id));

	if (!data) {
		notFound();
	}
	return (
		<>

				<ScrollAnimation className={styles.articleInfo}>
					<h2 className={styles.h2}>{data.status}</h2>
					<h2 className={styles.h2Title}>{data.title}</h2>
					<article className={styles.subArticle}>
						<article className={styles.info}>
						<h3 className={styles.h3}>Thématique</h3>
						<p className={styles.p}>{data.theme}</p>
						<h3 className={styles.h3}>Age</h3>
						<p className={styles.p}>{data.public}</p>
						<h3 className={styles.h3}>Durée</h3>
						<p className={styles.p}>{data.duration}</p>
						</article>
						<ScrollAnimation2 >
							<figure className={styles.imageWrapper}>
							<Image
								className={styles.imagePres}
								src={data.image_spec}
								alt={data.title}
								fill={true}
							/>
							</figure>
						</ScrollAnimation2>
					</article>
				</ScrollAnimation>

			<ButtonsSpectaclePage/>

			<section className={styles.sectionPres}>
				<ScrollAnimation id="presentation"  className={styles.imagePresSpec}>
					<Image
						className={styles.imageSpec}
						src={data.image_url}
						alt="Affiche spectacle"
						width={1080}
						height={860}
					/>
				</ScrollAnimation>
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
			<section>
				<article className={styles.articleCarousel}>{carousel}</article>
			</section>
			<ScrollAnimation id="distribution"  className={styles.distribution}>
				<h2 className={styles.h2Dist}>DISTRIBUTION</h2>
				<article  className={styles.articleDistrib}>
					<article className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Ecriture</h3>
						<p className={styles.pDist}>{data.writing}</p>
					</article>
					<article className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Mise en scène</h3>
						<p className={styles.pDist}>{data.directedBy}</p>
					</article>
					{data.interpretation && (
						<article className={styles.divDistrib}>
							<h3 className={styles.h3Dist}>Interpretation</h3>
							<p className={styles.pDist}>{data.interpretation}</p>
						</article>
					)}
					<article className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Composition musicales</h3>
						<p className={styles.pDist}>{data.music}</p>
					</article>
					{data.illustration && (
						<article className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Illustration</h3>
								<p className={styles.pDist}>{data.illustration}</p>
							</>
						</article>
					)}
					{data.sceno && (
						<article className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Conception scenographique</h3>
								<p className={styles.pDist}>{data.sceno}</p>
							</>
						</article>
					)}
					{data.light && (
						<article className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Creation lumière</h3>
								<p className={styles.pDist}>{data.light}</p>
							</>
						</article>
					)}
					{data.video && (
						<article className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>Vidéaste</h3>
								<p className={styles.pDist}>{data.video}</p>
							</>
						</article>
					)}
					{data.illustration && (
						<article className={styles.divDistrib}>
							<>
								<h3 className={styles.h3Dist}>
									Mise en page de la plaquette et affiche
								</h3>
								<p className={styles.pDist}>{data.illustration}</p>
							</>
						</article>
					)}
					<article className={styles.divDistrib}>
						<h3 className={styles.h3Dist}>Oeil exterieur</h3>
						<p className={styles.pDist}>{data.assistant}</p>
					</article>
				</article>
			</ScrollAnimation>
			<section id="technique" className={styles.divTech}>
				<ScrollAnimation className={styles.sectionTech}>
					<h2 className={styles.h2Tech}>Technique</h2>
					<article className={styles.articleTech}>
						<h3 className={styles.h3Dist}>Jauge : </h3>
						<p className={styles.pDist}>{data.jauge}</p>
						<h3 className={styles.h3Dist}>Plateau : </h3>
						<p className={styles.pDist}>{data.plateau}</p>
						<h3 className={styles.h3Dist}>Régie : </h3>
						<p className={styles.pDist}> {data.regie}</p>
					</article>
				</ScrollAnimation>
				<ScrollAnimation2 id="partenaires" className={styles.sectionPartnair}>
					<h2 className={styles.h2Partnair}>Les partenaires</h2>
					<article  className={styles.articlePartnair}>
						{partnairSpec.map((s) => (
							<p className={styles.pPartnair} key={s.id}>
								<ChevronRight />
								{s.name}
							</p>
						))}
					</article>
				</ScrollAnimation2>
			</section>
			<ScrollAnimation id="dates"  className={styles.sectionDate}>
				<h2 className={styles.h2Date}>Les Dates</h2>
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
