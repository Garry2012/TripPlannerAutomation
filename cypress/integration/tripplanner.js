describe('Trip Planner', function() {

 it('plans a trip from North sydney Station - Town Hall Station', function() {

    cy.viewport(1440, 687)
 
    cy.visit('https://transportnsw.info/trip#/')
 
    cy.get('#search-input-From').type('North Sydney Station') 
    
    cy.get('#suggestion-From-0').click()
 
    cy.get('#search-input-To').type('Town Hall Station')

    cy.get('#suggestion-To-0').click()
  
    cy.get('#search-button').click()

    cy.get('div[role="listitem"]',{timeout: 12000}).siblings().should('have.length.gt',0)
 })

})
