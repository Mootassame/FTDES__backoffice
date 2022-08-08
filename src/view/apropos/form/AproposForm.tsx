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
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  about: yupFormSchemas.string(
    i18n('entities.apropos.fields.about'),
    {
      required: true,
    },
  ),
  objectifs: yupFormSchemas.string(
    i18n('entities.apropos.fields.objectifs'),
    {
      required: true,
    },
  ),
  services: yupFormSchemas.string(
    i18n('entities.apropos.fields.services'),
    {
      required: true,
    },
  ),
  contacts: yupFormSchemas.string(
    i18n('entities.apropos.fields.contacts'),
    {
      required: true,
    },
  ),
  tutorial: yupFormSchemas.string(
    i18n('entities.apropos.fields.tutorial'),
    {},
  ),
  publicationDesc: yupFormSchemas.string(
    i18n('entities.apropos.fields.publicationDesc'),
    {},
  ),
  appelDesc: yupFormSchemas.string(
    i18n('entities.apropos.fields.appelDesc'),
    {},
  ),
  forumDesc: yupFormSchemas.string(
    i18n('entities.apropos.fields.forumDesc'),
    {},
  ),
  mouvementDesc: yupFormSchemas.string(
    i18n('entities.apropos.fields.mouvementDesc'),
    {},
  ),
  mediatequeDesc: yupFormSchemas.string(
    i18n('entities.apropos.fields.mediatequeDesc'),
    {},
  ),
});

const AproposForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      about: record.about,
      objectifs: record.objectifs,
      services: record.services,
      contacts: record.contacts,
      tutorial: record.tutorial,
      publicationDesc: record.publicationDesc,
      appelDesc: record.appelDesc,
      forumDesc: record.forumDesc,
      mouvementDesc: record.mouvementDesc,
      mediatequeDesc: record.mediatequeDesc,
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
                <Row>
                  <Col span={12}>
                    <TextAreaFormItem
                      name="about"
                      label={i18n(
                        'entities.apropos.fields.about',
                      )}
                      required={true}
                      layout={formItemLayout}
                      autoFocus
                    />
                    <TextAreaFormItem
                      name="objectifs"
                      label={i18n(
                        'entities.apropos.fields.objectifs',
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="services"
                      label={i18n(
                        'entities.apropos.fields.services',
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="contacts"
                      label={i18n(
                        'entities.apropos.fields.contacts',
                      )}
                      required={true}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="tutorial"
                      label={i18n(
                        'entities.apropos.fields.tutorial',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col span={12}>
                    <TextAreaFormItem
                      name="publicationDesc"
                      label={i18n(
                        'entities.apropos.fields.publicationDesc',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="appelDesc"
                      label={i18n(
                        'entities.apropos.fields.appelDesc',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="forumDesc"
                      label={i18n(
                        'entities.apropos.fields.forumDesc',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="mouvementDesc"
                      label={i18n(
                        'entities.apropos.fields.mouvementDesc',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                    <TextAreaFormItem
                      name="mediatequeDesc"
                      label={i18n(
                        'entities.apropos.fields.mediatequeDesc',
                      )}
                      required={false}
                      layout={formItemLayout}
                    />
                  </Col>
                </Row>
              </fieldset>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default AproposForm;
