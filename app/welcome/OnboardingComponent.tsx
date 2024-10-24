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
  MGoal
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
  mgoals: MGoal[]
}

export default function OnboardingComponent({experiences, ownerships, members, sgoals, expertises, decisions, revenues, stages, sizes, industries, products, targets, networks, leads, sstrategies, schallenges, mgoals, mchallenges, mchannels, usps}: WelcomeProps) {
  const [error, setError] = React.useState('');
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get('type');
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
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="h-8 w-8 text-gray-500 group-hover:text-white group-active:scale-90" />
            </button>
          </>
        ) : (
          <Intro key="intro" />
        )}
        {type === "founder" && <Founder experiences={experiences} ownerships={ownerships} members={members} expertises={expertises} decisions={decisions} key="founder" />}
        {type === "business" && <Business stages={stages} sizes={sizes} industries={industries} networks={networks} key="business" />}
        {type === "development" && <Development products={products} key="development" />}
        {type === "marketing" && <Marketing targets={targets} usps={usps} mchallenges={mchallenges} mchannels={mchannels} mgoals={mgoals} key="marketing" />}
        {type === "sales" && <Sales revenues={revenues} leads={leads} schallenges={schallenges} sgoals={sgoals} sstrategies={sstrategies} key="sales" />}
      </AnimatePresence>
    </div>
  )
}
