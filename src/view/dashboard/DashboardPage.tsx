import { Card, Col, Row, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { i18n } from 'src/i18n';
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import DashboardHorizontalBarChart from 'src/view/dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from 'src/view/dashboard/DashboardLineChart';
import DashboardPolarChart from 'src/view/dashboard/DashboardPolarChart';

import { Image } from 'antd';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import six from '../../images/6.jpg';

const DashboardPage = (props) => {
  const { TabPane } = Tabs;
  const onChange = (key: string) => {};
  const [visible, setVisible] = useState(false);
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab={i18n('common.statistiques')} key="1">
        <>
          <Row gutter={24}>
            <Col span={12}>
              <Card
                bodyStyle={{
                  padding: 4,
                }}
              >
                <DashboardDoughnutChart />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                bodyStyle={{
                  padding: 4,
                }}
              >
                <DashboardPolarChart />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '8px' }} gutter={24}>
            <Col span={12}>
              <Card
                bodyStyle={{
                  padding: 4,
                }}
              >
                <DashboardLineChart />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                bodyStyle={{
                  padding: 4,
                }}
              >
                <DashboardBarChart />
              </Card>
            </Col>
          </Row>
        </>
      </TabPane>
      <TabPane tab={i18n('common.infographies')} key="2">
        <Row>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={one} />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={two} />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={three} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={four} />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={five} />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                marginRight: '8px',
                borderRadius: '8px',
              }}
            >
              <Image width={'100%'} src={six} />
            </Card>
          </Col>
        </Row>
      </TabPane>
      {/* <TabPane
        tab={i18n('common.cartesInteractives')}
        key="3"
      >
        <MapChart />
      </TabPane> */}
    </Tabs>
  );
};
export default DashboardPage;
