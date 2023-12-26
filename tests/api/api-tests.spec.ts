import { test, expect } from '@playwright/test';

const apiBaseURL = 'http://localhost:8000';
test('should return an array of 10 numbers', async ({ page, request }) => {
  await page.goto('/');
  const response = await request.get(apiBaseURL + '/endpoint1');

  const responseBody = await response.json();
  expect(responseBody.numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Data driven test. We can also call /endpoint1 to get the array of values that we can use to test /endpoint2 results
// without defining the 'values' ourselves.
for (const value of values) {
  test(`Verify '/endpoint2' api response for value = ${value}`, async ({
    request,
  }) => {
    const response = await request.get(apiBaseURL + '/endpoint2' + `/${value}`);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.result).toEqual(value * value);
  });

  test(`${
    value % 2 === 0
      ? `Verify ${value} will return a 500 error code`
      : `Verify '/endpoint3' api response for value = ${value}`
  }`, async ({ request }) => {
    const response = await request.get(apiBaseURL + '/endpoint3' + `/${value}`);
    if (value % 2 != 0) {
      expect(response.ok()).toBeTruthy();
      const responseBody = await response.json();
      expect(responseBody.result).toEqual(value / 2);
    } else expect(response.status()).toBe(500);
  });
}

test('Verify /endpoint4 should not exist and return 404 ', async ({
  request,
}) => {
  const response = await request.get(apiBaseURL + '/endpoint4');
  expect(response.status()).toBe(404);
});
