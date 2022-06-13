import React, { createContext, useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Switch, Space, Menu } from 'antd';
import { UserOutlined, CheckCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { Contacts } from './components/Contacts';
import { Profile } from './components/Profile';
import { Tasks } from './components/Tasks';
import { PlantImage, RocketImage } from './images';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Sider, Content } = Layout;

export const ThemeContext = createContext('work');

function App() {
  const [theme, setTheme] = useState('work');
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(['profile']);
  const location = useLocation();

  const onSwitchThemeHandler = checked => {
    setTheme(checked ? 'home' : 'work');
  };

  useEffect(() => {
    const selectedKey = location.pathname.slice(1);
    if (selectedKey) {
      setSelectedMenuKeys([selectedKey]);
    } else {
      setSelectedMenuKeys('profile');
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout className={`cabinet cabinet__${theme}`}>
        <Header className="cabinet__header">
          <Space size="middle">
            <img src={RocketImage} alt="rocket" height={30} />
            <span>На работу</span>
            <Switch onChange={onSwitchThemeHandler} />
            <span>Домой</span>
            <img src={PlantImage} alt="plant" height={30} />
          </Space>
        </Header>
        <Layout>
          <Sider className="cabinet__sider" width={theme === 'work' ? 230 : 0}>
            <Menu className="cabinet__menu cabinet__menu__left" selectedKeys={selectedMenuKeys} items={[
              { label: <Link to="/">Профиль</Link>, icon: <UserOutlined className="cabinet__menu__icon" />, key: 'profile' },
              { label: <Link to="/tasks">Задачи</Link>, icon: <CheckCircleOutlined className="cabinet__menu__icon" />, key: 'tasks' },
              { label: <Link to="/contacts">Коллеги</Link>, icon: <TeamOutlined className="cabinet__menu__icon" />, key: 'contacts' },
            ]} />
          </Sider>
          <Content className="cabinet__content">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="contacts" element={<Contacts />} />
            </Routes>
          </Content>
          <Sider className="cabinet__sider" width={theme === 'home' ? 230 : 0}>
            <Menu theme="dark" className="cabinet__menu cabinet__menu__right" selectedKeys={selectedMenuKeys} items={[
              { label: <Link to="/">Профиль</Link>, icon: <UserOutlined className="cabinet__menu__icon" />, key: 'profile' },
              { label: <Link to="/tasks">Дела</Link>, icon: <CheckCircleOutlined className="cabinet__menu__icon" />, key: 'tasks' },
              { label: <Link to="/contacts">Друзья</Link>, icon: <TeamOutlined className="cabinet__menu__icon" />, key: 'contacts' },
            ]} />
          </Sider>
        </Layout>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
