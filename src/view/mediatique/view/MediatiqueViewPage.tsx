import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mediatique/view/mediatiqueViewActions';
import selectors from 'src/modules/mediatique/view/mediatiqueViewSelectors';
import MediatiqueView from 'src/view/mediatique/view/MediatiqueView';
import MediatiqueViewToolbar from 'src/view/mediatique/view/MediatiqueViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const MediatiquePage = (props) => {
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
          [i18n('entities.mediatique.menu'), '/mediatique'],
          [i18n('entities.mediatique.view.title')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}>
            <PageTitle>
              {i18n('entities.mediatique.view.title')}
            </PageTitle>
          </Col>
          <Col span={8} style={{ textAlign: 'end' }}>
            <MediatiqueViewToolbar match={match} />
          </Col>
        </Row>

        <MediatiqueView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default MediatiquePage;
