import { authors } from '$lib/data/authors';
import type { Author } from '$lib/types';

// Date Formatter
export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

// Author Formatter
export function formatAuthor(author_slug: string): Author | undefined {
	return authors.find((author) => author.slug === author_slug);
}

// Category Formatter
export function formatCategory(category: string): string {
	return category.replace('-', ' ');
}
