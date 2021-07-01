import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { motion } from 'framer-motion';

const easing = [.6, -.05, .01, .99]

const fadeInUp = {
    initial: {
        y: 20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: .1
        }
    }
}

const Header = () => {

    const NavItems = [
        { name: 'Home'},
        { name: 'About'},
        { name: 'Team'},
        { name: 'Contact'},
    ]

    return (
        <motion.header
            initial="initial"
            animate="animate"
            className={styles.header}
        >
            <motion.ul 
                variants={stagger}
                className={styles.nav}>
                {NavItems.map((navItem, i) => {
                    return (
                        <motion.li 
                            whileHover={{scale: 1.05}}
                            whileTap={{ scale: 0.95}}
                            variants={fadeInUp}
                            key={navItem.name}>
                                <a>{navItem.name}</a>
                        </motion.li>  
                    )  
                }
                )}   
            </motion.ul>
        </motion.header>
    );
}

export default Header;