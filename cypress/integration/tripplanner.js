/*
Given Phileas is planning a trip
When he executes a trip plan from "North Sydney Station" to "Town Hall Station"
Then a list of trips should be provided
*/
describe('Trip Planner', function() {

   it('plans a trip from North sydney Station - Town Hall Station', function() {
  
      cy.viewport(1440, 687)
  
     //Application URL can be fetched from properties file
      cy.visit('https://transportnsw.info/trip#/')
     
      //Enter From station
      cy.get('#search-input-From').type('North Sydney Station') 
      cy.get('#suggestion-From-0').click()
     
      //Enter To station
      cy.get('#search-input-To').type('Town Hall Station')
      cy.get('#suggestion-To-0').click()
    
      //SERACH result
      cy.get('#search-button').click()
  
      //Should list trips otherwise fail the test
      cy.get('div[role="listitem"]',{timeout: 12000}).siblings().should('have.length.gt',0)
   })
  
  })
  
