
import React from "react";
import { ChartPie, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";

const portfolioData = [
  { month: "Jan", value: 1000000 },
  { month: "Feb", value: 1050000 },
  { month: "Mar", value: 1150000 },
  { month: "Apr", value: 1250000 },
  { month: "May", value: 1400000 },
  { month: "Jun", value: 1550000 },
  { month: "Jul", value: 1800000 },
  { month: "Aug", value: 2000000 },
  { month: "Sep", value: 2200000 },
  { month: "Oct", value: 2350000 },
  { month: "Nov", value: 2400000 },
  { month: "Dec", value: 2400000 },
];

const allocationData = [
  { name: "SaaS", value: 35 },
  { name: "Fintech", value: 25 },
  { name: "AI/ML", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#FF4141", "#FF7676", "#FFB4B4", "#FFCACA", "#FFF0F0"];

const investmentsData = [
  {
    name: "SeedSync",
    sector: "SaaS",
    invested: "$350,000",
    currentValue: "$580,000",
    roi: "+65.7%",
    status: "Growing"
  },
  {
    name: "FinovateTech",
    sector: "Fintech",
    invested: "$280,000",
    currentValue: "$420,000",
    roi: "+50.0%",
    status: "Growing"
  },
  {
    name: "CogniLearn AI",
    sector: "AI/ML",
    invested: "$400,000",
    currentValue: "$740,000",
    roi: "+85.0%",
    status: "Accelerating"
  },
  {
    name: "MediChain",
    sector: "Healthcare",
    invested: "$320,000",
    currentValue: "$290,000",
    roi: "-9.4%",
    status: "Recovering"
  },
  {
    name: "GreenScale",
    sector: "CleanTech",
    invested: "$150,000",
    currentValue: "$220,000",
    roi: "+46.7%",
    status: "Growing"
  },
];

const PortfolioPerformance = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Portfolio Growth Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Portfolio Growth</CardTitle>
            <CardDescription>Year-to-date portfolio value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  line: {
                    theme: {
                      light: "#ff4141",
                      dark: "#ff4141",
                    },
                  },
                }}
              >
                <LineChart
                  data={portfolioData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="text-xs text-gray-600">{`${payload[0].payload.month}`}</p>
                            <p className="text-sm font-bold">${(payload[0].value / 1000000).toFixed(2)}M</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={"var(--color-line)"}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#ff4141" }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Portfolio Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Sector Allocation</CardTitle>
            <CardDescription>Distribution by industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <PieChart width={280} height={280}>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => {
                    return [`${value}%`, 'Allocation'];
                  }}
                />
              </PieChart>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Investment Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Investments</CardTitle>
          <CardDescription>Overview of current portfolio companies</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Amount Invested</TableHead>
                <TableHead>Current Value</TableHead>
                <TableHead>ROI</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investmentsData.map((investment) => (
                <TableRow key={investment.name}>
                  <TableCell className="font-medium">{investment.name}</TableCell>
                  <TableCell>{investment.sector}</TableCell>
                  <TableCell>{investment.invested}</TableCell>
                  <TableCell>{investment.currentValue}</TableCell>
                  <TableCell className={
                    investment.roi.startsWith("+") 
                      ? "text-green-600" 
                      : "text-red-500"
                  }>
                    {investment.roi}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      investment.status === "Accelerating" 
                        ? "bg-green-100 text-green-800" 
                        : investment.status === "Growing" 
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {investment.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioPerformance;
