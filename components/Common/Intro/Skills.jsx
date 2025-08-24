import LinearBar from './LinearBar';
import { SKILLS } from '../../../constants/constants';
import BugDonut from './donut';

const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 pt-6">
      <span className="text-Snow text-xs font-bold bg-gradient-to-bl">
        Unique Bugs Found
      </span>
      <BugDonut />
    </div>
  );
};

export default Skills;

