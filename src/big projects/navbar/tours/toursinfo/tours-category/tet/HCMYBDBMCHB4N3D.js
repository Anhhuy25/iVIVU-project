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

import hinh1 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-mai-chau-bia-750x390.jpg";
import hinh2 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-che-shan-tuyet-suoi-giang.gif";
import hinh3 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-deo-khau-pha.gif";
import hinh4 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-tour-mien-bac-4n3d-ha-noi-suoi-giang-tu-le-mu-cang-chai-che-cu-nha.jpg";
import hinh5 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-nha-san-go-lim.gif";
import hinh6 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-bao-tang-dien-bien.gif";
import hinh7 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-ham-docat-db.gif";
import hinh8 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMYBDBMCHB4N3D/ivivu-tour-mien-bac-6n5d-sai-gon-moc-chau-son-la-sapa-thac-dai-yem.jpg";

const HCMYBDBMCHB4N3D = () => {
  const HCMtoYBDBMCHB4N3D = tetTanSuu.find(
    tour => tour.to === "tour-mien-bac-4n3d-hcm-yen-bai-dien-bien-moc-chau-hoa-binh",
  );
  const { to, name, price } = HCMtoYBDBMCHB4N3D;

  const {
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
    total = price + 800000;
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
                    <span>Điện Biên</span>
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
                <img src={hinh1} alt="Quy Nhơn - Phú Yên" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>4 Ngày 3 Đêm
                    </span>
                    <span>
                      Phương tiện:
                      <i className="fas fa-plane"></i>
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span className="tourtet-code">
                    Mã Tour: <b>TO1467</b>
                  </span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Hùng Vĩ Vòng Cung Tây Bắc</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Du lịch vòng cung Tây Bắc – thiên đường với những khung cảnh thiên nhiên mang vẻ đẹp hùng vĩ của
                      những cánh rừng mênh mông và những ruộng bậc thang tuyệt đẹp, cùng nét văn hóa đặc sắc của bà con
                      các dân tộc nơi đây. Những khu di tích lịch sử gắn liền với những cột mốc lịch sử quan trọng và
                      những chiến thắng lẫy lừng của quân và dân Việt Nam. Cùng iVIVU khám phá ngay hôm nay!
                    </p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>Điểm nôi bật có trong chương trình:</p>
                      <p>
                        - Tham quan rừng chè <strong>Shan Tuyết</strong> xanh mướt một màu.
                      </p>
                      <p>
                        - Chinh phục đèo <strong>Khau Phạ</strong>, khám phá Tú Lệ nổi tiếng.
                      </p>
                      <p>
                        - Thỏa sức check in trong phong cảnh tuyệt đẹp ở <strong>Mù Căng Chải</strong>.
                      </p>
                      <p>
                        - Tham quan bảo tàng <strong>Điện Biên </strong> nơi lưu giữ những chiến tích oai hùng.
                      </p>
                      <p>
                        - Khám phá những điểm đến thơ mộng như: <strong>thác Dải Yếm, rừng thông bản Áng</strong>, đồi
                        chè hình trái tim, làng hoa cải, hoa mận...
                      </p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2 id="1">Chương trình tour</h2>
                    <div className="tourtet-firstday">
                      <h3>NGÀY 01: TP.HCM – HÀ NỘI – YÊN BÁI – NGHĨA LỘ ( ĂN TRƯA, TỐI)</h3>
                      <p>
                        Buổi sáng: Hướng dẫn viên công ty đón quý khách và làm thủ tục cho đoàn tại sân bay
                        <b> Tân Sơn Nhất</b>, đáp chuyến bay đi <b> Hà Nội</b>.
                      </p>
                      <p>
                        Máy bay hạ cánh tại sân bay <strong>Nội Bài</strong>, , xe và hướng dẫn viên đón đoàn và khởi
                        hành đi <strong>Yên Bái</strong> theo cao tốc <strong>Nội Bài - Lào Cai </strong>, trước khi rẽ
                        vào cầu Yên Bái để tới trung tâm thành phố Yên Bái.
                      </p>
                      <p>Buổi chiều: Đoàn dùng bữa trưa tại nhà hàng ở TP.Yên Bái.</p>
                      <p>
                        Xe tiếp tục khởi hành đưa quý khách tham quan rừng <strong>chè Shan tuyết </strong> tại xã
                        <strong>Suối Giàng</strong> hơn 300 năm tuổi trên tổng số hơn 4000 gốc chè nơi đây. Quý khách sẽ
                        có dịp trải nghiệm. Những cây chè thủy tổ - được hội bảo vệ thiên nhiên và môi trường Việt Nam
                        công nhận là cây di sản Việt Nam, và loại chè “5 cực, 2 không” lưu truyền trong dân gian.
                      </p>
                      <img src={hinh2} alt="Chè Shan Tuyết." />
                      <p>
                        Tiếp tục hành trình, quý khách di chuyển về thị xã <b>Nghĩa Lộ</b> và nhận phòng khách sạn, nghỉ
                        ngơi.
                      </p>
                      <p>
                        Buổi tối: Ăn tối và nghỉ đêm ở Nghĩa Lộ. Tự do khám phá cuộc sống về đêm của đồng bào nơi đây.
                      </p>
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: KHAU PHẠ - TÚ LỆ - MÙ CANG CHẢI - ĐIỆN BIÊN ( ĂN SÁNG, TRƯA, CHIỀU)</h3>
                      <p>
                        Buổi sáng: Quý khách dùng điểm tâm sáng tại nhà hàng, trả phòng và khởi hành đi
                        <b> Mù Cang Chải</b>. Dọc đường, đoàn chinh phục <b>đèo Khau Phạ</b> - một trong “tứ đại đỉnh
                        đèo” ở Việt Nam. Đoàn vượt qua đỉnh núi Khau Phạ - cao nhất nơi đây, trước khi đi qua Tú Lệ nổi
                        tiếng với “nếp Tú Lệ - Mường Lò” - đặc sản đã đi vào thơ ca: “Nhất Thanh, nhì Lo, tam Than tứ
                        Tấc
                      </p>
                      <img src={hinh3} alt="Đèo Khau Phạ." />
                      <p>
                        Tới Mù Cang Chải, đoàn di chuyển tham quan và chụp hình với một bức tranh thiên nhiên tuyệt đẹp
                        được vẽ trên hơn 2.200 ha ruộng bậc thang kỳ vĩ đổi sắc màu theo từng mùa. Quý khách di chuyển
                        chụp hình, săn ảnh tại <b>Chế Cu Nha, La Pán Tẩn</b>.
                      </p>
                      <img src={hinh4} alt="Mù Cang Chải." />
                      <p>Ăn trưa tại nhà hàng ở Mù Cang Chải.</p>
                      <p>
                        Buổi chiều: Xe tiếp tục khởi hành đi Điện Biên qua Than Uyên & Phong Thổ (Lai Châu) theo quốc lộ
                        12, trước khi tới lòng chảo Điện Biên.
                      </p>
                      <p>
                        Tới Điện Biên, quý khách tham quan ngôi nhà sàn bằng gỗ lim & các loại gỗ siêu quý hiếm lâu năm
                        (quy mô lớn nhất khu vực, đạt nhiều kỷ lục Guiness)
                      </p>
                      <img src={hinh5} alt="Nhà Thờ Mằng Lăng." />
                      <p>
                        Buổi tối: Ăn tối tại Điện Biên, xe đưa đoàn tới tham quan và giao lưu với đồng bào dân tộc Thái
                        tại bản Mển (Bản Mển nằm nép mình giữa bạt ngàn núi đồi và ruộng nương (thuộc xã Thanh Nưa,
                        huyện Điện Biên, tỉnh Điện Biên) được biết đến như một điểm du lịch cộng đồng hấp dẫn, thu hút
                        nhiều du khách trong nước và quốc tế.
                      </p>
                    </div>
                    <div className="tourtet-thirdday">
                      <h3>NGÀY 03: THAM QUAN ĐIỆN BIÊN - SƠN LA - MỘC CHÂU ( ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>
                        Buổi sáng: Sau bữa sáng, Xe đưa đoàn tham quan bảo tàng Điện Biên có 5 khu trưng bầy với 274
                        hiện vật và 122 bức tranh theo từng chủ đề sau:
                      </p>
                      <p>- Vị trí chiến lược của Điện Biên Phủ.</p>
                      <p>- Tập đoàn cứ điểm của địch tại Điện Biên Phủ.</p>
                      <img src={hinh6} alt="Bảo Tàng Điện Biên Phủ." />
                      <p>- Đảng chuẩn bị đường lối chỉ đạo cho chiến dịch Điện Biên Phủ.</p>
                      <p>- Ảnh hưởng của chiến thắng Điện Biên Phủ.</p>
                      <p>
                        - Điện Biên Phủ ngày nay. Đoàn tiếp tục thăm quan đồi A1 - nằm ở phường Mường Thanh. Đồi A1 là
                        cứ điểm quan trọng bậc nhất trong tập đoàn cứ điểm của thực dân Pháp ở Điện Biên Phủ. Tiếp tục
                        thăm quan hầm Đờ Cát - Hầm chỉ huy của tướng De Castries nằm ở trung tâm tập đoàn cứ điểm Điện
                        Biên Phủ, trên cánh đồng Mường Thanh, chợ Điện Biên. Quý khách tiếp tục thăm khu lòng chảo Điện
                        Biên.
                      </p>
                      <img src={hinh7} alt="Hầm Đờ Cát." />
                      <p>Đoàn dùng bữa trưa tại nhà hàng ở Điện Biên.</p>
                      <p>
                        Buổi chiều: Xe tiếp tục khởi hành đi Sơn La - nằm cách Hà Nội 320 km với hai cao nguyên là Mộc
                        Châu và Sơn La - Nà Sản được coi là mái nhà của đồng bằng Bắc Bộ trước khi tới cao nguyên Mộc
                        Châu. Trên đường đi, quý khách dừng chân nghỉ tại đỉnh đèo Fadin ngoạn mục - con đèo thứ hai
                        trong hành trình & là một trong “tứ đại đỉnh đèo” ở VN. Tiếp tục hành trình, Quý khách tham quan
                        khu di tích binh đoàn Tây Tiến dọc đường đi.
                      </p>
                      <p>
                        Tới Mộc Châu, đoàn chiêm ngưỡng thác Dải Yếm, rừng thông bản Áng, đồi chè hình trái tim, làng
                        hoa cải, hoa mận tại cao nguyên Mộc Châu.
                      </p>
                      <img src={hinh8} alt="Thác Dải Yếm." />
                      <p>Quý khách nhận phòng khách sạn, nghỉ ngơi.</p>
                      <p>
                        Buổi tối: Đoàn ăn tối và nghỉ đêm tại khách sạn ở Mộc Châu. Thưởng thức món sữa chua nếp cẩm &
                        bò tơ nổi tiếng tại Mộc Châu.
                      </p>
                      <i>
                        Thứ tự tham quan có thể thay đổi nhưng vẫn bảo đảm đầy đủ điểm tham quan có trong chương trình.
                      </i>
                    </div>
                    <div id="2" className="tourtet-tailortour">
                      <TailorTour />
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
                        <p>- Phụ thu phòng đơn: Chi phí 800.000 vnđ/người/tour.</p>
                        <p>
                          - Trẻ em từ 02 tuổi đến dưới 05 tuổi: giá tour theo khung giá trên web (02 vợ chồng được kèm
                          theo 1 trẻ, trẻ Em thứ 2 cần mua theo xuất người lớn để đảm bảo chỗ ngủ phù hợp). Tiêu chuẩn
                          trẻ em có vé máy bay, bảo hiểm và ngủ chung với Cha Mẹ. Các chi phí ăn uống tham quan có phát
                          sinh gia đình tự lo cho Em.
                        </p>
                        <p>
                          - Trẻ em từ 05 tuổi đến 9 tuổi: giá tour theo khung giá trên web (02 vợ chồng được kèm theo 1
                          trẻ, trẻ Em thứ 2 cần mua theo xuất người lớn để đảm bảo chỗ ngủ phù hợp). Tiêu chuẩn trẻ em
                          có vé máy bay, bảo hiểm, ghế ngồi trên xe, phần ăn và ngủ chung với Cha Mẹ.
                        </p>
                        <p>
                          - Em bé dưới 02 tuổi: 500.000 VNĐ/bé bao gồm có thuế phí hàng không, bảo hiểm (Không bao gồm
                          ghế ngồi trên xe) nhưng 2 vợ chồng chỉ được kèm 01 em bé dưới 02 tuổi, nếu bé thứ 02 tính giá
                          trẻ em theo khung từ 2 đến dưới 5 tuổi.
                        </p>
                        <p>- Trẻ em từ 10 tuổi trở lên mua vé như người lớn</p>
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
                              <p>- Vé máy bay TP.HCM-HAN-TP.HCM khứ hồi Vietnam Airlines/ Bamboo Airways/ Vietjet.</p>
                              <p>- Xe ô tô du lịch đời mới, máy lạnh đưa đón theo chương trình 29 chỗ.</p>
                            </div>
                            <div>
                              <u>Lưu trú:</u>
                              <p>- Homestay tiện nghi, sạch sẽ, hiện đại tại trung tâm bản.</p>
                              <p>- Khách sạn & Home Stay.</p>
                            </div>
                            <div>
                              <u>Khác:</u>
                              <p>- Tắm khoáng nóng Ngọc Chiến.</p>
                              <p>- Ăn các bữa trong chương trình với các món ăn đặc sản địa phương.</p>
                              <p>- Hướng dẫn viên suốt tuyến, nhiệt tình, kinh nghiệm.</p>
                              <p>- Phí tham quan tại điểm theo chương trình.</p>
                              <p>- Bảo hiểm du lịch suốt hành trình mức đền bù tối đa 50 triệu đồng/người/vụ.</p>
                            </div>
                          </div>
                        )}
                        {secondTerm && (
                          <div className="tourtet-secondterm-list">
                            <p>- Thuế VAT 10%.</p>
                            <p>- Chi phí điện thoại cá nhân, ăn uống ngoài chương trình.</p>
                            <p>- Nếu quý khách huỷ trước ngày khởi hành 10 ngày: chịu phí 100% chi phí tour.</p>
                            <p>- Chi phí phụ thu phòng đơn.</p>
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
                              thực tế. Nhưng không hủy bỏ hoặc thay đổi mà không có sự thỏa thuận với Đoàn.
                            </p>
                            <p>
                              - Phụ thu phòng đơn: Trường hợp khách lẻ đi 1 mà ko ngủ ghép đoàn được hoặc khách muốn ở
                              riêng 1 phòng.
                            </p>
                            <p>
                              **Trong những trường hợp khách quan như: khủng bố, thiên tai…hoặc do có sự cố, có sự thay
                              đổi lịch trình của các phương tiện vận chuyển công cộng như: máy bay, tàu hỏa…thì Cty sẽ
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
                      <span>800.000 VND</span>
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

export default HCMYBDBMCHB4N3D;
