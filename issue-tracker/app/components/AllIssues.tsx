//"use client";
// Get all issues from Database and display them in a readable format
import React from "react";
import axios from "axios";
import prisma from "@/prisma/client";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { getData } from "../issues/page";

/* async function getData() {
    try {
        //setWaitingForData(true);
        const allData = await prisma.issue.findMany();
        // console.log(allData);
        //setWaitingForData(false);
        return allData;
    } catch (error) {
        //setWaitingForData(false);
        console.log(error);
        // return error;
    }
} */

/* enum Status {
    OPEN,
    IN_PROGRESS,
    CLOSED
  }
  

type dispIssue = {
    id: number;
    title: string;
    description: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}; */

/* export const getServerSideProps = (async () => {
    const myIssues = await prisma.issue.findMany();
    //console.log(myIssues);
    return {
        props: { myIssues },
    };
}) */

export default async function AllIssues() {
    //const [waitingForData, setWaitingForData] = useState(false);
    //const [testData, setTestData] = useState([]);

    //const allIssues = getData();
    //allIssues.then((response) => setTestData(response));
    //console.log(allIssues);

    //for (let i = 0; i < myIssues.length; i++) {
    //  console.log(myIssues[i]);
    //}

    const myData = await getData();
    console.log(myData);

    return <div>{"IDK LULZ"}</div>;
}

/* 
myData = 
{
  myIssues: [
    {
      id: 1,
      title: 'First issue',
      description: 'Description of the first issue',
      status: 'OPEN',
      createdAt: 2024-05-21T01:17:22.792Z,
      updatedAt: 2024-05-21T01:17:22.792Z
    },
    {
      id: 2,
      title: 'Bug 2',
      description: 'Description of bug 2',
      status: 'OPEN',
      createdAt: 2024-05-21T02:49:49.098Z,
      updatedAt: 2024-05-21T02:49:49.098Z
    },
    {
      id: 3,
      title: 'Bug 3',
      description: 'Description of bug 3',
      status: 'OPEN',
      createdAt: 2024-05-23T03:18:29.746Z,
      updatedAt: 2024-05-23T03:18:29.746Z
    },
    {
      id: 4,
      title: 'test issue 4',
      description: 'description of issue 4',
      status: 'OPEN',
      createdAt: 2024-05-23T20:30:23.069Z,
      updatedAt: 2024-05-23T20:30:23.069Z
    }
  ]
}
*/
