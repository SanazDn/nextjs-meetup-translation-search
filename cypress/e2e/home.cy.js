describe('home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })


  it('The home page contain correct words', () => {
    cy.visit('http://localhost:3000')

    cy.get("[data-test='your-data-value']").contains("React Meetups")
    cy.get("header").should("exist").contains("All Meetups")
  })

  it('The features on home page are correct', () => {
    cy.visit('http://localhost:3000')
    cy.get("li").eq(3)
  })

  context('clickong on specific link and go to the correct page', () => {
    it.only('finding specific link', () => {
      cy.get("[data-test='Show Details']").find("button").eq(2).click()
      //cy.location("pathname").should("eq", "/testing-your-first-application")

      cy.location().should((location) => {
        // Extract and assert on the dynamic ID from the pathname
        const pathArray = location.pathname.split('/');
        const dynamicId = pathArray[pathArray.length - 1];
        expect(dynamicId).to.match(/^[a-zA-Z0-9]+/); // Assuming the ID is a number and alphabet
      });
    })
  
  })

})