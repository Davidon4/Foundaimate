import prismadb from '@/lib/prismadb';
import OnboardingComponent from './OnboardingComponent';

async function getExperiences() {
  const experiences = await prismadb.experience.findMany();
  return experiences;
}

async function getOwnerships() {
  const ownerships = await prismadb.ownership.findMany();
  return ownerships;
}

async function getMembers() {
  const members = await prismadb.member.findMany();
  return members;
}

async function getExpertises() {
  const expertises = await prismadb.expertise.findMany();
  return expertises;
}

async function getDecisions() {
  const decisions = await prismadb.decision.findMany();
  return decisions;
}

async function getRevenues() {
  const revenues = await prismadb.revenue.findMany();
  return revenues;
}

async function getStages() {
  const stages = await prismadb.stage.findMany();
  return stages;
}

async function getSizes() {
  const sizes = await prismadb.size.findMany();
  return sizes;
}

async function getIndustries() {
  const industries = await prismadb.industry.findMany();
  return industries;
}

async function getProducts() {
  const products = await prismadb.product.findMany();
  return products;
}

async function getTargets() {
  const targets = await prismadb.target.findMany();
  return targets;
}

async function getNetworks() {
  const networks = await prismadb.network.findMany();
  return networks;
}
async function getLeads() {
  const leads = await prismadb.lead.findMany();
  return leads;
}
async function getSChallenges() {
  const schallenges = await prismadb.sChallenge.findMany();
  return schallenges;
}
async function getSStrategies() {
  const sstrategies = await prismadb.sStrategy.findMany();
  return sstrategies;
}

export default async function WelcomePage() {
  const experiences = await getExperiences();
  const ownerships = await getOwnerships();
  const members = await getMembers();
  const expertises = await getExpertises();
  const decisions = await getDecisions();
  const revenues = await getRevenues();
  const stages = await getStages();
  const sizes = await getSizes();
  const industries = await getIndustries();
  const products = await getProducts();
  const targets = await getTargets();
  const networks = await getNetworks();
  const leads = await getLeads();
  const schallenges = await getSChallenges();
  const sstrategies = await getSStrategies();

  return <OnboardingComponent
          experiences={experiences}
          ownerships={ownerships} 
          members={members} 
          expertises={expertises} 
          decisions={decisions} 
          revenues={revenues} 
          stages={stages}
          sizes={sizes}
          industries={industries}
          products={products}
          targets={targets}
          networks={networks}
          leads={leads}
          schallenges={schallenges}
          sstrategies={sstrategies}
          />;
}