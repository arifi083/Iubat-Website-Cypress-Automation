describe('IUBAT WEBSITE', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.thim-logo > img').click()
        cy.url().should('eq','https://iubat.edu/')
        cy.title().should('eq','IUBAT—International University of Business Agriculture and Technology')
        
    })

    it.skip('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11578 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/student/')
        cy.title().should('eq','Gateway for Students')
        cy.get('.banner-wrapper > h1').should('have.text','Gateway for Students')
        
    })

    it.skip('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11832 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/faculty/')
        cy.title().should('eq','Faculty')
        cy.get('.banner-wrapper > h1').should('have.text','Faculty')
        
    })

    it.skip('Test Case 4', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11376 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/administration/')
        cy.title().should('eq','Administration')
        cy.get('.banner-wrapper > h1').should('have.text','Administration')
        
    })

    it.skip('Test Case 5', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#menu-item-11579 > .tc-menu-inner').click()
        cy.url().should('eq','https://iubat.edu/alumni/')
        cy.title().should('eq','Alumni')
        cy.get('.banner-wrapper > h1').should('have.text','Alumni')
        
    })


    it.skip('Test Case 6', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1644239627949 > :nth-child(2) > :nth-child(1) > :nth-child(1) > .vc_row > :nth-child(1) > .vc_column-inner > div.wpb_wrapper > .vc_custom_heading > a').then( (e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })
        cy.url().should('eq','https://iubat.edu/national-debate-competition-held-at-iubat/')
        cy.title().should('eq','National Debate Competition held at IUBAT')
        cy.get('.banner-wrapper > h2').should('have.text','News')
        cy.wait(5000)
        cy.go('back')
    })


    it.skip('Test Case 7', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1644239635569 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .vc_row > :nth-child(2) > .vc_column-inner > div.wpb_wrapper > .vc_custom_heading > a').then( (e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })
        cy.url().should('eq','https://iubat.edu/interactive-session-held-at-iubat-with-dr-muhammad-zafar-iqbal/')
        cy.title().should('eq','Interactive session with Dr Muhammad Zafar Iqbal')
        cy.get('.banner-wrapper > h2').should('have.text','News')
        cy.wait(5000)
        cy.go('back')
    })


    it('Test Case 8', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_section > :nth-child(4) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general').click()
        cy.url().should('eq','https://iubat.edu/news/')
        cy.title().should('eq','News')
        cy.get('.banner-wrapper > h1').should('have.text','News')
        
    })

   

  })