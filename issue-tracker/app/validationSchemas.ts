import { z } from "zod";

// define zod shape for body of our request
// we only need "title" and "description", if you look at
// our Prisma schema all the other fields have default values
export const createIssueSchema = z.object({
    title: z.string().min(1, "Title is required.").max(255),
    description: z
        .string({ required_error: "Description is required." })
        .min(1, "Description is required."),
});
