import { Experience } from '@prisma/client';
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

export default async function WelcomePage() {
  const experiences = await getExperiences();
  const ownerships = await getOwnerships();
  const members = await getMembers();
  const expertises = await getExpertises();
  const decisions = await getDecisions();
  return <OnboardingComponent experiences={experiences} ownerships={ownerships} members={members} expertises={expertises} decisions={decisions} />;
}