import Image from 'next/image';
import { technologyMap } from '../data/technologyMap'
import TechnologyChip from './technologyChip'

type ChipProps = {
  photo: string;
  altPhotoText: string;
  company: string;
  location: string;
  role: string;
  industry: string;
  timeline: string;
  info: string[];
  tech: string[];
  display: boolean;
}

export default function ExperienceChip({photo, altPhotoText, company, location, role, industry, timeline, info, tech, display}: ChipProps) {
  const categorizedTech: Record<string, object[]> = {};

  tech.forEach((techName) => {
    let found = false;

    technologyMap.forEach((category) => {
      const match = category.technologies.find(t => t.name === techName);
      if (match) {
        if (!categorizedTech[category.name]) categorizedTech[category.name] = [];
        categorizedTech[category.name].push(match);
        found = true;
      }
    });

    if (!found) {
      const otherCategory = technologyMap.find(c => c.name === 'Other');
      if (!categorizedTech['Other']) categorizedTech['Other'] = [];
      if (otherCategory) {
        const match = otherCategory.technologies.find(t => t.name === techName);
        if (match) categorizedTech['Other'].push(match);
        else categorizedTech['Other'].push({ name: techName });
      } else {
        categorizedTech['Other'].push({ name: techName });
      }
    }
  });

  return (
    <article className='flex flex-col md:flex-row md:mx-2'>
      <Image src={photo} alt={altPhotoText} width={0} height={0} className='h-[50px] w-[100%] md:h-20 md:w-20 bg-white p-2 mb-2 md:mb-0 md:mr-3 object-contain shrink items-center justify-center rounded-sm md:rounded-full md:shadow-md md:shadow-zinc-400'></Image>
      <div>
        <p className='text-xs md:text-md text-start'>{company} • {location}</p>
        <p className='text-2xl text-start'>{role}</p>
        {/* <p className='text-xs text-center md:text-start'>{industry}</p> */}
        <p className='text-xs md:text-md text-start mb-2'>{timeline}</p>
        <ul className='text-md text-start'>
          { info.map((accomplishment, idx) => <li key={idx}>{accomplishment}</li>) }
        </ul>

        <div className="flex flex-col gap-1 md:gap-2 justify-start mt-1">
          {
            Object.entries(categorizedTech).map(([categoryName, techArray]) => (
              <div key={categoryName} className="flex flex-col md:grid md:grid-cols-4 gap-3 items-start justify-center mt-1 md:mt-3 h-[100%]">
                <p className="text-sm md:text-md flex font-semibold md:col-span-1 border-b-2 md:border-r-3 md:border-b-0 border-zinc-700 px-1 md:px-1 py-0.5 h-[100%] w-[100%]">{categoryName}</p>
                <div className="flex flex-row flex-wrap gap-2 items-center md:justify-start md:col-span-3 h-[100%] w-[100%]">
                  {techArray.map((technology, idx) => (
                    <TechnologyChip key={idx} {...technology} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </article>
  );
}
