import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/violence/list/violenceListActions';
import selectors from 'src/modules/violence/list/violenceListSelectors';
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
import violenceEnumerators from 'src/modules/violence/violenceEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ActionAutocompleteFormItem from 'src/view/action/autocomplete/ActionAutocompleteFormItem';

const schema = yup.object().shape({
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.violence.fields.dateRange'),
  ),

  region: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.region'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.type'),
  ),
  mode: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.mode'),
  ),
  cadre: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.cadre'),
  ),
  espace: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.espace'),
  ),
  degre: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.degre'),
  ),
  planifie: yupFilterSchemas.boolean(
    i18n('entities.violence.fields.planifie'),
  ),
  categorie: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.categorie'),
  ),
  traitement: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.traitement'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.violence.fields.description'),
  ),
  idAgresseur: yupFilterSchemas.string(
    i18n('entities.violence.fields.idAgresseur'),
  ),
  objectif: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.objectif'),
  ),
  explication: yupFilterSchemas.string(
    i18n('entities.violence.fields.explication'),
  ),
  outil: yupFilterSchemas.string(
    i18n('entities.violence.fields.outil'),
  ),
  typeAgresseur: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.typeAgresseur'),
  ),
  nombreAgresseurRange: yupFilterSchemas.integerRange(
    i18n('entities.violence.fields.nombreAgresseurRange'),
  ),
  genreAgresseur: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.genreAgresseur'),
  ),
  ageAgresseurRange: yupFilterSchemas.integerRange(
    i18n('entities.violence.fields.ageAgresseurRange'),
  ),
  idAgresse: yupFilterSchemas.string(
    i18n('entities.violence.fields.idAgresse'),
  ),
  nombreAgresseRange: yupFilterSchemas.integerRange(
    i18n('entities.violence.fields.nombreAgresseRange'),
  ),
  typeAgresse: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.typeAgresse'),
  ),
  genreAgresse: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.genreAgresse'),
  ),
  ageAgresseRange: yupFilterSchemas.integerRange(
    i18n('entities.violence.fields.ageAgresseRange'),
  ),
  action: yupFilterSchemas.relationToOne(
    i18n('entities.violence.fields.action'),
  ),
  statut: yupFilterSchemas.enumerator(
    i18n('entities.violence.fields.statut'),
  ),
});

const emptyValues = {
  dateRange: [],
  region: null,
  type: null,
  mode: null,
  cadre: null,
  espace: null,
  degre: null,
  planifie: null,
  categorie: null,
  traitement: null,
  description: null,
  idAgresseur: null,
  objectif: null,
  explication: null,
  outil: null,
  typeAgresseur: null,
  nombreAgresseurRange: [],
  genreAgresseur: null,
  ageAgresseurRange: [],
  idAgresse: null,
  nombreAgresseRange: [],
  typeAgresse: null,
  genreAgresse: null,
  ageAgresseRange: [],
  action: null,
};

const previewRenders = {
  dateRange: {
    label: i18n('entities.violence.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  region: {
    label: i18n('entities.violence.fields.region'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.region',
    ),
  },
  type: {
    label: i18n('entities.violence.fields.type'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.type',
    ),
  },
  mode: {
    label: i18n('entities.violence.fields.mode'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.mode',
    ),
  },
  cadre: {
    label: i18n('entities.violence.fields.cadre'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.cadre',
    ),
  },
  espace: {
    label: i18n('entities.violence.fields.espace'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.espace',
    ),
  },
  degre: {
    label: i18n('entities.violence.fields.degre'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.degre',
    ),
  },
  planifie: {
    label: i18n('entities.violence.fields.planifie'),
    render: filterRenders.boolean(),
  },
  categorie: {
    label: i18n('entities.violence.fields.categorie'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.categorie',
    ),
  },
  traitement: {
    label: i18n('entities.violence.fields.traitement'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.traitement',
    ),
  },
  description: {
    label: i18n('entities.violence.fields.description'),
    render: filterRenders.generic(),
  },
  idAgresseur: {
    label: i18n('entities.violence.fields.idAgresseur'),
    render: filterRenders.generic(),
  },
  objectif: {
    label: i18n('entities.violence.fields.objectif'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.objectif',
    ),
  },
  explication: {
    label: i18n('entities.violence.fields.explication'),
    render: filterRenders.generic(),
  },
  outil: {
    label: i18n('entities.violence.fields.outil'),
    render: filterRenders.generic(),
  },
  typeAgresseur: {
    label: i18n('entities.violence.fields.typeAgresseur'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.typeAgresseur',
    ),
  },
  nombreAgresseurRange: {
    label: i18n(
      'entities.violence.fields.nombreAgresseurRange',
    ),
    render: filterRenders.range(),
  },
  genreAgresseur: {
    label: i18n('entities.violence.fields.genreAgresseur'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.genreAgresseur',
    ),
  },
  ageAgresseurRange: {
    label: i18n(
      'entities.violence.fields.ageAgresseurRange',
    ),
    render: filterRenders.range(),
  },
  idAgresse: {
    label: i18n('entities.violence.fields.idAgresse'),
    render: filterRenders.generic(),
  },
  nombreAgresseRange: {
    label: i18n(
      'entities.violence.fields.nombreAgresseRange',
    ),
    render: filterRenders.range(),
  },
  typeAgresse: {
    label: i18n('entities.violence.fields.typeAgresse'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.typeAgresse',
    ),
  },
  genreAgresse: {
    label: i18n('entities.violence.fields.genreAgresse'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.genreAgresse',
    ),
  },
  ageAgresseRange: {
    label: i18n('entities.violence.fields.ageAgresseRange'),
    render: filterRenders.range(),
  },
  action: {
    label: i18n('entities.violence.fields.action'),
    render: filterRenders.relationToOne(),
  },
  statut: {
    label: i18n('entities.violence.fields.statut'),
    render: filterRenders.enumerator(
      'entities.violence.enumerators.statut',
    ),
  },
};

const ViolenceListFilter = (props) => {
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
                {/* <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n('entities.violence.fields.dateRange')}    
                    layout={filterItemLayout}
                  />
                </Col> */}
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="espace"
                    label={i18n('entities.violence.fields.espace')}
                    options={violenceEnumerators.espace.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.espace.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col> */}
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="planifie"
                    label={i18n(
                      'entities.violence.fields.planifie',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
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
                    layout={filterItemLayout}
                  />
                </Col>
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="traitement"
                    label={i18n('entities.violence.fields.traitement')}
                    options={violenceEnumerators.traitement.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.traitement.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="description"
                    label={i18n('entities.violence.fields.description')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="idAgresseur"
                    label={i18n('entities.violence.fields.idAgresseur')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="objectif"
                    label={i18n('entities.violence.fields.objectif')}
                    options={violenceEnumerators.objectif.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.objectif.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="explication"
                    label={i18n('entities.violence.fields.explication')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="outil"
                    label={i18n('entities.violence.fields.outil')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="typeAgresseur"
                    label={i18n('entities.violence.fields.typeAgresseur')}
                    options={violenceEnumerators.typeAgresseur.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.typeAgresseur.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="nombreAgresseurRange"
                    label={i18n('entities.violence.fields.nombreAgresseurRange')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="genreAgresseur"
                    label={i18n('entities.violence.fields.genreAgresseur')}
                    options={violenceEnumerators.genreAgresseur.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.genreAgresseur.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="ageAgresseurRange"
                    label={i18n('entities.violence.fields.ageAgresseurRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="idAgresse"
                    label={i18n('entities.violence.fields.idAgresse')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="nombreAgresseRange"
                    label={i18n('entities.violence.fields.nombreAgresseRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="typeAgresse"
                    label={i18n('entities.violence.fields.typeAgresse')}
                    options={violenceEnumerators.typeAgresse.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.typeAgresse.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="genreAgresse"
                    label={i18n('entities.violence.fields.genreAgresse')}
                    options={violenceEnumerators.genreAgresse.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.violence.enumerators.genreAgresse.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="ageAgresseRange"
                    label={i18n('entities.violence.fields.ageAgresseRange')}      
                    layout={filterItemLayout}
                  />
                </Col> */}
                {/* <Col xs={24} md={24} lg={12}>
                  <ActionAutocompleteFormItem  
                    name="action"
                    label={i18n('entities.violence.fields.action')}        
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

export default ViolenceListFilter;
