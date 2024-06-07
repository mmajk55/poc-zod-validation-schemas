import { z } from "zod";
export declare const addressSchema: z.ZodObject<{
    street: z.ZodString;
    city: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
}, "strip", z.ZodTypeAny, {
    street: string;
    city: string;
    postalCode: string;
    country: string;
}, {
    street: string;
    city: string;
    postalCode: string;
    country: string;
}>;
export declare const bankSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
}, {
    name: string;
    description?: string | undefined;
}>;
