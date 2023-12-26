import { test, expect } from '@playwright/test';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const option of options) {
  test(`Verify 'Send to Endpoint 1' result for ${option}`, async ({ page }) => {
    await page.goto('/');
    await page.getByRole('combobox').selectOption(String(option));
    await page.locator('button', { hasText: 'Send to Endpoint 1' }).click();
    console.log(await page.getByText(`div label`));
    expect(await page.locator(`div label`).innerText()).toEqual(
      String(option * option)
    );
  });

  // This test verifies only odd number results since even numbers don't return anything.
  test(`${
    option % 2 === 0
      ? `${option} will not calculate any value for Endpoint 2`
      : `Verify 'Send to Endpoint 2' result for ${option}`
  }`, async ({ page }) => {
    await page.goto('/');
    await page.getByRole('combobox').selectOption(String(option));
    await page.locator('button', { hasText: 'Send to Endpoint 2' }).click();
    console.log(await page.getByText(`div label`));
    if (option % 2 != 0) {
      expect(await page.locator(`div label`).innerText()).toEqual(
        String(option / 2)
      );
    }
  });
}

test('Verify "Send to Endpoint 2" result for even number shows user an error message', async ({
  page,
}) => {});
test('Verify drop down exists and contains ', async ({ page }) => {});

test('Verify Send to Endpoint 1 button exists', async ({ page }) => {});

test('Verify Send to Endpoint 2 button exists', async ({ page }) => {});

test('verify "Welcome!" and "Pick a number" text exists on the page', async ({
  page,
}) => {});
