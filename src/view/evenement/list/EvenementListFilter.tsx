import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/evenement/list/evenementListActions';
import selectors from 'src/modules/evenement/list/evenementListSelectors';
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
import evenementEnumerators from 'src/modules/evenement/evenementEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ThematiqueAutocompleteFormItem from 'src/view/thematique/autocomplete/ThematiqueAutocompleteFormItem';
import CategoryEvenementAutocompleteFormItem from 'src/view/categoryEvenement/autocomplete/CategoryEvenementAutocompleteFormItem';

const schema = yup.object().shape({
  thematique: yupFilterSchemas.relationToOne(
    i18n('entities.evenement.fields.thematique'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.evenement.fields.categorie'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.evenement.fields.type'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.evenement.fields.description'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.evenement.fields.dateRange'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.evenement.fields.statut'),
  ),
  emplacement: yupFilterSchemas.string(
    i18n('entities.evenement.fields.emplacement'),
  ),
});

const emptyValues = {
  thematique: null,
  category: null,
  type: null,
  description: null,
  dateRange: [],
  statut: null,
  emplacement: null,
};

const previewRenders = {
  thematique: {
    label: i18n('entities.evenement.fields.thematique'),
    render: filterRenders.relationToOne(),
  },
  category: {
    label: i18n('entities.publication.fields.categorie'),
    render: filterRenders.relationToOne(),
  },
  type: {
    label: i18n('entities.evenement.fields.type'),
    render: filterRenders.enumerator(
      'entities.evenement.enumerators.type',
    ),
  },
  description: {
    label: i18n('entities.evenement.fields.description'),
    render: filterRenders.generic(),
  },
  dateRange: {
    label: i18n('entities.evenement.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  statut: {
    label: i18n('entities.evenement.fields.statut'),
    render: filterRenders.enumerator(
      'entities.evenement.enumerators.statut',
    ),
  },
  emplacement: {
    label: i18n('entities.evenement.fields.emplacement'),
    render: filterRenders.generic(),
  },
};

const EvenementListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    if (props.filter)
      return {
        ...emptyValues,
        statut: 'archive',
      };
    else {
      return {
        ...emptyValues,
        ...rawFilter,
      };
    }
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
                  <ThematiqueAutocompleteFormItem
                    name="thematique"
                    label={i18n(
                      'entities.evenement.fields.thematique',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <CategoryEvenementAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.evenement.fields.categorie',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.evenement.fields.type',
                    )}
                    options={evenementEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.evenement.enumerators.type.${value}`,
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
                      'entities.evenement.fields.description',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.evenement.fields.dateRange',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                {props.filter ? (
                  <Col
                    xs={24}
                    md={24}
                    lg={12}
                    style={{ display: 'none' }}
                  >
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.evenement.fields.statut',
                      )}
                      options={evenementEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.evenement.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      layout={filterItemLayout}
                    />
                  </Col>
                ) : (
                  <Col xs={24} md={24} lg={12}>
                    <SelectFormItem
                      name="statut"
                      label={i18n(
                        'entities.evenement.fields.statut',
                      )}
                      options={evenementEnumerators.statut.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.evenement.enumerators.statut.${value}`,
                          ),
                        }),
                      )}
                      layout={filterItemLayout}
                    />
                  </Col>
                )}
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="emplacement"
                    label={i18n(
                      'entities.evenement.fields.emplacement',
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

export default EvenementListFilter;
