import { faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faEye, faQuestion, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectProps } from '../components/Projects/Project';

const black = '#2b2b2b';
const orange = '#18cd9d';
const green = '#3a6351'
const blue = '#2e5870';
const Orange = (props: any) => <span style={{ color: orange }} {...props} />
const Green = (props: any) => <span style={{ color: green }} {...props} />

export const webProjects: ProjectProps[] = [{
    title: "React Material UI Carousel",
    subtitle: "October 2019 - Maintained until present day",
    technology: ['ReactJS', 'Material UI', 'Typescript'],
    description: (
        <>
            An open-source, extendible, and easy-to-use <Orange>Carousel UI component</Orange> for React using Material UI.<br /> <br />
            It switches between given children using smooth animations.< br />
            Provides next and previous buttons, and interactible bullet indicators.
            <br/><br/>
            In fact, this carousel is built <Orange>using itself</Orange>!
        </>
    ),

    image: '/projects/carousel3.jpg',
    color: 'black',
    footer: (
        <>
            <a href='https://github.com/Learus/react-material-ui-carousel' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: black }}><FontAwesomeIcon icon={faGithub} /> Github</button>

            </a>
            <a href='https://www.npmjs.com/package/react-material-ui-carousel' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faCloudDownloadAlt} /> NPM</button>
            </a>
        </>
    ),
    position: 'right'
},
{
    title: "Maliaras ERP",
    logo: 'projects/maliaras_logo.png',
    subtitle: "September 2021 - September 2023",
    technology: ['Typescript', 'Next.js', 'NestJS', 'Prisma', 'MariaDB'],
    description: (
        <>
        A <Orange>fully interconnected</Orange> web application that handles most of the duties the private school might need to function.
        <br/><br/>
        It implements custom solutions for <Orange>everything</Orange> starting 
        from student register, asynchronous learning, class distribution, and student payments, 
        to personnel management, payroll, newsletters, financial reports, and <Orange>many others</Orange>.
        <br/><br/>
        It&apos;s been made over the course of 2 years by me, using <Orange>industry standards</Orange> for both back-end, front-end, and UI/UX design.
        </>
    ),
    color: 'black',
    image: 'projects/erp_background.jpg',
    imageBackgroundSize: 'auto',
    position: 'left',
    footer: <></>
},
{
    title: 'GeoQA Interface',
    subtitle: 'Bachelor Thesis | February 2020 - August 2020',
    technology: ['Node.js', 'Express', 'ReactJS', 'Material UI'],
    description: (
        <>
            The NKUA has built a system that answers more specific, <Orange>geospatial questions</Orange>, using a
            set of knowledge bases. <Orange>The GeoQA system.</Orange><br/><br/>
            The purpose of this project is to create an extendible and versatile <Orange>user interface</Orange> for GeoQA.
        </>
    ),
    image: 'projects/geoqa3.jpg',
    color: 'black',
    position: 'left',
    footer: (
        <>
            <a href='https://pergamos.lib.uoa.gr/uoa/dl/frontend/file/lib/default/data/2937389/theFile' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faEye} /> Paper</button>
            </a>
            <a href='http://teleios4.di.uoa.gr:15434/' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: orange }}><FontAwesomeIcon icon={faQuestion} /> Ask a Question</button>
            </a>
        </>
    )
},
{
    title: "Maliaras Meetings",
    subtitle: "October 2020 - November 2020",
    technology: ['ReactJS', 'Typescript', 'Node.js', 'MariaDB'],
    description: (
        <>
            A full-stack application built to <Orange>help parents meet with school teachers</Orange> during the pandemic.<br /><br />
            Creates rooms and handles a <Orange>waiting queue</Orange> for each teacher. The teacher can then call the parents and converse <Orange>through the application itself.</Orange><br /><br />
            Used with ~60 concurrent teachers & ~700 concurrent parents.
        </>
    ),
    image: 'projects/meetings2.jpg',
    color: 'black',
    position: 'left',
    footer: <></>
},
{
    title: "Athens Philharmonia Orchestra Website",
    subtitle: "May 2020 - July 2020",
    technology: ['ReactJS', 'Typescript', 'jQuery', 'Bootstrap'],
    description: (
        <>
            The Athens Philharmonia Orchestra is an orchestra based in Greece, dedicated to <Orange>Greek Art Music</Orange><br /><br />
            Its mission is to systematically explore the <Orange>cultural and intellectual treasure</Orange> of the Modern Greek art music creation
        </>
    ),
    image: 'projects/apho2.jpg',
    color: 'black',
    position: 'right',
    footer: (
        <>
            <a href='https://apho.gr' rel='noreferrer' target='_blank'>
                <button><FontAwesomeIcon icon={faEye} /> Take a look</button>

            </a>
            <a href='https://open.spotify.com/artist/0gGmjio2Tcb4R8UttIQimZ?si=2A8-vbkTQO6FN1TqvSsrbw' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: green }}><FontAwesomeIcon icon={faSpotify} /> Listen</button>
            </a>
        </>
    )
},
    // {
    //     title: "Private School ERP System - WINP",
    //     subtitle: "October 2021 - August 2022",
    //     technology: ['Typescript', 'Next.js - ReactJS', 'NestJS', 'Prisma', 'MariaDB'],
    //     description: 'asdf',
    //     image: 'projects/apho2.jpg',
    //     color: 'black',
    //     position: 'right',
    // }
]