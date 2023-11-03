import vars from "./vars.json";

/**
 * 设置主题样式变量
 * @param {*} name
 * @param {*} value
 * @returns
 */
export const setVar = (name, value) => {
  vars[name] = value;
  return setVar;
};

/**
 * 批量设置主题样式变量
 * @param {*} vars
 */
export const setVars = (vars = {}) => {
  Object.assign(vars, vars);
};

export { vars };

export default vars;
