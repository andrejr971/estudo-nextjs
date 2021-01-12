import { Description, Illustration, Logo, Title, Wrapper } from './styles';

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e StyledComponents',
}) {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </Wrapper>
  );
}
