declare global {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	type Post = {
		title: string;
		slug: string;
		description: string;
		date: string;
		projectId: string;
		published: boolean;
		coverImage?: string;
		icon?: string;
		technologies?: string[];
		pinned?: boolean;
		dev?: boolean;
		previous: PostMeta;
		next: PostMeta;
	};

	type PostMeta = {
		title?: string;
		slug: string;
	}

	type ProjectType = {
		name: string;
		id: string;
		icon: string;
		description?: string;
		bonus?: string;
	};

	type FilterType<T> = {
		name: string;
		icon?: string;
		filterTarget: T;
	};

	type DnDMapData = {
		imgSrc: string;
		url?: string;
		name: string;
		description?: string;
	};

	type Points = [number, number][];

	type JSONValue = { [x: string]: string };

	type JSONArray = Array<JSONValue>;
}

export {};
