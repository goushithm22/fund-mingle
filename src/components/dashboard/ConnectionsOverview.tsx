
import React from "react";
import { Handshake, Info, MessageSquare, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

// Industry interest distribution data
const industryData = [
  { name: "SaaS", value: 35 },
  { name: "Fintech", value: 25 },
  { name: "AI/ML", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Other", value: 5 },
];

// Colors for the pie chart
const COLORS = ["#FF4141", "#FF7676", "#FFB4B4", "#FFCACA", "#FFF0F0"];

// Recent connections data
const connectionsData = [
  {
    name: "SeedSync",
    industry: "SaaS",
    founder: "Alex Chen",
    status: "Active",
    lastContact: "2 days ago"
  },
  {
    name: "FinovateTech",
    industry: "Fintech",
    founder: "Maria Rodriguez",
    status: "Active",
    lastContact: "1 week ago"
  },
  {
    name: "CogniLearn AI",
    industry: "AI/ML",
    founder: "James Wilson",
    status: "New",
    lastContact: "Today"
  },
  {
    name: "MediChain",
    industry: "Healthcare",
    founder: "Sarah Johnson",
    status: "Pending",
    lastContact: "3 days ago"
  },
  {
    name: "GreenScale",
    industry: "CleanTech",
    founder: "Michael Brown",
    status: "Active",
    lastContact: "5 days ago"
  },
];

// Vanilla JavaScript formatter function for the tooltip
const formatTooltipValue = (value) => {
  return [`${value}%`, 'Interest'];
};

const ConnectionsOverview = () => {
  // Vanilla JS functions
  const handleScheduleCall = (name) => {
    console.log(`Scheduling call with ${name}`);
    // Here you would typically open a scheduling modal or redirect
  };

  const handleMessageFounder = (name) => {
    console.log(`Messaging ${name}`);
    // Here you would typically open a messaging interface
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent activity card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest networking interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {connectionsData.slice(0, 3).map((connection, idx) => (
                <div key={idx} className="flex items-start p-3 rounded-lg border">
                  <div className="h-10 w-10 bg-[#ff4141]/10 rounded-full flex items-center justify-center mr-3">
                    <Handshake className="h-5 w-5 text-[#ff4141]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm">{connection.name}</h4>
                        <p className="text-xs text-gray-500">{connection.founder} - {connection.industry}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        connection.status === "New" 
                          ? "bg-green-100 text-green-800" 
                          : connection.status === "Active" 
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {connection.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Last contact: {connection.lastContact}</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs h-8"
                        onClick={() => handleMessageFounder(connection.founder)}
                      >
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs h-8"
                        onClick={() => handleScheduleCall(connection.founder)}
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs" size="sm">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Industry Interests */}
        <Card>
          <CardHeader>
            <CardTitle>Industry Interests</CardTitle>
            <CardDescription>Your focus areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => formatTooltipValue(value)}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Connections Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Connections</CardTitle>
          <CardDescription>Your network of founders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Founder</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connectionsData.map((connection, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{connection.name}</TableCell>
                  <TableCell>{connection.industry}</TableCell>
                  <TableCell>{connection.founder}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      connection.status === "New" 
                        ? "bg-green-100 text-green-800" 
                        : connection.status === "Active" 
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {connection.status}
                    </span>
                  </TableCell>
                  <TableCell>{connection.lastContact}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0"
                        onClick={() => handleMessageFounder(connection.founder)}
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0"
                        onClick={() => handleScheduleCall(connection.founder)}
                      >
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
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

export default ConnectionsOverview;
