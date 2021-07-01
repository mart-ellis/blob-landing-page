import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile'
import Socials from '../components/Socials';
import styles from '../styles/Team.module.scss';




const teamMembers = [
    {
        name: 'Tony Smith',
        job: 'Creative Director',
        imgSlug: '/teamMembers/tony.jpg',
        bgColor: '#7193EA',
    },
    {
        name: 'Grace Dent',
        job: 'Commercial Director',
        imgSlug: '/teamMembers/grace.jpg', 
        bgColor: '#F4ADE9'
    },
    {
        name: 'John Porter',
        job: 'Head of Finance',
        imgSlug: '/teamMembers/john.jpg', 
        bgColor: '#091B2B'
    },
    {
        name: 'Alhan Sharp',
        job: 'Team Leader',
        imgSlug: '/teamMembers/alhan.jpg',
        bgColor: '#FF760F',
    },
    {
        name: 'Steven Napolitano',
        job: 'Lead Web Developer',
        imgSlug: '/teamMembers/steven.jpg', 
        bgColor: '#92B798'
    },
    {
        name: 'Sally Gordon',
        job: 'Lead Graphic Designer',
        imgSlug: '/teamMembers/sally.jpg', 
        bgColor: '#137371'
    },
    {
        name: 'Ruby Bateman',
        job: 'Web Developer',
        imgSlug: '/teamMembers/ruby.jpg', 
        bgColor: '#F88B9E'
    },
    {
        name: 'Alex Hamilton',
        job: 'Graphic Designer',
        imgSlug: '/teamMembers/alex.jpg', 
        bgColor: '#F6623E'
    },

]

const sliderVariants = {
    hidden: { height: '0' },
    visible: { height: '100%' }
}

const textContainerVariants = {
    visible: {
        transition: {
          staggerChildren: 0.35
        }
      }
}

const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
}


const Team = () => {

    const [selectedProfile, setSelectedProfile] = useState(0)

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleProfileCycle = (direction) => {
        setIsTransitioning(true);

        setTimeout(() => {
            const atStart = selectedProfile === 0;
            const atEnd = selectedProfile === teamMembers.length-1;
    
            if (atEnd && direction === 'next') {
                setSelectedProfile(0)
            } else if (atStart && direction === 'prev') {
                setSelectedProfile(teamMembers.length-1)
            } else if (direction === 'next') {
                setSelectedProfile(prevState => prevState + 1)
            } else if (direction === 'prev') {
                setSelectedProfile(prevState => prevState - 1)
            }
        }, 600)

        setTimeout(() => {
            setIsTransitioning(false)
        }, 800)


    }

    return (
        <section className={styles.pageContainer}>
            <Header />
                <motion.h1 
                    className={styles.title}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{     
                        duration: 0.8,
                        ease: [0.6,-0.5,0.01,0.9]
                    }}
                    exit={{ x: 100, opacity: 0 }}
                >We'd be nothing without our wonderful team, learn all about them below ✨</motion.h1>
                <div className={styles.pageWrapper}>
                    <motion.div 
                        className={styles.left}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{     
                            duration: 0.8,
                            ease: [0.6,-0.5,0.01,0.9]
                        }}
                        exit={{ x: 100, opacity: 0 }}
                    >
                        <motion.div 
                            initial={{scale: 1}}
                            animate={{ scale: 1.05}}
                            transition={{ repeat: Infinity, repeatType: "reverse" , duration: 2 }}
                            className={styles.portrait} 
                            style={{ backgroundColor: teamMembers[selectedProfile].bgColor}}
                        >
                            <motion.div 
                                className={styles.portraitSlider}
                                animate={isTransitioning ? "visible" : "hidden" }
                                variants={sliderVariants}
                                transition={{ duration: .4 }}
                                style={{ backgroundColor: teamMembers[selectedProfile].bgColor}}
                            ></motion.div>
                            <img src={teamMembers[selectedProfile].imgSlug}></img>
                        </motion.div>
                    </motion.div>
                    <div className={styles.right}>
                        <motion.div className={styles.rightInner} 
                                variants={textContainerVariants}
                                initial="hidden"
                                animate={isTransitioning ? "hidden" : "visible" }
                                exit="hidden"
                        >
                            <motion.h1
                                variants={textVariants}
                            >{teamMembers[selectedProfile].name}</motion.h1>
                            <motion.p className={styles.jobTitle} style={{ color: teamMembers[selectedProfile].bgColor}}
                                variants={textVariants}
                            >{teamMembers[selectedProfile].job}</motion.p>
                            <motion.p className={styles.profileInfo}
                                variants={textVariants}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </motion.p>
                            <motion.p className={styles.profileInfo}
                                variants={textVariants}
                            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</motion.p>
                            <motion.div
                                variants={textVariants}
                            >
                                <Socials color="white" />
                            </motion.div>
                            <div className={styles.navButtons}>
                                <button onClick={() => {handleProfileCycle('prev')}}>PREV</button>
                                <button onClick={() => {handleProfileCycle('next')}}>NEXT</button>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className={styles.jobLink}>
                    <p>We're hiring 🚀</p>
                    <button className={styles.jobLink__button}>See Jobs</button>
                </div>
        </section>
    );
}

export default Team;
