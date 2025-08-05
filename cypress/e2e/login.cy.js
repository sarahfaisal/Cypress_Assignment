import LoginPage from '../pages/LoginPage123'
import HomePage from '../pages/HomePage'

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Should show error on invalid login', () => {
    LoginPage.login('invalid_user', 'invalid_pass')
    LoginPage.getErrorMessage().should('contain', 'Username and password do not match')
  })

  it('Should login successfully and land on home page', () => {
    cy.login('standard_user', 'secret_sauce')
    HomePage.getTitle().should('have.text', 'Products')
  })
})
