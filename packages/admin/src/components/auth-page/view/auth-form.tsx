import { Alert, Button, Form, Input } from 'antd'
import type { FormProps } from 'antd'
import { ExclamationCircleFilled, LeftOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import LockSvg from '@/assets/auth/lock.svg'

interface AuthFormProps {
  type: 'LOGIN' | 'REGISTER' | 'FORTPASSWORD'
}

type FieldType = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const buttonDescription = {
    LOGIN: 'Login',
    REGISTER: 'Create account',
    FORTPASSWORD: 'Send Request'
  }

  const navigate = useNavigate()
  const handleClick = (path: string) => {
    navigate(path)
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
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
      {type === 'FORTPASSWORD' && <img className="h-[96px]" src={LockSvg} alt="LockSvg" />}
      {type !== 'FORTPASSWORD' ? (
        <div className="mb-[40px] flex flex-col gap-[16px]">
          <h4 className="text-2xl font-[700]">
            {type === 'LOGIN' ? 'Sign in to VVenKai' : 'Get started absolutely free'}
          </h4>
          <div className="flex flex-row gap-[4px] text-sm">
            <p>{type === 'LOGIN' ? 'New user?' : 'Already have an account?'}</p>
            <span
              className="cursor-pointer text-[#00b96b] hover:underline"
              onClick={() => handleClick(type === 'LOGIN' ? '/auth/register' : '/auth/login')}
            >
              {type === 'LOGIN' ? 'Create an account' : 'Sign in'}
            </span>
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
          className="mb-[24px] border-0 bg-[#e6ffff]"
          description={
            <>
              Use email :&nbsp;<span className="font-[700]">demo@minimals.ccg</span> password :&nbsp;
              <span className="font-[700]">demo1234</span>
            </>
          }
          showIcon
          icon={<ExclamationCircleFilled style={{ color: 'rgb(0, 184, 217)' }} />}
        />
      )}
      <Form
        className="flex w-full flex-col"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {type === 'REGISTER' && (
          <div className="flex gap-[16px]">
            <Form.Item<FieldType> name="firstName" rules={[{ required: true, message: 'First name is required!' }]}>
              <Input size="large" placeholder="First name" />
            </Form.Item>
            <Form.Item<FieldType> name="lastName" rules={[{ required: true, message: 'Last name is required!' }]}>
              <Input size="large" placeholder="Last name" />
            </Form.Item>
          </div>
        )}
        <Form.Item<FieldType> name="email" rules={[{ required: true, message: 'Email address is required!' }]}>
          <Input className="peer" size="large" placeholder="Email address" />
        </Form.Item>
        {type !== 'FORTPASSWORD' && (
          <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Password is required!' }]}>
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
        )}
        {type === 'LOGIN' && (
          <Form.Item className="self-end">
            <span className="cursor-pointer underline" onClick={() => handleClick('/auth/forgot-password')}>
              Forgot password?
            </span>
          </Form.Item>
        )}
        <Form.Item>
          <Button className="w-full" size="large" type="primary" htmlType="submit">
            {buttonDescription[type]}
          </Button>
        </Form.Item>
        {type === 'REGISTER' && (
          <Form.Item>
            <div className="text-xs">
              By signing up, I agree to&nbsp;
              <span className="underline">Terms of Service</span>
              &nbsp;and&nbsp;
              <span className="underline">Privacy Policy</span>.
            </div>
          </Form.Item>
        )}
        {type === 'FORTPASSWORD' && (
          <Form.Item>
            <div className="flex cursor-pointer items-center justify-center" onClick={() => handleClick('/auth/login')}>
              <LeftOutlined className="h-[16px] w-[16px]" />
              <span className="hover:underline">Return to sign in</span>
            </div>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default AuthForm
