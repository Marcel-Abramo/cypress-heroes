<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-001</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Exibir alerta ao clicar em "like" sem estar logado</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema exibe um alerta informativo quando um usuário
não logado tenta curtir um herói.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário não deve estar logado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.<br />
3. Clicar no botão "Like" do card.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Deve ser exibido um alerta com a mensagem: "You must log in to
like."</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Quando não estiver logado</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-002</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Exibir alerta ao clicar em "hire" sem estar logado</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema exibe um alerta quando um usuário não logado
tenta contratar um herói.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário não deve estar logado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.<br />
3. Clicar no botão "Hire" do card.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Deve ser exibido um alerta com a mensagem: "You must log in to hire
this hero."</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Quando não estiver logado</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-003</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Clicar em "like" deve aumentar a contagem de fãs do herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se a contagem de fãs de um herói aumenta quando um usuário
logado clica em "Like".</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário deve estar logado com perfil normal.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.<br />
3. Anotar o número atual de fãs (ex: "5 fans").<br />
4. Clicar no botão "Like".<br />
5. Observar a contagem de fãs no mesmo card.</td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário: <strong>test@test.com</strong><br />
Senha: <strong>test123</strong></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>A contagem de fãs deve aumentar em 1 (ex: de "5 fans" para "6
fans").</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário normal estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-004</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Usuário deve conseguir contratar um herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um usuário logado consegue contratar um herói com
sucesso.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário deve estar logado com perfil normal.<br />
3. O herói não deve estar contratado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.</p>
<p>3. Anotar o número atual de Saves (ex: "5 Saves").<br />
4. Clicar no botão "Hire".<br />
5. Confirmar a ação no modal.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário: <strong>test@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "The Smoker"</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O número de “Saves” do herói deve aumentar em 1 (ex: de "5 Saves"
para "6 Saves").</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário normal estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-005</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Usuário deve conseguir cancelar uma contratação</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um usuário logado consegue cancelar a contratação de um
herói previamente contratado.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário deve estar logado com perfil normal.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.<br />
3. Clicar no botão "Hire".<br />
4. Negar a ação no modal.</td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário: <strong>test@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "The Smoker"</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O número de “Saves” do herói não deve aumentar.</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário normal estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-006</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Clicar em "like" deve aumentar a contagem de fãs do herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se a contagem de fãs de um herói aumenta quando um usuário
administrador clica em "Like".</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário deve estar logado com perfil administrador.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.<br />
3. Anotar o número atual de fãs (ex: "5 fans").<br />
4. Clicar no botão "Like" .<br />
5. Observar a contagem de fãs no mesmo card.</td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>A contagem de fãs deve aumentar em 1 (ex: de "5 fans" para "6
fans").</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-007</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Admin deve conseguir contratar um herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um administrador consegue contratar um herói com
sucesso.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível.<br />
2. O usuário deve estar logado com perfil administrador.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página inicial (http://localhost:3000/heroes).</p>
<p>2. Localizar um card de herói.</p>
<p>3. Clicar no botão "Hire".</p>
<p>4. Confirmar a ação no modal.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "The Smoker"</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O número de “Saves” do herói deve aumentar em 1 (ex: de "5 Saves"
para "6 Saves").</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-008</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Clicar em "edit" deve redirecionar para a página de edição</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se, ao clicar no botão "Edit" como admin, o usuário é
redirecionado para a página de edição do herói.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página inicial (http://localhost:3000/heroes).</p>
<p>2. Localizar um card de herói.</p>
<p>3. Clicar no botão de “Lápis” para Editar</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "The Smoker"</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O sistema deve redirecionar o usuário para a URL de edição do herói
(http://localhost:3000/heroes/1/edit).</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-009</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Admin deve conseguir excluir um herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um administrador consegue excluir um herói
permanentemente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve existir um herói previamente cadastrado que pode ser
excluído.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página inicial (http://localhost:3000/heroes).</p>
<p>2. Localizar o card do herói.</p>
<p>3. Clicar no botão "Delete".</p>
<p>4. Confirmar a exclusão no modal de confirmação.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "Super QA" (Herói previamente cadastrado)</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O card do herói deve desaparecer da listagem.</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-HOME-010</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Admin deve conseguir cancelar a exclusão de um herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um administrador pode abortar a ação de exclusão de um
herói.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página inicial (http://localhost:3000/heroes).<br />
2. Localizar um card de herói.</p>
<p>3. Clicar no botão "Delete".</p>
<p>4. Cancelar a ação no modal de confirmação.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: "The Smoker"</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. O modal de confirmação deve fechar.</p>
<p>2. O card do herói deve permanecer na listagem.</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-NEW-001</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Adicionar novo herói deve salvar e exibir na home page</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se um administrador consegue cadastrar um novo herói com
sucesso e se ele é listado na página inicial.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve estar na página de cadastro de herói.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Clicar em "Create New Hero" para acessar o formulário.
(http://localhost:3000/heroes/new)</p>
<p>2. Preencher todos os campos obrigatórios (Name, Price, Fans, Saves,
Powers)<br />
3. Clicar no botão "Submit".</p>
<p>4. Navegar de volta para a Home Page.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong></p>
<p><strong><br />
</strong>Novo Herói:</p>
<p>Name: Stardust<br />
Price: 9<br />
Fans: 8<br />
Saves: 7<br />
Powers: 'Fireball', 'Super Speed'</p>
<p>Avatar: [deixar vazio para este teste]</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O novo herói " Stardust " deve estar visível na listagem da Home
Page.</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT- NEW -002</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Deve ser possível fazer upload de um novo avatar</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o upload de uma imagem para o avatar do herói é
realizado com sucesso.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve estar na página de cadastro de herói.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. No formulário de cadastro, localizar o campo "Upload
Avatar".<br />
2. Preencher os demais campos obrigatórios.</p>
<p>3. Selecionar um arquivo de imagem válido (.jpg).</p>
<p>4. Clicar em "Submit".</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123<br />
</strong></p>
<p>Novo Herói:</p>
<p>Name: Stardust<br />
Price: 9<br />
Fans: 8<br />
Saves: 7<br />
Powers: 'Fireball', 'Super Speed'</p>
<p>Avatar: avatar.jpg (arquivo local)</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. A imagem deve ser exibida no preview do formulário.</p>
<p>2. Após salvar, o herói deve ser listado na Home Page com o novo
avatar.</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-EDIT-001</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Página deve exibir informações do herói</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se a página de edição carrega corretamente todas as
informações do herói selecionado.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve existir um herói cadastrado.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Na Home Page, localizar o herói e clicar no botão de “Lápis”
para Editar.</p>
<p>2. Observar os campos do formulário de edição.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong><br />
Herói: “The Smoker”</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>Todos os campos do formulário (Name, Price, Fans, Saves, Powers,
Avatar) devem estar preenchidos com as informações corretas do herói
"The Smoker".</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-EDIT-002</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Edição de herói deve salvar e exibir na home page</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se as alterações feitas na edição de um herói são salvas e
refletidas na Home Page.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve estar na página de edição de um herói.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Alterar o valor dos campos (Name, Price, Fans, Saves, Powers,
Avatar).</p>
<p>2. Clicar no botão "Submit".</p>
<p>3. Navegar para a Home Page.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123<br />
</strong>Herói: “Stardust”</p>
<p>Alteração:</p>
<p>(Name, Price, Fans, Saves, Powers).</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>Na Home Page, o herói editado deve exibir novo Name, Price, Fans,
Saves, Powers, Avatar”.<br />
Novo herói: “Super QA Editado”</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-EDIT-003</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Deve ser possível atualizar o avatar</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o upload de uma nova imagem para substituir o avatar de
um herói existente funciona.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível.</p>
<p>2. O usuário deve estar logado com perfil administrador.</p>
<p>3. Deve estar na página de edição de um herói.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. No formulário de edição, clicar no campo "Upload Avatar" e
selecionar uma nova imagem.</p>
<p>2. Clicar em "Submit".</p>
<p>3. Navegar para a Home Page.</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Usuário Admin: <strong>admin@test.com</strong><br />
Senha: <strong>test123</strong></p>
<p>Herói: Magneta</p>
<p>Nova Imagem: avatarsuperqa.jpg</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. A nova imagem deve ser exibida no preview do formulário.</p>
<p>2. Após salvar, o herói "Super QA Editado" deve ser exibido na Home
Page com o novo avatar.</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Quando usuário administrador estiver logado</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-001</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login deve ser realizado com sucesso</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o login é bem-sucedido quando credenciais válidas de um
usuário padrão são informadas.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível na página de login
(http://localhost:3000/heroes).</p>
<p>2. O usuário deve não estar logado.</p>
<p>3. O usuário de teste deve existir no sistema.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Preencher o campo "Email" com um email válido.</p>
<p>2. Preencher o campo "Password" com uma senha válida.</p>
<p>3. Clicar no botão "Sign In".</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Credenciais Válidas (User):</p>
<p>Usuário: <strong>test@test.com</strong><br />
Senha: <strong>test123</strong></p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>O sistema deve mostrar o botão “Logout”</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Login com credenciais válidas</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-002</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login deve falhar</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o login é recusado quando credenciais inexistentes no
sistema são informadas.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível na página de login.</p>
<p>2. O usuário deve não estar logado.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Preencher o campo "Email" com um email não cadastrado.</p>
<p>2. Preencher o campo "Password" com uma senha qualquer.</p>
<p>3. Clicar no botão "Sign In".</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Credenciais Inválidas (Inexistentes):</p>
<p>Email: naoexiste@email.com</p>
<p>Senha: qualquersenha</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. O sistema não deve redirecionar o usuário; deve permanecer na
página de login.</p>
<p>2. Deve ser exibida uma mensagem de erro de credenciais inválidas:
“Invalid email or password”.</p>
<p>3. Os campos de entrada não devem ser limpos (para o usuário
corrigir).</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Login com credenciais inválidas</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-003</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com email inválido deve falhar</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o login é recusado quando o formato do email é
inválido.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível na página de login.</p>
<p>2. O usuário deve não estar logado.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Preencher o campo "Email" com um texto em formato inválido
(sem '@').</p>
<p>2. Preencher o campo "Password" com qualquer texto.</p>
<p>3. Clicar no botão "Sign In".</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Credenciais Inválidas (Formato):</p>
<p>Email: email_invalido</p>
<p>Senha: qualquersenha</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. O sistema não deve redirecionar o usuário; deve permanecer na
página de login.</p>
<p>2. Deve ser exibida uma mensagem de erro de validação de campo
específica para o email: “Email is not valid”</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Login com credenciais inválidas</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-004</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com senha inválida deve falhar</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o login é recusado quando a senha está incorreta para
um email existente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td><p>1. O sistema deve estar acessível na página de login.</p>
<p>2. O usuário deve não estar logado.</p></td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Preencher o campo "Email" com um email válido e
cadastrado.</p>
<p>2. Preencher o campo "Password" com uma senha incorreta.</p>
<p>3. Clicar no botão "Sign In".</p></td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><p>Credenciais Inválidas (Senha Incorreta):</p>
<p>Email: <strong>test@test.com</strong> (válido)</p>
<p>Senha: senha_errada (inválida)</p></td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td><p>1. O sistema não deve redirecionar o usuário; deve permanecer na
página de login.</p>
<p>2. Deve ser exibida uma mensagem de erro genérica de credenciais
inválidas: "Invalid email or password".</p></td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Login com credenciais inválidas</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th>CT-LOGIN-005</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com campos em branco deve exibir mensagens de erro</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema exibe mensagens de erro específicas quando os
campos de email e senha são submetidos em branco.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. O sistema deve estar acessível na página de login.<br />
2. O usuário deve não estar logado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar a página de login.<br />
2. Deixar o campo "Email" em branco.<br />
3. Deixar o campo "Password" em branco.<br />
4. Clicar no botão "Sign In".</td>
</tr>
<tr class="odd">
<td>Dados de teste</td>
<td><strong>Email:</strong> (em branco)<br />
<strong>Senha:</strong> (em branco)</td>
</tr>
<tr class="even">
<td>Resultado esperado</td>
<td>1. Deve ser exibida a mensagem de erro: "Email is required".<br />
2. Deve ser exibida a mensagem de erro: "Password is required".</td>
</tr>
<tr class="odd">
<td>Cenário de teste</td>
<td>Validação de Campo</td>
</tr>
<tr class="even">
<td>Ambiente de teste</td>
<td>Chrome + Windows 10</td>
</tr>
<tr class="odd">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="even">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>
