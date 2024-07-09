export const calcDiscount = (price: number, discount?:number) => {
	if (discount === undefined) return price;

	const discountAmount = (price * discount) / 100;
	const culckPriceWhithDiscount = price - discountAmount;

	return culckPriceWhithDiscount;
};
