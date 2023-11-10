describe("user journeys", () => {
  it("A user can fill out the application and then go to home page with having a new meet up", () => {
    cy.visit("http://localhost:3000//new-meetup");

    // Fill out the application form
    cy.get('[data-test="title"]').type("John Doe");
    cy.get('[data-test="image"]').type(
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    );
    cy.get('[data-test="address"]').type("Richmond Hill");
    cy.get('[data-test="description"]').type("Richmond Hill meeting");

    cy.get('[data-test="add"]').click();
    cy.get("h3").contains("John Doe");
  });
});
