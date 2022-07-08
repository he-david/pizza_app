const dessertsJSON = [
    {
        id: 1,
        imgUrl: "https://ted.pizzaforte.hu/mobile/desszertek/makos-guba.png",
        title: "COTTAGE CHEESE CREAM WITH FOREST BERRRIES",
        price: 680
    },
    {
        id: 2,
        imgUrl: "https://ted.pizzaforte.hu/mobile/desszertek/tiramisu.png",
        title: "POPPY DUMPLINGS",
        price: 890
    },
    {
        id: 3,
        imgUrl: "https://ted.pizzaforte.hu/desktop/desszertek/profitterol.png",
        title: "PROFITTEROL",
        price: 1000
    },
    {
        id: 4,
        imgUrl: "https://ted.pizzaforte.hu/desktop/desszertek/somloi-galuska.png",
        title: "SOMLÓI SPONGE CAKE",
        price: 590
    },
    {
        id: 5,
        imgUrl: "https://ted.pizzaforte.hu/desktop/desszertek/tiramisu.png",
        title: "TIRAMISU",
        price: 990
    },
]

export const fetchDesserts = () => {
    return dessertsJSON;
}