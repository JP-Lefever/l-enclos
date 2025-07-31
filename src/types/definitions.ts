export type Result<T> = | {success : true, data: T} | {success : false, error : string};

export type SpectacleProps = {
	id: number;
	slug: string,
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
	slug : string;
	name: string;
};

export type cardDataProps = {
	id: number;
	slug: string;
	title: string;
	public: string;
	image_url: string;
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
	slug?: string;
	id_med?: number;
};

export type MediationProps = {
	id: number;
	slug: string;
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
	slug : string;
	date: string;
	info: string;
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
	isPassed: number ;
	spectacleId?: number;
}
export type ModifyDateProps={
	id: string;
	place :string;
	public: string;
	date : string;
	city : string;
	hour : string;
	is_passed:  number;
	slug?: string;
}

export type InterventionAdminProps = {
	id: number;
	year : string;
	label: string;
	isPassed : number;
	mediationId?: number;
}
export type ModifyImmersionProps = {
	id: string;
	year : string;
	label: string;
	is_passed : number;
	mediation_id: number;
}