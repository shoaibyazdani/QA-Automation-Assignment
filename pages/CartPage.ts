import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goToCart() {
        await this.page.locator('#topcartlink').click();
    }

    async verifySubtotal(expectedSubtotal: number) {
        const subtotalText = await this.page.locator('.product-price.order-total').innerText();
        const actualSubtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));
        expect(actualSubtotal).toBe(expectedSubtotal);
    }

    async proceedToCheckout() {
        await this.page.locator('#termsofservice').check();
        await this.page.locator('#checkout').click();
    }
}
