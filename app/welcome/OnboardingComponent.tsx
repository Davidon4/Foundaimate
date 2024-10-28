"use client";
import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft as ArrowLeftIcon } from 'lucide-react';

import Intro from '@/components/welcome/intro';
import Founder from '@/components/welcome/founder';
import Business from '@/components/welcome/business';
import Sales from '@/components/welcome/sales';
import Marketing from '@/components/welcome/marketing';
import Development from '@/components/welcome/development';
import Avatar from '@/components/welcome/avatar';

import { 
  Experience, 
  SGoal, 
  Ownership, 
  Network, 
  Revenue, 
  Stage, 
  Size, 
  Industry, 
  Product, 
  Target, 
  Member, 
  Expertise, 
  Decision, 
  Lead, 
  SStrategy, 
  SChallenge,
  Usp,
  MChallenge,
  MChannel,
  MGoal,
  SRisk,
  MRisk,
  Update,
  DChallenge,
  DRisk,
  Innovation,
  Feature,
} from "@prisma/client";

interface WelcomeProps {
  experiences: Experience[];
  ownerships: Ownership[];
  members: Member[];
  expertises: Expertise[];
  decisions: Decision[];
  revenues: Revenue[];
  stages: Stage[];
  sizes: Size[];
  industries: Industry[];
  products: Product[];
  targets: Target[];
  networks: Network[];
  leads: Lead[];
  schallenges: SChallenge[];
  sstrategies: SStrategy[];
  sgoals: SGoal[];
  usps: Usp[];
  mchallenges: MChallenge[];
  mchannels: MChannel[];
  mgoals: MGoal[];
  srisks: SRisk[];
  mrisks: MRisk[];
  updates: Update[];
  dchallenges: DChallenge[];
  features: Feature[];
  innovations: Innovation[];
  drisks: DRisk[]
}

export default function OnboardingComponent({experiences, ownerships, members, sgoals, srisks, expertises, decisions, revenues, mrisks, stages, sizes, industries, products, targets, networks, leads, sstrategies, schallenges, mgoals, mchallenges, mchannels, usps, innovations, updates, dchallenges, drisks, features}: WelcomeProps) {
  const [error, setError] = React.useState('');
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = React.useState({
    // Founder data
    experienceId: searchParams.get('experienceId') || '',
    ownershipId: searchParams.get('ownershipId') || '',
    memberId: searchParams.get('memberId') || '',
    expertiseId: searchParams.get('expertiseId') || '',
    decisionId: searchParams.get('decisionId') || '',
    // Business data
    name: searchParams.get('name') || '',
    description: searchParams.get('description') || '',
    stageId: searchParams.get('stageId') || '',
    sizeId: searchParams.get('sizeId') || '',
    industryId: searchParams.get('industryId') || '',
    networkId: searchParams.get('networkId') || '',
    // Sales data
    revenueId: searchParams.get('revenueId') || '',
    leadId: searchParams.get('leadId') || '',
    schallengeId: searchParams.get('schallengeId') || '',
    sstrategyId: searchParams.get('sstrategyId') || '',
    sriskId: searchParams.get('sriskId') || '',
    sgoalId: searchParams.get('sgoalId') || '',
    // Marketing data
    targetId: searchParams.get('targetId') || '',
    mchallengeId: searchParams.get('mchallengeId') || '',
    mchannelId: searchParams.get('mchannelId') || '',
    uspId: searchParams.get('uspId') || '',
    mgoalId: searchParams.get('mgoalId') || '',
    mriskId: searchParams.get('mriskId') || '',
    // Development data
    productId: searchParams.get('productId') || '',
    updateId: searchParams.get('updateId') || '',
    dchallengeId: searchParams.get('mchallengeId') || '',
    driskId: searchParams.get('sriskId') || '',
    featureId: searchParams.get('featureId') || '',
    innovationId: searchParams.get('innovationId') || '',
  });

  const type = searchParams.get('type');

  const handleBack = () => {
    // Define the navigation flow
    const flow = [null, 'founder', 'business', 'sales', 'marketing', 'development']; // null represents intro
    const currentIndex = flow.indexOf(type);
    
    if (currentIndex > 0) {
      // Get the previous type
      const prevType = flow[currentIndex - 1];
      // Preserve all current form data in the URL
      const queryParams = new URLSearchParams(formData as Record<string, string>).toString();
      router.push(`/welcome${prevType ? `?type=${prevType}&${queryParams}` : ''}`);
    } else {
      router.push('/welcome');
    }
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };


  // 
  return (
    // <div className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center overflow-x-hidden">
    <div>
      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        {type ? (
          <>
            <button
              className="group absolute left-2 top-10 z-40 rounded-full p-2 transition-all hover:bg-tealCustom sm:left-10"
              onClick={handleBack}
            >
              <ArrowLeftIcon className="h-8 w-8 text-gray-500 group-hover:text-white group-active:scale-90" />
            </button>
          </>
        ) : null}
        {!type && <Intro key="intro" />}
        {type === "founder" && <Founder experiences={experiences} ownerships={ownerships} members={members} expertises={expertises} decisions={decisions} initialData={formData} onDataUpdate={updateFormData} key="founder" />}
        {type === "business" && <Business stages={stages} sizes={sizes} industries={industries} networks={networks} initialData={formData} onDataUpdate={updateFormData} key="business" />}
        {type === "development" && <Development products={products} updates={updates} dchallenges={dchallenges} drisks={drisks} features={features} innovations={innovations} initialData={formData} onDataUpdate={updateFormData} key="development" />}
        {type === "marketing" && <Marketing targets={targets} usps={usps} mchallenges={mchallenges} mchannels={mchannels} mgoals={mgoals} mrisks={mrisks} initialData={formData} onDataUpdate={updateFormData} key="marketing" />}
        {type === "sales" && <Sales revenues={revenues} leads={leads} schallenges={schallenges} sgoals={sgoals} sstrategies={sstrategies} srisks={srisks} initialData={formData} onDataUpdate={updateFormData} key="sales" />}
        {type === "avatar" && <Avatar initialData={formData} onDataUpdate={updateFormData} key="avatar" />}
      </AnimatePresence>
    </div>
  )
}
