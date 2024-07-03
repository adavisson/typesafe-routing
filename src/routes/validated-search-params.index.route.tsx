import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ValidatedSearchParams } from "../views/ValidatedSearchParams/ValidatedSearchParams";

const validatedSearchParamSchema = z.object({
  assignee: z.string().optional(),
  client: z.string().optional(),
  types: z.array(z.string()).optional(),
  nestedFilter: z
    .object({
      id: z.number(),
      name: z.string().optional(),
      levelOne: z
        .object({
          name: z.string().optional(),
          levelTwo: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

export type ValidatedSearchParam = z.infer<typeof validatedSearchParamSchema>;

export const Route = createFileRoute("/validated-search-params/")({
  component: ValidatedSearchParams,
  validateSearch: validatedSearchParamSchema,
});
