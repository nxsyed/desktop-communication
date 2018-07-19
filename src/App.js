import React, { Component } from 'react';
import {MessageGroup} from 'chat-engine-ui';
import './App.css';

import { Layout, Menu, Icon, Card } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

  render() {
    const MessageList = [
      'This is the first messages',
      'This is the second message',
      `This is message contains multiple lines to show the flexibility.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
      into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
      Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
      including versions of Lorem Ipsum.`,
  
  ]
  
    return (
      <Layout>
      <Sider style={{ background: '#E0E2E1', overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Card title="User Name" extra={<a href="#">Settings</a>}>
          <p>details about user</p>
        </Card>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text"> Channel 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Channel 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
    <Layout style={{ background: '#fff', marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 20 }}> Name of channel and people in it</Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <MessageGroup 
                messages={MessageList}
                sender
            />
            <MessageGroup 
                messages={MessageList}
                background='#d02129' 
                color='#ffffff'
            />
      </Content>
      <Footer style={{ background:'#fff', textAlign: 'center' }}>
        Input Box Here
      </Footer>
    </Layout>
  </Layout>
    );
  }
}

export default App;
