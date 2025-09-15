import React, { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", income: 3500, momGrowth: 40 },
  { month: "Feb", income: 5000, momGrowth: 25 },
  { month: "Mar", income: 7000, momGrowth: 50 },
  { month: "Apr", income: 3000, momGrowth: -20 },
  { month: "May", income: 6000, momGrowth: 45 },
  { month: "Jun", income: 1000, momGrowth: -60 },
];

const Charts = () => {
  const [timeframe, setTimeframe] = useState();

  return (
    <div className="px-[12px] py-[16px] rounded-[16px] border-[2px] border-[#F2F2F2] p-6 shadow-md w-[358px] h-[412px]  mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[14px] text-[#6B7280]  font-medium ">Income Trend</h2>
          <p className="text-[14px] font-weight-[400] text-[#6B7280] ">
            Your monthly income and growth for the last 6 months
          </p>
        </div>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border-[1px] border-gray-300 rounded-md p-2 text-sm"
        >
          <option className="text-[14px] font-weight-[400] text-[#6B7280]">1 Year</option>
          <option className="text-[14px] font-weight-[400] text-[#6B7280]">6 Months</option>
          <option className="text-[14px] font-weight-[400] text-[#6B7280]">3 Months</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `$${value / 1000}k`} />
          <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
          <Tooltip
            formatter={(value, name) =>
              name === "income" ? [`$${value}`, "Income"] : [`${value}%`, "MoM Growth"]
            }
          />
          <Legend verticalAlign="bottom" />
          <Bar
            yAxisId="left"
            dataKey="income"
            fill="#7C3AED"
            barSize={40}
            name="Income"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#B91C1C"
            strokeWidth={2}
            name="MoM Growth"
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>

     
    </div>
  );
};

export default Charts;
