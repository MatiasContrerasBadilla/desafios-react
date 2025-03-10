const Header = () => {
  return (
    <header className="header-container">
      <div className="header-img-wrapper">                 
        <img 
          src="/assets/img/Header.jpg"
          alt="Pizza"
          className="headerImg" 
        />
        <div className="header-text">
          <h1>Pizzeria Mamma Mia</h1>
          <p>¡Tenemos las mejores pizzerias que podrás encontrar!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;