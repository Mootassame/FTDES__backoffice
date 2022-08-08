import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Col, Form, Row } from 'antd';
import ActionViewItem from 'src/view/action/view/ActionViewItem';

const ViolenceView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row gutter={24}>
        <Col span={24}>
          <fieldset>
            <legend>{i18n('common.informations')}</legend>
            <Row gutter={24}>
              <Col span={12}>
                {Boolean(record.date) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.date',
                    )}
                  >
                    {record.date}
                  </Form.Item>
                )}
                {Boolean(record.region) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.region',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.region.${record.region}`,
                    )}
                  </Form.Item>
                )}
                {Boolean(record.type) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.type',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.type.${record.type}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.mode) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.mode',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.mode.${record.mode}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.cadre) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.cadre',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.cadre.${record.cadre}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.espace) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.espace',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.espace.${record.espace}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.degre) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.degre',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.degre.${record.degre}`,
                    )}
                  </Form.Item>
                )}
              </Col>
              <Col span={12}>
                <Form.Item
                  {...viewItemLayout}
                  label={i18n(
                    'entities.violence.fields.planifie',
                  )}
                >
                  {record.planifie
                    ? i18n('common.yes')
                    : i18n('common.no')}
                </Form.Item>

                {Boolean(record.categorie) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.categorie',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.categorie.${record.categorie}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.traitement) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.traitement',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.traitement.${record.traitement}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.description) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.description',
                    )}
                  >
                    {record.description}
                  </Form.Item>
                )}
                {Boolean(record.objectif) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.objectif',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.objectif.${record.objectif}`,
                    )}
                  </Form.Item>
                )}

                {Boolean(record.explication) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.explication',
                    )}
                  >
                    {record.explication}
                  </Form.Item>
                )}

                {Boolean(record.outil) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.outil',
                    )}
                  >
                    {record.outil}
                  </Form.Item>
                )}

                {Boolean(record.statut) && (
                  <Form.Item
                    {...viewItemLayout}
                    label={i18n(
                      'entities.violence.fields.statut',
                    )}
                  >
                    {i18n(
                      `entities.violence.enumerators.statut.${record.statut}`,
                    )}
                  </Form.Item>
                )}
              </Col>
            </Row>
          </fieldset>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <fieldset>
            <legend>
              {i18n('entities.violence.fields.idAgresseur')}
            </legend>
            {Boolean(record.idAgresseur) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.idAgresseur',
                )}
              >
                {record.idAgresseur}
              </Form.Item>
            )}
            {Boolean(record.nombreAgresseur) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.nombreAgresseur',
                )}
              >
                {record.nombreAgresseur}
              </Form.Item>
            )}
            {Boolean(record.typeAgresseur) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.typeAgresseur',
                )}
              >
                {i18n(
                  `entities.violence.enumerators.typeAgresseur.${record.typeAgresseur}`,
                )}
              </Form.Item>
            )}

            {Boolean(record.genreAgresseur) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.genreAgresseur',
                )}
              >
                {i18n(
                  `entities.violence.enumerators.genreAgresseur.${record.genreAgresseur}`,
                )}
              </Form.Item>
            )}

            {Boolean(record.ageAgresseur) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.ageAgresseur',
                )}
              >
                {record.ageAgresseur}
              </Form.Item>
            )}
          </fieldset>
        </Col>
        <Col span={12}>
          <fieldset>
            <legend>
              {i18n('entities.violence.fields.idAgresse')}
            </legend>
            {Boolean(record.idAgresse) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.idAgresse',
                )}
              >
                {record.idAgresse}
              </Form.Item>
            )}

            {Boolean(record.nombreAgresse) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.nombreAgresse',
                )}
              >
                {record.nombreAgresse}
              </Form.Item>
            )}

            {Boolean(record.typeAgresse) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.typeAgresse',
                )}
              >
                {i18n(
                  `entities.violence.enumerators.typeAgresse.${record.typeAgresse}`,
                )}
              </Form.Item>
            )}

            {Boolean(record.genreAgresse) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.genreAgresse',
                )}
              >
                {i18n(
                  `entities.violence.enumerators.genreAgresse.${record.genreAgresse}`,
                )}
              </Form.Item>
            )}

            {Boolean(record.ageAgresse) && (
              <Form.Item
                {...viewItemLayout}
                label={i18n(
                  'entities.violence.fields.ageAgresse',
                )}
              >
                {record.ageAgresse}
              </Form.Item>
            )}
          </fieldset>
        </Col>
      </Row>
    </ViewWrapper>
  );
};

export default ViolenceView;
