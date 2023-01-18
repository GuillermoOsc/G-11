import { Selector } from 'testcafe'

class inventoryPage {
    constructor(){
        this.title = Selector('.AppBar_tituloHeader__6AM7r').withText('Melinda Muriel') 
    }
}

export default new inventoryPage

