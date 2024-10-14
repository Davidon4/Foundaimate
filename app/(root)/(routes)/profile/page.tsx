import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
// import { ProfileForm } from "./components/profile-form";
import { ProfileForm } from "./components/profile-form";
import PageIllustration from "@/components/page-illustration";

const ProfilePage = () => {
    const {userId} = auth();
    console.log("USERID=>", userId)
    if(!userId) {
        return auth().redirectToSignIn();
    }

    return ( 
        <>
        <ProfileForm />
        </>
     );
};
 
export default ProfilePage;