import { test, expect } from '@playwright/test'

test.describe('theme switch', () => {
	test('persist colorsheme', async ({ page }) => {
		await page.goto('/')

		await page.emulateMedia({ colorScheme: 'dark' })
		expect(
			await page.evaluate(
				() => matchMedia('(prefers-color-scheme: dark)').matches
			)
		).toBeTruthy()

		await page.emulateMedia({ colorScheme: 'light' })
		expect(
			await page.evaluate(
				() => matchMedia('(prefers-color-scheme: light)').matches
			)
		).toBeTruthy()
	})

	test('should change to light from dark theme', async ({ page }) => {
		await page.goto('/')

		await page.emulateMedia({ colorScheme: 'dark' })
    await page.getByTestId('theme-switch').click()
		await page.innerText('.light-theme')
	})

	test('should change to dark from light theme', async ({ page }) => {
		await page.goto('/')

		await page.emulateMedia({ colorScheme: 'light' })
    await page.getByTestId('theme-switch').click()
		await page.innerText('.dark-theme')
	})
})
