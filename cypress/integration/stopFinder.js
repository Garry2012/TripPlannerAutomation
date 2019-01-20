/*
Given Phileas is looking for a stop
When he searches for "Wynyard Station"
Then a stop named "Wynyard Station, Sydney" is found
And the stop provides more than one mode of transport
*/
describe('Stop Finder', function () {
    var result

    //Test REST API using Cypress
    
    //Test if API is running and returns response code 200
    it('validates the status', function() {
        result = cy.request('https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?TfNSWSF=true&language=en&name_sf=Wynyard%20Station&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48')
       
        result.its('status')
              .should('equal',200);
     })
    
     
    it('finds a stop for Wynyard Station', function () {

        result = cy.request('https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?TfNSWSF=true&language=en&name_sf=Wynyard%20Station&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48')
        
        //Check the response body
        //Body returns JSON 
        /*
        {
            "version": "10.2.2.48",
            "locations": [
            {
                "id": "10101102",
                "name": "Wynyard Station, Sydney",
                "disassembledName": "Wynyard Station",
                "modes": [1,5,11],
        */
        result.its('body').then(body => {

            //Test if Name matches
            expect(body.locations[0]).to.have.property('name','Wynyard Station, Sydney')
            //Test if Number of Modes are greater than zero
            expect(body.locations[0].modes).to.have.length.gte('1')
            
        })

  
             
    })

})