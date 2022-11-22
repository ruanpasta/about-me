import { test } from '@playwright/test';

test('should have personal links', async ({ page }) => {
  await page.goto('/');

  await page.innerText('.personal-links')
});