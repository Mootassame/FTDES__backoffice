import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import CategoryEvenementService from 'src/modules/categoryEvenement/categoryEvenementService';

const DashboardPolarChart = (props) => {
  const [evenements, setEvenements] = useState([0]);
  const [categories, setCategories] = useState(['']);
  const [colors, setColors] = useState(['']);

  let evenementsArray = [0];
  let categoriesArray = [''];
  let palette = [
    '#264653',
    '#2A9D8F',
    '#E9C46A',
    '#F4A261',
    '#E76F51',
  ];
  let colorsArray = [''];

  useEffect(() => {
    CategoryEvenementService.list('', '', '', '').then(
      (res) => {
        if (res.count > 0) {
          res.rows.forEach((element) => {
            categoriesArray.push(element.title);
            evenementsArray.push(element.evenements.length);
          });
          categoriesArray.splice(0, 1);
          evenementsArray.splice(0, 1);
          for (let i = 0; i <= res.count; i++) {
            palette.map((thing) => colorsArray.push(thing));
          }
          colorsArray.splice(0, 1);

          setCategories(categoriesArray);
          setEvenements(evenementsArray);
          setColors(colorsArray);
        }
      },
    );
  }, []);

  const options = {
    responsive: true,
    title: {
      display: true,
      text: i18n('common.evenementTheme'),
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
        data: evenements,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default DashboardPolarChart;
