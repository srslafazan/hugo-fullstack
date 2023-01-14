import "dotenv/config";
import supertest from "supertest";
import app from "./app";


test("Sanity", () => {
  expect(true).toBe(true);
});

describe("API Root", () => {
  test("GET / response status code should be 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("GET /health response status code should be 200", async () => {
    const response = await supertest(app).get("/health");
    expect(response.statusCode).toBe(200);
  });
});
