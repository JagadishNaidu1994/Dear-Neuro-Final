import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShopAll from "./pages/ShopAll";
import TheScience from "./pages/TheScience";
import Ethos from "./pages/Ethos";
import HerbalIndex from "./pages/HerbalIndex";
import ProductPage from "@/pages/ProductPage"; // <-- new page


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/products/:slug" element={<ProductDetail />} /> {/* ✅ dynamic route */}
          <Route path="/the-science" element={<TheScience />} />
          <Route path="/ethos" element={<Ethos />} />
          <Route path="/herbal-index" element={<HerbalIndex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
