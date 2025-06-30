
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EmergencyModal } from '@/components/EmergencyModal';
import { DriverCard } from '@/components/DriverCard';
import { QuickActions } from '@/components/QuickActions';
import { Shield, Heart } from 'lucide-react';

const Home = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">SafeRide</h1>
            <p className="text-sm text-gray-600">Your safety companion</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sage-600">
          <Heart size={16} />
          <span className="text-sm font-medium">You're safe</span>
        </div>
      </div>

      {/* Reassuring Message */}
      <Card className="bg-gradient-to-r from-lavender-50 to-coral-50 border-lavender-200/50 shadow-soft">
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            You're in control. Help is one tap away.
          </h2>
          <p className="text-gray-600 text-sm">
            We're here to keep you safe during your journey
          </p>
        </CardContent>
      </Card>

      {/* Emergency Button */}
      <div className="flex justify-center">
        <Button
          onClick={() => setShowEmergencyModal(true)}
          className="w-48 h-48 rounded-full gradient-emergency text-white text-xl font-bold shadow-emergency hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          <div className="text-center">
            <Shield size={48} className="mx-auto mb-2" />
            <div>EMERGENCY</div>
            <div className="text-sm font-normal opacity-90">Tap for help</div>
          </div>
        </Button>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Driver Card */}
      <DriverCard />

      {/* Emergency Modal */}
      <EmergencyModal 
        open={showEmergencyModal} 
        onClose={() => setShowEmergencyModal(false)} 
      />
    </div>
  );
};

export default Home;
