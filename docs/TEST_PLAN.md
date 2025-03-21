# Plano de Testes

Este documento descreve a estratégia, escopo, ferramentas e cronograma dos testes automatizados para o site [Saucedemo](https://www.saucedemo.com/).

---

## Objetivo

O objetivo deste plano de testes é garantir a qualidade do site Saucedemo por meio da automação de testes, validando os principais fluxos de usuário, como login, adição de produtos ao carrinho e finalização da compra.

---

## Escopo

### Funcionalidades Testadas
1. **Login:**
   - Validação de login com credenciais válidas.
   - Validação de login com credenciais inválidas.

2. **Carrinho:**
   - Adição de produtos ao carrinho.
   - Remoção de produtos do carrinho.

3. **Checkout:**
   - Preenchimento de informações de checkout.
   - Finalização da compra.

### Funcionalidades Não Testadas
- Fluxos de recuperação de senha.
- Integração com gateways de pagamento externos.

---

## Ferramentas

- **Cypress:** Framework de automação de testes.
- **GitHub Actions:** Para integração contínua e execução dos testes.
- **Mochawesome:** Para geração de relatórios de testes.
- **ESLint:** Para análise estática do código.

---

## Ambiente de Teste

### Navegadores Suportados
- Google Chrome (última versão estável).
- Mozilla Firefox (última versão estável).

### Sistemas Operacionais
- Ubuntu (CI/CD).
- Windows/Linux/Mac (local).

---

## Estratégia de Teste

### Tipos de Teste
1. **Testes Funcionais:**
   - Validação dos fluxos principais do site.
2. **Testes de Regressão:**
   - Verificação de que novas alterações não quebraram funcionalidades existentes.

### Dados de Teste
- Credenciais válidas:
  - Username: `standard_user`
  - Password: `secret_sauce`
- Credenciais inválidas:
  - Username: `invalid_user`
  - Password: `invalid_password`

---

## Cronograma

| Atividade                  | Duração   | Data de Início | Data de Término |
|----------------------------|-----------|----------------|-----------------|
| Planejamento dos Testes     | 1 dia     | 01/03/2025     | 01/03/2025      |
| Desenvolvimento dos Testes  | 3 dias    | 02/03/2025     | 04/03/2025      |
| Execução dos Testes         | 1 dia     | 05/03/2025     | 05/03/2025      |
| Geração de Relatórios       | 0.5 dia   | 06/03/2025     | 06/03/2025      |
| Revisão e Ajustes           | 0.5 dia   | 06/03/2025     | 06/03/2025      |

---

## Riscos

1. **Alterações no Site:**
   - Mudanças no layout ou funcionalidades podem quebrar os testes.
   - **Mitigação:** Manter os testes atualizados e usar seletores robustos.

2. **Dependências Externas:**
   - Problemas de rede ou servidores podem afetar a execução dos testes.
   - **Mitigação:** Executar testes em ambientes estáveis e monitorar a infraestrutura.

3. **Falta de Cobertura de Testes:**
   - Alguns cenários podem não ser cobertos pelos testes.
   - **Mitigação:** Revisar periodicamente os casos de teste e adicionar novos conforme necessário.

---

## Critérios de Aceitação

- Todos os testes devem passar sem erros.
- Relatórios de testes devem ser gerados e revisados.
- Problemas identificados devem ser documentados e corrigidos.

---

## Responsáveis

- **Desenvolvimento dos Testes:** Junio Henrique
- **Execução dos Testes:** Junio Henrique
- **Revisão dos Relatórios:** Junio Henrique

---

## Aprovação

| Nome          | Cargo            | Data       | Assinatura |
|---------------|------------------|------------|------------|
| Junio Henrique| QA Engineer      | 01/03/2025 |            |