
import React from "react";
import { DollarSign, ArrowRight, Check, X, Clock } from "lucide-react";
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
  TableRow 
} from "@/components/ui/table";

const opportunitiesData = [
  {
    id: 1,
    name: "NexTech Solutions",
    description: "AI-driven customer support automation platform",
    sector: "SaaS/AI",
    stage: "Seed",
    raising: "$1.5M",
    minInvestment: "$25K",
    leadInvestor: "Tech Ventures",
    deadline: "15 days",
  },
  {
    id: 2,
    name: "GreenEnergy",
    description: "Renewable energy storage solutions for residential use",
    sector: "CleanTech",
    stage: "Series A",
    raising: "$5M",
    minInvestment: "$100K",
    leadInvestor: "Climate Capital",
    deadline: "30 days",
  },
  {
    id: 3,
    name: "HealthTrack",
    description: "Remote patient monitoring platform for healthcare providers",
    sector: "HealthTech",
    stage: "Seed",
    raising: "$2M",
    minInvestment: "$50K",
    leadInvestor: "Medical Ventures",
    deadline: "7 days",
  },
  {
    id: 4,
    name: "FinSecure",
    description: "Blockchain-based fraud detection for financial institutions",
    sector: "Fintech",
    stage: "Pre-seed",
    raising: "$750K",
    minInvestment: "$15K",
    leadInvestor: "Seeking lead",
    deadline: "21 days",
  },
];

const pastDealsData = [
  {
    name: "DataViz Analytics",
    sector: "Data/SaaS",
    amount: "$3.2M",
    status: "Closed",
    returns: "N/A",
    date: "2023-09-15"
  },
  {
    name: "MobilePay",
    sector: "Fintech",
    amount: "$4.5M",
    status: "Closed",
    returns: "2.3x",
    date: "2022-04-10"
  },
  {
    name: "CloudSecure",
    sector: "Cybersecurity",
    amount: "$1.8M",
    status: "Closed",
    returns: "1.7x",
    date: "2022-11-30"
  }
];

const InvestmentOpportunities = () => {
  // Vanilla JS function to view opportunity details
  function viewOpportunityDetails(id) {
    console.log(`Viewing details for opportunity ${id}`);
    // Implementation would go here
  }
  
  // Vanilla JS function to format date
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  return (
    <div className="space-y-4">
      {/* New Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {opportunitiesData.map((opportunity) => (
          <Card key={opportunity.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{opportunity.name}</CardTitle>
                  <CardDescription className="mt-2 text-xs line-clamp-2">
                    {opportunity.description}
                  </CardDescription>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded">
                  {opportunity.sector}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Stage</div>
                <div className="font-medium text-right">{opportunity.stage}</div>
                
                <div className="text-muted-foreground">Raising</div>
                <div className="font-medium text-right">{opportunity.raising}</div>
                
                <div className="text-muted-foreground">Min Investment</div>
                <div className="font-medium text-right">{opportunity.minInvestment}</div>
                
                <div className="text-muted-foreground">Lead Investor</div>
                <div className="font-medium text-right">{opportunity.leadInvestor}</div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs flex items-center gap-1 text-amber-600">
                  <Clock className="h-3 w-3" />
                  <span>{opportunity.deadline} left</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button 
                className="w-full bg-[#ff4141] hover:bg-[#ff4141]/90"
                onClick={() => viewOpportunityDetails(opportunity.id)}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Past Deals */}
      <Card>
        <CardHeader>
          <CardTitle>Past Deals</CardTitle>
          <CardDescription>Previous investment opportunities and outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Round Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Returns</TableHead>
                <TableHead>Close Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastDealsData.map((deal) => (
                <TableRow key={deal.name}>
                  <TableCell className="font-medium">{deal.name}</TableCell>
                  <TableCell>{deal.sector}</TableCell>
                  <TableCell>{deal.amount}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1">
                      {deal.status === "Closed" ? (
                        <>
                          <Check className="h-3 w-3 text-green-600" />
                          <span className="text-green-600">Closed</span>
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3 text-red-600" />
                          <span className="text-red-600">Failed</span>
                        </>
                      )}
                    </span>
                  </TableCell>
                  <TableCell>{deal.returns}</TableCell>
                  <TableCell>{formatDate(deal.date)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button variant="outline" className="text-xs flex items-center">
            View all past deals
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvestmentOpportunities;
