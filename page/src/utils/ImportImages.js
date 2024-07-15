// src/utils/importImages.js

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|jfif|svg)$/));
  
  export default images;