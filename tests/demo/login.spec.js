import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('login',async({page})=>{
    const login = new LoginPage(page); 
    await login.navigateTo();
    await login.login('tomsmith','SuperSecretPassword!');
    await login.expectedPage();
})