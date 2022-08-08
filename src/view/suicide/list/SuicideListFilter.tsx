import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/suicide/list/suicideListActions';
import selectors from 'src/modules/suicide/list/suicideListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import suicideEnumerators from 'src/modules/suicide/suicideEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ActionAutocompleteFormItem from 'src/view/action/autocomplete/ActionAutocompleteFormItem';

const schema = yup.object().shape({
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.suicide.fields.dateRange'),
  ),
  region: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.region'),
  ),
  ageRange: yupFilterSchemas.integerRange(
    i18n('entities.suicide.fields.ageRange'),
  ),
  genre: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.genre'),
  ),
  maniere: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.maniere'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.statut'),
  ),
  raison: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.raison'),
  ),
  espace: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.espace'),
  ),
  cible: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.cible'),
  ),
  deces: yupFilterSchemas.enumerator(
    i18n('entities.suicide.fields.deces'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.suicide.fields.description'),
  ),
  consequence: yupFilterSchemas.string(
    i18n('entities.suicide.fields.consequence'),
  ),
  action: yupFilterSchemas.relationToOne(
    i18n('entities.suicide.fields.action'),
  ),
});

const emptyValues = {
  dateRange: [],
  region: null,
  ageRange: [],
  genre: null,
  maniere: null,
  raison: null,
  espace: null,
  cible: null,
  deces: null,
  description: null,
  consequence: null,
  action: null,
};

const previewRenders = {
  dateRange: {
    label: i18n('entities.suicide.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  region: {
    label: i18n('entities.suicide.fields.region'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.region',
    ),
  },
  ageRange: {
    label: i18n('entities.suicide.fields.ageRange'),
    render: filterRenders.range(),
  },
  genre: {
    label: i18n('entities.suicide.fields.genre'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.genre',
    ),
  },
  maniere: {
    label: i18n('entities.suicide.fields.maniere'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.maniere',
    ),
  },
  raison: {
    label: i18n('entities.suicide.fields.raison'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.raison',
    ),
  },
  espace: {
    label: i18n('entities.suicide.fields.espace'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.espace',
    ),
  },
  cible: {
    label: i18n('entities.suicide.fields.cible'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.cible',
    ),
  },
  deces: {
    label: i18n('entities.suicide.fields.deces'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.deces',
    ),
  },
  description: {
    label: i18n('entities.suicide.fields.description'),
    render: filterRenders.generic(),
  },
  consequence: {
    label: i18n('entities.suicide.fields.consequence'),
    render: filterRenders.generic(),
  },
  action: {
    label: i18n('entities.suicide.fields.action'),
    render: filterRenders.relationToOne(),
  },
  statut: {
    label: i18n('entities.suicide.fields.statut'),
    render: filterRenders.enumerator(
      'entities.suicide.enumerators.statut',
    ),
  },
};

const SuicideListFilter = (props) => {
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
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.suicide.fields.dateRange',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="ageRange"
                    label={i18n('entities.suicide.fields.ageRange')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="espace"
                    label={i18n('entities.suicide.fields.espace')}
                    options={suicideEnumerators.espace.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.suicide.enumerators.espace.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col> */}
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.suicide.fields.description')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="consequence"
                    label={i18n('entities.suicide.fields.consequence')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <ActionAutocompleteFormItem  
                    name="action"
                    label={i18n('entities.suicide.fields.action')}        
                    layout={filterItemLayout}
                  />
                </Col> */}
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

export default SuicideListFilter;
