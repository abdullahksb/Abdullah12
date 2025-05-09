import { test,expect } from '@playwright/test';

test("API test", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/Booking");
  console.log(await response.json());
});

test.only("API test 1", async () => {
  const apiContext = await test.request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
  });
  const response = await apiContext.get("/Booking");
  const data = await response.json();
  console.log(data);
});