import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, Zap, TrendingUp, Plus, Sparkles } from "lucide-react";

export default function Models() {
  const [open, setOpen] = useState(false);

  const supportedModels = [
    {
      name: "GPT-4",
      provider: "OpenAI",
      status: "active",
      maxTokens: "8,192",
      avgLatency: "1.2s",
      costPer1k: "$0.03",
      features: ["Chat", "Code", "Analysis"],
    },
    {
      name: "GPT-3.5 Turbo",
      provider: "OpenAI",
      status: "active",
      maxTokens: "4,096",
      avgLatency: "0.8s",
      costPer1k: "$0.002",
      features: ["Chat", "Fast", "Cost-effective"],
    },
    {
      name: "Claude 3 Opus",
      provider: "Anthropic",
      status: "active",
      maxTokens: "200,000",
      avgLatency: "1.5s",
      costPer1k: "$0.015",
      features: ["Long context", "Analysis", "Reasoning"],
    },
    {
      name: "Claude 3 Sonnet",
      provider: "Anthropic",
      status: "active",
      maxTokens: "200,000",
      avgLatency: "1.1s",
      costPer1k: "$0.003",
      features: ["Balanced", "Fast", "Accurate"],
    },
    {
      name: "Gemini Pro",
      provider: "Google",
      status: "active",
      maxTokens: "32,000",
      avgLatency: "1.0s",
      costPer1k: "$0.00125",
      features: ["Multimodal", "Fast", "Cost-effective"],
    },
    {
      name: "LLaMA 2 70B",
      provider: "Meta",
      status: "active",
      maxTokens: "4,096",
      avgLatency: "1.3s",
      costPer1k: "$0.001",
      features: ["Open source", "Local", "Private"],
    },
    {
      name: "Mistral Large",
      provider: "Mistral AI",
      status: "active",
      maxTokens: "32,000",
      avgLatency: "0.9s",
      costPer1k: "$0.008",
      features: ["Fast", "Multilingual", "Code"],
    },
    {
      name: "Command R+",
      provider: "Cohere",
      status: "active",
      maxTokens: "128,000",
      avgLatency: "1.2s",
      costPer1k: "$0.003",
      features: ["RAG", "Enterprise", "Accurate"],
    },
    {
      name: "GPT-5",
      provider: "OpenAI",
      status: "coming_soon",
      maxTokens: "TBA",
      avgLatency: "TBA",
      costPer1k: "TBA",
      features: ["Advanced", "Multimodal", "Enhanced"],
    },
    {
      name: "Claude 4",
      provider: "Anthropic",
      status: "coming_soon",
      maxTokens: "TBA",
      avgLatency: "TBA",
      costPer1k: "TBA",
      features: ["Next-gen", "Ultra-long context", "Enhanced"],
    },
    {
      name: "Gemini Ultra 2",
      provider: "Google",
      status: "coming_soon",
      maxTokens: "TBA",
      avgLatency: "TBA",
      costPer1k: "TBA",
      features: ["Ultra-capable", "Multimodal", "Advanced"],
    },
  ];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="p-6 sm:p-8 bg-background min-h-screen">
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-medium text-center sm:text-left">
          Supported Models
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 w-full sm:w-auto justify-center">
              <Plus className="h-4 w-4" />
              Request New Model
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request New Model</DialogTitle>
              <DialogDescription>
                Submit a request for a new AI model to be added to our platform.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <Input placeholder="Model Name *" required />
              <Input placeholder="Provider *" required />
              <Input type="email" placeholder="Your Email *" required />
              <Textarea
                placeholder="Why do you need this model? *"
                className="min-h-24"
                required
              />
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Submit Request</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active Models</p>
                <h3 className="text-2xl font-medium">{supportedModels.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Requests</p>
                <h3 className="text-2xl font-medium">134K</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg Response Time</p>
                <h3 className="text-2xl font-medium">1.1s</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {supportedModels.map((model) => (
          <Card
            key={model.name}
            className={`rounded-sm hover:border-primary/50 transition-colors ${
              model.status === "coming_soon"
                ? "relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/5 to-primary-glow/5"
                : ""
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-light mb-1">
                    {model.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{model.provider}</p>
                </div>
                {model.status === "active" ? (
                  <Badge variant="default" className="gap-1 font-light">
                    <CheckCircle2 className="h-3 w-3" />
                    {model.status}
                  </Badge>
                ) : (
                  <Badge className="gap-1 font-light bg-gradient-to-r from-primary to-primary/40 text-primary-foreground border-0">
                    <Sparkles className="h-3 w-3" />
                    Coming Soon
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Max Tokens</span>
                  <span className="font-light">{model.maxTokens}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Latency</span>
                  <span className="font-light">{model.avgLatency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Cost/1K</span>
                  <span className="font-light">{model.costPer1k}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex flex-wrap gap-1">
                  {model.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
