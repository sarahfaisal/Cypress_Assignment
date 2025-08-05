import LoginPage from '../pages/LoginPage123'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage123'

describe('Product Navigation Tests', () => {
  before(() => {
    LoginPage.visit()
    cy.login('standard_user', 'secret_sauce')
  })

  it('Should navigate to product page on click', () => {
    HomePage.clickFirstProduct()
    ProductPage.getProductTitle().should('exist')
  })
})
