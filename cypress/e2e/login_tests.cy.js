describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      cy.get('#user-name').type(username);
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });

  it('should display error message with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.invalidUser;
      cy.get('#user-name').type(username);
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });

  it('should display error message with locked user', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.lockedUser;
      cy.get('#user-name').type(username);
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });

  it('should display error message with empty username', () => {
    cy.fixture('users').then((users) => {
      const { password } = users.validUser;
      cy.get('#user-name').clear();
      cy.get('#password').type(password, {log: false});
      cy.get('#login-button').click();
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username is required');
    });
  });

  it('should display error message with empty password', () => {
    cy.fixture('users').then((users) => {
      const { username } = users.validUser;
      cy.get('#user-name').type(username);
      cy.get('#password').clear();
      cy.get('#login-button').click();
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Password is required');
    });
  });
});