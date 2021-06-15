describe('Dashboard', () => {

    it('Should show application title', () => {
        cy.load()
        cy.get('header').should('be.visible')
          .get('h1').should('be.visible')
    })
    

    it('Should show Url Card', () => {
        cy.load()
          .get('.url').should('be.visible')
          .get('.url > h3').contains('CYPRESS TESTING')
          .get('.url > a').contains('http://localhost:3001/useshorturl/1')
          .get('.url > p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })

    it('Should show form', () => {
        cy.load()
          .get('form').should('be.visible')
          .get('.titleInput').should('be.visible').should('contain', '').should('have.value', '')
          .get('.urlInput').should('be.visible').should('contain', '').should('have.value', '')
          .get('form > button').should('be.visible').should('contain', 'Shorten Please!')
    })

    it('Should show user inputs', () => {
        cy.load()
          .get('.titleInput').should('be.visible').type('Testing title input').should('have.value', 'Testing title input')
          .get('.urlInput').should('be.visible').type('Testing url input').should('have.value', 'Testing url input')
          .get('button').click()
          .get('.titleInput').should('have.value', '')
          .get('.urlInput').should('have.value', '')
    })

    it('Should update dom on submit', () => {
        // cy.load()
        cy.visit("http://localhost:3000")
        .get('.titleInput').should('be.visible').type('Testing title input').should('have.value', 'Testing title input')
          .get('.urlInput').should('be.visible').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
          .should('have.value', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
          .get('button').click()
          .get('.titleInput').should('have.value', '')
          .get('.urlInput').should('have.value', '')
          .get('.url').eq(1).should('be.visible')
          .get('h3').eq(1).should('be.visible').should('contain', 'Testing title input')
          .get('a').eq(1).should('be.visible').should('contain', 'http://localhost:3001/useshorturl/2')
          .get('p').eq(1).should('be.visible').should('contain', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })
    
});

// cy.request('POST', 'http://localhost:3001/api/v1/urls', {
//     id: 1,
//     long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
//     short_url: "http://localhost:3001/useshorturl/1",
//     title: "Testing title input"
//     }).then(
//   (response) => {
//     // response.body is automatically serialized into JSON
//     expect(response.body).to.have.property('title', 'Testing title input') // true
//   }
// )