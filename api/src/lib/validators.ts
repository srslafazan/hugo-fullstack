import * as Joi from "joi";

import { getNextYear, yearsDiff } from "./index";

export const validators = {
  application: {
    create: Joi.any(),
    update: Joi.object({
      id: Joi.number(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      dateOfBirth: Joi.date()

        // (validate that input is a date and at least 16 years old)
        .custom((value, helper) => {
          const diff = yearsDiff(value, new Date());
          return diff < 16
            ? helper.message({ custom: "Age must be at least 16" })
            : true;
        }),
      address: Joi.string(),
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zipcode: Joi.number(),
      // Vehicle(s) (must have 1 vehicle, cannot have more than 3 total)
      vehicles: Joi.array()
        .min(1)
        .max(3)
        .items(
          Joi.object({
            vin: Joi.string(),
            // (validate numeric and valid year between 1985 and current year + 1)
            year: Joi.number().custom((value, helper) => {
              if (value > 1985 && value < getNextYear()) return value;
              return helper.message({
                custom: `Vehicle year (${value}) must be greater than 1985 and less than current ${getNextYear()}`,
              });
            }),
            make: Joi.string(),
            model: Joi.string(),
          })
        ),
    }),
    validate: Joi.object({
      id: Joi.number().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      dateOfBirth: Joi.date()
        .required()
        // (validate that input is a date and at least 16 years old)
        .custom((value, helper) => {
          const diff = yearsDiff(value, new Date());
          if (diff < 16) {
            return helper.message({ custom: "Age must be at least 16" });
          } else {
            return true;
          }
        }),
      address: Joi.string().required(),
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipcode: Joi.number().required(),
      // Vehicle(s) (must have 1 vehicle, cannot have more than 3 total)
      vehicles: Joi.array()
        .min(1)
        .max(3)
        .items(
          Joi.object({
            vin: Joi.string().required(),
            // (validate numeric and valid year between 1985 and current year + 1)
            year: Joi.number()
              .required()
              .custom((value, helper) => {
                if (value > 1985 && value < getNextYear()) return value;
                return helper.message({
                  custom: `Vehicle year (${value}) must be greater than 1985 and less than current ${getNextYear()}`,
                });
              }),
            make: Joi.string().required(),
            model: Joi.string().required(),
          })
        ),
    }),
  },
};
