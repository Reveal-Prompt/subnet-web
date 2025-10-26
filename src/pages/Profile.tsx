import { Settings, Save, Edit2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Caden Smith",
    email: "cadensmith@gmail.com",
    username: "@caddeomyth",
  });

  const interests = [
    "AI & ML",
    "BLOCKCHAIN",
    "PROMPT ENGINEERING",
    "CRYPTO",
    "OPTIMIZATION",
    "ANALYTICS",
    "AUTOMATION",
    "CLOUD COMPUTING",
  ];

  const [selectedInterests, setSelectedInterests] = useState(["AI & ML"]);

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="p-8 max-w-5xl mx-auto bg-background">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium">User Profile</h1>
        {!isEditing ? (
          <Button variant="outline" onClick={() => setIsEditing(true)} className="gap-2">
            <Edit2 className="h-4 w-4" />
            Edit Profile
          </Button>
        ) : (
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        )}
      </div>

      <Card className="rounded-sm mb-6">
        <CardContent className="p-8">
          <div className="flex items-start gap-8 flex-wrap">
            <div className="relative group">
              <div className="w-32 h-32 rounded-sm bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Caden"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {isEditing && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-2 right-2 h-8 w-8 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="flex-1 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">NAME</div>
                  {isEditing ? (
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  ) : (
                    <div className="font-light">{formData.name}</div>
                  )}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">USERNAME</div>
                  {isEditing ? (
                    <Input
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                  ) : (
                    <div className="font-light">{formData.username}</div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs text-muted-foreground mb-2">EMAIL ADDRESS</div>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  ) : (
                    <div className="font-light">{formData.email}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-sm mb-6">
        <CardContent className="p-8">
          <div className="text-xs text-muted-foreground mb-2">YOUR PLAN</div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-light mb-1">Personal Plan</div>
              <div className="text-sm text-muted-foreground">8,000 tokens per month</div>
            </div>
            <Button variant="outline" className="rounded-sm">
              UPGRADE
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-sm">
        <CardContent className="p-8">
          <h2 className="text-lg font-light mb-4">Your Interests</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <Badge
                key={interest}
                variant={selectedInterests.includes(interest) ? "default" : "outline"}
                className={`px-4 py-2 text-sm ${
                  isEditing ? "cursor-pointer hover:bg-primary/80" : ""
                }`}
                onClick={() => isEditing && toggleInterest(interest)}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
