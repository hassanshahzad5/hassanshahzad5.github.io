import IconType from 'react-icons'
import { technologyMap } from '../data/technologyMap'

type TechnologyChipProps = {
  name?: string;
}


export default function TechnologyChip({ name }: TechnologyChipProps) {
  let techObj;
  for (const category of technologyMap) {
    const found = category.technologies.find(t => t.name === name);
    if (found) {
      techObj = found;
      break;
    }
  }

  if (!techObj) {
    techObj = { name };
  }

  const Logo = techObj.logo;

  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded-sm border-1" style={{ borderColor: techObj.color }}>
      {Logo && <Logo className="w-6 h-6 my-1" color={techObj.color} />}
      <span className="text-sm">{techObj.name}</span>
      {/* {techObj.description && (
        <span className="text-xs text-zinc-500">{techObj.description}</span>
      )} */}
    </div>
  );
}
