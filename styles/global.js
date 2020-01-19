import { StyleSheet } from 'react-native';

export const colors = {
  purple: "#B1B0D8",
  red: "#E44556",
  yellow: "#FEF16E",
  green: "#7FE879",
  orange: "#F6A57B",
  darkBlue: "#22325E",
  brown: "#652B29",
  lightOrange: "#F0CBB8"
}

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    color: '#333',
      fontFamily: 'nunito-regular',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.purple,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

