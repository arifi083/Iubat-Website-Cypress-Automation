describe('IUBAT WEBSITE', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.thim-logo > img').click()
        cy.url().should('eq','https://iubat.edu/')
        cy.title().should('eq','IUBAT—International University of Business Agriculture and Technology')
        
    })

    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11578 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/student/')
        cy.title().should('eq','Gateway for Students')
        cy.get('.banner-wrapper > h1').should('have.text','Gateway for Students')
        
    })

    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11832 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/faculty/')
        cy.title().should('eq','Faculty')
        cy.get('.banner-wrapper > h1').should('have.text','Faculty')
        
    })

    it('Test Case 4', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11376 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/administration/')
        cy.title().should('eq','Administration')
        cy.get('.banner-wrapper > h1').should('have.text','Administration')
        
    })

    it('Test Case 5', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11579 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/alumni/')
        cy.title().should('eq','Alumni')
        cy.get('.banner-wrapper > h1').should('have.text','Alumni')
        
    })


  


   


   

   

  })