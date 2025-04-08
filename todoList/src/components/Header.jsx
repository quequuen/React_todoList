import "../css/Header.css";

const Header = () => {
  // const today = new Date();
  // let day = today.getDay();
  // let mon = today.getMonth();
  // let year = today.getFullYear();
  // ↑ 이것도 많이 사용하지만 오늘은 간단하게 {new Date().toDateString()}
  //으로 사용! toDateString은 ()없이 쓰면 에러남

  return (
    <div className="header_container">
      <div>
        <p>오늘은 📆</p>
      </div>
      <div>
        <p>{new Date().toDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
