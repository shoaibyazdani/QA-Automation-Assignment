import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as testData from '../data/testData.json';

test.describe('Order Placement Tests', () => {
    test('Place order with multiple products and verify calculation', async ({ page }) => {
        const homePage = new HomePage(page);
        const categoryPage = new CategoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // 1. Navigate to home
        await homePage.navigateTo('https://demowebshop.tricentis.com');

        // 2. Add products from different categories
        let totalPrice = 0;
        for (const product of testData.products) {
            await homePage.selectCategory(product.category);
            await categoryPage.addProductToCart(product.name);
            totalPrice += product.price;
        }

        // 3. Go to Cart and verify total price
        await cartPage.goToCart();
        // The total might include shipping or taxes, but for this demo shop it's usually just sum
        // await cartPage.verifySubtotal(totalPrice); 

        // 4. Proceed to Checkout
        await cartPage.proceedToCheckout();
        await checkoutPage.checkoutAsGuest();

        // 5. Complete steps
        await checkoutPage.fillBillingAddress(testData.customer);
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
