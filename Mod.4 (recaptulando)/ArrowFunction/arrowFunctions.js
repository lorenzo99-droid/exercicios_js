(name) => {
    return name.toUpperCase();
  };
  
      /* _______________________________________________________*/

  (p1, p2) =>{
    return p1 * p2;
  }

      /* _______________________________________________________*/

  (fahrenheit) =>{
    return (5 / 9) * (fahrenheit - 32);
  }
      /* _______________________________________________________*/

var getShirtsColorsAmount = company => {
    colors = company.products.shirts.colors;
    return colors.length;
  };