import { faDiscord, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faDownload, faGamepad, faPlay, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectProps } from '../components/Projects/Project';

const black = '#2b2b2b';
const orange = '#18cd9d';
const blue = '#EE6352';
const Orange = (props: any) => <span style={{ color: orange }} {...props} />

export const gameProjects: ProjectProps[] = [
    {
        title: "Window Wars",
        logo: '/projects/windowwarslogo.png',
        subtitle: "December 2023 - Present",
        technology: ['Godot', 'GDScript', 'Multiplayer', 'Nakama', 'FMOD'],
        description: (
            <>
                Window Wars is a fresh take on the <Orange>Arena Brawler</Orange> genre, aspiring to be much more than that.
                <br /><br />
                Each player controls their own <Orange>little window</Orange>, having clear vision of only the small area around them.
                <br /><br />
                Choose the skills that better suit your playstyle and <Orange>fight</Orange> your way to victory!
                <br /><br />
                Invite your friends to play and battle it out in <Orange>multiple modes</Orange> of play.
            </>
        ),
        position: 'left',
        color: 'black',
        footer: (
            <>
                <a href='https://learus.itch.io/window-wars' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
                </a>
                <a href='https://discord.gg/bRPu7xCPB7' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: '#5865f2' }}><FontAwesomeIcon icon={faDiscord} /> Community</button>
                </a>
            </>
        ),
        image: '/projects/newwindowwars3.png'
    },
    {
        title: "Truth is...",
        subtitle: "May 2024",
        technology: ['Godot', 'GDScript'],
        description: (
            <>
                Truth is... was developed at the <Orange>Truth, Lies & Democracy</Orange> Game Jam
                in the context of the European Capital of Democracy 2024.
                <br /><br />
                In the game, the player writes a <Orange>piece of news</Orange> – which, depending on their choices, may take unexpected turns.
                <br /><br />
                The game intends to let the player experience the <Orange>stark contrast</Orange> between the constant and
                often arduous mental effort required to stick to <Orange>factfulness</Orange> and <Orange>neutrality</Orange> on the one hand, and
                perpetual temptation of getting swept up in <Orange>what we wanted to believe all along</Orange>.
            </>
        ),
        position: 'right',
        color: 'black',
        footer: (
            <>
                <a href='https://giorgio-perri.itch.io/truth-is' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faPlay} /> Play</button>
                </a>
                <a href='https://capitalofdemocracy.eu/truth-lies-democracy/' target='_blank' rel="noreferrer">
                    <button style={{
                        backgroundColor: black,
                    }}
                    >
                        <FontAwesomeIcon icon={faTrophy} /> Game Jam
                    </button>
                </a>
            </>
        ),
        image: '/projects/truthis3.png'
    },
    {
        title: "Ensouled",
        subtitle: "January 2023 - June 2023",
        technology: ['Unity', 'C#', 'FMOD'],
        description: (
            <>
                Ensouled is a <Orange>2D action platformer</Orange> with <Orange>metroidvania</Orange> aspects and tightly bound movement and combat.
                <br /><br />
                Set in a dystopian future, the storyline follows <Orange>N1k0</Orange>, a passenger of the SS. Hominem 03 <Orange>spaceship</Orange>,
                who suddenly regains consciousness years after being <Orange>forcefully</Orange> transformed into a <Orange>cyber-soldier</Orange>.
            </>
        ),
        position: 'right',
        color: 'black',
        footer: (
            <>
                <a href='https://giorgio-perri.itch.io/ensouled' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
                </a>
            </>
        ),
        image: '/projects/ensouled.png'
    },
    {
        title: "Thanks, Socrates",
        subtitle: "Ludum Dare #50 - April 2022 - 3rd Place Humour",
        technology: ['Unity', 'C#', 'Piskel', 'Soundbridge'],
        description: (
            <>
                You are <Orange>Socrates</Orange>.<br /><br />
                People from all around <Orange>time</Orange> and <Orange>mythos</Orange> request your counsel.<br /><br />
                Will you be able to give as much advice as you can before you inevitably <Orange>fall to your own wits</Orange>?
            </>
        ),
        position: 'center',
        color: 'black',
        footer: (
            <>
                <a href='https://learus.itch.io/thanks-socrates' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faDownload} /> Play Now!</button>
                </a>

                <a href='https://ldjam.com/events/ludum-dare/50/thanks-socrates' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faTrophy} /> Submission</button>
                </a>
            </>
        ),
        image: '/projects/socrates2.png'
    },
    {
        title: "Echo",
        subtitle: "Artful Societal Commentary - May 2023",
        technology: ['Godot', 'C#'],
        description: (
            <>
                Echo is an <Orange>artful</Orange> game meant to comment on the social phenomenon that is <Orange>&quot;Echo Chambers&quot;</Orange> in an <Orange>abstract</Orange> and non-explicit way.
                <br /><br />
                <i>Put a comfortable lie in an echo chamber, and <Orange>nobody</Orange> will challenge it. It will reverberate until it is <Orange>accepted</Orange> as actually true.</i>
            </>
        ),
        position: 'left',
        image: 'projects/echo.png',
        color: 'black',
        footer: (
            <>
                <a href='https://learus.itch.io/echo' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
                </a>
            </>
        )
    },
    {
        title: "A Light Approach",
        subtitle: "Prototype - A Hidden World - October 2022",
        technology: ['Godot', 'GDScript'],
        description: (
            <>
                A Light Approach is an <Orange>explorative platformer</Orange> game about getting to know your world.<br /><br />
                You start out <Orange>knowing nothing</Orange> about the level. Every object you touch becomes <Orange>visible</Orange>.<br /><br />
                Every 60 seconds you have to <Orange>restart</Orange>, while everything you have learned is <Orange>preserved.</Orange><br /><br />
                Can you <Orange>find your way</Orange> to the end?
            </>
        ),
        position: 'left',
        color: 'black',
        footer: (
            <>
                {/* <a href='https://learus.itch.io/A-Light-Approach' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
                </a> */}
            </>
        ),
        image: '/projects/alightapproach1.png'
    },
    {
        title: "Viva La Revolution!",
        subtitle: "Ludum Dare #46 - April 2020",
        technology: ['Unity', 'C#', 'Piskel'],
        description: (
            <>
                Play As <Orange>Maximilien Robespierre</Orange>, rouse the populous, gather precious resources, <Orange>indoctrinate</Orange> influencers to your cause, or <Orange>execute</Orange> them when they become a hindrance!<br /><br />
                Keep the revolution alive and bring the Monarchy to its knees.<br /><br />
                A game for the <Orange>Ludum Dare #46</Orange>
            </>
        ),

        image: '/projects/viva.png',
        color: 'black',
        footer: (
            <>
                <a href='https://learus.itch.io/viva-la-revolution' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faDownload} /> Play Now!</button>
                </a>

                <a href='https://ldjam.com/events/ludum-dare/46/viva-la-revolution-1' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faTrophy} /> Submission</button>
                </a>
            </>
        ),
        position: 'left'
    },
    {
        title: "Terrio",
        subtitle: "June 2017 - August 2020",
        technology: ['Unity', 'C#', 'Adobe Illustrator', 'Piskel'],
        description: (
            <>
                <Orange>Terrio</Orange> is a simple mobile game built on the Unity Engine.<br /><br />
                It rethinks the idea of <Orange>territory control/conquering games</Orange>, creating an endless arcade mode with a variety of enemies to destroy while conquering the board.<br /><br />
                You are a tiny pixel that tries to expand its territory whlist avoiding enemies.
            </>
        ),

        image: '/projects/terrio.png',
        color: 'black',
        footer: (
            <>
                <a href='https://play.google.com/store/apps/details?id=com.Brewery.Terrio&hl=en&gl=US' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faGooglePlay} /> <span>Play Now!</span></button>
                </a>
            </>
        ),
        position: 'right'
    },
    {
        title: "Boring in the deep",
        subtitle: "Ludum Dare #48 - April 2021",
        technology: ['Unity', 'C#', 'Piskel'],
        description: (
            <>
                Get into the shoes of the brave adventurer, writer, and gambler, <Orange>Phileas Fogg.</Orange><br /><br />
                This time our shrewd protagonist has made another ludicrous bet. To reach the <Orange>center of the earth</Orange> and return to tell the tale.<br /><br />
                And all bets are off!<br /><br />
                A game for the <Orange>Ludum Dare #48</Orange>
            </>
        ),

        image: '/projects/boring2.jpg',
        color: 'black',
        footer: (
            <>
                <a href='https://learus.itch.io/boring-in-the-deep' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faDownload} /> <span>Play Now!</span></button>
                </a>

                <a href='https://github.com/Learus/Boring-in-the-Deep' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: black }}><FontAwesomeIcon icon={faGithub} /> <span>Source</span></button>
                </a>

                <a href='https://ldjam.com/events/ludum-dare/48/$240281' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faTrophy} /> <span>Submission</span></button>
                </a>
            </>
        ),
        position: 'left'
    },
]