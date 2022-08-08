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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import EspaceArtistiqueAutocompleteFormItem from 'src/view/espaceArtistique/autocomplete/EspaceArtistiqueAutocompleteFormItem';
import DomaineAutocompleteFormItem from 'src/view/domaine/autocomplete/DomaineAutocompleteFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  nom: yupFormSchemas.string(
    i18n('entities.artiste.fields.nom'),
    {
      required: true,
    },
  ),
  prenom: yupFormSchemas.string(
    i18n('entities.artiste.fields.prenom'),
    {
      required: true,
    },
  ),
  domaine: yupFormSchemas.relationToOne(
    i18n('entities.artiste.fields.domaine'),
    {
      required: false,
    },
  ),
  adresse: yupFormSchemas.string(
    i18n('entities.artiste.fields.adresse'),
    {
      required: true,
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.artiste.fields.email'),
    {
      required: true,
    },
  ),
  phoneNumber: yupFormSchemas.integer(
    i18n('entities.artiste.fields.phoneNumber'),
    {},
  ),
  espaceArtistique: yupFormSchemas.relationToOne(
    i18n('entities.artiste.fields.espaceArtistique'),
    {},
  ),
});

const ArtisteForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nom: record.nom,
      prenom: record.prenom,
      domaine: record.domaine,
      adresse: record.adresse,
      email: record.email,
      phoneNumber: record.phoneNumber,
      espaceArtistique: record.espaceArtistique,
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
                <InputFormItem
                  name="nom"
                  label={i18n(
                    'entities.artiste.fields.nom',
                  )}
                  required={true}
                  layout={formItemLayout}
                  autoFocus
                />
                <InputFormItem
                  name="prenom"
                  label={i18n(
                    'entities.artiste.fields.prenom',
                  )}
                  required={true}
                  layout={formItemLayout}
                />

                <InputFormItem
                  name="adresse"
                  label={i18n(
                    'entities.artiste.fields.adresse',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputFormItem
                  name="email"
                  label={i18n(
                    'entities.artiste.fields.email',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputNumberFormItem
                  name="phoneNumber"
                  label={i18n(
                    'entities.artiste.fields.phoneNumber',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <DomaineAutocompleteFormItem
                  name="domaine"
                  label={i18n(
                    'entities.artiste.fields.domaine',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  layout={formItemLayout}
                />
                <EspaceArtistiqueAutocompleteFormItem
                  name="espaceArtistique"
                  label={i18n(
                    'entities.artiste.fields.espaceArtistique',
                  )}
                  required={false}
                  showCreate={!props.modal}
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

export default ArtisteForm;
