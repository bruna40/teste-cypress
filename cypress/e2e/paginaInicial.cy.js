describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar o h1 com o texto correto', () => {
    
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })

  it('Testar se o botão de abrir conta está na tela', () =>{
    cy.getByData('botao-cadastro').should('exist').and('have.text', 'Abrir minha conta')
  })

  it('Testar se o botão de já tenho conta está na tela', () =>{
    cy.getByData('botao-login').should('exist').and('have.text', 'Já tenho conta')
  })

  it('Testar se o rodapé está na tela', () =>{
    cy.getByData('rodape').should('exist')
  })

  it('Testar se a logo do Btyebank está em tela', () => {
    cy.getByData('logo').should('exist')
  })

})
