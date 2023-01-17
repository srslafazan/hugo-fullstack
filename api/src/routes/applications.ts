import express, { Router } from "express";
import {
  ExpressJoiInstance,
  ValidatedRequest,
  createValidator,
} from "express-joi-validation";

import { validators } from "../lib/validators";

const router = Router();
const validator: ExpressJoiInstance = createValidator();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

// In-memory data store
const applications = {};
let nextApplicationId = 1;

const guards = {
  application: {
    exists: (req, res, next) => {
      if (!applications[req.params.id]) {
        return res
          .status(404)
          .json({ message: `Application ${req.params.id} not found` });
      }
      return next();
    },
  },
};

// POST route that starts a new insurance application and initializes it with the provided data
router.post(
  "/",
  validator.body(validators.application.create),
  (req: ValidatedRequest<express.Request>, res) => {
    const id = nextApplicationId++;
    applications[id] = { ...req.body, id };
    return res.json({
      application: applications[id],
      resume: `http://${host}:${port}/applications/${id}/edit`,
    });
  }
);

// GET route to retrieve the current insurance application
router.get("/:id", guards.application.exists, (req, res) => {
  return res.json(applications[req.params.id]);
});

// PUT route to update the insurance application
router.put(
  "/:id",
  validator.body(validators.application.update),
  guards.application.exists,
  (req: ValidatedRequest<express.Request>, res) => {
    const id = req.params.id;
    applications[id] = { ...applications[id], ...req.body };
    return res.json(applications[id]);
  }
);

// POST route to validate the application and return a price
router.post("/:id/validate", guards.application.exists, (req, res) => {
  if (!validators.application.validate.validate(applications[req.params.id])) {
    return res.json({ valid: false });
  }
  return res.json({ valid: true, price: Math.random() * 100 });
});

export default router;
