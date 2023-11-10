describe('Home Page', () => {
    it('Should load the home page', () => {
      cy.visit('/'); // Visit the home page
      cy.contains('Welcome to My App'); // Replace with your actual home page content
    });
  });
  