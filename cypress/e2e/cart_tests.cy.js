describe('Cart Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      cy.get('#user-name').type(username);
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
    });
  });

  it('should add a product to the cart', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
  });

  it('should remove a product from the cart', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.contains('Remove').click();
    cy.get('.cart_item').should('not.exist');
  });

  it('should display the correct number of items in the cart icon', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.contains('.inventory_item_name', 'Sauce Labs Fleece Jacket')
      .parents('.inventory_item')
      .find('button')
      .contains('Add to cart')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '2');
  });
});