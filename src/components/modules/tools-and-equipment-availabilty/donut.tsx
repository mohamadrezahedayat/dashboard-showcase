'use client';

import { FC } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const POSITIVE_COLORS = ['#65e1af', '#1ac659'];
const NEGATIVE_COLORS = ['#e4a058', '#d2530e'];

const CustomLabel: FC<any> = ({ viewBox, value }) => {
  return (
    <svg
      className='recharts-text recharts-label'
      textAnchor='middle'
      dominantBaseline='central'
    >
      <text x={viewBox?.cx} y={viewBox?.cy} fill='#3d405c'>
        <tspan dy='0em' alignmentBaseline='middle' fontSize='10'>
          {value}
        </tspan>
      </text>
    </svg>
  );
};

const DonutChart: FC<any> = ( { count, total }) => {
  const remainder = total - count;
  const data = [{ value: remainder }, { value: count }];
  const isPositive = count > remainder;
  const currentPercent = ((count / total) * 100).toFixed(0);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={25}
          outerRadius={35}
          dataKey='value'
        >
          <Label
            width={30}
            position='center'
            content={<CustomLabel value={`${currentPercent}%`} />}
          />
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                isPositive
                  ? POSITIVE_COLORS[index % POSITIVE_COLORS.length]
                  : NEGATIVE_COLORS[index % NEGATIVE_COLORS.length]
              }
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
