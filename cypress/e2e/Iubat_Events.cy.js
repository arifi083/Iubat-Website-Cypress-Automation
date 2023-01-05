describe('Iubat Events', () => {

    
    it.skip('Test Case 1', () => {
        
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1569750406404 > :nth-child(1) > .vc_column-inner > .wpb_wrapper > .vc_grid-container-wrapper > .vc_grid-container > .vc_grid > .vc_pageable-slide-wrapper > .vc_grid-item > .vc_grid-item-mini > .vc_gitem-zone-c > .vc_gitem-zone-mini > .vc_gitem_row > .vc_col-sm-12 > .vc_gitem-post-data-source-post_title > h4 > .vc_gitem-link')
        .click()
        cy.url().should('eq','https://iubat.edu/events/itech-expo-iubat-2022/')
        cy.title().should('eq','iTech Expo- IUBAT 2022')
        cy.get('.banner-wrapper > h2').should('have.text','Events')
        
    })


    it.skip('Test Case 2', () => {
        
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1569750406404 > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_grid-container-wrapper > .vc_grid-container > .vc_grid > .vc_pageable-slide-wrapper > .vc_grid-item > .vc_grid-item-mini > .vc_gitem-zone-c > .vc_gitem-zone-mini > .vc_gitem_row > .vc_col-sm-12 > .vc_gitem-post-data-source-post_title > h4 > .vc_gitem-link')
        .click()
        cy.url().should('eq','https://iubat.edu/events/6th-convocation-of-iubat/')
        cy.title().should('eq','6th Convocation of IUBAT')
        cy.get('.banner-wrapper > h2').should('have.text','Events')
        
    })

    it('Test Case 3', () => {
        
        cy.visit("https://iubat.edu/")
        cy.get('.vc_custom_1542838038130 > .wpb_column.vc_col-sm-12 > :nth-child(1) > :nth-child(1) > :nth-child(3) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .vc_btn3-container > .vc_general')
        .click()
        cy.url().should('eq','https://iubat.edu/events/')
        cy.title().should('eq','Events')
        cy.get('.banner-wrapper > h1').should('have.text','Events')
        
    })


    


  })