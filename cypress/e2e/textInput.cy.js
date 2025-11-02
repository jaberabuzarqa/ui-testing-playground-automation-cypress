/// <reference types="cypress" />
describe('Text Input Test ', () => {
    it('changes the button name ', () => {
    cy.visit("http://uitestingplayground.com/textinput");
    cy.get('#newButtonName').type('Eng Jaber');
    cy.get("#updatingButton").click().should("contain", "Eng Jaber");
    });
    
});