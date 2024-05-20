import { z } from "zod";
import { businessDetailsSchema } from "./business-details";
import { companySchema } from "./company-details";
import * as shared from "./shared";

const combinedSchema = z
  .object({
    business_details: businessDetailsSchema,
    company_details: companySchema,
  })
  .superRefine((data, ctx) => {
    if (data.business_details.country_of_operation.includes("UK")) {
      if (!data.company_details.correspondence_address) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["company_details", "correspondence_address"],
          message:
            "Correspondence address is required when the country of operation is UK.",
        });
      }
      if (!data.company_details.test_extra_field) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["company_details", "test_extra_field"],
          message: "Test extra field is required for UK operations.",
        });
      }
    }
  });

const exampleData = {
  business_details: {
    account_purpose: "Business expenses",
    selected_products: ["SEPA"],
    selected_currencies: ["GBP"],
    business_activity: "Consulting",
    employees_count: "1-10",
    company_trading_name: "Company Name",
    company_website: "https://example.com",
    country_of_operation: "UK",
    no_office_additional_info: "",
    initial_funds: 10000,
    initial_source: "Client funds",
    regulatory_requirement: true,
  },
  company_details: {
    company_legal_type: "Public",
    company_registration_number: "123456",
    country_of_incorporation: "UK",
    date_of_incorporation: "2021-01-01",
    registered_address: {
      street: "123 Street",
      city: "London",
      postalCode: "SW1A 1AA",
      country: "UK",
    },
    correspondence_address: {
      street: "123 Street",
      city: "London",
      postalCode: "SW1A 1AA",
      country: "UK",
    },
    head_office_address: {
      street: "123 Street",
      city: "London",
      postalCode: "SW1A 1AA",
      country: "UK",
    },
    existing_bank_account: true,
    banks: [
      {
        name: "Bank Name",
        description: "Bank Description",
      },
    ],
    tax_country: "UK",
    tax_id_number: "123456",
    vat_number: "123456",
    vat_reason: "Reason",
    test_extra_field: "Test",
  },
};

export { shared, combinedSchema, exampleData };
