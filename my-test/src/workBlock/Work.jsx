import React from "react";
import "./Work.css";
import photo1 from "../img/3.png";
import photo2 from "../img/4.png";
import photo3 from "../img/5.png";
import photo4 from "../img/6.png";
import photo5 from "../img/7.png";
import photo6 from "../img/8.png";
export default function workBlock() {
  return (
    <div id="workBlock">
      <h2>РОБОТИ</h2>
      <p class="titleService">Дагестан</p>
      <p class="descriptionService">
        Буріння cвердловин на нафту, ця робота була виконана професіоналами за
        допомогою спеціальної техніки
      </p>
      <div class="photoBlock">
        <img src={photo1} class="photo" alt="workphoto" />
        <img src={photo2} class="photo" alt="workphoto" />
        <img src={photo3} class="photo" alt="workphoto" />
      </div>
      <p class="titleService">Крим</p>
      <p class="descriptionService">
        Буріння cвердловин на нафту та газ буровим комплексом УБВ-600 з
        використанням самохідного агрегату УПА50
      </p>
      <div class="photoBlock">
        <img src={photo4} class="photo" alt="workphoto" />
        <img src={photo5} class="photo" alt="workphoto" />
        <img src={photo6} class="photo" alt="workphoto" />
      </div>
    </div>
  );
}
