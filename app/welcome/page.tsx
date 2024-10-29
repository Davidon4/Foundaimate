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
async function getSGoals() {
  const sgoals = await prismadb.sGoal.findMany();
  return sgoals;
}
async function getMGoals() {
  const mgoals = await prismadb.mGoal.findMany();
  return mgoals;
}
async function getUsps() {
  const usps = await prismadb.usp.findMany();
  return usps;
}
async function getMChallenges() {
  const mchallenges = await prismadb.mChallenge.findMany();
  return mchallenges;
}
async function getMChannels() {
  const mchannels = await prismadb.mChannel.findMany();
  return mchannels;
}
async function getSRisks() {
  const srisks = await prismadb.sRisk.findMany();
  return srisks;
}
async function getMRisks() {
  const mrisks = await prismadb.mRisk.findMany();
  return mrisks;
}
async function getDRisks() {
  const drisks = await prismadb.dRisk.findMany();
  return drisks;
}
async function getDChallenges() {
  const dchallenges = await prismadb.dChallenge.findMany();
  return dchallenges;
}
async function getUpdates() {
  const updates = await prismadb.update.findMany();
  return updates;
}
async function getFeatures() {
  const features = await prismadb.feature.findMany();
  return features;
}
async function getInnovations() {
  const innovations = await prismadb.innovation.findMany();
  return innovations;
}
async function getPersonalities() {
  const personalities = await prismadb.personality.findMany();
  return personalities;
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
  const sgoals = await getSGoals();
  const mgoals = await getMGoals();
  const usps = await getUsps();
  const mchannels = await getMChannels();
  const mchallenges = await getMChallenges();
  const srisks = await getSRisks();
  const mrisks = await getMRisks();
  const drisks = await getDRisks();
  const dchallenges = await getDChallenges();
  const updates = await getUpdates();
  const features = await getFeatures();
  const innovations = await getInnovations();
  const personalities = await getPersonalities();

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
          sgoals={sgoals}
          usps={usps}
          mchannels={mchannels}
          mchallenges={mchallenges}
          mgoals={mgoals}
          mrisks={mrisks}
          srisks={srisks}
          drisks={drisks}
          dchallenges={dchallenges}
          updates={updates}
          features={features}
          innovations={innovations}
          personalities={personalities}
          />;
}