import { writable } from 'svelte/store';

export const posts = writable([
	{
		avatar: "http://andrewlehman.me/placeholder-images/andrew1.jpg",
		username: "Andrew Lehman",
		imageSrc: "http://andrewlehman.me/placeholder-images/skyline.jpg",
		description: "Chicago has the best fog.",
		liked: false,
		comments: [],
	},
	{
		avatar: "http://andrewlehman.me/placeholder-images/andrew1.jpg",
		username: "Andrew Lehman",
		imageSrc: "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png",
		description: 'Welcome to Sveltegram, the Instagram clone that I made to learn <a href="https://svelte.dev/">Svelte</a>! There is no backend, this is just a demonstration of my frontend web development skills as well as some neat Svelte features. You can check out the source code at <a href="https://github.com/andlehma/sveltegram">this Github repository</a>. By the way, I\'m looking for a job in the Chicago area doing software development. I\'ve learned a lot of different technologies in full-stack web development as well as other sofware disciplines, and I just graduated from the University of Michigan with a degree in computer science.',
		liked: false,
		comments: [],
	}
]);

export const username = writable("Anonymous");