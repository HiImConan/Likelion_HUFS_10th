export const whatKindOfThisFoodIs = (category) => {
  switch (category) {
    case "한식":
      return Image.kr;
    case "중식":
      return Image.cn;
    case "일식":
      return Image.jp;
    case "양식":
      return Image.west;
    case "카페":
      return Image.coffee;
    default:
      return Image.def;
  }
};

export const Image = {
  kr: "/img/rice.png",
  cn: "/img/dimsum.png",
  jp: "/img/sushi.png",
  west: "/img/restaurant.png",
  coffee: "/img/coffee.png",
  def: "/img/burger.png",
  trashcan: "/img/trash.png",
  checkbox: "/img/check-box.png",
  emptybox: "/img/check-box-empty.png",
};
