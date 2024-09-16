import * as React from 'react';

import * as Form from '@radix-ui/react-form';

function LoginForm  () {
    const [serverErrors, setServerErrors] = React.useState({
        email: false,
        password: false,
      });
  return (
    <Form.Root>
   
    <Form.Field name="email" serverInvalid={serverErrors.email}>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" required />
      <Form.Message match="valueMissing">
        Please enter your email.
      </Form.Message>
      <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
        Please provide a valid email.
      </Form.Message>
    </Form.Field>

    <Form.Field name="password" serverInvalid={serverErrors.password}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" required />
      <Form.Message match="valueMissing">
        Please enter a password.
      </Form.Message>
      {serverErrors.password && (
        <Form.Message>
          Please provide a valid password. It should contain at least 1 number
          and 1 special character.
        </Form.Message>
      )}
    </Form.Field>

    <Form.Submit>Submit</Form.Submit>
  </Form.Root>
  )
}

export default LoginForm;