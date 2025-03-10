import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";


const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 22,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 32322,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 23124323,
    },
  ]);



var estilos;
var idioma = navigator.language.substring(0,2)

idioma === "en"? estilos={ color: 'white',background: 'black'} : estilos={color: 'black',background: "#EEEEEE"};


  return (  
    
    <div>
      <table className="table"  >
        <thead className="thead-dark">
          <tr style={estilos} >  
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id='Position'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Company'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Salary'/>
            </th>
            <th scope="col">
              <FormattedMessage id='City'/>
            </th>
            <th scope="col">
              <FormattedMessage id='PublicationDate'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Views'/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>



  );
};

export default JobsList;
