import { z } from "zod";

export const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export const bankSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});
