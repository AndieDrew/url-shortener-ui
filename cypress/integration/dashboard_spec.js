describe('Dashboard', () => {

    it('Should show application title', () => {
        cy.load()
        cy.get('header').should('be.visible')
          .get('h1').should('be.visible')
    })
    

    it('Should show Url Card', () => {
        cy.load()
        cy.get('header').should('be.visible')
          .get('h1').should('be.visible')
          .get('.url').should('be.visible')
          .get('.url > h3').contains('CYPRESS TESTING')
          .get('.url > a').contains('http://localhost:3001/useshorturl/1')
          .get('.url > p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })
    
});