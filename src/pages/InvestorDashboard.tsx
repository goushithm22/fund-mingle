
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChartPie,
  Users,
  MessageSquare,
  Calendar,
  Handshake,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConnectionsOverview from "@/components/dashboard/ConnectionsOverview";
import InvestmentOpportunities from "@/components/dashboard/InvestmentOpportunities";
import StartupDetails from "@/components/dashboard/StartupDetails";

function InvestorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navigation */}
      <header className="sticky top-0 bg-white border-b z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">
              Visionaries<span className="text-[#ff4141]">Connect</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button size="sm" className="bg-[#ff4141] hover:bg-[#ff4141]/90">
              <Handshake className="mr-2 h-4 w-4" />
              Connect Now
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Dashboard Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Connections
              </CardTitle>
              <Users className="h-4 w-4 text-[#ff4141]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑2</span> new this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Potential Matches
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-[#ff4141]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑3</span> this week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Industry Interests
              </CardTitle>
              <ChartPie className="h-4 w-4 text-[#ff4141]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                SaaS, Fintech, AI/ML...
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Network Size
              </CardTitle>
              <Handshake className="h-4 w-4 text-[#ff4141]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑8</span> new connections
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="connections" className="space-y-4">
          <TabsList>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="startups">Startup Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connections" className="space-y-4">
            <ConnectionsOverview />
          </TabsContent>
          
          <TabsContent value="opportunities" className="space-y-4">
            <InvestmentOpportunities />
          </TabsContent>
          
          <TabsContent value="startups" className="space-y-4">
            <StartupDetails />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default InvestorDashboard;
