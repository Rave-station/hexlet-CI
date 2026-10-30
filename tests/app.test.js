const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.js");

beforeAll(async () => {
  await setupStrapi();
}, 30000);

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined(); // eslint-disable-line
});
