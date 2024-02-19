import React from 'react'
import Layout from './Layout'

// test 6
describe('<Layout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Layout />)
  })
})