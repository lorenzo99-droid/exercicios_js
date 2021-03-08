function handleMouseMove(event) {
  const [clientX, clientY] = [event.clientx, event.clientY];
  console.log(clientX, clientY);
}

const obj = { first: 'Jane', last: 'Doe' };


const {first} = obj;

console.log(first)

    /* _______________________________________________________*/


const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, ...outrosNumeros)

    /* _______________________________________________________*/

company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

const name = [company.name];
const cor = [company.products.socks.colors];

console.log(name, ...cor);
