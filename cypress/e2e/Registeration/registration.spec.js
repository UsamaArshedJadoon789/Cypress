// cypress/integration/registration.spec.js

describe('Registration Form Tests', () => {
  beforeEach(() => {
    // Visit the registration form page before each test
    cy.visit('/register'); // Adjust URL as per your application
  });

  it('Should navigate to the registration form', () => {
    cy.url().should('include', '/register'); // Verify correct URL
    cy.get('h1').should('contain', 'Registration'); // Verify heading text
  });

  it('Should submit a valid registration form', () => {
    const username = 'testuser';
    const email = 'testuser@example.com';
    const password = 'password123';

    // Fill out the registration form
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    // Submit the form
    cy.get('form').submit();

    // Assert success message or navigate to next page as expected
    cy.url().should('include', '/dashboard'); // Example: Redirect URL after successful registration
  });

  it('Should display UI validation for invalid input', () => {
    // Attempt to submit an empty form
    cy.get('form').submit();

    // Verify error messages for each field
    cy.get('.error-message').should('have.length', 3); // Assuming there are three fields
    cy.get('.error-message').eq(0).should('contain', 'Username is required');
    cy.get('.error-message').eq(1).should('contain', 'Email is required');
    cy.get('.error-message').eq(2).should('contain', 'Password is required');
  });
});

/*

Explanation:
describe Block: Groups all test cases related to the registration form under a single suite named "Registration Form Tests".
beforeEach Hook: Ensures that each test starts with visiting the registration form page (/register).
Test Cases:
Navigation Test: Verifies that the correct page (/register) is loaded and the heading contains "Registration".
Valid Registration Test: Enters valid input data (username, email, password) into the form, submits it, and checks if the URL includes /dashboard (or any expected redirect URL).
UI Validation Test: Attempts to submit an empty form and checks if the correct error messages are displayed for each required field.
Running the Test:
To execute these tests, follow these steps:

Ensure your Cypress environment is set up and Cypress is installed in your project (npm install cypress --save-dev if not already installed).
Place this registration.spec.js file inside the cypress/integration/ directory of your Cypress project.
Run Cypress using npx cypress open.
In the Cypress Test Runner, click on registration.spec.js to run all the tests in that file.
These tests will simulate user interactions with your registration form and verify expected behaviors, helping to ensure the functionality and validation rules are working as intended. Adjust the selectors (cy.get(...)) and assertions (should(...)) according to your specific application's HTML structure and expected behavior.

*/

