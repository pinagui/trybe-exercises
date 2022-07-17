const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  //Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  /*
  Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

  Modifique o nome da pessoa compradora.
  Modifique o valor total da compra para R$ 50,00.*/
  order.name = 'Luiz Silva';
  order.order.pizza.marguerita.price = 20;

  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price},00`);
}

orderModifier(order);


/* OU
1-

const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);


2-


const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); // Exiba a mensagem desejada utilizando `template literals`
}

orderModifier(order);

*/

