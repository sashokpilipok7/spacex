import { useMemo } from "react";
import styled from "styled-components";

import { Launch } from "types/index";

type Props = {
  data: Launch;
};

const Details: React.FC<Props> = ({ data }) => {
  const formattedData = useMemo(() => {
    return new Date(data.date_utc).toDateString();
  }, [data.date_utc]);
  return (
    <Wrapper>
      <img src={data.links.patch.small} alt={data.details} />
      <p>
        <b>Rocket Name -</b> {data.rocket.name}
      </p>
      <p>
        <b>Flight Number -</b> {data.flight_number}
      </p>
      <p>
        <b>Name -</b> {data.name}
      </p>
      <p>
        <b>Date -</b> {formattedData}
      </p>
      <p>
        <b>Details -</b> {data.details}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  text-align: center;
  gap: 8px;
`;

export default Details;
