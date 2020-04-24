import * as Components from '../components';

console.log(Components);

const registeredComponents = {};

function register(compName, compEntity) {
  registeredComponents[compName] = compEntity;
}

function getComponent(name) {
  return registeredComponents[name];
}

function registerAll() {
  Object.keys(Components).forEach((compName) => {
    register(compName, Components[compName]);
  });
}

export { getComponent, registerAll };
