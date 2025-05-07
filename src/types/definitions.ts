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
	directedBy: string;
	sceno: string;
	regie: string;
	[key: `partnair${number}`]: string | undefined;
	posterPhoto: string;
	mainPhoto: string;
};

//FRONT
export type SpectacleProps = {
	id: number;
	status: string;
	title: string;
	public: string;
	duration: string;
	image_url: string;
	image_spec: string;
	writing: string;
	directedBy: string;
	interpretation?: string;
	music: string;
	illustration?: string;
	poster?: string;
	assistant: string;
	sceno?: string;
	light?: string;
	video?: string;
	theme: string;
	resume: string;
	propos?: string;
	jauge: string;
	plateau: string;
	regie: string;
};

export type Partnair = {
	id: number;
	id_spec: number;
	name: string;
};

export type cardDataProps = {
	id: number;
	title: string;
	public: string;
	image_url: string;
};

// A utiliser

export type buttonSpecProps = {
	id: number;
	name: string;
	link: string;
	img_src: string;
};

export type SpectacleDateProps = {
	id: number;
	id_spec: number;
	date: string;
	place: string;
	info: string;
	hour?: string;
};

export type PastSpectacleDateProps = {
	id: number;
	id_spec: number;
	place: string;
};

export type PhotoDataProps = {
	id: number;
	photo: string;
	service: string;
	id_spec?: number;
	id_med?: number;
};

export type MediationProps = {
	id: number;
	name: string;
	title: string;
	photoPres: string;
	photoSeance: string;
	photoDate: string;
	type: string;
	public: string;
	duration: string;
	theme: string;
	pres: string;
	organisation: string;
	first: string;
	presFirst: string;
	second: string;
	presSecond: string;
	third?: string;
	presThird?: string;
	fourth?: string;
	presFourth?: string;
	final: string;
	presFinal: string;
	material?: string[];
	extract?: string;
	textExtract?: string;
	thanks: string;
	credit?: string;
};

export type InterventionProps = {
	id: number;
	id_med: number;
	date: string;
	info: string;
};

export type CompagnieProps = {
	id: number;
	about: string;
};

export type ContactProps = {
	id:string;
	firstname: string;
	lastname: string;
	organism?: string;
	email: string;
	subject: string;
	date : string;
	message: string;

	is_treated : boolean;
};

export type ResultProps =
	| {
			success: true;
			message: string;
	  }
	| { message: string };

export type UsersProps = {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;

	role_id: number;
};

export type homePageProps = {
	id: number,
	title : string,
	image : string,
	paragraph : string,
	button : string,
}

export type DateProps={
	id: number;
	place :string;
	public: string;
	date : Date;
	city : string;
	hour : string;
	isPassed: number;
	spectacleId?: number;
}

export type InterventionAdminProps = {
	id: number;
	year : string;
	label: string;
	isPassed : number;
	mediationId?: number;
}