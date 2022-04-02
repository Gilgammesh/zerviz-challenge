/*******************************************************************************************************/
// Creamos las interfaces de las noticias según la estructura de la página Hacker News //
/*******************************************************************************************************/
export interface HNew {
	created_at: string;
	title: string | null;
	url: string | null;
	author: string;
	points: number | null;
	story_text: string | null;
	comment_text: string;
	num_comments: string | null;
	story_id: number;
	story_title: string;
	story_url: string;
	parent_id: number;
	created_at_i: number;
	_tags: [string];
	objectID: string;
	_highlightResult: {
		author: {
			value: string;
			matchLevel: string;
			fullyHighlighted: boolean;
			matchedWords: [string];
		};
		comment_text: {
			value: string;
			matchLevel: string;
			matchedWords: [string];
		};
		story_title: {
			value: string;
			matchLevel: string;
			matchedWords: [string];
		};
		story_url: {
			value: string;
			matchLevel: string;
			matchedWords: [string];
		};
	};
}
