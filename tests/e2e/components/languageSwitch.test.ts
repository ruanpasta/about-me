import { test } from '@playwright/test';

test('should change between languages', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'en-US' }).click();

  await page.getByRole('button', { name: 'pt-BR' }).click();
});