import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Seg", eventos: 12 },
  { date: "Ter", eventos: 8 },
  { date: "Qua", eventos: 15 },
  { date: "Qui", eventos: 6 },
  { date: "Sex", eventos: 10 },
  { date: "Sáb", eventos: 4 },
  { date: "Dom", eventos: 3 },
];

const EventsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorEventos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="date"
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Area
          type="monotone"
          dataKey="eventos"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorEventos)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EventsChart;
