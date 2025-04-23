"use client";

import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

type ScrollAnimationType = {
	children: ReactNode;
};

export const ScrollAnimation = ({ children }: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });
	console.log(ref);
	const variants = {
		hidden: { opacity: 0, y: -20, x: -20 },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export const ScrollAnimation2 = ({ children }: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });
	console.log(ref);
	const variants = {
		hidden: { opacity: 0, y: 20, x: 20 },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};
