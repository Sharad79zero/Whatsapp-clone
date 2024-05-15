import {
  Container,
  EncryptionIcon,
  Link,
  Logo,
  LogoWrapper,
  Progress,
  SubTitle,
  Title,
} from "./styles";

type SplashPageProps = {
  progress: number;
};

export default function SplashPage(props: SplashPageProps) {
  const { progress } = props;

  return (
    <Container>
      <LogoWrapper>
        <Logo id="whatsapp" />
      </LogoWrapper>
      <Progress progess={progress} />
      <Title>WhatsApp</Title>
      <SubTitle>
        <EncryptionIcon id="lock" /> End-to-end encrypted. Built for{" "}
        <Link href="https://github.com/Sharad79zero/Whatsapp-clone/" target="_blank">
          CS204 - Integrated Project
        </Link>{" "}
        ❤️.
      </SubTitle>
    </Container>
  );
}