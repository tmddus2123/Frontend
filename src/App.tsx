import styled from 'styled-components';

function App() {
  return (
    <Container>
      그냥 일반 프리텐다드
      <Light>얇은 폰트 300</Light>
      <Medium>산스를 적용해보아요 500</Medium>
      <Bold>Bold체입니당</Bold>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: 'Pretendard Variable';
`;

const Light = styled.div`
  font-family: 'GmarketSansLight';
`;

const Medium = styled.div`
  font-family: 'GmarketSansMedium';
`;

const Bold = styled.div`
  font-family: 'GmarketSansBold';
`;
