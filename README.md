Project was build with use boilerplate: https://github.com/santoshshinde2012/node-boilerplate/blob/master/package.json
Please keep in mind, not all features are used on this project. I just wanted to avoid setup another configuration from scratch.

### Environment
This is just a prototype and it wasn't test on diffrent environment than local.

### Run project: 
- Run a command: `$ npm run start:local`

### Endpoints:
Base URL: http://localhost:3146

- Get specified list of Prints: `/api/harvard-art-museum/prints/:page?`
- Get object by Id:             `/api/harvard-art-museum/print/:objectId`

Code: 
```
    > components
        > harvard-art-museum
            > harvard-art-museum.controller.ts
            > harvard-art-museum.types.ts
```

### Run tests:
- Run command: `$ npm run test`

I have added 2 integrations tests:
`tests/integration-tests/harvard-art-museum.integration.spec.ts`