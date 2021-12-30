const projectList = document.querySelector('#container--project-list');
const detailList = document.querySelector('#container--project-details')

const portfolioData = [{
		title: 'Score Keeper',
		discription: "Web App for keeping score of a ping pong game. The goal was to keep track of the score for the current game and a set of games. I also wanted the winner list to persist between site loads. The winner list is stored as a JSON array in the browser's local storage.",
		date: 'Dec 2021',
		siteUrl: 'https://davidbdeath.github.io/ping-pong_score_keeper/',
		gitUrl: 'https://github.com/davidbdeath/ping-pong_score_keeper',
		imgUrl: 'images/site-thumbs/ping-pong-score-keeper.jpg',
		imgAlt: 'ping pong score keeper',
		aria: 'score-keeper--tab',
		lang_lib: [
			'html',
			'sass',
			'javascript',
			'json'
		]
	},
	{
		title: 'Space Tourism',
		discription: "I approached implementing this site using Javascript to toggle content visibility instead of creating a new HTML document for sub-page content. The content change controls for each page are done using the ARIA tablist. As a result, the page is screen reader-friendly. Site design by Frontend Mentor.",
		date: 'Dec 2021',
		siteUrl: 'https://davidbdeath.github.io/space-tourism-website/',
		gitUrl: 'https://github.com/davidbdeath/space-tourism-website',
		imgUrl: 'images/site-thumbs/space-tourism.jpg',
		imgAlt: 'space tourism',
		aria: 'space-tourism--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Tip Calculator',
		discription: "Web app for splitting calculating the tip and splitting the bill with your group. Tip Amount and Total never output NaN, null, or Infinity. The inputs only accept numbers. The tip selected is highlighted, including the custom tip.",
		date: 'Oct 2021',
		siteUrl: 'https://davidbdeath.github.io/tip-calculator-app/',
		imgUrl: 'images/site-thumbs/tip_calculator.jpg',
		imgAlt: 'Tip Calculator App',
		gitUrl: 'https://github.com/davidbdeath/tip-calculator-app',
		aria: 'tip-calculator--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Yelp Camp',
		discription: 'Web App for finding, rating, and reviewing campgrounds. The site is dynamically generated using EJS, EJS Mate, and MongoDB. Flash is used for error and success messages. User input is validated using Joi, sanitize-html, and express-mongo-sanitize. Helmet is used for added security. User logins are implemented using passport and express-session for session data. Cloudinary is used for image storage and manipulations. Mapbox is used for custom interactive maps. The design is based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a>.',
		date: 'Sept 2021',
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
			'cloudinary'
		]
	},
	{
		title: 'Pray Up',
		discription: 'A Website I designed and implemented for Pray Up ministries. This site is a precursor for a much bigger social media platform.',
		date: 'Jan 2021',
		siteUrl: 'https://prayuplife.com',
		imgUrl: 'images/site-thumbs/prayup.jpg',
		imgAlt: 'pray up site thumbnail',
		gitUrl: 'https://github.com/davidbdeath/prayup_website',
		aria: 'pray-up--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Calculator',
		discription: 'Web app, implemented by me, designed by Frontend Mentor.',
		date: 'May 2021',
		siteUrl: 'https://davidbdeath.github.io/calculator-app-main/',
		imgUrl: 'images/site-thumbs/calculator.jpg',
		imgAlt: 'Calculator App',
		gitUrl: 'https://github.com/davidbdeath/calculator-app-main',
		aria: 'calculator--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Museum of Candy',
		discription: 'A simple responsive single-page website I implemented. Design based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a> project.',
		date: 'May 2021',
		siteUrl: 'portfolio_sites/museum_of_candy/index.html',
		imgUrl: 'images/site-thumbs/museum-of-candy.jpg',
		imgAlt: 'museum of candy',
		aria: 'museum-of-candy--tab',
		lang_lib: [
			'html',
			'css'
		]
	},
	{
		title: 'Derek Ancil Designs',
		discription: 'Website I implemented for desiger Derek Ancil.',
		date: '2018',
		siteUrl: 'http://derekancildesign.com/index.html',
		imgUrl: 'images/site-thumbs/derek_ancil_design.jpg',
		imgAlt: 'derek ancil design thumbnail',
		aria: 'derek-ancil-designs--tab',
		lang_lib: [
			'html',
			'css',
			'javascript',
			'php'
		]
	},
	{
		title: 'Game Pad',
		discription: 'Website I implemented and designed for an app I designed for UX class.',
		date: 'Nov 2017',
		siteUrl: 'portfolio_sites/GamePad/index.html',
		imgUrl: 'images/site-thumbs/gamepad.jpg',
		imgAlt: 'gamepad thumbnail',
		gitUrl: 'https://github.com/davidbdeath/GamePad',
		aria: 'game-pad--tab',
		lang_lib: [
			'html',
			'css'
		]
	}
]


// dynamically generate project section

const createProjectList = () => {
	for (let site in portfolioData) {

		const card = document.createElement('div');
		card.classList.add('card');

		const image = document.createElement('img');
		image.classList.add('card-img');
		image.src = portfolioData[site].imgUrl;

		const cardInfo = document.createElement('div')
		cardInfo.classList.add('card-info');

		const title = document.createElement('button');
		title.classList.add('card-title');
		title.setAttribute('aria-controls', portfolioData[site].aria);
		title.setAttribute('role', 'tab');
		title.textContent = portfolioData[site].title;

		const btnGroup = document.createElement('div')
		btnGroup.classList.add('btn-group');

		const btnLink = document.createElement('button');
		btnLink.textContent = 'Link';

		const siteUrl = document.createElement('a');
		siteUrl.href = portfolioData[site].siteUrl;
		siteUrl.target = '_blank';
		siteUrl.rel = 'noreferrer noopener';

		const btnGit = document.createElement('button');

		const gitLink = document.createElement('a');
		gitLink.href = portfolioData[site].gitUrl;
		gitLink.classList.add('btn-git');
		btnGit.innerHTML = `<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
			  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
			</svg>`
		gitLink.target = '_blank';
		gitLink.rel = 'noreferrer noopener';

		// const date = document.createElement('div');
		// date.classList.add('text-muted');
		// date.textContent = portfolioData[site].date;

		projectList.appendChild(card);
		card.appendChild(image);
		card.appendChild(cardInfo);
		cardInfo.appendChild(title);
		cardInfo.appendChild(btnGroup);
		btnGroup.appendChild(siteUrl);
		siteUrl.appendChild(btnLink);
		if (portfolioData[site].gitUrl) {
			btnGroup.appendChild(gitLink);
			gitLink.appendChild(btnGit);
		}
	}
}


// dynamically generate details section

const createDetailList = () => {
	for (let site in portfolioData) {

		const projectDetail = document.createElement('article');
		projectDetail.classList.add('project-details');
		projectDetail.id = portfolioData[site].aria;
		projectDetail.setAttribute('role', 'tabpanel');
		projectDetail.setAttribute("hidden", true);
		projectDetail.innerHTML = `<svg class="close-ctrl detail-close-ctrl" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<g fill="#d0d6f9">
				<path d="m2.575.454 16.97 16.97-2.12 2.122-16.97-16.97 2.12-2.122z" />
				<path d="m.454 17.425 16.97-16.97 2.122 2.12-16.97 16.97-2.122-2.12z" />
			</g>
		</svg>`

		const titleGrp = document.createElement('div');
		titleGrp.classList.add('title-group');

		const detailTitle = document.createElement('h2');
		detailTitle.textContent = portfolioData[site].title;

		const detailDate = document.createElement('date');
		detailDate.textContent = portfolioData[site].date;

		const detailBody = document.createElement('div');
		detailBody.classList.add('detail-body');

		const detailDiscription = document.createElement('p');
		detailDiscription.innerHTML = portfolioData[site].discription;

		const detailLangList = document.createElement('ul');

		detailList.appendChild(projectDetail);
		projectDetail.appendChild(titleGrp);
		titleGrp.appendChild(detailTitle);
		titleGrp.appendChild(detailDate);

		projectDetail.appendChild(detailBody);

		detailBody.appendChild(detailDiscription);
		detailBody.appendChild(detailLangList);

		for (let langLib in portfolioData[site].lang_lib) {
			const listItem = document.createElement('li');

			// listItem.innerHTML = portfolioData[site].lang_lib[langLib];
			listItem.textContent = portfolioData[site].lang_lib[langLib];
			listItem.classList.add(portfolioData[site].lang_lib[langLib]);
			detailLangList.appendChild(listItem);
		}
	}
}

createProjectList();
createDetailList();