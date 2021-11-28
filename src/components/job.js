import React from "react";
import { FormattedDate } from "react-intl";
import { FormattedMessage } from "react-intl";


const numberFormat1 = new Intl.NumberFormat()


const Job = (props) => {

  var mill;
  props.offer.salary === 1? mill = "million": mill ="millions";


  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {props.offer.salary+" "}<FormattedMessage id={mill}/>
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
            value={new Date(props.offer.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />
      </td>
      <td>
            {numberFormat1.format(props.offer.views)}
      </td>
    </tr>
  );
};

export default Job;
