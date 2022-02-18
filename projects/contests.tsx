import { faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faEye, faMusic, faQuestion, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectProps } from '../components/Projects/Project';

const black = '#2b2b2b';
const orange = '#e48257';
const green = '#3a6351'
const blue = '#2e5870';
const Orange = (props: any) => <span style={{ color: orange }} {...props} />
const Green = (props: any) => <span style={{ color: green }} {...props} />

export const contestProjects: ProjectProps[] = [{
    title: "HashCode 2018",
    subtitle: "March 1 2018",
    technology: ['Python'],
    description: (
        <>
            A greedy algorithm for the HashCode 2019 slideshow problem.
        </>
    ),

    image: '/projects/hashcode2.jpg',
    color: 'black',
    footer: (
        <>
            <a href='https://github.com/Learus/HashCode2019' rel='noreferrer' target='_blank'>
                <button><FontAwesomeIcon icon={faGithub} /> Solution</button>

            </a>
            <a href='https://storage.googleapis.com/coding-competitions.appspot.com/HC/2019/hashcode2019_qualification_task.pdf' rel='noreferrer' target='_blank'>
                <button style={{ backgroundColor: blue }}><FontAwesomeIcon icon={faQuestion} /> Problem</button>
            </a>
        </>
    ),
    position: 'right'
}
]