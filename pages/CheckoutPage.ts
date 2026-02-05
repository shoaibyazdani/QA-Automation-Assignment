import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async checkoutAsGuest() {
        if (await this.page.locator('.checkout-as-guest-button').isVisible()) {
            await this.page.locator('.checkout-as-guest-button').click();
        }
    }

    async fillBillingAddress(data: any) {
        await this.page.locator('#BillingNewAddress_FirstName').fill(data.firstName);
        await this.page.locator('#BillingNewAddress_LastName').fill(data.lastName);
        await this.page.locator('#BillingNewAddress_Email').fill(data.email);
        await this.page.locator('#BillingNewAddress_CountryId').selectOption({ label: 'Pakistan' });
        await this.page.locator('#BillingNewAddress_City').fill(data.city);
        await this.page.locator('#BillingNewAddress_Address1').fill(data.address);
        await this.page.locator('#BillingNewAddress_ZipPostalCode').fill(data.zip);
        await this.page.locator('#BillingNewAddress_PhoneNumber').fill(data.phone);
        await this.page.locator('#billing-buttons-container .new-address-next-step-button').click();
    }

    async selectShippingAddress() {
        await this.page.locator('#shipping-buttons-container .new-address-next-step-button').click();
    }

    async selectShippingMethod() {
        await this.page.locator('#shipping-method-buttons-container .shipping-method-next-step-button').click();
    }

    async selectPaymentMethod() {
        await this.page.locator('#payment-method-buttons-container .payment-method-next-step-button').click();
    }

    async confirmPaymentInfo() {
        await this.page.locator('#payment-info-buttons-container .payment-info-next-step-button').click();
    }

    async confirmOrder() {
        await this.page.locator('#confirm-order-buttons-container .confirm-order-next-step-button').click();
    }

    async verifyOrderCompletion() {
        const message = await this.page.locator('.section.order-completed .title').innerText();
        return message.includes('Your order has been successfully processed!');
    }
}
