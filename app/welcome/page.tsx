import { Experience } from '@prisma/client';
import prismadb from '@/lib/prismadb';
import OnboardingComponent from './OnboardingComponent';

async function getExperiences() {
  const experiences = await prismadb.experience.findMany();
  return experiences;
}

export default async function WelcomePage() {
  const experiences = await getExperiences();
  return <OnboardingComponent experiences={experiences} />;
}