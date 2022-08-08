import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artiste/list/artisteListActions';
import selectors from 'src/modules/artiste/list/artisteListSelectors';
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
import EspaceArtistiqueAutocompleteFormItem from 'src/view/espaceArtistique/autocomplete/EspaceArtistiqueAutocompleteFormItem';
import DomaineAutocompleteFormItem from 'src/view/domaine/autocomplete/DomaineAutocompleteFormItem';

const schema = yup.object().shape({
  nom: yupFilterSchemas.string(
    i18n('entities.artiste.fields.nom'),
  ),
  prenom: yupFilterSchemas.string(
    i18n('entities.artiste.fields.prenom'),
  ),
  domaine: yupFilterSchemas.relationToOne(
    i18n('entities.artiste.fields.domaine'),
  ),
  adresse: yupFilterSchemas.string(
    i18n('entities.artiste.fields.adresse'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.artiste.fields.email'),
  ),
  phoneNumberRange: yupFilterSchemas.integerRange(
    i18n('entities.artiste.fields.phoneNumberRange'),
  ),
  espaceArtistique: yupFilterSchemas.relationToOne(
    i18n('entities.artiste.fields.espaceArtistique'),
  ),
});

const emptyValues = {
  nom: null,
  prenom: null,
  domaine: null,
  adresse: null,
  email: null,
  phoneNumberRange: [],
  espaceArtistique: null,
};

const previewRenders = {
  nom: {
    label: i18n('entities.artiste.fields.nom'),
    render: filterRenders.generic(),
  },
  prenom: {
    label: i18n('entities.artiste.fields.prenom'),
    render: filterRenders.generic(),
  },
  domaine: {
    label: i18n('entities.artiste.fields.domaine'),
    render: filterRenders.relationToOne(),
  },
  adresse: {
    label: i18n('entities.artiste.fields.adresse'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.artiste.fields.email'),
    render: filterRenders.generic(),
  },
  phoneNumberRange: {
    label: i18n('entities.artiste.fields.phoneNumberRange'),
    render: filterRenders.range(),
  },
  espaceArtistique: {
    label: i18n('entities.artiste.fields.espaceArtistique'),
    render: filterRenders.relationToOne(),
  },
};

const ArtisteListFilter = (props) => {
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
                  <InputFormItem
                    name="nom"
                    label={i18n(
                      'entities.artiste.fields.nom',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="prenom"
                    label={i18n(
                      'entities.artiste.fields.prenom',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DomaineAutocompleteFormItem
                    name="domaine"
                    label={i18n(
                      'entities.artiste.fields.domaine',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="adresse"
                    label={i18n(
                      'entities.artiste.fields.adresse',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="email"
                    label={i18n(
                      'entities.artiste.fields.email',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="phoneNumberRange"
                    label={i18n(
                      'entities.artiste.fields.phoneNumberRange',
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <EspaceArtistiqueAutocompleteFormItem
                    name="espaceArtistique"
                    label={i18n(
                      'entities.artiste.fields.espaceArtistique',
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

export default ArtisteListFilter;
