module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return item.enhancement === 20
    ? { ...item}
    : { ...item, enhancement: item.enhancement + 1 }
}

function fail(item) {
  if(item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  }
  
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
