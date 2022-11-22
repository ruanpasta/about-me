import { test } from '@playwright/test'

test.describe('home page', () => {
	test.beforeEach(async ({ page }) => await page.goto('/'))

	test('should have text ruan pasta', async ({ page }) => {
		await page.getByText('Ruan Pasta').click()
	})

	test('should have text software engineer', async ({ page }) => {
		await page.getByText('Software Engineer').click()
	})
})
