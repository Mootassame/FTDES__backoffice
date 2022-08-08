import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/publication/list/publicationListActions';
import selectors from 'src/modules/publication/list/publicationListSelectors';
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
import publicationEnumerators from 'src/modules/publication/publicationEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ThematiqueAutocompleteFormItem from 'src/view/thematique/autocomplete/ThematiqueAutocompleteFormItem';
import CategoryPublicationAutocompleteFormItem from 'src/view/categoryPublication/autocomplete/CategoryPublicationAutocompleteFormItem';

const schema = yup.object().shape({
  thematique: yupFilterSchemas.relationToOne(
    i18n('entities.publication.fields.thematique'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.publication.fields.categorie'),
  ),

  type: yupFilterSchemas.enumerator(
    i18n('entities.publication.fields.type'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.publication.fields.statut'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.publication.fields.dateRange'),
  ),
});

const emptyValues = {
  thematique: null,
  category: null,
  type: null,
  statut: null,
  dateRange: [],
};

const previewRenders = {
  thematique: {
    label: i18n('entities.publication.fields.thematique'),
    render: filterRenders.relationToOne(),
  },
  category: {
    label: i18n('entities.publication.fields.categorie'),
    render: filterRenders.relationToOne(),
  },
  type: {
    label: i18n('entities.publication.fields.type'),
    render: filterRenders.enumerator(
      'entities.publication.enumerators.type',
    ),
  },
  statut: {
    label: i18n('entities.publication.fields.statut'),
    render: filterRenders.enumerator(
      'entities.publication.enumerators.statut',
    ),
  },
  dateRange: {
    label: i18n('entities.publication.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
};

const PublicationListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    if (props.filter)
      return {
        ...emptyValues,
        statut: 'Archivé',
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
                      'entities.publication.fields.thematique',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <CategoryPublicationAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.publication.fields.categorie',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>

                <Col xs={24} md={24} lg={12}>
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
                      layout={filterItemLayout}
                    />
                  </Col>
                ) : (
                  <Col xs={24} md={24} lg={12}>
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
                      layout={filterItemLayout}
                    />
                  </Col>
                )}
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.publication.fields.dateRange',
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

export default PublicationListFilter;
