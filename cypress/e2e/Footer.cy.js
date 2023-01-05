
describe('Footer', () => {

    it('Test Case 1', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('h5.vc_custom_heading > a').click();
        cy.url().should('eq','https://iubat.edu/departments/')
        cy.title().should('eq','Departments')
        cy.get('.banner-wrapper > h1').should('have.text','Departments')
    })


    it('Test Case 2', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get('#thim_layout_builder-7 > :nth-child(4) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > :nth-child(1) > a')
        .click();
        cy.url().should('eq','https://iubat.edu/online-admission/')
        cy.title().should('eq',"Online Admission")
        cy.get('.banner-wrapper > h1').should('have.text','Online Admission')
    })


    it('Test Case 3', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(3) > .vc_column-inner > .wpb_wrapper > :nth-child(1) > a').click();
        cy.url().should('eq','https://iubat.edu/cafeteria/')
        cy.title().should('eq',"Cafeteria")
        cy.get('.banner-wrapper > h1').should('have.text','Cafeteria')
    })


    it('Test Case 4', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(4) > .vc_column-inner > .wpb_wrapper > :nth-child(1) > a').click();
        cy.url().should('eq','https://iubat.edu/vice-chancellor-office/')
        cy.title().should('eq',"Vice-Chancellor Office")
        cy.get('.banner-wrapper > h1').should('have.text','Vice-Chancellor Office')
    })


    it('Test Case 5', () => {
      
        cy.visit("https://iubat.edu/")
        cy.get(':nth-child(4) > .vc_column-inner > .wpb_wrapper > :nth-child(3) > a').click();
        cy.url().should('eq','https://iubat.edu/visiting-faculty/')
        cy.title().should('eq',"Visiting Faculty")
        cy.get('.banner-wrapper > h1').should('have.text','Visiting Faculty')
    })



    

  })