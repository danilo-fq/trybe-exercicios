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
  return `Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order['phoneNumber']}, ${order.address.street}, N°: ${order['address']['number']}, AP: ${order.address.apartment}`
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Danilo Ferreira';
  order.payment = '50';
  const pizzas = Object.keys(order.order.pizza);
  let result = `Olá ${order['name']}, o ${order.payment[0]} do seu pedido de `;
  
  console.log(result);

}

orderModifier(order);