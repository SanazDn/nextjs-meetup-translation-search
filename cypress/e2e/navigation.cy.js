it('should navigate to the correct page in the selected language', () => {
    cy.visit('http://localhost:3000');
    cy.get('select').select('fr'); // Select on the French language option
    
    cy.contains('Ajouter un nouveau meetup').click(); // Navigate to the meetups page
    cy.url().should('include', 'http://localhost:3000/new-meetup'); // Verify the URL indicates the new meetup page in French
  });
  