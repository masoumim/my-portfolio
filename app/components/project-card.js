// project-card.js - This component is used to display a card for a given project.
// It will display the project name, description, and a list of tools used in the project.
// It will also display a screenshot of the project.

import React from 'react';

export function ProjectCard({ project }) {

    // List of projects that I have worked on
    const projects = [
        {
            name: 'The Electronics Store',
            description: 'The front end for a full stack e-commerce website.',
            screenshot: '/project1.png',
            tools: ['nextjs', 'tailwindcss', 'daisyui', 'materialui', 'heroku']
        },
        {
            name: 'The Electronics Store API',
            description: 'The API that powers the full stack e-commerce website.',
            screenshot: '/project2.png',
            tools: ['nodejs', 'express', 'prisma', 'postgresql', 'swaggerui', 'heroku']
        },
        {
            name: 'Reddit Game Posts',
            description: 'A Reddit client that allows users to browse and post on game related content, using the Reddit API.',
            screenshot: '/project3.png',
            tools: ['nextjs', 'tailwindcss', 'jest', 'reacttestinglibrary', 'vercel']
        },
        {
            name: 'Jamming App',
            description: 'A Spotify client that allows users to search for songs and create playlists, using the Spotify API.',
            screenshot: '/project4.png',
            tools: ['nodejs', 'nextjs', 'css', 'vercel']
        },
        {
            name: 'Console Wars',
            description: 'A web app that lets users rank, compare and explore game consoles from the past and present',
            screenshot: '/project5.png',
            tools: ['nodejs', 'express', 'postgresql', 'sequelize', 'heroku']
        },
        {
            name: 'Flash Cards',
            description: 'A web app that lets users create flash cards and quizzes to help them study',
            screenshot: '/project6.png',
            tools: ['nodejs', 'nextjs', 'redux', 'tailwind', 'vercel']
        }
    ]

    // Get the project by name using the project name passed in as a prop
    function getProjectByName(name) {
        return projects.find((project) => project.name === name);
    }

    // Get the project object
    const proj = getProjectByName(project);

    return (
        <div className="bg-slate-100 rounded-lg shadow-lg">
            <div>
                <img src={proj.screenshot} alt={proj.name} className="rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold text-purple-400">{proj.name}</h2>
            <p className="mt-5 text-lg text-purple-500">{proj.description}</p>
            <ul className="mt-5">
                {proj.tools.map((tool) => (
                    <li key={tool} className="text-lg text-purple-500">{tool}</li>
                ))}
            </ul>
        </div>
    );
}