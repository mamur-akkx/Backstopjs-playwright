const{test,expect}=require('@playwright/test');

test('login test',async({page})=>{


  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // Wait for login to complete
  await page.waitForSelector('#content');
});

//install backstopjs : 'npm install --save-dev backstopjs'
//initialize backstopjs : 'npx backstop init'
 
/* for more information see BAckstop-Decumentation/BACKSTOP.JS file */



//baseline(specific image to store karega) banany kalie 'npx backstop reference' coommond use hoga .
//compare karany kalie 'npx backstop test' commond use hoga .