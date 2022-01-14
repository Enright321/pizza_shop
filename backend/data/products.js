const products = [
  {
    name: '7up',
    image: '/images/7up.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Drinks',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Alfredo',
    image: '/images/alfredopasta.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pastas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'BBQ Wings',
    image: '/images/bbqwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'BLT',
    image: '/images/blt.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Bosco Sticks',
    image: '/images/boscosticks.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Breadsticks',
    image: '/images/breadsticks.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Canneloni',
    image: '/images/canneloni.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pastas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Cheeseburger Pizza',
    image: '/images/cheeseburgerpizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Chef Salad',
    image: '/images/chefsalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Chicken Alfredo',
    image: '/images/chickenalfredo.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pastas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Chicken Salad',
    image: '/images/chickensalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Chicken Strips',
    image: '/images/chickenstrips.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Cordon Bleu Pizza',
    image: '/images/cordonbleupizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Deluxe Pizza',
    image: '/images/deluxepizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Deluxe Salad',
    image: '/images/deluxesalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Diet Pepsi',
    image: '/images/dietpepsi.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Drinks',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Dinner Salad',
    image: '/images/dinnersalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Fries',
    image: '/images/fries.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Garlic Bread',
    image: '/images/garlicbread.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Ham Sandwich',
    image: '/images/hamsub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Hawaiian Pizza',
    image: '/images/hawaiianpizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Honey Mustard Wings',
    image: '/images/honeymustardwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Hot Wings',
    image: '/images/hotwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Meatball Sub',
    image: '/images/meatballsub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Meat Lovers Pizza',
    image: '/images/meatloverpizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Mild Wings',
    image: '/images/mildwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Mostaccioli',
    image: '/images/mostaccioli.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pastas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Mountain Dew',
    image: '/images/mountaindew.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Drinks',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Mule Salad',
    image: '/images/mulesalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Pepsi',
    image: '/images/pepsi.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Drinks',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Cheese Pizza',
    image: '/images/pizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Plain Wings',
    image: '/images/plainwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Roast Beef Sandwich',
    image: '/images/roastbeefsub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Salad',
    image: '/images/salad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Salami Sandwich',
    image: '/images/salamisub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Special',
    image: '/images/specialsub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Turkey, Ham, and Cheese',
    image: '/images/subs.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Toasted Ravs',
    image: '/images/t-rav.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Teriyaki Wings',
    image: '/images/teriyakiwings.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Appetizers',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Turkey Cheese Sub',
    image: '/images/turkeycheesesub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Turkey Club',
    image: '/images/turkeyclub.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Sandwiches',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Veggie Pizza',
    image: '/images/veggiepizza.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Pizzas',
    price: 10.0,
    countInStock: 10,
  },
  {
    name: 'Veggie Salad',
    image: '/images/veggiesalad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Eaque rerum! Provident similique accusantium nemo autem.',
    category: 'Salads',
    price: 10.0,
    countInStock: 10,
  },
];

export default products;
