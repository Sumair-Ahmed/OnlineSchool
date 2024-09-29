import "./Companies.css";

const Companies = () => {
  return (
    <>
      <div className="companies">
        <div className="images">
          <img src="/images/CCard7.png" alt="card-1" />
          <img src="/images/CCard1.png" alt="card-2" />
          <img src="/images/CCard2.png" alt="card-3" />
          <img src="/images/CCard3.png" alt="card-4" />
          <img src="/images/CCard4.png" alt="card-5" />
          <img src="/images/CCard5.png" alt="card-6" />
          <img src="/images/CCard6.png" alt="card-7" />
        </div>
      </div>

      <div className="container">
        <img
          className="container-img"
          src="/images/Container.png"
          alt="container"
        />
      </div>
    </>
  );
};

export default Companies;
