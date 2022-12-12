
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Категории:</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Сортировать по цене:</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Сортировать по:</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Цене (сначала самая низкая)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Цене (сначала самая высокая)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          // src="https://i.pinimg.com/originals/28/d8/34/28d834dcd83ffb2d892db99cc2c00d79.jpg"
          src="https://wallpaperdump.cf/wp-content/uploads/2021/10/n3bvhx7jyks71.png"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;




// import React from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
// import "./Products.scss";

// const Products = () => {
//   const catId = parseInt(useParams().id);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sort, setSort] = useState(null);
//   const [selectedSubCats, setSelectedSubCats] = useState([]);

//   const { data, loading, error } = useFetch(
//     `/sub-categories?[filters][categories][id][$eq]=${catId}`
//     );

// const handleChange = (e) =>{
//   const value = e.target.value;
//   const isChecked = e.target.checked;

//   setSelectedSubCats(isChecked ? [...selectedSubCats, value]
//     : selectedSubCats.filter((item) => item !== value)
//   );
// }


//   return (
//     <div className="products">
//      <div className="left">
//      <div className="filterItem">
//       <h2>Категории товаров:</h2>
//       {data?.map(item => (
//       <div className="inputItem" key={item.id} >
//         <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
//         <label htmlFor={item.id}>{item.attributes.title}</label>
//         </div>  
//         ))}
//       </div>
//       <div className="filterItem">
//       <h2>Фильтровать по цене:</h2>
//       <div className="inputItem">
//         <span>0</span>
//         <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
//         <span>{maxPrice}</span>
//       </div> 
//       </div>
//       <div className="filterItem">
//       <h2>Сортировать по:</h2>
//       <div className="inputItem">
//       <input
//       type="radio"
//       id="asc"
//       value="asc"
//       name="price"
//       OnChange={(e) => setSort("asc")}/>
//       <label htmlFor="asc">По цене (сначала самая низкая)</label>
//       </div>
//       <div className="inputItem">
//       <input
//       type="radio"
//       id="desc"
//       value="desc"
//       name="price"
//       OnChange={(e) => setSort("desc")}/>
//       <label htmlFor="desc">По цене (сначала самая высокая)</label>
//       </div>
//       </div>
//       </div>
//       <div className="right"></div>
//       <img className="catImg"
//       src="https://images.hdqwalls.com/download/anime-boy-sitting-watching-sunset-ew-2880x1800.jpg"
//       alt=""
//       />
//       <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
//      </div>
//   )
// }

// export default Products;
