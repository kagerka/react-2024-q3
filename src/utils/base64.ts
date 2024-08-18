const convertToBase64 = (file: FileList) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    if (file) reader.readAsDataURL(file[0]);
  });
};

export default convertToBase64;
