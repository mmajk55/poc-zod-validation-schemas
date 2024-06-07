import { z } from "zod";
import * as BusinessDetails from "./business-details";
import * as shared from "./shared";
declare const combinedSchema: z.ZodEffects<z.ZodObject<{
    business_details: z.ZodEffects<z.ZodObject<{
        account_purpose: z.ZodEnum<["Business expenses", "Payroll", "Receive funds from clients"]>;
        selected_products: z.ZodArray<z.ZodEnum<["SEPA", "SEPA instant"]>, "many">;
        selected_currencies: z.ZodArray<z.ZodEnum<["GBP", "USD", "AED"]>, "many">;
        business_activity: z.ZodString;
        employees_count: z.ZodEnum<["1-10", "11-50", "51-200"]>;
        company_trading_name: z.ZodString;
        company_website: z.ZodString;
        country_of_operation: z.ZodString;
        no_office_additional_info: z.ZodOptional<z.ZodString>;
        initial_funds: z.ZodNumber;
        initial_source: z.ZodEnum<["Client funds", "UBO contribution", "Loans"]>;
        regulatory_requirement: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    }, {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    }>, {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    }, {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    }>;
    company_details: z.ZodEffects<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    business_details: {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    };
    company_details: {
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
    };
}, {
    business_details: {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    };
    company_details: {
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
    };
}>, {
    business_details: {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    };
    company_details: {
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
    };
}, {
    business_details: {
        account_purpose: "Business expenses" | "Payroll" | "Receive funds from clients";
        selected_products: ("SEPA" | "SEPA instant")[];
        selected_currencies: ("GBP" | "USD" | "AED")[];
        business_activity: string;
        employees_count: "1-10" | "11-50" | "51-200";
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        initial_funds: number;
        initial_source: "Client funds" | "UBO contribution" | "Loans";
        regulatory_requirement: boolean;
        no_office_additional_info?: string | undefined;
    };
    company_details: {
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
    };
}>;
declare const exampleData: {
    business_details: {
        account_purpose: string;
        selected_products: string[];
        selected_currencies: string[];
        business_activity: string;
        employees_count: string;
        company_trading_name: string;
        company_website: string;
        country_of_operation: string;
        no_office_additional_info: undefined;
        initial_funds: number;
        initial_source: string;
        regulatory_requirement: boolean;
    };
    company_details: {
        company_legal_type: string;
        company_registration_number: string;
        country_of_incorporation: string;
        date_of_incorporation: string;
        registered_address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        correspondence_address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        head_office_address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        existing_bank_account: boolean;
        banks: {
            name: string;
            description: string;
        }[];
        tax_country: string;
        tax_id_number: string;
        vat_number: string;
        vat_reason: string;
        test_extra_field: string;
    };
};
export { shared, combinedSchema, exampleData, BusinessDetails };
