import { test } from '@playwright/test'

test.describe('works page', () => {
	test.beforeEach(async ({ page }) => await page.goto('/skills'))

	test('should have a card title', async ({ page }) => {
		await page.innerText('.card__header__title')
	})

	test('should have a card description', async ({ page }) => {
		await page.getByTestId('skills-card-description').click()
	})

	test('should have a technologies list', async ({ page }) => {
		await page.innerText('.skills__technologies')
	})
})
