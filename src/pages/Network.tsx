import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Activity, TrendingUp, Zap, Award, Server, CheckCircle2 } from "lucide-react";

export default function Network() {
  const metrics = [
    { label: "Total Users", value: "12,543", icon: Users, trend: "+12.5%" },
    { label: "Prompts Revealed", value: "45,231", icon: Activity, trend: "+8.3%" },
    { label: "Prompts Optimized", value: "38,942", icon: TrendingUp, trend: "+15.2%" },
    { label: "Tokens Saved", value: "2.3M", icon: Zap, trend: "+22.1%" },
  ];

  const miners = [
    { id: "miner-001", address: "0x742d...3f2a", stake: "150,000", uptime: "99.8%", status: "active", rewards: "12,450" },
    { id: "miner-002", address: "0x8f3b...9c1d", stake: "125,000", uptime: "99.5%", status: "active", rewards: "10,230" },
    { id: "miner-003", address: "0x3a7c...6e4b", stake: "95,000", uptime: "98.9%", status: "active", rewards: "8,150" },
    { id: "miner-004", address: "0x1d9e...4f8a", stake: "110,000", uptime: "99.2%", status: "active", rewards: "9,340" },
    { id: "miner-005", address: "0x6b2f...7d3c", stake: "88,000", uptime: "97.5%", status: "maintenance", rewards: "7,620" },
  ];

  const validators = [
    { id: "val-001", address: "0x9f4a...2e1b", stake: "500,000", uptime: "99.9%", status: "active", validations: "15,432" },
    { id: "val-002", address: "0x2c8d...5f3a", stake: "450,000", uptime: "99.8%", status: "active", validations: "14,201" },
    { id: "val-003", address: "0x7e1b...9a4c", stake: "425,000", uptime: "99.7%", status: "active", validations: "13,890" },
  ];

  const supportedModels = [
    { name: "GPT-4", provider: "OpenAI", status: "active", requests: "23,450" },
    { name: "GPT-3.5 Turbo", provider: "OpenAI", status: "active", requests: "45,230" },
    { name: "Claude 3", provider: "Anthropic", status: "active", requests: "18,920" },
    { name: "Claude 2", provider: "Anthropic", status: "active", requests: "12,340" },
    { name: "Gemini Pro", provider: "Google", status: "active", requests: "15,670" },
    { name: "LLaMA 2", provider: "Meta", status: "active", requests: "8,920" },
  ];

  const achievements = [
    { title: "1M Tokens Saved", description: "Milestone achievement", icon: Award },
    { title: "10K Users", description: "Community growth", icon: Users },
    { title: "99% Uptime", description: "Network reliability", icon: Server },
    { title: "50K Optimizations", description: "Processing milestone", icon: Zap },
  ];

  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-medium mb-8">Network Overview</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <Card key={metric.label} className="rounded-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                  <h3 className="text-2xl font-medium mb-2">{metric.value}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {metric.trend}
                  </Badge>
                </div>
                <div className="p-3 rounded-sm bg-primary/10">
                  <metric.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="rounded-sm mb-8">
        <CardHeader>
          <CardTitle>Network Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="p-4 rounded-sm border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-primary/10">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-light text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Miners, Validators, Models */}
      <Tabs defaultValue="miners" className="space-y-6">
        <TabsList>
          <TabsTrigger value="miners">Miners</TabsTrigger>
          <TabsTrigger value="validators">Validators</TabsTrigger>
          <TabsTrigger value="models">Supported Models</TabsTrigger>
        </TabsList>

        <TabsContent value="miners">
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle>Active Miners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Miner ID</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Address</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Stake</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Uptime</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Status</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Rewards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {miners.map((miner) => (
                      <tr key={miner.id} className="border-b border-border hover:bg-muted/50">
                        <td className="p-3 text-sm font-mono">{miner.id}</td>
                        <td className="p-3 text-sm font-mono">{miner.address}</td>
                        <td className="p-3 text-sm">{miner.stake}</td>
                        <td className="p-3 text-sm">{miner.uptime}</td>
                        <td className="p-3">
                          <Badge variant={miner.status === "active" ? "default" : "secondary"}>
                            {miner.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-sm font-light">{miner.rewards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validators">
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle>Active Validators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Validator ID</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Address</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Stake</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Uptime</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Status</th>
                      <th className="text-left p-3 text-xs text-muted-foreground font-light">Validations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {validators.map((validator) => (
                      <tr key={validator.id} className="border-b border-border hover:bg-muted/50">
                        <td className="p-3 text-sm font-mono">{validator.id}</td>
                        <td className="p-3 text-sm font-mono">{validator.address}</td>
                        <td className="p-3 text-sm">{validator.stake}</td>
                        <td className="p-3 text-sm">{validator.uptime}</td>
                        <td className="p-3">
                          <Badge variant="default" className="gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            {validator.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-sm font-light">{validator.validations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models">
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle>Supported AI Models</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportedModels.map((model) => (
                  <div
                    key={model.name}
                    className="p-4 rounded-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-light mb-1">{model.name}</h4>
                        <p className="text-xs text-muted-foreground">{model.provider}</p>
                      </div>
                      <Badge variant="default" className="text-xs">
                        {model.status}
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Requests: </span>
                      <span className="font-light">{model.requests}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
