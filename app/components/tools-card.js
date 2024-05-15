// tools-card.js - This component is used to display a list of tools in a card format
// for a given skill ie (backend, frontend, etc)

import React from 'react';
import { ToolBadge } from './tool-badge';

export function ToolsCard({ title, tools }) {
    return (
        <div className="bg-slate-100 p-10 w-1/4 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-purple-400">{title}</h2>
            <ul className="list-disc mt-5">
                {tools.map((tool) => (
                    <ToolBadge key={tool} toolName={tool} className="text-lg text-purple-500">{tool}</ToolBadge>
                ))}
            </ul>
        </div>
    );
}