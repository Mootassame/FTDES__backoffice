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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ArtisteAutocompleteFormItem from 'src/view/artiste/autocomplete/ArtisteAutocompleteFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  artiste: yupFormSchemas.relationToOne(
    i18n('entities.espaceArtistique.fields.artiste'),
    {
      required: true,
    },
  ),
  supports: yupFormSchemas.files(
    i18n('entities.espaceArtistique.fields.supports'),
    {},
  ),
  titre: yupFormSchemas.string(
    i18n('entities.espaceArtistique.fields.titre'),
    {
      required: true,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.espaceArtistique.fields.description'),
    {
      required: true,
    },
  ),
});

const EspaceArtistiqueForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      artiste: record.artiste,
      supports: record.supports || [],
      titre: record.titre,
      description: record.description,
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
                <ArtisteAutocompleteFormItem
                  name="artiste"
                  label={i18n(
                    'entities.espaceArtistique.fields.artiste',
                  )}
                  required={true}
                  showCreate={!props.modal}
                  layout={formItemLayout}
                />
                <FilesFormItem
                  name="supports"
                  label={i18n(
                    'entities.espaceArtistique.fields.supports',
                  )}
                  required={false}
                  storage={
                    Storage.values.espaceArtistiqueSupports
                  }
                  max={undefined}
                  formats={undefined}
                  layout={formItemLayout}
                />
                <InputFormItem
                  name="titre"
                  label={i18n(
                    'entities.espaceArtistique.fields.titre',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <TextAreaFormItem
                  name="description"
                  label={i18n(
                    'entities.espaceArtistique.fields.description',
                  )}
                  required={true}
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

export default EspaceArtistiqueForm;
