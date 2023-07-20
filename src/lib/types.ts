import type { categories } from './data/categories';

// Authors
export type Author = {
	/** A unique author slug (ex: jane-doe), used within post frontmatter. */
	slug: string;
	/** A unique author ID (ex: 0, 1, 2, ...). */
	id: number;
	/** The full display name of the author. */
	name: string;
	/** The author's role or title. */
	title: string;
	/** A profile image for the author. */
	profile_image: string;
	/** The author's bio. */
	bio: string;
	/** Describe where the author resides (ex: Houston, TX). */
	location: string;
	/** The author's personal website URL. */
	website: string;
	/** The author's Twitter handle (ex: @janedoe) */
	twitter: string;
	/** The author's Facebook handle (ex: janedoe) */
	facebook: string;
};

// Categories
// https://steveholgado.com/typescript-types-from-arrays/
export type Categories = (typeof categories)[number];

// Post Frontmatter
export type Post = {
	/** The unique post ID (ex: my-custom-post), used as the post URL. */
	slug: string;
	/** Featured posts are shown at the top of the homepage (limit 4). */
	featured: boolean;
	/** The published state of the post. */
	published: boolean;
	/** The post title. */
	title: string;
	/** The post excerpt. */
	excerpt?: string;
	/** Assign the list of categories. */
	categories: Categories[];
	/** Provide the author slug to set the post author. */
	author_slug: string;
	/** The published timestamp (ex: '2023-6-21'). */
	date: string;
	/** Provide the featured image, shown at the top of the post. */
	feature_image: string;
	/** Provide the thumbnial image, shown post list views. */
	thumbnail_image: string;
	/** The total reading time (minutes). */
	reading_time: number;

	// SEO Examples ---
	// og_title: string;
	// og_description: string;
	// twitter_image: string;
	// twitter_title: string;
	// twitter_description: string;
	// meta_title: string;
	// meta_description: string;
	// email_subject: string;
	// feature_image_alt: string;
	// feature_image_caption: string;
};

// Social Links
export interface SocialLink {
	/** Provide the title. */
	title: string;
	/** Provide the url. */
	url: string;
	/** Provide the Font Awesome icon information. */
	icon: string;
	/** Provide the anchor target option. */
	target: string;
}
