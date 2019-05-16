import React from 'react';
import photoFine from "../assets/img/photos/foto-multa.jpg";
import finePark from "../assets/img/photos/photo-park.png";
import fineSpeed from "../assets/img/photos/fine-speed.png";
import fineTrafficLight from "../assets/img/photos/traffic-light-in-red.png";

export const fines = [
  {
    id: 0,
    title: 'Multa por mal estacionamiento',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
    longDescription:
      {
        office: 'Medellín',
        date: '20/04/2019',
        ref1: '1f12312',
        direction: 'Cra 98 #B sur 312',
        plateNumber: 'HZD 321',
        phone: '981-231-2233',
        infractionCode: '00000000',
        totalToPay: '123.123.787'
      },
    img: finePark,
    time: '2h ago'
  },
  {
    id: 1,
    title: 'Multa por foto',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    longDescription:
    {
      office: 'Bogotá',
      date: '20/04/2019',
      ref1: '1f12312',
      direction: 'Cra 98 #B sur 312',
      plateNumber: 'HZD 321',
      phone: '981-231-2233',
      infractionCode: '00000000',
      totalToPay: '123.123.787'
    },
    img: photoFine,
    time: '3days ago'
  },
  {
    id: 2,
    title: 'Multa por velocidad',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    longDescription:
    {
      office: 'Cucuta',
      date: '20/04/2019',
      ref1: '1f12312',
      direction: 'Cra 98 #B sur 312',
      plateNumber: 'HZD 321',
      phone: '981-231-2233',
      infractionCode: '00000000',
      totalToPay: '123.123.787'
    },
    img: fineSpeed,
    time: '1year ago'
  },
  {
    id: 3,
    title: 'Multa semaforo en rojo',
    shortDescription: '',
    longDescription:
    {
      office: 'Envigado',
      date: '20/04/2019',
      ref1: '1f12312',
      direction: 'Cra 98 #B sur 312',
      plateNumber: 'HZD 321',
      phone: '981-231-2233',
      infractionCode: '00000000',
      totalToPay: '123.123.787'
    },
    img: fineTrafficLight,
    time: '3year ago'
  },
  {
    id: 4,
    title: 'Multa por velocidad',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    longDescription:
    {
      office: 'Barranquilla',
      date: '20/04/2019',
      ref1: '1f12312',
      direction: 'Cra 98 #B sur 312',
      plateNumber: 'HZ 30',
      phone: '981-231-2233',
      infractionCode: '00000000',
      totalToPay: '123.123.787'
    },
    img: fineSpeed,
    time: '3year ago'
  },
];

export const dateInsp =[
  {title: 'No Disponible', date: '2019-05-01' },
  {title: 'No Disponible', date: '2019-05-02' },
  {title: 'No Disponible', date: '2019-05-03' },
  {title: 'No Disponible', date: '2019-05-09' }
];
