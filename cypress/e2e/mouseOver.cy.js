/// <reference types="cypress" />
describe("Mouse Over Test", () => {
  it("clicks on link 2 times and checks number of clicks on label", () => {
    cy.visit("http://uitestingplayground.com/mouseover");
    cy.get("[title='Click me']").contains("Click me").click();
    cy.get("[title='Link Button']").contains("Link Button").click();
    cy.get("[title='Click me']").contains("Click me").click();
    cy.get("#clickCount").should("contain", "2");
    cy.get("#clickButtonCount").should("contain", "1");
  });
});