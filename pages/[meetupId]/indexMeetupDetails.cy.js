import React from 'react'
import MeetupDetails from './index'

describe('<MeetupDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MeetupDetails />)
  })
})