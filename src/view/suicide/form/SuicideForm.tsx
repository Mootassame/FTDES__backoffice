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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import suicideEnumerators from 'src/modules/suicide/suicideEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ActionAutocompleteFormItem from 'src/view/action/autocomplete/ActionAutocompleteFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  date: yupFormSchemas.date(
    i18n('entities.suicide.fields.date'),
    {
      required: true,
    },
  ),
  region: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.region'),
    {
      required: true,
      options: suicideEnumerators.region,
    },
  ),
  age: yupFormSchemas.integer(
    i18n('entities.suicide.fields.age'),
    {
      required: true,
    },
  ),
  genre: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.genre'),
    {
      required: true,
      options: suicideEnumerators.genre,
    },
  ),
  maniere: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.maniere'),
    {
      required: true,
      options: suicideEnumerators.maniere,
    },
  ),
  raison: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.raison'),
    {
      required: true,
      options: suicideEnumerators.raison,
    },
  ),
  espace: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.espace'),
    {
      required: true,
      options: suicideEnumerators.espace,
    },
  ),
  cible: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.cible'),
    {
      required: true,
      options: suicideEnumerators.cible,
    },
  ),
  deces: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.deces'),
    {
      required: true,
      options: suicideEnumerators.deces,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.suicide.fields.description'),
    {},
  ),
  consequence: yupFormSchemas.string(
    i18n('entities.suicide.fields.consequence'),
    {},
  ),
  action: yupFormSchemas.relationToOne(
    i18n('entities.suicide.fields.action'),
    {},
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.suicide.fields.statut'),
    {
      required: true,
      options: suicideEnumerators.statut,
    },
  ),
});

const SuicideForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD')
        : null,
      region: record.region,
      age: record.age,
      genre: record.genre,
      maniere: record.maniere,
      raison: record.raison,
      espace: record.espace,
      cible: record.cible,
      deces: record.deces,
      description: record.description,
      consequence: record.consequence,
      action: record.action,
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
              <fieldset>
                <legend>
                  {i18n('common.informations')}
                </legend>
                <DatePickerFormItem
                  name="date"
                  label={i18n(
                    'entities.suicide.fields.date',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="region"
                  label={i18n(
                    'entities.suicide.fields.region',
                  )}
                  options={suicideEnumerators.region.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.region.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputNumberFormItem
                  name="age"
                  label={i18n(
                    'entities.suicide.fields.age',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="genre"
                  label={i18n(
                    'entities.suicide.fields.genre',
                  )}
                  options={suicideEnumerators.genre.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.genre.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="maniere"
                  label={i18n(
                    'entities.suicide.fields.maniere',
                  )}
                  options={suicideEnumerators.maniere.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.maniere.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="raison"
                  label={i18n(
                    'entities.suicide.fields.raison',
                  )}
                  options={suicideEnumerators.raison.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.raison.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="espace"
                  label={i18n(
                    'entities.suicide.fields.espace',
                  )}
                  options={suicideEnumerators.espace.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.espace.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="cible"
                  label={i18n(
                    'entities.suicide.fields.cible',
                  )}
                  options={suicideEnumerators.cible.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.cible.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="deces"
                  label={i18n(
                    'entities.suicide.fields.deces',
                  )}
                  options={suicideEnumerators.deces.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.deces.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="statut"
                  label={i18n(
                    'entities.suicide.fields.statut',
                  )}
                  options={suicideEnumerators.statut.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.suicide.enumerators.statut.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <TextAreaFormItem
                  name="description"
                  label={i18n(
                    'entities.suicide.fields.description',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <TextAreaFormItem
                  name="consequence"
                  label={i18n(
                    'entities.suicide.fields.consequence',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <div style={{ display: 'none' }}>
                  <ActionAutocompleteFormItem
                    name="action"
                    label={i18n(
                      'entities.suicide.fields.action',
                    )}
                    required={false}
                    showCreate={!props.modal}
                    layout={formItemLayout}
                  />
                </div>
              </fieldset>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SuicideForm;
