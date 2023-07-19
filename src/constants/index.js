import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	oxford,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	csharp,
	oou,
	design,
	developer,
	hoobank,
	geritch,
	gpt3,
	tripguide,
	threejs,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{ id: 'experience', title: 'Experience' },
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'C#',
		icon: csharp,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Education',
		company_name: 'Oxford Brookes',
		icon: oxford,
		iconBg: '#383E56',
		date: 'March 2008 - April 2009',
		points: [
			'Cert Credit Modular',
			'Modules studied included: Business Administration, Accounting, Statistics and Film Studies ',
		],
	},
	{
		title: 'Education',
		company_name: 'Olabisi Onabanjo University',
		icon: oou,
		iconBg: '#E6DEDD',
		date: 'Jan 1999 - Feb 2002',
		points: [
			'Diploma in Industrial and labour Relations (Merit)',
			'Modules studied included: Personnel Management, Labour Law, Research Methodology and Statistics   ',
		],
	},
	{
		title: 'Design Consultant',
		company_name: 'Company: Venture Photography',
		icon: design,
		iconBg: '#383E56',
		date: 'Jan 2011 - Jan 2012',
		points: [
			'Leading clients through their images and ensuring they had a positive experience during picture selection.',
			'Sales activities to promote and sell products.',
			'Phoning clients for various purposes, such as arranging appointments.',
			'Arranging appointments with clients for photo sessions or consultations.',
		],
	},
	{
		title: 'IT Developer',
		company_name: 'Company: Ageas Insurance Ltd',
		icon: developer,
		iconBg: '#E6DEDD',
		date: 'April 2012 - Present',
		points: [
			'My role in Ageas has changed over the years and this demonstrates my growth mind set',
			'Role: Customer Service Advisor [April 2012 - June 2014] ',
			'Role: Motor Claims Technical Advisor [June 2014 – September 2016]',
			'Role: Learning and Development Officer September [2016 - September 2020]',
			'Role: IT Developer [September 2020 - Present]',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Ralphael proved me wrong.',
		name: 'Alhaja Bakare',
		designation: 'CFO',
		company: 'Imam Travels',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Ralphael does.",
		name: 'Otunba Rotimi',
		designation: 'CEO',
		company: 'Royal Tosh',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Ralphael optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Dr Femi Tanni',
		designation: 'CTO',
		company: 'Medicare',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Social Media',
		description:
			'Immerse yourself in a comprehensive MERN social media application. Connect with friends, share thoughts through comments, like posts, and effortlessly manage your social circle.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/Afoghandi/socialMediaApp',
		live_code_link: 'https://main--sparkly-horse-c4b494.netlify.app/',
	},
	{
		name: 'HooBank',
		description:
			'This visually captivating page incorporates smooth scroll functionality, allowing seamless navigation between sections. By skillfully employing gradients, the page enhances the visual appeal and ensures that images truly stand out.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},

			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: hoobank,
		source_code_link: 'https://github.com/Afoghandi/ModernBank',
		live_code_link: 'https://transcendent-genie-00482d.netlify.app',
	},
	{
		name: 'GPT-3',
		description:
			'Immerse yourself in the brilliance of this fully responsive and captivating web application. Meticulously crafted with CSS, the application boasts seamless scrolling functionality, intensifying user engagement throughout the experience.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},

			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: gpt3,
		source_code_link: 'https://github.com/Afoghandi/RoyalTosh/tree/main',
		live_code_link: 'https://enchanting-platypus-3c1ea2.netlify.app',
	},

	{
		name: 'Geritch Kitchen',
		description: `Join us for an exceptional dining experience on this extraordinary static web page, meticulously crafted with React and CSS. Designed to be fully mobile-responsive, it adapts seamlessly to any device. Prepare for an unforgettable culinary journey!`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},

			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: geritch,
		source_code_link: 'https://github.com/Afoghandi/gerich',
		live_code_link: 'https://jazzy-brioche-d6e7ca.netlify.app',
	},
];

export { services, technologies, experiences, testimonials, projects };
