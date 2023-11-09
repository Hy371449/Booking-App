import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data, reFecth} = useFetch(
    "https://booking-backend-yoca.onrender.com/api/hotels/find?featured=true&limit=4"
  );

  return (
    <div className="fp">
      <>
        {data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.photos[0]}
              alt="feature property photo"
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>{item.rating >= 4 ? "Excellent" : "Mediocre"}</span>
            </div>}
          </div>
        ))}
      </>
    </div>
  );
};

export default FeaturedProperties;
