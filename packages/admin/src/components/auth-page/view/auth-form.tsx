import { Alert, Button, Form, Input } from 'antd'
import type { FormProps } from 'antd'

interface AuthFormProps {
  type: 'LOGIN' | 'REGISTER' | 'FORTPASSWORD'
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

  const buttonDescription = {
    LOGIN: 'Login',
    REGISTER: 'Create account',
    FORTPASSWORD: 'Send Request'
  }

  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col p-20 px-[64px] pt-[160px]">
      <div className="mb-[40px] flex flex-col gap-[16px]">
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
        className="flex w-full flex-col"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> name="email" rules={[{ required: true, message: 'Email address is required!' }]}>
          <Input size="large" placeholder="Email address" />
        </Form.Item>
        {type !== 'FORTPASSWORD' && (
          <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Password is required!' }]}>
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
        )}
        {type === 'LOGIN' && (
          <Form.Item className="self-end underline">
            <a href="/auth/forgot-password">Forgot password?</a>
          </Form.Item>
        )}
        <Form.Item>
          <Button className="w-full" size="large" type="primary" htmlType="submit">
            {buttonDescription[type]}
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
