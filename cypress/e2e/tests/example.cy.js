import {qase} from 'cypress-qase-reporter/dist/mocha'

qase([1], it('Authorization', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain', 'This is an incorrect header to test');
    }
  )
)

it.skip('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions');

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'unexpected@email.com');
    }
)

  it('Test that is auto-created by Cypress', () => {
    cy.visit('https://qase.io');
    cy.title().should('Modern TMS solution');
    }
)
