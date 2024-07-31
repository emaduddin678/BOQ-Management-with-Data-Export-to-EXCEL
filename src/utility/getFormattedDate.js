const formateDate = (dateStringP) => {
  // Given date string
  const dateString = dateStringP;

  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Define options for formatting the date
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC", // Adjust as needed for local time
    timeZoneName: "short", // Optional: adds timezone information
  };

  // Create a formatter
  const formatter = new Intl.DateTimeFormat("en-US", options);

  // Format the date
  const formattedDate = formatter.format(date);
//   console.log(formateDate)
  return formattedDate;
};

export default formateDate;