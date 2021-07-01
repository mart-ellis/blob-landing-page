import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/Profile.module.scss'

const Profile = ({ profile }) => {
    const { name, job, imgSlug } = profile;

    return (
        <li className={styles.profileContainer}>
            <img layout className={styles.profileImage} src={imgSlug}></img>
            <div className={styles.nameAndtitle}>
                <h1 className={styles.profileName}>{name}</h1>
                <p className={styles.profileJob}>{job}</p>
            </div>
        </li>
    );
}

export default Profile;
