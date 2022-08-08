import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvement/list/mouvementListActions';
import selectors from 'src/modules/mouvement/list/mouvementListSelectors';
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
import mouvementEnumerators from 'src/modules/mouvement/mouvementEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  sujet: yupFilterSchemas.enumerator(
    i18n('entities.mouvement.fields.sujet'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.mouvement.fields.dateRange'),
  ),
  observation: yupFilterSchemas.string(
    i18n('entities.mouvement.fields.observation'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.mouvement.fields.statut'),
  ),
});

const emptyValues = {
  sujet: null,
  dateRange: [],
  observation: null,
};

const previewRenders = {
  sujet: {
    label: i18n('entities.mouvement.fields.sujet'),
    render: filterRenders.enumerator(
      'entities.mouvement.enumerators.sujet',
    ),
  },
  dateRange: {
    label: i18n('entities.mouvement.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  observation: {
    label: i18n('entities.mouvement.fields.observation'),
    render: filterRenders.generic(),
  },
  statut: {
    label: i18n('entities.mouvement.fields.statut'),
    render: filterRenders.enumerator(
      'entities.mouvement.enumerators.statut',
    ),
  },
};

const MouvementListFilter = (props) => {
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
                    name="sujet"
                    label={i18n(
                      'entities.mouvement.fields.sujet',
                    )}
                    options={mouvementEnumerators.sujet.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.mouvement.enumerators.sujet.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.mouvement.fields.dateRange',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="observation"
                    label={i18n(
                      'entities.mouvement.fields.observation',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="statut"
                    label={i18n(
                      'entities.mouvement.fields.statut',
                    )}
                    options={mouvementEnumerators.statut.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.mouvement.enumerators.statut.${value}`,
                        ),
                      }),
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

export default MouvementListFilter;
