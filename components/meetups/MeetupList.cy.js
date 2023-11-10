import React from 'react'
import MeetupList from './MeetupList'

describe('<MeetupList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MeetupList />)
  })
})