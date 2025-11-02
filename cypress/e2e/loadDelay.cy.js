/// <reference types="cypress" />
describe("Load Delay Test", () => {
  it("clicks on button after waiting for load", () => {
    cy.visit("http://uitestingplayground.com");
    cy.contains('a', 'Load Delay').click();
    cy.get(".btn").click();
  });
});