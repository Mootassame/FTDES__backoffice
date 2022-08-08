import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/demandeAppui/list/demandeAppuiListActions';
import selectors from 'src/modules/demandeAppui/list/demandeAppuiListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import demandeAppuiEnumerators from 'src/modules/demandeAppui/demandeAppuiEnumerators';
import CategoryAppelAutocompleteFormItem from 'src/view/categoryAppel/autocomplete/CategoryAppelAutocompleteFormItem';

const schema = yup.object().shape({
  type: yupFilterSchemas.enumerator(
    i18n('entities.demandeAppui.fields.type'),
  ),
  etat: yupFilterSchemas.enumerator(
    i18n('entities.demandeAppui.fields.etat'),
  ),
  gouvernorat: yupFilterSchemas.enumerator(
    i18n('entities.demandeAppui.fields.gouvernorat'),
  ),
  importance: yupFilterSchemas.enumerator(
    i18n('entities.demandeAppui.fields.importance'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.demandeAppui.fields.description'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.demandeAppui.fields.categorie'),
  ),
});

const emptyValues = {
  type: null,
  etat: null,
  gouvernorat: null,
  importance: null,
  description: null,
  category: null,
};

const previewRenders = {
  type: {
    label: i18n('entities.demandeAppui.fields.type'),
    render: filterRenders.enumerator(
      'entities.demandeAppui.enumerators.type',
    ),
  },
  etat: {
    label: i18n('entities.demandeAppui.fields.etat'),
    render: filterRenders.enumerator(
      'entities.demandeAppui.enumerators.etat',
    ),
  },
  gouvernorat: {
    label: i18n('entities.demandeAppui.fields.gouvernorat'),
    render: filterRenders.enumerator(
      'entities.demandeAppui.enumerators.gouvernorat',
    ),
  },
  category: {
    label: i18n('entities.demandeAppui.fields.categorie'),
    render: filterRenders.relationToOne(),
  },
  importance: {
    label: i18n('entities.demandeAppui.fields.importance'),
    render: filterRenders.enumerator(
      'entities.demandeAppui.enumerators.importance',
    ),
  },
  description: {
    label: i18n('entities.demandeAppui.fields.description'),
    render: filterRenders.generic(),
  },
};

const DemandeAppuiListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;
  return (
    <FilterWrapper>
      <Collapse
        activeKey={expanded ? 'filter' : undefined}
        expandIconPosition="right"
        ghost
        onChange={(value) => {
          setExpanded(Boolean(value.length));
        }}
      >
        <Collapse.Panel
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
          header={
            <FilterPreview
              renders={previewRenders}
              values={rawFilter}
              expanded={expanded}
              onRemove={onRemove}
            />
          }
          key="filter"
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <CategoryAppelAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.demandeAppui.fields.categorie',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="description"
                    label={i18n(
                      'entities.demandeAppui.fields.description',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Collapse.Panel>
      </Collapse>
    </FilterWrapper>
  );
};

export default DemandeAppuiListFilter;
