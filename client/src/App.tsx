import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProgramPage from "@/pages/ProgramPage";
import GenericPage from "@/pages/GenericPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs/:slug" component={ProgramPage} />
      <Route path="/:category/:slug" component={GenericPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
