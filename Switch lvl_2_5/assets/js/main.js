function searchLand() {
  const input = document.querySelector(".search-input").value;
  const result = document.querySelector(".result");
  let info;

  switch (input) {
    case "Berlin":
      info = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;

    case "Baden-Württemberg":
      info =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;

    case "Bayern":
      info = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;

    case "Brandenburg":
      info =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;

    case "Bremen":
      info = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;

    case "Hamburg":
      info = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;

    case "Hessen":
      info = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;

    case "Mecklenburg-Vorpommern":
      info =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;

    case "Niedersachsen":
      info =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;

    case "Nordrhein-Westfalen":
      info =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;

    case "Rheinland-Pfalz":
      info =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;

    case "Saarland":
      info =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;

    case "Sachsen":
      info = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;

    case "Sachsen-Anhalt":
      info =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;

    case "Schleswig-Holstein ":
      info =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;

    case "Thüringen":
      info = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;

    default:
      break;
  }

  result.innerHTML = "<span>" + info + "</span>";
}
