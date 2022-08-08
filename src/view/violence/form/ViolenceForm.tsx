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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ActionAutocompleteFormItem from 'src/view/action/autocomplete/ActionAutocompleteFormItem';
import violenceEnumerators from 'src/modules/violence/violenceEnumerators';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  date: yupFormSchemas.date(
    i18n('entities.violence.fields.date'),
    {
      required: true,
    },
  ),
  region: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.region'),
    {
      required: true,
      options: violenceEnumerators.region,
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.type'),
    {
      required: true,
      options: violenceEnumerators.type,
    },
  ),
  mode: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.mode'),
    {
      required: true,
      options: violenceEnumerators.mode,
    },
  ),
  cadre: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.cadre'),
    {
      required: true,
      options: violenceEnumerators.cadre,
    },
  ),
  espace: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.espace'),
    {
      required: true,
      options: violenceEnumerators.espace,
    },
  ),
  degre: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.degre'),
    {
      required: true,
      options: violenceEnumerators.degre,
    },
  ),
  planifie: yupFormSchemas.boolean(
    i18n('entities.violence.fields.planifie'),
    {},
  ),
  categorie: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.categorie'),
    {
      required: true,
      options: violenceEnumerators.categorie,
    },
  ),
  traitement: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.traitement'),
    {
      required: true,
      options: violenceEnumerators.traitement,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.violence.fields.description'),
    {},
  ),
  idAgresseur: yupFormSchemas.string(
    i18n('entities.violence.fields.idAgresseur'),
    {
      required: true,
    },
  ),
  objectif: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.objectif'),
    {
      required: true,
      options: violenceEnumerators.objectif,
    },
  ),
  explication: yupFormSchemas.string(
    i18n('entities.violence.fields.explication'),
    {},
  ),
  outil: yupFormSchemas.string(
    i18n('entities.violence.fields.outil'),
    {},
  ),
  typeAgresseur: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.typeAgresseur'),
    {
      required: true,
      options: violenceEnumerators.typeAgresseur,
    },
  ),
  nombreAgresseur: yupFormSchemas.integer(
    i18n('entities.violence.fields.nombreAgresseur'),
    {},
  ),
  genreAgresseur: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.genreAgresseur'),
    {
      required: true,
      options: violenceEnumerators.genreAgresseur,
    },
  ),
  ageAgresseur: yupFormSchemas.integer(
    i18n('entities.violence.fields.ageAgresseur'),
    {},
  ),
  idAgresse: yupFormSchemas.string(
    i18n('entities.violence.fields.idAgresse'),
    {
      required: true,
    },
  ),
  nombreAgresse: yupFormSchemas.integer(
    i18n('entities.violence.fields.nombreAgresse'),
    {},
  ),
  typeAgresse: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.typeAgresse'),
    {
      required: true,
      options: violenceEnumerators.typeAgresse,
    },
  ),
  genreAgresse: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.genreAgresse'),
    {
      required: true,
      options: violenceEnumerators.genreAgresse,
    },
  ),
  ageAgresse: yupFormSchemas.integer(
    i18n('entities.violence.fields.ageAgresse'),
    {},
  ),
  action: yupFormSchemas.relationToOne(
    i18n('entities.violence.fields.action'),
    {},
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.violence.fields.statut'),
    {
      required: true,
      options: violenceEnumerators.statut,
    },
  ),
});

const ViolenceForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD')
        : null,
      region: record.region,
      type: record.type,
      mode: record.mode,
      cadre: record.cadre,
      espace: record.espace,
      degre: record.degre,
      planifie: record.planifie,
      categorie: record.categorie,
      traitement: record.traitement,
      description: record.description,
      idAgresseur: record.idAgresseur,
      objectif: record.objectif,
      explication: record.explication,
      outil: record.outil,
      typeAgresseur: record.typeAgresseur,
      nombreAgresseur: record.nombreAgresseur,
      genreAgresseur: record.genreAgresseur,
      ageAgresseur: record.ageAgresseur,
      idAgresse: record.idAgresse,
      nombreAgresse: record.nombreAgresse,
      typeAgresse: record.typeAgresse,
      genreAgresse: record.genreAgresse,
      ageAgresse: record.ageAgresse,
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
                <Row gutter={24}>
                  <Col span={12}>
                    <DatePickerFormItem
                      name="date"
                      label={i18n(
                        'entities.violence.fields.date',
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="region"
                      label={i18n(
                        'entities.violence.fields.region',
                      )}
                      options={violenceEnumerators.region.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.region.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="type"
                      label={i18n(
                        'entities.violence.fields.type',
                      )}
                      options={violenceEnumerators.type.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.type.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="mode"
                      label={i18n(
                        'entities.violence.fields.mode',
                      )}
                      options={violenceEnumerators.mode.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.mode.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="cadre"
                      label={i18n(
                        'entities.violence.fields.cadre',
                      )}
                      options={violenceEnumerators.cadre.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.cadre.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="espace"
                      label={i18n(
                        'entities.violence.fields.espace',
                      )}
                      options={violenceEnumerators.espace.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.espace.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="degre"
                      label={i18n(
                        'entities.violence.fields.degre',
                      )}
                      options={violenceEnumerators.degre.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.degre.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="description"
                      label={i18n(
                        'entities.violence.fields.description',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col span={12}>
                    <SwitchFormItem
                      name="planifie"
                      label={i18n(
                        'entities.violence.fields.planifie',
                      )}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="categorie"
                      label={i18n(
                        'entities.violence.fields.categorie',
                      )}
                      options={violenceEnumerators.categorie.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.categorie.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="traitement"
                      label={i18n(
                        'entities.violence.fields.traitement',
                      )}
                      options={violenceEnumerators.traitement.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.traitement.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />

                    <SelectFormItem
                      name="objectif"
                      label={i18n(
                        'entities.violence.fields.objectif',
                      )}
                      options={violenceEnumerators.objectif.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.objectif.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />

                    <InputFormItem
                      name="outil"
                      label={i18n(
                        'entities.violence.fields.outil',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.violence.fields.statut',
                      )}
                      options={violenceEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.violence.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="explication"
                      label={i18n(
                        'entities.violence.fields.explication',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                  </Col>
                </Row>
              </fieldset>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <fieldset>
                <legend>
                  {i18n(
                    'entities.violence.fields.idAgresseur',
                  )}
                </legend>
                <InputFormItem
                  name="idAgresseur"
                  label={i18n(
                    'entities.violence.fields.idAgresseur',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputNumberFormItem
                  name="nombreAgresseur"
                  label={i18n(
                    'entities.violence.fields.nombreAgresseur',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="typeAgresseur"
                  label={i18n(
                    'entities.violence.fields.typeAgresseur',
                  )}
                  options={violenceEnumerators.typeAgresseur.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.violence.enumerators.typeAgresseur.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />

                <SelectFormItem
                  name="genreAgresseur"
                  label={i18n(
                    'entities.violence.fields.genreAgresseur',
                  )}
                  options={violenceEnumerators.genreAgresseur.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.violence.enumerators.genreAgresseur.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputNumberFormItem
                  name="ageAgresseur"
                  label={i18n(
                    'entities.violence.fields.ageAgresseur',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
              </fieldset>
            </Col>
            <Col span={12}>
              <fieldset>
                <legend>
                  {i18n(
                    'entities.violence.fields.idAgresse',
                  )}
                </legend>
                <InputFormItem
                  name="idAgresse"
                  label={i18n(
                    'entities.violence.fields.idAgresse',
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <InputNumberFormItem
                  name="nombreAgresse"
                  label={i18n(
                    'entities.violence.fields.nombreAgresse',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="typeAgresse"
                  label={i18n(
                    'entities.violence.fields.typeAgresse',
                  )}
                  options={violenceEnumerators.typeAgresse.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.violence.enumerators.typeAgresse.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="genreAgresse"
                  label={i18n(
                    'entities.violence.fields.genreAgresse',
                  )}
                  options={violenceEnumerators.genreAgresse.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.violence.enumerators.genreAgresse.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />

                <InputNumberFormItem
                  name="ageAgresse"
                  label={i18n(
                    'entities.violence.fields.ageAgresse',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
              </fieldset>
            </Col>
          </Row>

          <div style={{ display: 'none' }}>
            <ActionAutocompleteFormItem
              name="action"
              label={i18n(
                'entities.violence.fields.action',
              )}
              required={false}
              showCreate={!props.modal}
              layout={formItemLayout}
            />
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ViolenceForm;
