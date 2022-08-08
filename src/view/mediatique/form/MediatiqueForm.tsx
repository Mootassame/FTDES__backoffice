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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import mediatiqueEnumerators from 'src/modules/mediatique/mediatiqueEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.mediatique.fields.title'),
    {
      required: true,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.mediatique.fields.description'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.mediatique.fields.type'),
    {
      required: true,
      options: mediatiqueEnumerators.type,
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.mediatique.fields.photos'),
    {},
  ),
  videos: yupFormSchemas.files(
    i18n('entities.mediatique.fields.videos'),
    {},
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.mediatique.fields.attachements'),
    {},
  ),
});

const MediatiqueForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      type: record.type,
      photos: record.photos || [],
      videos: record.videos || [],
      attachements: record.attachements || [],
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
                  name="title"
                  label={i18n(
                    'entities.mediatique.fields.title',
                  )}
                  required={true}
                  layout={formItemLayout}
                  autoFocus
                />
                <TextAreaFormItem
                  name="description"
                  label={i18n(
                    'entities.mediatique.fields.description',
                  )}
                  required={false}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name="type"
                  label={i18n(
                    'entities.mediatique.fields.type',
                  )}
                  options={mediatiqueEnumerators.type.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.mediatique.enumerators.type.${value}`,
                      ),
                    }),
                  )}
                  required={true}
                  layout={formItemLayout}
                />
                <ImagesFormItem
                  name="photos"
                  label={i18n(
                    'entities.mediatique.fields.photos',
                  )}
                  required={false}
                  storage={Storage.values.mediatiquePhotos}
                  max={undefined}
                  layout={formItemLayout}
                />
                <FilesFormItem
                  name="videos"
                  label={i18n(
                    'entities.mediatique.fields.videos',
                  )}
                  required={false}
                  storage={Storage.values.mediatiqueVideos}
                  max={undefined}
                  formats={undefined}
                  layout={formItemLayout}
                />
                <FilesFormItem
                  name="attachements"
                  label={i18n(
                    'entities.mediatique.fields.attachements',
                  )}
                  required={false}
                  storage={
                    Storage.values.mediatiqueAttachements
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

export default MediatiqueForm;
