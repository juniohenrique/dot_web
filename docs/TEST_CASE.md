# Casos de Teste

Este documento descreve os casos de teste para os fluxos de **login**, **carrinho** e **checkout** no site [Saucedemo](https://www.saucedemo.com/).

---

## Testes de Login

### CT-001: Login bem-sucedido
- **Pré-condições:** Usuário está na página de login.
- **Passos:**
  1. Inserir username válido (`standard_user`).
  2. Inserir password válido (`secret_sauce`).
  3. Clicar no botão "Login".
- **Resultado Esperado:** O usuário é redirecionado para a página de produtos.

### CT-002: Login falho com credenciais inválidas
- **Pré-condições:** Usuário está na página de login.
- **Passos:**
  1. Inserir username inválido (`invalid_user`).
  2. Inserir password inválido (`invalid_password`).
  3. Clicar no botão "Login".
- **Resultado Esperado:** A mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida.

### CT-003: Login falho com usuário bloqueado
- **Pré-condições:** Usuário está na página de login.
- **Passos:**
  1. Inserir username de usuário bloqueado (`locked_out_user`).
  2. Inserir password válido (`secret_sauce`).
  3. Clicar no botão "Login".
- **Resultado Esperado:** A mensagem de erro "Epic sadface: Sorry, this user has been locked out." é exibida.

### CT-004: Login falho com campo de usuário vazio
- **Pré-condições:** Usuário está na página de login.
- **Passos:**
  1. Deixar o campo de username vazio.
  2. Inserir password válido (`secret_sauce`).
  3. Clicar no botão "Login".
- **Resultado Esperado:** A mensagem de erro "Epic sadface: Username is required" é exibida.

### CT-005: Login falho com campo de senha vazio
- **Pré-condições:** Usuário está na página de login.
- **Passos:**
  1. Inserir username válido (`standard_user`).
  2. Deixar o campo de password vazio.
  3. Clicar no botão "Login".
- **Resultado Esperado:** A mensagem de erro "Epic sadface: Password is required" é exibida.

---

## Testes de Carrinho

### CT-006: Adicionar produto ao carrinho
- **Pré-condições:** Usuário está logado e na página de produtos.
- **Passos:**
  1. Clicar no botão "Add to cart" de um produto.
- **Resultado Esperado:** O produto é adicionado ao carrinho, e o ícone do carrinho mostra "1".

### CT-007: Remover produto do carrinho
- **Pré-condições:** Usuário tem um produto no carrinho.
- **Passos:**
  1. Clicar no ícone do carrinho.
  2. Clicar no botão "Remove" do produto.
- **Resultado Esperado:** O produto é removido do carrinho.

### CT-008: Verificar número de itens no ícone do carrinho
- **Pré-condições:** Usuário está logado e na página de produtos.
- **Passos:**
  1. Clicar no botão "Add to cart" de um produto.
  2. Clicar no botão "Add to cart" de outro produto.
- **Resultado Esperado:** O ícone do carrinho mostra "2".

---

## Testes de Checkout

### CT-009: Finalização da compra com sucesso
- **Pré-condições:** Usuário tem um produto no carrinho.
- **Passos:**
  1. Clicar no ícone do carrinho.
  2. Clicar no botão "Checkout".
  3. Preencher os campos de informações (First Name, Last Name, ZIP Code).
  4. Clicar no botão "Continue".
  5. Clicar no botão "Finish".
- **Resultado Esperado:** A mensagem "Thank you for your order!" é exibida.

### CT-010: Checkout falho com campo de nome faltando
- **Pré-condições:** Usuário tem um produto no carrinho.
- **Passos:**
  1. Clicar no ícone do carrinho.
  2. Clicar no botão "Checkout".
  3. Deixar o campo de First Name vazio.
  4. Preencher os campos de Last Name e ZIP Code.
  5. Clicar no botão "Continue".
- **Resultado Esperado:** A mensagem de erro "Error: First Name is required" é exibida.

### CT-011: Checkout falho com campo de CEP faltando
- **Pré-condições:** Usuário tem um produto no carrinho.
- **Passos:**
  1. Clicar no ícone do carrinho.
  2. Clicar no botão "Checkout".
  3. Preencher os campos de First Name e Last Name.
  4. Deixar o campo de ZIP Code vazio.
  5. Clicar no botão "Continue".
- **Resultado Esperado:** A mensagem de erro "Error: Postal Code is required" é exibida.