/* eslint-disable react/no-unescaped-entities */

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

//Create function component card with props
const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full '>
			<motion.div
				variants={fadeIn('right ', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
				>
					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className=' text-white text-[20px] fon-bold text-center'>
						{title}{' '}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
			>
				With a strong background in software development, I possess extensive
				experience in C# and JavaScript. My expertise lies in utilizing
				frameworks such as React, Node.js, and Three.js to their full potential.
				As a fast learner, I thrive on collaborating closely with clients to
				develop effective, scalable, and user-friendly solutions that tackle
				real-world challenges. Let's join forces and transform your ideas into
				reality.
			</motion.p>
			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
