import React, { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

import js from "../images/logos/javascript.png";
import py from "../images/logos/python.png";
import flask from "../images/logos/flask.png";
import nodejs from "../images/logos/nodejs.png";
import react from "../images/logos/react.png";
import redux from "../images/logos/redux.png";
import html from "../images/logos/html5.png";
import css from "../images/logos/css3.png";
import tailwind from "../images/logos/tailwindcss.png";
import figma from "../images/logos/figma.png";
import sqlite from "../images/logos/sqlite.png";
import json from "../images/logos/json.png";
import postgres from "../images/logos/postgresql.png";
import { BrowserView, MobileView } from 'react-device-detect';

type TechStackItem = {
  tech: string;
  emoji: React.ReactElement;
};

type TechStackMap = {
  Frontend: TechStackItem[];
  Backend: TechStackItem[];
  Database: TechStackItem[];
};

const techStacks: TechStackMap = {
  Frontend: [
    { tech: "Javascript", emoji: (<Image alt="tech stack" src={js} />) },
    { tech: "React", emoji: (<Image alt="tech stack" src={react} />) },
    { tech: "Redux", emoji: (<Image alt="tech stack" src={redux} />) },
    { tech: "HTML", emoji: (<Image alt="tech stack" src={html} />) },
    { tech: "CSS", emoji: (<Image alt="tech stack" src={css} />) },
    { tech: "Tailwind CSS", emoji: (<Image alt="tech stack" src={tailwind} />) },
    { tech: "Figma", emoji: (<Image alt="tech stack" src={figma} />) },

  ],
  Backend: [
    { tech: "Javascript", emoji: (<Image alt="tech stack" src={js} />) },
    { tech: "NodeJS", emoji: (<Image alt="tech stack" src={nodejs} />) },
    { tech: "Python", emoji: (<Image alt="tech stack" src={py} />) },
    { tech: "Flask", emoji: (<Image alt="tech stack" src={flask} />) },
  ],
  Database: [
    { tech: "SQLite", emoji: (<Image alt="tech stack" src={sqlite} />) },
    { tech: "JSON", emoji: (<Image alt="tech stack" src={json} />) },
    { tech: "PostgreSQL", emoji: (<Image alt="tech stack" src={postgres} />) },
  ],
};

type ImportData = {
  techStack: keyof TechStackMap;
};

function Dropdown({ techStack }: ImportData) {
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef<HTMLDivElement>(null);

  const openMenu = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = (e: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen])

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dropdownClassName = isOpen ? "" : " hidden";

  return (
    <>
      <div className="relative flex flex-col items-center lg:w-[20rem] sm:w-[8rem] h-fit rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`bg-zinc-300 lg:p-2 md:p-1.5 sm:p-1 w-full flex items-center justify-between font-Itim font-bold text-slate-900 sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg tracking-wider`}
        >
          {techStack.toUpperCase()} {isOpen ? <ChevronUpIcon className="lg:w-8 lg:h-8 sm:w-4 sm:h-4" /> : <ChevronDownIcon className="lg:w-8 lg:h-8 sm:w-4 sm:h-4" />}
        </button>

        {isOpen && (
          <div className={`relative bg-zinc-800 rounded-lg my-3 flex items-start p-2 w-full flex-wrap justify-center${dropdownClassName}`} ref={ulRef}>
            {techStacks[techStack].map((item, i) => (
              <>
                <div
                  className="flex xl:p-1.5 sm:p-0.5"
                  key={i}
                >
                  <h3 className="lg:w-[4.5vh] sm:w-[3.5vh] p-[1px]">{item.emoji}</h3>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
