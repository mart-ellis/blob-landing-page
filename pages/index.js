import Header from '../components/Header';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Socials from '../components/Socials';

const Home = (props) => {

  const [bgColor, setBgColor] = useState({ 
    bgGradient: 'radial-gradient(circle, rgba(98,28,193,1) 0%, rgba(83,24,169,1) 35%, rgba(98,28,193,1) 100%)',
    backupColor: 'rgb(98,28,193)',
    blobColor:  '#fc85ae',
    index: 0
  })

  const colorOptions = [
    {bgGradient: 'radial-gradient(circle, rgba(98,28,193,1) 0%, rgba(83,24,169,1) 35%, rgba(98,28,193,1) 100%)', backupColor: 'rgb(98,28,193)', blobColor: '#fc85ae'}, 
    {bgGradient: 'radial-gradient(circle, rgba(52,49,49,1) 0%, rgba(50,50,50,1) 35%, rgba(49,47,52,1) 100%)', backupColor: 'rgb(52,49,49)', blobColor: '#E8B059'}, 
    {bgGradient: 'radial-gradient(circle, rgba(243,193,192,1) 0%, rgba(226,168,167,1) 100%)', backupColor: 'rgb(243,193,192)', blobColor: '#d95c34'}, 
  ]

  const cycleBgColors = () => {
    let currIndex = bgColor.index;
    let nextIndex;
    currIndex < colorOptions.length-1 ? nextIndex = currIndex + 1 : nextIndex = 0;
    setBgColor({ 
      bgGradient: colorOptions[nextIndex].bgGradient, 
      backupColor: colorOptions[nextIndex].backupColor,
      blobColor: colorOptions[nextIndex].blobColor,
      index: nextIndex})
  }

  return (
    <motion.div
    >
      <Header />
      <div className={styles.container} style={{ background: bgColor.backupColor, background: bgColor.bgGradient }}>
        <div className={styles.canvasContainer}>
          <Canvas dpr={[1, 2]} style={{ zIndex: '3' }}>
                <Scene cycleBackground={cycleBgColors} blobColor={bgColor.blobColor} />
          </Canvas>
        </div>
        <h1 className={styles.title}>Blob <br/> Digital</h1>
        <img className={styles.award} src="/award.svg" alt="Award" />
        <Socials color="white" position="absolute" />
      </div>
      <motion.div className={styles.pageTransitionSvg} initial={{ scale: 0 }} exit={{ scale: 90 }} transition={{ duration: .6 }}>
        <svg width="50px" height="50px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className="morph" fill="#561CAE" d="M34.4,-63C44.2,-54,51.3,-43.9,58.5,-33.2C65.6,-22.5,72.7,-11.3,69.6,-1.8C66.5,7.7,53.3,15.4,45.6,25.1C37.9,34.8,35.8,46.6,29.1,57.6C22.4,68.7,11.2,79.1,0.7,77.8C-9.8,76.6,-19.6,63.7,-32.1,56C-44.6,48.3,-59.9,45.9,-68.6,37.4C-77.3,28.9,-79.4,14.5,-74.3,2.9C-69.3,-8.6,-56.9,-17.2,-49.7,-28.3C-42.6,-39.4,-40.6,-53.1,-33.1,-63.4C-25.7,-73.8,-12.8,-80.8,-0.3,-80.4C12.3,-80,24.7,-72,34.4,-63Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      {/* <motion.div className={styles.hiderOne} exit={{width: '100vw'}} transition={{ duration: 0.8 }}></motion.div> */}
      <div className={styles.hider}></div>
    </motion.div>
    
  )
}
export default Home;
