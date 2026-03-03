import { Quicksand, Montserrat } from "next/font/google";

export const paragraphFont = Quicksand({
	weight: "400",
	subsets: ["latin"],

	variable: "--font-paragraph",
});

export const titleFont = Montserrat({
	weight: ["400", "500","600","800"],
	subsets: ["latin"],

	variable: "--font-title",
});
