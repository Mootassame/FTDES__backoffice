import React, { useEffect, useState } from 'react';
import Chart from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

import ThematiqueService from 'src/modules/thematique/thematiqueService';

const DashboardBarChart = (props) => {
  const options = {
    onClick: function (evt, element) {},
    title: {
      display: true,
      text: i18n('common.contenuTheme'),
    },
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [evenements, setevenements] = useState([0]);
  const [publications, setPublications] = useState([0]);
  const [themes, setThemes] = useState(['']);

  let evenementsArray = [0];
  let publicationsArray = [0];
  let themesArray = [''];

  useEffect(() => {
    ThematiqueService.list('', '', '', '').then((res) => {
      if (res.count > 0) {
        res.rows.forEach((element) => {
          themesArray.push(element.titre);
          publicationsArray.push(
            element.publications.length,
          );
        });
        themesArray.splice(0, 1);
        publicationsArray.splice(0, 1);
        setThemes(themesArray);
        setPublications(publicationsArray);
      }
    });
    ThematiqueService.list('', '', '', '').then((res) => {
      if (res.count > 0) {
        res.rows.forEach((element) => {
          evenementsArray.push(element.evenements.length);
        });
        evenementsArray.splice(0, 1);
        setevenements(evenementsArray);
      }
    });
  }, []);
  const labels = themes;
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'bar' as const,
        label: i18n('entities.publication.menu'),
        backgroundColor: 'rgba(197,029,052, 0.2)',
        borderColor: 'rgba(197,029,052)',
        data: publications,
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar' as const,
        label: i18n('entities.evenement.menu'),
        backgroundColor: 'rgba(014,041,075, 0.2)',
        borderColor: 'rgba(014,041,075)',
        data: evenements,
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default DashboardBarChart;
