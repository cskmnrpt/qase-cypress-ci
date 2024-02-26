import {qase} from 'cypress-qase-reporter/dist/mocha'

  it('Authorization', () => {
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
