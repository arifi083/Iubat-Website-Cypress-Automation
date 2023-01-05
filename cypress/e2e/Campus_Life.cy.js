describe('Campus Life', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(17) > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row-o-equal-height > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > a')
        .click();
        cy.url().should('eq','https://iubat.edu/campus-life/arts-and-culture/')
        cy.title().should('eq','Arts and Culture')
        cy.get('.banner-wrapper > h1').should('have.text','Arts and Culture')
    })


    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(17) > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row-o-content-middle > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
         .click();
        cy.url().should('eq','https://iubat.edu/campus-life/')
        cy.title().should('eq',"Campus Life")
        cy.get('.banner-wrapper > h1').should('have.text','Campus Life')
    })



    

  })