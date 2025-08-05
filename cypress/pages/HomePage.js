class HomePage {
  getTitle() {
    return cy.get('.title')
  }

  getFirstProduct() {
    return cy.get('.inventory_item').first().find('a')
  }

  clickFirstProduct() {
    this.getFirstProduct().first().click()
  }
}

export default new HomePage()
