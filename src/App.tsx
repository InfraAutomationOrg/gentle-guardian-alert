
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trip from "./pages/Trip";
import Emergency from "./pages/Emergency";
import Settings from "./pages/Settings";
import { BottomNav } from "./components/BottomNav";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-background via-lavender-50/30 to-coral-50/20">
          <div className="pb-20"> {/* Space for bottom navigation */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trip" element={<Trip />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
