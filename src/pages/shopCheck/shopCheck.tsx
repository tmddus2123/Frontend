import { Link as RouterLink, useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

import MainContainer from '@/components/mainContainer/mainContainer';

// TODO: router state값 없을 경우 로직 추가
export default function ShopCheck() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const shopName = state?.shopName;
  const selectedFoodType = state?.selectedFoodType;

  return (
    <Container>
      <Title>
        <p>
          <strong>{shopName || ''}</strong>를 판매하는
        </p>
        <p>
          <strong>{selectedFoodType?.name || ''}</strong> 사장님이시군요!
        </p>
        <p>이렇게 정보 설정을 완료할까요?</p>
      </Title>
      <Content>
        <img src={selectedFoodType?.selectedImage} alt='' />
      </Content>
      <LinkContainer>
        <BackButton onClick={() => navigate(-1)}>
          아니요, 다시 입력할래요
        </BackButton>
        <Link to='#' className='success'>
          리뷰 답변 자동 생성 시작하기
        </Link>
      </LinkContainer>
    </Container>
  );
}

const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

const Title = styled.section`
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  strong {
    color: ${({ theme }) => theme.colors['primary-500']};
    font-family: 'GmarketSansBold';
    font-weight: 700;
  }
`;

const Content = styled.section`
  background: ${({ theme }) => theme.colors['white']};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  img {
    width: 250px;
    height: 250px;
  }
`;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BackButton = styled.button`
  font-size: 13px;
  color: ${({ theme }) => theme.colors['gray-600']};
  text-decoration: underline;
  text-align: center;
`;

const Link = styled(RouterLink)`
  &.success {
    background: ${({ theme }) => theme.colors['primary-500']};
    color: ${({ theme }) => theme.colors['white']};
    font-size: 13px;
    font-weight: 600;
    padding: 12px 0;
    border-radius: 12px;
    text-align: center;
  }
`;
