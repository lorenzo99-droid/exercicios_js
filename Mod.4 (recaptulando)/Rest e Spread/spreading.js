const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

const cloneClothes = { ...clothes };

  console.log(cloneClothes);

/* _______________________________________________________*/

const cloneClothesShoes = { ...clothes, shoes: ["yellow", "purple"] };
  console.log(cloneClothesShoes);

/* _______________________________________________________*/

const blusaMeia = {};
  blusaMeia["blusas"] = { ...clothes.shirts };
  blusaMeia["meias"] = { ...clothes.socks };
  console.log(blusaMeia);
