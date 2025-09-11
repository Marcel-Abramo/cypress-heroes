import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";
import NewHeroPage from "../pages/new-heroPage";

const newheroPage = new NewHeroPage();
const loginPage = new LoginPage();

    describe('Quando usuário administrador estiver logado', () => {
        beforeEach(() => {
            loginPage.accessLoginPage();
            loginPage.loginWithUser(userData.userADM.username, userData.userADM.password);
            loginPage.checkAccessValid();
        });

        it('CT-NEW-001 - Adicionar novo herói deve salvar e exibir na home page', () => {         
            newheroPage.createNewHero(
                userData.createNewHero.name,
                userData.createNewHero.price,
                userData.createNewHero.fans,
                userData.createNewHero.saves,);
            newheroPage.checkNewHeroCreated(userData.createNewHero.name);
        })       

        it('CT-NEW-002 - Deve ser possível fazer upload de um novo avatar', () => {
            newheroPage.createNewHeroWithAvatar(
                userData.createNewHero.name, 
                userData.createNewHero.price,
                userData.createNewHero.fans,
                userData.createNewHero.saves,
                userData.avatar.newFileName);
            newheroPage.checkNewHeroCreated(userData.createNewHero.name); 
        });
    })
    




