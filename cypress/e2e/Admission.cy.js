describe('Research', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(1) > :nth-child(4) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click();
        cy.url().should('eq','https://iubat.edu/admission/')
        cy.title().should('eq','Admission - IUBAT')
        cy.get('.d-flex > .fw-bold').should('have.text','Welcome to Top Ranked Green Campus in Dhaka City')
    })

   


   


    

  })