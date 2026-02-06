# QA Automation Assignment - Demo Web Shop

## 🚀 Project Overview
This repository contains a comprehensive UI, API, and Performance testing suite for the Demo Web Shop. The project is structured for maximum clarity and separation of concerns.

## 📁 Repository Structure
- **`ui-playwright-tests/`**: UI Automation suite using Playwright (TypeScript).
  - `pages/`: Page Object Models (POM).
  - `tests/`: Test specifications.
  - `test-data/`: External JSON data for parameterized testing.
  - `reports/`: Execution reports and artifacts.
- **`api-postman/`**: API testing collection for Postman.
- **`manual-testcases/`**: Structured manual E2E scenarios in Excel format.
- **`performance-test-design/`**: Strategic design document for load and stress testing.
- **`demo_execution.mp4`**: Video demonstration of the automated UI suite.

## 🛠️ Setup & Execution

### UI Automation (Playwright)
1. Navigate to the UI directory:
   ```bash
   cd ui-playwright-tests
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npx playwright test
   ```

### API Testing (Postman)
1. Import `api-postman/PetStore_Collection.json` into Postman.
2. Run the collection against the target environment.

### Manual Test Cases
- Open `manual-testcases/DemoWebShop_TestCases.xlsx` to review the E2E test scenarios.

## 🤖 AI Acceleration
I have included documentation on how AI tools were utilized to accelerate boilerplate generation and test data creation while maintaining high standards for code quality.
