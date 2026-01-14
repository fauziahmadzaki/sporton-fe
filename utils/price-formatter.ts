function priceFormatter(price: number) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default priceFormatter;
