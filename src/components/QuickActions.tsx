
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Users, MapPin } from 'lucide-react';

export const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: `${action} activated`,
      description: "Help is on the way. Stay calm and safe.",
      duration: 3000,
    });
  };

  const actions = [
    {
      icon: Phone,
      label: 'Call Police',
      action: () => handleAction('Emergency call'),
      bgColor: 'bg-coral-500 hover:bg-coral-600',
    },
    {
      icon: Users,
      label: 'Call Contact',
      action: () => handleAction('Trusted contact'),
      bgColor: 'bg-lavender-500 hover:bg-lavender-600',
    },
    {
      icon: MapPin,
      label: 'Share Location',
      action: () => handleAction('Location sharing'),
      bgColor: 'bg-sage-500 hover:bg-sage-600',
    },
  ];

  return (
    <Card className="shadow-soft border-lavender-200/50">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          {actions.map(({ icon: Icon, label, action, bgColor }) => (
            <Button
              key={label}
              onClick={action}
              className={`${bgColor} text-white p-4 h-auto flex flex-col items-center space-y-2 rounded-xl hover:scale-105 transition-all duration-200`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium text-center">{label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
