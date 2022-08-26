/// <reference types="cypress" />


describe("learning", () =>{

    const timeWait = 500;

   it('click on the date button', ()=>{

    cy.getCookie('YII_CSRF_TOKEN')
    cy.visit('https://legitblog.pythonanywhere.com/')
    .then(async (c) => {
        cy.log(c.value)
        return c.value
    })

    cy.get(':nth-child(2) > :nth-child(1) > .nav-link').click()
    cy.wait(timeWait)
    cy.get(':nth-child(1) > .form-floating > .form-control').type('admin')
    cy.get(':nth-child(2) > .form-floating > .form-control').type('password')
    cy.wait(timeWait)
    cy.get('.btn').click()
    cy.wait(timeWait)
    cy.get('.me-auto > :nth-child(2) > .nav-link').click()
    cy.wait(timeWait)
    cy.get(':nth-child(3) > .form-floating > .form-control').type('test-tile-from-cypress')
    cy.get(':nth-child(4) > .form-floating > .form-control').type('title-tag-cypress-test')
    cy.get(':nth-child(6) > .form-floating > .form-control').type('some long text from cypress-test')
    cy.wait(timeWait)
    cy.get('.container > .btn').click()
    cy.wait(timeWait)
    cy.get(':nth-child(1) > .row > .text_box > .text > .mt-4').contains('test-tile-from-cypress')
    cy.get(':nth-child(1) > .row > .text_box > .text > .btn').click()
    cy.wait(timeWait)
    cy.get('.btn-warning').click()
    cy.wait(timeWait)
    cy.get(':nth-child(3) > .form-floating > .form-control').clear()
    cy.get(':nth-child(3) > .form-floating > .form-control').type('test-tile-from-cypress-update')
    cy.get(':nth-child(4) > .form-floating > .form-control').clear()
    cy.get(':nth-child(4) > .form-floating > .form-control').type('title-tag-cypress-test-update')
    cy.get(':nth-child(6) > .form-control').clear()
    cy.get(':nth-child(6) > .form-control').type('some long text from cypress-test-update')
    cy.wait(timeWait)
    cy.get('.container > .btn').click()
    cy.wait(timeWait)
    cy.get('.mt-4').contains('test-tile-from-cypress-update')
    cy.get(':nth-child(1) > .row > .text_box > .text > .btn').click()
    cy.get('form > .btn').click()
    cy.wait(timeWait)
    cy.get('form > .btn').click()
    cy.get('.btn-danger.btn-sm').click()
    cy.get('.modal-footer > .btn-secondary').click()
    cy.wait(timeWait)
    cy.get('#exampleModalLabel').contains('Delete test-tile-from-cypress-update')
    cy.get('.modal-footer > .btn-secondary').click()
    cy.wait(timeWait)
    cy.get('.btn-danger.btn-sm').click()
    cy.get('.modal-footer > .btn-danger').click()
    cy.get('.btn').click()
    cy.get('[href="/members/logout/"]').click()
   })
})