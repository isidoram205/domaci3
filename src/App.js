import React from 'react';
import NavBar from './navBar';
import Proizvodi from './proizvodi';

function App() {
  const proizvodi = [
    {
      id: 1,
      title: "AHA gel serum 40%",
      description:
        "Gel serum 40 % sa voćnim kiselinama namenjen isključivo profesionalnoj upotrebi u kozmetičkim salonima.",
      amount: 0,
      url: "https://primakozmetika.com/wp-content/webp-express/webp-images/uploads/2019/04/20201207-AHA-40.jpg.webp",
    },
    {
      id: 2,
      title: "AHA Neutralizator",
      description:
        "pecijalno formulisan proizvod koji zaustavlja proces pilinga voćnim kiselinama i potpuno ih neutrališe.",
      amount: 0,
      url: "https://primakozmetika.com/wp-content/webp-express/webp-images/uploads/2019/04/neutralizator.jpg.webp",
    },
    {
      id: 3,
      title: "Hydro Force antirid krema",
      description:
        "Antirid gel krema sa hijaluronskom kiselinom je laka gel podloga, veoma pogodna za nežnu kožu oko očiju.",
      amount: 0,
      url: "https://primakozmetika.com/wp-content/webp-express/webp-images/uploads/2020/11/Hydro-force-krema-antirid-700x700.png.webp",
    },
    {
    id: 4,
    title: "Derma Calm krema za lice za osetljivu kožu",
    description:
      "Nežna krema za lice sa hijaluronom i bisabololom, aloe verom i shea buterom, pomaže regeneraciju i revitalizaciju osetljive, iritirane i umorne kože.",
    amount: 0,
    url: "https://primakozmetika.com/wp-content/webp-express/webp-images/uploads/2019/12/Derma-calm-krema-700x700.png.webp",
  },
  {
    id: 5,
    title: "Skin Rescue noćna krema za lice za problematičnu kožu",
    description:
      "Noćna krema za lice sa ihtiolom i niacinamidom nemasne formulacije namenjena je masnoj i aknoznoj koži lica. ",
    amount: 0,
    url: "https://primakozmetika.com/wp-content/webp-express/webp-images/uploads/2019/04/Skin-rescue-nocna-krema-700x700.png.webp",
  },
  ];

  return (
    <div className="App">
      <NavBar />
      <Proizvodi proizvodi = {proizvodi}/>
    </div>
  );
}

export default App;

