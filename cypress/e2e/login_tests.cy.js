describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      cy.login(username, password);
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });

  it('should display error message with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.invalidUser;
      cy.login(username, password);
      cy.checkErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
  });

  it('should display error message with locked user', () => {
    cy.fixture('users').then((users) => {
      const { username, password } = users.lockedUser;
      cy.login(username, password);
      cy.checkErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });
  });

  it('should display error message with empty username', () => {
    cy.get('#user-name').clear();
    cy.fixture('users').then((users) => {
      const { password } = users.validUser;
      cy.get('#password').type(password);
    });
    cy.get('#login-button').click();
    cy.checkErrorMessage('Epic sadface: Username is required');
  });

  it('should display error message with empty password', () => {
    cy.fixture('users').then((users) => {
      const { username } = users.validUser;
      cy.get('#user-name').type(username);
    });
    cy.get('#password').clear();
    cy.get('#login-button').click();
    cy.checkErrorMessage('Epic sadface: Password is required');
  });
});