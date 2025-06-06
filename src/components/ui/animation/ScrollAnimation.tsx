"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import { type ReactNode, useRef } from "react";

type ScrollAnimationType = {
	children: ReactNode;
	className?: string;
	id?: string;
};

export const ScrollAnimation = ({
	children,
	className,
	id,
}: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const variants = {
		hidden: { opacity: 0, y: -20, x: -20 },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			id={id}
			className={className}
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export const ScrollAnimation2 = ({
	children,
	className,
	id,
}: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const variants = {
		hidden: { opacity: 0, y: 20, x: 20 },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration: 2 } },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			className={className}
			id={id}
			animate={isInView ? "visible" : "hiden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export const ScrollAnimation3 = ({ children }: ScrollAnimationType) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export const ScrollAnimation4 = ({ children }: ScrollAnimationType) => {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return <motion.div variants={itemVariants}>{children}</motion.div>;
};
