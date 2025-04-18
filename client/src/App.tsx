import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProgramPage from "@/pages/ProgramPage";
import GenericPage from "@/pages/GenericPage";
import AboutJSSMVP from "@/pages/AboutJSSMVP";
import AboutJSSPN from "@/pages/AboutJSSPN";
import VisionMission from "@/pages/VisionMission";
import Governance from "@/pages/Governance";
import Administration from "@/pages/Administration";
import Reports from "@/pages/Reports";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about/jssmvp" component={AboutJSSMVP} />
      <Route path="/about/jss-polytechnic-nanjangud" component={AboutJSSPN} />
      <Route path="/about/vision-mission" component={VisionMission} />
      <Route path="/about/governance" component={Governance} />
      <Route path="/about/administration" component={Administration} />
      <Route path="/about/reports" component={Reports} />
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
