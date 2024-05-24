import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import AllIssues from "../components/AllIssues";
import prisma from "@/prisma/client";

export const getData = async () => {
    const myIssues = await prisma.issue.findMany();
    //console.log(myIssues);
    return myIssues;
};

const IssuesPage = () => {
    return (
        <div>
            <h1 className="text-2xl pt-2 pb-5">Create New Issue</h1>
            <div className="pb-5">
                <Button>
                    <Link href="/issues/new">New Issue</Link>
                </Button>
            </div>
            <h1 className="text-2xl pb-5">Current Issues</h1>
            <AllIssues />
        </div>
    );
};

export default IssuesPage;
