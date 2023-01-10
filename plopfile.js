module.exports = function(plop) {
  plop.setWelcomeMessage(
    "Welcome to plop! What would you like to do?"
  ),
  // create your generators here
  plop.setGenerator('Component Creation', {
    description: 'Create a stencil JS component',
    // array of inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name (i.e. FToggle)',
			}
    ],
    // array of actions
    actions: [
      // Add all the template files to the dest folder
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'plop/templates/component/component.tsx',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        templateFile: 'plop/templates/component/component.scss',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.stories.jsx',
        templateFile: 'plop/templates/component/component.stories.js',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.story-utils.js',
        templateFile: 'plop/templates/component/component.story-utils.js',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'plop/templates/component/component.spec.tsx',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/docs.mdx',
        templateFile: 'plop/templates/component/docs.mdx',
      },
      //   Update all the tempates files with the data
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /TemplateComponent/g,
        template: '{{pascalCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /template-component/g,
        template: '{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        pattern: /template-component/g,
        template: '{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        pattern: /hasShadow/g,
        template: '{{hasShadow}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.stories.jsx',
        pattern: /template-component/g,
        template: '{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.story-utils.js',
        pattern: /TemplateComponent/g,
        template: '{{pascalCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        pattern: /template-component/g,
        template: '{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        pattern: /TemplateComponent/g,
        template: '{{pascalCase name}}',
      },
    ],
  });
};