**PLANO DE TESTES  
  
Cypress Heroes Demo Application  
**Exercício 4 Mentoria LumeStack -- Guardião da Qualidade

**1. Produto**

O **Cypress Heroes Demo Application** é uma aplicação de demonstração
criada para praticar e validar testes automatizados com **Cypress**.

O sistema é composto por:

- Um **frontend** desenvolvido em **React (com Vite).**

- Um **backend** construído em **NestJS**, que utiliza **Prisma** para
  gerenciar o banco de dados.

A aplicação roda localmente em \`http://localhost:3000\` (frontend) e se
comunica com a API backend em \`http://localhost:3001\`.

O banco de dados pode ser resetado a qualquer momento, permitindo que
cenários de teste sejam reproduzidos de forma consistente.

O objetivo do produto não é oferecer uma solução real de mercado, mas
sim **servir como ambiente de prática e aprendizado** para a execução de
testes **end-to-end, de componentes e de API** com Cypress.

**2. Escopo**

O escopo deste plano de testes cobre as principais funcionalidades do
sistema **Cypress Heroes**, considerando os fluxos críticos de cadastro,
login, gerenciamento de heróis e interação básica do usuário.

**2.1. Itens incluídos no escopo**

- **Ambiente de teste:**

<!-- -->

- Testes serão realizados exclusivamente no navegador **Google Chrome
  (desktop)**.

<!-- -->

- **Perfis de usuário:**

<!-- -->

- Usuário **não logado**.

- Usuário **logado padrão**.

- Usuário **administrador logado**.

<!-- -->

- **Funcionalidades:**

<!-- -->

- **Cadastro de usuário**.

- **Login** com diferentes cenários:

<!-- -->

- Campos obrigatórios preenchidos corretamente.

- Campos vazios.

- Email em formato inválido (sem "@").

- Senha com menos caracteres que o mínimo permitido.

<!-- -->

- **Upload de avatar**: validação se a imagem carregada é exibida
  corretamente.

<!-- -->

- **Gerenciamento de heróis**:

<!-- -->

- Contratação de herói (fluxo funcional).

- Exclusão de herói (fluxo funcional).

**2.2. Itens fora do escopo**

- Testes em outros navegadores além do Google Chrome.

- Testes em dispositivos móveis (Android/iOS).

- Integrações com API e banco de dados.

- Testes de performance e carga.

- Testes de segurança.

- Usabilidade e acessibilidade (não considerados nesta etapa).

**3. Estratégia de Testes**

**3.1 Nível de Teste**

- **Teste exploratório** já realizado de forma manual, identificando
  fluxos principais e pontos sensíveis do sistema.

- **Testes funcionais** serão aplicados de forma manual e automatizada,
  garantindo que os principais fluxos críticos sejam validados.

- **Testes de regressão** serão executados a cada alteração
  significativa na aplicação, inicialmente de forma manual e
  posteriormente automatizada.

**3.2 Tipos de Teste**

- **Equivalência de classes**: utilizada para reduzir a quantidade de
  casos de teste sem comprometer a cobertura.

- **Testes negativos**: inclusão de cenários inválidos como login sem
  \`@\`, senha abaixo do mínimo e campos obrigatórios vazios.

- **Valores-limite**: aplicação em campos com restrições de caracteres e
  validações específicas.

- **Casos de teste formais**: documentados em padrão estruturado (Docx),
  garantindo rastreabilidade e clareza.

**3.3 Abordagem de Execução**

- Execução baseada no **passo a passo detalhado** descrito nos casos de
  teste.

- **Exploração adicional** durante a automação, com foco em encontrar
  comportamentos inesperados.

- **Priorização por criticidade:**

- **Críticos**: Login, Upload de imagem, Contratar/Excluir.

- **Médios**: Cadastro e edição de dados.

- **Baixa prioridade**: Fluxos secundários e de validação simples.

**3.4 Critérios de Entrada e Saída**

- **Entrada:** início dos testes após a finalização e aprovação do plano
  de testes.

- **Saída:** conclusão quando 100% dos casos de teste documentados forem
  executados e evidenciados (manuais ou automatizados).

**3.5 Ferramentas e Evidências**

- **Documentação:** casos de teste registrados em arquivos .**docx**.

- **Evidências**: validação diretamente conforme os passos descritos,
  com anexo de prints ou evidências adicionais caso aconteçam falhas,
  para criação de Bug Report.

- **Automação:** em desenvolvimento com **Cypress/JavaScript,**
  responsável por registrar logs e resultados de execução, cobrindo
  também as evidências das validações.

**4. Ferramentas**

- **Execução manual:** será realizada diretamente em navegador,
  utilizando seletores CSS para inspeção e validação de elementos.

- **Automação:** a suíte será desenvolvida em **Cypress**, com apoio de
  **Node.js** e **Git Bash** para execução dos scripts e gerenciamento
  do ambiente local.

- **Ambiente de execução:** os testes automatizados rodarão apenas em
  ambiente **local**, não havendo integração com pipelines de CI/CD
  neste momento.

- **Rastreamento de bugs:** caso sejam encontrados defeitos, será
  produzido um **bug report** detalhado contendo passo a passo e
  evidências para facilitar a análise da equipe de desenvolvimento.

- **Documentação:** todos os casos de teste e registros ficarão
  organizados dentro do **repositório do projeto**.

- **Controle de versões:** serão documentadas as versões das ferramentas
  utilizadas (ex.: Node.js, Cypress, navegador), garantindo
  reprodutibilidade.

- **Relatórios:** não haverá integração com dashboards ou relatórios
  automáticos nesta fase inicial.

**5. Quem vai testar (Papéis e Responsáveis)**

- **Executor**: Marcel Abramo (QA) --- responsável pela criação e
  execução dos casos de teste.

- **Correções**: não se aplicam, pois trata-se de um sistema de
  terceiros sem possibilidade de intervenção no código.

- **Validação/Aprovação**: Marcel Abramo --- validação final dos
  resultados e consolidação da documentação.

- **Observação**: Projeto solo, portanto todos os papéis são
  desempenhados pelo próprio autor.

**6. Cronograma**

- **Duração estimada**: 2 semanas.

- **Atividades**:

- **Semana 1**: Finalizar o plano de testes, escrever casos de teste
  manuais e iniciar a documentação.

- **Semana 2**: Iniciar e concluir a automação dos casos prioritários,
  consolidar relatório final.

- **Observação**: Não será utilizado o modelo de sprints; a execução
  seguirá um fluxo contínuo até a conclusão.

**7. Riscos**

- **Risco 1:** Sistema de terceiros instável ou fora do ar.

- **Mitigação**: Documentar a falha no plano de execução, validar
  cenários localmente (mock/dados simulados) e reagendar execução quando
  o sistema voltar.

- **Risco 2:** Atualizações no sistema de terceiros que quebrem
  cenários.

- **Mitigação:** Versionar os casos de teste, manter registro do
  comportamento esperado e documentar divergências como riscos
  conhecidos.

- **Risco 3:** Problemas de configuração local (ex.: Node.js, Cypress,
  dependências).

- **Mitigação:** Manter registro das versões utilizadas, reinstalar
  dependências com \`npm install\` e, se necessário, resetar ambiente de
  teste.

**8. Métricas**

- **Critérios de Entrada:**

<!-- -->

- Ambiente configurado e acessível.

- Ferramentas (Cypress, Node.js, navegador) instaladas.

- Casos de teste documentados.

<!-- -->

- **Critérios de Saída:**

- 100% dos casos críticos executados.

- 0 bugs críticos abertos (bloqueadores).

<!-- -->

- Evidências registradas (prints, relatórios do Cypress).

- **Métricas a acompanhar:**

- % de execução: 100% dos casos planejados foram rodados.

- % de aprovação: mínimo 90% dos casos sem falhas.

- Defeitos encontrados: todos reportados com bug report documentado.

| **FEATURE**                           | **CENÁRIO**                                 | **CASO DE TESTE**                                                      | **ID**           |
|---------------------------------------|---------------------------------------------|------------------------------------------------------------------------|------------------|
| **Home Page**                         | Quando não estiver logado                   | Exibir alerta ao clicar em \"like\" sem estar logado                   | **CT-HOME-001**  |
|                                       |                                             | Exibir alerta ao clicar em \"hire\" sem estar logado                   | **CT-HOME-002**  |
|                                       | Quando usuário normal estiver logado        | Clicar em \"like\" deve aumentar a contagem de fãs do herói            | **CT-HOME-003**  |
|                                       |                                             | Usuário deve conseguir contratar um herói                              | **CT-HOME-004**  |
|                                       |                                             | Usuário deve conseguir cancelar uma contratação                        | **CT-HOME-005**  |
|                                       | Quando usuário administrador estiver logado | Clicar em \"like\" deve aumentar a contagem de fãs do herói            | **CT-HOME-006**  |
|                                       |                                             | Admin deve conseguir contratar um herói                                | **CT-HOME-007**  |
|                                       |                                             | Clicar em \"edit\" deve redirecionar para a página de edição           | **CT-HOME-008**  |
|                                       |                                             | Admin deve conseguir excluir um herói                                  | **CT-HOME-009**  |
|                                       |                                             | Admin deve conseguir cancelar a exclusão de um herói                   | **CT-HOME-010**  |
| **Hero New Page (Cadastro de Herói)** | Quando usuário administrador estiver logado | Adicionar novo herói deve salvar e exibir na home page                 | **CT-NEW-001**   |
|                                       |                                             | Deve ser possível fazer upload de um novo avatar                       | **CT- NEW -002** |
| **Hero Edit Page**                    | Quando usuário administrador estiver logado | Página deve exibir informações do herói                                | **CT-EDIT-001**  |
|                                       |                                             | Edição de herói deve salvar e exibir na home page                      | **CT-EDIT-002**  |
|                                       |                                             | Deve ser possível atualizar o avatar                                   | **CT-EDIT-003**  |
| **Login**                             | Login com credenciais válidas               | Login deve ser realizado com sucesso                                   | **CT-LOGIN-001** |
|                                       | Login com credenciais inválidas             | Login deve falhar                                                      | **CT-LOGIN-002** |
|                                       |                                             | Login com email inválido deve falhar                                   | **CT-LOGIN-003** |
|                                       |                                             | Login com senha inválida deve falhar                                   | **CT-LOGIN-004** |
|                                       | Validação de Campo                          | Login com campos em branco deve exibir mensagens de erro               | **CT-LOGIN-005** |
|                                       |                                             | Login com campos contendo apenas espaços deve exibir mensagens de erro | **CT-LOGIN-006** |
