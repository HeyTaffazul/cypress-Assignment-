/// <reference types="cypress" />

describe('OrangeHRM Login Functionality', () => {
    it('Valid Login Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        // Check if the URL has changed to the dashboard page
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible', 'Dashboard');
    });
});