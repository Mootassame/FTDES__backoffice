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
import demandeAppuiEnumerators from 'src/modules/demandeAppui/demandeAppuiEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';
import CategoryAppelAutocompleteFormItem from 'src/view/categoryAppel/autocomplete/CategoryAppelAutocompleteFormItem';

const schema = yup.object().shape({
  type: yupFormSchemas.enumerator(
    i18n('entities.demandeAppui.fields.type'),
    {
      required: true,
      options: demandeAppuiEnumerators.type,
    },
  ),
  etat: yupFormSchemas.enumerator(
    i18n('entities.demandeAppui.fields.etat'),
    {
      required: true,
      options: demandeAppuiEnumerators.etat,
    },
  ),
  gouvernorat: yupFormSchemas.enumerator(
    i18n('entities.demandeAppui.fields.gouvernorat'),
    {
      required: true,
      options: demandeAppuiEnumerators.gouvernorat,
    },
  ),
  importance: yupFormSchemas.enumerator(
    i18n('entities.demandeAppui.fields.importance'),
    {
      required: true,
      options: demandeAppuiEnumerators.importance,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.demandeAppui.fields.description'),
    {
      required: true,
    },
  ),
  supports: yupFormSchemas.files(
    i18n('entities.demandeAppui.fields.supports'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.demandeAppui.fields.categorie'),
    {
      required: true,
    },
  ),
});

const DemandeAppuiForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      type: record.type,
      etat: record.etat,
      gouvernorat: record.gouvernorat,
      category:record.category,
      importance: record.importance,
      description: record.description,
      supports: record.supports || [],
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
                <SelectFormItem
                  name="type"
                  label={i18n(
                    'entities.demandeAppui.fields.type',
                  )}
                  options={demandeAppuiEnumerators.type.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.demandeAppui.enumerators.type.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="etat"
                  label={i18n(
                    'entities.demandeAppui.fields.etat',
                  )}
                  options={demandeAppuiEnumerators.etat.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.demandeAppui.enumerators.etat.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
          
                <SelectFormItem
                  name="gouvernorat"
                  label={i18n(
                    'entities.demandeAppui.fields.gouvernorat',
                  )}
                  options={demandeAppuiEnumerators.gouvernorat.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.demandeAppui.enumerators.gouvernorat.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                 <CategoryAppelAutocompleteFormItem
                  name="category"
                  label={i18n(
                    'entities.demandeAppui.fields.categorie',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="importance"
                  label={i18n(
                    'entities.demandeAppui.fields.importance',
                  )}
                  options={demandeAppuiEnumerators.importance.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.demandeAppui.enumerators.importance.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <TextAreaFormItem
                  name="description"
                  label={i18n(
                    'entities.demandeAppui.fields.description',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <FilesFormItem
                  name="supports"
                  label={i18n(
                    'entities.demandeAppui.fields.supports',
                  )}
                  required={false}
                  storage={
                    Storage.values.demandeAppuiSupports
                  }
                  max={undefined}
                  formats={undefined}
                  layout={formItemLayout}
                />
              </fieldset>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default DemandeAppuiForm;
