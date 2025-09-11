import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();


    describe('Quando não estiver logado', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/heroes');
        });

        it('CT-HOME-001 - Exibir alerta ao clicar em "like" sem estar logado', () => {
            homePage.likeHeroWithoutLogin(userData.homeHero.name)
        });

        it('CT-HOME-002 - Exibir alerta ao clicar em "hire" sem estar logado', () => {
            homePage.hireHeroWithoutLogin(userData.homeHero.name);
        });
    });


    describe('Quando usuário normal estiver logado', () => {
        beforeEach(() => {
            loginPage.accessLoginPage();
            loginPage.loginWithUser(userData.userRegular.username, userData.userRegular.password);
            homePage.checkAccessValid();
    });

        it('CT-HOME-003 - Clicar em "like" deve aumentar a contagem de fãs do herói', () => {
            homePage.normalUserLikeHero(userData.homeHero.name);
        });

        it('CT-HOME-004 - Usuário deve conseguir contratar um herói', () => {
            homePage.normalUserHireHero(userData.homeHero.name);
        });

        it('CT-HOME-005 - Usuário deve conseguir cancelar uma contratação', () => {
            homePage.normalUserCancelHireHero(userData.homeHero.name);
        });
    });


    describe('Quando usuário Administrador estiver logado', () => {
        beforeEach(() => {
            loginPage.accessLoginPage();
            loginPage.loginWithUser(userData.userADM.username, userData.userADM.password);
            homePage.checkAccessValid();
        });

        it('CT-HOME-006 - Clicar em "like" deve aumentar a contagem de fãs do herói', () => {
            homePage.adminUserLikeHero(userData.homeHero.name);
        });

        it('CT-HOME-007 - Admin deve conseguir contratar um herói', () => {
            homePage.adminUserHireHero(userData.homeHero.name);
        });

        it('CT-HOME-008 - Clicar em "edit" deve redirecionar para a página de edição', () => {
            homePage.adminUserEditHero(userData.homeHero.name);
        });

        it('CT-HOME-009 - Admin deve conseguir excluir um herói', () => {
            homePage.adminUserDeleteHero(userData.editHero.name);
        });

        it('CT-HOME-010 - Admin deve conseguir cancelar a exclusão de um herói', () => {
            homePage.adminUserCancelDeleteHero(userData.homeHero.name);
        });      
    });






