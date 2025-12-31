import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, TrendingUp, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/arogyam-logo.png";

const Progress = () => {
  const recentEntries = [
    {
      date: "Today",
      mood: 8, 
      notes: "Feeling energetic after the morning routine. Sleep was good.",
      timestamp: "2 hours ago"
    },
    {
      date: "Yesterday",
      mood: 7,
      notes: "Slight digestive discomfort after lunch. Evening meditation helped.",
      timestamp: "1 day ago" 
    },
    {
      date: "2 days ago",
      mood: 9,
      notes: "Excellent day! All meals on time, great energy levels.",
      timestamp: "2 days ago"
    }
  ];

  const getMoodColor = (mood: number) => {
    if (mood >= 8) return "text-green-600";
    if (mood >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getMoodBadge = (mood: number) => {
    if (mood >= 8) return "Excellent";
    if (mood >= 6) return "Good";
    return "Needs Attention";
  };

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
            <Link to="/patient/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link>
            <Link to="/patient/meal-plans" className="text-muted-foreground hover:text-primary">Meal Plans</Link>
            <Link to="/patient/progress" className="text-primary font-medium">Progress</Link>
            <Link to="/patient/find-diet" className="text-muted-foreground hover:text-primary">Find Diet</Link>
            <Link to="/patient/profile" className="text-muted-foreground hover:text-primary">Profile</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Input Form */}
        <Card className="wellness-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Today's Progress Update
            </CardTitle>
            <CardDescription>Share how you're feeling and any notes for your wellness journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label htmlFor="mood" className="text-sm font-medium">How are you feeling today? (1-10 scale)</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Input 
                    id="mood"
                    type="range" 
                    min="1" 
                    max="10" 
                    defaultValue="7"
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary min-w-[3ch]">7</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-sm font-medium">Progress Notes</Label>
                <Textarea 
                  id="notes"
                  placeholder="Share any observations, symptoms, improvements, or concerns you'd like to track or discuss with your doctor..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <Button className="btn-wellness w-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Update Progress
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Progress Entries */}
        <Card className="wellness-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Progress Entries
            </CardTitle>
            <CardDescription>Your wellness tracking history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEntries.map((entry, index) => (
                <div key={index} className="p-4 border rounded-xl wellness-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{entry.date}</h4>
                      <p className="text-xs text-muted-foreground">{entry.timestamp}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${getMoodColor(entry.mood)}`}>
                          {entry.mood}/10
                        </span>
                      </div>
                      <Badge 
                        variant={entry.mood >= 8 ? 'default' : entry.mood >= 6 ? 'secondary' : 'destructive'}
                        className="text-xs mt-1"
                      >
                        {getMoodBadge(entry.mood)}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.notes}
                  </p>
                </div>
              ))}
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

export default Progress;