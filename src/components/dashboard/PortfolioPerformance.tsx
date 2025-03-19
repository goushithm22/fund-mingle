
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

const connectionsData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 22 },
  { month: "Apr", value: 28 },
  { month: "May", value: 35 },
  { month: "Jun", value: 42 },
  { month: "Jul", value: 48 },
  { month: "Aug", value: 55 },
  { month: "Sep", value: 62 },
  { month: "Oct", value: 68 },
  { month: "Nov", value: 72 },
  { month: "Dec", value: 80 },
];

const allocationData = [
  { name: "SaaS", value: 35 },
  { name: "Fintech", value: 25 },
  { name: "AI/ML", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#FF4141", "#FF7676", "#FFB4B4", "#FFCACA", "#FFF0F0"];

const connectionsHistoryData = [
  {
    name: "SeedSync",
    sector: "SaaS",
    founder: "Michael Johnson",
    status: "Active",
    connected: "Jan 15, 2023",
    meetings: "5"
  },
  {
    name: "FinovateTech",
    sector: "Fintech",
    founder: "Jessica Lee",
    status: "Active",
    connected: "Mar 22, 2023",
    meetings: "3"
  },
  {
    name: "CogniLearn AI",
    sector: "AI/ML",
    founder: "Sarah Chen",
    status: "Active",
    connected: "Nov 10, 2022",
    meetings: "8"
  },
  {
    name: "MediChain",
    sector: "Healthcare",
    founder: "Dr. Emily Taylor",
    status: "Inactive",
    connected: "Feb 5, 2023",
    meetings: "2"
  },
  {
    name: "GreenScale",
    sector: "CleanTech",
    founder: "Michael Brown",
    status: "Active",
    connected: "Apr 18, 2023",
    meetings: "4"
  },
];

function PortfolioPerformance() {
  // Fix the formatter function to handle string concatenation properly
  function formatTooltipValue(value) {
    return [value + "%", "Allocation"];
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Connections Growth Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Network Growth</CardTitle>
            <CardDescription>Year-to-date connections</CardDescription>
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
                  data={connectionsData}
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
                  />
                  <Tooltip
                    content={function({ active, payload }) {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="text-xs text-gray-600">{payload[0].payload.month}</p>
                            <p className="text-sm font-bold">{payload[0].value} connections</p>
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
        
        {/* Industry Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Sector Distribution</CardTitle>
            <CardDescription>Connections by industry</CardDescription>
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
                  label={function(entry) {
                    return entry.name + " " + entry.value + "%";
                  }}
                  labelLine={false}
                >
                  {allocationData.map(function(entry, index) {
                    return (
                      <Cell key={"cell-" + index} fill={COLORS[index % COLORS.length]} />
                    );
                  })}
                </Pie>
                <Tooltip formatter={formatTooltipValue} />
              </PieChart>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Connection History Table */}
      <Card>
        <CardHeader>
          <CardTitle>Connection History</CardTitle>
          <CardDescription>Overview of your startup connections</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Founder</TableHead>
                <TableHead>Connected Since</TableHead>
                <TableHead>Meetings</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connectionsHistoryData.map(function(connection) {
                return (
                  <TableRow key={connection.name}>
                    <TableCell className="font-medium">{connection.name}</TableCell>
                    <TableCell>{connection.sector}</TableCell>
                    <TableCell>{connection.founder}</TableCell>
                    <TableCell>{connection.connected}</TableCell>
                    <TableCell>{connection.meetings}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        connection.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {connection.status}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default PortfolioPerformance;
