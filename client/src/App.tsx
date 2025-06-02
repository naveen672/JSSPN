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
import SportsPage from "@/pages/SportsPage";
import LibraryPage from "@/pages/LibraryPage";
import ScholarshipPage from "@/pages/ScholarshipPage";
import MentoringPage from "@/pages/MentoringPage";
import StudentGrievancePage from "@/pages/StudentGrievancePage";
import IQACPage from "@/pages/IQACPage";
import AntiRaggingPage from "@/pages/AntiRaggingPage";
import WomenGrievancesPage from "@/pages/WomenGrievancesPage";
import SCSTCommitteePage from "@/pages/SCSTCommitteePage";
import MandatoryDisclosurePage from "@/pages/MandatoryDisclosurePage";
import MediaCoveragePage from "@/pages/MediaCoveragePage";
import TrainingPage from "@/pages/TrainingPage";
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
      <Route path="/facilities/sports" component={SportsPage} />
      <Route path="/facilities/library" component={LibraryPage} />
      <Route path="/supports/scholarship" component={ScholarshipPage} />
      <Route path="/supports/mentoring-scheme" component={MentoringPage} />
      <Route path="/supports/student-grievance" component={StudentGrievancePage} />
      <Route path="/more/iqac" component={IQACPage} />
      <Route path="/more/anti-ragging" component={AntiRaggingPage} />
      <Route path="/more/women-grievances" component={WomenGrievancesPage} />
      <Route path="/more/sc-st-committee" component={SCSTCommitteePage} />
      <Route path="/more/mandatory-disclosure" component={MandatoryDisclosurePage} />
      <Route path="/more/media-coverage" component={MediaCoveragePage} />
      <Route path="/placement/training" component={TrainingPage} />
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
