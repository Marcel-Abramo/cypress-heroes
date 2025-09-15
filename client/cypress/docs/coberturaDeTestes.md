### Cypress Heroes  {#cypress-heroes}

### Registro de Cenários de Teste e Cobertura

### 

### **INTRODUÇÃO**

### **Objetivo do Documento**

Este documento tem como objetivo centralizar e gerenciar os cenários de
teste identificados para a aplicação **Cypress Heroes**, servindo como
um backlog dinâmico para atividades de garantia de qualidade.

Ele visa fornecer uma visão clara e abrangente da **cobertura de
testes** atual, gaps existentes e futuras oportunidades de validação,
facilitando o planejamento e a priorização de esforços.

Este registro é um documento vivo, que deve ser continuamente atualizado
conforme novas funcionalidades são desenvolvidas ou novos comportamentos
são identificados.\"

### **Cypress Heroes - Backlog de Cenários de Teste**

| **ID**           | **CENÁRIO**                                               | **TIPO DE TESTE** | **PRIORIDADE** | **FEATURE**       | **STATUS**  | **OBSERVAÇÃO**                                 |
|------------------|-----------------------------------------------------------|-------------------|----------------|-------------------|-------------|------------------------------------------------|
| **CT-AVATAR-01** | Upload de arquivo .gif deve ser recusado                  | Negativo          | Alta           | Upload de Avatar  | Não Testado | Validar mensagem de erro clara para o usuário  |
| **CT-AVATAR-02** | Upload de arquivo .svg deve ser recusado                  | Negativo          | Alta           | Upload de Avatar  | Não Testado | Validar mensagem de erro clara para o usuário  |
| **CT-AVATAR-03** | Upload de arquivo .exe ou .pdf deve ser recusado          | Negativo          | Alta           | Upload de Avatar  | Não Testado | Teste de segurança contra arquivos maliciosos  |
| **CT-AVATAR-04** | Upload de imagem \>50MB deve ser recusado                 | Negativo          | Alta           | Upload de Avatar  | Não Testado | Validar tratamento para arquivos muito grandes |
| **CT-AVATAR-05** | Upload de imagem com resolução muito alta (ex: 4000x4000) | Negativo          | Média          | Upload de Avatar  | Não Testado | Verificar se a aplicação processa ou recusa    |
| **CT-HERO-01**   | Criar herói com apóstrofo no nome (ex: Hero\'s Quest)     | Positivo          | Média          | CRUD Herói        | Não Testado | Validar tratamento de caracteres especiais     |
| **CT-HERO-02**   | Criar herói com acentos (ex: Café)                        | Positivo          | Média          | CRUD Herói        | Não Testado | Validar tratamento de caracteres especiais     |
| **CT-HERO-03**   | Criar herói com números no nome (ex: Hero 2.0)            | Positivo          | Baixa          | CRUD Herói        | Não Testado |                                                |
| **CT-HERO-04**   | Criar herói com preço = 0                                 | Negativo          | Alta           | CRUD Herói        | Não Testado | Validar se o sistema aceita ou recusa          |
| **CT-HERO-05**   | Criar herói com preço = 1 (valor mínimo)                  | Positivo          | Média          | CRUD Herói        | Não Testado | Teste de valor limite inferior                 |
| **CT-HERO-06**   | Criar herói com preço negativo (ex: -999)                 | Negativo          | Alta           | CRUD Herói        | Não Testado | Validar validação de campo                     |
| **CT-HERO-07**   | Criar herói com preço muito alto (ex: 999999)             | Positivo          | Média          | CRUD Herói        | Não Testado | Teste de valor limite superior                 |
| **CT-SEC-01**    | Usuário comum não deve conseguir editar um herói          | Segurança         | Alta           | Permissões/Acesso | Não Testado | CRÍTICO: Validar controle de acesso            |

### **Legenda:**

- **Prioridade:** Alta \| Média \| Baixa

- **Status:** Não Testado \| Concluído \| Testado Manualmente \| Não
  Aplicável

- **Tipo:** Positivo \| Negativo \| Segurança

### **LEGENDA - Significado dos Campos**

**Prioridade:**

- **Alta:** Cenários que validam funcionalidades críticas do sistema,
  fluxos principais ou que previnem bugs graves impactantes para o
  usuário final. *(Ex: Login, CRUD básico, fluxo de compra)*

- **Média:** Cenários que validam funcionalidades importantes, mas não
  críticas, ou testes negativos de alto valor. *(Ex: Validações de
  campo, testes de permisão de usuário)*

- **Baixa:** Cenários que validam funcionalidades secundárias,
  usabilidade ou *edge cases* muito específicos. *(Ex: Testes com
  caracteres especiais, variações de UI)*

**Status:**

- **Concluído:** Cenário já foi **automatizado** e é executado na suíte
  de testes.

- **Testado Manualmente:** Cenário foi validado manualmente, mas ainda
  não foi automatizado.

- **Não Testado:** Cenário foi identificado e documentado, mas ainda não
  foi executado.

- **Não Aplicável:** Cenário foi invalidado devido a mudanças na
  aplicação ou foi considerado irrelevante.

**Tipo de Teste:**

- **Positivo:** Valida o comportamento esperado do sistema (Happy Path).

- **Negativo:** Valida como o sistema reage a entradas ou comportamentos
  inválidos/inesperados.

- **Segurança:** Focado em vulnerabilidades e controle de acesso.

- **Usabilidade:** Focado na experiência e interface do usuário.
