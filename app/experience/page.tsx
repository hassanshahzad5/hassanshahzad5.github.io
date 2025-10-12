'use client'

import { useState } from 'react';
import ExperienceChip from '../components/experienceChip'
import { experienceData } from '../data/experience'

export default function Experience() {
  const [experienceSection, setExperienceSection] = useState('work')

  const renderInformation = () => {
    const matchedExperience = experienceData.find((dataBlock) => dataBlock.state === experienceSection);
    if (!matchedExperience) return <div>Coming Soon...</div>;
    if (!matchedExperience.data) return <div>Coming Soon...</div>;

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
        <button type='button' onClick={() => setExperienceSection('work')} className={`clickable base-navtab experience-navtab ${experienceSection == 'work' ? 'experience-navtab-active' : ''}`}>Work</button>
        <button type='button' onClick={() => setExperienceSection('education')} className={`clickable base-navtab experience-navtab ${experienceSection == 'education' ? 'experience-navtab-active' : ''}`}>Education</button>
        <button type='button' onClick={() => setExperienceSection('leadership')} className={`clickable base-navtab experience-navtab ${experienceSection == 'leadership' ? 'experience-navtab-active' : ''}`}>Leadership</button>
      </nav>
      <article className='w-[100%] border-1 border-zinc-800 p-4 flex flex-col gap-3'>
        {renderInformation()}
      </article>
    </section>
  );
}
