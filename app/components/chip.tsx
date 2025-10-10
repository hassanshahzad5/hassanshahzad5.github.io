import Image from 'next/image';
import { technologyMap } from '../data/technologyMap'
import TechnologyChip from '../components/technologyChip'

type ChipProps = {
  logo: string;
  altLogoText: string;
  company: string;
  location: string;
  role: string;
  industry: string;
  timeline: string;
  accomplished: string[];
  tech: string[];
}

export default function Chip({logo, altLogoText, company, location, role, industry, timeline, accomplished, tech}: ChipProps) {
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
      <Image src={logo} alt={altLogoText} width={200} height={0} className='py-2 md:p-2 md:mr-3 h-auto object-contain shrink items-center justify-center'></Image>
      <div>
        <p className='text-md'>{company} • {industry}</p>
        <p className='text-sm'>{location}</p>
        <p className='text-3xl'>{role}</p>
        <p className='text-lg'>{timeline}</p>
        <ul className='text-sm'>
          {
            accomplished.map((accomplishment, idx) => <li key={idx}>- {accomplishment}</li>)
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
