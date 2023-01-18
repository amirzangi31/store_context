const shorthen = (data) => {
  const text = data.split(" ");

  if (text.length > 2) {
    const result = `${text[0]} ${text[1]} `;

    return result;
  } else {
    return data;
  }
};

const isInCart = (data, id) => {
  const result = !!data.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (data, id) => {
  const index = data.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    const result = data.selectedItems[index].quantity;
    return result;
  }
};
  

const priceProduct = (a,b) => {
      const total = a * b;
      const result = total.toFixed(2)
      return result
}

export { shorthen, isInCart, quantityCount,priceProduct };
