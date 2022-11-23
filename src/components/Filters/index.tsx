import styled from "styled-components";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters: React.FC<Props> = ({ onChange }) => {
  return (
    <Wrapper>
      <Title>Filters</Title>
      <div>
        <input type="text" placeholder="Rocket Name" onChange={onChange} />
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
