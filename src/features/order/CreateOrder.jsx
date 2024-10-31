import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../UI/Button';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const CreateOrder = () => {
  const navigation = useNavigation();
  // const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();

  const isLoading = navigation.state === 'loading';
  const cart = fakeCart;

  return (
    <div className='my-10'>
      <h2>Ready to order? Let's go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input className='input' type='text' name='customer' required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className='input' type='tel' name='phone' required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className='input' type='text' name='address' required />
          </div>
        </div>

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <Button type='primary' isDisabled={isLoading}>
            {isLoading ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
