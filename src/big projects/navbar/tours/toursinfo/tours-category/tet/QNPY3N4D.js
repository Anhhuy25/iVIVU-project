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

import hinh1 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/mui-dien-750x390.jpg";
import hinh2 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-eo-gio-13.jpg";
import hinh3 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-bien-ky-co.jpg";
import hinh4 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-khu-du-lich-ghenh-rang.jpg";
import hinh5 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-nha-tho-mang-lang.jpg";
import hinh6 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-ghenh-da-dia-16.jpg";
import hinh7 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-bai-xep.jpg";
import hinh8 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-mui-dien-dai-lanh.gif";
import hinh9 from "../../../../../img/tourslist/tetTanSuu/specificDestination/QNPY3N4D/ivivu-thap-nhan.jpg";

const QNPY3N4D = () => {
  const SGtoHL5N4D = tetTanSuu.find(tour => tour.to === "tour-mien-trung-3n4d-kham-pha-quy-nhon-phu-yen-tau-lua-tet");
  const { to, name, price, rating } = SGtoHL5N4D;

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
      </select>
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
    total = price + 1000000;
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
                    <span>Phú Yên</span>
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
              <p className="tourtet-rating">
                {rating.map((desc, index) => (
                  <span key={index}>{desc}</span>
                ))}
              </p>
            </div>

            {/* Infomation */}
            <div className="col l-8 m-12 c-12">
              <div className="tourtet-content">
                <img src={hinh1} alt="Quy Nhơn - Phú Yên" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>3 Ngày 4 Đêm
                    </span>
                    <span>
                      Phương tiện:
                      <i className="fas fa-plane"></i>
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span className="tourtet-code">
                    Mã Tour: <b>TO1188</b>
                  </span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Về với vùng đất Nam Trung Bộ, Nơi có Xứ Nẫu Thân Thương</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Đến Quy Nhơn trải nghiệm những hành trình hấp dẫn như Kỳ Co nước trong xanh màu ngọc bích được
                      mệnh danh là “Maldives của Việt Nam”; Trung Lương – “Jeju Việt Nam” với hàng dương rì rào, những
                      eo núi uốn lượn, bãi biển cát trắng; Eo Gió vừa lãng mạn vừa hùng vĩ để ngắm hoàng hôn; Hòn Khô
                      nước trong vắt. Phú Yên vùng đất 'Tôi thấy hoa vàng trên cỏ xanh' trở thành điểm nổi bật cho
                      chuyến du lịch hè đáng nhớ cho du khách mọi miền. Không chỉ mang nét duyên của thành phố ôm trọn
                      hai ngọn núi, Phú Yên còn mê đắm lòng người ở những đầm nước trong vắt, những bãi biển bao la,
                      ghềnh Đá Đĩa kỳ thú. Cùng iVIVU khám phá ngay hôm nay!
                    </p>
                    <p className="tourtet-bookgroup">
                      <b>
                        <i>Đặt đoàn riêng liên hệ 028 3933 8002 hoặc hotline 0906 355 542 để có giá tốt.</i>
                      </b>
                    </p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>Xứ Nẫu vùng đất đầy Nắng và Gió nổi bật lên bởi:</p>
                      <p>
                        - <strong>Bãi tắm Kỳ Co</strong> – Một bãi tắm còn hoang sơ, trong sạch.
                      </p>
                      <p>
                        - <strong>Eo Gió</strong> phóng tầm mắt ra xa, quý khách chiêm ngưỡng bao quát cả vùng biển bao
                        la rộng lớn, đắm say lòng người.
                      </p>
                      <p>
                        - <strong>Gành Đá Dĩa</strong>, ngắm những khối đá xô lệch bởi bàn tay tạo hóa trầm mặc ngàn năm
                        nghe sóng vỗ.
                      </p>
                      <p>
                        - <strong>Mũi Điện Đại Lãnh </strong>– là nơi Cực Đông của Tổ Quốc, nơi đón ánh mặt trời đầu
                        tiên.
                      </p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2 id="1">Chương trình tour</h2>
                    <div className="tourtet-firstday">
                      <h3>ĐÊM 1: TPHCM – QUY NHƠN BÌNH ĐỊNH</h3>
                      <p>
                        Tối: Hướng dẫn viên đón khách tại
                        <strong> Ga Sài Gòn </strong>đón chuyến
                        <strong> tàu SE4, SQN2, SQN4, SE2 </strong>khởi hành đi
                        <strong> Diêu Trì hoặc Quy Nhơn </strong>. Quý khách ăn tối tự túc trước khi lên tàu, nghỉ đêm
                        trên xe lửa. (Ký hiệu tàu có thể thay đổi tuỳ thuộc vào thời gian quý khách đặt tour).
                      </p>
                      <h3>NGÀY 01: QUY NHƠN – HÀN MẶC TỬ - KDL GHỀNH RÁNG (ĂN TRƯA, TỐI)</h3>
                      <p>
                        Sáng: Qúy khách ăn sáng tự túc ngay trên Tàu, Tàu đến
                        <b> Ga Diêu Trì</b> hoặc <b> Ga Quy Nhơn</b>, Xe và HDV đón đoàn khởi hành Tham quan:{" "}
                        <b>Eo Gió </b> – một ghềnh đá quanh năm lộng gió. Đứng trên
                        <b>Eo Gió</b>), phóng tầm mắt ra xa, quý khách chiêm ngưỡng bao quát cả vùng biển bao la rộng
                        lớn, đắm say lòng người.
                      </p>
                      <img src={hinh2} alt="Eo Gió." />
                      <p>
                        Sau đó Quý khách lên thuyền qua <b>Bãi tắm Kỳ Co</b> – Một bãi tắm còn hoang sơ, trong sạch. Tại
                        đây, quý khách có thể tận mắt chứng kiến một cảnh đẹp thiên nhiên tuyệt đẹp, làm say đắm biết
                        bao lòng người. Với màu nước trong xanh, bãi cát trắng dài và mịn, những cơn sóng biển êm ái
                        chính là điểm đến lý tưởng thu hút nhiều du khách trong thời gian gần đây. Ngoài tắm biển và vui
                        đùa, quý khách còn có những trò chơi mạo hiểm khi leo lên ghềnh đá và nhảy xuống biển, một cảm
                        giác thật sảng khoái và thú vị.
                      </p>
                      <img src={hinh3} alt="Bãi Tắm Kỳ Co." />
                      <p>
                        12h00: Quý khách dùng bữa trưa với các món hải sản tươi sống do người dân làng chài vừa mới đánh
                        bắt được, sau đó thuyền đưa quý khách về lại đất liền, khởi hành về khách sạn nghĩ ngơi.
                      </p>
                      <p>14h00: Quý khách về lại khách sạn nghĩ ngơi, tự do tắm biển hoặc tham quan.</p>
                      <p>
                        Buổi chiều: Đoàn đến khu du lịch <b>Ghềnh Ráng</b> viếng nơi an nghĩ của nhà thơ Hàn Mạc Tử,
                        tham quan bãi tắm
                        <b>Hoàng Hậu, Bãi Trứng, Đá Hòn Chồng.</b>
                      </p>
                      <img src={hinh4} alt="KDL Ghềnh Ráng." />
                      <p>Dùng cơm tại nhà hàng, tự do khám phá Thành Phố Quy Nhơn về đêm.</p>
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: GÀNH ĐÁ DĨA – NHÀ THỜ MẰNG LĂNG – HOA VÀNG CÓ XANH (ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>
                        Buổi sáng: Đoàn làm thủ tục trả phòng, dùng điểm tâm sáng sau đó khởi hành về{" "}
                        <b> Thành Phố Tuy Hoà</b>. Đoàn dừng chân tham quan nhà thờ
                        <b>Mằng Lăng</b> – nơi lưu giữ cuốn kinh thánh bằng chữ quốc ngữ cổ nhất Việt Nam. Đoàn tham
                        quan, chụp hình lưu niệm tại
                        <b>Gành Đá Dĩa</b> – thắng cảnh độc nhất vô nhị tại Việt Nam.
                      </p>
                      <img src={hinh5} alt="Nhà Thờ Mằng Lăng." />
                      <p>
                        Chỉ cần một lần đến gành Đá Dĩa, ngắm những khối đá xô lệch bởi bàn tay tạo hóa trầm mặc ngàn
                        năm nghe sóng vỗ, du khách sẽ hiểu tại sao người ta nói Phú Yên sở hữu những báu vật thiên nhiên
                        không nơi nào có được…, chiêm ngưỡng thắng cảnh cấp Quốc Gia <b>Đầm Ô Loan</b>.
                      </p>
                      <img src={hinh6} alt="Ghềnh Đá Dĩa." />
                      <p>
                        Trưa: quý khách dùng cơm trưa tại nhà hàng, sau đó đoàn về
                        <b>Khách Sạn Cendeluxe tiêu chuẩn 5 sao nhận phòng nghĩ ngơi.</b>
                      </p>
                      <p>
                        Buổi chiều: Xe đưa quý khách tham quan và tự do tắm biển tại Bãi Xếp - là một trong những phim
                        trường “ Tôi Thấy Hoa Vàng Trên Cỏ Xanh”.
                      </p>
                      <img src={hinh7} alt="Bãi Xếp." />
                      <p>
                        Tối: Quý khách dùng buổi tối với các món Hải Đặc Sản tại Khu Bờ Kè Hải Sản Tuy Hoà như: Tam Sung
                        Sung, Sò Huyết Ô Loan, Tôm nướng, Cá Nướng, Mực Hấp, Cơm chiên muối ớt, cơm chiên dương châu,
                        Lẩu Hải Sản…. Quý khách nghĩ đêm tại Tuy Hoà.
                      </p>
                    </div>
                    <div className="tourtet-thirdday">
                      <h3>NGÀY 03: MŨI ĐIỆN “CỰC ĐÔNG TỔ QUỐC” – THÁP NHẠN – TP HCM (ĂN SÁNG, TRƯA)</h3>
                      <p>
                        Sáng: Đoàn dùng điểm tâm buffet tại khách sạn, Đoàn khởi hành chinh phục Mũi Điện Đại Lãnh – là
                        nơi Cực Đông của Tổ Quốc, nơi đón ánh mặt trời đầu tiên, quý khách sẽ ngắm tầm nhìn ra vùng biển
                        khơi xa và tạo cho mình những bức ảnh thật đẹp tại điểm tham quan này, sau đó xe đưa quý khách
                        về lại khách sạn nhận phòng nghỉ ngơi.
                      </p>
                      <img src={hinh8} alt="Mũi Điện Đại Lãnh." />
                      <p>
                        12h00: Quý khách làm thủ tục trả phòng, dùng cơm trưa tại nhà hàng, Đoàn khởi hành viếng chùa
                        Bảo Lâm, Đoàn chinh phục núi Nhạn, tháp Nhạn, ngắm cảnh hoàng hôn trên đỉnh núi và toàn cảnh
                        thành phố Tuy Hoà, mua sắm đặc sản về làm quà cho người thân……sau đó đoàn khởi hành ra Ga Tuy
                        Hòa đón chuyến tàu SQN1, SE9, SE21 về Thành Phố Hồ Chí Minh (Qúy khách ăn tối tự túc trên Tàu) .
                        Sáng hôm sau Đoàn về đến HCM, HDV thay mặt công ty du lịch chào tạm biệt và hẹn gặp lại.
                      </p>
                      <img src={hinh9} alt="Tháp Nhạn." />
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
                          <span>T5, 04/03/2021</span>
                          <span>T2, 08/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay0403 ? (
                              <>
                                3.260.000 VND
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
                          className={`tourtet-departureschedule-1703 ${
                            !showTableDay1103 && "tourtet-departureschedule-1703minus"
                          }`}
                        >
                          <span>T5, 11/03/2021</span>
                          <span>T2, 15/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1103 ? (
                              <>
                                3.260.000 VND
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
                          <span>T5, 18/03/2021</span>
                          <span>T2, 22/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1803 ? (
                              <>
                                3.260.000 VND
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
                        <p>- Phụ thu Phòng đơn : 1.000.000đ/ Khách/ 2 đêm ( Nếu khách ở 1 mình )/ ngày thường.</p>
                        <p>
                          - Phụ thu giường nằm khoang 4 : 900.000đ/ khách/ khứ hồi ( ngày thườn) ,1.400.000đ/ khách/ khứ
                          hồi ( ngày lễ, tết )
                        </p>
                        <p>- Phụ thu tết âm lịch: 2.690.000 vnđ/khách/tour</p>
                        <p>- Trẻ em nho 5 tuổi: miễn phí, gia đình tự lo</p>
                        <p>
                          - Trẻ từ 5 dưới 09 tuổi: mua 75% giá vé người lớn, tiêu chuẩn như người lớn, ngủ chung với bố
                          mẹ
                        </p>
                        <p>- Trẻ em từ 10 tuổi trở lên mua vé như người lớn</p>
                        <p>
                          - Qui định trẻ em đi kèm: mỗi cặp vợ chồng chỉ được 1 trẻ em miễn phí, trẻ thứ 2 phải mua 75%
                          vé như người lớn
                        </p>
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
                              <p>- Xe tham quan (đời mới, máy lạnh) đón – tiễn theo chương trình.</p>
                              <p>- Vé xe lửa ngồi mềm máy lạnh: Sài Gòn – Diêu Trì/Quy Nhơn, Tuy Hòa – Sài Gòn.</p>
                              <p>- Vé Tàu Tham quan Đảo Kỳ Co.</p>
                            </div>
                            <div>
                              <u>Lưu trú:</u>
                              <p>- Quy Nhơn: tiêu chuẩn 2 sao.</p>
                              <p>- Phú Yên: tiêu chuẩn 5 sao.</p>
                            </div>
                            <div>
                              <u>Khác:</u>
                              <p>- HDV phục vụ quý khách ăn nghĩ suốt tuyến.</p>
                              <p>- Phí tham quan theo chương trình.</p>
                              <p>- Ăn uống theo chương trình.</p>
                              <p>- Quà tặng: Nón, khăn lạnh, nước suối.</p>
                              <p>- Bảo hiểm DL : mức bồi thường tối đa 10.000.000 đồng/ trường hợp.</p>
                            </div>
                          </div>
                        )}
                        {secondTerm && (
                          <div className="tourtet-secondterm-list">
                            <p>
                              - Chi phí cá nhân: điện thoại, giặc ủi, ăn uống – tham quan – vận chuyển ngoài chương
                              trình.
                            </p>
                            <p>- Phu thu Phòng đơn : 1.000.000đ/Khách/ 2 đêm ( Nếu khách ở 1 mình)/ ngày thường.</p>
                            <p>
                              - Phụ thu giường nằm khoang 4: 900.000đ/khách/khứ hồi, 1.400.000đ/khách/khứ hồi (TẾT ÂL).
                            </p>
                            <p>
                              - Thuế VAT (Nếu quý khách có nhu cầu xuất hoá đơn GTGT thì phụ thu 10% trên tổng tiền
                              tour).
                            </p>
                          </div>
                        )}
                        {thirdTerm && (
                          <div className="tourtet-thirdterm-list">
                            <b>Chính sách hủy:</b>
                            <p>
                              - Đặt vé trước ngày khởi hành ít nhất 10 ngày (nếu đợt khởi hành không đủ số lượng qui
                              định, quý khách được dời vào ngày khởi hành kế tiếp).
                            </p>
                            <p>- Huỷ tour trước 7 ngày khởi hành mất 50% giá vé.</p>
                            <p>- Huỷ tour truoc 5 ngày khởi hành mất 70% giá vé.</p>
                            <p>- Huỷ tour trước 3 ngày khởi hành mất 100% giá vé.</p>
                            <p>Điều kiện hủy tour (ngày lễ tết):</p>
                            <p>- Các ngày lễ tết việc dời ngày và hủy tour mất 100% giá tour.</p>
                          </div>
                        )}
                        {fourthTerm && (
                          <div className="tourtet-fourthterm-list">
                            <p>- Lưu ý : không nhận du khách quốc tế.</p>
                            <p>
                              - Thứ tự các điểm tham quan theo chương trình HDV có thể thay đổi tùy theo thời tiết và
                              các vấn đề khách quan khác mà vẫn đảm bảo đầy đủ các điểm tham quan.
                            </p>
                            <p>
                              - Do đặc điểm địa hình, tại Sapa quý khách chủ yếu đi bộ để tham quan, vì thế quý khách
                              vui lòng lựa chọn trang phục phù hợp.
                            </p>
                            <p>
                              - Tour mang tính chất là tour ghép lẻ,vì vậy Tour sẽ thực hiện nếu có đủ lượng
                              khách.Trường hợp,không đủ khách để khởi hành Công Ty sẽ hoàn 100% tiền lại cho khách và
                              không đền bù chi phí thiệt hại phát sinh nếu có. Mong quý khách lưu ý !
                            </p>
                            <p>
                              - Trong trường hợp khách hàng dẫn theo trẻ em dưới 15 tuổi (không phải con ruột) đi cùng
                              trong chương trình, phải mang theo Giấy Ủy Quyền của cha mẹ, có xác nhận của chính quyền
                              địa phương.
                            </p>
                            <p>- Trẻ em phải đi cùng cha mẹ khi đi phải mang theo giấy khai sinh hoặc hộ chiếu.</p>
                            <p>
                              - Du khách có mặt tại điểm đón trước 30 phút. Du khách đến trễ khi xe đã khởi hành hoặc
                              hủy tour không báo trước vui lòng chịu phí như ‘hủy vé ngay ngày khởi hành.
                            </p>
                            <p>
                              - Du khách mang theo giấy CMND hoặc Hộ chiếu (Bản chính), nên mang theo hành lý gọn nhẹ,
                              không mang vali lớn.
                            </p>
                            <p>- Du khách tự quản lý tiền bạc tư trang trong qua trình tham quan du lịch.</p>
                            <p>- Khi đăng ký, quý khách vui lòng cung cấp đầy đủ Họ tên và năm sinh.</p>
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
                      <span>1.000.000 VND</span>
                    </div>
                  )}
                  <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                    {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                    {listAge.map(age => age)}
                  </div>
                  <div className="tourtet-totalprice-totalandbtn">
                    {showPriceAndTotal && <p>{total.toLocaleString()} VND</p>}
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

export default QNPY3N4D;
