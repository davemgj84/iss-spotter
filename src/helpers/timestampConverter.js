const addSuffix = (day) => {
  const dayString = day.toString();
  const dayArray = dayString.split("");
  const checkLast = (data) => {
    return data.length > 1 ? data[data.length - 1] : data[0];
  };
  return checkLast(dayArray) === "1"
    ? day + "st"
    : checkLast(dayArray) === "2"
    ? day + "nd"
    : checkLast(dayArray) === "3"
    ? day + "rd"
    : day + "th";
};

const timestampConverter = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const day = days[a.getDay()];
  const hour = a.getHours() < 10 ? `0${a.getHours()}` : a.getHours();
  const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
  const sec = a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds();
  const time = `${day} - ${month} ${addSuffix(
    date
  )} - ${year}, at ${hour}:${min}:${sec}`;
  return time;
};

export default timestampConverter;
