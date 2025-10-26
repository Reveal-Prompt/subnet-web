import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Menu, MoreVertical, Plus, Eye, Image as ImageIcon, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoogleGenAI } from "@google/genai"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function RevealPrompt() {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState<string | null>(null);
  const [outputText, setOutputText] = useState("");
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chats = [
    { title: "Chat Bot Definition", id: 1 },
    { title: "Essay: Marketing", id: 2 },
    { title: "Future of Social Media", id: 3 },
    { title: "Business Ideas", id: 4 },
  ];

  const GOOGLE_GEMINI_KEY = "AIzaSyCbzqNz9nyJL9-C14IVLbuRacuOIl3g07U";

  const ai = new GoogleGenAI({ apiKey: GOOGLE_GEMINI_KEY });


  const revealPrompt = async (output_text: string) => {

    try {
      setIsLoading(true)

      const wrappedPrompt = `
          Given the following output: "${output_text}", 
          write possible prompts that could have generated it.

          Return only the optimized prompt text.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: wrappedPrompt
      })

      if (response) {
        setIsLoading(false);
      }

      setOutputText(response.text)
    } catch (error) {
      console.error("Error generating content", error)
    }


  }
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReveal = () => {
    // Mock reveal
    revealPrompt(inputText);
    if (inputImage) {
      setOutputImage(inputImage);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-border">
        <Button className="w-full gap-2 shadow-md">
          <Plus className="h-4 w-4" />
          NEW CHAT
        </Button>
      </div>

      <div className="p-4 border-b border-border">
        <label className="text-sm font-medium mb-2 block text-primary">AI Model:</label>
        <Select defaultValue="gpt4" >
          <SelectTrigger className="border-primary/20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt4">GPT-4</SelectItem>
            <SelectItem value="gpt35">GPT-3.5</SelectItem>
            <SelectItem value="claude">Claude</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="text-xs font-semibold mb-3 text-primary">TODAY</div>
        <div className="space-y-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center justify-between p-3 hover:bg-primary/10 rounded-sm cursor-pointer transition-colors border border-transparent hover:border-primary/20"
            >
              <span className="text-sm truncate flex-1">{chat.title}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen lg:h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col bg-background">
        <div className="p-3 sm:p-4 lg:p-3 border-b border-border bg-card/50 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-light text-white truncate">Reveal Prompt</h1>
            <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
              Discover the original prompt behind AI-generated content
            </p>
          </div>

          {/* Mobile menu button */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden flex-shrink-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0 flex flex-col">
              <SheetHeader className="p-4 border-b border-border">
                <SheetTitle>Chat History</SheetTitle>
              </SheetHeader>
              <div className="flex-1 flex flex-col overflow-hidden">
                <SidebarContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
          <Card className="p-4 sm:p-6 space-y-4 border-primary/20 shadow-lg">
            <div className="flex items-center justify-between gap-2">
              <label className="text-sm font-medium text-primary">Input Content:</label>
              <label htmlFor="input-image" className="cursor-pointer flex-shrink-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ImageIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Add Image</span>
                </div>
                <input
                  id="input-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {inputImage && (
              <div className="relative inline-block">
                <img
                  src={inputImage}
                  alt="Input"
                  className="max-h-32 sm:max-h-40 rounded-sm border-2 border-primary/20 max-w-full"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-sm"
                  onClick={() => setInputImage(null)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}

            <Textarea
              placeholder="Enter AI-generated text or upload an image to reveal the prompt..."
              className="min-h-[120px] sm:min-h-[150px] resize-none border-primary/20 focus:border-primary/50 bg-background/50 text-sm sm:text-base"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Card>
              
          <div className="flex justify-center">
            <Button
              className="gap-2 px-6 sm:px-8 shadow-lg w-full sm:w-auto"
              size="lg"
              onClick={handleReveal}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center ">
                  <div className="w-5 h-5 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  <Eye className="h-5 w-5 mr-2" />
                  <span>Revealing...</span>
                </div>
              ) : (
                <>
                   <Eye className="h-5 w-5" />
              Reveal Prompt
                </>
              )}
            </Button>
          </div>

          <Card className="p-4 sm:p-6 space-y-4 border-accent/30 bg-accent/5 shadow-lg">
            <label className="text-sm font-medium text-white">Revealed Prompt:</label>

            {outputImage && (
              <img
                src={outputImage}
                alt="Output"
                className="max-h-32 sm:max-h-40 rounded-sm border-2 border-accent/30 max-w-full"
              />
            )}

            <Textarea
              placeholder="Original prompt will appear here..."
              className="min-h-[120px] sm:min-h-[150px] resize-none border-accent/30 bg-background/50 text-sm sm:text-base"
              value={outputText}
              readOnly
            />
          </Card>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-80 border-l border-border bg-card/30 backdrop-blur-sm flex-col">
        <SidebarContent />
      </aside>
    </div>
  );
}
