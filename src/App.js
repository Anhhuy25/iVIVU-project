import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import ErrorPage from "./big projects/ErrorPage";
import Footer from "./big projects/footer/Footer";
import Navbar from "./big projects/navbar/Navbar";
import Tours from "./big projects/navbar/Tours";
import PlaneTicket from "./big projects/navbar/PlaneTicket";
import Eat from "./big projects/navbar/Eat";
import SearchInfo from "./big projects/search-destination/SearchInfo";
import SafetyTours from "./big projects/safety-tours/SafetyTours";
import DiscountToday from "./big projects/discount-today/DiscountToday";
import DomesticTourism from "./big projects/destination-tourism/domestic/DomesticTourism";
import InternationalTourism from "./big projects/destination-tourism/international/InternationalTourism";
import SGHNSPHL5N4D from "./big projects/navbar/tours/toursinfo/tours-category/tet/SGHNSPHL5N4D";
import DinnerTitle from "./big projects/navbar/eating/DinnerTitle";
import MealNo1 from "./big projects/navbar/eating/lunch-list/MealNo1";
import MealCart from "./big projects/navbar/eating/MealCart";
import MealNo2 from "./big projects/navbar/eating/lunch-list/MealNo2";
import MealNo3 from "./big projects/navbar/eating/lunch-list/MealNo3";
import MealNo4 from "./big projects/navbar/eating/lunch-list/MealNo4";
import MealNo5 from "./big projects/navbar/eating/lunch-list/MealNo5";
import MealNo6 from "./big projects/navbar/eating/lunch-list/MealNo6";
import MealNo7 from "./big projects/navbar/eating/lunch-list/MealNo7";
import QNPY3N4D from "./big projects/navbar/tours/toursinfo/tours-category/tet/QNPY3N4D";
import HCMYBDBMCHB4N3D from "./big projects/navbar/tours/toursinfo/tours-category/tet/HCMYBDBMCHB4N3D";
import HCMBTCHABN3N2D from "./big projects/navbar/tours/toursinfo/tours-category/tet/HCMBTCHABN3N2D";
import PTGolf from "./big projects/navbar/tours/toursinfo/tours-category/tet/PTGolf";
import HCMHGCBBKTN from "./big projects/navbar/tours/toursinfo/tours-category/tet/HCMHGCBBKTN";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <SearchInfo />
          <SafetyTours />
          <DiscountToday />
          <DomesticTourism />
          <InternationalTourism />
          <Footer />
        </Route>
        {/* Navbar */}
        <Route path="/du-lich" children={<Tours />}></Route>
        <Route path="/ve-may-bay" children={<PlaneTicket />}></Route>
        <Route path="/an-uong" children={<Eat />}></Route>

        {/* Tet Tan Suu */}
        <Route
          path="/tour-mien-bac-5n4d-sai-gon-ha-noi-sapa-ha-long"
          children={<SGHNSPHL5N4D />}
        ></Route>
        <Route
          path="/tour-mien-trung-3n4d-kham-pha-quy-nhon-phu-yen-tau-lua-tet"
          children={<QNPY3N4D />}
        ></Route>
        <Route
          path="/tour-mien-bac-4n3d-hcm-yen-bai-dien-bien-moc-chau-hoa-binh"
          children={<HCMYBDBMCHB4N3D />}
        ></Route>
        <Route
          path="/tour-cao-cap-da-nang-3n2d-hcm-bao-tang-cham-hoi-an-ba-na-tet"
          children={<HCMBTCHABN3N2D />}
        ></Route>
        <Route
          path="/tour-cao-cap-phan-thiet-2n1d-danh-golf-cung-sealink-doi-cat-bay-tet"
          children={<PTGolf />}
        ></Route>
        <Route
          path="/tour-mien-bac-5n4d-hcm-ha-giang-cao-bang-bac-kan-thai-nguyen"
          children={<HCMHGCBBKTN />}
        ></Route>

        {/* Eating */}
        <Route path="/bua-toi" children={<DinnerTitle />}></Route>
        <Route
          path="/bua-trua-dam-da-vi-nam-standard"
          children={<MealNo1 />}
        ></Route>
        <Route
          path="/bua-trua-dam-da-vi-trung-standard"
          children={<MealNo2 />}
        ></Route>
        <Route
          path="/bua-trua-dam-da-vi-bac-standard"
          children={<MealNo3 />}
        ></Route>
        <Route
          path="/bua-trua-thanh-dam-vi-nam-standard"
          children={<MealNo4 />}
        ></Route>
        <Route
          path="/bua-trua-dac-sac-sai-gon-standard"
          children={<MealNo5 />}
        ></Route>
        <Route
          path="/bua-trua-thanh-dam-vi-nam-superior"
          children={<MealNo6 />}
        ></Route>
        <Route
          path="/bua-trua-dac-sac-sai-gon-deluxe"
          children={<MealNo7 />}
        ></Route>
        <Route path="/gio-hang" children={<MealCart />}></Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
