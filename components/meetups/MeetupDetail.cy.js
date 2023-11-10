import React from 'react'
import MeetupDetail from './MeetupDetail'

describe('<MeetupDetail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MeetupDetail />)
  })
})