// project-card.js - This component is used to display a card for a given project.
// It will display the project name, description, and a list of tools used in the project.
// It will also display a screenshot of the project.

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectToolBadge } from './project-tool-badge';

export function ProjectCard({ project }) {

    // List of projects that I have worked on
    const projects = [
        {
            name: 'The Electronics Store',
            description: 'The front end for a full stack e-commerce website.',
            screenshot: '/screen_electronics_store_dark.png',
            tools: ['nextjs', 'tailwindcss', 'daisyui', 'materialui', 'heroku'],
            url: 'https://electronics-store-8382b35f5fca.herokuapp.com/',
            github: 'https://github.com/masoumim/the-electronics-store',
        },
        {
            name: 'The Electronics Store API',
            description: 'The API that powers the full stack e-commerce website.',
            screenshot: '/screen_electronics_store_API_dark.png',
            tools: ['nodejs', 'express', 'prisma', 'postgresql', 'swaggerui', 'heroku'],
            url: 'https://the-electronics-store-api-962f1726488d.herokuapp.com/api-docs/',
            github: 'https://github.com/masoumim/the-electronics-store-api',
        },
        {
            name: 'Reddit Game Posts',
            description: 'A Reddit client that allows users to browse and post on game related content, using the Reddit API.',
            screenshot: '/screen_reddit_game_posts_dark.png',
            tools: ['nextjs', 'tailwindcss', 'jest', 'reacttestinglibrary', 'vercel'],
            url: 'https://reddit-game-posts.vercel.app/',
            github: 'https://github.com/masoumim/reddit-game-posts',
        },
        {
            name: 'Jamming App',
            description: 'A Spotify client that allows users to search for songs and create playlists, using the Spotify API.',
            screenshot: '/screen_jamming_dark.png',
            tools: ['nodejs', 'nextjs', 'css', 'vercel'],
            url: 'https://jamming-sigma.vercel.app/',
            github: 'https://github.com/masoumim/jamming',
        },
        {
            name: 'Console Wars',
            description: 'A web app that lets users rank, compare and explore game consoles from the past and present',
            screenshot: '/screen_console_wars_dark.png',
            tools: ['nodejs', 'express', 'postgresql', 'sequelize', 'ejs', 'css', 'heroku'],
            url: 'https://console-wars-c040e29445ae.herokuapp.com/',
            github: 'https://github.com/masoumim/console-wars',
        },
        {
            name: 'Flash Cards',
            description: 'A web app that lets users create flash cards and quizzes to help them study',
            screenshot: '/screen_flashcards_dark.png',
            tools: ['nodejs', 'nextjs', 'redux', 'tailwindcss', 'vercel'],
            url: 'https://flashcards-hazel-mu.vercel.app/',
            github: 'https://github.com/masoumim/flashcards',
        }
    ]

    // Get the project by name using the project name passed in as a prop
    function getProjectByName(name) {
        return projects.find((project) => project.name === name);
    }

    // Get the project object
    const proj = getProjectByName(project);

    return (
        <div className="bg-slate-100 rounded-lg shadow-lg" style={{ width: '20rem' }}>
            <div className="bg-cover bg-center h-64 rounded-t-lg" style={{ backgroundImage: `url(${proj.screenshot})` }}>
                <h2 className="text-1xl font-bold text-purple-300 pt-7 pl-4">{proj.name}</h2>
                <p className="mt-5 text-md text-white font-bold px-4">{proj.description}</p>
                <div className="flex flex-row gap-5 mt-3">
                    <FontAwesomeIcon icon={faLink} color='white' className='ml-4 mt-4 h-5 w-5' />
                    <Link href={proj.url} className="text-purple-300 font-bold hover:text-purple-500" style={{ marginTop: '13px' }}>View Project</Link>
                </div>
                <div className="flex flex-row gap-5">
                    <FontAwesomeIcon icon={faGithub} color='white' className='ml-4 mt-4 h-5 w-5' />
                    <Link href={proj.github} className="text-purple-300 font-bold hover:text-purple-500" style={{ marginTop: '13px' }}>View Code</Link>
                </div>
            </div>

            {/* Display the tool badges */}
            <div className="flex flex-row flex-wrap justify-center gap-3 mt-10 px-10">
                {proj.tools.map((tool) => (
                    <ProjectToolBadge key={tool} toolName={tool} />
                ))}
            </div>
        </div>
    );
}