export function minxins(...list) {

  return function(target) {
    Object.assign(target.prototype, ...list);
    console.log(...list);
  };

}
