
import React from "react";
import { Search, Filter, Calendar, MessageSquare, Users, DollarSign, ChartBar } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const startupData = [
  {
    id: 1,
    name: "CogniLearn AI",
    logo: "C",
    sector: "AI/ML",
    stage: "Series A",
    funded: "$3.2M",
    valuation: "$18M",
    growth: "+125%",
    founders: "Sarah Chen, David Wu",
    lastUpdate: "3 days ago"
  },
  {
    id: 2,
    name: "SeedSync",
    logo: "S",
    sector: "SaaS",
    stage: "Seed",
    funded: "$750K",
    valuation: "$5M",
    growth: "+75%",
    founders: "Michael Johnson",
    lastUpdate: "1 week ago"
  },
  {
    id: 3,
    name: "FinovateTech",
    logo: "F",
    sector: "Fintech",
    stage: "Seed",
    funded: "$1.2M",
    valuation: "$8M",
    growth: "+58%",
    founders: "Jessica Lee, Robert Garcia",
    lastUpdate: "2 weeks ago"
  },
  {
    id: 4,
    name: "MediChain",
    logo: "M",
    sector: "Healthcare",
    stage: "Pre-seed",
    funded: "$450K",
    valuation: "$3M",
    growth: "+32%",
    founders: "Dr. Emily Taylor",
    lastUpdate: "1 month ago"
  }
];

const metricsData = [
  { month: "Jan", revenue: 12000, users: 2500, expenses: 10000 },
  { month: "Feb", revenue: 15000, users: 3200, expenses: 11000 },
  { month: "Mar", revenue: 18000, users: 4300, expenses: 12000 },
  { month: "Apr", revenue: 24000, users: 5800, expenses: 14000 },
  { month: "May", revenue: 28000, users: 8200, expenses: 15000 },
  { month: "Jun", revenue: 35000, users: 12500, expenses: 18000 },
];

const StartupDetails = () => {
  const [selectedStartup, setSelectedStartup] = React.useState(startupData[0]);
  
  // Vanilla JS functions
  function handleSelectStartup(startup) {
    setSelectedStartup(startup);
  }
  
  function handleScheduleCall(founderName) {
    console.log(`Scheduling call with ${founderName}`);
    // Implementation would go here
  }
  
  function handleMessageFounder(founderName) {
    console.log(`Messaging ${founderName}`);
    // Implementation would go here
  }
  
  function handleViewTeam(startupName) {
    console.log(`Viewing team for ${startupName}`);
    // Implementation would go here
  }
  
  function handleInvest(startupName) {
    console.log(`Investing in ${startupName}`);
    // Implementation would go here
  }
  
  return (
    <div className="space-y-4">
      {/* Startups Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Portfolio Companies</CardTitle>
              <CardDescription>Detailed information about your invested startups</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Total Funding</TableHead>
                <TableHead>Valuation</TableHead>
                <TableHead>Growth</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {startupData.map((startup) => (
                <TableRow 
                  key={startup.id} 
                  className={selectedStartup.id === startup.id ? "bg-gray-50" : ""}
                  onClick={() => handleSelectStartup(startup)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#ff4141] flex items-center justify-center text-white font-medium">
                        {startup.logo}
                      </div>
                      <span className="font-medium">{startup.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{startup.sector}</TableCell>
                  <TableCell>{startup.stage}</TableCell>
                  <TableCell>{startup.funded}</TableCell>
                  <TableCell>{startup.valuation}</TableCell>
                  <TableCell className="text-green-600">{startup.growth}</TableCell>
                  <TableCell>{startup.lastUpdate}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Selected Startup Details */}
      {selectedStartup && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Startup Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ff4141] flex items-center justify-center text-white text-xl font-medium">
                  {selectedStartup.logo}
                </div>
                <div>
                  <CardTitle>{selectedStartup.name}</CardTitle>
                  <CardDescription>{selectedStartup.sector} - {selectedStartup.stage}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-sm text-muted-foreground">Valuation</div>
                <div className="text-sm font-medium text-right">{selectedStartup.valuation}</div>
                
                <div className="text-sm text-muted-foreground">Total Funding</div>
                <div className="text-sm font-medium text-right">{selectedStartup.funded}</div>
                
                <div className="text-sm text-muted-foreground">Growth Rate</div>
                <div className="text-sm font-medium text-right text-green-600">{selectedStartup.growth}</div>
                
                <div className="text-sm text-muted-foreground">Founders</div>
                <div className="text-sm font-medium text-right">{selectedStartup.founders}</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => handleScheduleCall(selectedStartup.founders)}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Schedule
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => handleMessageFounder(selectedStartup.founders)}
                  >
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => handleViewTeam(selectedStartup.name)}
                  >
                    <Users className="h-3 w-3 mr-1" />
                    Team
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => handleInvest(selectedStartup.name)}
                  >
                    <DollarSign className="h-3 w-3 mr-1" />
                    Invest
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Key Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Key Metrics</CardTitle>
              <CardDescription>Growth trends for {selectedStartup.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  config={{
                    revenue: {
                      theme: {
                        light: "#ff4141",
                        dark: "#ff4141",
                      },
                    },
                    users: {
                      theme: {
                        light: "#3498db",
                        dark: "#3498db",
                      },
                    },
                    expenses: {
                      theme: {
                        light: "#f39c12",
                        dark: "#f39c12",
                      },
                    },
                  }}
                >
                  <BarChart
                    data={metricsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="revenue"
                      fill="var(--color-revenue)"
                      name="Revenue"
                    />
                    <Bar 
                      dataKey="users" 
                      fill="var(--color-users)" 
                      name="Users"
                    />
                    <Bar
                      dataKey="expenses"
                      fill="var(--color-expenses)"
                      name="Expenses"
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StartupDetails;
