import { test } from '@playwright/test'

test.describe('works page', () => {
	test.beforeEach(async ({ page }) => await page.goto('/works/some-project'))

	test('should have a card title', async ({ page }) => {
		await page.innerText('.card__header__title')
	})

	test('should have a card description', async ({ page }) => {
		await page.getByTestId('works-card-description').click()
	})
})
