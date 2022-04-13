import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../components/icons/Logo'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FINAL FANTASY XVI (FINAL FANTASY 16) | SQUARE ENIX</title>
        <meta
          name="description"
          content="FINAL FANTASY XIV OFFICIAL WEBSITE The legacy of the crystals has shaped our history for long enough."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero */}
      <section className={styles.hero}>
        <picture className={styles.hero_image}>
          <source
            media="(min-width: 821px) and (orientation: landscape)"
            srcSet="/images/home_hero_landscape.jpeg"
          />

          {/* eslint-disable */}
          <img
            src="/images/home_hero_portrait.jpeg"
            alt="Final Fantasy XVI art"
          />
        </picture>
        {/* Logo + Tagline */}
        <div className={styles.hero_heading}>
          {/* Logo */}
          <h1>
            <Logo />
          </h1>
          <p>
            The legacy of the crystals has shaped our history for long enough.
          </p>
        </div>
      </section>
      <div className={styles.firespark}>
        <div className={styles.firespark_video_wrapper}>
          <video
            className={styles.firespark_video_portrait}
            src="/videos/firespark-portrait.mp4"
            playsInline
            muted
            loop
            autoPlay
          />
          <video
            className={styles.firespark_video_landscape}
            src="/videos/firespark-landscape.mp4"
            playsInline
            muted
            loop
            autoPlay
          />
        </div>
      </div>
    </>
  )
}

export default Home
