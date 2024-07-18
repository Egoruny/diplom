export const calcDiscount = (price: number, discount: number) => {
		const discountAmount = (price * discount) / 100;
		const culckPriceWhithDiscount = price - discountAmount;

		return culckPriceWhithDiscount;

};
