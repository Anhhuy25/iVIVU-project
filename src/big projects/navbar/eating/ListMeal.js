// Meal Images
import hinh1 from "../../img/Eating/listmeal/dui ga nuong____horizontal-720x432.png";
import hinh2 from "../../img/Eating/listmeal/thit kho tieu nam____horizontal-720x432.png";
import hinh3 from "../../img/Eating/listmeal/tom rim tieu____horizontal-720x432.png";
import hinh4 from "../../img/Eating/listmeal/trung duc thit____horizontal-720x432.png";
import hinh5 from "../../img/Eating/listmeal/com tam suon (2)____horizontal-720x432.jpg";
import hinh6 from "../../img/Eating/listmeal/ba chi luoc tom chua____horizontal-720x432.png";
import hinh7 from "../../img/Eating/listmeal/bun bo hue gan (1)____horizontal-720x432.jpg";

// Chefs
import chefTrung from "../../img/Eating/chefs/Chef_Nguyen_Tan_Trung.jpg";
import chefPhap from "../../img/Eating/chefs/Chef_Huynh_Van_Phap.jpg";
import chefTiep from "../../img/Eating/chefs/Chef_Chu_Anh_Tiep.png";
import chefToque from "../../img/Eating/chefs/Collection____horizontal.png";

const listMeal = [
  {
    id: 1,
    mealName: "Bữa trưa đậm đà vị Nam",
    mealImg: hinh1,
    rating: ["9.5", "Tuyệt vời", "| 131 đánh giá"],
    chefImg: chefTrung,
    chefName: "Đầu bếp Nguyễn Tấn Trung",
    restaurantName: "Nhà hàng Spice Viet Sài Gòn",
    price: 199000,
    description: "Được yêu thích",
    to: "bua-trua-dam-da-vi-nam-standard",
    taste: "south",
    cook: "warm",
    quantity: 1,
  },
  {
    id: 2,
    mealName: "Bữa trưa đậm đà vị Trung",
    mealImg: hinh2,
    rating: ["9.5", "Tuyệt vời", "| 78 đánh giá"],
    chefImg: chefPhap,
    chefName: "Đầu bếp Huỳnh Văn Pháp",
    restaurantName: "Nhà hàng Spice Viet Huế",
    price: 199000,
    to: "bua-trua-dam-da-vi-trung-standard",
    taste: "central",
    cook: "warm",
    quantity: 1,
  },
  {
    id: 3,
    mealName: "Bữa trưa đậm đà vị Bắc",
    mealImg: hinh3,
    rating: ["9.4", "Tuyệt vời", "| 57 đánh giá"],
    chefImg: chefTiep,
    chefName: "Đầu bếp Chu Anh Tiệp",
    restaurantName: "Nhà hàng Spice Viet Hà Nội",
    price: 199000,
    to: "bua-trua-dam-da-vi-bac-standard",
    taste: "north",
    cook: "warm",
    quantity: 1,
  },
  {
    id: 4,
    mealName: "Bữa trưa thanh đạm",
    mealImg: hinh4,
    rating: ["9.3", "Tuyệt vời", "| 55 đánh giá"],
    chefImg: chefTrung,
    chefName: "Đầu bếp Nguyễn Tấn Trung",
    restaurantName: "Nhà hàng Spice Viet Sài Gòn",
    price: 199000,
    to: "bua-trua-thanh-dam-vi-nam-standard",
    taste: "south",
    cook: "frugal",
    quantity: 1,
  },
  {
    id: 5,
    mealName: "Bữa trưa đặc sắc Sài Gòn",
    mealImg: hinh5,
    rating: ["10", "Tuyệt vời", "| 2 đánh giá"],
    chefImg: chefToque,
    nominated: "Bộ sưu tập món ngon iVIVU đề cử",
    price: 199000,
    to: "bua-trua-dac-sac-sai-gon-standard",
    taste: "collection",
    cook: "warm",
    quantity: 1,
  },
  {
    id: 6,
    mealName: "Bữa trưa thanh đạm",
    mealImg: hinh6,
    rating: ["9.8", "Tuyệt vời", "| 24 đánh giá"],
    chefImg: chefTrung,
    chefName: "Đầu bếp Nguyễn Tấn Trung",
    restaurantName: "Nhà hàng Spice Viet Sài Gòn",
    price: 299000,
    to: "bua-trua-thanh-dam-vi-nam-superior",
    description: "Giải nhiệt mùa hè",
    taste: "south",
    cook: "frugal",
    quantity: 1,
  },
  {
    id: 7,
    mealName: "Bữa trưa đặc sắc Sài Gòn",
    mealImg: hinh7,
    rating: ["9.7", "Tuyệt vời", "| 6 đánh giá"],
    chefImg: chefToque,
    nominated: "Bộ sưu tập món ngon iVIVU đề cử",
    price: 399000,
    to: "bua-trua-dac-sac-sai-gon-deluxe",
    taste: "collection",
    cook: "warm",
    quantity: 1,
  },
];
export default listMeal;
