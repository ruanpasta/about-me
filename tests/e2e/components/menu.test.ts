import { test, expect } from '@playwright/test'

test.describe('menu', () => {
	test('open menu', async ({ page }) => {
		await page.goto('/')

		await page.getByRole('button', { name: 'menu' }).click()
		const openElement = await page.innerText('.ab-menu--open')
		expect(openElement).toBeTruthy()
	})

	test('open submenu', async ({ page }) => {
		await page.goto('/')

		await page.getByRole('button', { name: 'menu' }).click()
		await page.getByRole('link', { name: 'Work' }).click()
		await expect(page).toHaveURL('/')

		const expandedElement = await page.innerText('.menu--expanded')
		expect(expandedElement).toBe('Work')
	})

	test('navigate to skills page from menu', async ({ page }) => {
		await page.goto('/')
		await page.getByRole('button', { name: 'menu' }).click()
		await page.getByRole('link', { name: 'Skills' }).click()
		await expect(page).toHaveURL('/skills')
	})

	test('navigate to experience page from menu', async ({ page }) => {
		await page.goto('/')
		await page.getByRole('button', { name: 'menu' }).click()
		await page.getByRole('link', { name: 'Experience' }).click()
		await expect(page).toHaveURL('/experience')
	})

	test('navigate to about me page from menu', async ({ page }) => {
		await page.goto('/')
		await page.getByRole('button', { name: 'menu' }).click()
		await page.getByRole('link', { name: 'About me' }).click()
		await expect(page).toHaveURL('/about-me')
	})
})
