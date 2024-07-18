import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Physical Environment', value: 400 },
  { name: 'Career', value: 300 },
  { name: 'Family & Friends', value: 300 },
  { name: 'Romance', value: 200 },
  { name: 'Personal Growth', value: 400 },
  { name: 'Money', value: 300 },
  { name: 'Health', value: 300 },
  { name: 'Recreation', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SimplePieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SimplePieChart;
