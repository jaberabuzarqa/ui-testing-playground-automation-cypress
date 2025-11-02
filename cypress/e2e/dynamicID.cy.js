/// <reference types="cypress" />
describe("Dynamic ID Test", () => {
  it("clicks on button with dynamic ID", () => {
    cy.visit("https://uitestingplayground.com/dynamicid");
    cy.contains('button', 'Button with Dynamic ID').click();

  });
});