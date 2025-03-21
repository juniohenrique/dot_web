describe('Checkout Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      cy.get('#user-name').type(username);
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
    });
  });

  it('should complete the checkout process successfully', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();

    cy.get('.summary_info').should('contain', 'Payment Information');
    cy.get('.summary_info').should('contain', 'Shipping Information');
    cy.get('.summary_info').should('contain', 'Price Total');

    cy.get('#finish').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  it('should display error message with missing first name', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Error: First Name is required');
  });

  it('should display error message with missing postal code', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#continue').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Error: Postal Code is required');
  });
});