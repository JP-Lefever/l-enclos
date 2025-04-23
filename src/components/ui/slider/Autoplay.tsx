"use client";

import Slider from "react-slick";
import styles from "./autoplay.module.css";
import "slick-carousel/slick/slick.css";
import Image, { type StaticImageData } from "next/image";
import "slick-carousel/slick/slick-theme.css";
import photo0 from "../../../../public/images/affiche.png";
import photo1 from "../../../../public/images/j_ai_17_ans_scene.jpg";
import photo2 from "../../../../public/images/j_ai_17ans_pour_toujours.png";
import photo3 from "../../../../public/images/te_souviens_tu.jpg";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function AutoPlay() {
	const data: StaticImageData[] = [photo0, photo1, photo2, photo3];
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
		<div className={styles.container}>
			<Slider ref={sliderRef} {...settings}>
				{data.map((m) => (
					<div key={m.toString()}>
						<div key={m.toString()} className={styles.slide}>
							<Image
								className={styles.photoCarousel}
								src={m}
								alt={m.toString()}
								width={1080}
								height={860}
								layout="responsive"
							/>
						</div>
					</div>
				))}
			</Slider>
			<button className={styles.button} type="button" onClick={previousSlide}>
				<ChevronLeft size={72} />
			</button>
			<button className={styles.button} type="button" onClick={nextSlide}>
				<ChevronRight size={72} />
			</button>
		</div>
	);
}
