module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return item.enhancement === 20
    ? { ...item}
    : { ...item, enhancement: item.enhancemen++ }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
