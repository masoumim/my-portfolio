// tool-progress-bar.js - This component is used to display a progress bar for a given tool

import React from 'react';

export function ToolProgressBar({ toolName }) {
    // A collection of tools that I use in my projects
    // and my proficiency level with each one.
    const tools = {
        react: 7,
        nextjs: 7,
        ejs: 5,
        tailwindcss: 8,
        bootstrap: 6,
        daisyui: 8,
        materialui: 6,
        nodejs: 8,
        springboot: 5,
        express: 8,
        posgresql: 8,
        mongodb: 5,
        mysql: 6,
        sqlserver: 6,
        sequelize: 6,
        prisma: 7,
        redux: 7,
        jest: 7,
        mocha: 6,
        reacttestinglibrary: 7,
        firebase: 6,
        azure: 5,
        c: 5,
        cpp: 5,
        csharp: 6,
        java: 6,
        kotlin: 5,
        bash: 4,
        html: 8,
        css: 8,
        javascript: 8,
        sql: 8,
        figma: 6,
        postman: 7,
        git: 7,
        github: 7,
        heroku: 8,
        vercel: 7,
    }

    return (
        <div className="bg-gray-400 rounded-3xl">
            <div className="bg-purple-500 text-white font-bold rounded-3xl py-1 flex items-center" style={{ width: `${tools[toolName] * 10}%` }}>
                {/* <span className="ml-2">{toolName}</span> */}
            </div>
        </div>
    );
}








