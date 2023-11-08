import App from './App.vue'

describe('Conversion tests', () => {
  it('X to be 10', () => {
    cy.mount(App);
    cy.wait(150)
    cy.get('#roman-number').type('X')
    cy.get('#arabic-number').should('have.value', '10')
  })

  it('15 to be XV', () => {
    cy.mount(App);
    cy.wait(150)
    cy.get('#arabic-number').type('15')
    cy.get('#roman-number').should('have.value', 'XV')
  })
})