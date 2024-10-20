"use client";
import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft as ArrowLeftIcon } from 'lucide-react';

import Intro from '@/components/welcome/intro';
import Next from '@/components/welcome/next';
import Select from '@/components/welcome/select';
import { Experience, Ownership, Member, Expertise, Decision } from "@prisma/client";

interface WelcomeProps {
  experiences: Experience[];
  ownerships: Ownership[];
  members: Member[];
  expertises: Expertise[];
  decisions: Decision[];
}

export default function OnboardingComponent({experiences, ownerships, members, expertises, decisions}: WelcomeProps) {
  const [error, setError] = React.useState('');
  const { user } = useUser()
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get('type');
  // mx-auto flex h-screen max-w-3xl flex-col items-center justify-center overflow-x-hidden
  return (
    <div className="">
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
        {type === "next" && <Next experiences={experiences} ownerships={ownerships} members={members} expertises={expertises} decisions={decisions} key="next" />}
        {type === "select" && <Select key="select" />}
      </AnimatePresence>
    </div>
  )
}
