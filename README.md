# Senior QA Automation Assignment - Demo Web Shop

## 🚀 Project Overview
This repository contains a comprehensive UI and API automation suite for the Demo Web Shop. Built with **Playwright (TS/JS)** and **Postman**, it follows the Page Object Model (POM) pattern for scalability and maintainability.

## 📁 Repository Structure
- `tests/`: UI Automation scripts using Playwright.
- `pages/`: Page Object Models for UI screens.
- `data/`: External test data (JSON).
- `postman/`: Postman Collection for API tests.
- `manual/`: Manual test cases in DOCX format.
- `performance/`: Performance test design document.
- `docs/`: AI Acceleration demonstration document.
- `reports/`: HTML reports generated after execution.

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shoaibyazdani/QA-Automation-Assignment.git
   cd QA-Automation-Assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## 🧪 Running Tests

### UI Tests
To run all UI tests and generate a report:
```bash
npx playwright test
```

To view the report:
```bash
npx playwright show-report reports/html
```

### API Tests
1. Import the file inside `postman/Petstore_API_Tests.postman_collection.json` into Postman.
2. Run the collection.

## 🔐 Environment Variables
The project uses `dotenv` to avoid storing personal data in the code. 
1. Create a `.env` file in the root directory.
2. Copy the content from `.env.example` and fill in your details.
```env
CUSTOMER_FIRSTNAME=YourFirstName
CUSTOMER_LASTNAME=YourLastName
...
```

## 🐶 About Leo
This project was developed with the assistance of **Leo**, an AI coding companion, showcasing the future of human-AI collaboration in QA engineering.
