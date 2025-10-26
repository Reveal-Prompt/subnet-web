import { Card, CardContent } from "@/components/ui/card";
import { Image, MessageSquare, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TypingText } from "@/components/TypingText";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 ">
        <div className="max-w-4xl lg:mt-20 mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 px-4">
              Unleash Your Creativity with AI
            </h1>
            <p className="text-muted-foreground text-sm sm:text-md px-4">
              Generate your ideas into stunning visuals
            </p>
          </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-6 sm:items-stretch">
            <Link to="/optimize-prompt" className="flex">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-card border border-border w-full sm:p-3">
                <CardContent className="p-3 sm:p-4  lg:p-6 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-sm bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <Image className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-2 sm:mb-3 lg:mb-4">Optimize Prompt</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed flex-grow">
                    AI-powered prompt optimization combines deep learning and generative models to
                    refine your inputs for the best outputs. Optimize prompt to save tokens and
                    improve quality of output.
                  </p>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary mt-3 sm:mt-4 lg:mt-6" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/reveal-prompt" className="flex">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-card border border-border w-full">
                <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-sm bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-2 sm:mb-3 lg:mb-4">Reveal Prompt</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed flex-grow">
                    Unlock the hidden blueprint behind any AI output. Reveal Prompt lets you decode
                    prompts and master the art of reverse prompt engineering.
                  </p>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary mt-3 sm:mt-4 lg:mt-6" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <aside
        className="  w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-border p-6 sm:p-8 bg-gradient-to-b from-card to-muted overflow-hidden flex flex-col lg:h-[calc(100vh_-_var(--nav-height,_58px))]"
        
      >
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent mb-3 sm:mb-4">
            Welcome to the Future
          </h2>
          <div className="min-h-20 sm:h-24 flex items-center">
            <TypingText
              text="Unlock the power of AI with Reveal Prompt. Transform your ideas into stunning prompts, optimize your workflow, and discover what's possible with cutting-edge technology."
              speed={30}
              className="text-muted-foreground text-sm leading-relaxed"
            />
          </div>
        </div>



        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
          <div className="p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2 mb-2 text-center sm:text-left">
              <div className="w-3 h-3 rounded-sm bg-primary/90"></div>
              <span className="font-semibold text-sm sm:text-md">1,154,694</span>
              <span className="text-muted-foreground text-xs sm:text-sm">Active Users</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2 mb-2 text-center sm:text-left">
              <div className="w-3 h-3 rounded-sm bg-primary"></div>
              <span className="font-semibold text-sm sm:text-md">77,345,912</span>
              <span className="text-muted-foreground text-xs sm:text-sm">Prompts Generated</span>
            </div>
          </div>



          <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/30 rounded-sm">
            <p className="text-xs sm:text-sm text-center font-medium">
              Join thousands of creators transforming their AI experience
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}