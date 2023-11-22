const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/')
        cy.get('[data-test="register"]').click();
    }
    preencherFormulario() {
        cy.get('input[data-test="email"]').type('kkkkkk@kkkkk')
        cy.get('input[data-test="fullName"]').type('Llll LLLo')
        cy.get('input[data-test="registerUserName"]').type('lllllll')
        cy.get('input[data-test="registerPassword"]').type('lllllllllll')
    }
    submitCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();