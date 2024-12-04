async function products(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export let data = await products('https://fakestoreapi.com/products?limit=4');

