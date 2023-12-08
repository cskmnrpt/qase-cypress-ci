import {qase} from 'cypress-qase-reporter/dist/mocha'

qase([718,719], it('tests that exist in your project repo', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain', 'This is an incorrect header to test');
    }
  )
)

  it('Test that is auto-created by Cypress', () => {
    cy.visit('https://qase.io');
    cy.title().should('Modern TMS solution');
    }
)
