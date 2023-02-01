import React from 'react'

export const Login = () => {
  return (
    <Form.Group><Form.Control
            name="username"
            placeholder="Email Address/Username"
            style={{ marginBottom: "1rem" }}
         
          />
          <Form.Control
            name="password"
           
            placeholder="Password"
            style={{ marginBottom: "1rem" }}
            type="password"
          />
        </Form.Group>
  )
}
