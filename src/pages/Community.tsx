import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, Heart, Star, Sparkles, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Community() {
  const prompts = [
    {
      id: 1,
      title: "Professional Marketing Copy Generator",
      description: "Generate compelling marketing copy that converts. Perfect for ads, landing pages, and email campaigns.",
      author: "Sarah Chen",
      avatar: "/placeholder-avatar.jpg",
      category: "Marketing",
      likes: 234,
      downloads: 456,
      rating: 4.8,
      isFree: true,
    },
    {
      id: 2,
      title: "Technical Documentation Assistant",
      description: "Create clear, comprehensive technical documentation. Ideal for APIs, software guides, and tutorials.",
      author: "Mike Thompson",
      avatar: "/placeholder-avatar.jpg",
      category: "Development",
      likes: 567,
      downloads: 892,
      rating: 4.9,
      isFree: true,
    },
    {
      id: 3,
      title: "Creative Content Writer",
      description: "Craft engaging blog posts, articles, and creative content with unique perspectives and storytelling.",
      author: "Emma Rodriguez",
      avatar: "/placeholder-avatar.jpg",
      category: "Content",
      likes: 892,
      downloads: 1234,
      rating: 4.7,
      isFree: true,
    },
    {
      id: 4,
      title: "Image Generation Expert",
      description: "Master AI image generation with detailed prompts for DALL-E, Midjourney, and Stable Diffusion.",
      author: "Alex Kim",
      avatar: "/placeholder-avatar.jpg",
      category: "Design",
      likes: 445,
      downloads: 678,
      rating: 4.6,
      isFree: true,
    },
    {
      id: 5,
      title: "Code Review & Optimization",
      description: "Analyze and improve your code with best practices, performance tips, and clean code suggestions.",
      author: "Jordan Lee",
      avatar: "/placeholder-avatar.jpg",
      category: "Development",
      likes: 356,
      downloads: 523,
      rating: 4.8,
      isFree: true,
    },
    {
      id: 6,
      title: "SEO Content Optimizer",
      description: "Create SEO-friendly content that ranks. Includes keyword optimization and meta description generation.",
      author: "Taylor Smith",
      avatar: "/placeholder-avatar.jpg",
      category: "Marketing",
      likes: 678,
      downloads: 945,
      rating: 4.9,
      isFree: true,
    },
  ];

  const categories = ["All", "Marketing", "Development", "Content", "Design"];

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className=" mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2 text-white">
            Free Prompt Marketplace
          </h1>
          {/* <p className="text-muted-foreground text-xs">
            Discover and use community-shared prompts for free
          </p> */}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input placeholder="Search prompts..." className="flex-1" />
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <Button key={cat} variant="outline" size="sm">
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt) => (
            <Card key={prompt.id} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{prompt.category}</Badge>
                  {prompt.isFree && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      FREE
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg line-clamp-2">{prompt.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {prompt.description}
                </p>

                {/* Author & Stats (single line) */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={prompt.avatar} />
                    <AvatarFallback>{prompt.author[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">{prompt.author}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {prompt.downloads}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {prompt.rating}
                  </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-2">
                    <Copy className="h-3 w-3" />
                    Use Prompt
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Share Your Own Prompts</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community and share your best prompts. Help others while building your reputation.
            </p>
            <Button size="lg" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Start Sharing
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
