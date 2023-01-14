import "dotenv/config";
import supertest from "supertest";
import app from "./app";
console.log("process.env.PORT", process.env.PORT);
import application1 from "./fixtures/application1.json";

const createApplication1 = () =>
  supertest(app)
    .post("/applications")
    .send({ ...application1 });

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

describe("Application endpoint", () => {
  // POST route to create an application
  test("POST /applications creates an application (with valid payload)", async () => {
    const created = await createApplication1();
    expect(created.statusCode).toBe(200);
    expect(created.body.application.firstName).toBe("Adam");
    expect(created.statusCode).toBe(200);
    expect(created.body.resume).toBeDefined();
  });

  // GET route to get an existing application
  test("GET /applications/:id returns 404 for missing :id", async () => {
    const application = await supertest(app).get(`/applications/${100}`);
    expect(application.statusCode).toBe(404);
  });
  test("GET /applications/:id retrieves insurance application with :id", async () => {
    const created = await createApplication1();
    expect(created.statusCode).toBe(200);
    const application = await supertest(app).get(
      `/applications/${created.body.application.id}`
    );
    expect(application.statusCode).toBe(200);
    expect(application.body.firstName).toBe("Adam");
  });

  // PUT route to update the insurance application
  test("PUT /applications/:id updates an application with :id", async () => {
    const created = await createApplication1();
    expect(created.statusCode).toBe(200);
    expect(created.body.application.firstName).toBe("Adam");
    const application = await supertest(app)
      .put(`/applications/${created.body.application.id}`)
      .send({ ...application1, firstName: "Shain" });
    expect(application.statusCode).toBe(200);
    expect(application.body.firstName).toBe("Shain");
  });

  // POST route to validate the application and return a price
  test("POST /applications/:id/validate retrieves insurance application with :id", async () => {
    const validated = await supertest(app).post("/applications/1/validate");
    expect(validated.statusCode).toBe(200);
    expect(validated.body.valid).toBe(true);
    expect(validated.body.price).toBeDefined();
  });

  // POST route to resume an existing application
  test("GET /applications/:id/resume retrieves insurance application with :id", async () => {
    const created = await createApplication1();
    const resumeFromId = await supertest(app).get(
      `/applications/${created.body.application.id}/resume`
    );
    expect(resumeFromId.statusCode).toBe(200);
    const resumeFromLink = await supertest(app).get(
      created.body.resume.replace("http://localhost:3000", "")
    );
    expect(resumeFromLink.statusCode).toBe(200);
  });
});
