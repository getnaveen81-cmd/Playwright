export class LoginPage {

  constructor(page) {
    this.page = page;
    this.userNameInPutField = page.getByRole("textbox", { name: "Username" });
    this.passwordInputField = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: " Login" });
  }

  async navigateTo(){
   await this.page.goto('https://the-internet.herokuapp.com/login ')
  }
     
    async login(username,password){
        await this.userNameInPutField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
    }
}
