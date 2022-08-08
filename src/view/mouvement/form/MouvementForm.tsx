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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import { Tabs } from 'antd';
import ActionListFilter from 'src/view/action/list/ActionListFilter';
import ActionListTable from 'src/view/action/list/ActionListTable';
import ActionListToolbar from 'src/view/action/list/ActionListToolbar';

import ActionAutocompleteFormItem from 'src/view/action/autocomplete/ActionAutocompleteFormItem';
import mouvementEnumerators from 'src/modules/mouvement/mouvementEnumerators';
import PageTitle from 'src/view/shared/styles/PageTitle';

const { TabPane } = Tabs;
const schema = yup.object().shape({
  sujet: yupFormSchemas.enumerator(
    i18n('entities.mouvement.fields.sujet'),
    {
      required: true,
      options: mouvementEnumerators.sujet,
    },
  ),
  date: yupFormSchemas.date(
    i18n('entities.mouvement.fields.date'),
    {
      required: true,
    },
  ),
  observation: yupFormSchemas.string(
    i18n('entities.mouvement.fields.observation'),
    {},
  ),
  actions: yupFormSchemas.relationToMany(
    i18n('entities.mouvement.fields.actions'),
    {},
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.mouvement.fields.statut'),
    {
      required: true,
      options: mouvementEnumerators.statut,
    },
  ),
});

const MouvementForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      sujet: record.sujet,
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD')
        : null,
      observation: record.observation,
      actions: record.actions || [],
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
                        'entities.mouvement.fields.sujet',
                      )}
                      options={mouvementEnumerators.sujet.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.mouvement.enumerators.sujet.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <DatePickerFormItem
                      name="date"
                      label={i18n(
                        'entities.mouvement.fields.date',
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.mouvement.fields.statut',
                      )}
                      options={mouvementEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.mouvement.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="observation"
                      label={i18n(
                        'entities.mouvement.fields.observation',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                  </fieldset>
                </TabPane>

                {props.isEditing ? (
                  <TabPane
                    tab={i18n('entities.action.menu')}
                    key="2"
                  >
                    {/* <ActionListToolbar
                      mouvement={props.record.id}
                    /> */}
                    <Row>
                      <Col span={16}>
                        <PageTitle></PageTitle>
                      </Col>
                      <Col
                        span={8}
                        style={{ textAlign: 'end' }}
                      >
                        {' '}
                        <ActionListToolbar
                          mouvement={props.record.id}
                        />
                      </Col>
                    </Row>
                    <ActionListFilter />
                    <ActionListTable
                      data={props.record.actions}
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

export default MouvementForm;
