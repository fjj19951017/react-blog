import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import './index.less';
import 'antd/dist/antd.less';
const { Header, Sider, Content } = Layout;

class App extends Component {

    render() {
        return (
            <Layout>
                <Sider>left sidebar</Sider>
                <Layout>
                    <Header>header</Header>
                    <Content>main content</Content>
                </Layout>
            </Layout>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);