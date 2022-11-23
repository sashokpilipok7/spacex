import styled from "styled-components";

import { Launch } from "types/index";

type Props = {
  data: Launch;
  onClick: (launch: Launch) => void;
};

const Preview: React.FC<Props> = ({ data, onClick }) => {
  return (
    <Wrapper onClick={onClick.bind(null, data)}>
      <img src={data.links.patch.small} alt={data.details} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 0;
  width: 33%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #510077;
    transition: 1s;
  }
`;

export default Preview;
