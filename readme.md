# Cypress Heroes - Test Automation Suite

![Cypress](https://img.shields.io/badge/Cypress-12.0.0-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Test Automation](https://img.shields.io/badge/Test%20Automation-E2E%20%2F%20UI-orange)

> Uma suite completa de testes automatizados para a aplicação de demonstração **Cypress Heroes**, desenvolvida como parte da mentoria LumeStack Guardião da Qualidade. Este projeto demonstra práticas avançadas de automação de testes E2E com Cypress.

## 📋 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado em sua máquina:

- **Node.js** 
- **npm** 
- **Google Chrome**

## 🚀 Como Executar os Testes

### 1. Clone o Repositório
```bash
git clone [https://github.com/Marcel-Abramo/cypress-heroes.git]
cd cypress-heroes-automation
```

### 2. Instale as Dependência
```bash
npm install
```

### 3. Execute a Aplicação Cypress Heroes (Backend + Frontend)
```sh
npm install
```

Depois disso, mais algumas coisas precisam ser configuradas (bancos de dados), para isso execute:

```sh
npm run setup
```

Para iniciar o aplicativo para desenvolvimento, execute:

```sh
npm run dev
```

Isso iniciará os aplicativos cliente e servidor no modo de desenvolvimento. O site estará
disponível em http://localhost:3000.

### 4. Execute os Testes

# Modo Interativo (Abre o Cypress Test Runner)
```bash
npx cypress open
```
# Modo Headless (Execução silenciosa no terminal)
```bash
npx cypress run
```
# Executar um arquivo específico
```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```
### 🧪 Suite de Testes Implementada

A cobertura inclui testes para os principais fluxos da aplicação:

### 🔐 Autenticação (Login)
• Login com credenciais válidas
• Tentativas de login com credenciais inválidas
• Validações de campo (email, senha obrigatórios)

### 🦸 CRUD de Heróis
• Criação: Cadastro de novo herói com upload de avatar
• Leitura: Validação de exibição na home page
• Atualização: Edição de informações e avatar existente
• Exclusão: Remoção de herói com confirmação

### 🏠 Home Page
• Usuário não logado: Interações bloqueadas com alertas
• Usuário comum: Like e contratação de heróis
• Administrador: Fluxos completos de edição e exclusão

### 🏗️ Estrutura do Projeto

cypress-heroes-automation/
├── 📁 cypress/
│   ├── 📁 e2e/               # Test cases organizados por feature
│   ├── 📁 fixtures/          # Dados de teste (user-data.json)
│   ├── 📁 pages/             # Page Objects (LoginPage, HomePage...)
│   └── 📁 support/           # Comandos customizados e configurações
├── 📁 docs/                  # Documentação completa
│   ├── plano-de-testes.pdf   # Estratégia e planejamento
│   ├── sugestoes-melhorias.md # Análise de UX e sugestões
│   └── cobertura-testes.md   # Matriz de rastreabilidade
└── 📄 README.md              # Este arquivo

### 🧩 Padrões e Boas Práticas Implementadas
• Page Object Model (POM): Separação clara entre lógica de teste e seletores
• Seletores Resilientes: Uso de data-cy attributes e estratégias robustas
• Dados Dinâmicos: Gerenciamento de estado e dados independentes entre testes
• Asserções Significativas: Validações baseadas em comportamento do usuário

📝 Licença
Este projeto é para fins educacionais e de portfólio. A aplicação Cypress Heroes é de terceiros e pode estar sujeita à sua própria licença.

Nota: Este projeto foi desenvolvido como parte do programa de mentoria LumeStack Guardião da Qualidade.
