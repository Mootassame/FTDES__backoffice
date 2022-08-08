import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import React, { useEffect, useState } from 'react';
import CategoryPublicationService from 'src/modules/categoryPublication/categoryPublicationService';

const DashboardDoughnutChart = (props) => {
  const [publications, setPublications] = useState([0]);
  const [categories, setCategories] = useState(['']);
  const [colors, setColors] = useState(['']);

  let publicationsArray = [0];
  let categoriesArray = [''];
  let colorsArray = [''];
  let palette = [
    '#335C67',
    '#FFF3B0',
    '#E09F3E',
    '#9E2A2B',
    '#540B0E',
  ];
  useEffect(() => {
    CategoryPublicationService.list('', '', '', '').then(
      (res) => {
        if (res.count > 0) {
          res.rows.forEach((element) => {
            categoriesArray.push(element.title);
            publicationsArray.push(
              element.publications.length,
            );
            for (let i = 0; i <= res.count; i++) {
              palette.map((thing) =>
                colorsArray.push(thing),
              );
            }
          });
          categoriesArray.splice(0, 1);
          publicationsArray.splice(0, 1);
          colorsArray.splice(0, 1);

          setCategories(categoriesArray);
          setPublications(publicationsArray);
          setColors(colorsArray);
        }
      },
    );
  }, []);

  const options = {
    responsive: true,
    title: {
      display: true,
      text: i18n('common.publicationTheme'),
    },
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
  };
  const data = {
    labels: categories,
    datasets: [
      {
        data: publications,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default DashboardDoughnutChart;
