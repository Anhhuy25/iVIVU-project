import React from 'react';
import { Link } from 'react-router-dom';
import { tetTanSuu } from '../../../listTours';
import { useGlobalContext } from '../../../../../context';

// Components
import NavbarTours from '../../../NavbarTours';
import FooterTop from '../../../FooterTop';
import FooterBottom from '../../../FooterBottom';
import TailorTour from './TailorTour';
import "./tet.css";

// Images
import hinh1 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-trang-an-hang-dong-750x390.jpg';
import hinh2 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-cua-khau-huu-nghi.gif';
import hinh3 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-cho-coc-leu-lao-cai.gif';
import hinh4 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-cat-cat-sin-chai.gif';
import hinh5 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-nha-tho-da-sapa2.jpg';
import hinh6 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-chinh-phuc-fansipan.jpg';
import hinh7 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-tour-mien-bac-5n4d-ha-noi-sapa-ha-long-van-mieu-quoc-tu-giam.jpg';
import hinh8 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-tour-mien-bac-4n3d-ha-noi-ha-long-bai-dinh-trang-an-den-ngoc-son.jpg';
import hinh9 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-quang-truong-ba-dinh.gif';
import hinh10 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-lang-chu-tich-ho-chi-minh.jpg';
import hinh11 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-tour-ha-noi-city-tour-chua-mot-cot-1.jpg';
import hinh12 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-tour-mien-bac-4n3d-ha-noi-suoi-giang-tu-le-mu-cang-chai-chua-bai-dinh.jpg';
import hinh13 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-trang-an.jpg';
import hinh14 from '../../../../../img/tourslist/tetTanSuu/specificDestination/SGtoHL5N4D/ivivu-hon-trong-mai.gif';


const SGHNSPHL5N4D = () => {
  const SGtoHL5N4D = tetTanSuu.find(tour => tour.to === 'tour-mien-bac-5n4d-sai-gon-ha-noi-sapa-ha-long');
  const { to, name, price, rating } = SGtoHL5N4D;

  const {
    showTableDay1403, setShowTable1403,
    showTableDay1703, setShowTable1703,
    showTableDay2403, setShowTable2403,
    numberAdult, setNumberAdult,
    numberChildren, setNumberChildren,
    requireOrWatch, setRequireOrWatch,
    showPriceAndTotal, setShowPriceAndTotal,
    showPriceChildren, setShowPriceChildren,
    listAge,
    selectAge, setSelectAge
  } = useGlobalContext()

  // Show Table Booking
  const handleClickPlus1403 = () => {
    setShowTable1403(false)
    setShowTable1703(true)
    setShowTable2403(true)
  }
  const handleClickPlus1703 = () => {
    setShowTable1403(true)
    setShowTable1703(false)
    setShowTable2403(true)
  }
  const handleClickPlus2403 = () => {
    setShowTable1403(true)
    setShowTable1703(true)
    setShowTable2403(false)
  }

  // Close Table booking
  const handleClickMinus1403 = () => {
    setShowTable1403(true)
    setRequireOrWatch('Yêu cầu đặt')
  }
  const handleClickMinus1703 = () => {
    setShowTable1703(true)
  }
  const handleClickMinus2403 = () => {
    setShowTable2403(true)
  }

  const handleClickSelect = () => {
    setShowPriceAndTotal(false)
    setShowPriceChildren(false)
    setRequireOrWatch('Xem gia')
  }
  // Add-Remove List age
  const addListAge = (index) => {
    listAge.push(
      <select onClick={handleClickSelect} onChange={(e) => setSelectAge(e.target.value)} className="tourtet-selectlist" key={index} name="price">
        <option value="250.000">{`< 1`}</option>
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
    )
  }
  const removeListAge = () => {
    listAge.pop()
  }
  // Increase-Decrease quantity People
  const increaseAdult = () => {
    if (numberAdult >= 100) {
      setNumberAdult(100)
    } else {
      setNumberAdult(numberAdult + 1)
      setRequireOrWatch('Xem gia')
      setShowPriceAndTotal(false)
    }
  }
  const decreaseAdult = () => {
    if (numberAdult <= 1) {
      setNumberAdult(1)
    } else {
      setNumberAdult(numberAdult - 1)
      setRequireOrWatch('Xem gia')
      setShowPriceAndTotal(false)
    }
  }

  const increaseChildren = () => {
    if (numberChildren >= 10) {
      setNumberChildren(10)
    } else {
      setNumberChildren(numberChildren + 1)
      setRequireOrWatch('Xem gia')
      setShowPriceAndTotal(false)
      addListAge(numberChildren)
    }
  }
  const decreaseChildren = () => {
    if (numberChildren <= 0) {
      setNumberChildren(0)
    } else {
      setNumberChildren(numberChildren - 1)
      setRequireOrWatch('Xem gia')
      setShowPriceAndTotal(false)
      removeListAge()
    }
  }

  // handleClickRequireOrWatch
  const handleClickRequireOrWatch = () => {
    setRequireOrWatch('Yêu cầu đặt')
    setShowPriceAndTotal(true)
    setShowPriceChildren(true)
  }
  let total = price * numberAdult;

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
                  <Link className="tourtet-link" to="/ha-long">
                    <span>Hạ Long</span>
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
              <p className="tourtet-rating">{rating.map((desc, index) => <span key={index}>{desc}</span>)}</p>
            </div>

            {/* Infomation */}
            <div className="col l-8 m-8 c-12">
              <div className="tourtet-content">
                <img src={hinh1} alt="Sài Gòn - Hà Nội - SaPa - Hạ Long" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>
                      5 Ngày 4 Đêm
                    </span>
                    <span>Phương tiện:
                      <i className="fas fa-plane"></i>
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span>Mã Tour: <b>TO1257</b></span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Hành Trình Trải Nghiệm Du Lịch Miền Bắc</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Miền Bắc Việt Nam gồm Tây Bắc, Đông Bắc và đồng bằng Sông Hồng, là cái nôi văn hóa lịch sử hàng ngàn năm của Việt Nam. Thiên nhiên và cảnh đẹp hùng vĩ, 4 mùa xuân hạ thu đông, miền Bắc luôn là điểm hẹn hấp dẫn cho quý khách muốn đến và đặt chân nhiều lần. Mỗi vùng, mỗi tỉnh, mỗi điểm sẽ là một vùng văn hóa, một di sản, một thắng cảnh,...mang vẻ đẹp riêng biệt khác nhau, làm cho du khách lẫn trong và ngoài nước đều muốn chinh phục, muốn khám phá. Cùng iVIVU khám phá hành trình thú vị ngay hôm nay!
                    </p>
                    <p className="tourtet-bookgroup"><b><i>Đặt đoàn riêng liên hệ 028 3933 8002 hoặc hotline 0906 355 542 để có giá tốt.</i></b></p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>Liên tuyến hành trình quý khách sẽ đi từ bất ngờ này sang bất ngờ khác: </p>
                      <p>- Cột mốc hữu nghị <strong>Việt Nam – Trung Quốc</strong>.</p>
                      <p>- <strong>Bản Cát Cát - Sín Chải</strong> của người <strong>H’mong</strong>.</p>
                      <p>- Chinh phục <strong>đỉnh Fanxiphan </strong>- Noc Nhà Của Đông Dương.</p>
                      <p>- Danh thắng <strong>Tràng An </strong>- Di sản được UNESCO công nhận là di sản văn hóa và thiên nhiên Thế giới.</p>
                      <p>- Tham quan Di sản thiên nhiên Thế giới - <strong>Vịnh Hạ Long</strong>.</p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2>Chương trình tour</h2>
                    <div className="tourtet-flighttime">
                      <h3><u>Giờ bay:</u></h3>
                      <p>Giờ bay ngày thường: Chuyến VJ124 07:20 - VJ141 20:30</p>
                      <p>Giờ bay ngày tết: Chuyến VJ176: 05:25 - VJ169 20:00</p>
                    </div>
                    <div className="tourtet-firstday">
                      <h3>NGÀY 01: TP HỒ CHÍ MINH - SAPA (ĂN TRƯA, TỐI)</h3>
                      <p>Sáng: 05h30 Nhân viên đón đoàn tại sân bay <b>Tân Sơn Nhất</b> làm thủ tục bay đi
                       <b> Hà Nội</b> (chuyến bay của <b>Viet Jet Air VJ 128</b> lúc <b>07h55</b>).
                        Đến sân bay Nội Bài, xe khởi hành đưa đoàn đi <b>Sapa</b>.
                      </p>
                      <p>Đoàn dùng cơm trưa tại <b>Lào Cai</b>.</p>
                      <p>Quý khách tự do tham quan và chụp hình tại <b>cột mốc hữu nghị Việt Nam – Trung Quốc</b>.</p>
                      <img src={hinh2} alt="cột mốc hữu nghị Việt Nam – Trung Quốc" />
                      <p>Mua sắm đồ lưu niệm và điện tử tại chợ <b>Cốc Lếu Lào Cai</b> (nếu còn thời gian).</p>
                      <img src={hinh3} alt="chợ Cốc Lếu Lào Cai" />
                      <p>Sau đó khởi hành đi <b>Sapa</b> nhận phòng nghỉ ngơi.</p>
                      <p>Tối: Quý khách ăn tối và nghỉ đêm tại <b>Sapa</b>.</p>
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: KHÁM PHÁ SAPA ( ĂN SÁNG, TRƯA, ĂN TỐI TỰ TÚC)</h3>
                      <p>Sáng: Điểm tâm sáng, Xe và HDV đưa Quý khách đến bản<b> Cát Cát</b>, bắt đầu hành trình khám phá bản làng.</p>
                      <p>- Tham quan<b> bản Cát Cát - Sín Chải </b>của người<b> H'mong</b>. Quý khách sẽ được thăm và tìm hiểu phong tục tập quán sinh hoạt kỳ thú, đơn sơ đến bình dị của những người dân tộc thiểu số.</p>
                      <img src={hinh4} alt="bản Cát Cát - Sín Chải" />
                      <p>- Tham quan thác<b> Cát Cát </b>và nhà máy thuỷ điện do người Pháp xây dựng đầu thế kỷ XX, vui chơi và chụp hình lưu niệm…</p>
                      <p>Chiều: Quý khách tham quan và tự do mua sắm đồ lưu niệm, đặc sản tại <b>Chợ Sapa</b> - nơi trao đổi mua bán nhiều loại hàng hóa, sản phẩm địa phương.</p>
                      <p>- <b>Nhà Thờ Đá</b> - dấu ấn kiến trúc của người Pháp còn lại vẹn toàn nhất tại <b>Sapa</b>.</p>
                      <img src={hinh5} alt="Nhà Thờ Đá" />
                      <p>Nếu Qúy khách muốn chinh phục <b>đỉnh Fanxiphan</b>, Cong ty sẽ bố trí thời gian tham quan cho phù hợp (phụ thu thêm 850.000đ/khách  bao gồm tiền cáp treo + xe di chuyển ra ga cáp).</p>
                      <img src={hinh6} alt="đỉnh Fanxiphan" />
                      <p>Hoặc Quý khách tham quan cây <b>cầu kính Rồng Mây</b> (phụ thu thêm chi phí 400.000 đồng/người lớn và 200.000 đồng trẻ em).</p>
                      <p>Tối: Đoàn tự túc ăn tối thưởng thức ẩm thực vùng cao: cơm lam, gà nướng, thắng cố, rượu Ngô…tại chợ đêm Sapa.</p>
                    </div>
                    <div className="tourtet-thirdday">
                      <h3>NGÀY 03: SAPA  - HÀ NỘI (ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>Sáng: Quý khách dùng điểm tâm và trả phòng khách sạn, tự do tham quan và mua sắm đặc sản về làm quà cho người thân tại chợ Sapa, sau đó xe đưa đoàn khởi hành về lại <b>Lào Cai</b>.</p>
                      <p>Đoàn dùng cơm trưa tại <b>Lào Cai</b>.</p>
                      <p>Chiều: Xe đưa đoàn về lại Hà Nội, Quý khách tham quan:</p>
                      <p>Quý khách ghé thăm <b>Văn Miếu - Quốc Tử Giám</b> – Nơi đựoc xem như Trường Đại học đầu tiên của <b>Việt Nam</b> với 82 tấm bia Tiến sỹ còn lưu danh sử sách.</p>
                      <img src={hinh7} alt="Văn Miếu - Quốc Tử Giám" />
                      <p>Quý khách dùng cơm tối thưởng thức ẩm thực <b>Hà Nội</b> : Bánh tôm hồ tây, chả cá… nhận phòng khách sạn nghỉ ngơi.</p>
                      <p>Tối: Quý khách tự do tham quan:</p>
                      <p>Tham quan <b>Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm, Nhà Hát Lớn Hà Nội</b>, Nhà Thờ Lớn Hà Nội...</p>
                      <img src={hinh8} alt="Cầu Thê Húc" />
                      <p>Những khu phố ẩm thực trứ danh đất <b>Hà Thành</b>: phố Cấm Chỉ, Tạ Hiện...</p>
                      <p>Đoàn nghỉ đêm tại khách sạn.</p>
                    </div>
                    <div className="tourtet-fourthday">
                      <h3>NGÀY 04: HÀ NỘI  - KDL TRÀNG AN - CHÙA BÁI ĐÍNH (ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>Sáng: Quý khách dùng ăn sáng và trả phòng khách sạn, Hướng dẫn viên đưa đoàn xe đưa đoàn tham quan cụm di tích lịch sử Phủ Chủ Tịch. Với các quần thể kiến trúc:</p>
                      <p>- <b>Quảng Trường Ba Đình</b> - là một di tích đặc biệt, nơi đây còn là nơi ghi nhận nhiều dấu ấn quan trọng tong lịch sử <b>Việt Nam</b>.</p>
                      <img src={hinh9} alt="Quảng Trường Ba Đình" />
                      <p>- Bảo tàng <b>Hồ Chí Minh</b> - Nằm trong khu vực có nhiều di tích như: <b>Lăng Chủ tịch Hồ Chí Minh</b>, Khu di tích Phủ chủ tịch, Chùa Một Cột... tạo thành một quần thể các di tích đặc biệt.</p>
                      <img src={hinh10} alt="Lăng Chủ tịch Hồ Chí Minh" />
                      <p>- Nhà Sàn giản dị nằm giữa thủ đô <b>Hà Nội</b> là nơi <b>Bác Hồ</b> đã sống và làm việc lâu nhất trong cuộc đời hoạt động cách mạng của mình.</p>
                      <p>- <b>Chùa Một Cột (Chùa Mật)</b> - ngôi chùa có kiến trúc độc đáo, chỉ có 1 gian dựng trên 1 cột đá nằm giữa lòng hồ Linh Chiểu...</p>
                      <img src={hinh11} alt="Chùa Một Cột (Chùa Mật)" />
                      <p>- Tiếp tục hành trình, đoàn khởi hành đi <b>Ninh Bình</b>. Đến Ninh Bình Quý khách cầu lễ phật tại <b>Chùa Bái Đính</b> (không bao gồm xe điện đưa đón lên chùa ), ngôi chùa lớn nhất Việt Nam với 500 pho tượng La Hán, tượng phật đồng lớn nhất Việt Nam cao 10m nặng 100 tấn.</p>
                      <img src={hinh12} alt="Chùa Bái Đính" />
                      <p>Dùng cơm trưa với đặc sản Cơm Cháy- Dê núi của Ninh Bình.</p>
                      <p>Chiều: Quý khách tham Quần thể <b>Danh thắng Tràng An – Di sản được UNESCO</b> công nhận là di sản văn hóa và thiên nhiên Thế giới, giúp cho Việt Nam lần dầu lọt vào danh sách 30 di sản hỗn hợp Thế Giới. Lên thuyền xuôi dòng Sào khê uốn lượn giữa cánh đồng lúa, nơi những dải đá vôi, thung lũng và những sông ngòi đan xen tạo nên một không gian huyền ảo, kỳ bí , quý khách đi đò tham Hang sáng , Hang tối , Hang nấu rượu...</p>
                      <img src={hinh13} alt="Danh thắng Tràng An" />
                      <p>Quý khách rời Ninh Bình, theo Quốc lộ 10 đi Hạ Long, trên đường đi Quý khách sẽ được cảm nhận, khám phá cuộc sống, phong cảnh đặc trưng của <b>Đồng Bằng Bắc Bộ</b> với cảnh làng quê thanh bình qua các tỉnh Nam Định, Thái Bình, Hải Phòng. Đến Hạ Long, nhận phòng, nghỉ ngơi, ăn tối tại nhà hàng.</p>
                      <p>Tối: Quý khách tự do dạo chơi Công viên Hoàng Gia dọc biển <b>Bãi Cháy</b>, đi mua sắm hàng hóa tại khu Chợ Đêm Hạ Long sầm uất với các sản phẩm đặc trưng Hạ Long, lên cầu Bãi Cháy – cây cầu dây văng dài nhất Việt Nam ngắm Hạ Long về đêm.</p>
                    </div>
                    <div className="tourtet-fifthday">
                      <h3>NGÀY 05: HẠ LONG – HẢI DƯƠNG – SÂN BAY NỘI BÀI (ĂN SÁNG, TRƯA)</h3>
                      <p>Sáng: Quý khách ăn sáng và trả phòng khách sạn, Đoàn đến bến thuyền <b>Tuần Châu</b> bắt đầu hành trình tham quan Di sản thiên nhiên Thế giới tại Việt Nam, với các danh thắng nổi tiếng:</p>
                      <p>Tham <b>Động Thiên Cung</b>, ngắm cảnh <b>Làng Chài, hòn Ấm, hòn Rùa, hòn Đỉnh Hương, hòn Chó Đá, hòn Gà Chọi...</b></p>
                      <img src={hinh14} alt="Hòn Gà Chọi" />
                      <p>Chiều: Tàu về cập bến, xe đưa đoàn khởi hành về lại Hà Nội, trên đường đoàn dừng chân tham quan và mua sắm đặc sản bánh đậu xanh tại Hải Dương. Về tới Nội Bài, Quý khách dùng bữa tối (ăn nhẹ tại sân bay). Hướng dẫn viên làm thủ tục cho đoàn đáp chuyến bay của <b>VJ173</b> bay về lại Tp HCM lúc 20h30, chia tay đoàn và kết thúc chương trình tham quan Miền Bắc.</p>
                      <i>Thứ tự tham quan có thể thay đổi nhưng vẫn bảo đảm đầy đủ điểm tham quan có trong chương trình.</i>
                    </div>
                  </div>
                  <div className="tourtet-tailortour"><TailorTour /></div>
                  <div className="tourtet-departureschedule">
                    <div className="tourtet-departureschedule-title">
                      <h2>Lịch khởi hành</h2>
                    </div>

                    <div className="tourtet-departureschedule-table">
                      <div className="tourtet-departureschedule-title">
                        <span>Ngày khởi hành</span>
                        <span>Ngày về</span>
                        <span>Tình trạng</span>
                        <span>Giá</span>
                      </div>

                      <div className={`tourtet-departureschedule-1403 ${!showTableDay1403 && 'tourtet-departureschedule-1403minus'}`}>
                        <span>T4, 10/03/2021</span>
                        <span>CN, 14/03/2021</span>
                        <span>Liên hệ</span>
                        <span>
                          {showTableDay1403 ?
                            (<>6.490.000 VND <i onClick={handleClickPlus1403} className="fas fa-plus-circle"></i></>) :
                            <i onClick={handleClickMinus1403} className={`fas fa-minus-circle  ${showTableDay1403 ? 'tourtet-plus1403' : 'tourtet-minus1403'}`}></i>}
                        </span>
                      </div>
                      {!showTableDay1403 && (
                        <div className="tourtet-departureschedule-table-adultchildren">
                          <div className="tourtet-departureschedule-tableadult">
                            <span className="tourtet-departureschedule-adult">Người lớn</span>
                            {showPriceAndTotal && <span className="tourtet-departureschedule-price">x {price}</span>}
                            <div className="tourtet-numberAdult">
                              <button onClick={decreaseAdult}>-</button>
                              <span className="numberadult">{numberAdult}</span>
                              <button onClick={increaseAdult}>+</button>
                            </div>
                            {showPriceAndTotal && <div><span>{total}</span></div>}
                            <button onClick={handleClickRequireOrWatch} className="tourtet-departureschedule-tablebtn">{requireOrWatch}</button>
                          </div>
                          <div className="tourtet-departureschedule-tablechildren">
                            <span className="tourtet-departureschedule-children">Trẻ em</span>
                            {showPriceChildren && <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>}
                            <div className="tourtet-numberChildren">
                              <button onClick={decreaseChildren}>-</button>
                              <span className="numberchildren">{numberChildren}</span>
                              <button onClick={increaseChildren}>+</button>
                            </div>
                          </div>
                          <div className={`${listAge.length > 0 && 'tourtet-listage'}`}>
                            {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                            {listAge.map(age => age)}
                          </div>
                        </div>
                      )}

                      <div className={`tourtet-departureschedule-1703 ${!showTableDay1703 && 'tourtet-departureschedule-1703minus'}`}>
                        <span>T4, 17/03/2021</span>
                        <span>CN, 21/03/2021</span>
                        <span>Liên hệ</span>
                        <span>
                          {showTableDay1703 ?
                            (<>6.490.000 VND <i onClick={handleClickPlus1703} className="fas fa-plus-circle"></i></>) :
                            <i onClick={handleClickMinus1703} className={`fas fa-minus-circle  ${showTableDay1703 ? 'tourtet-plus1703' : 'tourtet-minus1703'}`}></i>}
                        </span>
                      </div>
                      {!showTableDay1703 && (
                        <div className="tourtet-departureschedule-table-adultchildren">
                          <div className="tourtet-departureschedule-tableadult">
                            <span className="tourtet-departureschedule-adult">Người lớn</span>
                            {showPriceAndTotal && <span className="tourtet-departureschedule-price">x {price}</span>}
                            <div className="tourtet-numberAdult">
                              <button onClick={decreaseAdult}>-</button>
                              <span className="numberadult">{numberAdult}</span>
                              <button onClick={increaseAdult}>+</button>
                            </div>
                            {showPriceAndTotal && <div><span>{total}</span></div>}
                            <button onClick={handleClickRequireOrWatch} className="tourtet-departureschedule-tablebtn">{requireOrWatch}</button>
                          </div>
                          <div className="tourtet-departureschedule-tablechildren">
                            <span className="tourtet-departureschedule-children">Trẻ em</span>
                            {showPriceChildren && <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>}
                            <div className="tourtet-numberChildren">
                              <button onClick={decreaseChildren}>-</button>
                              <span className="numberchildren">{numberChildren}</span>
                              <button onClick={increaseChildren}>+</button>
                            </div>
                          </div>
                          <div className={`${listAge.length > 0 && 'tourtet-listage'}`}>
                            {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                            {listAge.map(age => age)}
                          </div>
                        </div>
                      )}

                      <div className={`tourtet-departureschedule-2403 ${!showTableDay2403 && 'tourtet-departureschedule-2403minus'}`}>
                        <span>T4, 24/03/2021</span>
                        <span>CN, 28/03/2021</span>
                        <span>Liên hệ</span>
                        <span>
                          {showTableDay2403 ?
                            (<>6.490.000 VND <i onClick={handleClickPlus2403} className="fas fa-plus-circle"></i></>) :
                            <i onClick={handleClickMinus2403} className={`fas fa-minus-circle  ${showTableDay2403 ? 'tourtet-plus2403' : 'tourtet-minus2403'}`}></i>}
                        </span>
                      </div>
                      {!showTableDay2403 && (
                        <div className="tourtet-departureschedule-table-adultchildren">
                          <div className="tourtet-departureschedule-tableadult">
                            <span className="tourtet-departureschedule-adult">Người lớn</span>
                            {showPriceAndTotal && <span className="tourtet-departureschedule-price">x {price}</span>}
                            <div className="tourtet-numberAdult">
                              <button onClick={decreaseAdult}>-</button>
                              <span className="numberadult">{numberAdult}</span>
                              <button onClick={increaseAdult}>+</button>
                            </div>
                            {showPriceAndTotal && <div><span>{total}</span></div>}
                            <button onClick={handleClickRequireOrWatch} className="tourtet-departureschedule-tablebtn">{requireOrWatch}</button>
                          </div>
                          <div className="tourtet-departureschedule-tablechildren">
                            <span className="tourtet-departureschedule-children">Trẻ em</span>
                            {showPriceChildren && <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>}
                            <div className="tourtet-numberChildren">
                              <button onClick={decreaseChildren}>-</button>
                              <span className="numberchildren">{numberChildren}</span>
                              <button onClick={increaseChildren}>+</button>
                            </div>
                          </div>
                          <div className={`${listAge.length > 0 && 'tourtet-listage'}`}>
                            {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                            {listAge.map(age => age)}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="col l-4 m-4 c-12">
              <h1>Price</h1>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default SGHNSPHL5N4D;