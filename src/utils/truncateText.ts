export const truncateText = (text: string, maxTextLength: number) => {
  if (text.length < maxTextLength) {
    return text;
  }
  return text.substring(0, maxTextLength) + "...";
};
