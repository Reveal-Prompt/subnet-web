import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Moon, Sun, User, Settings, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import ConstructionBanner from "./ConstructionBanner";

interface LayoutProps {
  children: ReactNode;
}

function HeaderContent() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { open } = useSidebar();

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Sidebar trigger for small/medium screens */}
        <div className="lg:hidden md:hidden">
          <SidebarTrigger />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <Button
          variant="outline"
          className=" hover:opacity-90 transition-opacity font-medium"
          onClick={() => navigate("/pricing")}
        >
          <div className="  items-start">
            <span className="text-xs text-foreground font-light">Credits</span>
            <span className="text-md font-semibold bg-white bg-clip-text text-transparent pl-2">$120</span>
          </div>
        </Button> */}
        {/* <Button
          variant="ghost"
          size="icon"
          className="rounded-sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-light">Caden Smith</span>
                    <Badge className="bg-primary text-primary-foreground text-xs">FREE</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">cadmail@gmail.com</div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => navigate("/billing")} className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
     
      <div className="flex min-h-screen w-full">
        {/* AppSidebar - visible on large screens, hidden on small/medium */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>
        
        {/* AppSidebar - overlay/mobile version for small/medium screens */}
        <div className="lg:hidden">
          <AppSidebar />
        </div>

        <div className="flex-1 flex flex-col w-full">
           <ConstructionBanner/>
          <HeaderContent />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}