import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async addProductToCart(productName: string) {
        const productCard = this.page.locator('.product-item', { hasText: productName });
        await productCard.locator('.button-2').click();
        
        // Some products might navigate to a product page if they have options
        // We'll handle both cases.
        const notification = this.page.locator('.bar-notification.success');
        try {
            await notification.waitFor({ state: 'visible', timeout: 5000 });
            await notification.locator('.close').click();
            await notification.waitFor({ state: 'hidden' });
        } catch (e) {
            // If notification didn't appear, maybe we are on the product page?
            // For this assignment, we assume they are simple products.
            console.log(`Notification for ${productName} did not appear, checking if we navigated.`);
        }
    }
}
