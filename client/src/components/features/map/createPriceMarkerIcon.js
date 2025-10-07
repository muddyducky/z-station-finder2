const createPriceMarkerIcon = (price, iconUrl) => {
  const size = 80;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const img = new window.Image();
  img.src = iconUrl;

  return new Promise((resolve) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);

      ctx.font = "bold 22px var(--primary-font)";
      ctx.fillStyle = "var(--white)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(price, size / 2, size / 2);

      resolve(canvas.toDataURL());
    };
    img.onerror = () => {
     
      resolve(iconUrl);
    };
  });
}

export default createPriceMarkerIcon;