import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, User, Upload, FileText, Scale, Target } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/arogyam-logo.png";

const Profile = () => {
  const doshaData = {
    primary: "Vata",
    scores: {
      vata: 65,
      pitta: 25, 
      kapha: 10
    },
    elements: {
      vata: "Air + Space",
      pitta: "Fire + Water", 
      kapha: "Earth + Water"
    }
  };

  const prescriptions = [
    {
      title: "Blood Test Report",
      date: "Jan 15, 2024",
      type: "Lab Report",
      doctor: "Dr. Priya Sharma"
    },
    {
      title: "Ayurvedic Consultation",
      date: "Jan 10, 2024", 
      type: "Consultation",
      doctor: "Dr. Priya Sharma"
    },
    {
      title: "Dietary Guidelines",
      date: "Dec 28, 2023",
      type: "Prescription",
      doctor: "Dr. Priya Sharma"
    }
  ];

  const getDoshaSymbol = (dosha: string) => {
    switch (dosha.toLowerCase()) {
      case 'vata': return '🌀';
      case 'pitta': return '▲';
      case 'kapha': return '●';
      default: return '○';
    }
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
            <Link to="/patient/progress" className="text-muted-foreground hover:text-primary">Progress</Link>
            <Link to="/patient/find-diet" className="text-muted-foreground hover:text-primary">Find Diet</Link>
            <Link to="/patient/profile" className="text-primary font-medium">Profile</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ayurvedic Profile */}
          <div className="space-y-6">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Ayurvedic Profile
                </CardTitle>
                <CardDescription>Your constitutional assessment and wellness data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Date of Assessment</Label>
                  <p className="text-lg font-semibold">December 15, 2023</p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Label className="text-sm font-medium text-muted-foreground">Primary Dosha</Label>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-3xl">{getDoshaSymbol(doshaData.primary)}</span>
                    <div>
                      <p className="text-xl font-bold text-primary">{doshaData.primary}</p>
                      <p className="text-sm text-muted-foreground">{doshaData.elements[doshaData.primary.toLowerCase() as keyof typeof doshaData.elements]}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-muted-foreground mb-3 block">All Dosha Scores</Label>
                  <div className="space-y-3">
                    {Object.entries(doshaData.scores).map(([dosha, score]) => (
                      <div key={dosha} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getDoshaSymbol(dosha)}</span>
                          <span className="font-medium capitalize">{dosha}</span>
                        </div>
                        <Badge variant={dosha === doshaData.primary.toLowerCase() ? 'default' : 'secondary'}>
                          {score}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Health Goals & Measurements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Current Weight</Label>
                    <Input defaultValue="65 kg" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Target Weight</Label>
                    <Input defaultValue="62 kg" />
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Height</Label>
                  <Input defaultValue="165 cm" />
                </div>

                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Health Goals</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Weight Management</Badge>
                    <Badge variant="outline">Better Digestion</Badge>
                    <Badge variant="outline">Improved Energy</Badge>
                    <Badge variant="outline">Better Sleep</Badge>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Assigned Doctor</Label>
                  <p className="text-lg font-semibold">Dr. Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Ayurvedic Specialist</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prescriptions & Reports */}
          <Card className="wellness-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Prescriptions & Reports
              </CardTitle>
              <CardDescription>Medical documents accessible to you and your doctor</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6 btn-wellness">
                <Upload className="w-4 h-4 mr-2" />
                Upload New Document
              </Button>

              <div className="space-y-4">
                {prescriptions.map((doc, index) => (
                  <div key={index} className="p-4 border rounded-xl wellness-card hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">by {doc.doctor}</p>
                        <p className="text-xs text-muted-foreground">{doc.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {doc.type}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
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

export default Profile;