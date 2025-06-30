
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, Shield, Bell, MapPin, Heart } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [autoRecord, setAutoRecord] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your safety preferences have been updated.",
      duration: 2000,
    });
  };

  const trustedContacts = [
    { name: 'Mom', phone: '(555) 123-4567', relationship: 'Family' },
    { name: 'Sarah Johnson', phone: '(555) 987-6543', relationship: 'Friend' },
  ];

  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Customize your safety preferences</p>
      </div>

      {/* Profile Section */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Alex Rivera</h3>
              <p className="text-gray-600">alex.rivera@email.com</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
              <Input id="name" defaultValue="Alex Rivera" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
              <Input id="phone" defaultValue="(555) 456-7890" className="mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trusted Contacts */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Trusted Contacts</h3>
            <Button 
              size="sm" 
              className="bg-lavender-500 hover:bg-lavender-600 text-white"
            >
              Add Contact
            </Button>
          </div>
          
          <div className="space-y-3">
            {trustedContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-lavender-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lavender-200 flex items-center justify-center">
                    <User size={16} className="text-lavender-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.phone} • {contact.relationship}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Preferences */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-sage-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-sage-600" />
                <div>
                  <p className="font-medium text-gray-800">Emergency Notifications</p>
                  <p className="text-sm text-gray-600">Get alerts for emergency activations</p>
                </div>
              </div>
              <Switch 
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-coral-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-coral-600" />
                <div>
                  <p className="font-medium text-gray-800">Location Services</p>
                  <p className="text-sm text-gray-600">Share location during emergencies</p>
                </div>
              </div>
              <Switch 
                checked={locationServices}
                onCheckedChange={setLocationServices}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-lavender-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-lavender-600" />
                <div>
                  <p className="font-medium text-gray-800">Auto Audio Recording</p>
                  <p className="text-sm text-gray-600">Record audio during emergency activation</p>
                </div>
              </div>
              <Switch 
                checked={autoRecord}
                onCheckedChange={setAutoRecord}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safe Words */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Safe Words</h3>
          <p className="text-sm text-gray-600 mb-4">Set words to activate or cancel emergency mode via call or text</p>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="activate-word" className="text-sm font-medium text-gray-700">Activation Word</Label>
              <Input id="activate-word" placeholder="e.g., 'butterfly'" className="mt-1" />
              <p className="text-xs text-gray-500 mt-1">Say this word to trigger emergency silently</p>
            </div>
            <div>
              <Label htmlFor="cancel-word" className="text-sm font-medium text-gray-700">Cancel Word</Label>
              <Input id="cancel-word" placeholder="e.g., 'sunshine'" className="mt-1" />
              <p className="text-xs text-gray-500 mt-1">Say this word to cancel false alarms</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About SafeRide */}
      <Card className="shadow-soft border-lavender-200/50 bg-gradient-to-r from-lavender-50 to-coral-50">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="w-6 h-6 text-coral-500" />
            <h3 className="text-lg font-semibold text-gray-800">SafeRide v1.0</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Designed with love to keep women safe during their journeys. 
            Your safety is our priority.
          </p>
          <div className="flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="text-xs border-lavender-300 text-lavender-600 hover:bg-lavender-50"
            >
              Privacy Policy
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="text-xs border-coral-300 text-coral-600 hover:bg-coral-50"
            >
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button 
        onClick={handleSave}
        className="w-full gradient-primary text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all"
      >
        Save Settings
      </Button>
    </div>
  );
};

export default Settings;
