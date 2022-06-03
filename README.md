# allure-reporter-test-angular

## First steps:
To install all the dependencies type:
```
npm install
```
next, enter the project:
```cmd
cd app
``` 

## Generating reporting files with Protractor
In the case we want to use protractor, open a new terminal:
```
npx webdriver-manager update 
npx webdriver-manager start
```
open other terminal and launch the test with:
```
npx protractor e2e\protractor.conf.js 
```

## Generating reporting files with WebdriverIO
If we prefer to be using wdio:
```
npx wdio run wdio\wdio.conf.ts --autoCompileOpts.tsNodeOpts.project=wdio/tsconfig.json
``` 
In any case, the reporting files will be generated in the same `allure-results` folder 