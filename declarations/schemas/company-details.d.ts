import { z } from "zod";
export declare const companySchema: z.ZodEffects<z.ZodObject<{
    company_legal_type: z.ZodEnum<["Public", "Private", "Trust"]>;
    company_registration_number: z.ZodString;
    country_of_incorporation: z.ZodString;
    date_of_incorporation: z.ZodString;
    registered_address: z.ZodObject<{
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
    correspondence_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    head_office_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    existing_bank_account: z.ZodBoolean;
    banks: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description?: string | undefined;
    }, {
        name: string;
        description?: string | undefined;
    }>, "many">>, {
        name: string;
        description?: string | undefined;
    }[] | undefined, {
        name: string;
        description?: string | undefined;
    }[] | undefined>;
    tax_country: z.ZodString;
    tax_id_number: z.ZodOptional<z.ZodString>;
    vat_number: z.ZodOptional<z.ZodString>;
    vat_reason: z.ZodOptional<z.ZodString>;
    test_extra_field: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    company_legal_type: "Public" | "Private" | "Trust";
    company_registration_number: string;
    country_of_incorporation: string;
    date_of_incorporation: string;
    registered_address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    existing_bank_account: boolean;
    tax_country: string;
    correspondence_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    head_office_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    banks?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
    tax_id_number?: string | undefined;
    vat_number?: string | undefined;
    vat_reason?: string | undefined;
    test_extra_field?: string | undefined;
}, {
    company_legal_type: "Public" | "Private" | "Trust";
    company_registration_number: string;
    country_of_incorporation: string;
    date_of_incorporation: string;
    registered_address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    existing_bank_account: boolean;
    tax_country: string;
    correspondence_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    head_office_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    banks?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
    tax_id_number?: string | undefined;
    vat_number?: string | undefined;
    vat_reason?: string | undefined;
    test_extra_field?: string | undefined;
}>, {
    company_legal_type: "Public" | "Private" | "Trust";
    company_registration_number: string;
    country_of_incorporation: string;
    date_of_incorporation: string;
    registered_address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    existing_bank_account: boolean;
    tax_country: string;
    correspondence_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    head_office_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    banks?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
    tax_id_number?: string | undefined;
    vat_number?: string | undefined;
    vat_reason?: string | undefined;
    test_extra_field?: string | undefined;
}, {
    company_legal_type: "Public" | "Private" | "Trust";
    company_registration_number: string;
    country_of_incorporation: string;
    date_of_incorporation: string;
    registered_address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    existing_bank_account: boolean;
    tax_country: string;
    correspondence_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    head_office_address?: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    banks?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
    tax_id_number?: string | undefined;
    vat_number?: string | undefined;
    vat_reason?: string | undefined;
    test_extra_field?: string | undefined;
}>;
