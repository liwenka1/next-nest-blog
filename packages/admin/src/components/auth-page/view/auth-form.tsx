import { Alert, Button, Form, Input } from 'antd'
import type { FormProps } from 'antd'

interface AuthFormProps {
  type: 'LOGIN' | 'REGISTER'
}

type FieldType = {
  email?: string
  password?: string
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="w-full p-20 max-w-[480px] flex flex-col mx-auto px-[64px] pt-[160px]">
      <div className="flex flex-col mb-[40px] gap-[16px]">
        <h4 className="text-2xl">{type === 'LOGIN' ? 'Sign in to VVenKai' : 'Get started absolutely free'}</h4>
        <div className="flex flex-row gap-[4px] text-sm">
          <p>{type === 'LOGIN' ? 'New user?' : 'Already have an account?'}</p>
          <a className="text-[#00b96b] hover:underline" href={type === 'LOGIN' ? '/auth/register' : '/auth/login'}>
            {type === 'LOGIN' ? 'Create an account' : 'Sign in'}
          </a>
        </div>
      </div>
      {type === 'LOGIN' && (
        <Alert
          className="mb-[24px]"
          description="Use email : demo@minimals.cc / password : demo1234"
          type="info"
          showIcon
        />
      )}
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
        {type === 'LOGIN' && (
          <Form.Item className="self-end underline">
            <a href="/auth/forgot-password">Forgot password?</a>
          </Form.Item>
        )}
        <Form.Item>
          <Button className="w-full" size="large" type="primary" htmlType="submit">
            {type === 'LOGIN' ? 'Login' : 'Create account'}
          </Button>
        </Form.Item>
        {type === 'REGISTER' && (
          <Form.Item>
            By signing up, I agree to&nbsp;
            <span className="underline">Terms of Service</span>
            &nbsp;and&nbsp;
            <span className="underline">Privacy Policy</span>.
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default AuthForm
