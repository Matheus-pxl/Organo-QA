describe('pagina de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
    })

    it('preencher os campos do login corretamente para realizar login', () => {
        cy.login('catarinap', "catarina123")


    })
})