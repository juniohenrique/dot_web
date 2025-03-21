# Configuração do Projeto

Este guia explica como configurar e executar o projeto de testes automatizados para o site [Saucedemo](https://www.saucedemo.com/) usando Cypress.

---

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (v16 ou superior).
- [NPM](https://www.npmjs.com/) (v8 ou superior).
- [Git](https://git-scm.com/) (opcional, para clonar o repositório).

---

## Instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/saucedemo-cypress-tests.git
   cd saucedemo-cypress-tests

2. Instale as dependências:
   npm install

---

## Execução dos Testes

### Modo Interativo (com interface gráfica)
Para executar os testes no modo interativo, use o seguinte comando:
npx cypress open

### Modo Headless (sem interface gráfica)
Para executar os testes em modo headless, use o seguinte comando:
npx cypress run

---

## Estrutura do Projeto

- **`cypress/e2e/`:** Contém os arquivos de teste.
- **`cypress/fixtures/`:** Armazena dados estáticos, como arquivos JSON.
- **`cypress/support/`:** Contém comandos personalizados e configurações globais.
- **`cypress/screenshots/`:** Armazena capturas de tela em caso de falhas.
- **`cypress/videos/`:** Armazena gravações das execuções dos testes.
- **`docs/`:** Contém a documentação do projeto.
- **`.github/workflows/`:** Contém o arquivo de configuração do pipeline de CI/CD.

---

## Pipeline de CI/CD

O projeto está configurado com um pipeline de CI/CD usando **GitHub Actions**. Os testes são executados automaticamente em cada push ou pull request para a branch `main`.

### Detalhes do Pipeline

- **Sistema Operacional:** Ubuntu Latest.
- **Navegador:** Chrome.
- **Relatórios:** Os resultados dos testes são gerados em formato HTML usando [Mochawesome](https://github.com/adamgruber/mochawesome).
- **Notificações:** Em caso de falha, uma notificação é enviada para o Slack (se configurado).

Para mais detalhes, consulte o arquivo [cypress-tests.yml](.github/workflows/cypress-tests.yml).

---

## Solução de Problemas

### Problemas com Dependências
- Se houver problemas ao instalar as dependências, tente limpar o cache do npm e reinstalar:
  npm cache clean --force
  npm install

### Problemas com o Cypress
- Se o Cypress não abrir ou apresentar erros, tente reinstalar o Cypress:
  npx cypress install

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Crie uma branch para sua feature:
   git checkout -b feature/nome-da-feature

2. Faça commit das suas alterações:
   git add .
   git commit -m "Adiciona nova feature"

3. Envie para o repositório:
   git push origin feature/nome-da-feature

4. Abra um **Pull Request** no GitHub.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---