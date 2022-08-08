import { Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import SiderWrapper from 'src/view/layout/styles/SiderWrapper';
import { Link } from 'react-router-dom';
import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import actions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import menus from 'src/view/menus';
import { i18n } from 'src/i18n';

import {
  DownCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';

import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Panel } = Collapse;

const { Sider } = Layout;

const AppMenu = (props) => {
  const dispatch = useDispatch();
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );
  const logoUrl = useSelector(authSelectors.selectLogoUrl);

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  const toggleMenuOnResize = () => {
    window.innerWidth < 576 ? hideMenu() : showMenu();
  };

  useEffect(() => {
    toggleMenuOnResize();
    window.addEventListener('resize', toggleMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedKeys = () => {
    const url = props.url;
    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (match) {
      return [match.path];
    }
  };

  const hideMenu = () => {
    dispatch(actions.doHideMenu());
  };

  const showMenu = () => {
    dispatch(actions.doShowMenu());
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
      permission,
    );
  };

  return (
    <SiderWrapper
      style={{
        display: menuVisible ? 'block' : 'none',
      }}
    >
      <Sider theme="dark" trigger={null}>
        <div className="logo">
          {logoUrl ? (
            <Link to="/">
              <img
                src={logoUrl}
                width="164px"
                alt={i18n('app.title')}
              />
            </Link>
          ) : (
            <h2>
              <Link to="/">{i18n('app.title')}</Link>
            </h2>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys()}
        >
          <ul className="menu-ul">
            {menus
              .filter((menu) =>
                match(menu.permissionRequired),
              )
              .map((menu, index) => (
                <li
                  key={index}
                  className={`menu-li text-nowrap`}
                >
                  {menu.subMenu ? (
                    <>
                      <Collapse
                        accordion
                        bordered={false}
                        className={
                          'panel-header text-nowrap'
                        }
                        style={{ fontWeight: 'bold' }}
                        expandIcon={({ isActive }) =>
                          isActive ? (
                            <DownCircleOutlined
                              style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                              }}
                            />
                          ) : (
                            <RightCircleOutlined
                              style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                              }}
                            />
                          )
                        }
                      >
                        <Panel
                          className="panel-body"
                          header={menu.label}
                          key={menu.id}
                        >
                          {menu.subMenu.map((sub) => (
                            <div
                              className={
                                selectedKeys() === sub.path
                                  ? 'selected'
                                  : ''
                              }
                            >
                              <Link to={sub.path}>
                                <i
                                  className={sub.icon}
                                  style={{
                                    color: 'white',
                                  }}
                                ></i>
                                &nbsp; &nbsp;
                                <span
                                  style={{
                                    color: 'white',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  {sub.label}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </Panel>
                      </Collapse>
                    </>
                  ) : (
                    <li
                      key={index}
                      className={`menu-li text-nowrap`}
                      style={{
                        cursor: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}
                    >
                      <Link
                        to={menu.path}
                        className={
                          'panel-header text-nowrap'
                        }
                        style={{ marginLeft: '16px' }}
                      >
                        <i
                          className={menu.icon}
                          style={{
                            color: 'white',
                            fontSize: '16px',
                          }}
                        ></i>
                        &nbsp; &nbsp;
                        <span
                          style={{
                            fontSize: '16px',
                            fontFamily:
                              'proxima-nova, sans-serif',
                            color: 'white',
                          }}
                        >
                          {menu.label}
                        </span>
                      </Link>
                    </li>
                  )}
                </li>
              ))}
          </ul>
        </Menu>
      </Sider>
    </SiderWrapper>
  );
};

export default AppMenu;
