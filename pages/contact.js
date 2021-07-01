import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from '../styles/Contact.module.scss'

const container = {
    show: {
        transition: {
            staggerChildren: 0.4,
        }
    }
}

const child = {
    hidden: { opacity: 0, y: 100 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: {
            ease: [0.6,-0.5,0.01,0.9],
            duration: 0.8
    }}
}


const Contact = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <motion.div 
                className={styles.contentWrapper}
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <motion.h1
                    variants={child}
                >Think we can help your business grow? <br /> We are currently open to new projects!</motion.h1>
                <motion.p
                    variants={child}
                >Get in touch via email, phone or social media or pop in and see us 👋🏼</motion.p>
                <motion.div
                    variants={child}
                    className={styles.contactButtons}>
                    <motion.a
                        whileHover={{ 
                            scale: 1.1,
                            transition: { type: "spring", bounce: .4}
                        }}
                    >
                        <p>hello@blob.co.uk</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </motion.a>
                    <a>
                        <p>0161 123 4567</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
            
        </div>
    );
}

export default Contact;
