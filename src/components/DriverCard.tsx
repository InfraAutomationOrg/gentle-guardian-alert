
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Car } from 'lucide-react';

export const DriverCard = () => {
  return (
    <Card className="shadow-soft border-lavender-200/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Current Trip</h3>
          <Badge className="bg-sage-100 text-sage-700 hover:bg-sage-100">
            On the way
          </Badge>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center text-white text-xl font-bold">
            MJ
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-gray-800">Maria Johnson</h4>
              <div className="flex items-center space-x-1">
                <Star size={14} className="text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">4.9</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Car size={14} />
              <span>Toyota Camry • ABC-123</span>
            </div>
            
            <p className="text-xs text-gray-500 mt-1">
              ETA: 3 minutes • 0.8 miles away
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
