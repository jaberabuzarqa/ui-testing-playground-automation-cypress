/// <reference types="cypress" /> 
describe("AJAX Data Test", () => {
  it("Presses the button and waits AJAX request to process, then clicks on text", () => {
    cy.visit("http://uitestingplayground.com/ajax");
    cy.get("#ajaxButton").click().wait(16000);
    cy.get(".bg-success").contains("Data loaded with AJAX get request.").click();
  });
});