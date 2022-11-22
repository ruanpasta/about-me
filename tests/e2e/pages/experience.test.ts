import { test } from '@playwright/test'

test.describe('works page', () => {
	test.beforeEach(async ({ page }) => await page.goto('/experience'))

	test('should have a card title', async ({ page }) => {
		await page.innerText('.card__header__title')
	})
  
	test('should have a accordion component', async ({ page }) => {
    await page.innerText('.accordion')
	})
})
