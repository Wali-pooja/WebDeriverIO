import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('#SubmitLogin') }
    get signinlink () {return $('#header > div.nav > div > div > nav > div.header_user_info > a')}
    get input_search () {return $('#search_query_top')}
    get hover_item () {return $('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.quick-view')}
    get addcart_btn () {return $('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')}
    get checkout () {return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')}
    get proceed_chechout () {return $('#center_column > form > p > button > span')}
    get validate_item () {return $('#product_5_19_0_577252 > td.cart_description')}
    get item_details () {return $('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.layer_cart_product_info')}
    get signout () {return $('#header > div.nav > div > div > nav > div:nth-child(2) > a')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.inputUsername.setValue("test456@xyz.com");
        await this.inputPassword.setValue("4test4");
        await this.btnSubmit.click();
        await browser.setTimeout({ 'script': 60000 })
        
    }

    async signin (){
        await this.signinlink.click();
    }

    async addtocart(){
        await this.input_search.setValue("printed dress");
        await browser.keys("Enter")
        await browser.setTimeout({ 'script': 60000 })
        await this.hover_item.moveTo();
        $('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line.hovered > div > div.left-block > div > a.product_img_link > img').click();
        //await this.addcart_btn.click();
        await browser.setTimeout({ 'script': 60000 })
        $('//span[contains(text(),"Add to cart")]').click();
        //const item = await this.item_details.getText();
        //console.log("=====>"+item);
        await this.checkout.click();
        await this.proceed_chechout.click();
        await this.proceed_chechout.click();
        await this.proceed_chechout.click();
        const validateitem = await this.validate_item.getText();
        console.log("====>>"+ validateitem);
        await browser.setTimeout({ 'script': 60000 })

    }
}

export default new LoginPage();
