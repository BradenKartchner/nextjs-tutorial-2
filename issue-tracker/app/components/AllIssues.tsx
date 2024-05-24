//"use client";
// Get all issues from Database and display them in a readable format
import React from "react";
import { getData } from "../issues/page";

export default async function AllIssues() {
    const myData = await getData();
    //console.log(myData);

    return (
        <div>
            <table className="p-5 rounded-lg bg-neutral-800 table-auto">
                <thead>
                    <tr>
                        <th className="text-slate-400 text-left px-5 py-5">
                            Title
                        </th>
                        <th className="text-slate-400 text-left px-5 py-5">
                            Description
                        </th>
                        <th className="text-slate-400 text-left px-5 py-5">
                            Issue Status
                        </th>
                        <th className="text-slate-400 text-left px-5 py-5">
                            Created
                        </th>
                        <th className="text-slate-400 text-left px-5 py-5">
                            Last Updated
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {myData.map((data, index) => (
                        <tr
                            key={data.id}
                            className={
                                index % 2 == 0 ? "bg-black" : "bg-neutral-800"
                            }
                        >
                            <td className="border-b-2 border-t-2 border-slate-500 px-5 pr-10 py-5">
                                {data.title}
                            </td>
                            <td className="border-b-2 border-t-2 border-slate-500 px-5 pr-10 py-5">
                                {data.description}
                            </td>
                            <td className="border-b-2 border-t-2 border-slate-500 px-5 pr-10 py-5">
                                {data.status}
                            </td>
                            <td className="border-b-2 border-t-2 border-slate-500 px-5 pr-10 py-5">{`${data.createdAt.toLocaleString()}`}</td>
                            <td className="border-b-2 border-t-2 border-slate-500 px-5 pr-10 py-5">{`${data.updatedAt.toLocaleString()}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
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
    ...etc
  ]
}
*/

/* 
Code that didn't work

    import axios from "axios";
import prisma from "@/prisma/client";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

    //const [waitingForData, setWaitingForData] = useState(false);
    //const [testData, setTestData] = useState([]);

    //const allIssues = getData();
    //allIssues.then((response) => setTestData(response));
    //console.log(allIssues);

    //for (let i = 0; i < myIssues.length; i++) {
    //  console.log(myIssues[i]);
    //}

 async function getData() {
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
} 

 enum Status {
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
}; 

 export const getServerSideProps = (async () => {
    const myIssues = await prisma.issue.findMany();
    //console.log(myIssues);
    return {
        props: { myIssues },
    };
}) 

*/
