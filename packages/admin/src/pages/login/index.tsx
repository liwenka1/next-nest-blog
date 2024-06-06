import type { FormProps } from 'antd'
import { Alert, Button, Form, Input } from 'antd'

import LoingPng from '@/assets/login.png'

type FieldType = {
  email?: string
  password?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Login = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center">
        <img src={LoingPng} alt="login" />
      </div>
      <div className="w-full p-20 max-w-[480px] flex flex-col mx-auto px-[64px] pt-[160px]">
        <div className="flex flex-col mb-[40px] gap-[16px]">
          <h4 className="text-2xl">Sign in to VVenKai</h4>
          <div className="flex flex-row gap-[4px] text-sm">
            <p>New user?</p>
            <a className="text-[#00b96b] hover:underline" href="">
              Create an account
            </a>
          </div>
        </div>
        <Alert
          className="mb-[24px]"
          description="Use email : demo@minimals.cc / password : demo1234"
          type="info"
          showIcon
        />
        <Form
          className="w-full flex flex-col"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType> name="email" rules={[{ required: true, message: 'Email address is required!' }]}>
            <Input size="large" placeholder="Email address" />
          </Form.Item>
          <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Password is required!' }]}>
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item className="self-end underline">
            <a>Forgot password?</a>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
