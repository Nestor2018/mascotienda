async function getShops() {
  return await fetch('http://localhost:3000/initalState', {}).then(response => {
    return response.json();
  });
}

async function getProducts() {
  return await fetch('http://localhost:3004/initalState', {}).then(response => {
    return response.json();
  });
}

export {getShops, getProducts};
