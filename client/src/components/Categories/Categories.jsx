import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.culture.ru/images/bb3bb3c1-eaa0-58ae-82da-0e3c704e10ff"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Научная литература
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.fishki.net/upload/post/201507/08/1590844/4_pooh1.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Детские книги
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://expose-server.gpntbsib.ru/api/images/expose/full_novinki-biznes-literatury-7-13-dekabrya-2020-g-0-6c0d93b7_.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Бизнес-литература
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://connec-tive.com/uploads/products/8b1f178d534d8f96dc42e65d06da8b6a5eb964da.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Зарубежная литература
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://phonoteka.org/uploads/posts/2021-05/1621694811_5-phonoteka_org-p-knigi-estetika-fon-6.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Классическая литература
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="../assets/commang.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Комиксы. Манга. Артбуки
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
