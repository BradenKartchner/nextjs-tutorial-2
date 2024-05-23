import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    // if validation fails, return an error with 400 code
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    // else create new issue
    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description },
    });

    // status 201 = new Issue was created
    return NextResponse.json(newIssue, { status: 201 });
}
