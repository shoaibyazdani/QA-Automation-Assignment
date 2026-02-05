import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async selectCategory(category: string) {
        await this.page.locator('.top-menu').getByRole('link', { name: category, exact: true }).click();
    }
}
