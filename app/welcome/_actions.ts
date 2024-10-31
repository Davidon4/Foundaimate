'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No Logged In User')
  }

  try {
   await clerkClient().users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        applicationName: formData.get('applicationName'),
        applicationType: formData.get('applicationType'),
      },
    })
    
    return { success: true }
  } catch (err) {
    console.error('Error in completeOnboarding:', err)
    return { success: false, error: 'There was an error updating the user metadata.' }
  }
}