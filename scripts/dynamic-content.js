const projectList = document.querySelector('#container--project-list');
const detailList = document.querySelector('#container--project-details');

const portfolioData = [
	{
		title: 'Yelp Camp',
		description:
			'Web App for finding, rating, and reviewing campgrounds. The site is dynamically generated using EJS, EJS Mate, and MongoDB. Flash is used for error and success messages. User input is validated using Joi, sanitize-html, and express-mongo-sanitize. Helmet is used for added security. User logins are implemented using passport and express-session for session data. Cloudinary is used for image storage and manipulations. Mapbox is used for custom interactive maps. The design is based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a>.',
		date: 'September 2021',
		siteUrl: 'https://damp-sierra-93991.herokuapp.com/',
		imgUrl: 'images/site-thumbs/yelpcamp.jpg',
		imgAlt: 'Yelp Camp',
		aria: 'yelp-camp--tab',
		lang_lib: [
			'html',
			'css',
			'bootstrap',
			'javascript',
			'node',
			'express',
			'ejs',
			'ejs-mate',
			'mongodb',
			'flash',
			'joi',
			'sanitize-html',
			'express-mongo-sanitize',
			'passport',
			'express-sessions',
			'mapbox',
			'cloudinary',
		],
	},
	{
		title: 'Space Tourism',
		description:
			'I approached implementing this site using Javascript to toggle content visibility instead of creating a new HTML document for sub-page content. The content change controls for each page are done using the ARIA tablist. As a result, the page is screen reader-friendly. Based on a design by Frontend Mentor.',
		date: 'December 2021',
		siteUrl: 'https://davidbdyer.github.io/space-tourism-website/',
		gitUrl: 'https://github.com/davidbdyer/space-tourism-website',
		imgUrl: 'images/site-thumbs/space-tourism.jpg',
		imgAlt: 'space tourism',
		aria: 'space-tourism--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'Pray Up',
		description: 'A Website I designed and implemented for Pray Up ministries. The site is fully responsive and includes Facebook metadata.',
		date: 'January 2021',
		siteUrl: 'https://prayuplife.com',
		imgUrl: 'images/site-thumbs/prayup.jpg',
		imgAlt: 'pray up site',
		gitUrl: 'https://github.com/davidbdyer/prayup_website',
		aria: 'pray-up--tab',
		lang_lib: ['html', 'css', 'javascript', 'php'],
	},
	{
		title: 'Movie App',
		description: `A simple movie lookup web app. I'm using the Javascript fetch API to get popular movies from themoviedb and display them. Search is also implemented. The web app is fully responsive and has Facebook metadata, an iOS theme, and an iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course. Instead of using display flex, I'm using display grid. I prefer grid to flex because the last row stays consistent with the rest of the rows.`,
		date: 'March 2022',
		siteUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/movie-app/',
		imgUrl: 'images/site-thumbs/movie-app.jpg',
		imgAlt: 'Movie App',
		aria: 'movie-app--tab',
		lang_lib: ['html', 'sass', 'javascript'],
	},
	{
		title: 'Tip Calculator',
		description:
			'Web app for calculating the tip and splitting the bill with your group. Tip Amount and Total never output NaN, null, or Infinity. The inputs only accept numbers. The tip selected is highlighted, including the custom tip. Based on a design by Frontend Mentor.',
		date: 'October 2021',
		siteUrl: 'https://davidbdyer.github.io/tip-calculator-app/',
		imgUrl: 'images/site-thumbs/tip_calculator.jpg',
		imgAlt: 'Tip Calculator App',
		gitUrl: 'https://github.com/davidbdyer/tip-calculator-app',
		aria: 'tip-calculator--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'Calculator',
		description: 'A Calculator web app. The site is fully responsive and includes an iOS icon. Based on a design by Frontend Mentor.',
		date: 'May 2021',
		siteUrl: 'https://davidbdyer.github.io/calculator-app-main/',
		imgUrl: 'images/site-thumbs/calculator.jpg',
		imgAlt: 'Calculator App',
		gitUrl: 'https://github.com/davidbdyer/calculator-app-main',
		aria: 'calculator--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'Dad Jokes',
		description: `I'm using the Javascript Fetch API to get dad jokes from icanhazdadjoke. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. If the returned text exceeds the available space, the text size automatically reduces. Based on a project from the "50 Projects In 50 Days" Udemy course.`,
		date: 'February 2022',
		siteUrl: 'https://davidbdyer.github.io/dad-jokes/',
		imgUrl: 'images/site-thumbs/dad-jokes.png',
		imgAlt: 'dad jokes',
		gitUrl: 'https://github.com/davidbdyer/dad-jokes',
		aria: 'dad-jokes--tab',
		lang_lib: ['html', 'css', 'javascript', 'fetch'],
	},
	{
		title: 'Github Profile Search',
		description: 'Search Github for a user and display their bio, stats, and 10 most recent repos. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'July 2022',
		siteUrl: 'https://davidbdyer.github.io/github-profile-search/',
		imgUrl: 'images/site-thumbs/github-profile-search.png',
		imgAlt: 'github profile search',
		gitUrl: 'https://github.com/davidbdyer/github-profile-search',
		aria: 'github-profile-search--tab',
		lang_lib: ['html', 'css', 'javascript', 'Axios'],
	},
	{
		title: 'Score Keeper',
		description:
			"Web App for keeping score of a ping pong game. The goal was to keep track of the score for the current game and a set of games. I also wanted the winner list to persist between site loads. The winner list is stored as a JSON array in the browser's local storage.",
		date: 'December 2021',
		siteUrl: 'https://davidbdyer.github.io/ping-pong_score_keeper/',
		gitUrl: 'https://github.com/davidbdyer/ping-pong_score_keeper',
		imgUrl: 'images/site-thumbs/ping-pong-score-keeper.jpg',
		imgAlt: 'ping pong score keeper',
		aria: 'score-keeper--tab',
		lang_lib: ['html', 'sass', 'javascript'],
	},
	{
		title: 'Museum of Candy',
		description:
			'A simple responsive single-page website I implemented. Design based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a> project.',
		date: 'May 2021',
		siteUrl: 'portfolio-sites/museum-of-candy/index.html',
		imgUrl: 'images/site-thumbs/museum-of-candy.jpg',
		imgAlt: 'museum of candy',
		aria: 'museum-of-candy--tab',
		lang_lib: ['html', 'css'],
	},
	// {
	// 	title: 'Derek Ancil Designs',
	// 	description: 'Website I implemented for desiger Derek Ancil.',
	// 	date: '2018',
	// 	siteUrl: 'http://derekancildesign.com/index.html',
	// 	imgUrl: 'images/site-thumbs/derek-ancil-design.jpg',
	// 	imgAlt: 'derek ancil design',
	// 	aria: 'derek-ancil-designs--tab',
	// 	lang_lib: ['html', 'css', 'javascript', 'php'],
	// },
	{
		title: 'Game Pad',
		description: 'A website I implemented and designed to showcase an app I designed for a UX class.',
		date: 'November 2017',
		siteUrl: 'https://davidbdyer.github.io/GamePad/',
		imgUrl: 'images/site-thumbs/gamepad.jpg',
		imgAlt: 'gamepad',
		gitUrl: 'https://github.com/davidbdyer/GamePad',
		aria: 'game-pad--tab',
		lang_lib: ['html', 'css'],
	},
	{
		title: 'Animated Nav',
		description:
			'The animation is done with CSS, and Javascript is used to toggle an active class on the nav element. The site is fully responsive, including an iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'January 2022',
		siteUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/animated-navigation/',
		imgUrl: 'images/site-thumbs/animated-nav.png',
		imgAlt: 'animated nav',
		aria: 'animated-nav--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'Drink Water',
		description:
			'A fun, web app for tracking daily water consumption goals. How many cups drank are stored in local storage, making it persistent between site reloads. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'March 2022',
		siteUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/drink-water/',
		imgUrl: 'images/site-thumbs/drink-water.png',
		imgAlt: 'drink water',
		aria: 'drink-water--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'KeyCode',
		description:
			'A simple web app for displaying useful data from a keypress event. The input field is necessary to bring up the keyboard on mobile devices. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'February 2022',
		siteUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/keycode/',
		imgUrl: 'images/site-thumbs/keycode.png',
		imgAlt: 'keycode',
		aria: 'keycode--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
	{
		title: 'Expanding Cards',
		description:
			'A simple expanding card-based menu. The site is fully responsive, has Facebook and Twitter metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'January 2022',
		siteUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/expanding-cards/',
		imgUrl: 'https://www.daviddyer.me/portfolio-sites/fifty-projects/expanding-cards/assets/icon.jpg',
		imgAlt: 'expanding cards',
		aria: 'expanding-cards--tab',
		lang_lib: ['html', 'sass', 'javascript'],
	},
	{
		title: 'Random Choice',
		description: 'Randomly picks a value from a comma-separated list entered into a textarea element. Based on a project from the "50 Projects In 50 Days" Udemy course.',
		date: 'February 2022',
		siteUrl: 'https://davidbdyer.github.io/random-choice/',
		imgUrl: 'images/site-thumbs/random-choice.png',
		imgAlt: 'random choice',
		gitUrl: 'https://github.com/davidbdyer/random-choice',
		aria: 'random-choice--tab',
		lang_lib: ['html', 'css', 'javascript'],
	},
];

// dynamically generate project section

const createProjectList = () => {
	for (let site in portfolioData) {
		// Create Card
		const card = document.createElement('div');
		card.classList.add('card');
		// test relocation of aria
		card.setAttribute('aria-controls', portfolioData[site].aria);
		card.setAttribute('role', 'tab');
		card.setAttribute('tabindex', '0');

		// Create Card Image
		const image = document.createElement('img');
		image.classList.add('card-img');
		image.src = portfolioData[site].imgUrl;
		image.setAttribute('aria-controls', portfolioData[site].aria);

		// Create Card Info Section
		const cardInfo = document.createElement('div');
		cardInfo.classList.add('card-info');

		// Create Care Title
		const title = document.createElement('button');
		title.classList.add('card-title');
		title.setAttribute('aria-controls', portfolioData[site].aria);
		title.setAttribute('role', 'tab');
		title.textContent = portfolioData[site].title;

		// Add Items to DOM
		projectList.appendChild(card);
		card.appendChild(image);
	}
};

// dynamically generate details section
const createDetailList = () => {
	for (let site in portfolioData) {
		// Create Project Details
		const projectDetail = document.createElement('article');
		projectDetail.classList.add('project-details');
		projectDetail.id = portfolioData[site].aria;
		projectDetail.setAttribute('role', 'tabpanel');
		projectDetail.setAttribute('hidden', true);
		projectDetail.innerHTML = `<svg class="close-ctrl detail-close-ctrl" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<g fill="#d0d6f9">
				<path d="m2.575.454 16.97 16.97-2.12 2.122-16.97-16.97 2.12-2.122z" />
				<path d="m.454 17.425 16.97-16.97 2.122 2.12-16.97 16.97-2.122-2.12z" />
			</g>
		</svg>`;

		// Create Title Container
		const titleGrp = document.createElement('div');
		titleGrp.classList.add('title-group');

		// Create Title
		const detailTitle = document.createElement('h2');
		detailTitle.textContent = portfolioData[site].title;

		// Create Project Date
		const detailDate = document.createElement('date');
		detailDate.textContent = portfolioData[site].date;

		// Create Project Body Container
		const detailBody = document.createElement('div');
		detailBody.classList.add('detail-body');

		// Create Project Description Paragraph
		const detailDescription = document.createElement('p');
		detailDescription.innerHTML = portfolioData[site].description;

		// Create Card Info Button Group
		const btnGroup = document.createElement('div');
		btnGroup.classList.add('btn-group');

		// Create Button
		const btnLink = document.createElement('button');
		btnLink.textContent = 'Site';

		// Create site URL
		const siteUrl = document.createElement('a');
		siteUrl.href = portfolioData[site].siteUrl;
		siteUrl.target = '_blank';
		siteUrl.rel = 'noreferrer noopener';

		// Create GitHub Button
		const btnGit = document.createElement('button');

		const gitLink = document.createElement('a');
		gitLink.href = portfolioData[site].gitUrl;
		gitLink.classList.add('btn-git');
		btnGit.innerHTML = `<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
			</svg>`;
		gitLink.target = '_blank';
		gitLink.rel = 'noreferrer noopener';

		// Create Language List
		const detailLangList = document.createElement('ul');

		// ---------------------------
		// ADD SECTION
		// ---------------------------

		// Add Elements to Project Details
		detailList.appendChild(projectDetail);
		projectDetail.appendChild(titleGrp);

		// Add Title Group
		titleGrp.appendChild(detailTitle);
		titleGrp.appendChild(detailDate);

		// Add Project detail Section
		projectDetail.appendChild(detailBody);
		detailBody.appendChild(detailDescription);

		// Add Links
		detailBody.appendChild(btnGroup);
		if (portfolioData[site].gitUrl) {
			btnGroup.appendChild(gitLink);
			gitLink.appendChild(btnGit);
		}
		btnGroup.appendChild(siteUrl);
		siteUrl.appendChild(btnLink);

		// Add Lang List
		detailBody.appendChild(detailLangList);

		for (let langLib in portfolioData[site].lang_lib) {
			const listItem = document.createElement('li');

			listItem.textContent = portfolioData[site].lang_lib[langLib];
			listItem.classList.add(portfolioData[site].lang_lib[langLib]);
			detailLangList.appendChild(listItem);
		}
	}
};

createProjectList();
createDetailList();
