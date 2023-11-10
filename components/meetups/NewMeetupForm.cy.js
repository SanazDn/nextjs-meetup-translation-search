import React from 'react'
import NewMeetupForm from './NewMeetupForm'

describe('<NewMeetupForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewMeetupForm />)
  })
})