const XLSX = require('xlsx');
const fs = require('fs');

const testCases = [
    {
        "Test Case ID": "TC_001",
        "Scenario": "Validate User Registration",
        "Steps": "1. Go to https://demowebshop.tricentis.com\n2. Click 'Register'\n3. Fill valid details (Gender, Name, Email, Password)\n4. Click 'Register'",
        "Expected Result": "Success message 'Your registration completed' appears. User email displays in header.",
        "Priority": "High"
    },
    {
        "Test Case ID": "TC_002",
        "Scenario": "Verify Advanced Search",
        "Steps": "1. Enter 'Laptop' in search bar\n2. Click 'Search'\n3. Check 'Advanced search' on results page\n4. Filter by Category 'Computers'\n5. Click 'Search' again",
        "Expected Result": "Results are filtered correctly and show only products in the 'Computers' category.",
        "Priority": "Medium"
    },
    {
        "Test Case ID": "TC_003",
        "Scenario": "Verify Cart Subtotal Calculation with Multiple Categories",
        "Steps": "1. Add 'Computing and Internet' (Books) to cart\n2. Add 'Blue Jeans' (Apparel & Shoes) to cart\n3. Add 'Black & White Diamond Heart' (Jewelry) to cart\n4. Navigate to Shopping Cart",
        "Expected Result": "Cart shows 3 items from different categories. Subtotal displays exactly $141.00 (10 + 1 + 130).",
        "Priority": "High"
    },
    {
        "Test Case ID": "TC_004",
        "Scenario": "End-to-End Guest Checkout",
        "Steps": "1. Add item to cart\n2. Checkout as Guest\n3. Fill Billing/Shipping info\n4. Select Payment method\n5. Confirm Order",
        "Expected Result": "Message 'Your order has been successfully processed!' is displayed with an Order Number.",
        "Priority": "High"
    },
    {
        "Test Case ID": "TC_005",
        "Scenario": "Verify Cart persistence",
        "Steps": "1. Add item to cart\n2. Change quantity to 5\n3. Click 'Update Shopping Cart'\n4. Refresh page",
        "Expected Result": "Quantity remains 5 and subtotal updates correctly after refresh.",
        "Priority": "Medium"
    }
];

const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(testCases);

// Adjust column widths for readability
const wscols = [
    {wch: 15}, // TC ID
    {wch: 30}, // Scenario
    {wch: 50}, // Steps
    {wch: 50}, // Expected Result
    {wch: 10}  // Priority
];
ws['!cols'] = wscols;

XLSX.utils.book_append_sheet(wb, ws, "Manual Test Cases");
XLSX.writeFile(wb, "manual/Manual_Test_Cases.xlsx");

console.log("Excel file generated successfully!");
