describe('Dashboard', () => {

    it('Should show application title', () => {
        cy.load()
        cy.get('header').should('be.visible')
          .get('h1').should('be.visible')
    })
    
});