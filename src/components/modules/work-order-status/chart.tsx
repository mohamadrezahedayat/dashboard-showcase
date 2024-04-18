"use client";
import { FC, useState } from "react";

import { IWorkOrderStatus } from "@/models/work-order-status.model";
import {
  ResponsiveContainer,
  PieChart,
  Sector,
  Legend,
  Cell,
  Pie,
} from "recharts";

const COLORS = ["var(--clr-green-dark)", "var(--clr-orange)", "var(--clr-red)"];

const renderActiveShape = (props: any) => {
  const {
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    fill,
    cx,
    cy,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontSize="13"
        textAnchor="middle"
        fill="#B8B8B8"
      >
        <tspan x={cx} dy="0em" alignmentBaseline="middle">
          {payload.name}
        </tspan>
        <tspan
          x={cx}
          fill="#535353"
          dy="1.5em"
          fontWeight="bold"
          alignmentBaseline="middle"
        >
          {payload.count}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="grid sm:grid-cols-3 sm:gap-2 md:w-[200px] md:grid-cols-1 md:gap-0 md:divide-y">
      {payload.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="flex items-center gap-2 py-1.5 sm:justify-center md:justify-start"
          >
            <div
              style={{ backgroundColor: item.color }}
              className="h-3 w-3 rounded-full"
            ></div>
            <div className="text-xs">{item.value}</div>
            <div className="ml-auto hidden text-xs font-semibold md:block">
              {item.payload.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WorkOrderChart: FC<{ data: IWorkOrderStatus[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          dataKey="count"
          innerRadius={50}
          outerRadius={80}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={(_, index) => {
            setActiveIndex(index);
          }}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          content={renderLegend}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WorkOrderChart;
