const pizzeppasJSON = [
    {
        id: 1,
        imgUrl: "https://ted.pizzaforte.hu/desktop/pizzeppa/firenzei.png",
        title: "FIRENZEI",
        price: 2600,
        description: "sour cream, bacon, chicken breast strips, sweetcorn, mozzarella",
        containsCheese: false
    },
    {
        id: 2,
        imgUrl: "https://ted.pizzaforte.hu/desktop/pizzeppa/husimado.png",
        title: "MEETLOVER",
        price: 3100,
        description: "tomato sauce, ham, bacon, chicken breast strips, salami, mozzarella",
        containsCheese: true
    },
    {
        id: 3,
        imgUrl: "https://ted.pizzaforte.hu/desktop/pizzeppa/mediterran.png",
        title: "MEDITERRANEAN",
        price: 3000,
        description: "tomato sauce, chicken breast strips, tomato slices, feta cheese, oregano, mozzarella",
        containsCheese: false
    },
    {
        id: 4,
        imgUrl: "https://ted.pizzaforte.hu/desktop/pizzeppa/sombrero.png",
        title: "SOMBRERO",
        price: 2500,
        description: "mexican style tomato sauce with ground meat, bacon, beans, sweetcorn, mozzarella",
        containsCheese: true
    },
    {
        id: 5,
        imgUrl: "https://ted.pizzaforte.hu/desktop/pizzadog/baconos-pizzadog.png",
        title: "PIZZADOG WITH BACON",
        price: 2500,
        description: "spicy tomato sauce, frankfurter, bacon, mustard, mozzarella",
        containsCheese: true
    },
]

export const fetchPizzeppas = () => {
    return pizzeppasJSON;
}