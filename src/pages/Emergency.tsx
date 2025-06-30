
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Shield, Phone, Users, MapPin, Volume2, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Emergency = () => {
  const [voiceActivation, setVoiceActivation] = useState(true);
  const [stealthMode, setStealthMode] = useState(false);
  const [shakeDetection, setShakeDetection] = useState(true);
  const { toast } = useToast();

  const handleFeatureToggle = (feature: string, enabled: boolean) => {
    toast({
      title: `${feature} ${enabled ? 'enabled' : 'disabled'}`,
      description: `Safety feature has been ${enabled ? 'activated' : 'deactivated'}.`,
      duration: 2000,
    });
  };

  const emergencyContacts = [
    { name: 'Emergency Services', number: '911', type: 'emergency' },
    { name: 'Mom', number: '(555) 123-4567', type: 'trusted' },
    { name: 'Best Friend Sarah', number: '(555) 987-6543', type: 'trusted' },
  ];

  const quickActions = [
    { icon: Phone, label: 'Call 911', bgColor: 'bg-coral-500', action: 'Emergency call' },
    { icon: Users, label: 'Alert Contacts', bgColor: 'bg-lavender-500', action: 'Contact alert' },
    { icon: MapPin, label: 'Share Location', bgColor: 'bg-sage-500', action: 'Location share' },
  ];

  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Emergency Center</h1>
        <p className="text-gray-600">Your safety toolkit and emergency settings</p>
      </div>

      {/* Emergency Status */}
      <Card className="shadow-soft border-lavender-200/50 bg-gradient-to-r from-sage-50 to-lavender-50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-sage-500 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">You're Protected</h3>
              <p className="text-sm text-gray-600">All safety features are active and monitoring</p>
            </div>
            <Badge className="bg-sage-100 text-sage-700 ml-auto">Safe</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Emergency Actions */}
      <Card className="shadow-soft border-coral-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map(({ icon: Icon, label, bgColor, action }) => (
              <Button
                key={label}
                onClick={() => {
                  toast({
                    title: `${action} activated`,
                    description: "Help is on the way. Stay safe.",
                    duration: 3000,
                  });
                }}
                className={`${bgColor} hover:scale-105 text-white p-4 h-auto flex flex-col items-center space-y-2 rounded-xl transition-all duration-200`}
              >
                <Icon size={24} />
                <span className="text-xs font-medium text-center">{label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Features</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-lavender-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Volume2 size={20} className="text-lavender-600" />
                <div>
                  <p className="font-medium text-gray-800">Voice Activation</p>
                  <p className="text-sm text-gray-600">Say "Help me" to trigger alert</p>
                </div>
              </div>
              <Switch 
                checked={voiceActivation}
                onCheckedChange={(checked) => {
                  setVoiceActivation(checked);
                  handleFeatureToggle('Voice activation', checked);
                }}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-coral-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Smartphone size={20} className="text-coral-600" />
                <div>
                  <p className="font-medium text-gray-800">Shake Detection</p>
                  <p className="text-sm text-gray-600">Shake phone 3x for silent SOS</p>
                </div>
              </div>
              <Switch 
                checked={shakeDetection}
                onCheckedChange={(checked) => {
                  setShakeDetection(checked);
                  handleFeatureToggle('Shake detection', checked);
                }}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Stealth Mode</p>
                  <p className="text-sm text-gray-600">Hide alerts from screen</p>
                </div>
              </div>
              <Switch 
                checked={stealthMode}
                onCheckedChange={(checked) => {
                  setStealthMode(checked);
                  handleFeatureToggle('Stealth mode', checked);
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contacts</h3>
          
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    contact.type === 'emergency' ? 'bg-coral-100' : 'bg-lavender-100'
                  }`}>
                    <Phone size={16} className={contact.type === 'emergency' ? 'text-coral-600' : 'text-lavender-600'} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.number}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="text-xs hover:scale-105 transition-all"
                >
                  Call
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Emergency;
