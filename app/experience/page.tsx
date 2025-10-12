'use client'

import { useState } from 'react';
import ExperienceChip from '../components/experienceChip'
import { experienceData } from '../data/experience'

export default function Experience() {
  const [experienceSection, setExperienceSection] = useState('work')

  const renderButtons = () => {
    const buttonJSX = experienceData.map((dataBlock) => {
      return (
        <button type='button' key={dataBlock.state} onClick={() => setExperienceSection(dataBlock.state)} className={`clickable base-navtab experience-navtab ${experienceSection === dataBlock.state ? 'experience-navtab-active' : ''}`}>{dataBlock.label}</button>
      )
    });

    return buttonJSX
  }

  const renderInformation = () => {
    const matchedExperience = experienceData.find((dataBlock) => dataBlock.state === experienceSection);
    if (!matchedExperience) return (<div>Coming Soon...</div>); // No 'state' matched in experience.ts data file
    if (!matchedExperience.data || matchedExperience.data.length === 0) return (<div>Coming Soon...</div>); // No data in matched 'state' data array

    const experienceJSX = matchedExperience.data.map((dp) => {
      return (
        <ExperienceChip
          key={dp.company}
          photo={dp.photo}
          altPhotoText={dp.altPhotoText}
          company={dp.company}
          location={dp.location}
          role={dp.role}
          industry={dp.industry}
          timeline={dp.timeline}
          info={dp.info}
          tech={dp.tech}
          display={dp.display}
          >
        </ExperienceChip>
      )
    });

    return experienceJSX;
  }

  return (
    <section className='w-[100%] flex flex-col justify-center md:justify-between items-center border-1 border-zinc-800 p-4 rounded-lg'>
      <h2 className='text-2xl md:text-3xl mb-3'>Experience</h2>
      <nav className='w-[100%] flex flex-row border-1 border-zinc-800'>
        {renderButtons()}
      </nav>
      <article className='w-[100%] border-1 border-zinc-800 p-4 flex flex-col gap-8'>
        {renderInformation()}
      </article>
    </section>
  );
}
