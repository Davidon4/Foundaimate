import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: Request) {
  try {
      const { userId } = getAuth(req as any);

      if (!userId) {
          return new NextResponse("Unauthorized", { status: 401 });
      }

      const profile = await prismadb.profile.findFirst({
          where: {
              userId: userId
          },
          select: {
              id: true
          }
      });

      return NextResponse.json({ profile });
  } catch (error) {
      console.log('[PROFILE_GET]', error);
      return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const {userId} = getAuth(req as any);
    console.log("Authenticated userId:", userId);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized: User not authenticated" },
        { 
          status: 401,
        }
      );
    }

    const body = await req.json();
    console.log("Received body=>", body);

        // Validate required fields
        const requiredFields = ['name', 'description', 'userId', 'experienceId', 'ownershipId', 'expertiseId', 'stageId', 'revenueId',
           'networkId', 'industryId', 'sizeId', 'productId', 'decisionId', 'targetId', 'memberId', 'schallengeId', 'sstrategyId', 'leadId', 
           'mchannelId', 'uspId', 'mchallengeId', 'mgoalId', 'sgoalId', 'dchallengeId',
           'featureId', 'updateId', 'innovationId', 'driskId', 'mriskId', 'sriskId', 'personalityId'];

        const missingFields = requiredFields.filter(field => !body[field]);
        
        if (missingFields.length > 0) {
          console.error('Missing required fields:', missingFields);
          return NextResponse.json(
            { error: `Missing required fields: ${missingFields.join(', ')}`,
            receivedFields: Object.keys(body)
          },
          {status: 400}
          );
        }

        const profile = await prismadb.profile.create({
          data: {
            ...body,
            userId
          }
        });

    console.log("Created profile:", JSON.stringify(profile, null, 2));

    return NextResponse.json({ profile }, { status: 200 });
  } catch (error: any) {
    console.error('Detailed error in profile creation:', {
      message: error.message,
      code: error.code,
      meta: error.meta,
      stack: error.stack 
    });

    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Failed to create profile',
        details: process.env.NODE_ENV === 'development' ? {
          code: error.code,
          meta: error.meta,
          message: error.message
        } : undefined 
      },
      {status: 500}
    );
  }
}