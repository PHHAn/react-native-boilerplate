module.exports = function(plop) {
  const component = [
    {
      type: 'add',
      path: 'src/components/{{properCase name}}/index.js',
      templateFile: 'generators/component/index.js.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{properCase name}}/styles.js',
      templateFile: 'generators/component/styles.js.hbs',
    },
  ];
  const scenesView = [
    {
      type: 'add',
      path: 'src/scenes/main/{{camelCase name}}/{{properCase name}}.view.js',
      templateFile: 'generators/module/Module.view.js.hbs',
    },
    {
      type: 'add',
      path:
        'src/scenes/main/{{camelCase name}}/{{properCase name}}.constants.js',
      templateFile: 'generators/module/Module.constants.js.hbs',
    },
    {
      type: 'add',
      path: 'src/scenes/main/{{camelCase name}}/{{properCase name}}.styles.js',
      templateFile: 'generators/module/Module.styles.js.hbs',
    },
    {
      type: 'add',
      path:
        'src/scenes/main/{{camelCase name}}/{{properCase name}}.container.js',
      templateFile: 'generators/module/Module.container.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/constants/sceneName.js',
      pattern: /\/\/ Scene name/gi,
      template:
        "// Scene name\r\n  {{constantCase name}}: '{{constantCase name}}_SCREEN',",
    },
    {
      type: 'modify',
      path: 'src/routers/RootNavigator.js',
      pattern: /\/\/ Screen Import/gi,
      template:
        "// Screen Import\r\nimport {{properCase name}}Container from 'scenes/main/{{camelCase name}}/{{properCase name}}.container';",
    },
    {
      type: 'modify',
      path: 'src/routers/RootNavigator.js',
      pattern: /\{\/\* Plop screen \*\/}/gi,
      template:
        '{/* Plop screen */}\r\n\t\t\t\t<Stack.Screen name={ SCENE_NAMES.{{constantCase name}} } component={ {{properCase name}}Container } />',
    },
  ];
  const redux = [
    {
      type: 'add',
      path: 'src/appRedux/reducers/{{camelCase name}}Reducer.js',
      templateFile: 'generators/redux/reducer.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/appRedux/reducers/index.js',
      pattern: /\/\/ Reducer Imports/gi,
      template:
        "// Reducer Imports\r\nimport {{camelCase name}}Reducer from './{{camelCase name}}Reducer';",
    },
    {
      type: 'modify',
      path: 'src/appRedux/reducers/index.js',
      pattern: /\/\/ Reducers/gi,
      template:
        '// Reducers\r\n  {{camelCase name}}: {{camelCase name}}Reducer,',
    },
    {
      type: 'add',
      path: 'src/appRedux/selectors/{{camelCase name}}Selector.js',
      template:
        '// export const actionSelector = state => state.{{camelCase name}}.data;\n',
    },
    {
      type: 'add',
      path: 'src/services/api/{{camelCase name}}Api.js',
      templateFile: 'generators/redux/api.js.hbs',
    },
    {
      type: 'add',
      path: 'src/appRedux/actions/{{camelCase name}}Actions.js',
      templateFile: 'generators/redux/actions.js.hbs',
    },
    {
      type: 'add',
      path: 'src/appRedux/parsers/{{camelCase name}}Parses.js',
      template: '',
    },
    {
      type: 'modify',
      path: 'src/appRedux/actionsType.js',
      pattern: /\/\/ Actions/gi,
      template: '// Actions\r\nexport const {{constantCase name}} = {};\n',
    },
    {
      type: 'add',
      path: 'src/appRedux/sagas/{{camelCase name}}Sagas/index.js',
      templateFile: 'generators/redux/sagas.js.hbs',
    },
    {
      type: 'modify',
      path: 'src/appRedux/sagas/index.js',
      pattern: /\/\/ Saga Imports/gi,
      template:
        "// Saga Imports\r\nimport {{camelCase name}}Sagas from './{{camelCase name}}Sagas';",
    },
    {
      type: 'modify',
      path: 'src/appRedux/sagas/index.js',
      pattern: /\/\/ Sagas/gi,
      template: '// Sagas\r\n    fork({{camelCase name}}Sagas),',
    },
  ];
  plop.setGenerator('module', {
    description: 'Generates new module with or without redux connection',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (Casing will be modified)',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Choose Module type',
        choices: ['scenes', 'component', 'redux'],
      },
    ],
    actions(data) {
      switch (data.type) {
        case 'scenes':
          return scenesView;
        case 'redux':
          return redux;
        case 'component':
          return component;
        default:
          break;
      }
    },
  });
};
