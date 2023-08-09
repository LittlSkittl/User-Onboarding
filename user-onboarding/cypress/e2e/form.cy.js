describe("Tests for general form completion", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('can type an email into the email input field', () => {
    cy.get('input[name=email]')
      .type('isaac@isaac.com')
      .should('have.value', 'isaac@isaac.com')
  })

  it('can type an lastName into the lastName input field', () => {
    cy.get('input[name=lastName]')
      .type('malin')
      .should('have.value', 'malin')
  })

  

  it('can type an password into the password input field', () => {
    cy.get('input[name=password]')
      .type('asdfghasbv')
      .should('have.value', 'asdfghasbv')
  })

  it('can type an firstName into the firstName input field', () => {
    cy.get('input[name=firstName]')
      .type('isaac')
      .should('have.value', 'isaac')
  })

  it('can check the tos checkbox', () => {
    cy.get('input[name=tos]')
      .check()
  })

  it('can submit form data', () => {
    cy.get('input[type=submit]')
      .click()
  })

  it('Check if inputs are left empty', () => {
    cy.get('input')
      .should('not.have.value')
  })



});
