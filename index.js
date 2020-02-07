const { prompt } = require('enquirer');
const fs = require('fs');
const path = require('path');
// import { createComponentFiles } from './fileWriter';
const COMPONENT = 'component';
const REDUCER = 'reducer';
const question_shunt = [
  {
    type: 'select',
    name: 'shunt',
    message: 'choose shunt',
    choices: [COMPONENT, REDUCER],
    default: COMPONENT,
  },
];

const questions_component = [
  {
    type: 'input',
    name: 'componentName',
    message: 'component name:',
    validate: input => {
      if (input) {
        return true;
      }
      return 'component name is required!';
    },
  },
  {
    type: 'select',
    name: 'scope',
    message: 'component scope:',
    choices: ['atom', 'molecule', 'organism', 'layout', 'pages'],
    default: 'atom',
  },
];

const questions_reducer = [
  {
    type: 'input',
    name: 'reducerName',
    message: 'reducer name:',
    validate: input => {
      if (input) {
        return true;
      }
      return 'reducer name is required!';
    },
  },
];

const getComponentIndexContent = componentName => {
  try {
    const data = fs.readFileSync('./template/component/index.js', 'utf8');
    return data.toString().replace(/COMPONENT_NAME/g, componentName);
  } catch (error) {
    console.log('getComponentIndexContent error', error);
  }
};

const genComponentContent = componentName => {
  try {
    const data = fs.readFileSync('./template/component/component.js', 'utf8');
    const componentClassName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
    return data
      .toString()
      .replace(/COMPONENT_NAME/g, componentName)
      .replace(/COMPONENT_CLASS_NAME/g, componentClassName);
  } catch (error) {
    console.log('genComponentContent error', error);
  }
};

const genComponentStyleContent = componentName => {
  try {
    const data = fs.readFileSync('./template/component/component.module.scss', 'utf8');
    const componentClassName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
    return data.toString().replace(/COMPONENT_NAME/g, componentClassName);
  } catch (error) {
    console.log('genComponentStyleContent error', error);
  }
};

const genComponentStoryContent = (componentName, scopeName) => {
  console.log(scopeName);
  try {
    const data = fs.readFileSync('./template/component/index.stories.js', 'utf8');
    const componentScopeName = `${scopeName.charAt(0).toUpperCase()}${scopeName.slice(1)}s`;
    return data
      .toString()
      .replace(/COMPONENT_NAME/g, componentName)
      .replace(/SCOPE_NAME/g, componentScopeName);
  } catch (error) {
    console.log('genComponentStoryContent error', error);
  }
};

const genComponentTestContent = (componentName, scopeName) => {
  try {
    const data = fs.readFileSync('./template/component/component.test.js', 'utf8');
    const componentScopeName = `${scopeName.charAt(0).toUpperCase()}${scopeName.slice(1)}s`;
    return data
      .toString()
      .replace(/COMPONENT_NAME/g, componentName)
      .replace(/SCOPE_NAME/g, componentScopeName);
  } catch (error) {
    console.log('genComponentTestContent error', error);
  }
};

const createComponentFiles = async ({ name, scope }) => {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const scopeDestination = path.join(__dirname, 'src', 'components', `${scope}s`);

  const componentFolder = path.join(scopeDestination, componentName);

  // check component exist
  try {
    const fileExist = await fs.existsSync(componentFolder);

    if (fileExist) {
      throw new Error('COMPONENT_EXIST');
    }
  } catch (err) {
    if (err.message === 'COMPONENT_EXIST') {
      console.log(`COMPONENT_EXIST: ${scope}s/${componentName}`);
    } else {
      console.log(err);
    }
    return;
  }

  // create component dir
  fs.mkdir(componentFolder, async () => {
    // create component index file
    const componentIndexPath = `${componentFolder}/index.js`;
    const componentIndexContent = await getComponentIndexContent(componentName);
    fs.writeFile(componentIndexPath, componentIndexContent, err => {
      if (err) console.log(`COMPONENT_INDEX_FILE_EXIST: ${componentIndexPath}`);
      console.log(`Update ${componentIndexPath}`);
    });

    // create component js
    const componentJsPath = `${componentFolder}/${componentName}.js`;
    const componentContent = await genComponentContent(componentName);
    fs.writeFile(componentJsPath, componentContent, err => {
      if (err) console.log(`COMPONENT_FILE_EXIST: ${componentJsPath}`);
      console.log(`Update ${componentJsPath}`);
    });

    // create component scss
    const componentScssPath = `${componentFolder}/${componentName}.module.scss`;
    const componentStyleContent = await genComponentStyleContent(componentName);
    fs.writeFile(componentScssPath, componentStyleContent, err => {
      if (err) console.log(`COMPONENT_SCSS_EXIST: ${componentScssPath}`);
      console.log(`Update ${componentScssPath}`);
    });

    // create component story
    const componentStoryPath = `${componentFolder}/index.stories.js`;
    const componentStoryContent = await genComponentStoryContent(componentName, scope);
    fs.writeFile(componentStoryPath, componentStoryContent, err => {
      if (err) console.log(`COMPONENT_STORY_EXIST: ${componentStoryPath}`);
      console.log(`Update ${componentStoryPath}`);
    });

    // create component test
    const componentTestPath = `${componentFolder}/${componentName}.test.js`;
    const componentTestContent = await genComponentTestContent(componentName, scope);
    fs.writeFile(componentTestPath, componentTestContent, err => {
      if (err) console.log(`COMPONENT_TEST_EXIST: ${componentTestPath}`);
      console.log(`Update ${componentTestPath}`);
    });
  });
};

const getReducerIndexContent = reducerName => {
  const upper_reducerName = reducerName.charAt(0).toUpperCase() + reducerName.slice(1);
  try {
    const data = fs.readFileSync('./template/reducer/index.js', 'utf8');
    return data
      .toString()
      .replace(/REDUCER_NAME/g, reducerName)
      .replace(/HOOK_NAME/g, `use${upper_reducerName}`)
      .replace(/ACTION_NAME/g, `add${upper_reducerName}`);
  } catch (error) {
    console.log('getComponentIndexContent error', error);
  }
};

const genReducerContent = reducerName => {
  try {
    const data = fs.readFileSync('./template/reducer/reducer.js', 'utf8');
    return data.toString().replace(/REDUCER_NAME/g, `${reducerName}Reducer`);
  } catch (error) {
    console.log('genComponentContent error', error);
  }
};

const createReducerFiles = async ({ name }) => {
  const reducerName = name.charAt(0).toLowerCase() + name.slice(1);
  const scopeDestination = path.join(__dirname, 'src', 'store');

  const reducerFolder = path.join(scopeDestination, reducerName);

  // check component exist
  try {
    const fileExist = await fs.existsSync(reducerFolder);

    if (fileExist) {
      throw new Error('REDUCER_EXIST');
    }
  } catch (err) {
    if (err.message === 'REDUCER_EXIST') {
      console.log(`REDUCER_EXIST: ${reducerName}`);
    } else {
      console.log(err);
    }
    return;
  }

  // create reducer dir
  fs.mkdir(reducerFolder, async () => {
    // create reducer index file
    const reducerIndexPath = `${reducerFolder}/index.js`;
    const reducerIndexContent = await getReducerIndexContent(reducerName);
    fs.writeFile(reducerIndexPath, reducerIndexContent, err => {
      if (err) console.log(`REDUCER_INDEX_FILE_EXIST: ${reducerIndexPath}`);
      console.log(`Update ${reducerIndexPath}`);
    });

    // create reducer js
    const reducerJsPath = `${reducerFolder}/${reducerName}.js`;
    const reducerContent = await genReducerContent(reducerName);
    fs.writeFile(reducerJsPath, reducerContent, err => {
      if (err) console.log(`REDUCER_FILE_EXIST: ${reducerJsPath}`);
      console.log(`Update ${reducerJsPath}`);
    });
  });
};

const createComponent = async () => {
  const { shunt } = await prompt(question_shunt);
  if (shunt === COMPONENT) {
    const { componentName, scope } = await prompt(questions_component);
    createComponentFiles({ name: componentName, scope });
  } else {
    const { reducerName } = await prompt(questions_reducer);
    createReducerFiles({ name: reducerName });
  }
};

createComponent();
