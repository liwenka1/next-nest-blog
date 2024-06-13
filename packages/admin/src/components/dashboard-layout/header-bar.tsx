import { Button, Layout } from 'antd'

const { Header } = Layout

const HeaderBar = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Button type="text">collapsed</Button>
    </Header>
  )
}

export default HeaderBar
