const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login', () => {
  test('TC-LOGIN-01: fails with empty username and password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('TC-LOGIN-02: fails with unrecognized username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'foo');
    await page.fill('#password', 'randompass');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('do not match any user in this service');
  });

  test('TC-LOGIN-03: fails with valid username and incorrect password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrongpass123');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('do not match any user in this service');
  });

  test('TC-LOGIN-04: fails for locked-out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('this user has been locked out');
  });

  test('TC-LOGIN-05: succeeds with valid active user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});
