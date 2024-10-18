import { auth } from "@clerk/nextjs/server";
import { ProfileForm } from "./components/profile-form";
// import PageIllustration from "@/components/page-illustration";
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

    let profile = null;

    if(params.profileId !== "new") {
      profile = await prismadb.profile.findUnique({
        where: {
            id: params.profileId,
            userId
        }
       })
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
        /> 
        </>
     );
};
 
export default ProfileIdPage;