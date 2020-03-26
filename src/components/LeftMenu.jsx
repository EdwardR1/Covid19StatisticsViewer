import React, {Fragment} from "react";
import { Heading } from ".";
import { formatNumber as format  } from '../services/textFormatter';

const LeftMenu = ({ generalStatistics, serious }) => (
  <Fragment>
    <div>
      <h1 style={{color: "#f8f8f8"}}>Core Statistics</h1>
    </div>
    <div className="btn btn-info">
      <Heading title="Cases" data={format(generalStatistics["cases"])} />
    </div>
    <br />
    <div className="btn btn-success">
      <Heading title="Recovered" data={format(generalStatistics["recovered"])} />
    </div>
    <br />
    <div className="btn btn-danger">
      <Heading title="Deaths" data={format(generalStatistics["deaths"])} />
    </div>
    <br />
    <div className="btn btn-warning">
      <Heading title="Serious" data={format(serious)} />
    </div>
  </Fragment>
);

export { LeftMenu };
