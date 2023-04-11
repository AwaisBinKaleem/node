const mockData = [
  {
    id: 1,
    name: "Sam Green",
    email: "umuve@sema.bf",
    address: {
      city: "Herujet",
      country: "BG",
    },
    contact: {
      phone: "(659) 248-7976",
    },
  },
  {
    id: 2,
    name: "Glenn Guzman",
    email: "holovogu@tepuhoede.cm",
    address: {
      city: "Diuwovos",
      country: "TF",
    },
    contact: {
      phone: "(740) 416-3867",
    },
  },
  {
    id: 3,
    name: "Cole Nunez",
    email: "hevu@faag.tr",
    address: {
      city: "Cufaoh",
      country: "TZ",
    },
    contact: {
      phone: "(749) 821-4458",
    },
  },
  {
    id: 4,
    name: "Delia Bowman",
    email: "gurajac@cumunta.jp",
    address: {
      city: "Mueddo",
      country: "AR",
    },
    contact: {
      phone: "(873) 728-8988",
    },
  },
  {
    id: 5,
    name: "Allen Silva",
    email: "ilpumev@leti.sc",
    address: {
      city: "Ekacajo",
      country: "DG",
    },
    contact: {
      phone: "(577) 636-5139",
    },
  },
  {
    id: 6,
    name: "Glen Vega",
    email: "dek@hu.fk",
    address: {
      city: "Sehfusa",
      country: "GG",
    },
    contact: {
      phone: "(274) 555-3011",
    },
  },
  {
    id: 7,
    name: "Cornelia Riley",
    email: "hud@baehbe.gt",
    address: {
      city: "Vesmipkof",
      country: "SY",
    },
    contact: {
      phone: "(225) 911-8955",
    },
  },
  {
    id: 8,
    name: "Ray Morrison",
    email: "uzibojpog@moku.dk",
    address: {
      city: "Ratlodiw",
      country: "AX",
    },
    contact: {
      phone: "(473) 488-5218",
    },
  },
  {
    id: 9,
    name: "Justin Figueroa",
    email: "ma@debowiit.bg",
    address: {
      city: "Jevlijcab",
      country: "MT",
    },
    contact: {
      phone: "(358) 739-6912",
    },
  },
  {
    id: 10,
    name: "Susie Nelson",
    email: "mocma@soj.nu",
    address: {
      city: "Acpuino",
      country: "EC",
    },
    contact: {
      phone: "(977) 202-3645",
    },
  },
  {
    id: 11,
    name: "Delia Parsons",
    email: "av@gacan.nr",
    address: {
      city: "Cazagu",
      country: "IR",
    },
    contact: {
      phone: "(246) 993-4296",
    },
  },
  {
    id: 12,
    name: "Derrick Singleton",
    email: "cutkor@cawu.ee",
    address: {
      city: "Kegazacag",
      country: "SH",
    },
    contact: {
      phone: "(775) 627-5081",
    },
  },
  {
    id: 13,
    name: "Paul Marshall",
    email: "mekunugug@roker.pa",
    address: {
      city: "Elervi",
      country: "TW",
    },
    contact: {
      phone: "(736) 406-3678",
    },
  },
  {
    id: 14,
    name: "Austin Flores",
    email: "jiscik@nurit.ru",
    address: {
      city: "Enrohe",
      country: "GN",
    },
    contact: {
      phone: "(789) 686-9185",
    },
  },
  {
    id: 15,
    name: "Jim Gordon",
    email: "ku@wab.im",
    address: {
      city: "Serejer",
      country: "IR",
    },
    contact: {
      phone: "(542) 510-2673",
    },
  },
  {
    id: 16,
    name: "Katharine Price",
    email: "nu@cut.rs",
    address: {
      city: "Magkepe",
      country: "AT",
    },
    contact: {
      phone: "(306) 250-7109",
    },
  },
  {
    id: 17,
    name: "Travis Moody",
    email: "lathigde@denad.uy",
    address: {
      city: "Nolowi",
      country: "ML",
    },
    contact: {
      phone: "(614) 978-2214",
    },
  },
  {
    id: 18,
    name: "Hannah Rhodes",
    email: "hih@am.com",
    address: {
      city: "Dosotra",
      country: "SB",
    },
    contact: {
      phone: "(281) 693-4733",
    },
  },
  {
    id: 19,
    name: "Max Love",
    email: "vuwuam@uv.mp",
    address: {
      city: "Tawzotan",
      country: "IN",
    },
    contact: {
      phone: "(725) 632-1037",
    },
  },
  {
    id: 20,
    name: "Charlie Leonard",
    email: "tael@boisougi.ir",
    address: {
      city: "Mebivra",
      country: "KH",
    },
    contact: {
      phone: "(561) 945-6455",
    },
  },
  {
    id: 21,
    name: "John Palmer",
    email: "so@sojpi.gs",
    address: {
      city: "Kokwacboh",
      country: "BY",
    },
    contact: {
      phone: "(566) 396-7973",
    },
  },
  {
    id: 22,
    name: "Kyle Love",
    email: "jeupa@balahaite.gs",
    address: {
      city: "Ewmedi",
      country: "VC",
    },
    contact: {
      phone: "(643) 482-3417",
    },
  },
  {
    id: 23,
    name: "Inez Chapman",
    email: "sojlo@pa.uz",
    address: {
      city: "Tikunwiv",
      country: "EE",
    },
    contact: {
      phone: "(237) 488-4869",
    },
  },
  {
    id: 24,
    name: "Dean Rios",
    email: "sojon@izu.nr",
    address: {
      city: "Bowgobhi",
      country: "GH",
    },
    contact: {
      phone: "(927) 816-3292",
    },
  },
  {
    id: 25,
    name: "Pauline Atkins",
    email: "ki@wudi.qa",
    address: {
      city: "Woamiha",
      country: "TO",
    },
    contact: {
      phone: "(603) 587-8397",
    },
  },
  {
    id: 26,
    name: "Floyd Potter",
    email: "illo@nakuled.va",
    address: {
      city: "Heneri",
      country: "AM",
    },
    contact: {
      phone: "(366) 868-6777",
    },
  },
  {
    id: 27,
    name: "Victor Little",
    email: "puunocu@hudag.my",
    address: {
      city: "Tahcoepa",
      country: "EH",
    },
    contact: {
      phone: "(682) 516-7749",
    },
  },
  {
    id: 28,
    name: "Nettie Vega",
    email: "os@ogjueji.cm",
    address: {
      city: "Mewtolod",
      country: "GU",
    },
    contact: {
      phone: "(784) 686-3473",
    },
  },
  {
    id: 29,
    name: "Victoria Francis",
    email: "ilvi@guzgac.io",
    address: {
      city: "Wuojuev",
      country: "BH",
    },
    contact: {
      phone: "(205) 381-2826",
    },
  },
  {
    id: 30,
    name: "Milton Stokes",
    email: "cura@dec.sy",
    address: {
      city: "Neisjog",
      country: "AU",
    },
    contact: {
      phone: "(754) 296-2286",
    },
  },
  {
    id: 31,
    name: "Viola Fields",
    email: "cohafoj@fijul.wf",
    address: {
      city: "Caciaj",
      country: "XK",
    },
    contact: {
      phone: "(753) 446-2626",
    },
  },
  {
    id: 32,
    name: "Landon Carroll",
    email: "amcapab@fig.gy",
    address: {
      city: "Kurancah",
      country: "LU",
    },
    contact: {
      phone: "(303) 612-8663",
    },
  },
  {
    id: 33,
    name: "Harry Weber",
    email: "rocveg@lil.mm",
    address: {
      city: "Lifnowum",
      country: "GR",
    },
    contact: {
      phone: "(523) 681-1190",
    },
  },
  {
    id: 34,
    name: "Antonio Malone",
    email: "eguatri@waklu.gr",
    address: {
      city: "Sualapis",
      country: "AR",
    },
    contact: {
      phone: "(311) 697-8680",
    },
  },
  {
    id: 35,
    name: "Sean Hale",
    email: "tap@devum.mx",
    address: {
      city: "Afoablu",
      country: "TF",
    },
    contact: {
      phone: "(882) 941-7014",
    },
  },
  {
    id: 36,
    name: "Alexander Bowman",
    email: "pizaiwo@sunfal.hk",
    address: {
      city: "Vabgedbi",
      country: "DK",
    },
    contact: {
      phone: "(311) 769-3926",
    },
  },
  {
    id: 37,
    name: "Bernard Garcia",
    email: "ul@deegepar.mx",
    address: {
      city: "Jekewe",
      country: "NI",
    },
    contact: {
      phone: "(372) 311-4054",
    },
  },
  {
    id: 38,
    name: "Georgie Mills",
    email: "sazepeto@gowsane.lu",
    address: {
      city: "Kalusni",
      country: "CI",
    },
    contact: {
      phone: "(388) 667-8538",
    },
  },
  {
    id: 39,
    name: "Inez Olson",
    email: "zinse@fegfira.cm",
    address: {
      city: "Ligzurwef",
      country: "TZ",
    },
    contact: {
      phone: "(234) 276-2708",
    },
  },
  {
    id: 40,
    name: "Francis Cox",
    email: "wugcardo@jonref.eu",
    address: {
      city: "Olupeja",
      country: "NU",
    },
    contact: {
      phone: "(784) 494-6900",
    },
  },
];

const sortMyData = (a, b) => a.id - b.id;

let list = ["ali", "qamar", "faizan"];
let nums = [1, 2, 3];
// let list2 = list.sort(sortMyData);
// console.log(list);

// list.push({ name: "newName" });

// list = [...nums, ...list];

const [one, two, three] = nums;

// const { name } = mockData[0];
// console.log(mockData[1]);
// console.log(name);

// list.forEach((item) => {
//   console.log(item);
// });

// const newList = list.map((item) => {
//   //   console.log(item);
//   return item + " *";
// });

// console.log(list);
// console.log(newList);

const search = (q) => {
  const found = mockData.find((item) => {
    return item.id === q;
  });
  return found;
};
console.log(search(10));
