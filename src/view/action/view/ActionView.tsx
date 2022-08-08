import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import MouvementViewItem from 'src/view/mouvement/view/MouvementViewItem';
import SuicideViewItem from 'src/view/suicide/view/SuicideViewItem';
import ViolenceViewItem from 'src/view/violence/view/ViolenceViewItem';
import { Tabs } from 'antd';
import SuicideListFilter from 'src/view/suicide/list/SuicideListFilter';
import SuicideListTable from 'src/view/suicide/list/SuicideListTable';
import ViolenceListFilter from 'src/view/violence/list/ViolenceListFilter';
import ViolenceListTable from 'src/view/violence/list/ViolenceListTable';

const { TabPane } = Tabs;

const ActionView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }
  const onChange = (key: string) => {};
  return (
    <ViewWrapper>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab={i18n('common.informations')} key="1">
          {Boolean(record.sujet) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.sujet')}
            >
              {i18n(
                `entities.action.enumerators.sujet.${record.sujet}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.region) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.region')}
            >
              {i18n(
                `entities.action.enumerators.region.${record.region}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.type) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.type')}
            >
              {i18n(
                `entities.action.enumerators.type.${record.type}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.genre) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.genre')}
            >
              {i18n(
                `entities.action.enumerators.genre.${record.genre}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.categorie) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.action.fields.categorie',
              )}
            >
              {i18n(
                `entities.action.enumerators.categorie.${record.categorie}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.espace) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.espace')}
            >
              {i18n(
                `entities.action.enumerators.espace.${record.espace}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.acteurs) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.acteurs')}
            >
              {i18n(
                `entities.action.enumerators.acteurs.${record.acteurs}`,
              )}
            </Form.Item>
          )}

          {Boolean(record.description) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.action.fields.description',
              )}
            >
              {record.description}
            </Form.Item>
          )}

          {Boolean(record.modeAction) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.action.fields.modeAction',
              )}
            >
              {i18n(
                `entities.action.enumerators.modeAction.${record.modeAction}`,
              )}
            </Form.Item>
          )}
          {Boolean(record.statut) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n('entities.action.fields.statut')}
            >
              {i18n(
                `entities.action.enumerators.statut.${record.statut}`,
              )}
            </Form.Item>
          )}
        </TabPane>
        <TabPane
          tab={i18n('entities.suicide.menu')}
          key="2"
        >
          <SuicideListFilter />
          <SuicideListTable data={record.suicide} />
        </TabPane>
        <TabPane
          tab={i18n('entities.violence.menu')}
          key="3"
        >
          <ViolenceListFilter />
          <ViolenceListTable data={record.violence} />
        </TabPane>
      </Tabs>
    </ViewWrapper>
  );
};

export default ActionView;
