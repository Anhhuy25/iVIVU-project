import React, { useEffect, useRef, useState } from 'react';
import './maincontent.css';

const Countdown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('January 04, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = `0${Math.floor(distance / (1000 * 60 * 60 * 24))}`.slice(-2);
      const hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))}`.slice(-2);
      const minutes = `0${Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))}`.slice(-2);
      const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer()

    return () => { clearInterval(interval.current) };
  })

  return (
    <div className="countdown-content">
      {/* left */}
      <div className="countdown-left">
        <a href="#/">
          <img className="countdown-img" src="https://nxbkimdong.com.vn/sites/default/files/13_62.jpg" alt="" />
        </a>
      </div>

      {/* right */}
      <div className="countdown-right">
        <div className="countdown-book">
          <h2>Hoàng tử vệ thần nhà Momochi - Tập 13</h2>
        </div>
        <div className="countdown-time">
          <div className="countdown-days">
            <h1>{timerDays}</h1>
            <h5>NGAY</h5>
          </div>
          <div className="countdown-hours">
            <h1>{timerHours}</h1>
            <h5>GIO</h5>
          </div>
          <div className="countdown-minutes">
            <h1>{timerMinutes}</h1>
            <h5>PHUT</h5>
          </div>
          <div className="countdown-seconds">
            <h1>{timerSeconds}</h1>
            <h5>GIAY</h5>
          </div>
        </div>
        <div className="countdown-remain">
          <h3> PHÁT HÀNH</h3>
          <h4 className="countdown-remain-h3">TRÊN TOÀN QUỐC</h4>
        </div>
      </div>
    </div>
  );
};

export default Countdown;