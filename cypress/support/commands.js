// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const position_placeholder = '[placeholder="position"]';
import selectors from '../support/selector.js'

Cypress.Commands.add('searchForPosition', (position_name) => {
    cy.get(selectors.position_placeholder).type(position_name, { force: true })
        cy.get('button').contains('search').click({force: true})

})

Cypress.Commands.add('completesearch', (position_name, location, company_name) => {
    cy.get(selectors.position_placeholder).type(position_name, { force: true })
    cy.get(selectors.location_placeholder).type(location, { force: true })
    cy.get(selectors.company_placeholder).type(company_name, { force: true })

    cy.get('button').contains('search').click({force: true})

})