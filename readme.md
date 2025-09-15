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
```bash
# Modo Interativo (Abre o Cypress Test Runner)

npx cypress open

# Modo Headless (Execução silenciosa no terminal)

npx cypress run

# Executar um arquivo específico

npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```
### 🧪 Suite de Testes Implementada

A cobertura inclui testes para os principais fluxos da aplicação:

### 🔐 Autenticação (Login) <br>
• Login com credenciais válidas <br>
• Tentativas de login com credenciais inválidas <br>
• Validações de campo (email, senha obrigatórios) <br>

### 🦸 CRUD de Heróis <br>
• <b>Criação:</b> Cadastro de novo herói com upload de avatar <br>
• <b>Leitura:</b> Validação de exibição na home page <br>
• <b>Atualização:</b> Edição de informações e avatar existente <br>
• <b>Exclusão:</b> Remoção de herói com confirmação <br>

### 🏠 Home Page <br>
• <b>Usuário não logado:</b> Interações bloqueadas com alertas <br>
• <b>Usuário comum:</b> Like e contratação de heróis <br>
• <b>Administrador:</b> Fluxos completos de edição e exclusão <br>

### 🏗️ Estrutura do Projeto <br>

cypress-heroes/client/ <br>
├── 📁 cypress/ <br>
│   ├── 📁 e2e/                # Casos de testes automatizados <br>
│   ├── 📁 fixtures/           # Dados de teste (user-data.json) <br>
│   ├── 📁 pages/              # Page Objects (LoginPage, HomePage...) <br>
│   └── 📁 support/            # Comandos customizados e configurações <br>
├── 📁 docs/                   # Documentação completa <br>
│   ├── casosDeTestes.md       # Descrição dos casos de testes <br>
│   ├── planoDeTestes.md       # Estratégia e planejamento <br>
│   ├── sugestaoDeMelhorias.md # Análise de UX e sugestões <br>
│   └── coberturaDeTestes.md   # Matriz de rastreabilidade <br>
└── 📄 README.md               # Este arquivo <br>

### 🧩 Padrões e Boas Práticas Implementadas <br>
• Page Object Model (POM): Separação clara entre lógica de teste e seletores <br>
• Seletores Resilientes: Uso de data-cy attributes e estratégias robustas <br>
• Dados Dinâmicos: Gerenciamento de estado e dados independentes entre testes <br>
• Asserções Significativas: Validações baseadas em comportamento do usuário <br>

📝 Licença <br>
Este projeto é para fins educacionais e de portfólio. A aplicação Cypress Heroes é de terceiros e pode estar sujeita à sua própria licença.

Nota: Este projeto foi desenvolvido como parte do programa de mentoria LumeStack Guardião da Qualidade.
