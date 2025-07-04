import { defineCollection, z } from "astro:content"
import { file } from "astro/loaders";

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		desc: z.string(),
	}),
});

const bookReviewsCollection = defineCollection({
	loader: file("src/data/bookReviews.json"),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		author: z.string(),
	}),
})

export const collections = {
	blog: blogCollection,
	bookReviews: bookReviewsCollection
};
