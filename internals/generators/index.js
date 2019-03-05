/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const languageGenerator = require('./language/index.js');
const endpointGenerator = require('./endpoint/index.js');
const viewGenerator = require('./view/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('endpoint', endpointGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('toArray', answers => {
    const array = answers.fields.split(',');

    // eslint-disable-next-line no-return-assign
    array.map((item, idx) => (array[idx] = item.trim()));
    // eslint-disable-next-line no-param-reassign
    answers.fields = array;
    return answers.fields;
  });
  plop.setActionType('prettify', (answers, config) => {
    const pathName =
      answers.type === 'Endpoint' ? '/../../app/' : '/../../server/';
    const folderPath = `${path.join(
      __dirname,
      pathName,
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.js',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
