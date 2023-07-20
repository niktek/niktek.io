import type { Author } from '$lib/types';

const exampleBio =
	'Le Bio';

export const authors: Author[] = [
	{
		id: 0,
		slug: 'niktek',
		name: 'Niktek',
		title: 'Code Abuser',
		profile_image:
			'/nikteklogoblack.png',
		bio: exampleBio,
		location: 'Houston, Texas',
		website: 'https://niktek.io',
		twitter: '',
		facebook: ''
	}
];
