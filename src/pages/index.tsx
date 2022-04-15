import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SectionContainer } from '../components/SectionContainer'
import { DetailsButton } from '../components/DetailsButton'
import { FiresparkLoopingVideo } from '../components/FiresparkLoopingVideo'
import { ExternalLink } from '../components/ExternalLink'
import Logo from '../components/icons/Logo'
import Facebook from '../components/icons/Facebook'
import Instagram from '../components/icons/Instagram'
import Twitter from '../components/icons/Twitter'
import PS5 from '../components/icons/PS5'
import SquareEnix from '../components/icons/SquareEnix'
import * as mediaQueries from '../lib/mediaQueries'
import useMediaQuery from '../lib/useMediaQuery'
import * as images from '../lib/images'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let isMediaLarge = useMediaQuery(mediaQueries.large)

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
      <header className={styles.page_header}>
        <SquareEnix />
        <PS5 />
      </header>
      <main>
        <section className={styles.hero}>
          {isMediaLarge ? (
            <Image
              className={styles.hero_image}
              src={images.heroPC}
              alt="Final Fantasy XVI art"
              layout="responsive"
            />
          ) : (
            <Image
              className={styles.hero_image}
              src={images.heroSP}
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
        <SectionContainer className={styles.section_container}>
          <div className={styles.trailer_button}>
            {isMediaLarge ? (
              <Image
                src={images.playBtnPC}
                alt="open video modal"
                layout="responsive"
              />
            ) : (
              <Image
                src={images.playBtnSP}
                alt="open video modal"
                layout="responsive"
              />
            )}
          </div>
          <div className={styles.trailer_frame}>
            {isMediaLarge ? (
              <Image src={images.trailerFramePC} alt="" layout="responsive" />
            ) : (
              <Image src={images.trailerFrameSP} alt="" layout="responsive" />
            )}
          </div>
          <div className={styles.trailer_thumbnail}>
            {isMediaLarge ? (
              <Image
                src={images.trailerThumbPC}
                alt="final fantasy 16 awakening trailer thumbnail"
                layout="responsive"
              />
            ) : (
              <Image
                src={images.trailerThumbSP}
                alt="final fantasy 16 awakening trailer thumbnail"
                layout="responsive"
              />
            )}
          </div>
        </SectionContainer>
        <SectionContainer className={styles.section_container}>
          <div className={styles.link_block}>
            {isMediaLarge ? (
              <Image
                src={images.worldPC}
                alt="final fantasy 16 city concept art"
                layout="responsive"
              />
            ) : (
              <Image
                src={images.worldSP}
                alt="final fantasy 16 city concept art"
                layout="responsive"
              />
            )}
            <div className={styles.link_block_cta}>
              <h2>
                The <span className={styles.kearning_xs}>W</span>orld
              </h2>
              <DetailsButton className={styles.link_block_cta_details_btn} />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer className={styles.section_container}>
          <div className={styles.link_block}>
            {isMediaLarge ? (
              <Image
                src={images.characterPC}
                alt="final fantasy 16 character concept art"
                layout="responsive"
              />
            ) : (
              <Image
                src={images.characterSP}
                alt="final fantasy 16 character concept art"
                layout="responsive"
              />
            )}
            <div className={styles.link_block_cta}>
              <h2>The Characters</h2>
              <DetailsButton className={styles.link_block_cta_details_btn} />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer
          className={`${styles.section_container} ${styles.social_media}`}
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
              <Image src={images.rating01} alt="ESRB rating pending" />
            </ExternalLink>
            <ExternalLink href="https://esrb.org/EPCConfirm/907/">
              <Image src={images.rating02} alt="ESRB privacy certified" />
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
            © SQUARE ENIX CO., LTD. ALL RIGHTS RESERVED.{' '}
            {!isMediaLarge && <br />}
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

export default Home
