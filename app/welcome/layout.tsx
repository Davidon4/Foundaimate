import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = auth();

  if (session.sessionClaims?.metadata.onboardingComplete === true) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    redirect('/home')
  }

  return <>{children}</>
}