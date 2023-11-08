import cy from "cypress";

describe('Conversion test', () => {
  it('X to be 10', () => {
    cy.visit('/')
    cy.get('#roman-number').type('X')
    cy.get('#arabic-number').should('have.value', '10')
  })
})