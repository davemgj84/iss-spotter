const totalTime = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes} minutes and ${seconds} seconds`;
};

export default totalTime;
