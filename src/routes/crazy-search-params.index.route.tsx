import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CrazySearchParams } from "../views/CrazySearchParams/CrazySearchParams";

const crazySearchParamSchema = z.object({
  assignee: z.string().optional(),
  client: z.string().optional(),
  types: z.array(z.string()).optional(),
  weirdNestedFilter: z
    .object({
      id: z.number().optional(),
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

export type CrazySearchParam = z.infer<typeof crazySearchParamSchema>;

export const Route = createFileRoute("/crazy-search-params/")({
  component: CrazySearchParams,
  validateSearch: crazySearchParamSchema,
});
