///<reference types = "Cypress"/>

describe('The flight tab test will verify the flights functionality', () => {

    const car_tab = '[data-cy="Car"]'

    const destination_hotel_name = '[placeholder="Destination, hotel name"]';
    const location_input = '[name=location]'
    const drop_off_input = '[name=dropoff]'
    const car_group_list = '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'

    before(() => {
        cy.visit('http://localhost:3000')
        cy.get(car_tab).click()
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get(car_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })

    it('navigate to the car tab', () => {
        cy.get(destination_hotel_name).should("be.visible")
        cy.get(car_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(car_tab).invoke('text').should('eq', 'car')
    })

    it('populates location car', () => {
        cy.get(location_input).type('Toronto').should('have.value', 'Toronto')

    })

    it('chooses drop off date', () => {
        cy.get(drop_off_input).clear()
        cy.get(drop_off_input).type('06/08/2023').should('have.value', '06/08/2023')

    })

    it('chooses driver age list', () => {
        
        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('26', { force: true }).should('have.value', '26')
        
        
        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('23', {force: true} ).should('have.value', '23')
        
        
        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('25', { force: true }).should('have.value', '25')
        

    })
})
