import Joi from "joi";
import "joi-extract-type";

import { getNextYear, yearsDiff } from "./index";

export const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),

  dateOfBirth: Joi.date()
    .required()
    // (validate that input is a date and at least 16 years old)
    .custom((value, helper) => {
      const diff = yearsDiff(value, new Date());
      if (diff < 16) {
        return helper.message({ message: "Age must be at least 16" });
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
              message: `Vehicle year (${value}) must be greater than 1985 and less than current ${getNextYear()}`,
            });
          }),
        make: Joi.string().required(),
        model: Joi.string().required(),
      })
    ),
});

export const validators = {
  application: {
    create: Joi.any(),
    update: schema,
    validate: schema,
  },
};
