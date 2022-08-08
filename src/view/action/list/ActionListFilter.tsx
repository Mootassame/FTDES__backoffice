import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/action/list/actionListActions';
import selectors from 'src/modules/action/list/actionListSelectors';
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
import actionEnumerators from 'src/modules/action/actionEnumerators';
import MouvementAutocompleteFormItem from 'src/view/mouvement/autocomplete/MouvementAutocompleteFormItem';

const schema = yup.object().shape({
  sujet: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.sujet'),
  ),
  region: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.region'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.type'),
  ),
  genre: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.genre'),
  ),
  categorie: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.categorie'),
  ),
  espace: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.espace'),
  ),
  acteurs: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.acteurs'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.action.fields.description'),
  ),
  modeAction: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.modeAction'),
  ),
  mouvement: yupFilterSchemas.relationToOne(
    i18n('entities.action.fields.mouvement'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.action.fields.statut'),
  ),
});

const emptyValues = {
  sujet: null,
  region: null,
  espace: null,
  acteurs: null,
  type: null,
  genre: null,
  categorie: null,
  description: null,
  modeAction: null,
  mouvement: null,
};

const previewRenders = {
  sujet: {
    label: i18n('entities.action.fields.sujet'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.sujet',
    ),
  },
  region: {
    label: i18n('entities.action.fields.region'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.region',
    ),
  },
  type: {
    label: i18n('entities.action.fields.type'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.type',
    ),
  },
  genre: {
    label: i18n('entities.action.fields.genre'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.genre',
    ),
  },
  categorie: {
    label: i18n('entities.action.fields.categorie'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.categorie',
    ),
  },
  espace: {
    label: i18n('entities.action.fields.espace'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.espace',
    ),
  },
  acteurs: {
    label: i18n('entities.action.fields.acteurs'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.acteurs',
    ),
  },
  description: {
    label: i18n('entities.action.fields.description'),
    render: filterRenders.generic(),
  },
  modeAction: {
    label: i18n('entities.action.fields.modeAction'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.modeAction',
    ),
  },
  mouvement: {
    label: i18n('entities.action.fields.mouvement'),
    render: filterRenders.relationToOne(),
  },
  statut: {
    label: i18n('entities.action.fields.statut'),
    render: filterRenders.enumerator(
      'entities.action.enumerators.statut',
    ),
  },
};

const ActionListFilter = (props) => {
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
                      'entities.action.fields.sujet',
                    )}
                    options={actionEnumerators.sujet.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.sujet.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="region"
                    label={i18n(
                      'entities.action.fields.region',
                    )}
                    options={actionEnumerators.region.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.region.${value}`,
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
                      'entities.action.fields.statut',
                    )}
                    options={actionEnumerators.statut.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.statut.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.action.fields.type',
                    )}
                    options={actionEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.type.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="genre"
                    label={i18n('entities.action.fields.genre')}
                    options={actionEnumerators.genre.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.genre.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="categorie"
                    label={i18n('entities.action.fields.categorie')}
                    options={actionEnumerators.categorie.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.categorie.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col> */}
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="espace"
                    label={i18n(
                      'entities.action.fields.espace',
                    )}
                    options={actionEnumerators.espace.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.espace.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="acteurs"
                    label={i18n(
                      'entities.action.fields.acteurs',
                    )}
                    options={actionEnumerators.acteurs.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.acteurs.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.action.fields.description')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="modeAction"
                    label={i18n('entities.action.fields.modeAction')}
                    options={actionEnumerators.modeAction.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.action.enumerators.modeAction.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <MouvementAutocompleteFormItem  
                    name="mouvement"
                    label={i18n('entities.action.fields.mouvement')}        
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

export default ActionListFilter;
