import styled from 'styled-components/native';

export const BgImage = styled.ImageBackground.attrs({
  source: require('../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BgImageCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const BgImageContentContainer = styled.View`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;
