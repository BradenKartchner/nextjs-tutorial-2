import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
    // get all issues from database
    const allIssues = await prisma.issue.findMany();

    // return as a json using NextResponse
    return NextResponse.json(allIssues, { status: 200 });
}
