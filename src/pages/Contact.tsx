import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Twitter, Github, Send, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-6 bg-background">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-medium m-6 text-center">Contact Us</h1>
        <Card className="rounded-sm">
          <CardContent className="p-8">

            <p className="text-muted-foreground text-sm text-center mb-8">
              Please fill out the form with your contact information and a detailed message, and
              we will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div>
                <Input placeholder="Full Name *" required />
              </div>
              <div>
                <Input type="email" placeholder="Email *" required />
              </div>
              <div>
                <Input type="tel" placeholder="Phone" />
              </div>
              <div>
                <Textarea placeholder="Your Message *" className="min-h-32" required />
              </div>
                <div className="flex items-center justify-center">
                <Button type="submit" className="px-6 shadow-lg">
                  SEND MESSAGE
                </Button>
                </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 text-center mb-4">
        <div className="flex justify-center gap-0 flex-wrap">
          <Button variant="link" className="text-primary gap-2">
            <MessageCircle className="h-8 w-8 text-white text-white" />
          </Button>
          <Button variant="link" className="text-primary gap-2">
            <Twitter className="h-8 w-8 text-white" />
          </Button>
          <Button variant="link" className="text-primary gap-2">
            <Github className="h-8 w-8 text-white" />
          </Button>
          <Button variant="link" className="text-primary gap-2">
            <Send className="h-8 w-8 text-white" />
          </Button>
          <Button variant="link" className="text-primary gap-2">
            <Globe className="h-8 w-8 text-white" />
          </Button>
        </div>
      </div>
    
    </div>
  );
}
