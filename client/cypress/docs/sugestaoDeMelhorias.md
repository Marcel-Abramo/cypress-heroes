**Documento de Sugestão de Melhoria**

**Para:** Equipe de Desenvolvimento / Product Owner  
**De:** Marcel Abramo, QA  
**Data:** 30/08/2025 / 10/09/2025  
**Assunto:** Sugestão de Melhoria para Implementação de Seletores
Resilientes para Automação de Testes

**Status**: Esta sugestão é baseada em findings da automação de testes
end-to-end do projeto Cypress Heroes.

**1. Resumo:**

Durante a execução de testes automatizados na aplicação Cypress Heroes,
foi identificado que a ausência de seletores únicos
(como data-cy ou data-testid) em elementos dinâmicos e de interação está
impactando significativamente a robustez e a confiabilidade dos testes.
Esta sugestão propõe a adição de atributos dedicados para facilitar a
automação e melhorar a manutenção do código.

**2. Problema:**

Atualmente, elementos críticos da UI (como botões de ação e mensagens de
feedback) são localizados apenas por classes CSS genéricas ou
posicionamento no HTML (ex: :nth-child()), o que torna os
testes **frágeis** e propensos a quebras com qualquer mudança mínima no
layout ou estilização.

- **Exemplos Identificados:**

  - **Botão de Login/Logout no Header:** 

  - Selecionado por \'li \> .undefined\' 

(classe .undefined indica um possível erro e é extremamente instável).

- **Botão \"Sign In\" no Formulário:** 

- Selecionado por \'.text-white\' 

(classe genérica de estilo, muito comum em outros elementos).

- **Mensagens de Erro:** Todas as mensagens (de email, senha, etc.)
  compartilham o mesmo seletor \'.text-red-500\', impossibilitando a
  validação específica de cada uma.

**3. Impacto:**

- **Automação Frágil:** Testes quebram constantemente sem que a
  funcionalidade real tenha sido alterada, apenas por refatorações de
  CSS ou HTML.

- **Aumento do Custo de Manutenção:** Necessidade de constantes ajustes
  nos testes para acompanhar mudanças cosméticas.

- **Falsa Sensação de Quebra:** Uma falha no teste pode ser interpretada
  erroneamente como um bug na aplicação, quando na verdade foi apenas
  uma mudança de seletor.

**4. Soluções de Contorno Atuais (e por que são insuficientes):**

Para contornar a falta de seletores dedicados, a automação atual
precisou implementar soluções alternativas que, embora funcionem, não
são ideais:

- **Para o botão \"Login\" no header:** 

Uso do seletor por texto \'button:contains(\"Login\")\'. 

**Problema:** Pode quebrar se o texto for traduzido ou alterado.

- **Para o botão \"Logout\" no header:** 

Uso do seletor por texto \'button:contains(\"Logout\")\'. 

**Problema:** Pode quebrar se o texto for alterado e não diferencia
entre múltiplos botões com o mesmo texto.

- **Para o botão \"Sign In\" no formulário:** 

Uso da classe de estilo \'.bg-blue-700\'. 

**Problema:** A automação fica acoplada a uma decisão de design/estilo
que pode mudar (ex: a cor do botão).

*Estas soluções são paliativas e transferem o acoplamento do teste para
outros atributos não confiáveis, mantendo a fragilidade.*

**5. Sugestão de Solução Definitiva:**

Adicionar atributos dedicados para testes nos elementos HTML. A
convenção mais comum e recomendada é o uso do atributo data-cy,
mas data-testid também é amplamente utilizado.

**Exemplos de Implementação:**

**Antes (Problema):**

html

Copy

Download

Run

\<button class=\"text-white bg-blue-700\...\"\>Sign In\</button\>

\<a class=\"undefined\" \...\>Login\</a\>

\<button class=\"undefined \...\"\>Logout\</button\>

\<p class=\"text-red-500\"\>Email is required\</p\>

**Sugestão de Melhoria (Depois - Solução Ideal):**

html

Copy

Download

Run

\<button data-cy=\"signin-submit-btn\" class=\"text-white
bg-blue-700\...\"\>Sign In\</button\>

\<a data-cy=\"header-login-link\" \...\>Login\</a\>

\<button data-cy=\"header-logout-btn\" \...\>Logout\</button\>

\<p data-cy=\"error-email-required\" class=\"text-red-500\"\>Email is
required\</p\>

**5.1 Prova de Conceito Bem-Sucedida:**

Para demonstrar a eficácia da solução, os seletores \`data-cy\`
disponíveis foram utilizados com sucesso:

- \`\[data-cy=\"email\"\]\` e \`\[data-cy=\"password\"\]\` nos campos de
  login.

- \`\[data-cy=\"nameInput\"\]\`, \`\[data-cy=\"priceInput\"\]\` no
  cadastro de heróis.

**Os testes que utilizam esses seletores são estáveis e não quebraram
durante toda a suite de automação,** comprovando a resiliência da
abordagem.

**6. Benefícios da Implementação:**

- **Testes Resilientes:** Os testes não quebram com mudanças de CSS,
  classes ou posicionamento no HTML.

- **Maior Claridade:** Os seletores nos testes se tornam semânticos e
  fáceis de entender (ex: \[data-cy=\"signin-submit-btn\"\]).

- **Facilidade de Manutenção:** Desenvolvedores e QAs sabem exatamente
  quais elementos são usados na automação.

- **Melhoria na Colaboração:** A equipe de desenvolvimento passa a
  codificar com a automação em mente, tornando o processo mais
  integrado.

**7. Próximos Passos Sugeridos:**

1.  Priorizar a adição dos atributos data-cy nos elementos críticos dos
    fluxos principais (Login, CRUD de Heróis).

2.  Definir uma convenção de nomenclatura simples para a equipe
    (ex: \[pagina\]-\[elemento\]-\[acao\]).

3.  Validar a melhoria com a equipe de automação.

#### **8. Sugestão de Melhoria para Feedback ao Usuário** {#sugestão-de-melhoria-para-feedback-ao-usuário}

Além da resiliência técnica, foi identificada uma oportunidade de
melhorar a **experiência do usuário (UX)** com feedbacks mais claros e
específicos sobre suas ações.

**Problema:** Após ações importantes no sistema, o feedback para o
usuário é insuficiente ou genérico.

- **Exemplo:** Um usuário clica em \"Like\" ou \"Hire\" e não recebe uma
  confirmação visual clara de que a ação foi bem-sucedida.

- **Impacto:** O usuário fica em dúvida se sua interação foi registrada
  pelo sistema.

**Sugestão:** Implementar mensagens de confirmação para ações-chave.

**Exemplos de Implementação:**

**Antes:**

- Ação: Clicar em \"Like\" → **Nenhum feedback imediato** (apenas a
  contagem de fãs aumenta, o que pode passar despercebido).

- Ação: Clicar em \"Hire\" → **Nenhum feedback imediato**.

**Sugestão de Melhoria (Depois):**

- Ação: Clicar em \"Like\" → **Micro-animação** no ícone de like e
  uma **mensagem toast**: \"Liked!\".

- Ação: Clicar em \"Hire\" → **Mensagem toast** de confirmação: \"Hero
  hired successfully!\".

- Ação: Clicar em \"Delete\" → **Modal de confirmação** claro: \"Delete
  Hero? This action cannot be undone.\".

- Ação: Editar um herói → **Mensagem toast** de confirmação: \"Hero
  updated successfully!\".

**Benefícios:**

- **Maior Clareza:** O usuário tem certeza absoluta do resultado de suas
  ações.

- **Experiência Mais Polida:** Torna a aplicação mais profissional e
  agradável de usar.

- **Melhoria Indireta para Testes:** Fornece elementos visuais robustos
  e específicos para validação na automação (ex: cy.contains(\'Hero
  hired successfully!\').should(\'be.visible\')).

**Próximos Passos:**

1.  Identificar as ações críticas que merecem confirmação (Like, Hire,
    Delete, Edit, Save).

2.  Definir uma biblioteca ou padrão para mensagens toast e
    micro-animações.

3.  Implementar os feedbacks de forma consistente em toda a aplicação.
