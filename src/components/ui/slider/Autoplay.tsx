"use client";

import styles from "./autoplay.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { photo } from "@/assets/data/placeholder-data-spectacle";
import type { PhotoDataProps } from "@/types/definitions";

const AutoPlay = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
		cssEase: "linear",
	};

	const photoCarousel = photo.filter((p) => p.service === "carousel_accueil");

	const sliderRef = useRef<Slider>(null);

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const previousSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<section className={styles.container}>
			<Slider ref={sliderRef} {...settings}>
				{photoCarousel.map((p) => (
					<figure key={p.id} className={styles.slide}>
						<Image
							className={styles.photoCarousel}
							src={p.photo}
							alt={p.service}
							fill={true}
						/>
					</figure>
				))}
			</Slider>
			<button className={styles.button} type="button" onClick={previousSlide}>
				<ChevronLeft size={72} />
			</button>
			<button className={styles.button} type="button" onClick={nextSlide}>
				<ChevronRight size={72} />
			</button>
		</section>
	);
};

const AutoPlaySpec = (id: number) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};

	const handleClick = (src: string) => {
		window.open(src);
	};

	const photoCarousel: PhotoDataProps[] = photo.filter((p) => p.id_spec === id);

	const sliderRef = useRef<Slider>(null);

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const previousSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div className={styles.containerSpec}>
			<button
				className={styles.buttonSpec}
				type="button"
				onClick={previousSlide}
			>
				<ChevronLeft size={72} />
			</button>
			<Slider ref={sliderRef} {...settings}>
				{photoCarousel.map((p) => (
					<div key={p.id}>
						<div key={p.id} className={styles.slideSpec}>
							<Image
								className={styles.photoCarouselSpec}
								src={p.photo}
								alt={p.service}
								fill
								onClick={() => handleClick(p.photo)}
							/>
						</div>
					</div>
				))}
			</Slider>

			<button className={styles.buttonSpec} type="button" onClick={nextSlide}>
				<ChevronRight size={72} />
			</button>
		</div>
	);
};

const AutoPlayMed = (slug : string) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};

	const handleClick = (src: string) => {
		window.open(src);
	};

	const photoCarousel: PhotoDataProps[] = photo.filter((p) => p.slug === slug);

	const sliderRef = useRef<Slider>(null);

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const previousSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div className={styles.containerSpec}>
			{photoCarousel.length > 0 && (
				<button
					className={styles.buttonSpec}
					type="button"
					onClick={previousSlide}
				>
					<ChevronLeft size={72} />
				</button>
			)}
			<Slider ref={sliderRef} {...settings}>
				{photoCarousel.map((p) => (
					<div key={p.id}>
						<div key={p.id} className={styles.slideSpec}>
							<Image
								className={styles.photoCarouselSpec}
								src={p.photo}
								alt={p.service}
								fill
								onClick={() => handleClick(p.photo)}
							/>
						</div>
					</div>
				))}
			</Slider>
			{photoCarousel.length > 0 && (
				<button className={styles.buttonSpec} type="button" onClick={nextSlide}>
					<ChevronRight size={72} />
				</button>
			)}
		</div>
	);
};

export { AutoPlay, AutoPlaySpec, AutoPlayMed };
