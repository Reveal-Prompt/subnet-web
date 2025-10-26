import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  const plans = [
    {
      name: "Personal",
      price: "$10",
      billing: "billed yearly",
      monthly: "$15.00 billed monthly",
      features: {
        tokens: "5,500",
        upscales: "1,500",
        backgrounds: "4,000",
        jobs: "+",
        private: "+",
      },
    },
    {
      name: "Premium",
      price: "$15",
      billing: "billed yearly",
      monthly: "$20.00 billed monthly",
      popular: true,
      features: {
        tokens: "12,500",
        upscales: "3,500",
        backgrounds: "8,000",
        jobs: "+",
        private: "+",
      },
    },
    {
      name: "Enterprise",
      price: "$25",
      billing: "billed yearly",
      monthly: "$35.00 billed monthly",
      features: {
        tokens: "20,000",
        upscales: "7,500",
        backgrounds: "15,000",
        jobs: "+",
        private: "+",
      },
    },
  ];

  const faqs = [
    {
      question: "How does it work?",
      answer: "Our platform uses advanced AI to optimize and reveal prompts for various use cases.",
    },
    {
      question: "How long does it take to download updates?",
      answer: "Updates are typically instant and delivered through our cloud infrastructure.",
    },
    {
      question: "Do I need a designer to use this Admin Theme?",
      answer: "No, our platform is designed to be user-friendly for all skill levels.",
    },
    {
      question: "What do I need to do to start selling?",
      answer: "Simply sign up for an account and choose your preferred plan to get started.",
    },
    {
      question: "How much does Extended license cost?",
      answer: "Contact our sales team for enterprise licensing options and pricing.",
    },
    {
      question: "What platforms are compatible?",
      answer: "Our platform works on all modern web browsers and devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">PRICING</Badge>
          <h1 className="text-5xl font-semibold mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            Simple Pricing, Unbeatable Value
          </h1>
          <p className="text-muted-foreground text-md max-w-3xl mx-auto">
            Start small and free, upgrade as you go. Take control of everything with transparent pricing.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Tabs defaultValue="yearly" className="w-auto">
            <TabsList className="grid w-full grid-cols-2 bg-muted p-1">
              <TabsTrigger value="yearly" className="px-8">
                Yearly <Badge className="ml-2 bg-primary/40 font-light text-white text-xs">Save 25%</Badge>
              </TabsTrigger>
              <TabsTrigger value="monthly" className="px-8">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

<div className="grid md:grid-cols-3 gap-8 mb-24">
  {plans.map((plan) => (
    <Card 
      key={plan.name} 
      className={`relative transition-all hover:shadow-xl ${
        plan.popular ? 'border-primary border-2 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-primary-glow text-white font-light px-4 py-1">
            MOST POPULAR
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-light mb-6">{plan.name}</CardTitle>
        <div className="mb-2">
          <span className="text-5xl font-normal">{plan.price}</span>
          <span className="text-muted-foreground text-lg">/ month</span>
        </div>
        <p className="text-sm text-muted-foreground">{plan.billing}</p>
        <p className="text-xs text-muted-foreground mt-1">{plan.monthly}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {Object.entries(plan.features).map(([name, value]) => (
            <div 
              key={name}
              className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
            >
              <span className="text-sm capitalize">{name}</span>
              <span className="font-normal text-primary">{value}</span>
            </div>
          ))}
        </div>

        <Button
          variant={plan.popular ? "default" : "outline"}
          className={`w-full h-12 text-base ${
            plan.popular 
              ? 'bg-gradient-to-r from-primary to-primary-glow hover:opacity-90' 
              : ''
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  ))}
</div> */}


        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
          <h1 className="text-5xl font-semibold mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>            <p className="text-muted-foreground text-lg">
              Everything you need to know about our platform and pricing
            </p>
          </div>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
