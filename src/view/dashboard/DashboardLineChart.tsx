import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { i18n } from 'src/i18n';

import { Bar } from 'react-chartjs-2';
//import UserService from 'src/modules/user/userService';
import PublicationService from 'src/modules/publication/publicationService';
import ArtisteService from 'src/modules/artiste/artisteService';
import EvenementService from 'src/modules/evenement/evenementService';
import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import Chart from "react-chartjs-2";
// import { getHistory } from "src/modules/store";

const DashboardLineChart = (props) => {
  const options = {
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [demandeAppui, setDemandeAppui] = useState(0);
  const [artiste, setArtiste] = useState(0);
  const [publication, setPublication] = useState(0);
  const [evenement, setEvenement] = useState(0);
  useEffect(() => {
    DemandeAppuiService.list('', '', '', '').then((res) => {
      setDemandeAppui(res.count);
    });

    ArtisteService.list('', '', '', '').then((res) => {
      setArtiste(res.count);
    });
    PublicationService.list('', '', '', '').then((res) => {
      setPublication(res.count);
    });
    EvenementService.list('', '', '', '').then((res) => {
      setEvenement(res.count);
    });
  }, []);

  const data = {
    labels: [`DemandeAppui`, `Artiste`, `Publication`, `Evenement`],
    datasets: [
      {
        label: 'Nombre d`entités',
        barPercentage: 0.5,
        backgroundColor: [
          '#AD4E47',
          '#EC948B',
          '#6C1B06',
          '#C84462',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          '#AD4E47',
          '#EC948B',
          '#6C1B06',
          '#C84462',
        ],
        data: [demandeAppui, artiste, publication, evenement],
      },
    ],
  };
  return <Chart type="bar" data={data} options={options} />;
};
export default DashboardLineChart;
