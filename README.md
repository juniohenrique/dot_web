# Saucedemo Cypress Tests

Este projeto contém testes automatizados para o site [Saucedemo](https://www.saucedemo.com/) usando Cypress. O objetivo é validar os principais fluxos do site, como login, adição de produtos ao carrinho e finalização da compra.

## Documentação

A documentação completa do projeto está disponível nos seguintes arquivos:

- [**Plano de Testes**](docs/TEST_PLAN.md): Descreve a estratégia, escopo, ferramentas e cronograma dos testes.
- [**Casos de Teste**](docs/TEST_CASES.md): Detalha todos os casos de teste implementados.
- [**Configuração do Projeto**](docs/SETUP.md): Explica como configurar e executar o projeto localmente.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar os testes.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior).
- [NPM](https://www.npmjs.com/) (v8 ou superior).
- [Git](https://git-scm.com/) (opcional, para clonar o repositório).

### Instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/saucedemo-cypress-tests.git
   cd saucedemo-cypress-tests

2. Instale as dependências:
   npm install

### Execução dos Testes

- Para executar os testes no modo interativo (com a interface do Cypress):
  npx cypress open

- Para executar os testes no modo headless (sem interface):
  npx cypress run

## 🛠 Pipeline de CI/CD

O projeto está configurado com um pipeline de CI/CD usando **GitHub Actions**. Os testes são executados automaticamente em cada push ou pull request para a branch `main`.

### Detalhes do Pipeline

- **Sistema Operacional:** Ubuntu Latest.
- **Navegador:** Chrome.
- **Relatórios:** Os resultados dos testes são gerados em formato HTML usando [Mochawesome](https://github.com/adamgruber/mochawesome).
- **Notificações:** Em caso de falha, uma notificação é enviada para o Slack.

Para mais detalhes, consulte o arquivo [cypress-tests.yml](.github/workflows/cypress-tests.yml).

## Casos de Teste Implementados

Os seguintes fluxos foram automatizados:

1. **Login:**
   - Valida o login com credenciais válidas.

2. **Carrinho:**
   - Valida a adição de produtos ao carrinho.

3. **Checkout:**
   - Valida a finalização da compra com sucesso.

Para mais detalhes, consulte [TEST_CASES.md](docs/TEST_CASES.md).

## Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Crie uma branch para sua feature:
   git checkout -b feature/nome-da-feature

2. Faça commit das suas alterações:
   git add .
   git commit -m "Adiciona nova feature"

3. Envie para o repositório:
   git push origin feature/nome-da-feature

4. Abra um **Pull Request** no GitHub.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Nome:** Junio Henrique
- **GitHub:** [juniohenrique](https://github.com/juniohenrique)