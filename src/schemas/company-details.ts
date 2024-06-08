import { z } from "zod";
import { addressSchema, bankSchema } from "./shared";

export const companySchema = z
  .object({
    company_legal_type: z.enum(["Public", "Private", "Trust", "Test"]),
    company_registration_number: z.string(),
    country_of_incorporation: z.string(),
    date_of_incorporation: z.string(),
    registered_address: addressSchema,
    correspondence_address: addressSchema.optional(),
    head_office_address: addressSchema.optional(),
    existing_bank_account: z.boolean(),
    banks: z
      .array(bankSchema)
      .optional()
      .refine((banks) => banks && banks.length > 0, {
        message:
          "At least one bank must be specified if existing bank account is true.",
      }),
    tax_country: z.string(),
    tax_id_number: z.string().optional(),
    vat_number: z.string().optional(),
    vat_reason: z.string().optional(),
    test_extra_field: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.existing_bank_account &&
      (!data.banks || data.banks.length === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["banks"],
        message:
          "Bank details are required when there is an existing bank account.",
      });
    }

    if (!data.tax_id_number && data.tax_country && !data.vat_reason) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["vat_reason"],
        message: "Please explain the reason for absence of a Tax ID number.",
      });
    }

    if (!data.vat_number && data.tax_country && !data.vat_reason) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["vat_reason"],
        message: "Please explain the reason for absence of a VAT number.",
      });
    }
  });
