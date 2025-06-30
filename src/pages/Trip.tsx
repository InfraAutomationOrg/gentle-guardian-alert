
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, Shield } from 'lucide-react';

const Trip = () => {
  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Live Trip</h1>
        <p className="text-gray-600">Real-time location and route tracking</p>
      </div>

      {/* Trip Status */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Trip Status</h3>
            <Badge className="bg-sage-100 text-sage-700">Active</Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center">
                <MapPin size={16} className="text-sage-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Current Location</p>
                <p className="text-sm text-gray-600">123 Main Street, Downtown</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-lavender-100 flex items-center justify-center">
                <Navigation size={16} className="text-lavender-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Destination</p>
                <p className="text-sm text-gray-600">456 Oak Avenue, Uptown</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-coral-100 flex items-center justify-center">
                <Clock size={16} className="text-coral-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">ETA</p>
                <p className="text-sm text-gray-600">12 minutes remaining</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Map Placeholder */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-0">
          <div className="h-64 bg-gradient-to-br from-sage-100 to-lavender-100 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin size={48} className="text-sage-500 mx-auto" />
              <p className="text-gray-600 font-medium">Live Map View</p>
              <p className="text-sm text-gray-500">Route tracking with nearby safe zones</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card className="shadow-soft border-lavender-200/50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Features</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-sage-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-sage-600" />
                <span className="font-medium text-gray-800">Location Sharing</span>
              </div>
              <Badge className="bg-sage-600 text-white">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-lavender-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-lavender-600" />
                <span className="font-medium text-gray-800">Voice Detection</span>
              </div>
              <Badge className="bg-lavender-600 text-white">Listening</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="gradient-emergency text-white p-4 h-auto rounded-xl hover:scale-105 transition-all">
          <div className="text-center">
            <Shield size={24} className="mx-auto mb-1" />
            <span className="text-sm font-medium">Emergency</span>
          </div>
        </Button>
        
        <Button 
          variant="outline" 
          className="border-sage-300 text-sage-700 p-4 h-auto rounded-xl hover:bg-sage-50 hover:scale-105 transition-all"
        >
          <div className="text-center">
            <MapPin size={24} className="mx-auto mb-1" />
            <span className="text-sm font-medium">Share Location</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Trip;
