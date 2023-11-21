it('should display translated content on the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('select').select('fr'); // Select on the French language option

    cy.contains('Tous les meetups'); // Verify that French content is displayed
    cy.contains('All Meetups').should('not.exist'); // Ensure English content is not visible
   });
   
   
   it('should display translated content on another page', () => {
    cy.visit('http://localhost:3000');
    cy.get('select').select('fr'); // Select on the French language option

    cy.get('[data-test="newmeetup"]').click();
    cy.contains('Tous les meetups'); // Verify that French content is displayed
    cy.contains('All Meetups').should('not.exist'); // Ensure English content is not visible
   });
   