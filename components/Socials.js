import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';
import styles from '../styles/Socials.module.scss';

const Socials = ({ color, position }) => {
    return (
        <ul className={styles.socials} style={{ position }}>
            <motion.li 
                className={styles.socialItem} 
                whileHover={{ scale: 1.2, rotate: '-5deg', opacity: 1}}
                whileTap={{ scale: 0.9, rotate: '5deg'}}
            >
                <a href="https://github.com/mart-ellis" target="_blank">
                    <FaInstagram size={18} color={ color === 'white' ? '#FAFAFA' : '#141414'}/>
                </a>
            </motion.li>
            <motion.li 
                className={styles.socialItem} 
                whileHover={{ scale: 1.2, rotate: '-5deg', opacity: 1}}
                whileTap={{ scale: 0.9, rotate: '10deg'}}
            >
                <a href="https://github.com/mart-ellis" target="_blank">
                    <FaTwitter size={18} color={ color === 'white' ? '#FAFAFA' : '#141414'}/>
                </a>
            </motion.li>
            <motion.li 
                className={styles.socialItem} 
                whileHover={{ scale: 1.2, rotate: '-5deg', opacity: 1}}
                whileTap={{ scale: 0.9, rotate: '5deg'}}
            >
                <a href="https://github.com/mart-ellis" target="_blank">
                    <FaDribbble size={18} color={ color === 'white' ? '#FAFAFA' : '#141414'}/>
                </a>
            </motion.li>
            <motion.li 
                className={styles.socialItem} 
                whileHover={{ scale: 1.2, rotate: '-5deg', opacity: 1}}
                whileTap={{ scale: 0.9, rotate: '5deg'}}
            >
                <a href="https://github.com/mart-ellis" target="_blank">
                    <FaLinkedin size={18} color={ color === 'white' ? '#FAFAFA' : '#141414'}/>
                </a>
            </motion.li>
        </ul>
    );
}

export default Socials;
