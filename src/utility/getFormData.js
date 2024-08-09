export default function getFormData(object, boq = false) {
  const formData = new FormData();
  if (boq) {
    Object.keys(object).forEach((key) => {
      if (key === "BOQ") {
        formData.append(key, JSON.stringify(object[key]));
      } else {
        formData.append(key, object[key]);
      }
    });
    return formData;
  } else {
    // Object.entries(object).forEach((key) => console.log(key));
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
}
