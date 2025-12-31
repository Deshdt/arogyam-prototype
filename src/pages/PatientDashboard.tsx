import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, Activity, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/arogyam-logo.png";

const PatientDashboard = () => {
  const stats = [
    { label: "Current Streak", value: "12 days", icon: Activity },
    { label: "Meals Completed", value: "85%", icon: Target },
    { label: "Weekly Rating", value: "8.2/10", icon: Calendar },
    { label: "Total Plans", value: "24", icon: Activity }
  ];

  const todaysMeals = [
    {
      name: "Morning Detox Tea",
      nutrients: "Antioxidants, Vitamin C",
      time: "7:00 AM",
      status: "completed"
    },
    {
      name: "Ayurvedic Breakfast Bowl",
      nutrients: "Fiber, Protein, Minerals",
      time: "9:00 AM", 
      status: "pending"
    },
    {
      name: "Balanced Lunch Plate",
      nutrients: "Complex Carbs, Healthy Fats",
      time: "1:00 PM",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Arogyam" className="w-8 h-8" />
            <h1 className="text-xl font-bold">Arogyam</h1>
          </div>
          <nav className="flex gap-6">
            <Link to="/patient/dashboard" className="text-primary font-medium">Dashboard</Link>
            <Link to="/patient/meal-plans" className="text-muted-foreground hover:text-primary">Meal Plans</Link>
            <Link to="/patient/progress" className="text-muted-foreground hover:text-primary">Progress</Link>
            <Link to="/patient/find-diet" className="text-muted-foreground hover:text-primary">Find Diet</Link>
            <Link to="/patient/profile" className="text-muted-foreground hover:text-primary">Profile</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="wellness-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Meal Plan */}
        <Card className="wellness-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Today's Meal Plan
            </CardTitle>
            <CardDescription>Your personalized Ayurvedic nutrition schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysMeals.map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-xl">
                  <div>
                    <h4 className="font-semibold">{meal.name}</h4>
                    <p className="text-sm text-muted-foreground">{meal.nutrients}</p>
                    <p className="text-xs text-primary">{meal.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {meal.status === 'completed' ? (
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    ) : (
                      <div className="w-3 h-3 border-2 border-muted rounded-full"></div>
                    )}
                    <span className="text-sm capitalize">{meal.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card className="wellness-card">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your wellness journey this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Meal Adherence</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Energy Levels</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Sleep Quality</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Chatbot - Right Corner */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full btn-wellness shadow-lg animate-glow"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default PatientDashboard;