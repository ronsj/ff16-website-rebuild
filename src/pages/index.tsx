import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CSSProperties, ReactNode, useEffect } from 'react'
import Logo from '../components/icons/Logo'
import Facebook from '../components/icons/Facebook'
import Instagram from '../components/icons/Instagram'
import Twitter from '../components/icons/Twitter'
import PS5 from '../components/icons/PS5'
import SquareEnix from '../components/icons/SquareEnix'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/Home.module.css'
import heroSP from '../../public/assets/images/na/kv/kv_sp.jpg'
import heroPC from '../../public/assets/images/na/kv/kv_pc.jpg'
import playBtnPC from '../../public/assets/images/na/trailer/trailer_playbtn_pc.png'
import playBtnSP from '../../public/assets/images/na/trailer/trailer_playbtn_sp.png'
import useMediaQuery from '../lib/useMediaQuery'
import trailerFramePC from '../../public/assets/images/na/trailer/trailer_frame_pc.png'
import trailerFrameSP from '../../public/assets/images/na/trailer/trailer_frame_sp.png'
import trailerThumbPC from '../../public/assets/images/na/trailer/trailer_thumbnail_pc.jpg'
import trailerThumbSP from '../../public/assets/images/na/trailer/trailer_thumbnail_sp.jpg'
import worldPC from '../../public/assets/images/na/common/world_pc.jpg'
import worldSP from '../../public/assets/images/na/common/world_sp.jpg'
import characterPC from '../../public/assets/images/na/common/character_pc.jpg'
import characterSP from '../../public/assets/images/na/common/character_sp.jpg'
import detailsBtnPC from '../../public/assets/images/na/common/details_btn_pc.png'
import detailsBtnSP from '../../public/assets/images/na/common/details_btn_sp.png'
import rating01 from '../../public/assets/images/na/footer/rating01.png'
import rating02 from '../../public/assets/images/na/footer/rating02.png'

const mediaQuery = {
  lg: '(min-width: 821px)',
}

const Home: NextPage = () => {
  let isMediaLarge = useMediaQuery('(min-width: 821px)')

  return (
    <>
      <Head>
        <title>FINAL FANTASY XVI (FINAL FANTASY 16) | SQUARE ENIX</title>
        <meta
          name="description"
          content="FINAL FANTASY XIV OFFICIAL WEBSITE The legacy of the crystals has shaped our history for long enough."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      {/* Hero */}
      <header className={styles.page_header}>
        <SquareEnix />
        <PS5 />
      </header>
      <main>
        <section className={styles.hero}>
          {isMediaLarge ? (
            <Image
              className={styles.hero_image}
              src={heroPC}
              alt="Final Fantasy XVI art"
              layout="responsive"
            />
          ) : (
            <Image
              className={styles.hero_image}
              src={heroSP}
              alt="Final Fantasy XVI art"
              layout="responsive"
            />
          )}
          <div className={styles.hero_heading}>
            <h1>
              <Logo />
            </h1>
            <p>
              The legacy of the crystals has shaped our history for long enough.
            </p>
          </div>
        </section>
        <SectionContainer>
          <div className={styles.trailer_button}>
            {isMediaLarge ? (
              <Image
                src={playBtnPC}
                alt="open video modal"
                layout="responsive"
              />
            ) : (
              <Image
                src={playBtnSP}
                alt="open video modal"
                layout="responsive"
              />
            )}
          </div>
          <div className={styles.trailer_frame}>
            {isMediaLarge ? (
              <Image
                src={trailerFramePC}
                alt=""
                layout="responsive"
              />
            ) : (
              <Image
                src={trailerFrameSP}
                alt=""
                layout="responsive"
              />
            )}
          </div>
          <div className={styles.trailer_thumbnail}>
            {isMediaLarge ? (
              <Image
                src={trailerThumbPC}
                alt="final fantasy 16 awakening trailer thumbnail"
                layout="responsive"
              />
            ) : (
              <Image
                src={trailerThumbSP}
                alt="final fantasy 16 awakening trailer thumbnail"
                layout="responsive"
              />
            )}
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className={styles.link_block}>
            {isMediaLarge ? (
              <Image
                src={worldPC}
                alt="final fantasy 16 city concept art"
                layout="responsive"
              />
            ) : (
              <Image
                src={worldSP}
                alt="final fantasy 16 city concept art"
                layout="responsive"
              />
            )}
            <div className={styles.link_block_cta}>
              <h2>
                The <span className={styles.kearning_xs}>W</span>orld
              </h2>
              <DetailsButton />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className={styles.link_block}>
            {isMediaLarge ? (
              <Image
                src={characterPC}
                alt="final fantasy 16 character concept art"
                layout="responsive"
              />
            ) : (
              <Image
                src={characterSP}
                alt="final fantasy 16 character concept art"
                layout="responsive"
              />
            )}
            <div className={styles.link_block_cta}>
              <h2>The Characters</h2>
              <DetailsButton />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer
          className={styles.social_media}
          style={{ textAlign: 'center' }}
        >
          <h2>Social Media</h2>
          <p>Follow these accounts to receive the latest updates.</p>
          <ul className={styles.social_media_links}>
            <li>
              <ExternalLink href="https://twitter.com/finalfantasyxvi">
                <Twitter />
                <p>Twitter</p>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.instagram.com/finalfantasyxvi/">
                <Instagram />
                <p>Instagram</p>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.facebook.com/finalfantasyxvi/">
                <Facebook />
                <p>Facebook</p>
              </ExternalLink>
            </li>
          </ul>
          <div className={styles.social_media_links_ps5}>
            <PS5 />
          </div>
        </SectionContainer>
        <footer className={styles.section_container}>
          <div className={styles.footer_game_rating}>
            <ExternalLink href="https://esrb.com">
              <Image
                src={rating01}
                alt="ESRB rating pending"
              />
            </ExternalLink>
            <ExternalLink href="https://esrb.org/EPCConfirm/907/">
              <Image
                src={rating02}
                alt="ESRB privacy certified"
              />
            </ExternalLink>
          </div>
          <ul className={styles.footer_links}>
            <li>
              <ExternalLink href="https://square-enix-games.com/en_US/documents/cookies">
                Cookie Notice
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://square-enix-games.com/en_US/documents/tnc">
                Terms of Use
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://square-enix-games.com/en_US/documents/privacy">
                Privacy Notice
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://square-enix-games.com/en_US/documents/materialusagepolicy">
                Material Usage Policy
              </ExternalLink>
            </li>
          </ul>
          <p className={styles.footer_copy}>
            © SQUARE ENIX CO., LTD. ALL RIGHTS RESERVED. <br />
            LOGO ILLUSTRATION: © 2020 YOSHITAKA AMANO
          </p>
          <p className={styles.footer_trademark}>
            FINAL FANTASY, SQUARE ENIX and their respective logos are trademarks
            or registered trademarks of Square Enix Holdings Co., Ltd.
            <br />
            &quot;PlayStation&quot; and the &quot;PS&quot; Family logo are
            registered trademarks and &quot;PS5&quot; is a trademark of Sony
            Interactive Entertainment Inc.
          </p>
        </footer>
        <div className={styles.firespark}>
          <div className={styles.firespark_video_wrapper}>
            <FiresparkLoopingVideo
              className={styles.firespark_video_portrait}
              src="/assets/videos/firespark-portrait.mp4"
            />
            <FiresparkLoopingVideo
              className={styles.firespark_video_landscape}
              src="/assets/videos/firespark-landscape.mp4"
            />
          </div>
        </div>
      </main>
    </>
  )
}

type SectionContainerProps = {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

function SectionContainer({
  className = '',
  children,
  style,
}: SectionContainerProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, top: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, top: '1rem' },
  }

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`${styles.section_container} ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  )
}

function DetailsButton() {
  let isMediaLarge = useMediaQuery('(min-width: 821px)')

  return isMediaLarge ? (
    <Image
      className={styles.link_block_cta_details_btn}
      src={detailsBtnPC}
      alt="MORE DETAILS"
      layout="responsive"
    />
  ) : (
    <Image
      className={styles.link_block_cta_details_btn}
      src={detailsBtnSP}
      alt="MORE DETAILS"
    />
  )
}

type FiresparkLoopingVideoProps = {
  className: string
  src: string
}

function FiresparkLoopingVideo({ className, src }: FiresparkLoopingVideoProps) {
  return (
    <video
      className={className}
      src={src}
      playsInline
      muted
      loop
      autoPlay
    />
  )
}

type ExternalLinkProps = {
  href: string
  children: ReactNode
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default Home
