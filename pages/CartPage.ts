import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goToCart() {
        await this.page.locator('#topcartlink').click();
    }

    async verifySubtotal() {
        // Get all unit prices from the cart items
        const itemPrices = await this.page.locator('.product-unit-price').allTextContents();
        const itemQuantities = await this.page.locator('.qty-input').evaluateAll(inputs => inputs.map(input => (input as HTMLInputElement).value));
        
        let calculatedTotal = 0;
        for (let i = 0; i < itemPrices.length; i++) {
            const price = parseFloat(itemPrices[i].replace(/[^0-9.]/g, ''));
            const qty = parseInt(itemQuantities[i]) || 1;
            calculatedTotal += price * qty;
        }

        // Get the subtotal displayed in the summary
        const subtotalText = await this.page.locator('.order-summary-content .product-price').first().innerText();
        const displayedSubtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));

        console.log(`Verifying: Calculated ${calculatedTotal} vs Displayed ${displayedSubtotal}`);
        expect(displayedSubtotal).toBeCloseTo(calculatedTotal, 2);
    }

    async proceedToCheckout() {
        await this.page.locator('#termsofservice').check();
        await this.page.locator('#checkout').click();
    }
}
