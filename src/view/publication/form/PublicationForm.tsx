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
import publicationEnumerators from 'src/modules/publication/publicationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ThematiqueAutocompleteFormItem from 'src/view/thematique/autocomplete/ThematiqueAutocompleteFormItem';
import CategoryEvenementAutocompleteFormItem from 'src/view/categoryEvenement/autocomplete/CategoryEvenementAutocompleteFormItem';
import CategoryPublicationAutocompleteFormItem from 'src/view/categoryPublication/autocomplete/CategoryPublicationAutocompleteFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  thematique: yupFormSchemas.relationToOne(
    i18n('entities.publication.fields.thematique'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.publication.fields.categorie'),
    {
      required: true,
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.publication.fields.type'),
    {
      required: true,
      options: publicationEnumerators.type,
    },
  ),
  supports: yupFormSchemas.files(
    i18n('entities.publication.fields.supports'),
    {
      required: true,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.publication.fields.description'),
    {
      required: true,
    },
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.publication.fields.statut'),
    {
      required: true,
      options: publicationEnumerators.statut,
    },
  ),
  date: yupFormSchemas.date(
    i18n('entities.publication.fields.date'),
    {
      required: true,
    },
  ),
});

const PublicationForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      thematique: record.thematique,
      category: record.category,
      type: record.type,
      supports: record.supports || [],
      description: record.description,
      statut: record.statut,
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD')
        : null,
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
                <ThematiqueAutocompleteFormItem
                  name="thematique"
                  label={i18n(
                    'entities.publication.fields.thematique',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  layout={formItemLayout}
                />
                <CategoryPublicationAutocompleteFormItem
                  name="category"
                  label={i18n(
                    'entities.publication.fields.categorie',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="type"
                  label={i18n(
                    'entities.publication.fields.type',
                  )}
                  options={publicationEnumerators.type.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.publication.enumerators.type.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />

                <TextAreaFormItem
                  name="description"
                  label={i18n(
                    'entities.publication.fields.description',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="statut"
                  label={i18n(
                    'entities.publication.fields.statut',
                  )}
                  options={publicationEnumerators.statut.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.publication.enumerators.statut.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <DatePickerFormItem
                  name="date"
                  label={i18n(
                    'entities.publication.fields.date',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <FilesFormItem
                  name="supports"
                  label={i18n(
                    'entities.publication.fields.supports',
                  )}
                  required={true}
                  storage={
                    Storage.values.publicationSupports
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

export default PublicationForm;
