import React from 'react'
import { Form, Input, Button, message } from "antd"
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../api/users';

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("values: ", values);
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      navigate("/")
    } catch (err) {
      console.log("Error occured: ", err);
    }

  }

  return (
    <>
      <main className="App-header">
        <h1>Login to BookMyShow</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>

            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is Required" },
                { type: "email", message: "Enter a valid Email" }
              ]}
            >
              <Input type="text" placeholder="Enter Your Email"></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[
                { required: true, message: "Password is required" }
              ]}
            >
              <Input type="password" placeholder="Enter Your Password"></Input>
            </Form.Item>

            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              New User? <Link to="/register">Register Here</Link>
            </p>
          </div>

        </section>


      </main>

    </>
  )
}

export default Login