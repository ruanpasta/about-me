import { expect, test } from '@playwright/test'

test.describe('navbar logo', () => {
	test('should have a logo link', async ({ page }) => {
		await page.goto('/')
		expect(await page.textContent('a')).toBe('RP')
	})

	test('should return to home page when clicked on logo link', async ({ page }) => {
		await page.goto('/skills')

    const element = await page.getByText('Skills')
    await expect(element).toHaveText('Skills')

    await page.getByText('RP').click()
    await expect(page).toHaveURL('/')
	})
})
