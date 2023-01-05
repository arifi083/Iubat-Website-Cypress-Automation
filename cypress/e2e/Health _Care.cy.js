describe('Research', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1542834408495 > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > a')
        .click();
        cy.url().should('eq','https://iubat.edu/student/sghis/')
        cy.title().should('eq','Group Health Insurance Schemes')
        cy.get('.banner-wrapper > h1').should('have.text','Group Health Insurance Schemes')
    })

    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1542834408495 > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > p > a')
        .click();
        cy.url().should('eq','https://iubat.edu/student-counseling/')
        cy.title().should('eq',"Student Counseling")
        cy.get('.banner-wrapper > h1').should('have.text','Student Counseling')
    })


    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.jump-link').click();
        cy.url().should('eq','https://iubat.edu/prof-dr-abdur-rab/')
        cy.title().should('eq',"Prof Dr Abdur Rab")
        cy.get('.banner-wrapper > h1').should('have.text','Prof Dr Abdur Rab')
    })



    

  })