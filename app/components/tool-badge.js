// tool-badge.js - This component is used to display a single tool in a badge format (Name + Icon)

import React from 'react';
import Image from 'next/image';
import { ToolProgressBar } from './tool-progress-bar';

export function ToolBadge({ toolName }) {

    // Get the full name of the tool
    const getFullName = (toolName) => {
        switch (toolName) {
            case 'react':
                return 'React';
            case 'nextjs':
                return 'Next.js';
            case 'ejs':
                return 'EJS';
            case 'tailwindcss':
                return 'Tailwind CSS';
            case 'bootstrap':
                return 'Bootstrap';
            case 'daisyui':
                return 'DaisyUI';
            case 'materialui':
                return 'Material UI';
            case 'nodejs':
                return 'Node.js';
            case 'springboot':
                return 'Spring Boot';
            case 'express':
                return 'Express';
            case 'posgresql':
                return 'PostgreSQL';
            case 'mongodb':
                return 'MongoDB';
            case 'mysql':
                return 'MySQL';
            case 'sqlserver':
                return 'SQL Server';
            case 'sequelize':
                return 'Sequelize';
            case 'prisma':
                return 'Prisma';
            case 'redux':
                return 'Redux';
            case 'jest':
                return 'Jest';
            case 'mocha':
                return 'Mocha';
            case 'reacttestinglibrary':
                return 'Testing Library';
            case 'firebase':
                return 'Firebase';
            case 'azure':
                return 'Azure';
            case 'c':
                return 'C';
            case 'cpp':
                return 'C++';
            case 'csharp':
                return 'C#';
            case 'java':
                return 'Java';
            case 'kotlin':
                return 'Kotlin';
            case 'bash':
                return 'Bash';
            case 'html':
                return 'HTML';
            case 'css':
                return 'CSS';
            case 'javascript':
                return 'JavaScript';
            case 'sql':
                return 'SQL';
            case 'figma':
                return 'Figma';
            case 'postman':
                return 'Postman';
            case 'git':
                return 'Git';
            case 'github':
                return 'GitHub';
            case 'heroku':
                return 'Heroku';
            case 'vercel':
                return 'Vercel';
            case 'swaggerui':
                return 'Swagger UI';
            default:
                return toolName;
        }
    }

    return (
        <div className='mb-5'>
            <div className="flex items-center mb-2">
                <Image src={`/${toolName}.svg`} width={30} height={30} />
                <span className="ml-2">{getFullName(toolName)}</span>
            </div>
            <ToolProgressBar toolName={toolName} />
        </div>
    );
}