import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function PriceChart({ data }: any) {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line dataKey="price" stroke="#7C8CFF" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}