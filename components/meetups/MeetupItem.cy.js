import React from 'react'
import MeetupItem from './MeetupItem'

describe('<MeetupItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MeetupItem />)
  })
})