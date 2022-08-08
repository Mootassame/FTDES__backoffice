import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Card, Col, Form, Row } from 'antd';
import { Tabs } from 'antd';
import ActionListFilter from 'src/view/action/list/ActionListFilter';
import ActionListTable from 'src/view/action/list/ActionListTable';
import Timeline from 'react-calendar-timeline';

import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import ProtestIcon from 'src/view/shared/ProtestIcon';
import SuicideIcon from 'src/view/shared/SuicideIcon';
import ViolenceIcon from 'src/view/shared/ViolenceIcon';

const { TabPane } = Tabs;

const MouvementView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  const onChange = (key: string) => {};

  const groups = [
    { id: 1, title: 'Actions' },
    { id: 2, title: 'Suicide' },
    { id: 3, title: 'Violence' },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour'),
    },
    {
      id: 4,
      group: 3,
      title: 'item 4',
      start_time: moment().add(3, 'hour'),
      end_time: moment().add(4, 'hour'),
    },
    {
      id: 5,
      group: 1,
      title: 'item 5',
      start_time: moment().add(1, 'hour'),
      end_time: moment().add(5, 'hour'),
    },
  ];

  return (
    <ViewWrapper>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab={i18n('common.informations')} key="1">
          <fieldset style={{ borderTopWidth: 0 }}>
            {Boolean(record.sujet) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.mouvement.fields.sujet',
                )}
              >
                {i18n(
                  `entities.mouvement.enumerators.sujet.${record.sujet}`,
                )}
              </Form.Item>
            )}

            {Boolean(record.date) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.mouvement.fields.date',
                )}
              >
                {record.date}
              </Form.Item>
            )}
            {Boolean(record.statut) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.mouvement.fields.statut',
                )}
              >
                {i18n(
                  `entities.mouvement.enumerators.statut.${record.statut}`,
                )}
              </Form.Item>
            )}
            {Boolean(record.observation) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.mouvement.fields.observation',
                )}
              >
                {record.observation}
              </Form.Item>
            )}
          </fieldset>
        </TabPane>
        <TabPane tab={i18n('entities.action.menu')} key="2">
          <ActionListFilter />
          <ActionListTable data={record.actions} />
        </TabPane>
        <TabPane tab={i18n('dashboard.menu')} key="3">
          <Row>
            <Col span={8}>
              <Card title={i18n('common.manifestation')}>
                <div
                  id="container"
                  style={{ position: 'relative' }}
                >
                  <div
                    id="div1"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <ProtestIcon />
                  </div>
                  <div
                    id="div2"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      alignSelf: 'center',
                    }}
                  >
                    <h1
                      style={{
                        textAlign: 'center',
                        position: 'absolute',
                        left: '2.5rem',
                        fontSize: '5rem',
                        color: 'var(--secondary-color)',
                      }}
                    >
                      8
                    </h1>
                  </div>
                </div>
                <ProtestIcon />
              </Card>
            </Col>
            <Col span={8}>
              <Card title={i18n('entities.suicide.menu')}>
                <div
                  id="container"
                  style={{ position: 'relative' }}
                >
                  <div
                    id="div1"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <SuicideIcon />
                  </div>
                  <div
                    id="div2"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      alignSelf: 'center',
                    }}
                  >
                    <h1
                      style={{
                        textAlign: 'center',
                        position: 'absolute',
                        left: '2.5rem',
                        fontSize: '5rem',
                        color: 'var(--secondary-color)',
                      }}
                    >
                      8
                    </h1>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card title={i18n('entities.violence.menu')}>
                <div
                  id="container"
                  style={{ position: 'relative' }}
                >
                  <div
                    id="div1"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <ViolenceIcon />
                  </div>
                  <div
                    id="div2"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      alignSelf: 'center',
                    }}
                  >
                    <h1
                      style={{
                        textAlign: 'center',
                        position: 'absolute',
                        left: '2.5rem',
                        fontSize: '5rem',
                        color: 'var(--secondary-color)',
                      }}
                    >
                      8
                    </h1>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div>
                <Card>
                  <Timeline
                    groups={groups}
                    items={items}
                    defaultTimeStart={moment().add(
                      -12,
                      'hour',
                    )}
                    defaultTimeEnd={moment().add(
                      12,
                      'hour',
                    )}
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </ViewWrapper>
  );
};

export default MouvementView;
