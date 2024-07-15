/// <reference types="cypress"/>

describe('Test Contact Us Form via Webdriver university', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type("Jatin")
    cy.get('[name="last_name"]').type("Gambhir")
    cy.get('[name="email"]').type("jatingambhir22@gmail.com")
    cy.get('textarea.feedback-input').type("Learning Cypress is fun and easy")
    cy.get('[type="submit"]').click()
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are mandatory', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type("Jatin")
    cy.get('[name="last_name"]').type("Gambhir")
    cy.get('textarea.feedback-input').type("Learning Cypress is fun and easy")
    cy.get('[type="submit"]').click()
  })
})