import { test } from '@playwright/test'

test.describe('works page', () => {
	test.beforeEach(async ({ page }) => await page.goto('/about-me'))

	test('should have a card title', async ({ page }) => {
		await page.innerText('.card__header__title')
	})
  
	test('should have a resume', async ({ page }) => {
    await page.innerText('.about-me-resume')
	})

	test('should have a image', async ({ page }) => {
    await page.getByTestId('about-me-image').click()
	})
})
