// class LoginPage {
//   visit() {
//     cy.visit('https://www.saucedemo.com')
//   }

//   getUsername() {
//     return cy.get('#user-name')
//   }

//   getPassword() {
//     return cy.get('#password')
//   }

//   getLoginBtn() {
//     return cy.get('#login-button')
//   }

//   getErrorMessage() {
//     return cy.get('[data-test="error"]')
//   }

//   login(username, password) {
//     this.getUsername().type(username)
//     this.getPassword().type(password)
//     this.getLoginBtn().click()
//   }
// }

// export default new LoginPage()

class LoginPage {
  static visit() {
    cy.visit('https://www.saucedemo.com');
  }

  static getUsername() {
    return cy.get('#user-name');
  }

  static getPassword() {
    return cy.get('#password');
  }

  static getLoginBtn() {
    return cy.get('#login-button');
  }

  static getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  static login(username, password) {
    this.getUsername().type(username);
    this.getPassword().type(password);
    this.getLoginBtn().click();
  }
}

export default LoginPage;
