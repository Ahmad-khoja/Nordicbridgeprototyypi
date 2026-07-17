import Layout from "../components/layout/Layout";
import Hero from "../components/dashboard/Hero";
import RoleCards from "../components/dashboard/RoleCards";
import FilterBar from "../components/dashboard/FilterBar";
import ChallengeColumn from "../components/dashboard/ChallengeColumn";
import SkillFilters from "../components/dashboard/SkillFilters";
import SolverProfiles from "../components/dashboard/SolverProfiles";
import RightSidebar from "../components/dashboard/RightSidebar";
import ServiceCards from "../components/dashboard/ServiceCards";
import ImpactOverview from "../components/dashboard/ImpactOverview";

function Dashboard() {
  
  return (
<Layout>
  <Hero />
  <RoleCards />
  <FilterBar />

  <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr_1fr_0.9fr]">
    <ChallengeColumn />
    <SkillFilters />
    <SolverProfiles />
    <RightSidebar />
  </div>
<div className="mt-8">
  <ImpactOverview />
</div>

  <div className="mt-8">
    <ServiceCards />
  </div>
</Layout>
    
  );
}


export default Dashboard;