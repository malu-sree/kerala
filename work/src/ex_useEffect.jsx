import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ExuseEffect() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setRecord(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {record.length > 0 &&
          record.map((item) => {
            return (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description.substring(0, 100)}...
                    </p>
                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                    <br/>
                    <br/>
                    <button className="btn btn-primary">BUY NOW</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ExuseEffect;
