import React from 'react';
import photoFine from "../assets/img/photos/foto-multa.jpg";
import finePark from "../assets/img/photos/photo-park.png";
import fineSpeed from "../assets/img/photos/fine-speed.png";
import fineTrafficLight from "../assets/img/photos/traffic-light-in-red.png";

export const fines = [
  {
    id: 0,
    title: 'Multa por mal estacionamiento',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
    img: finePark,
    time: '2h ago'
  },
  {
    id: 1,
    title: 'Multa por foto',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    img: photoFine,
    time: '3days ago'
  },
  {
    id: 2,
    title: 'Multa por velocidad',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    img: fineSpeed,
    time: '1year ago'
  },
  {
    id: 3,
    title: 'Multa semaforo en rojo',
    description: '',
    img: fineTrafficLight,
    time: '3year ago'
  },
  {
    id: 4,
    title: 'Multa por velocidad',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    img: fineSpeed,
    time: '3year ago'
  },

];
