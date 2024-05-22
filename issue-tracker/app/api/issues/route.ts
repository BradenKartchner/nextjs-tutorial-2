import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

// define zod shape for body of our request
// we only need "title" and "description", if you look at
// our Prisma schema all the other fields have default values
const createIssueSchema = z.object({
    title: z.string().min(1, "Title is required.").max(255),
    description: z.string().min(1, "Description is required"),
});

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
