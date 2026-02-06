import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as testData from '../test-data/testData.json';
import * as dotenv from 'dotenv';

// Load environment variables for sensitive customer data
dotenv.config();

test.describe('Order Placement & Calculation Tests', () => {
    test('Place order with multiple products and verify subtotal calculation', async ({ page }) => {
        const homePage = new HomePage(page);
        const categoryPage = new CategoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Map customer data from environment variables (Requirement 1.7)
        const customer = {
            firstName: process.env.CUSTOMER_FIRSTNAME || 'John',
            lastName: process.env.CUSTOMER_LASTNAME || 'Doe',
            email: process.env.CUSTOMER_EMAIL || 'test@example.com',
            city: process.env.CUSTOMER_CITY || 'Lahore',
            address: process.env.CUSTOMER_ADDRESS || 'Street 123',
            zip: process.env.CUSTOMER_ZIP || '54000',
            phone: process.env.CUSTOMER_PHONE || '03001234567'
        };

        // 1. Navigate to home
        await homePage.navigateTo('https://demowebshop.tricentis.com');

        // 2. Add multiple products from external data (Requirement 1.1)
        for (const product of testData.products) {
            await homePage.selectCategory(product.category);
            await categoryPage.addProductToCart(product.name);
        }

        // 3. Go to Cart and APPLY PRICE CALCULATION CHECKS (Requirement 1.9)
        await cartPage.goToCart();
        await cartPage.verifySubtotal(); // Dynamically verifies Sum(Items) == Subtotal

        // 4. Proceed to Checkout
        await cartPage.proceedToCheckout();
        await checkoutPage.checkoutAsGuest();

        // 5. Complete all checkout steps
        await checkoutPage.fillBillingAddress(customer);
        await checkoutPage.selectShippingAddress();
        await checkoutPage.selectShippingMethod();
        await checkoutPage.selectPaymentMethod();
        await checkoutPage.confirmPaymentInfo();
        await checkoutPage.confirmOrder();

        // 6. Verify order was successfully processed
        const isSuccess = await checkoutPage.verifyOrderCompletion();
        expect(isSuccess).toBeTruthy();
    });
});
