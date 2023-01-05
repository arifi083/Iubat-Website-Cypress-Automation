describe('Facilities', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(20) > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row-o-equal-height > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > a')
        .click();
        cy.url().should('eq','https://iubat.edu/transport/')
        cy.title().should('eq','Transport')
        cy.get('.banner-wrapper > h1').should('have.text','Transport')
    })


    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(20) > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row-o-equal-height > :nth-child(3) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > a')
        .click();
         cy.url().should('eq','https://iubat.edu/sports/')
         cy.title().should('eq',"Sports")
        cy.get('.banner-wrapper > h1').should('have.text','Sports')
    })


    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(20) > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row-o-content-middle > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click();
         cy.url().should('eq','https://iubat.edu/facilities-for-students/')
         cy.title().should('eq',"Facilities for Students")
        cy.get('.banner-wrapper > h1').should('have.text','Facilities for Students')
    })



    

  })