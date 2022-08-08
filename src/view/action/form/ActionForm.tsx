import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Row, Tooltip } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import actionEnumerators from 'src/modules/action/actionEnumerators';
import MouvementAutocompleteFormItem from 'src/view/mouvement/autocomplete/MouvementAutocompleteFormItem';
import SuicideAutocompleteFormItem from 'src/view/suicide/autocomplete/SuicideAutocompleteFormItem';
import ViolenceAutocompleteFormItem from 'src/view/violence/autocomplete/ViolenceAutocompleteFormItem';
import forumEnumerators from 'src/modules/forum/forumEnumerators';

import { Tabs } from 'antd';
import SuicideListFilter from 'src/view/suicide/list/SuicideListFilter';
import SuicideListTable from 'src/view/suicide/list/SuicideListTable';
import ViolenceListFilter from 'src/view/violence/list/ViolenceListFilter';
import ViolenceListTable from 'src/view/violence/list/ViolenceListTable';
import SuicideToolbar from 'src/view/suicide/list/SuicideListToolbar';
import ViolenceToolbar from 'src/view/violence/list/ViolenceListToolbar';
import PageTitle from 'src/view/shared/styles/PageTitle';

const { TabPane } = Tabs;

const schema = yup.object().shape({
  sujet: yupFormSchemas.enumerator(
    i18n('entities.action.fields.sujet'),
    {
      required: true,
      options: actionEnumerators.sujet,
    },
  ),
  region: yupFormSchemas.enumerator(
    i18n('entities.action.fields.region'),
    {
      required: true,
      options: actionEnumerators.region,
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.action.fields.type'),
    {
      required: true,
      options: actionEnumerators.type,
    },
  ),
  genre: yupFormSchemas.enumerator(
    i18n('entities.action.fields.genre'),
    {
      required: true,
      options: actionEnumerators.genre,
    },
  ),
  categorie: yupFormSchemas.enumerator(
    i18n('entities.action.fields.categorie'),
    {
      required: true,
      options: actionEnumerators.categorie,
    },
  ),
  espace: yupFormSchemas.enumerator(
    i18n('entities.action.fields.espace'),
    {
      required: true,
      options: actionEnumerators.espace,
    },
  ),
  acteurs: yupFormSchemas.enumerator(
    i18n('entities.action.fields.acteurs'),
    {
      required: true,
      options: actionEnumerators.acteurs,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.action.fields.description'),
    {},
  ),
  modeAction: yupFormSchemas.enumerator(
    i18n('entities.action.fields.modeAction'),
    {
      required: true,
      options: actionEnumerators.modeAction,
    },
  ),
  mouvement: yupFormSchemas.relationToOne(
    i18n('entities.action.fields.mouvement'),
    {},
  ),
  suicide: yupFormSchemas.relationToMany(
    i18n('entities.action.fields.suicide'),
    {},
  ),
  violence: yupFormSchemas.relationToMany(
    i18n('entities.action.fields.violence'),
    {},
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.action.fields.statut'),
    {
      required: true,
      options: actionEnumerators.statut,
    },
  ),
});

const ActionForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      sujet: record.sujet,
      region: record.region,
      type: record.type,
      genre: record.genre,
      categorie: record.categorie,
      espace: record.espace,
      acteurs: record.acteurs,
      description: record.description,
      modeAction: record.modeAction,
      mouvement: record.mouvement,
      suicide: record.suicide || [],
      violence: record.violence || [],
      statut: record.statut,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const onChange = (key: string) => {};

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Row gutter={24}>
            <Col span={16}>
              <PageTitle>{props.title}</PageTitle>
            </Col>
            <Col span={8} style={{ textAlign: 'end' }}>
              <Form.Item
                className="form-buttons"
                {...tailFormItemLayout}
              >
                <Tooltip title={i18n('common.save')}>
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit(onSubmit)}
                    icon={<SaveOutlined />}
                  ></Button>
                </Tooltip>

                <Tooltip title={i18n('common.reset')}>
                  <Button
                    disabled={saveLoading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  ></Button>
                </Tooltip>

                {props.onCancel && (
                  <Tooltip title={i18n('common.cancel')}>
                    <Button
                      disabled={saveLoading}
                      onClick={() => props.onCancel()}
                      icon={<CloseOutlined />}
                    ></Button>
                  </Tooltip>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Tabs
                defaultActiveKey="1"
                onChange={onChange}
              >
                <TabPane
                  tab={i18n('common.informations')}
                  key="1"
                >
                  <fieldset style={{ borderTopWidth: 0 }}>
                    <SelectFormItem
                      name="sujet"
                      label={i18n(
                        'entities.action.fields.sujet',
                      )}
                      options={actionEnumerators.sujet.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.sujet.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="region"
                      label={i18n(
                        'entities.action.fields.region',
                      )}
                      options={actionEnumerators.region.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.region.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="type"
                      label={i18n(
                        'entities.action.fields.type',
                      )}
                      options={actionEnumerators.type.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.type.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="genre"
                      label={i18n(
                        'entities.action.fields.genre',
                      )}
                      options={actionEnumerators.genre.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.genre.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="categorie"
                      label={i18n(
                        'entities.action.fields.categorie',
                      )}
                      options={actionEnumerators.categorie.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.categorie.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="espace"
                      label={i18n(
                        'entities.action.fields.espace',
                      )}
                      options={actionEnumerators.espace.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.espace.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="acteurs"
                      label={i18n(
                        'entities.action.fields.acteurs',
                      )}
                      options={actionEnumerators.acteurs.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.acteurs.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />

                    <SelectFormItem
                      name="modeAction"
                      label={i18n(
                        'entities.action.fields.modeAction',
                      )}
                      options={actionEnumerators.modeAction.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.modeAction.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.action.fields.statut',
                      )}
                      options={actionEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="description"
                      label={i18n(
                        'entities.action.fields.description',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <div
                      style={{
                        display: 'none',
                      }}
                    >
                      <MouvementAutocompleteFormItem
                        name="mouvement"
                        label={i18n(
                          'entities.action.fields.sujet',
                        )}
                        options={actionEnumerators.sujet.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.action.enumerators.sujet.${value}`,
                            ),
                          }),
                        )}
                        required={true}
                        layout={formItemLayout}
                      />
                    </div>
                    <SelectFormItem
                      name="region"
                      label={i18n(
                        'entities.action.fields.region',
                      )}
                      options={actionEnumerators.region.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.region.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="type"
                      label={i18n(
                        'entities.action.fields.type',
                      )}
                      options={actionEnumerators.type.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.type.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="genre"
                      label={i18n(
                        'entities.action.fields.genre',
                      )}
                      options={actionEnumerators.genre.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.genre.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="categorie"
                      label={i18n(
                        'entities.action.fields.categorie',
                      )}
                      options={actionEnumerators.categorie.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.categorie.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="espace"
                      label={i18n(
                        'entities.action.fields.espace',
                      )}
                      options={actionEnumerators.espace.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.espace.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="acteurs"
                      label={i18n(
                        'entities.action.fields.acteurs',
                      )}
                      options={actionEnumerators.acteurs.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.acteurs.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />

                    <SelectFormItem
                      name="modeAction"
                      label={i18n(
                        'entities.action.fields.modeAction',
                      )}
                      options={actionEnumerators.modeAction.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.action.enumerators.modeAction.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.forum.fields.statut',
                      )}
                      options={forumEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.forum.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="description"
                      label={i18n(
                        'entities.action.fields.description',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <div
                      style={{
                        display: 'none',
                      }}
                    >
                      <MouvementAutocompleteFormItem
                        name="mouvement"
                        label={i18n(
                          'entities.action.fields.mouvement',
                        )}
                        required={false}
                        showCreate={!props.modal}
                        layout={formItemLayout}
                      />
                    </div>
                  </fieldset>
                </TabPane>
                {props.isEditing ? (
                  <TabPane
                    tab={i18n('entities.suicide.menu')}
                    key="2"
                  >
                    <SuicideToolbar
                      action={props.record.id}
                    />
                    <SuicideListFilter />
                    <SuicideListTable
                      data={props.record.suicide}
                    />
                  </TabPane>
                ) : null}
                {props.isEditing ? (
                  <TabPane
                    tab={i18n('entities.violence.menu')}
                    key="3"
                  >
                    <ViolenceToolbar
                      action={props.record.id}
                    />
                    <ViolenceListFilter />
                    <ViolenceListTable
                      data={props.record.violence}
                    />
                  </TabPane>
                ) : null}
              </Tabs>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ActionForm;
