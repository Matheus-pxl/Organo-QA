//usando banco de dados para preencher o formulario

describe('pagina de cadastro', () => {
    //const com caminho do banco de dados e loop para cadastrar usuario
    const usuarios = require('../fixtures/usuarios.json')
    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    })
    usuarios.forEach(usuario => {
        it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
            cy.get('[data-test="register"]').click();
            cy.get('input[data-test="email"]').type(usuario.email);
            cy.get('input[data-test="fullName"]').type(usuario.fullName);
            cy.get('input[data-test="registerUserName"]').type(usuario.userName);
            cy.get('input[data-test="registerPassword"]').type(usuario.password);
            cy.get('[data-test="btnRegister"]').click();
        });
    })
});