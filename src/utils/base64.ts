const convertToBase64 = (file: File) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    if (file) reader.readAsDataURL(file);
  });
};

export default convertToBase64;
