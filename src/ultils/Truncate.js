const TruncateDescription = (contentText, maxLength) => {
  if (contentText.length > maxLength) {
    return contentText.substring(0, maxLength) + "...";
  }
  return contentText;
};

export default TruncateDescription;
