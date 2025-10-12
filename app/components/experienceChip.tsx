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
    <article className='flex flex-col md:flex-row px-3 md:px-0'>
      <Image src={photo} alt={altPhotoText} width={0} height={0} className='h-30 w-30 bg-white py-2 md:p-2 md:mr-3 object-contain shrink items-center justify-center rounded-full shadow-md shadow-zinc-400'></Image>
      <div>
        <p className='text-md'>{company} • {location}</p>
        <p className='text-xs'>{industry}</p>
        <p className='text-2xl'>{role}</p>
        <p className='text-md'>{timeline}</p>
        <ul className='text-md'>
          {
            info.map((accomplishment, idx) => <li key={idx}>• {accomplishment}</li>)
          }
        </ul>

        <div className="flex flex-wrap gap-2 justify-start mt-2">
          {
            Object.entries(categorizedTech).map(([categoryName, techArray]) => (
              <div key={categoryName} className="mt-2">
                <p className="font-semibold">{categoryName}</p>
                <div className="flex flex-wrap gap-2 justify-start mt-1">
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
