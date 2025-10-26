import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Billing() {
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">User Billing</h1>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-sm p-6">
          <Badge className="mb-4 bg-primary text-primary-foreground">YOUR PLAN</Badge>
          <div className="space-y-2">
            <div className="font-light">Personal Plan — $15.00 Per Month</div>
            <div className="text-sm text-muted-foreground">
              You will given 8000 tokens every month
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-light mb-1">Active until Dec 09, 2025</div>
              <div className="text-sm text-muted-foreground">
                We will send you a notification upon Subscription expiration
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-light mb-1">657 DAYS LEFT</div>
              <Progress value={85} className="w-24" />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="outline" className="rounded-sm">
              UPGRADE PLAN
            </Button>
            <Button variant="secondary" className="rounded-sm">
              CANCEL SUBSCRIPTION
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Payment Methods</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="font-light mb-1">Mastercard **** 4658</div>
              <div className="text-sm text-muted-foreground mb-4">Card expires at 03/25</div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>

            <div className="bg-card border border-border rounded-sm p-6">
              <div className="font-light mb-1">Visa **** 3623</div>
              <div className="text-sm text-muted-foreground mb-4">Card expires at 07/27</div>
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
                <Badge className="bg-primary text-primary-foreground">PRIMARY</Badge>
              </div>
            </div>

            <div className="bg-muted rounded-sm p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
              <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
              <div className="text-sm font-light">ADD NEW</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
