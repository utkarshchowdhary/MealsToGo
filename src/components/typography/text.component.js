import styled, { css } from 'styled-components/native';

const defaultTextStyles = (theme) => css`
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
`;

const body = (theme) => css`
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => css`
  color: ${theme.colors.text.error};
`;

const caption = (theme) => css`
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => css`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
