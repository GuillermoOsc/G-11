// Mediante el constructor se reduce la cantidad de codigo y se agiliza el uso de diferentes páginas para seleccionar los elementos
// Este patrón de diseño se denomina POM (Page Objet Model)



import { Selector, t } from "testcafe";

class loginPage {
    constructor(){
        this.user = Selector('#email')
        this.pass = Selector('#password')
        this.button = Selector('button.Login_botonIniciarSesion__s6FjA')
        this.title = Selector('div.Login_errorColor__s-yPS')
    }


// Se valida si los campos user y password son nulos para establecer happypath y escenarios negativos en el folder loginTest.js

    async submitLoginForm(user, pass) {
        if(user != null){
            await t.typeText(this.user, user)
        }
        if(pass != null){
            await t.typeText(this.pass, pass)
        }
        await t.click(this.button)
    }

};


export default new loginPage