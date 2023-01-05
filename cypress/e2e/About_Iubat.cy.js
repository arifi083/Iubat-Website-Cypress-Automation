describe('About Iubat', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(1) > .counter-box > .content-box-percentage > .counter-content-container > .view-more')
        .click();
        cy.url().should('eq','https://iubat.edu/faculty/')
        cy.title().should('eq','Faculty')
        cy.get('.banner-wrapper > h1').should('have.text','Faculty')
    })


    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(2) > .counter-box > .content-box-percentage > .counter-content-container > .view-more')
        .click();
         cy.url().should('eq','https://iubat.edu/student/')
         cy.title().should('eq',"Gateway for Students")
        cy.get('.banner-wrapper > h1').should('have.text','Gateway for Students')
    })


    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(9) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click();
        cy.url().should('eq','https://iubat.edu/about/')
        cy.title().should('eq',"About")
         cy.get('.banner-wrapper > h1').should('have.text','About')
    })



    

  })