import { Alert, Button, Form, Input } from 'antd'
import type { FormProps } from 'antd'
import clsx from 'clsx'

import AuthLockSvg from '@/assets/auth-lock.svg'

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
    <div
      className={clsx(
        'mx-auto flex w-full flex-col',
        type !== 'FORTPASSWORD'
          ? 'max-w-[480px] px-[64px] pt-[160px]'
          : 'max-w-[400px] justify-center pb-[96px] pt-[96px] text-center'
      )}
    >
      <img className="h-[96px]" src={AuthLockSvg} alt="" />
      {type !== 'FORTPASSWORD' ? (
        <div className="mb-[40px] flex flex-col gap-[16px]">
          <h4 className="text-2xl">{type === 'LOGIN' ? 'Sign in to VVenKai' : 'Get started absolutely free'}</h4>
          <div className="flex flex-row gap-[4px] text-sm">
            <p>{type === 'LOGIN' ? 'New user?' : 'Already have an account?'}</p>
            <a className="text-[#00b96b] hover:underline" href={type === 'LOGIN' ? '/auth/register' : '/auth/login'}>
              {type === 'LOGIN' ? 'Create an account' : 'Sign in'}
            </a>
          </div>
        </div>
      ) : (
        <div className="mb-[40px] mt-[24px] flex flex-col gap-[8px]">
          <h3 className="text-3xl font-[700]">Forgot your password?</h3>
          <p className="text-sm font-[400] text-gray-400">
            Please enter the email address associated with your account and We will email you a link to reset your
            password.
          </p>
        </div>
      )}
      {type === 'LOGIN' && (
        <Alert
          className="mb-[24px]"
          description="Use email : demo@minimals.ccg / password : demo1234"
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
        {type === 'FORTPASSWORD' && (
          <Form.Item className="cursor-pointer hover:underline">
            <a href="/auth/login">Return to sign in</a>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default AuthForm
