import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faDownload, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectProps } from '../components/Projects/Project';

const black = '#2b2b2b';
const orange = '#e48257';
const blue = '#2e5870';
const Orange = (props: any) => <span style={{ color: orange }} {...props} />

export const gameProjects: ProjectProps[] = [
    {
        title: "Thanks, Socrates",
        subtitle: "Ludum Dare #50 - April 2022 - 3rd Place Humour",
        technology: ['Unity', 'C#', 'Piskel', 'Soundbridge'],
        description: (
            <>
                You are <Orange>Socrates</Orange>.<br/><br/>
                People from all around <Orange>time</Orange> and <Orange>mythos</Orange> request your counsel.<br/><br/>
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