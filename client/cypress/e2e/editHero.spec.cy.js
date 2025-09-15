import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";
import NewHeroPage from "../pages/newHeroPage";
import EditHeroPage from "../pages/editHeroPage";

const editHeroPage = new EditHeroPage();
const newheroPage = new NewHeroPage();
const loginPage = new LoginPage();

    describe('Quando usuário administrador estiver logado', () => {
        beforeEach(() => {
            loginPage.accessLoginPage();
            loginPage.loginWithUser(userData.userADM.username, userData.userADM.password);
            loginPage.checkAccessValid();
        });

        
        it('CT-EDIT-001 - Página deve exibir informações do herói', () => {
            newheroPage.createNewHero(
                userData.createNewHero.name,
                userData.createNewHero.price,
                userData.createNewHero.fans,
                userData.createNewHero.saves,);
            newheroPage.checkNewHeroCreated(userData.createNewHero.name);

            editHeroPage.navigateToEditHero(userData.createNewHero.name);
            editHeroPage.verifyHeroInfo(
                userData.createNewHero.name,    
                userData.createNewHero.price,  
                userData.createNewHero.fans,    
                userData.createNewHero.saves
            );
        })    
        
        it('CT-EDIT-002 - Edição de herói deve salvar e exibir na home page', () => {
            editHeroPage.navigateToEditHero(userData.createNewHero.name);
            editHeroPage.editHeroInfo(
                userData.editHero.name,
                userData.editHero.price,
                userData.editHero.fans,
                userData.editHero.saves
            );
            editHeroPage.checkHeroInfoUpdated(userData.editHero.name);
        });
       

        it('CT-EDIT-003 - Deve ser possível atualizar o avatar', () => {
            editHeroPage.navigateToEditHero(userData.editHero.name);
            editHeroPage.changeAvatarHero(userData.avatar.editFileName);
            editHeroPage.checkHeroInfoUpdated(userData.editHero.name);
        });
    })