import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { ChatClient } from "./components/chat-client";

interface ChatIdPageProps {
    params: {
        chatId: string;
    }
}

const ChatIdPage = async ({params}: ChatIdPageProps) => {
    const {userId} = auth();

    if(!userId) {
        return auth().redirectToSignIn()
    }

    const personality = await prismadb.personality.findUnique({
        where:{
            id: params.chatId
        },
        include:{
            messages: {
                orderBy:{
                  createdAt: "asc"  
                },
                where: {
                    userId
                }
            },
            _count:{
                select:{
                    messages: true
                },
            },
        },
    });

    if(!personality) {
        return redirect("/home");
    }
    return ( 
      <div className="flex h-screen w-full items-center justify-center">
      <div className="flex-1 max-w-6xl mx-auto h-full">
          <ChatClient personality={personality}/>
      </div>
  </div>
     );
}
 
export default ChatIdPage;
