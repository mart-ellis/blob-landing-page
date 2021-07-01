import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.scss';
import { motion } from 'framer-motion';
import useWindowSize from '../utils/useWindowSize';

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

    const router = useRouter();
    const { width } = useWindowSize();

    const isMobile = width < 768

    let onAboutPage = router.route === '/about';

    const NavItems = [
        { name: 'Home', slug: '/'},
        { name: 'About', slug: '/about'},
        { name: 'Team', slug: '/team'},
        { name: 'Contact', slug: '/contact'},
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
                            <Link href={navItem.slug}>
                                <motion.a 
                                    initial={{ color: 'white' }}
                                    animate={{ color: !onAboutPage ? 'white' : onAboutPage && i < 2 ? 'white' : 'black' }} // color first two links white on about page due to split bg
                                >{navItem.name}</motion.a>
                            </Link>
                        </motion.li>  
                    )  
                }
                )}   

            </motion.ul>
        </motion.header>
    );
}

export default Header;