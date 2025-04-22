export type photoHomePage = {
	photoCarousel1: string;
	photoCarousel2: string;
	photoCarousel3: string;
	photoCarousel4: string;
	photoCompagnie: string;
	photoSpectacle: string;
	photoMediation: string;
};

export type photoCompagnieProps = {
	photoCompagnie: string;
};

export type partnairProps = {
	partnair: string;
	name: string;
	id: string;
};

export type creationProps = {
	title: string;
	age: string;
	duration: string;
	resume: string;
	author: string;
	interpretation: string;
	music: string;
	illustration: string;
	poster: string;
	video: string;
	light: string;
	assistant: string;
	jauge: string;
	plateau: string;
	regie: string;
	[key: `partnair${number}`]: string | undefined;
	posterPhoto: string;
	mainPhoto: string;
};
