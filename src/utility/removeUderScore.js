const removeUnderScore = (txt) => {
  return txt
    .split("_")
    .map((t) => capitalized(t))
    .join(" ");
};

const capitalized = (capTxt) => {
  const word = capTxt;

  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
};

export default removeUnderScore;
