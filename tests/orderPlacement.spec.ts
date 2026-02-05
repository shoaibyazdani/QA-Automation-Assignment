import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as testData from '../data/testData.json';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

test.describe('Order Placement Tests', () => {
    test('Place order with multiple products and verify calculation', async ({ page }) => {
        const homePage = new HomePage(page);
        const categoryPage = new CategoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Map customer data from environment variables
        const customer = {
            firstName: process.env.CUSTOMER_FIRSTNAME || 'John',
            lastName: process.env.CUSTOMER_LASTNAME || 'Doe',
            email: process.env.CUSTOMER_EMAIL || 'test@example.com',
            city: process.env.CUSTOMER_CITY || 'Lahore',
            address: process.env.CUSTOMER_ADDRESS || '123 Main St',
            zip: process.env.CUSTOMER_ZIP || '54000',
            phone: process.env.CUSTOMER_PHONE || '03001234567'
        };

        // 1. Navigate to home
        await homePage.navigateTo('https://demowebshop.tricentis.com');

        // 2. Add products from different categories
        for (const product of testData.products) {
            await homePage.selectCategory(product.category);
            await categoryPage.addProductToCart(product.name);
        }

        // 3. Go to Cart
        await cartPage.goToCart();

        // 4. Proceed to Checkout
        await cartPage.proceedToCheckout();
        await checkoutPage.checkoutAsGuest();

        // 5. Complete steps
        await checkoutPage.fillBillingAddress(customer);
        await checkoutPage.selectShippingAddress();
        await checkoutPage.selectShippingMethod();
        await checkoutPage.selectPaymentMethod();
        await checkoutPage.confirmPaymentInfo();
        await checkoutPage.confirmOrder();

        // 6. Verify success
        const isSuccess = await checkoutPage.verifyOrderCompletion();
        expect(isSuccess).toBeTruthy();
    });
});
