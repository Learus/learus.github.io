import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faDownload, faPlay, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectProps } from '../components/Projects/Project';

const black = '#2b2b2b';
const orange = '#e48257';
const blue = '#2e5870';
const Orange = (props: any) => <span style={{ color: orange }} {...props} />

export const gameProjects: ProjectProps[] = [
    {
        title: "Ensouled",
        subtitle: "January 2023 - Present",
        technology: ['Unity', 'C#', 'FMOD'],
        description: (
            <>
            Ensouled is a <Orange>2D action platformer</Orange> with <Orange>metroidvania</Orange> aspects and tightly bound movement and combat.
            <br/><br/>
            Set in a dystopian future, the storyline follows <Orange>N1k0</Orange>, a passenger of the SS. Hominem 03 <Orange>spaceship</Orange>, 
            who suddenly regains consciousness years after being <Orange>forcefully</Orange> transformed into a <Orange>cyber-soldier</Orange>.
            </>
        ),
        position: 'right',
        color: 'black',
        footer: (
            <>
                <a href='https://giorgio-perri.itch.io/ensouled' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
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
                <a href='https://learus.github.io/echo' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
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
                <a href='https://learus.github.io/A-Light-Approach' target='_blank' rel="noreferrer">
                    <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faPlay} /> Play Now!</button>
                </a>
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