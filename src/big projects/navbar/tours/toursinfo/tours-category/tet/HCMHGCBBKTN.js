import React from "react";
import { Link } from "react-router-dom";
import { tetTanSuu } from "../../../listTours";
import { useGlobalContext } from "../../../../../context";

// Components
import NavbarTours from "../../../NavbarTours";
import FooterTop from "../../../FooterTop";
import FooterBottom from "../../../FooterBottom";
import TailorTour from "./TailorTour";
import "./tet.css";

import hinh1 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-song-nho-que-750x390.gif";
import hinh2 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-lan-na-nua.gif";
import hinh3 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-cao-nguyen-da-dong-van-2.gif";
import hinh4 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-nui-doi-quan-ba.gif";
import hinh5 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-dinh-thu-vua-meo.gif";
import hinh6 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-cot-co-lung-cu.gif";
import hinh7 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-nho-que-hem-tu-san.gif";
import hinh8 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-song-gam.gif";
import hinh9 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-thuong-lam-tuyen-quang.gif";
import hinh10 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-na-hang-tuyen-quang.gif";
import hinh11 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-dong-hua-ma.gif";
import hinh12 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMHGCBBKTN/ivivu-thac-tat-ma.gif";

const HCMHGCBBKTN = () => {
  const HCMtoHGCBBKTN = tetTanSuu.find(
    tour => tour.to === "tour-mien-bac-5n4d-hcm-ha-giang-cao-bang-bac-kan-thai-nguyen",
  );
  const { to, name, price } = HCMtoHGCBBKTN;

  const {
    showTableDay0403,
    setShowTable0403,
    showTableDay1103,
    setShowTable1103,
    showTableDay1803,
    setShowTable1803,
    numberAdult,
    setNumberAdult,
    numberChildren,
    setNumberChildren,
    requireOrWatch,
    setRequireOrWatch,
    showPriceAndTotal,
    setShowPriceAndTotal,
    showPriceChildren,
    setShowPriceChildren,
    listAge,
    selectAge,
    setSelectAge,
    showSingleRoom,
    setShowSingleRoom,
    firstTerm,
    setFirstTerm,
    secondTerm,
    setSecondTerm,
    thirdTerm,
    setThirdTerm,
    fourthTerm,
    setFourthTerm,
  } = useGlobalContext();

  // Show Table Booking
  const handleClickPlus0403 = () => {
    setShowTable0403(false);
    setShowTable1103(true);
    setShowTable1803(true);
  };
  const handleClickPlus1103 = () => {
    setShowTable0403(true);
    setShowTable1103(false);
    setShowTable1803(true);
  };
  const handleClickPlus1803 = () => {
    setShowTable0403(true);
    setShowTable1103(true);
    setShowTable1803(false);
  };

  // Close Table booking
  const handleClickMinus0403 = () => {
    setShowTable0403(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };
  const handleClickMinus1103 = () => {
    setShowTable1103(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };
  const handleClickMinus1803 = () => {
    setShowTable1803(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };

  const handleClickSelect = () => {
    setShowPriceAndTotal(false);
    setShowPriceChildren(false);
    setRequireOrWatch("Xem gia");
  };
  // Add-Remove List age
  const addListAge = index => {
    listAge.push(
      <select
        onClick={handleClickSelect}
        onChange={e => setSelectAge(e.target.value)}
        className="tourtet-selectlist"
        key={index}
        name="price"
      >
        <option value="250.000">1</option>
        <option value="2.590.000">2</option>
        <option value="2.590.000">3</option>
        <option value="2.590.000">4</option>
        <option value="5.490.000">5</option>
        <option value="5.490.000">6</option>
        <option value="5.490.000">7</option>
        <option value="5.490.000">8</option>
        <option value="5.490.000">9</option>
        <option value="6.490.000">10</option>
        <option value="6.490.000">11</option>
      </select>,
    );
  };
  const removeListAge = () => {
    listAge.pop();
  };
  // Increase-Decrease quantity People
  const increaseAdult = () => {
    if (numberAdult >= 100) {
      setNumberAdult(100);
    } else {
      setNumberAdult(numberAdult + 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowSingleRoom(false);
    }
  };
  const decreaseAdult = () => {
    if (numberAdult <= 1) {
      setNumberAdult(1);
    } else {
      setNumberAdult(numberAdult - 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowSingleRoom(false);
    }
  };

  const increaseChildren = () => {
    if (numberChildren >= 10) {
      setNumberChildren(10);
    } else {
      setNumberChildren(numberChildren + 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowPriceChildren(false);
      setShowSingleRoom(false);
      addListAge(numberChildren);
    }
  };
  const decreaseChildren = () => {
    if (numberChildren <= 0) {
      setNumberChildren(0);
    } else {
      setNumberChildren(numberChildren - 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowPriceChildren(false);
      setShowSingleRoom(false);
      removeListAge();
    }
  };
  // handleClickRequireOrWatch
  const handleClickRequireOrWatch = () => {
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    setShowPriceChildren(true);
    if (numberAdult === 1) {
      setShowSingleRoom(true);
    }
    if (numberAdult === 1 && numberChildren !== 0) {
      setShowSingleRoom(false);
    }
    if (numberAdult === 1 && numberChildren === 0) {
      setShowPriceChildren(false);
    }
    if (numberChildren === 0) {
      setShowPriceChildren(false);
    }
  };
  // Handle Total Price
  let total;
  if (numberAdult === 1 && numberChildren === 0) {
    total = price + 900000;
  } else {
    if (parseFloat(selectAge) < 100) {
      total = price * numberAdult + parseFloat(selectAge) * 1000000 * numberChildren;
    } else {
      total = price * numberAdult + parseFloat(selectAge) * 1000 * numberChildren;
    }
  }

  // Change Terms
  const handleChangeTerm1 = () => {
    setFirstTerm(true);
    setSecondTerm(false);
    setThirdTerm(false);
    setFourthTerm(false);
  };
  const handleChangeTerm2 = () => {
    setFirstTerm(false);
    setSecondTerm(true);
    setThirdTerm(false);
    setFourthTerm(false);
  };
  const handleChangeTerm3 = () => {
    setFirstTerm(false);
    setSecondTerm(false);
    setThirdTerm(true);
    setFourthTerm(false);
  };
  const handleChangeTerm4 = () => {
    setFirstTerm(false);
    setSecondTerm(false);
    setThirdTerm(false);
    setFourthTerm(true);
  };

  return (
    <>
      <NavbarTours />
      <div className="tourtet-container">
        <div className="grid wide">
          <div className="row">
            {/* Breadcrumbs */}
            <nav className="col l-12 m-12 c-12">
              <ul className="tourtet-navbar">
                <li className="tourtet-item">
                  <Link className="tourtet-link" to="/du-lich">
                    <i className="fas fa-home"></i>
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className="tourtet-item">
                  <Link className="tourtet-link" to="/phu-yen">
                    <span>Cao Bằng</span>
                  </Link>
                </li>
                <li className="tourtet-item">
                  <Link className="tourtet-choose" to={`${to}`}>
                    <span>{name}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Name and Rating */}
            <div className="col l-12 m-12 c-12">
              <h1 className="tourtet-name">{name}</h1>
            </div>

            {/* Infomation */}
            <div className="col l-8 m-12 c-12">
              <div className="tourtet-content">
                <img src={hinh1} alt="Cao Bằng" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>5 Ngày 4 Đêm
                    </span>
                    <span>
                      Phương tiện:
                      <i className="fas fa-plane"></i>
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span className="tourtet-code">
                    Mã Tour: <b>TO1473</b>
                  </span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Du Ngoạn Đông Tây Bắc Bằng Đường Thủy</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Giữa hùng vĩ của núi rừng Đông Bắc, giữa mênh mang của hồ thủy điện Tuyên Quang, sự tích về Cọc
                      Vài kỳ bí thoảng qua tai, đâu đó những giải thích về hoa phặc phiền, và trước mắt là những điệp
                      trùng của 99 ngọn núi với truyền thuyết chim phượng hoàng về xây tổ... mỗi câu chuyện được gắn với
                      sự tích của một dòng sông, con suối, của đất và con người nơi đây đã đưa chúng tôi về 'miền cổ
                      tích' Lâm Bình – Na Hang, ấp ủ một tour đặc biệt kết hợp giữa hai thủy lộ sông Gâm & sông Năng,
                      suôi vách núi đá... đẹp đến say lòng người. Cùng iVIVU khám phá ngay hôm nay!
                    </p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>Điểm nổi bật có trong chương trình:</p>
                      <p>
                        - Tham quan khu di tích lịch sử <strong>Tân Trào</strong> với cây đa Tân Trào, đình Hồng Thái,
                        hang Bòng...
                      </p>
                      <p>
                        - Chiêm ngưỡng <strong>Núi Đôi Cô Tiên</strong> “tác phẩm nghệ thuật” của tạo hoá ban tặng cho
                        vùng đất Đông Bắc.
                      </p>
                      <p>
                        - Chinh phục đèo <strong>Mã Pí Lèng</strong> – được coi là vua của các còn đèo trong “tứ đại
                        đỉnh đèo” ở VN.
                      </p>
                      <p>
                        - Trải nghiệm độc đáo trên thủy lộ <b>sông Gâm & sông Năng</b>, tham quan hồ thủy điện Tuyên
                        Quang (Na Hang).
                      </p>
                      <p>
                        - Du ngoạn <b>hồ Na Hang</b> nằm trên diện tích hai huyện Lâm Bình và Na Hang (Tuyên Quang) xuất
                        hiện trong truyền thuyết là nơi chim phượng hoàng bay về, tạo thành 99 ngọn núi... Hồ Na Hang là
                        nơi hợp lưu giữa sông Gâm với sông Năng tạo thành hồ Na Hang là một vùng sông nước, núi non hùng
                        vĩ với cảnh đẹp say lòng du khách phương xa.
                      </p>
                      <p>
                        - Tham quan <b>hồ Ba Bể</b> - hồ nước tuyệt đẹp trên núi là hồ di sản Asean.
                      </p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2 id="1">Chương trình tour</h2>
                    <div className="tourtet-firstday">
                      <h3>NGÀY 01: SÀI GÒN - HÀ NỘI – TUYÊN QUANG - TÂN TRÀO - HÀ GIANG (ĂN SÁNG NHẸ, TRƯA, TỐI)</h3>
                      <p>
                        Sáng: Hướng dẫn viên công ty du lịch đón đoàn tại điểm hẹn tại sân bay <b> Tân Sơn Nhất</b>,
                        đoàn làm thủ tục đáp chuyến bay đi <b> Hà Nội</b>. Máy bay hạ cánh tại sân bay Nội Bài, xe và
                        hướng dẫn viên đón đoàn khởi hành đi <b>Tuyên Quang</b>.
                      </p>
                      <p>Trưa: Đến Tuyên Quang đoàn dùng cơm trưa tại nhà hàng.</p>
                      <p>
                        Khởi hành tham quan: khu - di tích lịch sử <b>Tân Trào</b> với
                        <b>cây đa Tân Trào, lán Nà Lừa, đình Tân Trào, đình Hồng Thái, hang Bòng</b>.
                      </p>
                      <img src={hinh2} alt="Lán Nà Nưa." />
                      <p>
                        Rời Tuyên Quang tiếp tục hành trình đến với Hà Giang vùng đất có chè san tuyết, rượu mật ong và
                        thắng cố, xứ sở của đào phai, hoa lê, truyền thống và náo nhiệt trong buổi chợ phiên...
                      </p>
                      <p>
                        Đến <b>Hà Giang</b> nhân phòng khách sạn nghỉ ngơi.
                      </p>
                      <p>
                        Tối: Đoàn dùng cơm tối tại nhà hàng. Tự do khám phá, thưởng thức đặc sản của thành phố Hà Giang.
                      </p>
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: HÀ GIANG - YÊN MINH - CAO NGUYÊN ĐÁ ĐỒNG VĂN (ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>
                        Xe và Hướng dẫn viên đưa Quý khách đi <b>Cao nguyên Đá Đồng Văn</b> - là một cao nguyên đá trải
                        rộng trên bốn huyện Quản Bạ, Yên Minh, Đồng Văn, Mèo Vạc.
                      </p>
                      <img src={hinh3} alt="Cao Nguyên Đá Đồng Văn." />
                      <p>
                        Trên đường đi đoàn dừng chân tham quan: <b>Cổng Trời Quản Bạ</b> , tiếp tục hành trình du khách
                        đến đây đều có dịp chiêm ngưỡng <b>Núi Đôi Cô Tiên</b> “tác phẩm nghệ thuật” của tạo hoá ban
                        tặng cho vùng đất này, ngoài ra Quý khách còn có dịp nghe kể về truyền thuyết của ngọn núi này,
                        vô vùng hấp dẫn và thú vị.
                      </p>
                      <img src={hinh4} alt="Núi Đôi Quản Bạ." />
                      <p>Trưa: Đoàn dùng cơm trưa tại Yên Minh.</p>
                      <p>
                        Tiếp tục hành trình đoàn khởi hành đến <b>Thị Trấn Đồng Văn</b>, đoàn đi thăm quan:
                      </p>
                      <p>
                        - <b>Phố Cáo, Sủng Là</b> vào làng văn hóa Lũng Cẩm nơi lấy bối cảnh những thước phim nổi tiếng
                        “Chuyện của Pao”
                      </p>
                      <p>
                        - Dinh thự vua <b>Mèo Vương Chí Sình</b> với nhiều kiến trúc độc đáo và những câu chuyện đặc
                        sắc.
                      </p>
                      <img src={hinh5} alt="Dinh Thự Vua Mèo." />
                    </div>
                    <div className="tourtet-thirdday">
                      <h3>
                        NGÀY 03: CAO NGUYÊN ĐÁ ĐỒNG VĂN - CỘT CỜ LŨNG CÚ - MÈO VẠC – BẮC MÊ (ĂN SÁNG, TRƯA, CHIỀU){" "}
                      </h3>
                      <p>Sáng: Dùng điểm tâm sáng tại khách sạn.</p>
                      <p>
                        Hướng dẫn viên đưa đoàn dạo quanh tham quan phố cổ Đồng Văn, tìm hiểu đời sống mua bán kinh
                        doanh của người miền núi hoặc tự do thưởng thức ly café phố cổ.
                      </p>
                      <p>
                        Trả phòng khách sạn, đoàn khởi hành tham quan: cột cờ <b>Lũng Cú</b> , được coi là điểm Cực Bắc
                        của Việt Nam, quý khách tự do tham quan chụp hình, ngắm biên giới hai nước Việt - Trung...
                      </p>
                      <img src={hinh6} alt="Cột Cờ Lũng Cú." />
                      <p>
                        Tiếp tục hành trình đoàn khởi hành đi Cao Bằng trên đường đi đoàn chinh phục đèo Mã Pì Lèng -
                        nơi được mệnh danh là đệ nhất hùng quan của Việt Nam - một trong “Tứ Đại Đỉnh Đèo” nổi tiếng của
                        Việt Nam, ngắm dòng sông Nho Quế như dải lụa vắt ngang bầu trời bên dưới & hẻm vực Tu Sản – hẻm
                        vực hiểm trở nhưng ẩn chứa vẻ đẹp bất tận giữa mây trời.
                      </p>
                      <img src={hinh7} alt="Dòng Sông Nho Quế." />
                      <p>Trưa: Đoàn dùng cơm trưa tại nhà hàng & di chuyển về Bắc Mê nhận phòng khách sạn nghỉ ngơi.</p>
                      <p>
                        Khám phá <b>Bắc Mê</b> bình yên và thơ mộng bên <b>dòng sông Gâm</b>, thưởng thức thưởng thức
                        các món ăn ngon (bánh trứng kiến, thịt gác bếp, nộm da trâu, mắm cá ruộng, cá chua) đặc trưng
                        nơi đây.
                      </p>
                      <img src={hinh8} alt="Sông Gâm." />
                      <p>Tối: Đoàn dùng cơm tối tại nhà hàng. Tự do khám phá Bắc Mê về đêm.</p>
                    </div>
                    <div className="tourtet-fourthday">
                      <h3>
                        NGÀY 04: BẮC MÊ – SÔNG GÂM – NA HANG – LÂM BÌNH – TUYÊN QUANG – HỒ BA BỂ - BẮC KẠN (ĂN SÁNG,
                        TRƯA, TỐI)
                      </h3>
                      <p>Sáng: Ăn sáng tại khách sạn.</p>
                      <p>
                        Xe đưa đoàn ra bên thuyền bắt đầu hành trình xuôi dòng sông Gâm kỳ thú, giữa 2 bên là vách đá
                        dựng đứng có một dòng sông hiền hòa, nước đổi màu theo mùa, xanh biếc khi thu về.
                      </p>
                      <p>
                        Đoàn di chuyển tới <b>Lâm Bình</b> – một địa danh mới được ví như <b>Hạ Long</b> giữa đại ngàn
                        với <b>Thượng Lâm</b> nơi có 99 ngọn núi trùng điệp và truyền thuyết chim phượng hoàng về xây
                        tổ; với dòng sông Gâm như chàng trai Tày mạnh mẽ hòa cùng <b>sông Năng</b> mềm mại như nàng
                        thiếu nữ tuổi đôi mươi đã tạo nên lòng <b>hồ thủy điện Tuyên Quang</b>.
                      </p>
                      <img src={hinh9} alt="Thượng Lâm Tuyên Quang." />
                      <p>
                        Cũng từ đây, quý du khách có thể phóng tầm mắt ra khoảng không gian thoáng rộng của lòng
                        <b>hồ Tuyên Quang</b>, dòng sông xưa, nay là mặt nước hồ thủy điện len lỏi, uốn lượn qua các dãy
                        núi như một dải lụa giữa đại ngàn.
                      </p>
                      <img src={hinh10} alt="Lòng Hồ Na Hang-Tuyên Quang." />
                      <p>Đoàn ăn trưa ở Na Hang.</p>
                      <p>
                        Tối: Đoàn dùng cơm tối tại nhà hàng tại khu du lịch. Nghỉ đêm tại khu du lịch vườn quốc gia Ba
                        Bể.
                      </p>
                    </div>
                    <div className="tourtet-fifthday">
                      <h3>NGÀY 05: BA BỂ - BẮC KẠN - HÀ NỘI - TIỄN SÂN BAY - SÀI GÒN (ĂN SÁNG, TRƯA)</h3>
                      <p>Sáng: Ăn sáng tại khách sạn.</p>
                      <p>
                        Xe đưa quý khách đi thăm <b>chợ Lèng</b> , chợ phiên hàng tuần của người dân tộc Tày, Dao, quý
                        khách cùng tìm hiểu văn hóa họp chợ ở vùng cao và mua sắm các sản vật địa phương (phiên chợ
                        chính sẽ rơi vào các ngày 3,8,13,18,23,28 âm lịch hàng tháng).
                      </p>
                      <p>Tiếp tục hành trình tham quan buổi sáng, xe và hướng dẫn viên đưa đoàn tham quan:</p>
                      <p>
                        - <b>Động Hua Mạ</b> nằm trên dãy nũi Hua Mạ (núi đầu ngựa), động Hua Mạ - là động treo nằm ở độ
                        cao 350m so với mực nước biển, động sâu gần 700m, trần khá rộng, chỗ cao nhất 50m, rộng trung
                        bình từ 30 – 50m, nền động khô ráo, mát về mùa hè, ấm về mùa đông. Trong động có rất nhiều nhũ
                        đá đẹp với hình thù độc đáo như: tượng Phật bà Quan Âm trên tòa sen, hình ảnh thầy trò Đường
                        Tăng đi lấy Kinh, khu ruộng bậc thang, rèm đá, cổng đá... Theo đánh giá của các chuyên gia khảo
                        sát hang động và du khách, động Hua Mạ là hang động tự nhiên còn nguyên vẹn và đẹp nhất trong
                        khu vực.
                      </p>
                      <img src={hinh11} alt="Động Hua Mạ." />
                      <p>
                        - <b>Thác Tát Mạ</b> : Dòng thác còn có một cái tên gọi khác là Thác Bạc bởi nhìn từ xa thác đổ
                        từ trên cao xuống tạo thành vệt trắng xóa như một dải lụa tương phản với ánh sáng lấp lánh ánh
                        bạc. Tát Mạ trông rất hùng vĩ, dòng nước trắng xóa chảy ào ào như một dải lụa mềm mại tung bọt
                        như lớp sương mờ trên nền xanh của cây rừng, tạo thành âm thanh vang vọng núi rừng. Dòng thác
                        chảy trên nền đá xanh bền vững được bao bọc bởi khu rừng bán nguyên sinh tạo cho thác một vẻ đẹp
                        nguyên sơ.
                      </p>
                      <img src={hinh12} alt="Thác Tát Mạ." />
                      <p>
                        Trưa: Đoàn dùng cơm trưa tại nhà hàng ở <b>Bắc Kạn</b>.
                      </p>
                      <p>Quý khách làm các thủ tục trả phòng và khởi hành về lại về lại Hà Nội.</p>
                      <p>Chiều: Về đến sân bay Nội Bài làm thủ tục đáp chuyến bay về lại Hồ Chí Minh.</p>
                      <p>
                        Trên chuyến bay (HAN-SGN) cất cánh. Đoàn dùng cơm tối tại sân bay Nội Bài. Về đến Hồ Chí Minh,
                        chia tay kết thúc chương trình, hẹn gặp lại trong các chuyến đi sau.
                      </p>
                      <i>
                        Thứ tự tham quan có thể thay đổi nhưng vẫn bảo đảm đầy đủ điểm tham quan có trong chương trình.
                      </i>
                    </div>
                    <div id="2" className="tourtet-tailortour">
                      <TailorTour />
                    </div>
                    <div className="tourtet-departureschedule">
                      <div className="tourtet-departureschedule-title">
                        <h2 id="3">Lịch khởi hành</h2>
                      </div>

                      <div className="tourtet-departureschedule-table">
                        <div className="tourtet-departureschedule-title">
                          <span>Ngày khởi hành</span>
                          <span>Ngày về</span>
                          <span>Tình trạng</span>
                          <span>Giá</span>
                        </div>

                        <div
                          className={`tourtet-departureschedule-1403 ${
                            !showTableDay0403 && "tourtet-departureschedule-1403minus"
                          }`}
                        >
                          <span>T4, 10/03/2021</span>
                          <span>CN, 14/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay0403 ? (
                              <>
                                6.588.000 VND
                                <i onClick={handleClickPlus0403} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus0403}
                                className={`fas fa-minus-circle  ${
                                  showTableDay0403 ? "tourtet-plus1403" : "tourtet-minus1403"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay0403 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>900.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}

                        <div
                          className={`tourtet-departureschedule-1703 ${
                            !showTableDay1103 && "tourtet-departureschedule-1703minus"
                          }`}
                        >
                          <span>T4, 17/03/2021</span>
                          <span>CN, 21/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1103 ? (
                              <>
                                6.588.000 VND
                                <i onClick={handleClickPlus1103} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus1103}
                                className={`fas fa-minus-circle  ${
                                  showTableDay1103 ? "tourtet-plus1703" : "tourtet-minus1703"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay1103 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>1.000.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}

                        <div
                          className={`tourtet-departureschedule-2403 ${
                            !showTableDay1803 && "tourtet-departureschedule-2403minus"
                          }`}
                        >
                          <span>T4, 24/03/2021</span>
                          <span>CN, 28/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1803 ? (
                              <>
                                6.588.000 VND
                                <i onClick={handleClickPlus1803} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus1803}
                                className={`fas fa-minus-circle  ${
                                  showTableDay1803 ? "tourtet-plus2403" : "tourtet-minus2403"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay1803 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>900.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="tourtet-accompanyservices">
                      <h2 id="4">Dịch vụ đi kèm</h2>

                      <div className="tourtet-accompanyservices-list">
                        <div className="tourtet-accompanyservices-top">
                          <span>
                            <i className="fas fa-check"></i>
                            Bảo hiểm
                          </span>
                          <span>
                            <i className="fas fa-utensils"></i>
                            Bữa ăn
                          </span>
                          <span>
                            <i className="fas fa-flag"></i>
                            Hướng dẫn viên
                          </span>
                        </div>

                        <div className="tourtet-accompanyservices-bottom">
                          <span>
                            <i className="fas fa-ticket-alt"></i>
                            Vé tham quan
                          </span>
                          <span>
                            <i className="fas fa-bus"></i>
                            Xe đưa đón
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="tourtet-expensepolicy">
                      <h2>Chính sách phụ thu</h2>
                      <div className="tourtet-expensepolicy-list">
                        <p>- Phụ thu phòng đơn: 900.000 vnđ/khách/tour.</p>
                        <p>
                          - Trẻ em từ 02 tuổi đến dưới 05 tuổi: giá tour theo khung giá trên web (02 vợ chồng được kèm
                          theo 1 trẻ, trẻ Em thứ 2 cần mua theo xuất người lớn để đảm bảo chỗ ngủ phù hợp). Tiêu chuẩn
                          trẻ em có vé máy bay, bảo hiểm và ngủ chung với Cha Mẹ. Các chi phí ăn uống tham quan có phát
                          sinh gia đình tự lo cho Em.
                        </p>
                        <p>
                          - Em bé dưới 02 tuổi: 500.000 VNĐ/bé bao gồm có thuế phí hàng không, bảo hiểm (Không bao gồm
                          ghế ngồi trên xe) nhưng 2 vợ chồng chỉ được kèm 01 em bé dưới 02 tuổi, nếu bé thứ 02 tính giá
                          trẻ em theo khung từ 2 đến dưới 5 tuổi.
                        </p>
                        <p>- Trẻ em từ 11 tuổi trở lên mua vé như người lớn</p>
                      </div>
                    </div>

                    <div className="tourtet-terms">
                      <h2>Điều khoản</h2>
                      <div className="tourtet-terms-list">
                        <span
                          onClick={handleChangeTerm1}
                          className={`${firstTerm ? "tourtet-terms-active" : ""} tourtet-firstterm`}
                        >
                          Bao Gồm
                        </span>
                        <span
                          onClick={handleChangeTerm2}
                          className={`${secondTerm ? "tourtet-terms-active" : ""} tourtet-secondterm`}
                        >
                          Không Bao Gồm
                        </span>
                        <span
                          onClick={handleChangeTerm3}
                          className={`${thirdTerm ? "tourtet-terms-active" : ""} tourtet-thirdterm`}
                        >
                          Hủy Đổi
                        </span>
                        <span
                          onClick={handleChangeTerm4}
                          className={`${fourthTerm ? "tourtet-terms-active" : ""} tourtet-fourthterm`}
                        >
                          Lưu ý
                        </span>
                        {firstTerm && (
                          <div className="tourtet-firstterm-list">
                            <div>
                              <u>Vận chuyển:</u>
                              <p>
                                - Vé máy bay và hành lý khứ hồi SGN//HAN//SGN hãng hàng không VietJet Air/ Vietnam
                                Airlines/ Bamboo Airways.
                              </p>
                              <p>
                                - Xe 29 chỗ đời mới chuyên phục vụ khách du lịch, máy lạnh suốt tuyến, tài xế nhiều năm
                                kinh nghiệm...
                              </p>
                              <p>- Thuyền máy di chuyển từ Bắc Mê về Na Hang – Lâm Bình – hồ Ba Bể.</p>
                            </div>
                            <div>
                              <u>Lưu trú:</u>
                              <p>
                                - Tiêu chuẩn 2 khách/phòng, phòng 3 sẽ được bố trí khi cần thiết. Tiêu chuẩn phòng khách
                                sạn 3 sao.
                              </p>
                              <p>- Phí tham quan tại điểm theo chương trình.</p>
                              <p>
                                - Ăn sáng: Các bữa ăn sáng buffet tự chọn nếu ở tiêu chuẩn khách sạn từ 3 sao trở lên.
                              </p>
                              <p>- Ăn Chính: 10 bữa ăn chính với các món đặc sản địa phương.</p>
                              <p>- Hướng dẫn viên tiếng Việt, vui vẻ, nhiệt tình phục vụ theo chương trình.</p>
                              <p>- Nước uống trên xe: 01 chai/khách/ngày.</p>
                              <p>
                                - Quý khách được tham gia bảo hiểm khi đi Du Lịch, mức bồi thường tối đa: 50.000.000
                                VNĐ/1 trường hợp.
                              </p>
                            </div>
                          </div>
                        )}
                        {secondTerm && (
                          <div className="tourtet-secondterm-list">
                            <p>- Thuế VAT 10%.</p>
                            <p>- Chi phí phòng đơn.</p>
                            <p>- Tiền típ cho HDv và lái xe.</p>
                            <p>- Ăn Chính: 10 bữa ăn chính với các món đặc sản địa phương.</p>
                            <p>- Các chi phí cá nhân khác (điện thoại, giặt là, đồ uống trong bữa ăn...)</p>
                          </div>
                        )}
                        {thirdTerm && (
                          <div className="tourtet-thirdterm-list">
                            <b>Chính sách hủy:</b>
                            <p>- Nếu quý khách huỷ vé sau khi đăng kí tour sẽ bị mất 100% tiền cọc.</p>
                            <p>- Nếu quý khách huỷ trước ngày khởi hành 30 ngày: chịu phí 50% chi phí tour.</p>
                            <p>- Nếu quý khách hủy trước ngày khởi hành 20 ngày: chịu phí 75% chi phí tour.</p>
                            <p>- Nếu quý khách huỷ trước ngày khởi hành 10 ngày: chịu phí 100% chi phí tour.</p>
                            <p>- Giai đoạn Lễ/Tết: không hoàn, không hủy, không đổi.</p>
                          </div>
                        )}
                        {fourthTerm && (
                          <div className="tourtet-fourthterm-list">
                            <p>
                              - Thứ tự các điểm tham quan trong chương trình có thể thay đổi cho phù hợp với tình hình
                              thực tế. Nhưng không hủy bỏ hoặc thay đổi mà không có sự thỏa thuận với đoàn.
                            </p>
                            <p>
                              - Phụ thu phòng đơn: Trường hợp khách lẻ đi 1 mà ko ngủ ghép đoàn được hoặc khách muốn ở
                              riêng 1 phòng.
                            </p>
                            <p>- Giờ nhận phòng khách sạn: 14:00 giờ và trả phòng trước 12:00 giờ.</p>
                            <p>- Khách ngoại quốc, Việt Kiều mang hộ chiếu, visa (còn hạn).</p>
                            <p>- Khách Việt Nam mang theo chứng minh nhân dân (không quá hạn 15 năm).</p>
                            <p>- Trẻ em mang theo bản sao giấy khai sinh.</p>
                            <p>
                              **Trong những trường hợp khách quan như: khủng bố, thiên tai…hoặc do có sự cố, có sự thay
                              đổi lịch trình của các phương tiện vận chuyển công cộng như: máy bay, tàu hỏa...thì Cty sẽ
                              giữ quyền thay đổi lộ trình bất cứ lúc nào vì sự thuận tiện, an toàn cho khách hàng và sẽ
                              không chịu trách nhiệm bồi thường những thiệt hại phát sinh**.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="col l-4 m-12 c-12">
              <div className="tourtet-right">
                <div className="tourtet-totalprice">
                  <p>Đặt ngay, chỉ 2 phút. Hoặc gọi (028) 3933 8002</p>
                  <div className="tourtet-totalprice-pickdaystart">
                    <span>Chọn ngày khởi hành:</span>
                  </div>
                  <div className="tourtet-totalprice-adult">
                    <span>Người lớn</span>
                    <div className="tourtet-totalprice-adultpricequantity">
                      {showPriceAndTotal && (
                        <span className="tourtet-totalprice-adultprice">x {price.toLocaleString()}</span>
                      )}
                      <div className="tourtet-totalprice-numberAdult">
                        <button onClick={decreaseAdult}>-</button>
                        <span className="totalprice-numberadult">{numberAdult}</span>
                        <button onClick={increaseAdult}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="tourtet-totalprice-children">
                    <span>Trẻ em</span>
                    <div className="tourtet-totalprice-childrenpricequantity">
                      {showPriceChildren && <span className="tourtet-totalprice-childrenprice">x {selectAge}</span>}
                      <div className="tourtet-totalprice-numberChildren">
                        <button onClick={decreaseChildren}>-</button>
                        <span className="totalprice-numberchildren">{numberChildren}</span>
                        <button onClick={increaseChildren}>+</button>
                      </div>
                    </div>
                  </div>
                  {showSingleRoom && (
                    <div className="tourtet-totalprice-singleroom">
                      <span>Phụ thu phòng đơn</span>
                      <span>900.000 VND</span>
                    </div>
                  )}
                  <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                    {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                    {listAge.map(age => age)}
                  </div>
                  <div className="tourtet-totalprice-totalandbtn">
                    {showPriceAndTotal && (
                      <p>
                        <span>{total.toLocaleString()}</span>
                        <span> VND</span>
                      </p>
                    )}
                    <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                  </div>
                </div>
                <div className="tourtet-bookmark">
                  <a href="#1">CHƯƠNG TRÌNH TOUR</a>
                  <a href="#2">TRẢI NGHIỆM THEO CÁCH CỦA BẠN</a>
                  <a href="#3">LỊCH KHỞI HÀNH</a>
                  <a href="#4">ĐIỀU KHOẢN QUY ĐỊNH</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f9f9f9", padding: "0 8px" }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default HCMHGCBBKTN;
