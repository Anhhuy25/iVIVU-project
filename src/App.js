import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Components
import ErrorPage from './big projects/ErrorPage';
import Footer from './big projects/footer/Footer';
import Navbar from './big projects/navbar/Navbar';
import Tours from './big projects/navbar/Tours';
import PlaneTicket from './big projects/navbar/PlaneTicket';
import Eat from './big projects/navbar/Eat';
import SearchInfo from './big projects/search-destination/SearchInfo';
import PhuQuoc from './big projects/search-destination/PhuQuoc';
import AccountBooking from './big projects/navbar/subnav/AccountBooking';
import Handbook from './big projects/navbar/subnav/Handbook';
import Introduce from './big projects/navbar/subnav/Introduce';
import Support from './big projects/navbar/subnav/Support';
import SafetyTours from './big projects/safety-tours/SafetyTours';
import NewYear from './big projects/safety-tours/events/NewYear';
import Active from './big projects/safety-tours/events/Active';
import OvercomeCovid from './big projects/safety-tours/events/OvercomeCovid';
import GiftVoucher from './big projects/safety-tours/events/GiftVoucher';
import DiscountToday from './big projects/discount-today/DiscountToday';
import VungTau from './big projects/discount-today/discount/VungTau';
import NinhThuan from './big projects/discount-today/discount/NinhThuan';
import NovotelPQ from './big projects/discount-today/discount/NovotelPQ';
import ImperialVT from './big projects/discount-today/discount/ImperialVT';
import DomesticTourism from './big projects/destination-tourism/domestic/DomesticTourism';
import PhuQuocHotels from './big projects/destination-tourism/domestic/domestis-hotels/PhuQuocHotels';
import NhaTrangHotel from './big projects/destination-tourism/domestic/domestis-hotels/NhaTrangHotel';
import QuyNhonHotels from './big projects/destination-tourism/domestic/domestis-hotels/QuyNhonHotels';
import VungTauHotels from './big projects/destination-tourism/domestic/domestis-hotels/VungTauHotels';
import DaNangHotels from './big projects/destination-tourism/domestic/domestis-hotels/DaNangHotels';
import DaLatHotels from './big projects/destination-tourism/domestic/domestis-hotels/DaLatHotels';
import PhanThietHotels from './big projects/destination-tourism/domestic/domestis-hotels/PhanThietHotels';
import SapaHotels from './big projects/destination-tourism/domestic/domestis-hotels/SapaHotels';
import InternationalTourism from './big projects/destination-tourism/international/InternationalTourism';
import MaldivesHotels from './big projects/destination-tourism/international/international-hotels/MaldivesHotels';
import BaliHotels from './big projects/destination-tourism/international/international-hotels/BaliHotels';
import SingaporeHotels from './big projects/destination-tourism/international/international-hotels/SingaporeHotels';
import BangkokHotels from './big projects/destination-tourism/international/international-hotels/BangkokHotels';
import SwitzerlandHotels from './big projects/destination-tourism/international/international-hotels/SwitzerlandHotels';

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
        <Route path="/du-lich/" children={<Tours />}></Route>
        <Route path="/ve-may-bay/" children={<PlaneTicket />}></Route>
        <Route path="/an-uong/" children={<Eat />}></Route>
        <Route path="/tai-khoan-dat-phong/" children={<AccountBooking />}></Route>
        <Route path="/cam-nang-du-lich/" children={<Handbook />}></Route>
        <Route path="/gioi-thieu/" children={<Introduce />}></Route>
        <Route path="/ho-tro/" children={<Support />}></Route>

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
        <Route path="/khach-san-quy-nhon" children={<QuyNhonHotels />} ></Route>
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

        <Route path="/dieu-kien-dieu-khoan/"></Route>
        <Router path="*">
          <ErrorPage />
        </Router>
      </Switch>

    </Router>
  );
};

export default App;