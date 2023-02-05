///<reference types = "cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/')
    })
    it('verify tabs of the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="Hotels"]').should("be.visible")
        cy.get('[data-cy="Car"]').should("be.visible")
        cy.get('[data-cy="Flight"]').should("be.visible")

    })
    it('verify text tabs of the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
        cy.get('[data-cy="Car"]').should("have.text", "car")
        cy.get('[data-cy="Flight"]').should("have.text", "flight")

    })
    it('verify elements of the Hotels tab', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        // cy.get('#tab1 > form > .btn-submit').should("be.visible")
        // cy.contains('search').should("be.visible")
    cy.get('[type="submit"]').should("be.visible")
    })

})