module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/ui/{{pascalCase name}}/index.ts',
        templateFile: 'templates/default.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/ui/{{pascalCase name}}/{{name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      }
      // {
      //   type: 'add',
      //   path: '../src/ui/{{pascalCase name}}/styles.ts',
      //   templateFile: 'templates/styles.ts.hbs'
      // }
      // {
      //   type: 'add',
      //   path: '../src/ui/{{pascalCase name}}/stories.tsx',
      //   templateFile: 'templates/stories.tsx.hbs'
      // }
    ]
  })
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.ts',
        templateFile: 'templates/pages/default.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/{{name}}.tsx',
        templateFile: 'templates/pages/Component.tsx.hbs'
      }
      // {
      //   type: 'add',
      //   path: '../src/pages/{{pascalCase name}}/styles.ts',
      //   templateFile: 'templates/pages/styles.ts.hbs'
      // }
      // {
      //   type: 'add',
      //   path: '../src/ui/{{pascalCase name}}/stories.tsx',
      //   templateFile: 'templates/stories.tsx.hbs'
      // }
    ]
  })
}
