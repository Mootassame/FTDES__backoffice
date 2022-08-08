import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artiste/view/artisteViewActions';
import selectors from 'src/modules/artiste/view/artisteViewSelectors';
import ArtisteView from 'src/view/artiste/view/ArtisteView';
import ArtisteViewToolbar from 'src/view/artiste/view/ArtisteViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ArtistePage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.artiste.menu'), '/artiste'],
          [i18n('entities.artiste.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.artiste.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <ArtisteViewToolbar match={match} />
          </Col>
        </Row>
        <ArtisteView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ArtistePage;
