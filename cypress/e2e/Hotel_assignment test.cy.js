///<reference types = "cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/')
    })
    it('verify tabs of the page', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.contains('check-out').should("be.visible")
        cy.contains('Add a flight').should("be.visible")
        cy.get('[class="checkbox-container"]').should("be.visible")
        cy.get('[type="submit"]').should("be.visible")
    })
    it('verify text tabs of the page',() => {
        cy.visit('http://localhost:3000')
        cy.contains('Going to').should("have.text", "Going to")
        cy.contains('check-in').should("have.text", "check-in")
        cy.contains('check-out').should("have.text", "check-out")
        cy.contains('travellers').should("have.text", "travellers")
        cy.get('[data-cy="Car"]').should("have.text", "car")
        cy.get('[data-cy="Flight"]').should("have.text", "flight")
        cy.contains('search').should("have.text", "search")
        
    })
    
})