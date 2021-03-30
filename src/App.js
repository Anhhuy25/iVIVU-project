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
import PhuQuoc from "./big projects/search-destination/PhuQuoc";
import SafetyTours from "./big projects/safety-tours/SafetyTours";
import NewYear from "./big projects/safety-tours/events/NewYear";
import Active from "./big projects/safety-tours/events/Active";
import OvercomeCovid from "./big projects/safety-tours/events/OvercomeCovid";
import GiftVoucher from "./big projects/safety-tours/events/GiftVoucher";
import DiscountToday from "./big projects/discount-today/DiscountToday";
import VungTau from "./big projects/discount-today/discount/VungTau";
import NinhThuan from "./big projects/discount-today/discount/NinhThuan";
import NovotelPQ from "./big projects/discount-today/discount/NovotelPQ";
import ImperialVT from "./big projects/discount-today/discount/ImperialVT";
import DomesticTourism from "./big projects/destination-tourism/domestic/DomesticTourism";
import PhuQuocHotels from "./big projects/destination-tourism/domestic/domestis-hotels/PhuQuocHotels";
import NhaTrangHotel from "./big projects/destination-tourism/domestic/domestis-hotels/NhaTrangHotel";
import QuyNhonHotels from "./big projects/destination-tourism/domestic/domestis-hotels/QuyNhonHotels";
import VungTauHotels from "./big projects/destination-tourism/domestic/domestis-hotels/VungTauHotels";
import DaNangHotels from "./big projects/destination-tourism/domestic/domestis-hotels/DaNangHotels";
import DaLatHotels from "./big projects/destination-tourism/domestic/domestis-hotels/DaLatHotels";
import PhanThietHotels from "./big projects/destination-tourism/domestic/domestis-hotels/PhanThietHotels";
import SapaHotels from "./big projects/destination-tourism/domestic/domestis-hotels/SapaHotels";
import InternationalTourism from "./big projects/destination-tourism/international/InternationalTourism";
import MaldivesHotels from "./big projects/destination-tourism/international/international-hotels/MaldivesHotels";
import BaliHotels from "./big projects/destination-tourism/international/international-hotels/BaliHotels";
import SingaporeHotels from "./big projects/destination-tourism/international/international-hotels/SingaporeHotels";
import BangkokHotels from "./big projects/destination-tourism/international/international-hotels/BangkokHotels";
import SwitzerlandHotels from "./big projects/destination-tourism/international/international-hotels/SwitzerlandHotels";
import SGHNSPHL5N4D from "./big projects/navbar/tours/toursinfo/tours-category/tet/SGHNSPHL5N4D";
// import TourInfo from './big projects/navbar/tours/toursinfo/TourInfo';
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

        {/* Events */}
        <Route path="/chu-de/tet-tay" children={<NewYear />}></Route>
        <Route path="/chu-de/khach-san-tich-cuc" children={<Active />}></Route>
        <Route path="/chu-de/khach-san-vuot-dich" children={<OvercomeCovid />}></Route>
        <Route path="/voucher-du-lich" children={<GiftVoucher />}></Route>

        {/* Discount-Today */}
        <Route path="/khach-san-vung-tau/khach-san-mercure-vung-tau" children={<VungTau />}></Route>
        <Route path="/khach-san-ninh-thuan/khu-nghi-duong-amanoi-villas-ninh-thuan" children={<NinhThuan />}></Route>
        <Route path="/khach-san-phu-quoc/khu-nghi-duong-novotel-phu-quoc" children={<NovotelPQ />}></Route>
        <Route path="/khach-san-vung-tau/khach-san-imperial-vung-tau" children={<ImperialVT />}></Route>
        <Route path="/khach-san-phu-quoc/khu-nghi-duong-movenpick-waverly-phu-quoc" children={<PhuQuoc />}></Route>

        {/* Destination-Tourism */}
        <Route path="/khach-san-phu-quoc" children={<PhuQuocHotels />}></Route>
        <Route path="/khach-san-nha-trang" children={<NhaTrangHotel />}></Route>
        <Route path="/khach-san-quy-nhon" children={<QuyNhonHotels />}></Route>
        <Route path="/khach-san-vung-tau" children={<VungTauHotels />}></Route>
        <Route path="/khach-san-da-nang" children={<DaNangHotels />}></Route>
        <Route path="/khach-san-da-lat" children={<DaLatHotels />}></Route>
        <Route path="/khach-san-phan-thiet" children={<PhanThietHotels />}></Route>
        <Route path="/khach-san-sapa" children={<SapaHotels />}></Route>
        <Route path="/khach-san-maldives-asia" children={<MaldivesHotels />}></Route>
        <Route path="/khach-san-bali" children={<BaliHotels />}></Route>
        <Route path="/khach-san-singapore" children={<SingaporeHotels />}></Route>
        <Route path="/khach-san-bangkok" children={<BangkokHotels />}></Route>
        <Route path="/khach-san-switzerland" children={<SwitzerlandHotels />}></Route>

        {/* Tet Tan Suu */}
        <Route path="/tour-mien-bac-5n4d-sai-gon-ha-noi-sapa-ha-long" children={<SGHNSPHL5N4D />}></Route>
        <Route path="/tour-mien-trung-3n4d-kham-pha-quy-nhon-phu-yen-tau-lua-tet" children={<QNPY3N4D />}></Route>
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
        <Route path="/tour-mien-bac-5n4d-hcm-ha-giang-cao-bang-bac-kan-thai-nguyen" children={<HCMHGCBBKTN />}></Route>
        {/* <Route path="/:url" children={<TourInfo />}></Route> */}

        {/* Eating */}
        <Route path="/bua-toi" children={<DinnerTitle />}></Route>
        <Route path="/bua-trua-dam-da-vi-nam-standard" children={<MealNo1 />}></Route>
        <Route path="/bua-trua-dam-da-vi-trung-standard" children={<MealNo2 />}></Route>
        <Route path="/bua-trua-dam-da-vi-bac-standard" children={<MealNo3 />}></Route>
        <Route path="/bua-trua-thanh-dam-vi-nam-standard" children={<MealNo4 />}></Route>
        <Route path="/bua-trua-dac-sac-sai-gon-standard" children={<MealNo5 />}></Route>
        <Route path="/bua-trua-thanh-dam-vi-nam-superior" children={<MealNo6 />}></Route>
        <Route path="/bua-trua-dac-sac-sai-gon-deluxe" children={<MealNo7 />}></Route>
        <Route path="/gio-hang" children={<MealCart />}></Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
