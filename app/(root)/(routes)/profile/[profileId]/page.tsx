import { auth } from "@clerk/nextjs/server";
import { ProfileForm } from "./components/profile-form";
import prismadb from "@/lib/prismadb";

interface ProfileIdPageProps {
    params: {
        profileId: string
    }
}

const ProfileIdPage = async ({params}: ProfileIdPageProps) => {
    const {userId} = auth();

    if(!userId) {
        return auth().redirectToSignIn();
    }

        try {
      const profile = await prismadb.profile.findFirst({
        where: {
            id: params.profileId,
            userId: userId
        }
       })

       if (!profile) {
        console.log(`No profile found with ID: ${params.profileId} for user: ${userId}`);
        throw new Error("Profile not found");
        }

       const experiences = await prismadb.experience.findMany();
       const ownerships = await prismadb.ownership.findMany();
       const members = await prismadb.member.findMany();
       const expertises = await prismadb.expertise.findMany();
       const networks = await prismadb.network.findMany();
       const revenues = await prismadb.revenue.findMany();
       const stages = await prismadb.stage.findMany();
       const sizes = await prismadb.size.findMany();
       const industries = await prismadb.industry.findMany();
       const products = await prismadb.product.findMany();
       const decisions = await prismadb.decision.findMany();
       const targets = await prismadb.target.findMany();
       const leads = await prismadb.lead.findMany();
       const schallenges = await prismadb.sChallenge.findMany();
       const sstrategies = await prismadb.sStrategy.findMany();
       const sgoals = await prismadb.sGoal.findMany();
       const usps = await prismadb.usp.findMany();
       const mchannels = await prismadb.mChannel.findMany();
       const mchallenges = await prismadb.mChallenge.findMany();
       const mgoals = await prismadb.mGoal.findMany();
       const mrisks = await prismadb.mRisk.findMany();
       const srisks = await prismadb.sRisk.findMany();
       const drisks = await prismadb.dRisk.findMany();
       const dchallenges = await prismadb.dChallenge.findMany();
       const updates = await prismadb.update.findMany();
       const features = await prismadb.feature.findMany();
       const innovations = await prismadb.innovation.findMany();

    return ( 
        <>
        <ProfileForm 
        initialData={profile}
        experiences={experiences}
        ownerships={ownerships}
        expertises={expertises}
        networks={networks}
        revenues={revenues}
        stages={stages}
        sizes={sizes}
        industries={industries}
        products={products}
        decisions={decisions}
        targets={targets}
        members={members}
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
        /> 
        </>
     );
} catch (error) {
    console.error('Error fetching profile:', error);
    throw new Error("Error loading profile"); 
}
}
 
export default ProfileIdPage;