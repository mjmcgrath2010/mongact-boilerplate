/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a database view container component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
      default: 'React.Component',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'fields',
      message:
        'What fields are present in the data model? (enter comma separated list)',
      default: 'name, description',
    },
    {
      type: 'input',
      name: 'endpoint',
      message: 'What endpoint will the data be retrieved from?',
      default: 'project',
    },
    {
      type: 'confirm',
      name: 'createView',
      default: true,
      message: 'Do you want a create route?',
    },
    {
      type: 'confirm',
      name: 'editView',
      default: true,
      message: 'Do you want an edit route?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: false,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    var componentTemplate; // eslint-disable-line no-var

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './view/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './view/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/tests/index.test.js',
        templateFile: './view/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/messages.js',
        templateFile: './view/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/actions.js',
        templateFile: './view/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/tests/actions.test.js',
        templateFile: './view/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/constants.js',
        templateFile: './view/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/selectors.js',
        templateFile: './view/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/tests/selectors.test.js',
        templateFile: './view/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/reducer.js',
        templateFile: './view/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/tests/reducer.test.js',
        templateFile: './view/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/saga.js',
        templateFile: './view/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/tests/saga.test.js',
        templateFile: './view/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path:
          '../../app/containers/Application/views/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/containers/Application/views/',
    });

    return actions;
  },
};
