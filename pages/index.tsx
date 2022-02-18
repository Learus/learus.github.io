import bannerImage from '../public/banner.jpeg';
import Carousel from '../components/Carousel';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Tabs, { Tab } from '../components/Tabs';
import
{
    faCloudDownloadAlt,
    faCoffee,
    faDesktop,
    faDownload,
    faGamepad,
    faTrophy
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '../components/Projects/Project';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import axios from 'axios';
import { webProjects } from '../projects/web';
import { gameProjects } from '../projects/games';
import { contestProjects } from '../projects/contests';


const tabs = {
    web: {
        text: "Web Projects",
        color: 'green',
        icon: faDesktop
    },
    game: {
        text: "Games",
        color: 'orange',
        icon: faGamepad
    },
    contests: {
        text: "Contests",
        color: 'blue',
        icon: faTrophy
    }
}

const Home: NextPage = () =>
{

    const [activeTab, setActiveTab] = useState<keyof (typeof tabs)>('web');

    return (
        <div >
            <Head>
                <title>Yannis Maliaras - Learus</title>
                <meta name="description" content="Yannis Maliaras - Learus Portfolio" />
            </Head>

            <div className={styles.banner}>
                <Image src={bannerImage} alt='background' layout='fill' />
            </div>

            <div className={styles.container}>


                <main className={`${styles.main}`}>

                    <section className={styles.mainSection}>
                        <header className={styles.header}>

                            <Link href='/'><a className={styles.logo}><h2>Learus</h2></a></Link>
                            <Link href='mailto:jmaliaras@gmail.com' >
                                <a className={styles.mailLink} title='E-mail'>
                                    jmaliaras@gmail.com
                                </a>
                            </Link>

                            <Link href='https://www.linkedin.com/in/ioannis-maliaras/'><a target='_blank' title='LinkedIn'>
                                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            </a></Link>
                            <Link href='https://github.com/Learus'><a target='_blank' title='Github'>
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a></Link>
                            <Link href='https://www.buymeacoffee.com/Learus'><a target='_blank' title='Buy me a coffee!'>
                                <FontAwesomeIcon icon={faCoffee} size='2x' />
                            </a></Link>

                        </header>
                        <div className={styles.name}>

                            <h1>Yannis Maliaras</h1>
                            <h1>Learus</h1>


                            <br />

                            <div className={styles.description}>
                                <p>
                                    I am a <span className={styles.orange}>Computer Science Bachelor</span> from the National and Kapodistrian University of Athens.<br /><br />
                                    I specialize on <span className={styles.orange}>Full-Stack Web Development</span> using ReactJS and Node.js.<br /><br />
                                    I am a hobbyist <span className={styles.orange}>Game Developer</span>, having years of experience in Unity and C#.<br /><br />
                                    I am an active advocate of <span className={styles.orange}>minimalism</span> in design and always strive to create beautifully looking work, while also
                                    maintaing quality User Experience.<br /><br />
                                    I bring a <span className={styles.orange}>strong sense of aesthetics</span>, attention to detail and a perfectionist attitude towards my work.<br /><br />
                                    I am an efficient learner with an <span className={styles.orange}>open-mind</span> for new technologies and ways to create.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <div className={styles.carousel}>
                            <Tabs activeKey={activeTab} onSelect={setActiveTab}>
                                {Object.entries(tabs).map(([key, value]) =>
                                {
                                    return (
                                        <Tab
                                            eventkey={key}
                                            key={key}
                                            color={value.color}
                                        >
                                            <FontAwesomeIcon icon={value.icon} className={styles.Icon} />
                                        </Tab>
                                    )
                                })}

                            </Tabs>
                            <div className={`${styles.activeTab} ${styles[tabs[activeTab].color]}`}>

                                {activeTab === 'web' &&
                                    <Carousel
                                        animation='slide'
                                        duration={1000}
                                        height='100%'
                                        indicators={false}
                                        autoPlay={false}
                                        navButtonsAlwaysVisible
                                        fullHeightHover={false}
                                    // cycleNavigation={fals}
                                    >
                                        {webProjects.map((p, i) => <Project key={`webProject-${i}`} {...p} />)}

                                    </Carousel>
                                }

                                {activeTab === 'game' &&
                                    <Carousel
                                        animation='slide'
                                        duration={1000}
                                        height='100%'
                                        indicators={false}
                                        autoPlay={false}
                                        navButtonsAlwaysVisible
                                        fullHeightHover={false}
                                    >

                                        {gameProjects.map((p, i) => <Project key={`gameProject-${i}`} {...p} />)}
                                    </Carousel>
                                }

                                {activeTab === 'contests' &&
                                    <Carousel
                                        animation='slide'
                                        duration={1000}
                                        height='100%'
                                        indicators={false}
                                        autoPlay={false}
                                        navButtonsAlwaysVisible
                                        fullHeightHover={false}
                                    >

                                        {contestProjects.map((p, i) => <Project key={`gameProject-${i}`} {...p} />)}
                                    </Carousel>
                                }


                            </div>
                        </div>


                    </section>
                </main>
            </div>

        </div>
    )
}

export default Home
