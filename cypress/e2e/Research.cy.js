describe('Research', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_column-gap-10 > :nth-child(1) > .vc_column-inner > .wpb_wrapper > .vc_grid-container-wrapper > .vc_grid-container > .vc_grid > .vc_pageable-slide-wrapper > .vc_grid-item > .vc_grid-item-mini > .vc_gitem-zone-c > .vc_gitem-zone-mini > .vc_gitem_row > .vc_col-sm-12 > .vc_custom_heading > h4')
        .click();
        cy.url().should('eq','https://iubat.edu/tomaalo-production-by-grafting-process-with-tomato-potato/')
        cy.title().should('eq','Tomaalo production by grafting process with Tomato & Potato')
         cy.get('.entry-title').should('have.text','Tomaalo production by grafting process with Tomato & Potato')
    })

    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('.vc_column-gap-10 > :nth-child(3) > .vc_column-inner > .wpb_wrapper > .vc_grid-container-wrapper > .vc_grid-container > .vc_grid > .vc_pageable-slide-wrapper > .vc_grid-item > .vc_grid-item-mini > .vc_gitem-zone-c > .vc_gitem-zone-mini > .vc_gitem_row > .vc_col-sm-12 > .vc_custom_heading > h4')
        .click();
        cy.url().should('eq','https://iubat.edu/brain-controlled-bionic-leg/')
        cy.title().should('eq',"We are working on Brain-Controlled Bionic Leg")
        cy.get('.entry-title').should('have.text','We are working on Brain-Controlled Bionic Leg')
    })


    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(8) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click();
        cy.url().should('eq','https://iubat.edu/research/')
        cy.title().should('eq',"Research")
        cy.get('.banner-wrapper > h1').should('have.text','Research')
    })



    

  })