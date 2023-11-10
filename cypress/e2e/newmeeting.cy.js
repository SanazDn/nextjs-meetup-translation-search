describe("Form validation", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/new-meetup')
  })

  it("Allows user to submit a form", () => {
    cy.visit("http://localhost:3000/new-meetup");
  });

  it("field should not be empty", () => {
    
    // Continue with other actions or assertions without explicitly checking for the error
    // For example, submitting the form or navigating to another page
    cy.get('[data-test="add"]').click();
    // Assert on the existence and content of the error message
    cy.contains('Please fill out this field').should('exist');
    //cy.url().should("include", "/");
    
  });
});
