// Install canvas-confetti
// npm install canvas-confetti


// Create a hook to use confetti
// import confetti from 'canvas-confetti';

// export const useConfetti = () => {
//   const duration = 3 * 1000;
//   const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

//   const randomInRange = (min: number, max: number) => {
//     return Math.random() * (max - min) + min;
//   }

//   const runFireworks = () => {
//     const animationEnd = Date.now() + duration;

//     const interval: NodeJS.Timer = setInterval(function() {
//       const timeLeft = animationEnd - Date.now();

//       if (timeLeft <= 0) {
//         return clearInterval(interval);
//       }

//       const particleCount = 50 * (timeLeft / duration);
      
//       // Create confetti from random positions
//       confetti({
//         ...defaults,
//         particleCount,
//         origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
//       });
//       confetti({
//         ...defaults,
//         particleCount,
//         origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
//       });
//     }, 250);
//   };

//   return { runFireworks };
// };


// Using the confetti in the home page
// 'use client';

// import { useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { useConfetti } from '@/hooks/useConfetti';

// const HomePage = () => {
//   const searchParams = useSearchParams();
//   const { runFireworks } = useConfetti();
  
//   useEffect(() => {
//     // Check if this is a new signup
//     const isNewSignup = searchParams.get('newSignup') === 'true';
    
//     if (isNewSignup) {
//       runFireworks();
//     }
//   }, [searchParams]);

//   return (
//     // ... rest of your component
//   );
// };

// export default HomePage;


// In the avatar page
// router.push('/home?newSignup=true');

// For more sophisticated confetti
// Create a modal that create a welcome modal
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { useConfetti } from "@/hooks/useConfetti";

// export function WelcomeModal({ isNewSignup }: { isNewSignup: boolean }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const { runFireworks } = useConfetti();

//   useEffect(() => {
//     if (isNewSignup) {
//       setIsOpen(true);
//       runFireworks();
//     }
//   }, [isNewSignup]);

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle className="text-center text-2xl font-bold">
//             Welcome to Foundaimate! 🎉
//           </DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4 py-4 text-center">
//           <p className="text-lg text-gray-700">
//             We're excited to have you on board! Let's start building something amazing together.
//           </p>
//           <Button 
//             className="w-full"
//             onClick={() => setIsOpen(false)}
//           >
//             Get Started
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// Use the modal in the home page
// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { WelcomeModal } from '@/components/welcome-modal';

// const HomePage = () => {
//   const searchParams = useSearchParams();
//   const isNewSignup = searchParams.get('newSignup') === 'true';
  
//   return (
//     <>
//       <WelcomeModal isNewSignup={isNewSignup} />
//       {/* Rest of your component */}
//     </>
//   );
// };

// export default HomePage;