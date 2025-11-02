/// <reference types="cypress" />
describe("Sample App Test", () => {
  it("logs in and checks that status contains proper text", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");
    cy.get("[name=UserName]").type("jojo");
    cy.wait(1000);
    cy.get("[name=Password]").type("pwd");
    cy.get("#login").click();
    cy.get("#loginstatus").should("contain", "Welcome, jojo!");
  });
});