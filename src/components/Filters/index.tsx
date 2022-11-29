import styled from "styled-components";

type Props = {
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeQuery: (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => void;
};

const Filters: React.FC<Props> = ({ onChangeFilter, onChangeQuery }) => {
  return (
    <Wrapper>
      <Title>Filters</Title>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => onChangeQuery(e, "name")}
        />
        <input
          type="text"
          placeholder="Flight number"
          onChange={(e) => onChangeQuery(e, "flight_number")}
        />
        <input
          type="text"
          placeholder="Rocket Name"
          onChange={onChangeFilter}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #510077;
`;

export default Filters;
