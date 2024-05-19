// about-card.js - This component is used to display a card for the about section.

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function AboutCard() {


    return (
        <div className='bg-slate-100 rounded-lg shadow-lg py-10 px-10 flex flex-col justify-center items-center mx-auto max-w-80'>
            <p>Hi! I'm <span className="font-bold text-purple-500">Mark</span>, a <span className="font-bold text-purple-500">full-stack web developer</span> based in <span className="font-bold text-purple-500">Toronto</span>, Canada. I'm passionate about the entire web development process, but I particularly love the challenge of designing efficient <span className="font-bold text-purple-500">backend systems</span>, crafting maintainable <span className="font-bold text-purple-500">database structures</span>, and then bringing it all to life with a fast, modern <span className="font-bold text-purple-500">frontend</span> experience.</p>
            <br />
            <p>I'm an honors grad of Seneca College's <span className="font-bold text-purple-500">Computer Programming and Analysis</span> program and recently leveled up my skills with Codecademy's <span className="font-bold text-purple-500">Full Stack Engineer</span> course. I'm constantly learning and experimenting, always on the lookout for new tools and techniques that can help me build better applications.</p>
        </div>
    )
}