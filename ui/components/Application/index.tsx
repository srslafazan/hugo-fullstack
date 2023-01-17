import { useCallback, useEffect, useState } from "react";
import { get } from "lodash";
import axios from "axios";

import { validators } from "../../../api/src/lib/validators";

const vehicleTemplate = { vin: "", year: "", make: "", model: "" };

export const Application = ({ view = false, edit = false, id = null }) => {
  const [application, setApplication] = useState({ id });
  const [localApplication, setLocalApplication] = useState({ id });
  const [validation, setValidation]: [any, Function] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/applications/${id}`).then(async (r) => {
      const json = await r.json();
      setApplication(json);
      setLocalApplication(json);
    });
  }, [id]);

  const validateUpdate = useCallback(() => {
    const valid = validators.application.update.validate(localApplication);
    console.log("valid", valid);
    setValidation(valid);
    return valid;
  }, [localApplication]);

  const validateSubmit = useCallback(() => {
    const valid = validators.application.validate.validate(localApplication);
    console.log("valid", valid);
    setValidation(valid);
    return valid;
  }, [localApplication]);

  const update = async () =>
    axios.put(`/api/applications/${id}`, {
      ...localApplication,
    });

  const submit = async () =>
    axios.put(`/api/applications/${id}`, {
      ...localApplication,
    });

  if (!id) return "loading...";

  return view ? (
    <div>
      <h1 className="text-center mb-12">View application</h1>
      <pre>{JSON.stringify(application, null, 2)}</pre>
    </div>
  ) : edit ? (
    <div>
      <h1 className="text-center mb-12">Edit application</h1>
      <p style={{ color: "red" }}>{validation?.error?.message}</p>
      <div className="flex">
        <pre>{JSON.stringify(localApplication, null, 2)}</pre>
        {/* Naive form */}
        {/* TODO: render form dynamically based on structure */}
        <form>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              value={localApplication?.firstName}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              value={localApplication?.lastName}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Date Of Birth: </label>
            {/* TODO date guards, min|max */}
            <input
              type="date"
              value={localApplication?.dateOfBirth}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  dateOfBirth: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Address: </label>
            <input
              type="text"
              value={localApplication?.address}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Street: </label>
            <input
              type="text"
              value={localApplication?.street}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  street: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>City: </label>
            <input
              type="text"
              value={localApplication?.city}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>State: </label>
            <input
              type="text"
              value={localApplication?.state}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  state: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Zipcode: </label>
            <input
              type="number"
              value={localApplication?.zipcode}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  zipcode: e.target.value,
                })
              }
            />
          </div>
          {(localApplication.vehicles || [{ ...vehicleTemplate }]).map(
            ({ vin, year, make, model }, i) => (
              <div key={i}>
                <div>
                  <label>VIN: </label>
                  <input
                    type="text"
                    value={get(localApplication, ["vehicles", i, "vin"]) || vin}
                    onChange={(e) => {
                      const vehicles = [
                        ...(localApplication.vehicles || [
                          { ...vehicleTemplate },
                        ]),
                      ];
                      vehicles[i].vin = e.target.value;
                      setLocalApplication({
                        ...localApplication,
                        vehicles,
                      });
                    }}
                  />
                </div>
                <div>
                  <label>Year: </label>
                  <input
                    type="text"
                    value={
                      get(localApplication, ["vehicles", i, "year"]) || year
                    }
                    onChange={(e) => {
                      const vehicles = [
                        ...(localApplication.vehicles || [
                          { ...vehicleTemplate },
                        ]),
                      ];
                      vehicles[i].year = e.target.value;
                      setLocalApplication({
                        ...localApplication,
                        vehicles,
                      });
                    }}
                  />
                </div>
                <div>
                  <label>Make: </label>
                  <input
                    type="text"
                    value={
                      get(localApplication, ["vehicles", i, "make"]) || make
                    }
                    onChange={(e) => {
                      const vehicles = [
                        ...(localApplication.vehicles || [
                          { ...vehicleTemplate },
                        ]),
                      ];
                      vehicles[i].make = e.target.value;
                      setLocalApplication({
                        ...localApplication,
                        vehicles,
                      });
                    }}
                  />
                </div>
                <div>
                  <label>Model: </label>
                  <input
                    type="text"
                    value={
                      get(localApplication, ["vehicles", i, "model"]) || model
                    }
                    onChange={(e) => {
                      const vehicles = [
                        ...(localApplication.vehicles || [
                          { ...vehicleTemplate },
                        ]),
                      ];
                      vehicles[i].model = e.target.value;
                      setLocalApplication({
                        ...localApplication,
                        vehicles,
                      });
                    }}
                  />
                </div>
              </div>
            )
          )}
        </form>
      </div>
      <div>
        <button
          disabled={
            JSON.stringify(application) === JSON.stringify(localApplication)
          }
          onClick={() => validateUpdate() && update()}
        >
          Update
        </button>
        <button
          disabled={
            JSON.stringify(application) === JSON.stringify(localApplication)
          }
          onClick={() => validateSubmit() && submit()}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <div>Invalid</div>
  );
};
