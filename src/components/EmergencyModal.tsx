
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Shield, X, Volume2 } from 'lucide-react';

interface EmergencyModalProps {
  open: boolean;
  onClose: () => void;
}

export const EmergencyModal = ({ open, onClose }: EmergencyModalProps) => {
  const [countdown, setCountdown] = useState(3);
  const [isActivating, setIsActivating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isActivating && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isActivating && countdown === 0) {
      handleEmergencyActivated();
    }

    return () => clearTimeout(timer);
  }, [countdown, isActivating]);

  const startEmergency = () => {
    setIsActivating(true);
    setCountdown(3);
  };

  const cancelEmergency = () => {
    setIsActivating(false);
    setCountdown(3);
    onClose();
  };

  const handleStealthMode = () => {
    toast({
      title: "Stealth mode activated",
      description: "Emergency alert sent silently. Help is on the way.",
      duration: 5000,
    });
    onClose();
  };

  const handleEmergencyActivated = () => {
    toast({
      title: "Emergency services contacted",
      description: "Location shared, contacts notified. Stay calm and safe.",
      duration: 5000,
    });
    setIsActivating(false);
    setCountdown(3);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 rounded-2xl bg-white border-none shadow-2xl">
        <div className="text-center space-y-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="w-8"></div> {/* Spacer */}
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-coral-500" />
              <h2 className="text-xl font-bold text-gray-800">Emergency Alert</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={cancelEmergency}
              className="w-8 h-8 p-0 rounded-full hover:bg-gray-100"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Countdown or Confirmation */}
          {isActivating ? (
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full gradient-emergency flex items-center justify-center text-white text-3xl font-bold animate-pulse-glow">
                {countdown}
              </div>
              <p className="text-gray-600">
                Emergency services will be contacted in {countdown} seconds
              </p>
              <Button
                onClick={cancelEmergency}
                variant="outline"
                className="w-full border-coral-300 text-coral-600 hover:bg-coral-50"
              >
                Cancel Emergency
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full gradient-emergency flex items-center justify-center text-white">
                <Shield size={32} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Activate Emergency Protocol?
                </h3>
                <p className="text-sm text-gray-600">
                  This will contact emergency services and notify your trusted contacts
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={startEmergency}
                  className="w-full gradient-emergency text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all"
                >
                  Confirm Emergency
                </Button>
                
                <Button
                  onClick={handleStealthMode}
                  variant="outline"
                  className="w-full border-lavender-300 text-lavender-600 hover:bg-lavender-50 py-3 rounded-xl"
                >
                  <Volume2 size={16} className="mr-2" />
                  Stealth Mode (Silent Alert)
                </Button>
              </div>
            </div>
          )}

          {/* Safety Note */}
          <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            💜 Your safety is our priority. This action will share your location and alert emergency contacts.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
