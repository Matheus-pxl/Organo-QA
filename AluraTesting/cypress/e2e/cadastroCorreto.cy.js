import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe('pagina de cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });
  it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submitCadastro();

  })
})