import { useCallback, useEffect, useState } from "react";
import { get } from "lodash";
import axios from "axios";

import { validators } from "../../../api/src/lib/validators";
import {
  Application as ApplicationType,
  Vehicle,
} from "../../../api/src/lib/types";

const vehicleTemplate: Vehicle = { vin: "", year: 0, make: "", model: "" };

export const Application = ({ view = false, edit = false, id = "" }) => {
  const [application, setApplication] = useState({
    id: parseInt(id),
  } as Partial<ApplicationType>);
  const [localApplication, setLocalApplication] = useState({
    id: parseInt(id),
  } as Partial<ApplicationType>);
  const [validation, setValidation]: [any, Function] = useState(null);
  const [price, setPrice]: [any, Function] = useState(null);

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
    setValidation(valid);
    return valid;
  }, [localApplication]);

  const validateSubmit = useCallback(() => {
    const valid = validators.application.validate.validate(localApplication);
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

  const getQuote = async () => {
    const response = await axios.post(`/api/applications/${id}/validate`);
    setPrice(response.data.price);
  };

  if (!id) return null;

  return view ? (
    <div>
      <h1 className="text-center mb-4">View application</h1>
      <pre>{JSON.stringify(application, null, 2)}</pre>
    </div>
  ) : edit ? (
    <div>
      <h1 className="text-center mb-4">Edit application</h1>
      <p className="text-center text-green-900">
        {price && <span>Quote: ${price}</span>}
      </p>
      <p className="text-center text-red-900">{validation?.error?.message}</p>
      <div className="flex justify-between pt-2">
        <pre className="p-10 text-sm">
          {JSON.stringify(localApplication, null, 2)}
        </pre>
        {/* Naive form */}
        {/* TODO: render form dynamically based on structure */}
        <div className="p-10">
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
            <label>Date Of Birth: </label>
            {/* TODO date guards, min|max */}
            <input
              type="text"
              value={localApplication?.dateOfBirth as any}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  dateOfBirth: e.target.value,
                })
              }
            />
          </div>
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
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
          <div className="flex justify-between pt-2">
            <label>Zipcode: </label>
            <input
              type="number"
              value={localApplication?.zipcode}
              onChange={(e) =>
                setLocalApplication({
                  ...localApplication,
                  zipcode: parseInt(e.target.value),
                })
              }
            />
          </div>
          <button
            className="bg-green-100 p-2 rounded-sm my-4"
            onClick={(e) => {
              e.preventDefault();
              setLocalApplication({
                ...localApplication,
                vehicles: [
                  ...(localApplication.vehicles || []),
                  { ...vehicleTemplate },
                ].slice(0, 3),
              });
            }}
          >
            Add Vehicle +
          </button>
          {!localApplication.vehicles
            ? null
            : localApplication.vehicles.map(
                ({ vin, year, make, model }: any, i: number) => (
                  <div key={i} className="flex items-center">
                    <br />
                    <div>
                      <div className="flex justify-between pt-2">
                        <label>VIN: </label>
                        <input
                          type="text"
                          value={
                            get(localApplication, ["vehicles", i, "vin"]) || vin
                          }
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
                      <div className="flex justify-between pt-2">
                        <label>Year: </label>
                        <input
                          type="text"
                          value={
                            get(localApplication, ["vehicles", i, "year"]) ||
                            year
                          }
                          onChange={(e) => {
                            const vehicles = [
                              ...(localApplication.vehicles || [
                                { ...vehicleTemplate },
                              ]),
                            ];
                            vehicles[i].year = parseInt(e.target.value || "0");
                            setLocalApplication({
                              ...localApplication,
                              vehicles,
                            });
                          }}
                        />
                      </div>
                      <div className="flex justify-between pt-2">
                        <label>Make: </label>
                        <input
                          type="text"
                          value={
                            get(localApplication, ["vehicles", i, "make"]) ||
                            make
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
                      <div className="flex justify-between pt-2">
                        <label>Model: </label>
                        <input
                          type="text"
                          value={
                            get(localApplication, ["vehicles", i, "model"]) ||
                            model
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
                    <button
                      className="bg-red-100 hover:bg-red-200 rounded-sm cursor-pointer p-4 ml-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setLocalApplication({
                          ...localApplication,
                          vehicles: [
                            ...(localApplication.vehicles || []).slice(0, i),
                            ...(localApplication.vehicles || []).slice(i + 1),
                          ],
                        });
                      }}
                    >
                      x
                    </button>
                  </div>
                )
              )}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button
          className="bg-blue-100 hover:bg-blue-200 p-4 rounded-sm cursor-pointer"
          disabled={
            JSON.stringify(application) === JSON.stringify(localApplication)
          }
          onClick={() => {
            validateUpdate() && update();
          }}
        >
          Update
        </button>
        <button
          className="bg-green-100 hover:bg-green-200 p-4 rounded-sm cursor-pointer"
          disabled={
            JSON.stringify(application) === JSON.stringify(localApplication)
          }
          onClick={async () => {
            if (!validateSubmit()) return;
            await submit();
            await getQuote();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <div>Invalid</div>
  );
};
