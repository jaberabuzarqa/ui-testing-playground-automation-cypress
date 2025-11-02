/// <reference types="cypress" />
 describe('Verify Text', () => {
     it('finds an element with Welcome<< text.', () => {
         cy.visit('http://uitestingplayground.com/verifytext');
          cy.get(".badge-secondary").contains("Welcome");
          cy.wait(2000);
     });
 });