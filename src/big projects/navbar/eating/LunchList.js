import React, { useEffect, useState } from "react";
import listMeal from "./ListMeal";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

import "./eating.css";
import "../../grid.css";

const LunchList = () => {
  const {
    tasteMeal,
    setTasteMeal,
    cookMeal,
    setCookMeal,
    priceMeal,
    setPriceMeal,
    tasteValue,
    setTasteValue,
    cookValue,
    setCookValue,
    priceValue,
    setPriceValue,
  } = useGlobalContext();
  const [lunchList, setLunchList] = useState(listMeal);

  // Open Taste List, Cook List, Price List
  const showTasteList = () => {
    setTasteMeal(!tasteMeal);
    setCookMeal(false);
    setPriceMeal(false);
  };
  const showCookList = () => {
    setCookMeal(!cookMeal);
    setTasteMeal(false);
    setPriceMeal(false);
  };
  const showPriceList = () => {
    setPriceMeal(!cookMeal);
    setTasteMeal(false);
    setCookMeal(false);
  };

  // Click Taste Item, Cook Item, Price Item
  const changeTasteValue = (e) => {
    setTasteValue(e.target.value);
    setTasteMeal(false);
    setLunchList(listMeal);
  };
  const changeCookValue = (e) => {
    setCookValue(e.target.value);
    setCookMeal(false);
    setLunchList(listMeal);
  };
  const changePriceValue = (e) => {
    setPriceValue(e.target.value);
    setPriceMeal(false);
    setLunchList(listMeal);
  };

  // Clear Taste Item
  const clearTasteItem = () => {
    setTasteValue(false);
    setTasteMeal(false);
  };
  const clearCookItem = () => {
    setCookValue(false);
    setCookMeal(false);
  };
  const clearPriceItem = () => {
    setPriceValue(false);
    setPriceMeal(false);
  };

  // Filter Taste Value
  useEffect(() => {
    switch (tasteValue) {
      case "Vị Bắc":
        setLunchList(lunchList.filter((meal) => meal.taste === "north"));
        break;
      case "Vị Trung":
        setLunchList(lunchList.filter((meal) => meal.taste === "central"));
        break;
      case "Vị Nam":
        setLunchList(lunchList.filter((meal) => meal.taste === "south"));
        break;
      case "Collection":
        setLunchList(lunchList.filter((meal) => meal.taste === "collection"));
        break;
      default:
        setLunchList(listMeal);
        break;
    }
    // eslint-disable-next-line
  }, [tasteValue]);

  // Filter Cook Value
  useEffect(() => {
    switch (cookValue) {
      case "Thanh đạm":
        setLunchList(lunchList.filter((meal) => meal.cook === "frugal"));
        break;
      case "Đậm đà":
        setLunchList(lunchList.filter((meal) => meal.cook === "warm"));
        break;
      default:
        setLunchList(listMeal);
        break;
    }
    // eslint-disable-next-line
  }, [cookValue]);

  // Filter Price Value
  useEffect(() => {
    switch (priceValue) {
      case "199.000đ/tuần":
        setLunchList(lunchList.filter((meal) => meal.price === 199000));
        break;
      case "299.000đ/tuần":
        setLunchList(lunchList.filter((meal) => meal.price === 299000));
        break;
      case "399.000đ/tuần":
        setLunchList(lunchList.filter((meal) => meal.price === 399000));
        break;
      default:
        setLunchList(listMeal);
        break;
    }
    // eslint-disable-next-line
  }, [priceValue]);

  return (
    <>
      {/* Lunch Select */}
      <div className='meal-selectcalendar'>
        <div className='grid wide'>
          <div className='row'>
            <div className='col l-8'>
              <div className='meal-select'>
                <span>Lựa chọn bữa trưa theo</span>

                <button onClick={showTasteList} className='meal-select-btn'>
                  {tasteValue ? (
                    <>
                      <p>{tasteValue}</p>
                      <i onClick={clearTasteItem} className='fas fa-times'></i>
                    </>
                  ) : (
                    <>
                      <p>Phong vị</p>
                      <i className='fas fa-sort-down'></i>
                    </>
                  )}
                </button>
                {tasteMeal && (
                  <div className='meal-taste'>
                    <div className='meal-tastetitle'>
                      <span>Phong vị</span>
                      <i onClick={() => setTasteMeal(false)} className='fas fa-times'></i>
                    </div>
                    <div className='meal-tastelist'>
                      <div className='meal-tasteitem'>
                        <input type='radio' name='taste' id='north' value='Vị Bắc' onChange={changeTasteValue} />
                        <label htmlFor='north'>Vị Bắc</label>
                      </div>
                      <div className='meal-tasteitem'>
                        <input type='radio' name='taste' id='central' value='Vị Trung' onChange={changeTasteValue} />
                        <label htmlFor='central'>Vị Trung</label>
                      </div>
                      <div className='meal-tasteitem'>
                        <input type='radio' name='taste' id='south' value='Vị Nam' onChange={changeTasteValue} />
                        <label htmlFor='south'>Vị Nam</label>
                      </div>
                      <div className='meal-tasteitem'>
                        <input type='radio' name='taste' id='all' value='Collection' onChange={changeTasteValue} />
                        <label htmlFor='all'>Collection</label>
                      </div>
                    </div>
                  </div>
                )}

                <button onClick={showCookList} className='meal-select-cookbtn'>
                  {cookValue ? (
                    <>
                      <p>{cookValue}</p>
                      <i onClick={clearCookItem} className='fas fa-times'></i>
                    </>
                  ) : (
                    <>
                      <p>Cách nấu</p>
                      <i className='fas fa-sort-down'></i>
                    </>
                  )}
                </button>
                {cookMeal && (
                  <div className='meal-cook'>
                    <div className='meal-cooktitle'>
                      <span>Cách nấu</span>
                      <i onClick={() => setCookMeal(false)} className='fas fa-times'></i>
                    </div>
                    <div className='meal-cooklist'>
                      <div className='meal-cookitem'>
                        <input type='radio' name='cook' id='frugal' value='Thanh đạm' onChange={changeCookValue} />
                        <label htmlFor='frugal'>Thanh đạm</label>
                      </div>
                      <div className='meal-cookitem'>
                        <input type='radio' name='cook' id='warm' value='Đậm đà' onChange={changeCookValue} />
                        <label htmlFor='warm'>Đậm đà</label>
                      </div>
                    </div>
                  </div>
                )}
                <button onClick={showPriceList} className='meal-select-pricebtn'>
                  {priceValue ? (
                    <>
                      <p>{priceValue}</p>
                      <i onClick={clearPriceItem} className='fas fa-times'></i>
                    </>
                  ) : (
                    <>
                      <p>Giá tiền</p>
                      <i className='fas fa-sort-down'></i>
                    </>
                  )}
                </button>
                {priceMeal && (
                  <div className='meal-priceselect'>
                    <div className='meal-pricetitle'>
                      <span>Giá tiền</span>
                      <i onClick={() => setPriceMeal(false)} className='fas fa-times'></i>
                    </div>
                    <div className='meal-pricelist'>
                      <div className='meal-priceitem'>
                        <input type='radio' name='price' id='199' value='199.000đ/tuần' onChange={changePriceValue} />
                        <label htmlFor='199'>199.000đ/tuần</label>
                      </div>
                      <div className='meal-priceitem'>
                        <input type='radio' name='price' id='299' value='299.000đ/tuần' onChange={changePriceValue} />
                        <label htmlFor='299'>299.000đ/tuần</label>
                      </div>
                      <div className='meal-priceitem'>
                        <input type='radio' name='price' id='399' value='399.000đ/tuần' onChange={changePriceValue} />
                        <label htmlFor='399'>399.000đ/tuần</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='col l-4'>hello</div>
          </div>
        </div>
      </div>

      {/* Lunch List */}
      <div className='grid wide'>
        <div className='row'>
          {lunchList.map((meal) => {
            return (
              <div key={meal.id} className='col l-4 m-6 c-12'>
                <div className='meal-content'>
                  <Link to={`/${meal.to}`}>
                    <div className='meal-imgdescription'>
                      {meal.description && <span className='meal-description'>{meal.description}</span>}
                      <img src={meal.mealImg} alt={meal.mealName} className='meal-img' />
                    </div>

                    <div className='meal-info'>
                      <h3 className='meal-name'>{meal.mealName}</h3>
                      <div className='meal-rating'>
                        {meal.rating.map((item, index) => {
                          return <span key={index}>{item}</span>;
                        })}
                      </div>

                      <div className='meal-chefinfo'>
                        <img src={meal.chefImg} alt={meal.chefName} className='meal-chefimg' />
                        {meal.nominated && <span className='meal-nominated'>{meal.nominated}</span>}
                        <div className='meal-namerestaurant'>
                          <p>{meal.chefName}</p>
                          <p>{meal.restaurantName}</p>
                        </div>
                      </div>

                      <div className='meal-price'>
                        <p>1 tuần chỉ</p>
                        <p className='meal-money'>
                          {meal.price.toLocaleString()}
                          <span> đ</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LunchList;
