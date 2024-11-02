import {auth} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";


export async function PATCH(
    req: Request,
    { params }: { params: { profileId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!params.profileId) {
            return new NextResponse("Profile ID is required", { status: 400 });
        }

        // Verify the profile belongs to the user
        const profile = await prismadb.profile.findUnique({
            where: {
                id: params.profileId,
                userId: userId
            }
        });

        if (!profile) {
            return new NextResponse("Profile not found", { status: 404 });
        }

        const updatedProfile = await prismadb.profile.update({
            where: {
                id: params.profileId,
                userId: userId
            },
            data: {
                name: body.name,
                description: body.description,
                experienceId: body.experienceId,
                ownershipId: body.ownershipId,
                memberId: body.memberId,
                expertiseId: body.expertiseId,
                networkId: body.networkId,
                revenueId: body.revenueId,
                stageId: body.stageId,
                sizeId: body.sizeId,
                industryId: body.industryId,
                productId: body.productId,
                decisionId: body.decisionId,
                targetId: body.targetId,
                leadId: body.leadId,
                schallengeId: body.schallengeId,
                sstrategyId: body.sstrategyId,
                sgoalId: body.sgoalId,
                sriskId: body.sriskId,
                uspId: body.uspId,
                mchannelId: body.mchannelId,
                mchallengeId: body.mchallengeId,
                mgoalId: body.mgoalId,
                mriskId: body.mriskId,
                dchallengeId: body.dchallengeId,
                updateId: body.updateId,
                driskId: body.driskId,
                featureId: body.featureId,
                innovationId: body.innovationId
            }
        });

        return NextResponse.json(updatedProfile);
    } catch (error) {
        console.log('[PROFILE_PATCH]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}