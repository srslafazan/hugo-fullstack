export type Vehicle = {
  vin: string;
  year: number;
  make: string;
  model: string;
};

export type Application = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  street: string;
  city: string;
  state: string;
  zipcode: number;
  vehicles: Vehicle[];
};
