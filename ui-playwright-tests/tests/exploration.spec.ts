import { test, expect } from '@playwright/test';

test('exploration', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com');
  await page.screenshot({ path: 'exploration.png' });
});
