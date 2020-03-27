import React, { Fragment } from "react";
import { FaHospital, FaBookDead, FaCalendarPlus, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Heading } from ".";
import { formatNumber as format } from "../services/textFormatter";
import { LeftContainer as Container } from "./Wrappers";

const LeftMenu = ({ generalStatistics, serious, casesToday }) => (
  <Fragment>
    <div>
      <h1 style={{ color: "#f8f8f8", fontWeight: 'bold' }}>Totals</h1>
    </div>
    <Container>
      <Heading
        icon={<FaHospital style={{ marginRight: 10 }} size={"2rem"} />}
        title="Cases"
        data={format(generalStatistics["cases"])}
      />
    </Container>
    <br />
    <Container>
      <Heading
        color="#4fe53e"
        icon={<FaCheckCircle style={{ marginRight: 10 }} size={"2rem"} />}
        title="Recovered"
        data={format(generalStatistics["recovered"])}
      />
    </Container>
    <br />
    <Container>
      <Heading
      color="#f59595"
        icon={<FaBookDead style={{ marginRight: 10 }} size={"2rem"} />}
        title="Deceased"
        data={format(generalStatistics["deaths"])}
      />
    </Container>
    <br />
    <Container>
      <Heading
      color="#f3f595"
        icon={<FaExclamationCircle style={{ marginRight: 10 }} size={"2rem"} />}
        title="Serious"
        data={format(serious)}
      />
    </Container>
    <br />
    <Container>
      <Heading
        icon={<FaCalendarPlus style={{ marginRight: 10 }} size={"2rem"} />}
        title="Cases Today"
        data={format(casesToday)}
      />
    </Container>
  </Fragment>
);

export { LeftMenu };

