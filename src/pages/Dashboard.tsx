import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Sparkles, Eye, TrendingUp, Clock, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const stats = [
    { label: "Prompts Optimized", value: "1,247", change: "+12.5%", icon: Sparkles, color: "text-primary" },
    { label: "Prompts Revealed", value: "856", change: "+8.3%", icon: Eye, color: "text-primary" },
    { label: "Total Usage", value: "2,103", change: "+10.2%", icon: Activity, color: "text-primary" },
    { label: "Success Rate", value: "94.7%", change: "+2.1%", icon: TrendingUp, color: "text-primary" },
  ];

  const recentActivity = [
    { action: "Optimized", prompt: "Generate marketing copy for...", time: "2 minutes ago", type: "optimize" },
    { action: "Revealed", prompt: "AI-generated content analysis", time: "15 minutes ago", type: "reveal" },
    { action: "Optimized", prompt: "Create social media post about...", time: "1 hour ago", type: "optimize" },
    { action: "Revealed", prompt: "Technical documentation prompt", time: "2 hours ago", type: "reveal" },
  ];

  const usageData = [
    { model: "GPT-4", usage: 456, percentage: 65 },
    { model: "GPT-3.5", usage: 234, percentage: 33 },
    { model: "Claude", usage: 89, percentage: 12 },
  ];

  return (
    <div className="flex-1 bg-background">
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        
        {/* Responsive Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight">
            Dashboard
          </h1>
          <Button 
            className="gap-2 text-sm sm:text-base w-full sm:w-auto py-5 sm:py-2"
          >
            <Sparkles className="h-4 w-4" />
            New Optimization
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="glow-border">
              <Card className="rounded-sm border-0 glow-border-content">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-medium">{stat.value}</p>
                      <p className="text-xs text-primary">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-sm bg-primary/10 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-sm bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div
                      className={`p-2 rounded-sm ${
                        activity.type === "optimize"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {activity.type === "optimize" ? (
                        <Sparkles className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-light text-sm">{activity.action}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {activity.prompt}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Model Usage */}
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI Model Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {usageData.map((model) => (
                  <div key={model.model} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light">{model.model}</span>
                      <span className="text-sm text-muted-foreground">
                        {model.usage} uses
                      </span>
                    </div>
                    <Progress value={model.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
