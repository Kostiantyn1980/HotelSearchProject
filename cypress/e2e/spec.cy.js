///<reference types = "Cypress"/>
describe('template spec', () => {
  it('test cypress io example page', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('eq','https://example.cypress.io/')
  })
})