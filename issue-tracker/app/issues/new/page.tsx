"use client";
import React from "react";
import { useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { RxInfoCircled } from "react-icons/rx";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "../../components/ErrorMessage";

// interface for shape of the form. we can remove due to importing our schema and using z.infer
/* 
interface IssueForm {
    title: string;
    description: string;
}
*/

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
    const router = useRouter();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema),
    });
    console.log(register("title"));
    const [error, setError] = useState("");

    if (errors) {
        console.log(errors);
    }

    return (
        <div className="max-w-xl">
            {error && (
                <Callout.Root className="mb-5">
                    <Callout.Icon>
                        <RxInfoCircled />
                    </Callout.Icon>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form
                className="space-y-3"
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");
                    } catch (error) {
                        console.log(error);
                        setError("An unexpected error occurred.");
                    }
                })}
            >
                <TextField.Root
                    placeholder="Title"
                    {...register("title")}
                ></TextField.Root>
                {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
                <Controller
                    name="description"
                    control={control}
                    render={({ field, formState: { errors } }) => (
                        <SimpleMDE placeholder="Description" {...field} />
                    )}
                />
                {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
                <Button>Submit New Issue</Button>
            </form>
        </div>
    );
};

export default NewIssuePage;
