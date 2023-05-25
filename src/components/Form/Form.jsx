import { Formik, Field, Form } from 'formik';
import React from 'react';
import { ValidationSchema } from './Validation';
import { useDispatch } from 'react-redux';
import { submitOrder } from '../../redux/operations';

export const OrderForm = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
        }}
        onSubmit={(values, { resetForm }) => {
          const dataToSend = { ...values, items: list };
          console.log('OrderForm   dataToSend:', dataToSend);
          dispatch(submitOrder(dataToSend));
          resetForm();
        }}
        validationSchema={ValidationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Field type="text" name="name" placeholder="Name" />
            {errors.name && touched.name && <div>{errors.name}</div>}

            <Field type="tel" name="phone" placeholder="Phone number" />
            {errors.phone && touched.phone && <div>{errors.phone}</div>}

            <Field type="email" name="email" placeholder="Email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field type="text" name="address" placeholder="Address" />
            {errors.address && touched.address && <div>{errors.address}</div>}

            <button type="submit" aria-label="Submit order">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
