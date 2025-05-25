import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
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
import Downloads from "@/pages/Downloads";
import ContactUs from "@/pages/ContactUs";
import ScienceAndHumanities from "@/pages/ScienceAndHumanities";
import AdmissionPage from "@/pages/AdmissionPage";
import CalendarEventsPage from "@/pages/CalendarEventsPage";
import ExaminationPage from "@/pages/ExaminationPage";
import CircularsPage from "@/pages/CircularsPage";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/index";

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
      <Route path="/about/downloads" component={Downloads} />
      <Route path="/about/contact" component={ContactUs} />
      <Route path="/programs/:slug" component={ProgramPage} />
      <Route path="/academic/admission" component={AdmissionPage} />
      <Route path="/academic/calendar-of-events" component={CalendarEventsPage} />
      <Route path="/academic/examination" component={ExaminationPage} />
      <Route path="/academic/circulars" component={CircularsPage} />
      <Route path="/admin/login" component={AdminLogin} />
      <ProtectedRoute path="/admin" component={AdminDashboard} adminOnly={true} />
      <Route path="/:category/:slug" component={GenericPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
