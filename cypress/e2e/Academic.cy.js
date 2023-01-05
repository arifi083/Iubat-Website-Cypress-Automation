describe('Academic', () => {

    it.skip('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1542834830435 > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > :nth-child(3) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click();
        cy.url().should('eq','https://iubat.edu/academics/')
        cy.title().should('eq','Academics')
        cy.get('.banner-wrapper > h1').should('have.text','Academics')
    })

    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1563858796761 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .vc_row > .wpb_column > .vc_column-inner > :nth-child(1) > .vc_btn3-container > .vc_general')
        .click();
         cy.url().should('eq','https://iubat.edu/founders-corner/')
         cy.title().should('eq',"Founder’s Corner")
         cy.get('.banner-wrapper > h1').should('have.text',"Founder’s Corner")
    })

    

  })