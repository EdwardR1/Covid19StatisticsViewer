const renderName = name => {
  switch (name) {
    case "USA":
      return "United States";
    case "UK":
      return "United Kingdom";
    case "S. Korea":
      return "South Korea";
    case "Iran, Islamic Republic of":
      return "Iran";
    case "Czechia":
      return "Czech Republic";
    case "Macedonia, the former Yugoslav Republic of":
      return "North Macedonia";
    case "Viet Nam":
      return "Vietnam";
    case "Venezuela, Bolivarian Republic of":
      return "Venezuela";
    case "Congo, the Democratic Republic of the":
      return "The Democratic Republic of the Congo";
    case "Moldova, Republic of":
      return "Moldova";
    case "UAE":
      return "United Arab Emirates";
    case "Coast D'Ivoire":
      return "Ivory Coast";
    case "Palestinian Territory, Occupied":
      return "Palestine";
    case "Holy See (Vatican City State)":
      return "Vatican City";
    case "Lao People's Democratic Republic":
      return "Laos";
    case "Libyan Arab Jamahiriya":
      return "Libya";
    default:
      return name;
  }
};

const changeContinentName = continent => {
  switch (continent) {
    case "North America":
      return "North and Central America";
    case "Antarctica":
      return "Antarctica and Nearby Areas";
    default:
      return continent;
  }
};

module.exports = {
  renderName,
  changeContinentName
};
