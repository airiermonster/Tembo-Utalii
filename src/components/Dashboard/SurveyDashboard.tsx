import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Sample data
const ageDistribution = [
  { age: "18-24", count: 45 },
  { age: "25-34", count: 120 },
  { age: "35-44", count: 80 },
  { age: "45-54", count: 60 },
  { age: "55+", count: 35 },
];

const attractionsVisited = [
  { name: "Stone Town", visitors: 280 },
  { name: "Jozani Forest", visitors: 175 },
  { name: "Nungwi Beach", visitors: 310 },
  { name: "Prison Island", visitors: 190 },
  { name: "Spice Farms", visitors: 220 },
];

const satisfactionData = [
  { name: "Very Satisfied", value: 45 },
  { name: "Satisfied", value: 30 },
  { name: "Neutral", value: 15 },
  { name: "Dissatisfied", value: 7 },
  { name: "Very Dissatisfied", value: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const SurveyDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Survey Analytics Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">340</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2/5</div>
            <p className="text-xs text-muted-foreground">
              +0.3 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Popular Attraction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Nungwi Beach</div>
            <p className="text-xs text-muted-foreground">
              310 visitors
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="demographics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Age Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attractions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Popular Attractions</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attractionsVisited}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="visitors" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overall Satisfaction</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};