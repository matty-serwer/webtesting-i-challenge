module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return item.enhancement === 20
    ? { ...item }
    : { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if (item.enhancement < 15) {
    item = { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    item = { ...item, durability: item.durability - 10 };
  }

  if (item.enhancement >= 16) {
    item = { ...item, enhancement: item.enhancement - 1 };
  }
  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.name.charAt(0) === '[') {
    item.name = item.name.slice((item.name.indexOf(']')) + 2)
  }

  if (item.enhancement === 0) {
    return { ...item };
  } else {
    return { ...item, name: `[+${item.enhancement}] ${item.name}`};
  }
  
}
