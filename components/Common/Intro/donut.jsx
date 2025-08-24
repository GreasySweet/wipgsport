import { BUGS } from '../../../constants/constants';

const BugDonut = () => {
  const total = BUGS.reduce((acc, bug) => acc + bug.count, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* SVG Donut */}
      <svg width="160" height="160" viewBox="0 0 160 160">
        <g transform="rotate(-90 80 80)">
          {BUGS.map((bug, i) => {
            const percent = bug.count / total;
            const dash = percent * circumference;
            const circle = (
              <circle
                key={i}
                r={radius}
                cx="80"
                cy="80"
                fill="transparent"
                stroke={bug.color}
                strokeWidth="20"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += dash;
            return circle;
          })}
        </g>
        {/* Total bugs in center */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-lg font-bold fill-current text-Snow"
        >
          {total}
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {BUGS.map((bug, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: bug.color }}
            />
            <span className="text-Snow">{bug.type} ({bug.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BugDonut;
