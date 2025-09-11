import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();



    describe('Quando logar com credenciais válidas', () => {

      it('CT-LOGIN-001 - Login deve ser realizado com sucesso', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userRegular.username, userData.userRegular.password);
        loginPage.checkAccessValid();
      })
    })

    describe('Quando logar com credenciais inválidas', () => {

      it('CT-LOGIN-002 - Login deve falhar', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
        loginPage.getErrorMessage("Email is not valid").should('be.visible');
      })

      it('CT-LOGIN-003 - Login com email inválido deve falhar', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userFail.username, userData.userRegular.password);
        loginPage.getErrorMessage("Email is not valid").should('be.visible')
      })

      it('CT-LOGIN-004 - Login com senha inválida deve falhar', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userRegular.username, userData.userFail.password);
        loginPage.getErrorMessage("Invalid email or password").should('be.visible');
      })
      
      it('CT-LOGIN-005 - Login com campos em branco deve exibir mensagens de erro', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithBlankField();
        loginPage.getErrorMessage("Email is required").should('be.visible');
        loginPage.getErrorMessage("Password is required").should('be.visible');
      })
    })










