import { z } from "zod";

export const businessDetailsSchema = z
  .object({
    account_purpose: z.enum([
      "Business expenses",

      "Receive funds from clients",
    ]),
    selected_products: z.array(z.enum(["SEPA", "SEPA instant"])),
    selected_currencies: z.array(z.enum(["GBP", "AED"])),
    business_activity: z.string(),
    employees_count: z.enum(["1-10", "11-50", "51-200"]),
    company_trading_name: z.string(),
    company_website: z.string().url(),
    country_of_operation: z.string(),
    no_office_additional_info: z.string().optional(),
    initial_funds: z.number(),
    initial_source: z.enum(["Client funds", "UBO contribution", "Loans"]),
    regulatory_requirement: z.boolean(),
  })
  .superRefine((args, ctx) => {
    if (
      args.country_of_operation === "none" &&
      !args.no_office_additional_info
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Please provide the country of operation or additional information",
        path: ["country_of_operation"],
      });
    }
  });

export type BusinessDetails = z.infer<typeof businessDetailsSchema>;
