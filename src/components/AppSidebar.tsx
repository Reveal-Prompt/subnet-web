import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Maximize,
  MessageSquare,
  DollarSign,
  BookOpen,
  Users,
  Globe,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import logoIcon from "@/assets/logo-icon.png";
import logoFull from "@/assets/logo-full.png";

const menuItems = [
  {
    section: "START HERE",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    section: "PLAYGROUND",
    items: [
      { title: "Optimize Prompt", url: "/optimize-prompt", icon: Maximize },
      { title: "Reveal Prompt", url: "/reveal-prompt", icon: MessageSquare },
    ],
  },
  {
    section: "SUPPORT",
    items: [
      { title: "FAQ", url: "/pricing", icon: DollarSign },
      {
        title: "Resources",
        icon: BookOpen,
        subItems: [
          { title: "Documentation", url: "/documentation" },
          { title: "Roadmap", url: "/Roadmap", badge: "(4.1.2)" },
          { title: "Contact Us", url: "/contact" },
        ],
      },
    ],
  },
  {
    section: "COMMUNITY",
    items: [
      { title: "Community Feed", url: "/community", icon: Users },
      { title: "Supported Models", url: "/models", icon: Globe },
      { title: "Network Monitor", url: "/network_monitor", icon: Globe },
    ],
  },
];

export function AppSidebar() {
  const { state, isMobile, setOpenMobile, openMobile } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  // Force expanded state on mobile, allow collapse only on desktop
  const isCollapsed = !isMobile && state === "collapsed";

  return (
    <Sidebar
      className="overflow-x-hidden"
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar h-full">
        {/* Logo & Trigger */}
        <div className="flex flex-col border-b border-border">
          {isCollapsed ? (
            <div className="flex flex-col p-2 items-center justify-center w-full gap-3">
              <img src={logoIcon} alt="RP" className="h-12 w-12 object-contain" />
              <SidebarTrigger className="hover:bg-sidebar-accent rounded-sm p-1.5 transition-colors">
                <ChevronRight className="h-4 w-4 text-sidebar-foreground" />
              </SidebarTrigger>
            </div>
          ) : (
            <div className="flex items-center justify-between px-4 py-5 w-full">
              <img src={logoFull} alt="Reveal Prompt" className="w-full max-w-[12rem] object-contain" />
              {isMobile ? (
                <button
                  onClick={() => setOpenMobile(false)}
                  className="hover:bg-sidebar-accent rounded-sm p-2 transition-colors"
                >
                  <X className="h-5 w-5 text-sidebar-foreground" />
                </button>
              ) : (
                <SidebarTrigger className="hover:bg-sidebar-accent rounded-sm p-3 transition-colors">
                  <ChevronLeft className="h-4 w-4 text-sidebar-foreground" />
                </SidebarTrigger>
              )}
            </div>
          )}
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((section) => (
            <SidebarGroup key={section.section}>
              {!isCollapsed && (
                <SidebarGroupLabel className="text-xs text-muted-foreground font-semibold px-3 mb-2">
                  {section.section}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) =>
                    item.subItems ? (
                      <Collapsible key={item.title} className="text-gray-400 group/collapsible" defaultOpen>
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              className={`w-full ${isCollapsed ? "justify-center" : "justify-between"}`}
                            >
                              <div className="flex items-center gap-3">
                                {item.icon && <item.icon className="h-4 w-4 text-gray-400" />}
                                {!isCollapsed && <span>{item.title}</span>}
                              </div>
                              {!isCollapsed && (
                                <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                              )}
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          {!isCollapsed && (
                            <CollapsibleContent>
                              <SidebarMenu className="ml-2 border-l text-gray-400 border-border pl-2 mt-1">
                                {item.subItems.map((subItem) => (
                                  <SidebarMenuItem key={subItem.title}>
                                    <SidebarMenuButton asChild isActive={isActive(subItem.url)}>
                                      <NavLink 
                                        to={subItem.url} 
                                        className="flex items-center gap-2"
                                        onClick={() => isMobile && setOpenMobile(false)}
                                      >
                                        <span className="text-sm">- {subItem.title}</span>
                                        {subItem.badge && (
                                          <span className="text-xs text-primary">{subItem.badge}</span>
                                        )}
                                      </NavLink>
                                    </SidebarMenuButton>
                                  </SidebarMenuItem>
                                ))}
                              </SidebarMenu>
                            </CollapsibleContent>
                          )}
                        </SidebarMenuItem>
                      </Collapsible>
                    ) : (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive(item.url)}>
                          <NavLink 
                            to={item.url} 
                            className="flex text-gray-400 items-center gap-3"
                            onClick={() => isMobile && setOpenMobile(false)}
                          >
                            {item.icon && <item.icon className="h-4 w-4" />}
                            {!isCollapsed && <span>{item.title}</span>}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}