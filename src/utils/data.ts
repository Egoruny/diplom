export const  discountData = [
	{
		id: generateRandomId(),
		productDiscription: "Смартфон Apple Iphobne10 128GB",
		price:  2500,
		discount: 0,
		isAvalible: false,
		inBasket: false,
		inBasketCount: 1,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		id: generateRandomId(),

		productDiscription: "Смартфон Apple Iphobne11 128GB",
		price: 2500,
		discount: 4,
		isAvalible: true,
		inBasket: false,
		inBasketCount: 1,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		id: generateRandomId(),
		productDiscription: "Смартфон Apple Iphobne12 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: false,
		inBasket: false,
		inBasketCount: 1,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		id: generateRandomId(),
		productDiscription: "Смартфон Apple Iphobne13 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: true,
		inBasket: false,
		inBasketCount: 1,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		id: generateRandomId(),
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: true,
		inBasket: false,
		inBasketCount: 1,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
];


function generateRandomId() {
	const characters =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	const length = 8;
	let randomId = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomId += characters.charAt(randomIndex);
	}

	return randomId;
}