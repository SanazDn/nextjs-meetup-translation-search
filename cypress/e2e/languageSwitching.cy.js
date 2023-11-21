// - Test that the default language is set correctly.
// - Test that changing the language using the language switcher updates the content on the page.
// - Verify that the language selection persists across different pages.

it('should switch language to French', () => {
    cy.visit('http://localhost:3000');
    cy.get('select').select('fr'); // Select on the French language option
    cy.contains('Rencontres React'); // Verify that content is updated to French
  });
  
  it('should switch language to English', () => {
    cy.visit('http://localhost:3000');
    cy.get('select').select('en'); // Click on the English language option
    cy.contains('React Meetups'); // Verify that content is updated to English
  });
  



