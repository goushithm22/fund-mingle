
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
    founders: "Sarah Chen, David Wu",
    description: "AI-powered learning platform",
    employees: "15-30",
    location: "San Francisco, CA",
    lastUpdate: "3 days ago"
  },
  {
    id: 2,
    name: "SeedSync",
    logo: "S",
    sector: "SaaS",
    stage: "Seed",
    founders: "Michael Johnson",
    description: "Cross-platform content management tool",
    employees: "5-10",
    location: "Austin, TX",
    lastUpdate: "1 week ago"
  },
  {
    id: 3,
    name: "FinovateTech",
    logo: "F",
    sector: "Fintech",
    stage: "Seed",
    founders: "Jessica Lee, Robert Garcia",
    description: "NextGen payment processing solution",
    employees: "10-15",
    location: "New York, NY",
    lastUpdate: "2 weeks ago"
  },
  {
    id: 4,
    name: "MediChain",
    logo: "M",
    sector: "Healthcare",
    stage: "Pre-seed",
    founders: "Dr. Emily Taylor",
    description: "Blockchain for healthcare records",
    employees: "3-5",
    location: "Boston, MA",
    lastUpdate: "1 month ago"
  }
];

const metricsData = [
  { month: "Jan", connections: 3, meetings: 1, messages: 5 },
  { month: "Feb", connections: 4, meetings: 2, messages: 8 },
  { month: "Mar", connections: 2, meetings: 2, messages: 10 },
  { month: "Apr", connections: 5, meetings: 3, messages: 15 },
  { month: "May", connections: 8, meetings: 5, messages: 20 },
  { month: "Jun", connections: 10, meetings: 7, messages: 25 },
];

function StartupDetails() {
  const [selectedStartup, setSelectedStartup] = React.useState(startupData[0]);
  
  // Vanilla JS functions
  function handleSelectStartup(startup) {
    setSelectedStartup(startup);
  }
  
  function handleScheduleCall(founderName) {
    console.log("Scheduling call with " + founderName);
    // Implementation would go here
  }
  
  function handleMessageFounder(founderName) {
    console.log("Messaging " + founderName);
    // Implementation would go here
  }
  
  function handleViewTeam(startupName) {
    console.log("Viewing team for " + startupName);
    // Implementation would go here
  }
  
  function handleConnect(startupName) {
    console.log("Connecting with " + startupName);
    // Implementation would go here
  }
  
  return (
    <div className="space-y-4">
      {/* Startups Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Startup Directory</CardTitle>
              <CardDescription>Connect with innovative startups</CardDescription>
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
                <TableHead>Founders</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {startupData.map(function(startup) {
                return (
                  <TableRow 
                    key={startup.id} 
                    className={selectedStartup.id === startup.id ? "bg-gray-50" : ""}
                    onClick={function() { handleSelectStartup(startup); }}
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
                    <TableCell>{startup.founders}</TableCell>
                    <TableCell>{startup.location}</TableCell>
                    <TableCell>{startup.lastUpdate}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost">View</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
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
                <div className="text-sm text-muted-foreground">Description</div>
                <div className="text-sm font-medium text-right">{selectedStartup.description}</div>
                
                <div className="text-sm text-muted-foreground">Team Size</div>
                <div className="text-sm font-medium text-right">{selectedStartup.employees}</div>
                
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-sm font-medium text-right">{selectedStartup.location}</div>
                
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
                    onClick={function() { handleScheduleCall(selectedStartup.founders); }}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Schedule
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={function() { handleMessageFounder(selectedStartup.founders); }}
                  >
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={function() { handleViewTeam(selectedStartup.name); }}
                  >
                    <Users className="h-3 w-3 mr-1" />
                    Team
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={function() { handleConnect(selectedStartup.name); }}
                  >
                    <DollarSign className="h-3 w-3 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Engagement Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Engagement Metrics</CardTitle>
              <CardDescription>Connection history with {selectedStartup.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  config={{
                    connections: {
                      theme: {
                        light: "#ff4141",
                        dark: "#ff4141",
                      },
                    },
                    meetings: {
                      theme: {
                        light: "#3498db",
                        dark: "#3498db",
                      },
                    },
                    messages: {
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
                      dataKey="connections"
                      fill="var(--color-connections)"
                      name="Connections"
                    />
                    <Bar 
                      dataKey="meetings" 
                      fill="var(--color-meetings)" 
                      name="Meetings"
                    />
                    <Bar
                      dataKey="messages"
                      fill="var(--color-messages)"
                      name="Messages"
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
}

export default StartupDetails;
