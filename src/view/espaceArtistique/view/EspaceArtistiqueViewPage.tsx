import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/espaceArtistique/view/espaceArtistiqueViewActions';
import selectors from 'src/modules/espaceArtistique/view/espaceArtistiqueViewSelectors';
import EspaceArtistiqueView from 'src/view/espaceArtistique/view/EspaceArtistiqueView';
import EspaceArtistiqueViewToolbar from 'src/view/espaceArtistique/view/EspaceArtistiqueViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EspaceArtistiquePage = (props) => {
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
          [i18n('entities.espaceArtistique.menu'), '/espace-artistique'],
          [i18n('entities.espaceArtistique.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.espaceArtistique.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <EspaceArtistiqueViewToolbar match={match} />
          </Col>
        </Row>
        <EspaceArtistiqueView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default EspaceArtistiquePage;
