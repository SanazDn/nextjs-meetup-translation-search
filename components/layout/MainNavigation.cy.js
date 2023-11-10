import React from 'react'
import MainNavigation from './MainNavigation'

describe('<MainNavigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainNavigation />)
  })
})