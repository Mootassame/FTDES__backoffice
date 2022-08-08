import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/view/userViewActions';
import selectors from 'src/modules/user/view/userViewSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserToolbar from 'src/view/user/list/UserToolbar';
import UserView from 'src/view/user/view/UserView';
import UserViewToolbar from 'src/view/user/view/UserViewToolbar';

const UserViewPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);

  const user = useSelector(selectors.selectUser);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        header
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.view.title')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}><PageTitle>{i18n('user.view.title')}</PageTitle></Col>
          <Col span={8}style={{textAlign:"end"}}> <UserViewToolbar /></Col>
        </Row>
       

        <UserView loading={loading} user={user} />
      </ContentWrapper>
    </>
  );
};

export default UserViewPage;
