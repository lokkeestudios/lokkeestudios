function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formattedDateString = date.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return formattedDateString;
}

export default formatDate;
