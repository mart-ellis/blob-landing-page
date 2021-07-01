import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import styles from '../styles/About.module.scss';
import useWindowSize from '../utils/useWindowSize';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.2,
            delayChildren: 1
        }
    },
}

const child = {
    hidden: { opacity: 0, y: -60 },
    show: { opacity: 1, y: 0 }
}

const About = (props) => {
    const { width } = useWindowSize();

    const isMobile = width < 1200

    return (
        <motion.div 
            className={styles.pageContainer}
        >
            <Header />
            <motion.section 
                className={`${styles.container} ${styles.left}`}
            >
                <motion.div className={styles.revealer}
                    initial={ isMobile ? { height: '100vh'} : { width: '100vw' }}
                    animate={ isMobile ? { height: '100%'} : { width: '50%'} }
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        duration: 1.8,
                        delay: .4
                    }}
                    exit={ isMobile ? { height: '100vh'} : { width: '100vw' }}
                ></motion.div>
                <motion.div 
                    className={styles.leftContentWrapper}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <motion.h1
                        variants={child}
                        className={styles.title}
                    >We are Blob Digital.</motion.h1>

                    <motion.h3 
                        className={styles.subheading}
                        variants={child}
                    >At the end of the day, going forward, a <span className={styles.highlight}>new normal that has evolved</span> from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring</motion.h3>
                    <motion.h3 
                        className={styles.subheading}
                        variants={child}
                    >Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the <span className={styles.highlight}>overall value proposition.</span> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</motion.h3>
                    <motion.h3 
                        className={styles.subheading}
                        variants={child}
                    >User generated content in real-time will have multiple touchpoints for offshoring.</motion.h3>
                </motion.div>
            </motion.section>
            <motion.section 
                className={`${styles.container} ${styles.right}`}
                // initial={{ width: '0'}}
                // animate={{ width: '50%' }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1.8,
                    delay: .4
                }}
            >
                <motion.div className={styles.rightContentWrapper}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div 
                        className={styles.imageContainer}
                        variants={child}
                    >
                        <img src="/office.jpg"></img>
                    </motion.div>
                    <motion.div 
                        className={styles.cardContainer}
                        variants={child}
                    >
                        <div className={styles.card}>
                            <h2>Brand Strategy</h2>
                            <p>DMP print prospect analysis interactive content weighted pipeline tags account executive right of first refusal space only pay-per-click events meetings & webinars marketing automation & campaign/lead management talent management loss aversion. </p>
                            <p className={styles.list}>Research & analysis, brand positioning, brand personality, naming, storytelling, value proposition</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Content Creation</h2>
                            <p>Audience segmentation customer experience service & success ecommerce platforms & carts relationship business management double trigger cost per acquisition spin selling lead segmentation TechTarget page authority call for proposal low-hanging fruit attrition rate quota.</p>
                            <p className={styles.list}>Research & analysis, brand positioning, brand personality, naming, storytelling, value proposition</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Website Design</h2>
                            <p>Meetings, expositions, events, and convention call routing (or automatic call distributor) closing ratio double trigger webinar prospect analysis meetings, incentives, conventions, and exhibits meetings, expositions, events, and convention customer data platform CVENT prospect IPAAS cloud/data integration.</p>
                            <p className={styles.list}>Research & analysis, brand positioning, brand personality, naming, storytelling, value proposition</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Brand Indentity</h2>
                            <p>Print Splash lead management advocacy loyalty & referrals ecommerce marketing governance compliance and privacy keynote click-through rates key performance indictators Pardot HubSpot session pre registration installation & dismantle case study.</p>
                            <p className={styles.list}>Research & analysis, brand positioning, brand personality, naming, storytelling, value proposition</p>

                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.testimonials}
                        variants={child}
                    >
                        <h2>Dont just take our word for it, here's some of the great brands we've work with</h2>
                        <div className={styles.brandContainer}>
                            <div>
                                <img src="/brands/logo-12.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-1.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-16.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-7.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-8.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-17.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-10.svg" ></img>
                            </div>
                            <div>
                                <img src="/brands/logo-4.svg" ></img>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.section>
        </motion.div>
    );
}

export default About;
