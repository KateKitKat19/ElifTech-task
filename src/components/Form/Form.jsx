import { Formik } from 'formik';
import React from 'react';
import { ValidationSchema } from './Validation';
import { useDispatch } from 'react-redux';
import { submitOrder } from '../../redux/operations';
import {
  Wrap,
  FormStyled,
  Input,
  InputWrap,
  FieldContainer,
  SubmitBtn,
} from './Form.styled';

export const OrderForm = ({ list, clearCart }) => {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
        }}
        onSubmit={(values, { resetForm }) => {
          const dataToSend = { ...values, items: list };
          dispatch(submitOrder(dataToSend));
          resetForm();
          clearCart();
        }}
        validationSchema={ValidationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <FormStyled onSubmit={handleSubmit}>
            <InputWrap>
              <FieldContainer>
                <Input type="text" name="name" placeholder="Name"></Input>
                {errors.name && touched.name && <div>{errors.name}</div>}
              </FieldContainer>

              <FieldContainer>
                <Input type="tel" name="phone" placeholder="Phone number" />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
              </FieldContainer>

              <FieldContainer>
                <Input type="email" name="email" placeholder="Email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </FieldContainer>
              <FieldContainer>
                <Input type="text" name="address" placeholder="Address" />
                {errors.address && touched.address && (
                  <div>{errors.address}</div>
                )}
              </FieldContainer>
            </InputWrap>

            <SubmitBtn type="submit" aria-label="Submit order">
              Submit
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>
    </Wrap>
  );
};

export default OrderForm;
