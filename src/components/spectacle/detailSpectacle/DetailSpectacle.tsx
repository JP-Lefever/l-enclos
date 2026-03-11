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
import { AutoPlaySpec } from "@/components/ui/slider/Autoplay";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import {formatedDate} from "@/lib/helpers/formatedDate";
import {notFound} from "next/navigation";
import {useState} from "react";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";


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

	const [open, setOpen] = useState(false);

	const handleOpenInfo = ()=> {
		setOpen(!open);
	}

	if (!data) {
		notFound();
	}



	return (
		<>
			<section className={styles.page}>
				<TransitionLink href={"/spectacles"} className={styles.buttonBack}>{"Retour"}</TransitionLink>
				<header className={styles.sectionHead}>
					<article className={styles.head}>
						<h1 className={styles.h1}>{"La Compagnie L'Enclos"}</h1>
						<h2 className={styles.h2Title}>{data.title}</h2>
						{data.propos && (
							<>
								<article className={styles.propos}>
									<Markdown>{data.propos}</Markdown>
								</article>
							</>
						)}
					</article>
					<ScrollAnimation className={styles.articleInfo}>
						<article className={styles.story}>
							<Markdown>{data.resume}</Markdown>
						</article>
						<figure className={styles.imageWrapper}>
							<Image
								className={styles.imagePres}
								src={data.image_url}
								alt={data.title}
								fill={true}
							/>
						</figure>
					</ScrollAnimation>
				</header>

				<section>
					<article className={styles.articleCarousel}>{carousel}</article>
				</section>

				<ScrollAnimation2 className={styles.tech}>
					<article className={styles.title}>
						<h2 className={styles.h2Info}>{"Informations Techniques"}</h2>
					</article>
					<article className={styles.infoTech} >
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

						{!open &&
						<button className={styles.button} type={"button"} onClick={handleOpenInfo}>{"Voir plus +"}</button>
						}

						{open && (
							<>
							<div>
								<h3 className={styles.h3}>Jauge : </h3>
								<p className={styles.p}>{data.jauge}</p>
							</div>
							<div>
								<h3 className={styles.h3}>Plateau : </h3>
								<p className={styles.p}>{data.plateau}</p>
							</div>
							<div>
								<h3 className={styles.h3}>Régie : </h3>
								<p className={styles.p}> {data.regie}</p>
							</div>
							<div className={styles.divDistrib}>
								<h3 className={styles.h3}>Ecriture</h3>
								<p className={styles.p}>{data.writing}</p>
							</div>
							<div className={styles.divDistrib}>
								<h3 className={styles.h3}>Mise en scène</h3>
								<p className={styles.p}>{data.directedBy}</p>
							</div>


						{data.interpretation && (
							<div>
								<h3 className={styles.h3}>Interpretation</h3>
								<p className={styles.p}>{data.interpretation}</p>
							</div>
						)}
						<div>
							<h3 className={styles.h3}>Composition musicales</h3>
							<p className={styles.p}>{data.music}</p>
						</div>
						{data.illustration && (
							<div>
									<h3 className={styles.h3}>Illustration</h3>
									<p className={styles.p}>{data.illustration}</p>
							</div>
						)}
						{data.sceno && (
							<div>
									<h3 className={styles.h3}>Conception scenographique</h3>
									<p className={styles.p}>{data.sceno}</p>
							</div>
						)}
						{data.light && (
							<div>
									<h3 className={styles.h3}>Creation lumière</h3>
									<p className={styles.p}>{data.light}</p>
							</div>
						)}
						{data.video && (
							<div>
									<h3 className={styles.h3}>Vidéaste</h3>
									<p className={styles.p}>{data.video}</p>
							</div>
						)}
						{data.illustration && (
							<div>
									<h3 className={styles.h3}>
										Mise en page de la plaquette et affiche
									</h3>
									<p className={styles.p}>{data.illustration}</p>
							</div>
						)}
						<div>
							<h3 className={styles.h3}>Oeil exterieur</h3>
							<p className={styles.p}>{data.assistant}</p>
						</div>
							</>
						)}

					{open &&
						<button className={styles.button} type={"button"} onClick={handleOpenInfo}>{"Voir moins -"}</button>
					}
					</article>

				</ScrollAnimation2>

				<ScrollAnimation2 className={styles.sectionPartner}>
					<article className={styles.title}>
						<h2 className={styles.h2Info}>{"Production soutiens et résidences"}</h2>
					</article>
					<article  className={styles.articlePartner}>
						{partnairSpec.map((s) => (
								<p key={s.id} className={styles.h3}>{s.name}</p>
						))}
					</article>
				</ScrollAnimation2>


				<ScrollAnimation className={styles.sectionDate}>
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


			</section>
		</>
	);
}
