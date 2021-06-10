const cities = [
  {
    id: "5078",
    zip: "01067",
    city: "Dresden",
  },
  {
    id: "5079",
    zip: "01069",
    city: "Dresden",
  },
  {
    id: "5080",
    zip: "01097",
    city: "Dresden",
  },
  {
    id: "5081",
    zip: "01099",
    city: "Dresden",
  },
  {
    id: "153646",
    zip: "01108",
    city: "Dresden",
  },
  {
    id: "5082",
    zip: "01109",
    city: "Dresden",
  },
  {
    id: "5083",
    zip: "01127",
    city: "Dresden",
  },
  {
    id: "5084",
    zip: "01129",
    city: "Dresden",
  },
  {
    id: "5085",
    zip: "01139",
    city: "Dresden",
  },
  {
    id: "5106",
    zip: "01156",
    city: "Cossebaude",
  },
  {
    id: "5086",
    zip: "01157",
    city: "Dresden",
  },
  {
    id: "5087",
    zip: "01159",
    city: "Dresden",
  },
  {
    id: "5088",
    zip: "01169",
    city: "Dresden",
  },
  {
    id: "5089",
    zip: "01187",
    city: "Dresden",
  },
  {
    id: "5090",
    zip: "01189",
    city: "Dresden",
  },
  {
    id: "5091",
    zip: "01217",
    city: "Dresden",
  },
  {
    id: "5092",
    zip: "01219",
    city: "Dresden",
  },
  {
    id: "5093",
    zip: "01237",
    city: "Dresden",
  },
  {
    id: "5094",
    zip: "01239",
    city: "Dresden",
  },
  {
    id: "5095",
    zip: "01257",
    city: "Dresden",
  },
  {
    id: "5096",
    zip: "01259",
    city: "Dresden",
  },
  {
    id: "5097",
    zip: "01277",
    city: "Dresden",
  },
  {
    id: "5098",
    zip: "01279",
    city: "Dresden",
  },
  {
    id: "5099",
    zip: "01307",
    city: "Dresden",
  },
  {
    id: "5100",
    zip: "01309",
    city: "Dresden",
  },
  {
    id: "5101",
    zip: "01324",
    city: "Dresden",
  },
  {
    id: "5102",
    zip: "01326",
    city: "Dresden",
  },
  {
    id: "153648",
    zip: "01328",
    city: "Dresden",
  },
  {
    id: "5103",
    zip: "01445",
    city: "Radebeul",
  },
  {
    id: "5104",
    zip: "01454",
    city: "Radeberg",
  },
  {
    id: "5105",
    zip: "01458",
    city: "Ottendorf-Okrilla",
  },
  {
    id: "5107",
    zip: "01465",
    city: "Langebrück",
  },
  {
    id: "5108",
    zip: "01468",
    city: "Reichenberg",
  },
  {
    id: "5109",
    zip: "01471",
    city: "Radeburg",
  },
  {
    id: "5110",
    zip: "01474",
    city: "Schönfeld-Weißig",
  },
  {
    id: "13101",
    zip: "01477",
    city: "Arnsdorf bei Dresden",
  },
  {
    id: "5111",
    zip: "01478",
    city: "Weixdorf",
  },
  {
    id: "5112",
    zip: "01558",
    city: "Großenhain",
  },
  {
    id: "5113",
    zip: "01561",
    city: "Großenhain",
  },
  {
    id: "5114",
    zip: "01587",
    city: "Riesa",
  },
  {
    id: "5115",
    zip: "01589",
    city: "Riesa",
  },
  {
    id: "5116",
    zip: "01591",
    city: "Riesa",
  },
  {
    id: "5117",
    zip: "01594",
    city: "Riesa",
  },
  {
    id: "5118",
    zip: "01609",
    city: "Gröditz",
  },
  {
    id: "5119",
    zip: "01612",
    city: "Nünchritz",
  },
  {
    id: "5120",
    zip: "01616",
    city: "Strehla",
  },
  {
    id: "5121",
    zip: "01619",
    city: "Zeithain",
  },
  {
    id: "5122",
    zip: "01623",
    city: "Lommatzsch",
  },
  {
    id: "5123",
    zip: "01640",
    city: "Coswig",
  },
  {
    id: "5124",
    zip: "01662",
    city: "Meißen",
  },
  {
    id: "5125",
    zip: "01665",
    city: "Meißen",
  },
  {
    id: "5126",
    zip: "01683",
    city: "Nossen",
  },
  {
    id: "5127",
    zip: "01689",
    city: "Weinböhla",
  },
  {
    id: "5128",
    zip: "01705",
    city: "Freital",
  },
  {
    id: "5129",
    zip: "01723",
    city: "Wilsdruff",
  },
  {
    id: "5130",
    zip: "01728",
    city: "Bannewitz",
  },
  {
    id: "5131",
    zip: "01731",
    city: "Kreischa",
  },
  {
    id: "5132",
    zip: "01734",
    city: "Rabenau",
  },
  {
    id: "5133",
    zip: "01737",
    city: "Tharandt",
  },
  {
    id: "5134",
    zip: "01738",
    city: "Colmnitz",
  },
  {
    id: "5135",
    zip: "01744",
    city: "Dippoldiswalde",
  },
  {
    id: "5136",
    zip: "01762",
    city: "Schmiedeberg",
  },
  {
    id: "5137",
    zip: "01768",
    city: "Glashütte",
  },
  {
    id: "5138",
    zip: "01773",
    city: "Altenberg",
  },
  {
    id: "5139",
    zip: "01774",
    city: "Höckendorf",
  },
  {
    id: "13102",
    zip: "01776",
    city: "Hermsdorf / Erzgebirge",
  },
  {
    id: "5140",
    zip: "01778",
    city: "Geising",
  },
  {
    id: "5141",
    zip: "01796",
    city: "Pirna",
  },
  {
    id: "5142",
    zip: "01809",
    city: "Heidenau",
  },
  {
    id: "5143",
    zip: "01814",
    city: "Bad Schandau",
  },
  {
    id: "5144",
    zip: "01816",
    city: "Bad Gottleuba",
  },
  {
    id: "5145",
    zip: "01819",
    city: "Berggießhübel",
  },
  {
    id: "13103",
    zip: "01824",
    city: "Königstein / Sächsische Schweiz",
  },
  {
    id: "5146",
    zip: "01825",
    city: "Liebstadt",
  },
  {
    id: "5147",
    zip: "01827",
    city: "Graupa",
  },
  {
    id: "5148",
    zip: "01829",
    city: "Stadt Wehlen",
  },
  {
    id: "5149",
    zip: "01833",
    city: "Stolpen",
  },
  {
    id: "13104",
    zip: "01844",
    city: "Neustadt in Sachsen",
  },
  {
    id: "5150",
    zip: "01847",
    city: "Lohmen",
  },
  {
    id: "5151",
    zip: "01848",
    city: "Hohnstein",
  },
  {
    id: "5152",
    zip: "01855",
    city: "Sebnitz",
  },
  {
    id: "5153",
    zip: "01877",
    city: "Bischofswerda",
  },
  {
    id: "5154",
    zip: "01896",
    city: "Pulsnitz",
  },
  {
    id: "5155",
    zip: "01900",
    city: "Großröhrsdorf",
  },
  {
    id: "5156",
    zip: "01904",
    city: "Neukirch / Lausitz",
  },
  {
    id: "5157",
    zip: "01906",
    city: "Bischofswerda",
  },
  {
    id: "5158",
    zip: "01909",
    city: "Großharthau",
  },
  {
    id: "5159",
    zip: "01917",
    city: "Kamenz",
  },
  {
    id: "5160",
    zip: "01920",
    city: "Deutschbaselitz",
  },
  {
    id: "5161",
    zip: "01936",
    city: "Königsbrück",
  },
  {
    id: "5162",
    zip: "01945",
    city: "Ruhland",
  },
  {
    id: "5163",
    zip: "01968",
    city: "Senftenberg",
  },
  {
    id: "5164",
    zip: "01979",
    city: "Lauchhammer",
  },
  {
    id: "5165",
    zip: "01983",
    city: "Großräschen",
  },
  {
    id: "13105",
    zip: "01987",
    city: "Schwarzheide Niederlausitz",
  },
  {
    id: "5166",
    zip: "01990",
    city: "Ortrand",
  },
  {
    id: "5167",
    zip: "01993",
    city: "Schipkau",
  },
  {
    id: "5168",
    zip: "01994",
    city: "Annahütte",
  },
  {
    id: "5169",
    zip: "01996",
    city: "Hosena",
  },
  {
    id: "5170",
    zip: "01998",
    city: "Klettwitz",
  },
  {
    id: "5171",
    zip: "02625",
    city: "Bautzen",
  },
  {
    id: "5172",
    zip: "02627",
    city: "Weißenberg",
  },
  {
    id: "5173",
    zip: "02633",
    city: "Göda",
  },
  {
    id: "5174",
    zip: "02681",
    city: "Wilthen",
  },
  {
    id: "13106",
    zip: "02689",
    city: "Sohland an der Spree",
  },
  {
    id: "5175",
    zip: "02692",
    city: "Obergurig",
  },
  {
    id: "5176",
    zip: "02694",
    city: "Großdubrau",
  },
  {
    id: "5177",
    zip: "02699",
    city: "Königswartha",
  },
  {
    id: "5178",
    zip: "02708",
    city: "Löbau",
  },
  {
    id: "5179",
    zip: "02727",
    city: "Neugersdorf",
  },
  {
    id: "5180",
    zip: "02730",
    city: "Ebersbach",
  },
  {
    id: "5181",
    zip: "02733",
    city: "Cunewalde",
  },
  {
    id: "5182",
    zip: "02736",
    city: "Oppach",
  },
  {
    id: "5183",
    zip: "02739",
    city: "Eibau",
  },
  {
    id: "5184",
    zip: "02742",
    city: "Neusalza-Spremberg",
  },
  {
    id: "5185",
    zip: "02744",
    city: "Oberoderwitz",
  },
  {
    id: "5186",
    zip: "02747",
    city: "Herrnhut",
  },
  {
    id: "5187",
    zip: "02748",
    city: "Bernstadt",
  },
  {
    id: "5188",
    zip: "02763",
    city: "Zittau",
  },
  {
    id: "5189",
    zip: "02779",
    city: "Großschönau",
  },
  {
    id: "5190",
    zip: "02782",
    city: "Seifhennersdorf",
  },
  {
    id: "5191",
    zip: "02785",
    city: "Olbersdorf",
  },
  {
    id: "5192",
    zip: "02788",
    city: "Hirschfelde",
  },
  {
    id: "5193",
    zip: "02791",
    city: "Niederoderwitz",
  },
  {
    id: "5194",
    zip: "02794",
    city: "Leutersdorf",
  },
  {
    id: "5195",
    zip: "02796",
    city: "Jonsdorf",
  },
  {
    id: "5196",
    zip: "02797",
    city: "Oybin",
  },
  {
    id: "5197",
    zip: "02799",
    city: "Waltersdorf",
  },
  {
    id: "5198",
    zip: "02826",
    city: "Görlitz",
  },
  {
    id: "5199",
    zip: "02827",
    city: "Görlitz",
  },
  {
    id: "5200",
    zip: "02828",
    city: "Görlitz",
  },
  {
    id: "5201",
    zip: "02829",
    city: "Görlitz",
  },
  {
    id: "13107",
    zip: "02894",
    city: "Reichenbach / Oberlausitz",
  },
  {
    id: "5202",
    zip: "02899",
    city: "Görlitz",
  },
  {
    id: "5203",
    zip: "02906",
    city: "Niesky",
  },
  {
    id: "5204",
    zip: "02923",
    city: "Niesky",
  },
  {
    id: "13108",
    zip: "02929",
    city: "Rothenburg / Oberlausitz",
  },
  {
    id: "5205",
    zip: "02943",
    city: "Weißwasser",
  },
  {
    id: "5206",
    zip: "02953",
    city: "Bad Muskau",
  },
  {
    id: "5207",
    zip: "02956",
    city: "Rietschen",
  },
  {
    id: "5208",
    zip: "02957",
    city: "Krauschwitz",
  },
  {
    id: "5209",
    zip: "02959",
    city: "Schleife",
  },
  {
    id: "5210",
    zip: "02977",
    city: "Hoyerswerda",
  },
  {
    id: "5211",
    zip: "02979",
    city: "Hoyerswerda",
  },
  {
    id: "5212",
    zip: "02991",
    city: "Lauta",
  },
  {
    id: "5213",
    zip: "02994",
    city: "Bernsdorf",
  },
  {
    id: "5214",
    zip: "02997",
    city: "Wittichenau",
  },
  {
    id: "5215",
    zip: "02999",
    city: "Lohsa",
  },
  {
    id: "5216",
    zip: "03042",
    city: "Cottbus",
  },
  {
    id: "5217",
    zip: "03044",
    city: "Cottbus",
  },
  {
    id: "5218",
    zip: "03046",
    city: "Cottbus",
  },
  {
    id: "5219",
    zip: "03048",
    city: "Cottbus",
  },
  {
    id: "5220",
    zip: "03050",
    city: "Cottbus",
  },
  {
    id: "5221",
    zip: "03051",
    city: "Cottbus",
  },
  {
    id: "5222",
    zip: "03052",
    city: "Cottbus",
  },
  {
    id: "5223",
    zip: "03053",
    city: "Cottbus",
  },
  {
    id: "5224",
    zip: "03054",
    city: "Cottbus",
  },
  {
    id: "5225",
    zip: "03055",
    city: "Cottbus",
  },
  {
    id: "5226",
    zip: "03058",
    city: "Gallinchen",
  },
  {
    id: "12826",
    zip: "03096",
    city: "Burg / Spreewald",
  },
  {
    id: "5227",
    zip: "03099",
    city: "Kolkwitz",
  },
  {
    id: "5228",
    zip: "03103",
    city: "Neupetershain",
  },
  {
    id: "5229",
    zip: "03116",
    city: "Drebkau",
  },
  {
    id: "5230",
    zip: "03119",
    city: "Welzow",
  },
  {
    id: "5231",
    zip: "03130",
    city: "Spremberg",
  },
  {
    id: "5232",
    zip: "03139",
    city: "Schwarze Pumpe",
  },
  {
    id: "12837",
    zip: "03149",
    city: "Forst / Lausitz",
  },
  {
    id: "5233",
    zip: "03159",
    city: "Döbern",
  },
  {
    id: "5234",
    zip: "03172",
    city: "Guben",
  },
  {
    id: "5235",
    zip: "03185",
    city: "Peitz",
  },
  {
    id: "5236",
    zip: "03197",
    city: "Jänschwalde",
  },
  {
    id: "5237",
    zip: "03205",
    city: "Calau",
  },
  {
    id: "12838",
    zip: "03222",
    city: "Lübbenau / Spreewald",
  },
  {
    id: "5238",
    zip: "03226",
    city: "Vetschau",
  },
  {
    id: "5239",
    zip: "03229",
    city: "Altdöbern",
  },
  {
    id: "5240",
    zip: "03238",
    city: "Finsterwalde",
  },
  {
    id: "5241",
    zip: "03246",
    city: "Crinitz",
  },
  {
    id: "5242",
    zip: "03249",
    city: "Sonnewalde",
  },
  {
    id: "5243",
    zip: "03253",
    city: "Doberlug-Kirchhain",
  },
  {
    id: "5244",
    zip: "04103",
    city: "Leipzig",
  },
  {
    id: "5245",
    zip: "04105",
    city: "Leipzig",
  },
  {
    id: "5246",
    zip: "04107",
    city: "Leipzig",
  },
  {
    id: "5247",
    zip: "04109",
    city: "Leipzig",
  },
  {
    id: "5248",
    zip: "04129",
    city: "Leipzig",
  },
  {
    id: "5249",
    zip: "04155",
    city: "Leipzig",
  },
  {
    id: "5250",
    zip: "04157",
    city: "Leipzig",
  },
  {
    id: "153650",
    zip: "04158",
    city: "Leipzig",
  },
  {
    id: "5251",
    zip: "04159",
    city: "Leipzig",
  },
  {
    id: "5252",
    zip: "04177",
    city: "Leipzig",
  },
  {
    id: "153630",
    zip: "04178",
    city: "Leipzig",
  },
  {
    id: "5253",
    zip: "04179",
    city: "Leipzig",
  },
  {
    id: "5254",
    zip: "04205",
    city: "Leipzig",
  },
  {
    id: "5255",
    zip: "04207",
    city: "Leipzig",
  },
  {
    id: "5256",
    zip: "04209",
    city: "Leipzig",
  },
  {
    id: "5257",
    zip: "04229",
    city: "Leipzig",
  },
  {
    id: "5258",
    zip: "04249",
    city: "Leipzig",
  },
  {
    id: "5259",
    zip: "04275",
    city: "Leipzig",
  },
  {
    id: "5260",
    zip: "04277",
    city: "Leipzig",
  },
  {
    id: "5261",
    zip: "04279",
    city: "Leipzig",
  },
  {
    id: "153652",
    zip: "04288",
    city: "Leipzig",
  },
  {
    id: "5262",
    zip: "04289",
    city: "Leipzig",
  },
  {
    id: "5263",
    zip: "04299",
    city: "Leipzig",
  },
  {
    id: "5264",
    zip: "04315",
    city: "Leipzig",
  },
  {
    id: "153654",
    zip: "04316",
    city: "Leipzig",
  },
  {
    id: "5265",
    zip: "04317",
    city: "Leipzig",
  },
  {
    id: "5266",
    zip: "04318",
    city: "Leipzig",
  },
  {
    id: "153656",
    zip: "04319",
    city: "Leipzig",
  },
  {
    id: "5267",
    zip: "04328",
    city: "Leipzig",
  },
  {
    id: "5268",
    zip: "04329",
    city: "Leipzig",
  },
  {
    id: "5269",
    zip: "04347",
    city: "Leipzig",
  },
  {
    id: "5270",
    zip: "04349",
    city: "Leipzig",
  },
  {
    id: "5271",
    zip: "04356",
    city: "Leipzig",
  },
  {
    id: "5272",
    zip: "04357",
    city: "Leipzig",
  },
  {
    id: "5273",
    zip: "04416",
    city: "Markkleeberg",
  },
  {
    id: "5274",
    zip: "04420",
    city: "Markranstädt",
  },
  {
    id: "5275",
    zip: "04425",
    city: "Taucha",
  },
  {
    id: "5276",
    zip: "04430",
    city: "Böhlitz-Ehrenberg",
  },
  {
    id: "5277",
    zip: "04435",
    city: "Schkeuditz",
  },
  {
    id: "5278",
    zip: "04439",
    city: "Engelsdorf",
  },
  {
    id: "5279",
    zip: "04442",
    city: "Zwenkau",
  },
  {
    id: "5280",
    zip: "04445",
    city: "Markkleeberg",
  },
  {
    id: "5281",
    zip: "04448",
    city: "Wiederitzsch",
  },
  {
    id: "5282",
    zip: "04451",
    city: "Borsdorf",
  },
  {
    id: "5283",
    zip: "04454",
    city: "Holzhausen",
  },
  {
    id: "5284",
    zip: "04457",
    city: "Mölkau",
  },
  {
    id: "5285",
    zip: "04460",
    city: "Zwenkau",
  },
  {
    id: "5286",
    zip: "04463",
    city: "Großpösna",
  },
  {
    id: "5287",
    zip: "04466",
    city: "Lindenthal",
  },
  {
    id: "5288",
    zip: "04469",
    city: "Lützschema-Stahmeln",
  },
  {
    id: "5289",
    zip: "04509",
    city: "Delitzsch",
  },
  {
    id: "5290",
    zip: "04519",
    city: "Rackwitz",
  },
  {
    id: "5291",
    zip: "04523",
    city: "Pegau",
  },
  {
    id: "5292",
    zip: "04539",
    city: "Groitzsch",
  },
  {
    id: "5293",
    zip: "04552",
    city: "Borna",
  },
  {
    id: "5294",
    zip: "04564",
    city: "Böhlen",
  },
  {
    id: "5295",
    zip: "04565",
    city: "Regis-Breitingen",
  },
  {
    id: "5296",
    zip: "04567",
    city: "Kitzscher",
  },
  {
    id: "5297",
    zip: "04571",
    city: "Rötha",
  },
  {
    id: "5298",
    zip: "04574",
    city: "Neukieritzsch",
  },
  {
    id: "5299",
    zip: "04575",
    city: "Neukieritzsch",
  },
  {
    id: "5300",
    zip: "04579",
    city: "Espenhain",
  },
  {
    id: "5301",
    zip: "04600",
    city: "Altenburg",
  },
  {
    id: "5302",
    zip: "04603",
    city: "Altenburg",
  },
  {
    id: "5303",
    zip: "04610",
    city: "Meuselwitz",
  },
  {
    id: "5304",
    zip: "04613",
    city: "Lucka",
  },
  {
    id: "5305",
    zip: "04617",
    city: "Altenburg",
  },
  {
    id: "5306",
    zip: "04618",
    city: "Langenleuba-Niederhain",
  },
  {
    id: "5307",
    zip: "04626",
    city: "Schmölln",
  },
  {
    id: "5308",
    zip: "04639",
    city: "Gößnitz",
  },
  {
    id: "5309",
    zip: "04643",
    city: "Geithain",
  },
  {
    id: "5310",
    zip: "04651",
    city: "Bad Lausick",
  },
  {
    id: "5311",
    zip: "04654",
    city: "Frohburg",
  },
  {
    id: "5312",
    zip: "04655",
    city: "Kohren-Sahlis",
  },
  {
    id: "5313",
    zip: "04657",
    city: "Langensteinbach",
  },
  {
    id: "5314",
    zip: "04668",
    city: "Grimma",
  },
  {
    id: "5315",
    zip: "04680",
    city: "Colditz",
  },
  {
    id: "5316",
    zip: "04683",
    city: "Naunhof",
  },
  {
    id: "5317",
    zip: "04685",
    city: "Nerchau",
  },
  {
    id: "5318",
    zip: "04687",
    city: "Trebsen / Mulde",
  },
  {
    id: "5319",
    zip: "04688",
    city: "Mutschen",
  },
  {
    id: "5320",
    zip: "04703",
    city: "Leisnig",
  },
  {
    id: "5321",
    zip: "04720",
    city: "Döbeln",
  },
  {
    id: "5322",
    zip: "04736",
    city: "Waldheim",
  },
  {
    id: "5323",
    zip: "04741",
    city: "Roßwein",
  },
  {
    id: "5324",
    zip: "04746",
    city: "Hartha",
  },
  {
    id: "5325",
    zip: "04749",
    city: "Ostrau",
  },
  {
    id: "5326",
    zip: "04758",
    city: "Oschatz",
  },
  {
    id: "5327",
    zip: "04769",
    city: "Mügeln",
  },
  {
    id: "5328",
    zip: "04774",
    city: "Dahlen",
  },
  {
    id: "5329",
    zip: "04779",
    city: "Wermsdorf",
  },
  {
    id: "5330",
    zip: "04808",
    city: "Wurzen",
  },
  {
    id: "5331",
    zip: "04821",
    city: "Brandis",
  },
  {
    id: "5332",
    zip: "04824",
    city: "Beucha",
  },
  {
    id: "5333",
    zip: "04827",
    city: "Machern",
  },
  {
    id: "5334",
    zip: "04828",
    city: "Bennewitz",
  },
  {
    id: "5335",
    zip: "04838",
    city: "Eilenburg",
  },
  {
    id: "5336",
    zip: "04849",
    city: "Bad Düben",
  },
  {
    id: "5337",
    zip: "04860",
    city: "Torgau",
  },
  {
    id: "153658",
    zip: "04861",
    city: "Torgau",
  },
  {
    id: "5338",
    zip: "04874",
    city: "Belgern",
  },
  {
    id: "5339",
    zip: "04880",
    city: "Dommitzsch",
  },
  {
    id: "5340",
    zip: "04886",
    city: "Torgau",
  },
  {
    id: "5341",
    zip: "04889",
    city: "Schildau",
  },
  {
    id: "12839",
    zip: "04895",
    city: "Falkenberg / Elster",
  },
  {
    id: "5342",
    zip: "04910",
    city: "Elsterwerda",
  },
  {
    id: "12840",
    zip: "04916",
    city: "Herzberg / Elster",
  },
  {
    id: "5343",
    zip: "04924",
    city: "Bad Liebenwerda",
  },
  {
    id: "5344",
    zip: "04928",
    city: "Plessa",
  },
  {
    id: "5345",
    zip: "04931",
    city: "Bad Liebenwerda",
  },
  {
    id: "5346",
    zip: "04932",
    city: "Prösen",
  },
  {
    id: "5347",
    zip: "04934",
    city: "Hohenleipisch",
  },
  {
    id: "5348",
    zip: "04936",
    city: "Schlieben",
  },
  {
    id: "5349",
    zip: "04938",
    city: "Uebigau",
  },
  {
    id: "12813",
    zip: "06108",
    city: "Halle / Saale",
  },
  {
    id: "12814",
    zip: "06110",
    city: "Halle / Saale",
  },
  {
    id: "12815",
    zip: "06112",
    city: "Halle / Saale",
  },
  {
    id: "12816",
    zip: "06114",
    city: "Halle / Saale",
  },
  {
    id: "12817",
    zip: "06116",
    city: "Halle / Saale",
  },
  {
    id: "12818",
    zip: "06118",
    city: "Halle / Saale",
  },
  {
    id: "12819",
    zip: "06120",
    city: "Halle / Saale",
  },
  {
    id: "12820",
    zip: "06122",
    city: "Halle / Saale",
  },
  {
    id: "12821",
    zip: "06124",
    city: "Halle / Saale",
  },
  {
    id: "12822",
    zip: "06126",
    city: "Halle / Saale",
  },
  {
    id: "12823",
    zip: "06128",
    city: "Halle / Saale",
  },
  {
    id: "12824",
    zip: "06130",
    city: "Halle / Saale",
  },
  {
    id: "12825",
    zip: "06132",
    city: "Halle / Saale",
  },
  {
    id: "5350",
    zip: "06179",
    city: "Teutschenthal",
  },
  {
    id: "5351",
    zip: "06184",
    city: "Dieskau",
  },
  {
    id: "5352",
    zip: "06188",
    city: "Landsberg",
  },
  {
    id: "5353",
    zip: "06193",
    city: "Löbejün",
  },
  {
    id: "5354",
    zip: "06198",
    city: "Wettin",
  },
  {
    id: "12841",
    zip: "06217",
    city: "Merseburg / Saale",
  },
  {
    id: "5355",
    zip: "06231",
    city: "Bad Dürrenberg",
  },
  {
    id: "5356",
    zip: "06237",
    city: "Leuna",
  },
  {
    id: "5357",
    zip: "06242",
    city: "Braunsbedra",
  },
  {
    id: "5358",
    zip: "06246",
    city: "Bad Lauchstädt",
  },
  {
    id: "12842",
    zip: "06249",
    city: "Mücheln / Geiseltal",
  },
  {
    id: "12843",
    zip: "06254",
    city: "Wallendorf / Luppe",
  },
  {
    id: "5359",
    zip: "06255",
    city: "Schafstädt",
  },
  {
    id: "5360",
    zip: "06258",
    city: "Schkopau",
  },
  {
    id: "5361",
    zip: "06259",
    city: "Frankleben",
  },
  {
    id: "5362",
    zip: "06268",
    city: "Querfurt",
  },
  {
    id: "5363",
    zip: "06279",
    city: "Schraplau",
  },
  {
    id: "5364",
    zip: "06295",
    city: "Eisleben",
  },
  {
    id: "5365",
    zip: "06308",
    city: "Benndorf",
  },
  {
    id: "5366",
    zip: "06311",
    city: "Helbra",
  },
  {
    id: "5367",
    zip: "06313",
    city: "Hergisdorf",
  },
  {
    id: "5368",
    zip: "06317",
    city: "Röblingen am See",
  },
  {
    id: "5369",
    zip: "06318",
    city: "Wansleben am See",
  },
  {
    id: "5370",
    zip: "06333",
    city: "Hettstedt",
  },
  {
    id: "5371",
    zip: "06343",
    city: "Mansfeld",
  },
  {
    id: "5372",
    zip: "06347",
    city: "Gerbstedt",
  },
  {
    id: "5373",
    zip: "06348",
    city: "Großörner",
  },
  {
    id: "12844",
    zip: "06366",
    city: "Köthen / Anhalt",
  },
  {
    id: "12845",
    zip: "06369",
    city: "Köthen / Anhalt",
  },
  {
    id: "5374",
    zip: "06385",
    city: "Kleinzerbst",
  },
  {
    id: "5375",
    zip: "06386",
    city: "Osternienburg",
  },
  {
    id: "5376",
    zip: "06388",
    city: "Gröbzig",
  },
  {
    id: "12846",
    zip: "06406",
    city: "Bernburg / Saale",
  },
  {
    id: "5377",
    zip: "06408",
    city: "Ilberstedt",
  },
  {
    id: "5378",
    zip: "06420",
    city: "Könnern",
  },
  {
    id: "12847",
    zip: "06425",
    city: "Alsleben / Saale",
  },
  {
    id: "12848",
    zip: "06429",
    city: "Nienburg / Saale",
  },
  {
    id: "5379",
    zip: "06449",
    city: "Aschersleben",
  },
  {
    id: "5380",
    zip: "06456",
    city: "Sandersleben",
  },
  {
    id: "5381",
    zip: "06458",
    city: "Hedersleben",
  },
  {
    id: "5382",
    zip: "06463",
    city: "Ermsleben",
  },
  {
    id: "5383",
    zip: "06464",
    city: "Frose",
  },
  {
    id: "5384",
    zip: "06466",
    city: "Gatersleben",
  },
  {
    id: "5385",
    zip: "06467",
    city: "Hoym",
  },
  {
    id: "5386",
    zip: "06469",
    city: "Nachterstedt",
  },
  {
    id: "5387",
    zip: "06484",
    city: "Quedlinburg",
  },
  {
    id: "153660",
    zip: "06485",
    city: "Quedlinburg",
  },
  {
    id: "5388",
    zip: "06493",
    city: "Ballenstedt",
  },
  {
    id: "12849",
    zip: "06502",
    city: "Thale / Harz",
  },
  {
    id: "5389",
    zip: "06507",
    city: "Gernrode",
  },
  {
    id: "5390",
    zip: "06526",
    city: "Sangerhausen",
  },
  {
    id: "5391",
    zip: "06528",
    city: "Wallhausen",
  },
  {
    id: "5392",
    zip: "06536",
    city: "Roßla",
  },
  {
    id: "12850",
    zip: "06537",
    city: "Kelbra / Kyffhäuser",
  },
  {
    id: "5393",
    zip: "06542",
    city: "Allstedt",
  },
  {
    id: "5394",
    zip: "06543",
    city: "Wippra",
  },
  {
    id: "12851",
    zip: "06547",
    city: "Stolberg / Harz",
  },
  {
    id: "5395",
    zip: "06548",
    city: "Rottleberode",
  },
  {
    id: "12852",
    zip: "06556",
    city: "Artern / Unstrut",
  },
  {
    id: "13342",
    zip: "06567",
    city: "Bad Frankenhausen / Kyffhäuser",
  },
  {
    id: "5396",
    zip: "06571",
    city: "Roßleben",
  },
  {
    id: "5397",
    zip: "06577",
    city: "Heldrungen",
  },
  {
    id: "5398",
    zip: "06578",
    city: "Oldisleben",
  },
  {
    id: "12853",
    zip: "06618",
    city: "Naumburg / Saale",
  },
  {
    id: "5399",
    zip: "06628",
    city: "Bad Kösen",
  },
  {
    id: "12854",
    zip: "06632",
    city: "Freyburg / Unstrut",
  },
  {
    id: "12855",
    zip: "06636",
    city: "Laucha / Unstrut",
  },
  {
    id: "5400",
    zip: "06638",
    city: "Karsdorf",
  },
  {
    id: "12856",
    zip: "06642",
    city: "Nebra / Unstrut",
  },
  {
    id: "5401",
    zip: "06647",
    city: "Bad Bibra",
  },
  {
    id: "5402",
    zip: "06648",
    city: "Eckartsberga",
  },
  {
    id: "5403",
    zip: "06667",
    city: "Weißenfels",
  },
  {
    id: "5404",
    zip: "06679",
    city: "Hohenmölsen",
  },
  {
    id: "5405",
    zip: "06682",
    city: "Teuchern",
  },
  {
    id: "5406",
    zip: "06686",
    city: "Lützen",
  },
  {
    id: "5407",
    zip: "06688",
    city: "Großkorbetha",
  },
  {
    id: "5408",
    zip: "06712",
    city: "Zeitz",
  },
  {
    id: "5409",
    zip: "06721",
    city: "Osterfeld",
  },
  {
    id: "5410",
    zip: "06722",
    city: "Droyßig",
  },
  {
    id: "5411",
    zip: "06724",
    city: "Kayna",
  },
  {
    id: "5412",
    zip: "06725",
    city: "Profen",
  },
  {
    id: "5413",
    zip: "06727",
    city: "Theißen",
  },
  {
    id: "5414",
    zip: "06729",
    city: "Tröglitz",
  },
  {
    id: "5415",
    zip: "06749",
    city: "Bitterfeld",
  },
  {
    id: "5416",
    zip: "06766",
    city: "Wolfen",
  },
  {
    id: "153636",
    zip: "06772",
    city: "Gräfenhainichen",
  },
  {
    id: "5417",
    zip: "06773",
    city: "Gräfenhainichen",
  },
  {
    id: "5418",
    zip: "06774",
    city: "Pouch",
  },
  {
    id: "5419",
    zip: "06779",
    city: "Dessau",
  },
  {
    id: "5420",
    zip: "06780",
    city: "Zörbig",
  },
  {
    id: "5421",
    zip: "06785",
    city: "Oranienbaum",
  },
  {
    id: "5422",
    zip: "06786",
    city: "Vockerode",
  },
  {
    id: "5423",
    zip: "06791",
    city: "Zschornewitz",
  },
  {
    id: "5424",
    zip: "06792",
    city: "Sandersdorf",
  },
  {
    id: "5425",
    zip: "06794",
    city: "Zscherndorf",
  },
  {
    id: "5426",
    zip: "06796",
    city: "Brehna",
  },
  {
    id: "5427",
    zip: "06800",
    city: "Jeßnitz",
  },
  {
    id: "5428",
    zip: "06803",
    city: "Greppin",
  },
  {
    id: "5429",
    zip: "06804",
    city: "Muldenstein",
  },
  {
    id: "5430",
    zip: "06808",
    city: "Holzweißig",
  },
  {
    id: "5431",
    zip: "06809",
    city: "Roitzsch",
  },
  {
    id: "5432",
    zip: "06842",
    city: "Dessau",
  },
  {
    id: "5433",
    zip: "06844",
    city: "Dessau",
  },
  {
    id: "5434",
    zip: "06846",
    city: "Dessau",
  },
  {
    id: "5435",
    zip: "06847",
    city: "Dessau",
  },
  {
    id: "5436",
    zip: "06849",
    city: "Dessau",
  },
  {
    id: "153638",
    zip: "06861",
    city: "Dessau-Roßlau",
  },
  {
    id: "12857",
    zip: "06862",
    city: "Roßlau / Elbe",
  },
  {
    id: "12858",
    zip: "06869",
    city: "Coswig / Anhalt",
  },
  {
    id: "5437",
    zip: "06886",
    city: "Wittenberg",
  },
  {
    id: "5438",
    zip: "06888",
    city: "Wittenberg",
  },
  {
    id: "153632",
    zip: "06889",
    city: "Wittenberg",
  },
  {
    id: "5439",
    zip: "06895",
    city: "Zahna",
  },
  {
    id: "5440",
    zip: "06896",
    city: "Wittenberg",
  },
  {
    id: "5441",
    zip: "06901",
    city: "Kemberg",
  },
  {
    id: "5442",
    zip: "06905",
    city: "Bad Schmiedeberg",
  },
  {
    id: "12859",
    zip: "06909",
    city: "Pretzsch / Elbe",
  },
  {
    id: "12860",
    zip: "06917",
    city: "Jessen / Elster",
  },
  {
    id: "12862",
    zip: "06918",
    city: "Elster / Elbe",
  },
  {
    id: "5443",
    zip: "06922",
    city: "Prettin",
  },
  {
    id: "5444",
    zip: "06925",
    city: "Annaburg",
  },
  {
    id: "5445",
    zip: "06926",
    city: "Holzdorf",
  },
  {
    id: "12861",
    zip: "06928",
    city: "Jessen / Elster",
  },
  {
    id: "12863",
    zip: "07318",
    city: "Saalfeld / Saale",
  },
  {
    id: "5446",
    zip: "07330",
    city: "Probstzella",
  },
  {
    id: "5447",
    zip: "07333",
    city: "Unterwellenborn",
  },
  {
    id: "5448",
    zip: "07334",
    city: "Kamsdorf",
  },
  {
    id: "5449",
    zip: "07336",
    city: "Könitz",
  },
  {
    id: "5450",
    zip: "07338",
    city: "Kaulsdorf",
  },
  {
    id: "5451",
    zip: "07343",
    city: "Wurzbach",
  },
  {
    id: "5452",
    zip: "07349",
    city: "Lehesten",
  },
  {
    id: "13109",
    zip: "07356",
    city: "Lobenstein. Moorbad",
  },
  {
    id: "13110",
    zip: "07366",
    city: "Lobenstein. Moorbad",
  },
  {
    id: "5453",
    zip: "07368",
    city: "Ebersdorf / Thüringen",
  },
  {
    id: "5454",
    zip: "07381",
    city: "Pößneck",
  },
  {
    id: "5455",
    zip: "07387",
    city: "Krölpa",
  },
  {
    id: "5456",
    zip: "07389",
    city: "Ranis",
  },
  {
    id: "5457",
    zip: "07407",
    city: "Rudolstadt",
  },
  {
    id: "5458",
    zip: "07422",
    city: "Bad Blankenburg",
  },
  {
    id: "5459",
    zip: "07426",
    city: "Königsee",
  },
  {
    id: "5460",
    zip: "07427",
    city: "Schwarzburg",
  },
  {
    id: "5461",
    zip: "07429",
    city: "Sitzendorf",
  },
  {
    id: "5462",
    zip: "07545",
    city: "Gera",
  },
  {
    id: "5463",
    zip: "07546",
    city: "Gera",
  },
  {
    id: "5464",
    zip: "07548",
    city: "Gera",
  },
  {
    id: "5465",
    zip: "07549",
    city: "Gera",
  },
  {
    id: "5466",
    zip: "07551",
    city: "Gera",
  },
  {
    id: "5467",
    zip: "07552",
    city: "Gera",
  },
  {
    id: "5468",
    zip: "07554",
    city: "Gera",
  },
  {
    id: "5469",
    zip: "07557",
    city: "Gera",
  },
  {
    id: "5470",
    zip: "07558",
    city: "Töppeln",
  },
  {
    id: "5471",
    zip: "07570",
    city: "Weida",
  },
  {
    id: "5472",
    zip: "07580",
    city: "Ronneburg",
  },
  {
    id: "5473",
    zip: "07586",
    city: "Bad Köstritz",
  },
  {
    id: "5474",
    zip: "07589",
    city: "Münchenbernsdorf",
  },
  {
    id: "5475",
    zip: "07607",
    city: "Eisenberg",
  },
  {
    id: "12864",
    zip: "07613",
    city: "Krossen / Elster",
  },
  {
    id: "5476",
    zip: "07616",
    city: "Bürgel",
  },
  {
    id: "5477",
    zip: "07619",
    city: "Schkölen",
  },
  {
    id: "5478",
    zip: "07629",
    city: "Hermsdorf",
  },
  {
    id: "5479",
    zip: "07639",
    city: "Bad Klosterlausnitz",
  },
  {
    id: "5480",
    zip: "07646",
    city: "Stadtroda",
  },
  {
    id: "5481",
    zip: "07743",
    city: "Jena",
  },
  {
    id: "5482",
    zip: "07745",
    city: "Jena",
  },
  {
    id: "5483",
    zip: "07747",
    city: "Jena",
  },
  {
    id: "5484",
    zip: "07749",
    city: "Jena",
  },
  {
    id: "5485",
    zip: "07751",
    city: "Jena",
  },
  {
    id: "5486",
    zip: "07768",
    city: "Kahla",
  },
  {
    id: "5487",
    zip: "07774",
    city: "Camburg",
  },
  {
    id: "5488",
    zip: "07778",
    city: "Dorndorf-Steudnitz",
  },
  {
    id: "12865",
    zip: "07806",
    city: "Neustadt / Orla",
  },
  {
    id: "5489",
    zip: "07819",
    city: "Triptis",
  },
  {
    id: "5490",
    zip: "07907",
    city: "Schleiz",
  },
  {
    id: "5491",
    zip: "07919",
    city: "Schleiz",
  },
  {
    id: "5492",
    zip: "07922",
    city: "Tanna",
  },
  {
    id: "5493",
    zip: "07924",
    city: "Ziegenrück",
  },
  {
    id: "5494",
    zip: "07926",
    city: "Gefell",
  },
  {
    id: "5495",
    zip: "07927",
    city: "Hirschberg",
  },
  {
    id: "5496",
    zip: "07929",
    city: "Saalburg",
  },
  {
    id: "5497",
    zip: "07937",
    city: "Zeulenroda",
  },
  {
    id: "5498",
    zip: "07950",
    city: "Triebes",
  },
  {
    id: "13111",
    zip: "07952",
    city: "Pausa / Vogtland",
  },
  {
    id: "5499",
    zip: "07955",
    city: "Auma",
  },
  {
    id: "5500",
    zip: "07957",
    city: "Langenwetzendorf",
  },
  {
    id: "5501",
    zip: "07958",
    city: "Hohenleuben",
  },
  {
    id: "5502",
    zip: "07973",
    city: "Greiz",
  },
  {
    id: "12866",
    zip: "07980",
    city: "Berga / Elster",
  },
  {
    id: "5503",
    zip: "07985",
    city: "Elsterberg",
  },
  {
    id: "5504",
    zip: "07987",
    city: "Mohlsdorf",
  },
  {
    id: "5505",
    zip: "07989",
    city: "Teichwolframsdorf",
  },
  {
    id: "5506",
    zip: "08056",
    city: "Zwickau",
  },
  {
    id: "5507",
    zip: "08058",
    city: "Zwickau",
  },
  {
    id: "5508",
    zip: "08060",
    city: "Zwickau",
  },
  {
    id: "5509",
    zip: "08062",
    city: "Zwickau",
  },
  {
    id: "5510",
    zip: "08064",
    city: "Zwickau",
  },
  {
    id: "5511",
    zip: "08066",
    city: "Zwickau",
  },
  {
    id: "5512",
    zip: "08107",
    city: "Kirchberg",
  },
  {
    id: "5513",
    zip: "08112",
    city: "Wilkau-Haßlau",
  },
  {
    id: "5514",
    zip: "08115",
    city: "Lichtentanne",
  },
  {
    id: "5515",
    zip: "08118",
    city: "Hartenstein",
  },
  {
    id: "5516",
    zip: "08121",
    city: "Wiesenburg",
  },
  {
    id: "5517",
    zip: "08124",
    city: "Cainsdorf",
  },
  {
    id: "5518",
    zip: "08129",
    city: "Mosel",
  },
  {
    id: "13112",
    zip: "08132",
    city: "Mülsen Sankt Jacob",
  },
  {
    id: "5519",
    zip: "08134",
    city: "Langenbach",
  },
  {
    id: "5520",
    zip: "08138",
    city: "Thurm",
  },
  {
    id: "5521",
    zip: "08141",
    city: "Reinsdorf",
  },
  {
    id: "5522",
    zip: "08144",
    city: "Ebersbrunn",
  },
  {
    id: "5523",
    zip: "08146",
    city: "Ortmannsdorf",
  },
  {
    id: "5524",
    zip: "08147",
    city: "Crinitzberg",
  },
  {
    id: "5525",
    zip: "08149",
    city: "Vielau",
  },
  {
    id: "13113",
    zip: "08209",
    city: "Auerbach / Vogtland",
  },
  {
    id: "13114",
    zip: "08223",
    city: "Falkenstein / Vogtland",
  },
  {
    id: "5526",
    zip: "08228",
    city: "Rodewisch",
  },
  {
    id: "5527",
    zip: "08233",
    city: "Treuen",
  },
  {
    id: "5528",
    zip: "08236",
    city: "Ellefeld",
  },
  {
    id: "5529",
    zip: "08237",
    city: "Steinberg",
  },
  {
    id: "5530",
    zip: "08239",
    city: "Bergen",
  },
  {
    id: "13115",
    zip: "08248",
    city: "Klingenthal / Sachsen",
  },
  {
    id: "5531",
    zip: "08258",
    city: "Markneukirchen",
  },
  {
    id: "13116",
    zip: "08261",
    city: "Schöneck / Vogtland",
  },
  {
    id: "13117",
    zip: "08262",
    city: "Tannenbergsthal / Vogtland",
  },
  {
    id: "5532",
    zip: "08265",
    city: "Erlbach",
  },
  {
    id: "5533",
    zip: "08267",
    city: "Zwota",
  },
  {
    id: "5534",
    zip: "08269",
    city: "Hammerbrücke",
  },
  {
    id: "5535",
    zip: "08280",
    city: "Aue",
  },
  {
    id: "5536",
    zip: "08289",
    city: "Schneeberg",
  },
  {
    id: "5537",
    zip: "08294",
    city: "Lößnitz",
  },
  {
    id: "5538",
    zip: "08297",
    city: "Zwönitz",
  },
  {
    id: "5539",
    zip: "08301",
    city: "Schlema",
  },
  {
    id: "5540",
    zip: "08304",
    city: "Schönheide",
  },
  {
    id: "5541",
    zip: "08309",
    city: "Eibenstock",
  },
  {
    id: "13118",
    zip: "08312",
    city: "Lauter / Sachsen",
  },
  {
    id: "5542",
    zip: "08315",
    city: "Bernsbach",
  },
  {
    id: "5543",
    zip: "08318",
    city: "Hundshübel",
  },
  {
    id: "5544",
    zip: "08321",
    city: "Zschorlau",
  },
  {
    id: "5545",
    zip: "08324",
    city: "Bockau",
  },
  {
    id: "5546",
    zip: "08325",
    city: "Carlsfeld",
  },
  {
    id: "5547",
    zip: "08326",
    city: "Sosa",
  },
  {
    id: "5548",
    zip: "08328",
    city: "Stützengrün",
  },
  {
    id: "13119",
    zip: "08340",
    city: "Schwarzenberg / Erzgebirge",
  },
  {
    id: "5549",
    zip: "08349",
    city: "Johanngeorgenstadt",
  },
  {
    id: "5550",
    zip: "08352",
    city: "Raschau",
  },
  {
    id: "5551",
    zip: "08355",
    city: "Rittersgrün",
  },
  {
    id: "5552",
    zip: "08358",
    city: "Grünhain",
  },
  {
    id: "13120",
    zip: "08359",
    city: "Breitenbrunn / Erzgebirge",
  },
  {
    id: "5553",
    zip: "08371",
    city: "Glauchau",
  },
  {
    id: "5554",
    zip: "08373",
    city: "Glauchau",
  },
  {
    id: "5555",
    zip: "08393",
    city: "Meerane",
  },
  {
    id: "5556",
    zip: "08396",
    city: "Waldenburg",
  },
  {
    id: "5557",
    zip: "08399",
    city: "Wolkenburg-Kaufungen",
  },
  {
    id: "5558",
    zip: "08412",
    city: "Werdau",
  },
  {
    id: "5559",
    zip: "08427",
    city: "Fraureuth",
  },
  {
    id: "5560",
    zip: "08428",
    city: "Langenbernsdorf",
  },
  {
    id: "5561",
    zip: "08432",
    city: "Steinpleis",
  },
  {
    id: "5562",
    zip: "08439",
    city: "Crimmitschau",
  },
  {
    id: "5563",
    zip: "08451",
    city: "Crimmitschau",
  },
  {
    id: "5564",
    zip: "08459",
    city: "Neukirchen / Pleiße",
  },
  {
    id: "13121",
    zip: "08468",
    city: "Reichenbach / Vogtland",
  },
  {
    id: "5565",
    zip: "08485",
    city: "Lengenfeld",
  },
  {
    id: "5566",
    zip: "08491",
    city: "Netzschkau",
  },
  {
    id: "5567",
    zip: "08496",
    city: "Neumark",
  },
  {
    id: "5568",
    zip: "08499",
    city: "Mylau",
  },
  {
    id: "5569",
    zip: "08523",
    city: "Plauen",
  },
  {
    id: "5570",
    zip: "08525",
    city: "Plauen",
  },
  {
    id: "5571",
    zip: "08527",
    city: "Plauen",
  },
  {
    id: "5572",
    zip: "08529",
    city: "Plauen",
  },
  {
    id: "5573",
    zip: "08538",
    city: "Weischlitz",
  },
  {
    id: "5574",
    zip: "08539",
    city: "Mehltheuer",
  },
  {
    id: "5575",
    zip: "08541",
    city: "Neuensalz",
  },
  {
    id: "5576",
    zip: "08543",
    city: "Pöhl",
  },
  {
    id: "5577",
    zip: "08547",
    city: "Jößnitz",
  },
  {
    id: "5578",
    zip: "08548",
    city: "Syrau",
  },
  {
    id: "5579",
    zip: "08606",
    city: "Oelsnitz",
  },
  {
    id: "5580",
    zip: "08626",
    city: "Adorf",
  },
  {
    id: "5581",
    zip: "08645",
    city: "Bad Elster",
  },
  {
    id: "5582",
    zip: "08648",
    city: "Bad Brambach",
  },
  {
    id: "5583",
    zip: "09111",
    city: "Chemnitz",
  },
  {
    id: "5584",
    zip: "09112",
    city: "Chemnitz",
  },
  {
    id: "5585",
    zip: "09113",
    city: "Chemnitz",
  },
  {
    id: "5586",
    zip: "09114",
    city: "Chemnitz",
  },
  {
    id: "5587",
    zip: "09116",
    city: "Chemnitz",
  },
  {
    id: "5588",
    zip: "09117",
    city: "Chemnitz",
  },
  {
    id: "5589",
    zip: "09119",
    city: "Chemnitz",
  },
  {
    id: "5590",
    zip: "09120",
    city: "Chemnitz",
  },
  {
    id: "5591",
    zip: "09122",
    city: "Chemnitz",
  },
  {
    id: "5592",
    zip: "09123",
    city: "Chemnitz",
  },
  {
    id: "5593",
    zip: "09125",
    city: "Chemnitz",
  },
  {
    id: "5594",
    zip: "09126",
    city: "Chemnitz",
  },
  {
    id: "5595",
    zip: "09127",
    city: "Chemnitz",
  },
  {
    id: "5596",
    zip: "09128",
    city: "Chemnitz",
  },
  {
    id: "5597",
    zip: "09130",
    city: "Chemnitz",
  },
  {
    id: "5598",
    zip: "09131",
    city: "Chemnitz",
  },
  {
    id: "5599",
    zip: "09212",
    city: "Limbach-Oberfrohna",
  },
  {
    id: "5600",
    zip: "09217",
    city: "Burgstädt",
  },
  {
    id: "13122",
    zip: "09221",
    city: "Neukirchen / Erzgebirge",
  },
  {
    id: "5601",
    zip: "09224",
    city: "Grüna",
  },
  {
    id: "5602",
    zip: "09228",
    city: "Wittgensdorf",
  },
  {
    id: "5603",
    zip: "09232",
    city: "Hartmannsdorf",
  },
  {
    id: "5604",
    zip: "09235",
    city: "Burkhardtsdorf",
  },
  {
    id: "5605",
    zip: "09236",
    city: "Claußnitz",
  },
  {
    id: "5606",
    zip: "09238",
    city: "Auerswalde",
  },
  {
    id: "5607",
    zip: "09240",
    city: "Kemtau",
  },
  {
    id: "5608",
    zip: "09241",
    city: "Mühlau",
  },
  {
    id: "5609",
    zip: "09243",
    city: "Niederfrohna",
  },
  {
    id: "5610",
    zip: "09244",
    city: "Lichtenau",
  },
  {
    id: "5611",
    zip: "09246",
    city: "Pleißa",
  },
  {
    id: "5612",
    zip: "09247",
    city: "Röhrsdorf",
  },
  {
    id: "13123",
    zip: "09249",
    city: "Taura bei Burgstädt",
  },
  {
    id: "5613",
    zip: "09306",
    city: "Rochlitz",
  },
  {
    id: "5614",
    zip: "09322",
    city: "Penig",
  },
  {
    id: "5615",
    zip: "09326",
    city: "Geringswalde",
  },
  {
    id: "5616",
    zip: "09328",
    city: "Lunzenau",
  },
  {
    id: "5617",
    zip: "09337",
    city: "Hohenstein-Ernstthal",
  },
  {
    id: "13124",
    zip: "09350",
    city: "Lichtenstein / Sachsen",
  },
  {
    id: "5618",
    zip: "09353",
    city: "Oberlungwitz",
  },
  {
    id: "5619",
    zip: "09355",
    city: "Gersdorf",
  },
  {
    id: "13125",
    zip: "09356",
    city: "Sankt Egidien",
  },
  {
    id: "5620",
    zip: "09358",
    city: "Wüstenbrand",
  },
  {
    id: "13126",
    zip: "09366",
    city: "Stollberg / Erzgebirge",
  },
  {
    id: "13127",
    zip: "09376",
    city: "Oelsnitz / Erzgebirge",
  },
  {
    id: "13128",
    zip: "09380",
    city: "Thalheim / Erzgebirge",
  },
  {
    id: "13129",
    zip: "09385",
    city: "Lugau / Erzgebirge",
  },
  {
    id: "5621",
    zip: "09387",
    city: "Jahnsdorf",
  },
  {
    id: "5622",
    zip: "09390",
    city: "Gornsdorf",
  },
  {
    id: "5623",
    zip: "09392",
    city: "Auerbach",
  },
  {
    id: "5624",
    zip: "09394",
    city: "Hohndorf",
  },
  {
    id: "5625",
    zip: "09395",
    city: "Hormersdorf",
  },
  {
    id: "5626",
    zip: "09397",
    city: "Neuwürschnitz",
  },
  {
    id: "5627",
    zip: "09399",
    city: "Niederwürschnitz",
  },
  {
    id: "5628",
    zip: "09405",
    city: "Zschopau",
  },
  {
    id: "5629",
    zip: "09419",
    city: "Thum",
  },
  {
    id: "13130",
    zip: "09423",
    city: "Gelenau / Erzgebirge",
  },
  {
    id: "5630",
    zip: "09427",
    city: "Ehrenfriedersdorf",
  },
  {
    id: "5631",
    zip: "09429",
    city: "Wolkenstein",
  },
  {
    id: "5632",
    zip: "09430",
    city: "Drebach",
  },
  {
    id: "5633",
    zip: "09432",
    city: "Großolbersdorf",
  },
  {
    id: "5634",
    zip: "09434",
    city: "Krumhermersdorf",
  },
  {
    id: "5635",
    zip: "09435",
    city: "Scharfenstein",
  },
  {
    id: "13131",
    zip: "09437",
    city: "Waldkirchen / Erzgebirge",
  },
  {
    id: "5636",
    zip: "09439",
    city: "Amtsberg",
  },
  {
    id: "5637",
    zip: "09456",
    city: "Annaberg-Buchholz",
  },
  {
    id: "5638",
    zip: "09465",
    city: "Sehma",
  },
  {
    id: "5639",
    zip: "09468",
    city: "Geyer",
  },
  {
    id: "5640",
    zip: "09471",
    city: "Bärenstein",
  },
  {
    id: "5641",
    zip: "09474",
    city: "Crottendorf",
  },
  {
    id: "5642",
    zip: "09477",
    city: "Jöhstadt",
  },
  {
    id: "5643",
    zip: "09481",
    city: "Scheibenberg",
  },
  {
    id: "5644",
    zip: "09484",
    city: "Oberwiesenthal",
  },
  {
    id: "5645",
    zip: "09487",
    city: "Schlettau",
  },
  {
    id: "5646",
    zip: "09488",
    city: "Wiesa",
  },
  {
    id: "5647",
    zip: "09496",
    city: "Marienberg",
  },
  {
    id: "5648",
    zip: "09509",
    city: "Pockau / Flöhatal",
  },
  {
    id: "5649",
    zip: "09514",
    city: "Lengefeld",
  },
  {
    id: "5650",
    zip: "09517",
    city: "Zöblitz",
  },
  {
    id: "5651",
    zip: "09518",
    city: "Großrückerswalde",
  },
  {
    id: "5652",
    zip: "09526",
    city: "Olbernhau",
  },
  {
    id: "13132",
    zip: "09544",
    city: "Neuhausen / Erzgebirge",
  },
  {
    id: "13133",
    zip: "09548",
    city: "Seiffen / Erzgebirge",
  },
  {
    id: "5653",
    zip: "09557",
    city: "Flöha",
  },
  {
    id: "5654",
    zip: "09569",
    city: "Oederan",
  },
  {
    id: "5655",
    zip: "09573",
    city: "Leubsdorf",
  },
  {
    id: "5656",
    zip: "09575",
    city: "Eppendorf",
  },
  {
    id: "5657",
    zip: "09577",
    city: "Niederwiesa",
  },
  {
    id: "5658",
    zip: "09579",
    city: "Borstendorf",
  },
  {
    id: "5659",
    zip: "09599",
    city: "Freiberg",
  },
  {
    id: "5660",
    zip: "09600",
    city: "Freiberg",
  },
  {
    id: "5661",
    zip: "09603",
    city: "Großschirma",
  },
  {
    id: "5662",
    zip: "09618",
    city: "Brand-Erbisdorf",
  },
  {
    id: "13134",
    zip: "09619",
    city: "Mulda / Sachsen",
  },
  {
    id: "5663",
    zip: "09623",
    city: "Frauenstein",
  },
  {
    id: "5664",
    zip: "09627",
    city: "Bobritzsch",
  },
  {
    id: "5665",
    zip: "09629",
    city: "Reinsberg",
  },
  {
    id: "5666",
    zip: "09633",
    city: "Halsbrücke",
  },
  {
    id: "5667",
    zip: "09634",
    city: "Siebenlehn",
  },
  {
    id: "5668",
    zip: "09636",
    city: "Langenau",
  },
  {
    id: "13135",
    zip: "09638",
    city: "Lichtenberg / Erzgebirge",
  },
  {
    id: "5669",
    zip: "09648",
    city: "Mittweida",
  },
  {
    id: "5670",
    zip: "09661",
    city: "Hainichen",
  },
  {
    id: "5671",
    zip: "09669",
    city: "Frankenberg",
  },
  {
    id: "12910",
    zip: "10115",
    city: "Berlin",
  },
  {
    id: "12911",
    zip: "10117",
    city: "Berlin",
  },
  {
    id: "12912",
    zip: "10119",
    city: "Berlin",
  },
  {
    id: "12913",
    zip: "10178",
    city: "Berlin",
  },
  {
    id: "12914",
    zip: "10179",
    city: "Berlin",
  },
  {
    id: "12915",
    zip: "10243",
    city: "Berlin",
  },
  {
    id: "12916",
    zip: "10245",
    city: "Berlin",
  },
  {
    id: "12917",
    zip: "10247",
    city: "Berlin",
  },
  {
    id: "12918",
    zip: "10249",
    city: "Berlin",
  },
  {
    id: "12919",
    zip: "10315",
    city: "Berlin",
  },
  {
    id: "12920",
    zip: "10317",
    city: "Berlin",
  },
  {
    id: "12921",
    zip: "10318",
    city: "Berlin",
  },
  {
    id: "12922",
    zip: "10319",
    city: "Berlin",
  },
  {
    id: "12923",
    zip: "10365",
    city: "Berlin",
  },
  {
    id: "12924",
    zip: "10367",
    city: "Berlin",
  },
  {
    id: "12925",
    zip: "10369",
    city: "Berlin",
  },
  {
    id: "12926",
    zip: "10405",
    city: "Berlin",
  },
  {
    id: "12927",
    zip: "10407",
    city: "Berlin",
  },
  {
    id: "12928",
    zip: "10409",
    city: "Berlin",
  },
  {
    id: "12929",
    zip: "10435",
    city: "Berlin",
  },
  {
    id: "12930",
    zip: "10437",
    city: "Berlin",
  },
  {
    id: "12931",
    zip: "10439",
    city: "Berlin",
  },
  {
    id: "12932",
    zip: "10551",
    city: "Berlin",
  },
  {
    id: "12933",
    zip: "10553",
    city: "Berlin",
  },
  {
    id: "12934",
    zip: "10555",
    city: "Berlin",
  },
  {
    id: "12935",
    zip: "10557",
    city: "Berlin",
  },
  {
    id: "12936",
    zip: "10559",
    city: "Berlin",
  },
  {
    id: "12937",
    zip: "10585",
    city: "Berlin",
  },
  {
    id: "12938",
    zip: "10587",
    city: "Berlin",
  },
  {
    id: "12939",
    zip: "10589",
    city: "Berlin",
  },
  {
    id: "12940",
    zip: "10623",
    city: "Berlin",
  },
  {
    id: "12941",
    zip: "10625",
    city: "Berlin",
  },
  {
    id: "12942",
    zip: "10627",
    city: "Berlin",
  },
  {
    id: "12943",
    zip: "10629",
    city: "Berlin",
  },
  {
    id: "12944",
    zip: "10707",
    city: "Berlin",
  },
  {
    id: "12945",
    zip: "10709",
    city: "Berlin",
  },
  {
    id: "12946",
    zip: "10711",
    city: "Berlin",
  },
  {
    id: "12947",
    zip: "10713",
    city: "Berlin",
  },
  {
    id: "12948",
    zip: "10715",
    city: "Berlin",
  },
  {
    id: "12949",
    zip: "10717",
    city: "Berlin",
  },
  {
    id: "12950",
    zip: "10719",
    city: "Berlin",
  },
  {
    id: "12951",
    zip: "10777",
    city: "Berlin",
  },
  {
    id: "12952",
    zip: "10779",
    city: "Berlin",
  },
  {
    id: "12953",
    zip: "10781",
    city: "Berlin",
  },
  {
    id: "12954",
    zip: "10783",
    city: "Berlin",
  },
  {
    id: "12955",
    zip: "10785",
    city: "Berlin",
  },
  {
    id: "12956",
    zip: "10787",
    city: "Berlin",
  },
  {
    id: "12957",
    zip: "10789",
    city: "Berlin",
  },
  {
    id: "12958",
    zip: "10823",
    city: "Berlin",
  },
  {
    id: "12959",
    zip: "10825",
    city: "Berlin",
  },
  {
    id: "12960",
    zip: "10827",
    city: "Berlin",
  },
  {
    id: "12961",
    zip: "10829",
    city: "Berlin",
  },
  {
    id: "12962",
    zip: "10961",
    city: "Berlin",
  },
  {
    id: "12963",
    zip: "10963",
    city: "Berlin",
  },
  {
    id: "12964",
    zip: "10965",
    city: "Berlin",
  },
  {
    id: "12965",
    zip: "10967",
    city: "Berlin",
  },
  {
    id: "12966",
    zip: "10969",
    city: "Berlin",
  },
  {
    id: "12967",
    zip: "10997",
    city: "Berlin",
  },
  {
    id: "12968",
    zip: "10999",
    city: "Berlin",
  },
  {
    id: "12969",
    zip: "12043",
    city: "Berlin",
  },
  {
    id: "12970",
    zip: "12045",
    city: "Berlin",
  },
  {
    id: "12971",
    zip: "12047",
    city: "Berlin",
  },
  {
    id: "12972",
    zip: "12049",
    city: "Berlin",
  },
  {
    id: "12973",
    zip: "12051",
    city: "Berlin",
  },
  {
    id: "12974",
    zip: "12053",
    city: "Berlin",
  },
  {
    id: "12975",
    zip: "12055",
    city: "Berlin",
  },
  {
    id: "12976",
    zip: "12057",
    city: "Berlin",
  },
  {
    id: "12977",
    zip: "12059",
    city: "Berlin",
  },
  {
    id: "12978",
    zip: "12099",
    city: "Berlin",
  },
  {
    id: "12979",
    zip: "12101",
    city: "Berlin",
  },
  {
    id: "12980",
    zip: "12103",
    city: "Berlin",
  },
  {
    id: "12981",
    zip: "12105",
    city: "Berlin",
  },
  {
    id: "12982",
    zip: "12107",
    city: "Berlin",
  },
  {
    id: "12983",
    zip: "12109",
    city: "Berlin",
  },
  {
    id: "12984",
    zip: "12157",
    city: "Berlin",
  },
  {
    id: "12985",
    zip: "12159",
    city: "Berlin",
  },
  {
    id: "12986",
    zip: "12161",
    city: "Berlin",
  },
  {
    id: "12987",
    zip: "12163",
    city: "Berlin",
  },
  {
    id: "12988",
    zip: "12165",
    city: "Berlin",
  },
  {
    id: "12989",
    zip: "12167",
    city: "Berlin",
  },
  {
    id: "12990",
    zip: "12169",
    city: "Berlin",
  },
  {
    id: "12991",
    zip: "12203",
    city: "Berlin",
  },
  {
    id: "12992",
    zip: "12205",
    city: "Berlin",
  },
  {
    id: "12993",
    zip: "12207",
    city: "Berlin",
  },
  {
    id: "12994",
    zip: "12209",
    city: "Berlin",
  },
  {
    id: "12995",
    zip: "12247",
    city: "Berlin",
  },
  {
    id: "12996",
    zip: "12249",
    city: "Berlin",
  },
  {
    id: "12997",
    zip: "12277",
    city: "Berlin",
  },
  {
    id: "12998",
    zip: "12279",
    city: "Berlin",
  },
  {
    id: "12999",
    zip: "12305",
    city: "Berlin",
  },
  {
    id: "13000",
    zip: "12307",
    city: "Berlin",
  },
  {
    id: "13001",
    zip: "12309",
    city: "Berlin",
  },
  {
    id: "13002",
    zip: "12347",
    city: "Berlin",
  },
  {
    id: "13003",
    zip: "12349",
    city: "Berlin",
  },
  {
    id: "13004",
    zip: "12351",
    city: "Berlin",
  },
  {
    id: "13005",
    zip: "12353",
    city: "Berlin",
  },
  {
    id: "13006",
    zip: "12355",
    city: "Berlin",
  },
  {
    id: "13007",
    zip: "12357",
    city: "Berlin",
  },
  {
    id: "13008",
    zip: "12359",
    city: "Berlin",
  },
  {
    id: "13009",
    zip: "12435",
    city: "Berlin",
  },
  {
    id: "13010",
    zip: "12437",
    city: "Berlin",
  },
  {
    id: "13011",
    zip: "12439",
    city: "Berlin",
  },
  {
    id: "13012",
    zip: "12459",
    city: "Berlin",
  },
  {
    id: "13013",
    zip: "12487",
    city: "Berlin",
  },
  {
    id: "13014",
    zip: "12489",
    city: "Berlin",
  },
  {
    id: "13015",
    zip: "12524",
    city: "Berlin",
  },
  {
    id: "13016",
    zip: "12526",
    city: "Berlin",
  },
  {
    id: "13017",
    zip: "12527",
    city: "Berlin",
  },
  {
    id: "5672",
    zip: "12529",
    city: "Schönefeld",
  },
  {
    id: "13018",
    zip: "12555",
    city: "Berlin",
  },
  {
    id: "13019",
    zip: "12557",
    city: "Berlin",
  },
  {
    id: "13020",
    zip: "12559",
    city: "Berlin",
  },
  {
    id: "13021",
    zip: "12587",
    city: "Berlin",
  },
  {
    id: "13022",
    zip: "12589",
    city: "Berlin",
  },
  {
    id: "13023",
    zip: "12619",
    city: "Berlin",
  },
  {
    id: "13024",
    zip: "12621",
    city: "Berlin",
  },
  {
    id: "13025",
    zip: "12623",
    city: "Berlin",
  },
  {
    id: "5673",
    zip: "12625",
    city: "Dahlwitz-Hoppegarten",
  },
  {
    id: "13026",
    zip: "12627",
    city: "Berlin",
  },
  {
    id: "13027",
    zip: "12629",
    city: "Berlin",
  },
  {
    id: "13028",
    zip: "12679",
    city: "Berlin",
  },
  {
    id: "13029",
    zip: "12681",
    city: "Berlin",
  },
  {
    id: "13030",
    zip: "12683",
    city: "Berlin",
  },
  {
    id: "13031",
    zip: "12685",
    city: "Berlin",
  },
  {
    id: "13032",
    zip: "12687",
    city: "Berlin",
  },
  {
    id: "13033",
    zip: "12689",
    city: "Berlin",
  },
  {
    id: "13034",
    zip: "13051",
    city: "Berlin",
  },
  {
    id: "13035",
    zip: "13053",
    city: "Berlin",
  },
  {
    id: "13036",
    zip: "13055",
    city: "Berlin",
  },
  {
    id: "13037",
    zip: "13057",
    city: "Berlin",
  },
  {
    id: "13038",
    zip: "13059",
    city: "Berlin",
  },
  {
    id: "13039",
    zip: "13086",
    city: "Berlin",
  },
  {
    id: "13040",
    zip: "13088",
    city: "Berlin",
  },
  {
    id: "13041",
    zip: "13089",
    city: "Berlin",
  },
  {
    id: "13042",
    zip: "13125",
    city: "Berlin",
  },
  {
    id: "13043",
    zip: "13127",
    city: "Berlin",
  },
  {
    id: "13044",
    zip: "13129",
    city: "Berlin",
  },
  {
    id: "13045",
    zip: "13156",
    city: "Berlin",
  },
  {
    id: "13046",
    zip: "13158",
    city: "Berlin",
  },
  {
    id: "13047",
    zip: "13159",
    city: "Berlin",
  },
  {
    id: "13048",
    zip: "13187",
    city: "Berlin",
  },
  {
    id: "13049",
    zip: "13189",
    city: "Berlin",
  },
  {
    id: "13050",
    zip: "13347",
    city: "Berlin",
  },
  {
    id: "13051",
    zip: "13349",
    city: "Berlin",
  },
  {
    id: "13052",
    zip: "13351",
    city: "Berlin",
  },
  {
    id: "13053",
    zip: "13353",
    city: "Berlin",
  },
  {
    id: "13054",
    zip: "13355",
    city: "Berlin",
  },
  {
    id: "13055",
    zip: "13357",
    city: "Berlin",
  },
  {
    id: "13056",
    zip: "13359",
    city: "Berlin",
  },
  {
    id: "13057",
    zip: "13403",
    city: "Berlin",
  },
  {
    id: "13058",
    zip: "13405",
    city: "Berlin",
  },
  {
    id: "13059",
    zip: "13407",
    city: "Berlin",
  },
  {
    id: "13060",
    zip: "13409",
    city: "Berlin",
  },
  {
    id: "13061",
    zip: "13435",
    city: "Berlin",
  },
  {
    id: "13062",
    zip: "13437",
    city: "Berlin",
  },
  {
    id: "13063",
    zip: "13439",
    city: "Berlin",
  },
  {
    id: "13064",
    zip: "13465",
    city: "Berlin",
  },
  {
    id: "13065",
    zip: "13467",
    city: "Berlin",
  },
  {
    id: "13066",
    zip: "13469",
    city: "Berlin",
  },
  {
    id: "13067",
    zip: "13503",
    city: "Berlin",
  },
  {
    id: "13068",
    zip: "13505",
    city: "Berlin",
  },
  {
    id: "13069",
    zip: "13507",
    city: "Berlin",
  },
  {
    id: "13070",
    zip: "13509",
    city: "Berlin",
  },
  {
    id: "13071",
    zip: "13581",
    city: "Berlin",
  },
  {
    id: "13072",
    zip: "13583",
    city: "Berlin",
  },
  {
    id: "13073",
    zip: "13585",
    city: "Berlin",
  },
  {
    id: "13074",
    zip: "13587",
    city: "Berlin",
  },
  {
    id: "13075",
    zip: "13589",
    city: "Berlin",
  },
  {
    id: "13076",
    zip: "13591",
    city: "Berlin",
  },
  {
    id: "13077",
    zip: "13593",
    city: "Berlin",
  },
  {
    id: "13079",
    zip: "13595",
    city: "Berlin",
  },
  {
    id: "13080",
    zip: "13597",
    city: "Berlin",
  },
  {
    id: "13081",
    zip: "13599",
    city: "Berlin",
  },
  {
    id: "13082",
    zip: "13627",
    city: "Berlin",
  },
  {
    id: "13083",
    zip: "13629",
    city: "Berlin",
  },
  {
    id: "13078",
    zip: "14050",
    city: "Berlin",
  },
  {
    id: "13084",
    zip: "14052",
    city: "Berlin",
  },
  {
    id: "13085",
    zip: "14053",
    city: "Berlin",
  },
  {
    id: "13086",
    zip: "14055",
    city: "Berlin",
  },
  {
    id: "13087",
    zip: "14057",
    city: "Berlin",
  },
  {
    id: "13088",
    zip: "14059",
    city: "Berlin",
  },
  {
    id: "13089",
    zip: "14089",
    city: "Berlin",
  },
  {
    id: "13090",
    zip: "14109",
    city: "Berlin",
  },
  {
    id: "13091",
    zip: "14129",
    city: "Berlin",
  },
  {
    id: "13092",
    zip: "14163",
    city: "Berlin",
  },
  {
    id: "13093",
    zip: "14165",
    city: "Berlin",
  },
  {
    id: "13094",
    zip: "14167",
    city: "Berlin",
  },
  {
    id: "13095",
    zip: "14169",
    city: "Berlin",
  },
  {
    id: "13096",
    zip: "14193",
    city: "Berlin",
  },
  {
    id: "13097",
    zip: "14195",
    city: "Berlin",
  },
  {
    id: "13098",
    zip: "14197",
    city: "Berlin",
  },
  {
    id: "13099",
    zip: "14199",
    city: "Berlin",
  },
  {
    id: "5676",
    zip: "14467",
    city: "Potsdam",
  },
  {
    id: "5677",
    zip: "14469",
    city: "Potsdam",
  },
  {
    id: "5678",
    zip: "14471",
    city: "Potsdam",
  },
  {
    id: "5679",
    zip: "14473",
    city: "Potsdam",
  },
  {
    id: "5680",
    zip: "14476",
    city: "Potsdam",
  },
  {
    id: "5681",
    zip: "14478",
    city: "Potsdam",
  },
  {
    id: "5682",
    zip: "14480",
    city: "Potsdam",
  },
  {
    id: "5683",
    zip: "14482",
    city: "Potsdam",
  },
  {
    id: "5684",
    zip: "14513",
    city: "Teltow",
  },
  {
    id: "5685",
    zip: "14532",
    city: "Kleinmachnow",
  },
  {
    id: "12867",
    zip: "14542",
    city: "Werder / Havel",
  },
  {
    id: "5686",
    zip: "14547",
    city: "Beelitz",
  },
  {
    id: "5687",
    zip: "14548",
    city: "Caputh",
  },
  {
    id: "5688",
    zip: "14550",
    city: "Groß Kreutz",
  },
  {
    id: "5689",
    zip: "14552",
    city: "Michendorf",
  },
  {
    id: "13100",
    zip: "14554",
    city: "Seddiner See",
  },
  {
    id: "5690",
    zip: "14557",
    city: "Langerwisch",
  },
  {
    id: "5691",
    zip: "14558",
    city: "Bergholz-Rehbrücke",
  },
  {
    id: "5692",
    zip: "14612",
    city: "Falkensee",
  },
  {
    id: "5693",
    zip: "14621",
    city: "Schönwalde",
  },
  {
    id: "5694",
    zip: "14624",
    city: "Dallgow",
  },
  {
    id: "5695",
    zip: "14627",
    city: "Elstal",
  },
  {
    id: "5696",
    zip: "14641",
    city: "Nauen",
  },
  {
    id: "5697",
    zip: "14656",
    city: "Brieselang",
  },
  {
    id: "5698",
    zip: "14662",
    city: "Friesack",
  },
  {
    id: "5699",
    zip: "14669",
    city: "Ketzin",
  },
  {
    id: "5700",
    zip: "14712",
    city: "Rathenow",
  },
  {
    id: "5701",
    zip: "14715",
    city: "Milow",
  },
  {
    id: "5702",
    zip: "14727",
    city: "Premnitz",
  },
  {
    id: "5703",
    zip: "14728",
    city: "Rhinow",
  },
  {
    id: "12827",
    zip: "14770",
    city: "Brandenburg / Havel",
  },
  {
    id: "12828",
    zip: "14772",
    city: "Brandenburg / Havel",
  },
  {
    id: "12829",
    zip: "14774",
    city: "Brandenburg / Havel",
  },
  {
    id: "12830",
    zip: "14776",
    city: "Brandenburg / Havel",
  },
  {
    id: "12831",
    zip: "14778",
    city: "Brandenburg / Havel",
  },
  {
    id: "5704",
    zip: "14789",
    city: "Wusterwitz",
  },
  {
    id: "5705",
    zip: "14793",
    city: "Ziesar",
  },
  {
    id: "5706",
    zip: "14797",
    city: "Lehnin",
  },
  {
    id: "5707",
    zip: "14798",
    city: "Pritzerbe",
  },
  {
    id: "5708",
    zip: "14806",
    city: "Belzig",
  },
  {
    id: "5709",
    zip: "14822",
    city: "Brück",
  },
  {
    id: "5710",
    zip: "14823",
    city: "Niemegk",
  },
  {
    id: "5711",
    zip: "14827",
    city: "Wiesenburg",
  },
  {
    id: "5712",
    zip: "14828",
    city: "Görzke",
  },
  {
    id: "5713",
    zip: "14913",
    city: "Jüterbog",
  },
  {
    id: "5714",
    zip: "14929",
    city: "Treuenbrietzen",
  },
  {
    id: "5715",
    zip: "14943",
    city: "Luckenwalde",
  },
  {
    id: "5716",
    zip: "14947",
    city: "Nuthe-Urstromtal",
  },
  {
    id: "5717",
    zip: "14959",
    city: "Trebbin",
  },
  {
    id: "5718",
    zip: "14974",
    city: "Ludwigsfelde",
  },
  {
    id: "5719",
    zip: "14979",
    city: "Großbeeren",
  },
  {
    id: "12832",
    zip: "15230",
    city: "Frankfurt / Oder",
  },
  {
    id: "12833",
    zip: "15232",
    city: "Frankfurt / Oder",
  },
  {
    id: "12834",
    zip: "15234",
    city: "Frankfurt / Oder",
  },
  {
    id: "12835",
    zip: "15236",
    city: "Frankfurt / Oder",
  },
  {
    id: "5720",
    zip: "15295",
    city: "Brieskow-Finkenheerd",
  },
  {
    id: "5721",
    zip: "15299",
    city: "Müllrose",
  },
  {
    id: "5722",
    zip: "15306",
    city: "Seelow",
  },
  {
    id: "5723",
    zip: "15320",
    city: "Neuhardenberg",
  },
  {
    id: "5724",
    zip: "15324",
    city: "Letschin",
  },
  {
    id: "5725",
    zip: "15326",
    city: "Lebus",
  },
  {
    id: "5726",
    zip: "15328",
    city: "Manschnow",
  },
  {
    id: "5727",
    zip: "15344",
    city: "Strausberg",
  },
  {
    id: "5728",
    zip: "15345",
    city: "Strausberg",
  },
  {
    id: "13136",
    zip: "15366",
    city: "Neuenhagen bei Berlin",
  },
  {
    id: "5729",
    zip: "15370",
    city: "Fredersdorf-Vogelsdorf",
  },
  {
    id: "5730",
    zip: "15374",
    city: "Müncheberg",
  },
  {
    id: "13343",
    zip: "15377",
    city: "Buckow / Märkische Schweiz",
  },
  {
    id: "5731",
    zip: "15378",
    city: "Hennickendorf",
  },
  {
    id: "12868",
    zip: "15517",
    city: "Fürstenwalde / Spree",
  },
  {
    id: "12869",
    zip: "15518",
    city: "Fürstenwalde / Spree",
  },
  {
    id: "5732",
    zip: "15526",
    city: "Bad Saarow-Pieskow",
  },
  {
    id: "5733",
    zip: "15528",
    city: "Spreenhagen",
  },
  {
    id: "5734",
    zip: "15537",
    city: "Erkner",
  },
  {
    id: "13137",
    zip: "15562",
    city: "Rüdersdorf bei Berlin",
  },
  {
    id: "13138",
    zip: "15566",
    city: "Schöneiche bei Berlin",
  },
  {
    id: "5738",
    zip: "15569",
    city: "Woltersdorf",
  },
  {
    id: "5739",
    zip: "15711",
    city: "Königs Wusterhausen",
  },
  {
    id: "153662",
    zip: "15712",
    city: "Königs Wusterhausen",
  },
  {
    id: "153664",
    zip: "15713",
    city: "Königs Wusterhausen",
  },
  {
    id: "13139",
    zip: "15732",
    city: "Schulzendorf bei Eichenwade",
  },
  {
    id: "5740",
    zip: "15738",
    city: "Zeuthen",
  },
  {
    id: "5741",
    zip: "15741",
    city: "Bestensee",
  },
  {
    id: "5742",
    zip: "15745",
    city: "Wildau",
  },
  {
    id: "5743",
    zip: "15746",
    city: "Groß Köris",
  },
  {
    id: "5744",
    zip: "15748",
    city: "Märkisch Buchholz",
  },
  {
    id: "5745",
    zip: "15749",
    city: "Mittenwalde",
  },
  {
    id: "5735",
    zip: "15751",
    city: "Niederlehme",
  },
  {
    id: "5736",
    zip: "15752",
    city: "Prieros",
  },
  {
    id: "5737",
    zip: "15754",
    city: "Senzig",
  },
  {
    id: "5674",
    zip: "15755",
    city: "Teupitz",
  },
  {
    id: "5675",
    zip: "15757",
    city: "Halbe",
  },
  {
    id: "5746",
    zip: "15758",
    city: "Zernsdorf",
  },
  {
    id: "5747",
    zip: "15806",
    city: "Zossen",
  },
  {
    id: "5748",
    zip: "15827",
    city: "Blankenfelde",
  },
  {
    id: "5749",
    zip: "15831",
    city: "Mahlow",
  },
  {
    id: "5750",
    zip: "15834",
    city: "Rangsdorf",
  },
  {
    id: "5751",
    zip: "15837",
    city: "Baruth",
  },
  {
    id: "5752",
    zip: "15838",
    city: "Wünsdorf",
  },
  {
    id: "5753",
    zip: "15848",
    city: "Beeskow",
  },
  {
    id: "5754",
    zip: "15859",
    city: "Storkow",
  },
  {
    id: "5755",
    zip: "15864",
    city: "Wendisch Rietz",
  },
  {
    id: "5756",
    zip: "15868",
    city: "Lieberose",
  },
  {
    id: "5757",
    zip: "15890",
    city: "Eisenhüttenstadt",
  },
  {
    id: "5758",
    zip: "15898",
    city: "Neuzelle",
  },
  {
    id: "12870",
    zip: "15907",
    city: "Lübben / Spreewald",
  },
  {
    id: "5759",
    zip: "15910",
    city: "Schönwalde",
  },
  {
    id: "5760",
    zip: "15913",
    city: "Straupitz",
  },
  {
    id: "5761",
    zip: "15926",
    city: "Luckau",
  },
  {
    id: "5762",
    zip: "15936",
    city: "Dahme",
  },
  {
    id: "5763",
    zip: "15938",
    city: "Golßen",
  },
  {
    id: "5764",
    zip: "16225",
    city: "Eberswalde",
  },
  {
    id: "5765",
    zip: "16227",
    city: "Eberswalde",
  },
  {
    id: "5766",
    zip: "16230",
    city: "Eberswalde",
  },
  {
    id: "5767",
    zip: "16244",
    city: "Finowfurt",
  },
  {
    id: "5768",
    zip: "16247",
    city: "Joachimsthal",
  },
  {
    id: "5769",
    zip: "16248",
    city: "Oderberg",
  },
  {
    id: "5770",
    zip: "16259",
    city: "Bad Freienwalde",
  },
  {
    id: "5771",
    zip: "16269",
    city: "Wriezen",
  },
  {
    id: "5772",
    zip: "16278",
    city: "Angermünde",
  },
  {
    id: "12871",
    zip: "16303",
    city: "Schwedt / Oder",
  },
  {
    id: "12872",
    zip: "16306",
    city: "Schwedt / Oder",
  },
  {
    id: "12873",
    zip: "16307",
    city: "Gartz / Oder",
  },
  {
    id: "13140",
    zip: "16321",
    city: "Bernau bei Berlin",
  },
  {
    id: "5773",
    zip: "16341",
    city: "Zepernick",
  },
  {
    id: "5774",
    zip: "16348",
    city: "Klosterfelde",
  },
  {
    id: "5775",
    zip: "16352",
    city: "Basdorf",
  },
  {
    id: "5776",
    zip: "16356",
    city: "Werneuchen",
  },
  {
    id: "5777",
    zip: "16359",
    city: "Biesenthal",
  },
  {
    id: "5778",
    zip: "16515",
    city: "Oranienburg",
  },
  {
    id: "13141",
    zip: "16540",
    city: "Hohen Neuendorf bei Berlin",
  },
  {
    id: "13144",
    zip: "16547",
    city: "Birkenwerder bei Berlin",
  },
  {
    id: "12874",
    zip: "16548",
    city: "Glienicke / Nordbahn",
  },
  {
    id: "5779",
    zip: "16552",
    city: "Schildow",
  },
  {
    id: "13142",
    zip: "16556",
    city: "Hohen Neuendorf bei Berlin",
  },
  {
    id: "5780",
    zip: "16559",
    city: "Liebenwalde",
  },
  {
    id: "13143",
    zip: "16562",
    city: "Hohen Neuendorf bei Berlin",
  },
  {
    id: "12875",
    zip: "16565",
    city: "Lehnitz / Nordbahn",
  },
  {
    id: "5782",
    zip: "16567",
    city: "Mühlenbeck",
  },
  {
    id: "5783",
    zip: "16727",
    city: "Velten",
  },
  {
    id: "13145",
    zip: "16761",
    city: "Hennigsdorf bei Berlin",
  },
  {
    id: "5784",
    zip: "16766",
    city: "Kremmen",
  },
  {
    id: "5785",
    zip: "16767",
    city: "Leegebruch",
  },
  {
    id: "5786",
    zip: "16775",
    city: "Gransee",
  },
  {
    id: "5787",
    zip: "16792",
    city: "Zehdenick",
  },
  {
    id: "5788",
    zip: "16798",
    city: "Fürstenberg",
  },
  {
    id: "5789",
    zip: "16816",
    city: "Neuruppin",
  },
  {
    id: "5790",
    zip: "16818",
    city: "Neuruppin",
  },
  {
    id: "5791",
    zip: "16827",
    city: "Neuruppin",
  },
  {
    id: "5792",
    zip: "16831",
    city: "Rheinsberg",
  },
  {
    id: "5793",
    zip: "16833",
    city: "Fehrbellin",
  },
  {
    id: "5794",
    zip: "16835",
    city: "Lindow",
  },
  {
    id: "5795",
    zip: "16837",
    city: "Flecken Zechlin",
  },
  {
    id: "12876",
    zip: "16845",
    city: "Neustadt / Dosse",
  },
  {
    id: "5796",
    zip: "16866",
    city: "Kyritz",
  },
  {
    id: "5797",
    zip: "16868",
    city: "Wusterhausen / Dosse",
  },
  {
    id: "5798",
    zip: "16909",
    city: "Wittstock",
  },
  {
    id: "5799",
    zip: "16918",
    city: "Freyenstein",
  },
  {
    id: "5800",
    zip: "16928",
    city: "Pritzwalk",
  },
  {
    id: "5801",
    zip: "16945",
    city: "Meyenburg",
  },
  {
    id: "5802",
    zip: "16949",
    city: "Putlitz",
  },
  {
    id: "5803",
    zip: "17033",
    city: "Neubrandenburg",
  },
  {
    id: "5781",
    zip: "17034",
    city: "Neubrandenburg",
  },
  {
    id: "5804",
    zip: "17036",
    city: "Neubrandenburg",
  },
  {
    id: "5805",
    zip: "17039",
    city: "Brunn",
  },
  {
    id: "5806",
    zip: "17087",
    city: "Altentreptow",
  },
  {
    id: "5807",
    zip: "17089",
    city: "Burow",
  },
  {
    id: "5808",
    zip: "17091",
    city: "Rosenow",
  },
  {
    id: "5809",
    zip: "17094",
    city: "Burg Stargard",
  },
  {
    id: "5810",
    zip: "17098",
    city: "Friedland",
  },
  {
    id: "5811",
    zip: "17099",
    city: "Kotelow",
  },
  {
    id: "5812",
    zip: "17109",
    city: "Demmin",
  },
  {
    id: "5813",
    zip: "17111",
    city: "Demmin",
  },
  {
    id: "5814",
    zip: "17121",
    city: "Loitz",
  },
  {
    id: "5815",
    zip: "17126",
    city: "Jarmen",
  },
  {
    id: "5816",
    zip: "17129",
    city: "Bentzin",
  },
  {
    id: "5817",
    zip: "17139",
    city: "Malchin",
  },
  {
    id: "5818",
    zip: "17153",
    city: "Stavenhagen",
  },
  {
    id: "5819",
    zip: "17154",
    city: "Neukalen",
  },
  {
    id: "5820",
    zip: "17159",
    city: "Dargun",
  },
  {
    id: "5821",
    zip: "17166",
    city: "Teterow",
  },
  {
    id: "5822",
    zip: "17168",
    city: "Jördenstorf",
  },
  {
    id: "5823",
    zip: "17179",
    city: "Gnoien",
  },
  {
    id: "12877",
    zip: "17192",
    city: "Waren / Müritz",
  },
  {
    id: "5824",
    zip: "17194",
    city: "Grabowhöfe",
  },
  {
    id: "12878",
    zip: "17207",
    city: "Röbel / Müritz",
  },
  {
    id: "5825",
    zip: "17209",
    city: "Wredenhagen",
  },
  {
    id: "5826",
    zip: "17213",
    city: "Malchow",
  },
  {
    id: "5827",
    zip: "17214",
    city: "Nossentiner Hütte",
  },
  {
    id: "5828",
    zip: "17217",
    city: "Penzlin",
  },
  {
    id: "5829",
    zip: "17219",
    city: "Möllenhagen",
  },
  {
    id: "5830",
    zip: "17235",
    city: "Neustrelitz",
  },
  {
    id: "5831",
    zip: "17237",
    city: "Blankensee",
  },
  {
    id: "5832",
    zip: "17248",
    city: "Rechlin",
  },
  {
    id: "5833",
    zip: "17252",
    city: "Mirow",
  },
  {
    id: "5834",
    zip: "17255",
    city: "Wesenberg",
  },
  {
    id: "5835",
    zip: "17258",
    city: "Feldberg",
  },
  {
    id: "5836",
    zip: "17259",
    city: "Lichtenberg",
  },
  {
    id: "5837",
    zip: "17268",
    city: "Templin",
  },
  {
    id: "5838",
    zip: "17279",
    city: "Lychen",
  },
  {
    id: "5839",
    zip: "17291",
    city: "Prenzlau",
  },
  {
    id: "5840",
    zip: "17309",
    city: "Pasewalk",
  },
  {
    id: "5841",
    zip: "17321",
    city: "Löcknitz",
  },
  {
    id: "5842",
    zip: "17322",
    city: "Grambow",
  },
  {
    id: "5843",
    zip: "17326",
    city: "Brüssow",
  },
  {
    id: "5844",
    zip: "17328",
    city: "Penkun",
  },
  {
    id: "5845",
    zip: "17329",
    city: "Nadrensee",
  },
  {
    id: "5846",
    zip: "17335",
    city: "Strasburg",
  },
  {
    id: "5847",
    zip: "17337",
    city: "Trebenow",
  },
  {
    id: "5848",
    zip: "17348",
    city: "Woldegk",
  },
  {
    id: "5849",
    zip: "17349",
    city: "Groß-Miltzow",
  },
  {
    id: "5850",
    zip: "17358",
    city: "Torgelow",
  },
  {
    id: "5851",
    zip: "17367",
    city: "Eggesin",
  },
  {
    id: "5852",
    zip: "17373",
    city: "Ueckermünde",
  },
  {
    id: "5853",
    zip: "17375",
    city: "Ueckermünde",
  },
  {
    id: "5854",
    zip: "17379",
    city: "Ferdinandshof",
  },
  {
    id: "5855",
    zip: "17389",
    city: "Anklam",
  },
  {
    id: "5856",
    zip: "17390",
    city: "Klein Bünzow",
  },
  {
    id: "5857",
    zip: "17391",
    city: "Krien",
  },
  {
    id: "5858",
    zip: "17392",
    city: "Spantekow",
  },
  {
    id: "5859",
    zip: "17398",
    city: "Ducherow",
  },
  {
    id: "5860",
    zip: "17406",
    city: "Usedom",
  },
  {
    id: "5861",
    zip: "17419",
    city: "Ahlbeck",
  },
  {
    id: "5862",
    zip: "17424",
    city: "Heringsdorf",
  },
  {
    id: "5863",
    zip: "17429",
    city: "Bansin",
  },
  {
    id: "5864",
    zip: "17438",
    city: "Wolgast",
  },
  {
    id: "5865",
    zip: "17440",
    city: "Kröslin",
  },
  {
    id: "5866",
    zip: "17449",
    city: "Karlshagen",
  },
  {
    id: "5867",
    zip: "17454",
    city: "Zinnowitz",
  },
  {
    id: "5868",
    zip: "17459",
    city: "Koserow",
  },
  {
    id: "5869",
    zip: "17489",
    city: "Greifswald",
  },
  {
    id: "5870",
    zip: "17491",
    city: "Greifswald",
  },
  {
    id: "5889",
    zip: "17493",
    city: "Greifswald",
  },
  {
    id: "5890",
    zip: "17495",
    city: "Karlsburg",
  },
  {
    id: "5891",
    zip: "17498",
    city: "Neuenkirchen",
  },
  {
    id: "5892",
    zip: "17506",
    city: "Gützkow",
  },
  {
    id: "5893",
    zip: "17509",
    city: "Lubmin",
  },
  {
    id: "5894",
    zip: "18055",
    city: "Rostock",
  },
  {
    id: "5895",
    zip: "18057",
    city: "Rostock",
  },
  {
    id: "5896",
    zip: "18059",
    city: "Rostock",
  },
  {
    id: "5897",
    zip: "18069",
    city: "Rostock",
  },
  {
    id: "5898",
    zip: "18106",
    city: "Rostock",
  },
  {
    id: "5899",
    zip: "18107",
    city: "Rostock",
  },
  {
    id: "5900",
    zip: "18109",
    city: "Rostock",
  },
  {
    id: "5901",
    zip: "18119",
    city: "Rostock",
  },
  {
    id: "5902",
    zip: "18146",
    city: "Rostock",
  },
  {
    id: "5903",
    zip: "18147",
    city: "Rostock",
  },
  {
    id: "5904",
    zip: "18181",
    city: "Graal-Müritz",
  },
  {
    id: "5905",
    zip: "18182",
    city: "Gelbensande",
  },
  {
    id: "5906",
    zip: "18184",
    city: "Broderstorf",
  },
  {
    id: "5907",
    zip: "18190",
    city: "Sanitz",
  },
  {
    id: "5908",
    zip: "18195",
    city: "Tessin",
  },
  {
    id: "5909",
    zip: "18196",
    city: "Dummerstorf",
  },
  {
    id: "5910",
    zip: "18198",
    city: "Kritzmow",
  },
  {
    id: "5911",
    zip: "18209",
    city: "Bad Doberan",
  },
  {
    id: "5912",
    zip: "18211",
    city: "Börgerende-Rethwisch",
  },
  {
    id: "5913",
    zip: "18225",
    city: "Kühlungsborn",
  },
  {
    id: "5914",
    zip: "18230",
    city: "Rerik",
  },
  {
    id: "5915",
    zip: "18233",
    city: "Neubukow",
  },
  {
    id: "5916",
    zip: "18236",
    city: "Kröpelin",
  },
  {
    id: "5917",
    zip: "18239",
    city: "Satow",
  },
  {
    id: "5918",
    zip: "18246",
    city: "Bützow",
  },
  {
    id: "5919",
    zip: "18249",
    city: "Warnow",
  },
  {
    id: "5920",
    zip: "18258",
    city: "Schwaan",
  },
  {
    id: "5921",
    zip: "18273",
    city: "Güstrow",
  },
  {
    id: "5922",
    zip: "18276",
    city: "Güstrow",
  },
  {
    id: "5923",
    zip: "18279",
    city: "Lalendorf",
  },
  {
    id: "5924",
    zip: "18292",
    city: "Krakow am See",
  },
  {
    id: "5925",
    zip: "18299",
    city: "Laage",
  },
  {
    id: "5926",
    zip: "18311",
    city: "Ribnitz-Damgarten",
  },
  {
    id: "5927",
    zip: "18314",
    city: "Löbnitz",
  },
  {
    id: "5928",
    zip: "18317",
    city: "Saal",
  },
  {
    id: "5929",
    zip: "18320",
    city: "Trinwillershagen",
  },
  {
    id: "5930",
    zip: "18334",
    city: "Bad Sülze",
  },
  {
    id: "5931",
    zip: "18337",
    city: "Marlow",
  },
  {
    id: "5932",
    zip: "18347",
    city: "Dierhagen",
  },
  {
    id: "5933",
    zip: "18356",
    city: "Barth",
  },
  {
    id: "13146",
    zip: "18374",
    city: "Zingst am Darß",
  },
  {
    id: "13147",
    zip: "18375",
    city: "Prerow am Darß",
  },
  {
    id: "5934",
    zip: "18435",
    city: "Stralsund",
  },
  {
    id: "5935",
    zip: "18437",
    city: "Stralsund",
  },
  {
    id: "5871",
    zip: "18439",
    city: "Stralsund",
  },
  {
    id: "5872",
    zip: "18442",
    city: "Niepars",
  },
  {
    id: "5873",
    zip: "18445",
    city: "Prohn",
  },
  {
    id: "5874",
    zip: "18461",
    city: "Franzburg",
  },
  {
    id: "5875",
    zip: "18465",
    city: "Tribsees",
  },
  {
    id: "5876",
    zip: "18469",
    city: "Velgast",
  },
  {
    id: "5877",
    zip: "18507",
    city: "Grimmen",
  },
  {
    id: "5878",
    zip: "18510",
    city: "Wittenhagen",
  },
  {
    id: "5879",
    zip: "18513",
    city: "Glewitz",
  },
  {
    id: "5880",
    zip: "18516",
    city: "Rakow",
  },
  {
    id: "5881",
    zip: "18519",
    city: "Miltzow",
  },
  {
    id: "12879",
    zip: "18528",
    city: "Bergen / Rügen",
  },
  {
    id: "5882",
    zip: "18546",
    city: "Sassnitz",
  },
  {
    id: "5883",
    zip: "18551",
    city: "Sagard",
  },
  {
    id: "5884",
    zip: "18556",
    city: "Dranske",
  },
  {
    id: "5885",
    zip: "18565",
    city: "Insel Hiddensee",
  },
  {
    id: "5886",
    zip: "18569",
    city: "Gingst",
  },
  {
    id: "5887",
    zip: "18573",
    city: "Samtens",
  },
  {
    id: "12880",
    zip: "18574",
    city: "Garz / Rügen",
  },
  {
    id: "5888",
    zip: "18581",
    city: "Putbus",
  },
  {
    id: "5936",
    zip: "18586",
    city: "Sellin",
  },
  {
    id: "5937",
    zip: "18609",
    city: "Binz",
  },
  {
    id: "5938",
    zip: "19053",
    city: "Schwerin",
  },
  {
    id: "5939",
    zip: "19055",
    city: "Schwerin",
  },
  {
    id: "5940",
    zip: "19057",
    city: "Schwerin",
  },
  {
    id: "5941",
    zip: "19059",
    city: "Schwerin",
  },
  {
    id: "5942",
    zip: "19061",
    city: "Schwerin",
  },
  {
    id: "5943",
    zip: "19063",
    city: "Schwerin",
  },
  {
    id: "5944",
    zip: "19065",
    city: "Pinnow",
  },
  {
    id: "5945",
    zip: "19067",
    city: "Leezen",
  },
  {
    id: "5946",
    zip: "19069",
    city: "Lübstorf",
  },
  {
    id: "5947",
    zip: "19071",
    city: "Brüsewitz",
  },
  {
    id: "5948",
    zip: "19073",
    city: "Wittenförden",
  },
  {
    id: "5949",
    zip: "19075",
    city: "Pampow",
  },
  {
    id: "5950",
    zip: "19077",
    city: "Rastow",
  },
  {
    id: "5951",
    zip: "19079",
    city: "Banzkow",
  },
  {
    id: "5952",
    zip: "19086",
    city: "Plate",
  },
  {
    id: "5953",
    zip: "19089",
    city: "Crivitz",
  },
  {
    id: "5954",
    zip: "19205",
    city: "Gadebusch",
  },
  {
    id: "5955",
    zip: "19209",
    city: "Lützow",
  },
  {
    id: "5956",
    zip: "19217",
    city: "Rehna",
  },
  {
    id: "5957",
    zip: "19230",
    city: "Hagenow",
  },
  {
    id: "5958",
    zip: "19243",
    city: "Wittenburg",
  },
  {
    id: "5959",
    zip: "19246",
    city: "Zarrentin",
  },
  {
    id: "5960",
    zip: "19249",
    city: "Lübtheen",
  },
  {
    id: "12881",
    zip: "19258",
    city: "Boizenburg / Elbe",
  },
  {
    id: "5961",
    zip: "19260",
    city: "Vellahn",
  },
  {
    id: "5962",
    zip: "19273",
    city: "Amt Neuhaus",
  },
  {
    id: "5963",
    zip: "19288",
    city: "Ludwigslust",
  },
  {
    id: "5964",
    zip: "19294",
    city: "Neu Kaliß",
  },
  {
    id: "5965",
    zip: "19300",
    city: "Grabow",
  },
  {
    id: "5966",
    zip: "19303",
    city: "Dömitz",
  },
  {
    id: "5967",
    zip: "19306",
    city: "Neustadt-Glewe",
  },
  {
    id: "12882",
    zip: "19309",
    city: "Lenzen / Elbe",
  },
  {
    id: "5968",
    zip: "19322",
    city: "Wittenberge",
  },
  {
    id: "5969",
    zip: "19336",
    city: "Bad Wilsnack",
  },
  {
    id: "5970",
    zip: "19339",
    city: "Glöwen",
  },
  {
    id: "5971",
    zip: "19348",
    city: "Perleberg",
  },
  {
    id: "5972",
    zip: "19357",
    city: "Karstädt",
  },
  {
    id: "5973",
    zip: "19370",
    city: "Parchim",
  },
  {
    id: "5974",
    zip: "19372",
    city: "Spornitz",
  },
  {
    id: "5975",
    zip: "19374",
    city: "Mestlin",
  },
  {
    id: "5976",
    zip: "19376",
    city: "Siggelkow",
  },
  {
    id: "5977",
    zip: "19386",
    city: "Lübz",
  },
  {
    id: "5978",
    zip: "19395",
    city: "Plau am See",
  },
  {
    id: "5979",
    zip: "19399",
    city: "Goldberg",
  },
  {
    id: "5980",
    zip: "19406",
    city: "Sternberg",
  },
  {
    id: "5981",
    zip: "19412",
    city: "Brüel",
  },
  {
    id: "5982",
    zip: "19417",
    city: "Warin",
  },
  {
    id: "5983",
    zip: "20095",
    city: "Hamburg",
  },
  {
    id: "5984",
    zip: "20097",
    city: "Hamburg",
  },
  {
    id: "5985",
    zip: "20099",
    city: "Hamburg",
  },
  {
    id: "5986",
    zip: "20144",
    city: "Hamburg",
  },
  {
    id: "5987",
    zip: "20146",
    city: "Hamburg",
  },
  {
    id: "5988",
    zip: "20148",
    city: "Hamburg",
  },
  {
    id: "5989",
    zip: "20149",
    city: "Hamburg",
  },
  {
    id: "5990",
    zip: "20249",
    city: "Hamburg",
  },
  {
    id: "5991",
    zip: "20251",
    city: "Hamburg",
  },
  {
    id: "5992",
    zip: "20253",
    city: "Hamburg",
  },
  {
    id: "5993",
    zip: "20255",
    city: "Hamburg",
  },
  {
    id: "5994",
    zip: "20257",
    city: "Hamburg",
  },
  {
    id: "5995",
    zip: "20259",
    city: "Hamburg",
  },
  {
    id: "5996",
    zip: "20354",
    city: "Hamburg",
  },
  {
    id: "5997",
    zip: "20355",
    city: "Hamburg",
  },
  {
    id: "5998",
    zip: "20357",
    city: "Hamburg",
  },
  {
    id: "5999",
    zip: "20359",
    city: "Hamburg",
  },
  {
    id: "6000",
    zip: "20457",
    city: "Hamburg",
  },
  {
    id: "6001",
    zip: "20459",
    city: "Hamburg",
  },
  {
    id: "6002",
    zip: "20535",
    city: "Hamburg",
  },
  {
    id: "6003",
    zip: "20537",
    city: "Hamburg",
  },
  {
    id: "6006",
    zip: "20539",
    city: "Hamburg",
  },
  {
    id: "6007",
    zip: "21029",
    city: "Hamburg",
  },
  {
    id: "6008",
    zip: "21031",
    city: "Hamburg",
  },
  {
    id: "6009",
    zip: "21033",
    city: "Hamburg",
  },
  {
    id: "6004",
    zip: "21035",
    city: "Hamburg",
  },
  {
    id: "6005",
    zip: "21037",
    city: "Hamburg",
  },
  {
    id: "6010",
    zip: "21039",
    city: "Hamburg",
  },
  {
    id: "6011",
    zip: "21073",
    city: "Hamburg",
  },
  {
    id: "6012",
    zip: "21075",
    city: "Hamburg",
  },
  {
    id: "6013",
    zip: "21077",
    city: "Hamburg",
  },
  {
    id: "6014",
    zip: "21079",
    city: "Hamburg",
  },
  {
    id: "6015",
    zip: "21107",
    city: "Hamburg",
  },
  {
    id: "6016",
    zip: "21109",
    city: "Hamburg",
  },
  {
    id: "6017",
    zip: "21129",
    city: "Hamburg",
  },
  {
    id: "6018",
    zip: "21147",
    city: "Hamburg",
  },
  {
    id: "6019",
    zip: "21149",
    city: "Hamburg",
  },
  {
    id: "6020",
    zip: "21217",
    city: "Seevetal",
  },
  {
    id: "6021",
    zip: "21218",
    city: "Seevetal",
  },
  {
    id: "6022",
    zip: "21220",
    city: "Seevetal",
  },
  {
    id: "6023",
    zip: "21224",
    city: "Rosengarten",
  },
  {
    id: "6024",
    zip: "21227",
    city: "Bendestorf",
  },
  {
    id: "6025",
    zip: "21228",
    city: "Harmstorf",
  },
  {
    id: "6026",
    zip: "21244",
    city: "Buchholz in der Nordheide",
  },
  {
    id: "6027",
    zip: "21255",
    city: "Tostedt",
  },
  {
    id: "6028",
    zip: "21256",
    city: "Handeloh",
  },
  {
    id: "6029",
    zip: "21258",
    city: "Heidenau",
  },
  {
    id: "6030",
    zip: "21259",
    city: "Otter",
  },
  {
    id: "6031",
    zip: "21261",
    city: "Welle",
  },
  {
    id: "6032",
    zip: "21266",
    city: "Jesteburg",
  },
  {
    id: "6033",
    zip: "21271",
    city: "Hanstedt",
  },
  {
    id: "6034",
    zip: "21272",
    city: "Egestorf",
  },
  {
    id: "6035",
    zip: "21274",
    city: "Undeloh",
  },
  {
    id: "6036",
    zip: "21279",
    city: "Hollenstedt",
  },
  {
    id: "6037",
    zip: "21335",
    city: "Lüneburg",
  },
  {
    id: "6038",
    zip: "21337",
    city: "Lüneburg",
  },
  {
    id: "6039",
    zip: "21339",
    city: "Lüneburg",
  },
  {
    id: "6040",
    zip: "21354",
    city: "Bleckede",
  },
  {
    id: "6041",
    zip: "21357",
    city: "Bardowick",
  },
  {
    id: "6042",
    zip: "21358",
    city: "Mechtersen",
  },
  {
    id: "6043",
    zip: "21360",
    city: "Vögelsen",
  },
  {
    id: "6044",
    zip: "21365",
    city: "Adendorf",
  },
  {
    id: "6045",
    zip: "21368",
    city: "Dahlenburg",
  },
  {
    id: "6046",
    zip: "21369",
    city: "Nahrendorf",
  },
  {
    id: "6047",
    zip: "21371",
    city: "Tosterglope",
  },
  {
    id: "6048",
    zip: "21376",
    city: "Salzhausen",
  },
  {
    id: "6049",
    zip: "21379",
    city: "Scharnebeck",
  },
  {
    id: "6050",
    zip: "21380",
    city: "Artlenburg",
  },
  {
    id: "6051",
    zip: "21382",
    city: "Brietlingen",
  },
  {
    id: "6052",
    zip: "21385",
    city: "Amelinghausen",
  },
  {
    id: "6053",
    zip: "21386",
    city: "Betzendorf",
  },
  {
    id: "6054",
    zip: "21388",
    city: "Soderstorf",
  },
  {
    id: "6055",
    zip: "21391",
    city: "Reppenstedt",
  },
  {
    id: "6056",
    zip: "21394",
    city: "Kirchgellersen",
  },
  {
    id: "6057",
    zip: "21395",
    city: "Tespe",
  },
  {
    id: "6058",
    zip: "21397",
    city: "Barendorf",
  },
  {
    id: "6059",
    zip: "21398",
    city: "Neetze",
  },
  {
    id: "6060",
    zip: "21400",
    city: "Reinstorf",
  },
  {
    id: "6062",
    zip: "21401",
    city: "Thomasburg",
  },
  {
    id: "6063",
    zip: "21403",
    city: "Wendisch Evern",
  },
  {
    id: "6064",
    zip: "21406",
    city: "Melbeck",
  },
  {
    id: "6065",
    zip: "21407",
    city: "Deutsch Evern",
  },
  {
    id: "6061",
    zip: "21409",
    city: "Embsen",
  },
  {
    id: "6066",
    zip: "21423",
    city: "Winsen (Luhe)",
  },
  {
    id: "6068",
    zip: "21435",
    city: "Stelle",
  },
  {
    id: "6069",
    zip: "21436",
    city: "Marschacht",
  },
  {
    id: "6070",
    zip: "21438",
    city: "Brackel",
  },
  {
    id: "6071",
    zip: "21439",
    city: "Marxen",
  },
  {
    id: "6072",
    zip: "21441",
    city: "Garstedt",
  },
  {
    id: "6073",
    zip: "21442",
    city: "Toppenstedt",
  },
  {
    id: "6074",
    zip: "21444",
    city: "Vierhöfen",
  },
  {
    id: "6067",
    zip: "21445",
    city: "Wulfsen",
  },
  {
    id: "6075",
    zip: "21447",
    city: "Handorf",
  },
  {
    id: "6076",
    zip: "21449",
    city: "Radbruch",
  },
  {
    id: "6077",
    zip: "21465",
    city: "Reinbek",
  },
  {
    id: "12883",
    zip: "21481",
    city: "Lauenburg / Elbe",
  },
  {
    id: "6078",
    zip: "21483",
    city: "Gülzow",
  },
  {
    id: "6079",
    zip: "21493",
    city: "Schwarzenbek",
  },
  {
    id: "6080",
    zip: "21502",
    city: "Geesthacht",
  },
  {
    id: "6081",
    zip: "21509",
    city: "Glinde",
  },
  {
    id: "6082",
    zip: "21514",
    city: "Büchen",
  },
  {
    id: "6083",
    zip: "21516",
    city: "Müssen",
  },
  {
    id: "6084",
    zip: "21521",
    city: "Aumühle",
  },
  {
    id: "6085",
    zip: "21522",
    city: "Hohnstorf (Elbe)",
  },
  {
    id: "6086",
    zip: "21524",
    city: "Brunstorf",
  },
  {
    id: "6087",
    zip: "21526",
    city: "Hohenhorn",
  },
  {
    id: "6088",
    zip: "21527",
    city: "Kollow",
  },
  {
    id: "6089",
    zip: "21529",
    city: "Kröppelshagen-Fahrendorf",
  },
  {
    id: "6090",
    zip: "21614",
    city: "Buxtehude",
  },
  {
    id: "6091",
    zip: "21629",
    city: "Neu Wulmstorf",
  },
  {
    id: "6092",
    zip: "21635",
    city: "Jork",
  },
  {
    id: "6093",
    zip: "21640",
    city: "Horneburg",
  },
  {
    id: "6094",
    zip: "21641",
    city: "Apensen",
  },
  {
    id: "6095",
    zip: "21643",
    city: "Beckdorf",
  },
  {
    id: "6096",
    zip: "21644",
    city: "Sauensiek",
  },
  {
    id: "6097",
    zip: "21646",
    city: "Halvesbostel",
  },
  {
    id: "6098",
    zip: "21647",
    city: "Moisburg",
  },
  {
    id: "6099",
    zip: "21649",
    city: "Regesbostel",
  },
  {
    id: "6100",
    zip: "21680",
    city: "Stade",
  },
  {
    id: "6101",
    zip: "21682",
    city: "Stade",
  },
  {
    id: "6102",
    zip: "21683",
    city: "Stade",
  },
  {
    id: "6103",
    zip: "21684",
    city: "Stade",
  },
  {
    id: "6104",
    zip: "21698",
    city: "Harsefeld",
  },
  {
    id: "6105",
    zip: "21702",
    city: "Ahlerstedt",
  },
  {
    id: "6106",
    zip: "21706",
    city: "Drochtersen",
  },
  {
    id: "6107",
    zip: "21709",
    city: "Himmelpforten",
  },
  {
    id: "6108",
    zip: "21710",
    city: "Engelschoff",
  },
  {
    id: "6109",
    zip: "21712",
    city: "Großenwörden",
  },
  {
    id: "6110",
    zip: "21714",
    city: "Hammah",
  },
  {
    id: "6111",
    zip: "21717",
    city: "Fredenbeck",
  },
  {
    id: "6112",
    zip: "21720",
    city: "Grünendeich",
  },
  {
    id: "6113",
    zip: "21723",
    city: "Hollern-Twielenfleth",
  },
  {
    id: "6114",
    zip: "21726",
    city: "Oldendorf",
  },
  {
    id: "6115",
    zip: "21727",
    city: "Estorf",
  },
  {
    id: "6116",
    zip: "21729",
    city: "Freiburg (Elbe)",
  },
  {
    id: "6117",
    zip: "21730",
    city: "Balje",
  },
  {
    id: "6118",
    zip: "21732",
    city: "Krummendeich",
  },
  {
    id: "6119",
    zip: "21734",
    city: "Oederquart",
  },
  {
    id: "6120",
    zip: "21737",
    city: "Wischhafen",
  },
  {
    id: "6121",
    zip: "21739",
    city: "Dollern",
  },
  {
    id: "6122",
    zip: "21745",
    city: "Hemmoor",
  },
  {
    id: "6123",
    zip: "21755",
    city: "Hechthausen",
  },
  {
    id: "6124",
    zip: "21756",
    city: "Osten",
  },
  {
    id: "6125",
    zip: "21762",
    city: "Otterndorf",
  },
  {
    id: "6126",
    zip: "21763",
    city: "Neuenkirchen",
  },
  {
    id: "6127",
    zip: "21765",
    city: "Nordleda",
  },
  {
    id: "6128",
    zip: "21769",
    city: "Lamstedt",
  },
  {
    id: "6129",
    zip: "21770",
    city: "Mittelstenahe",
  },
  {
    id: "6130",
    zip: "21772",
    city: "Stinstedt",
  },
  {
    id: "6131",
    zip: "21775",
    city: "Ihlienworth",
  },
  {
    id: "6132",
    zip: "21776",
    city: "Wanna",
  },
  {
    id: "6133",
    zip: "21781",
    city: "Cadenberge",
  },
  {
    id: "6134",
    zip: "21782",
    city: "Bülkau",
  },
  {
    id: "6135",
    zip: "21784",
    city: "Geversdorf",
  },
  {
    id: "6136",
    zip: "21785",
    city: "Neuhaus (Oste)",
  },
  {
    id: "6137",
    zip: "21787",
    city: "Oberndorf",
  },
  {
    id: "6138",
    zip: "21789",
    city: "Wingst",
  },
  {
    id: "6139",
    zip: "22041",
    city: "Hamburg",
  },
  {
    id: "6140",
    zip: "22043",
    city: "Hamburg",
  },
  {
    id: "6141",
    zip: "22045",
    city: "Hamburg",
  },
  {
    id: "6142",
    zip: "22047",
    city: "Hamburg",
  },
  {
    id: "6143",
    zip: "22049",
    city: "Hamburg",
  },
  {
    id: "6144",
    zip: "22081",
    city: "Hamburg",
  },
  {
    id: "6145",
    zip: "22083",
    city: "Hamburg",
  },
  {
    id: "6146",
    zip: "22085",
    city: "Hamburg",
  },
  {
    id: "6147",
    zip: "22087",
    city: "Hamburg",
  },
  {
    id: "6148",
    zip: "22089",
    city: "Hamburg",
  },
  {
    id: "6149",
    zip: "22111",
    city: "Hamburg",
  },
  {
    id: "6150",
    zip: "22113",
    city: "Oststeinbek",
  },
  {
    id: "6151",
    zip: "22115",
    city: "Hamburg",
  },
  {
    id: "6152",
    zip: "22117",
    city: "Hamburg",
  },
  {
    id: "6153",
    zip: "22119",
    city: "Hamburg",
  },
  {
    id: "6154",
    zip: "22143",
    city: "Hamburg",
  },
  {
    id: "6155",
    zip: "22145",
    city: "Hamburg",
  },
  {
    id: "6156",
    zip: "22147",
    city: "Hamburg",
  },
  {
    id: "6157",
    zip: "22149",
    city: "Hamburg",
  },
  {
    id: "6158",
    zip: "22159",
    city: "Hamburg",
  },
  {
    id: "6159",
    zip: "22175",
    city: "Hamburg",
  },
  {
    id: "6160",
    zip: "22177",
    city: "Hamburg",
  },
  {
    id: "6161",
    zip: "22179",
    city: "Hamburg",
  },
  {
    id: "6162",
    zip: "22297",
    city: "Hamburg",
  },
  {
    id: "6164",
    zip: "22299",
    city: "Hamburg",
  },
  {
    id: "6165",
    zip: "22301",
    city: "Hamburg",
  },
  {
    id: "6166",
    zip: "22303",
    city: "Hamburg",
  },
  {
    id: "6167",
    zip: "22305",
    city: "Hamburg",
  },
  {
    id: "6163",
    zip: "22307",
    city: "Hamburg",
  },
  {
    id: "6168",
    zip: "22309",
    city: "Hamburg",
  },
  {
    id: "6169",
    zip: "22335",
    city: "Hamburg",
  },
  {
    id: "6170",
    zip: "22337",
    city: "Hamburg",
  },
  {
    id: "6171",
    zip: "22339",
    city: "Hamburg",
  },
  {
    id: "6172",
    zip: "22359",
    city: "Hamburg",
  },
  {
    id: "6173",
    zip: "22391",
    city: "Hamburg",
  },
  {
    id: "6174",
    zip: "22393",
    city: "Hamburg",
  },
  {
    id: "6175",
    zip: "22395",
    city: "Hamburg",
  },
  {
    id: "6176",
    zip: "22397",
    city: "Hamburg",
  },
  {
    id: "6177",
    zip: "22399",
    city: "Hamburg",
  },
  {
    id: "6178",
    zip: "22415",
    city: "Hamburg",
  },
  {
    id: "6179",
    zip: "22417",
    city: "Hamburg",
  },
  {
    id: "6180",
    zip: "22419",
    city: "Hamburg",
  },
  {
    id: "6181",
    zip: "22453",
    city: "Hamburg",
  },
  {
    id: "6182",
    zip: "22455",
    city: "Hamburg",
  },
  {
    id: "6183",
    zip: "22457",
    city: "Hamburg",
  },
  {
    id: "6184",
    zip: "22459",
    city: "Hamburg",
  },
  {
    id: "6185",
    zip: "22523",
    city: "Hamburg",
  },
  {
    id: "6186",
    zip: "22525",
    city: "Hamburg",
  },
  {
    id: "6187",
    zip: "22527",
    city: "Hamburg",
  },
  {
    id: "6188",
    zip: "22529",
    city: "Hamburg",
  },
  {
    id: "6189",
    zip: "22547",
    city: "Hamburg",
  },
  {
    id: "6190",
    zip: "22549",
    city: "Hamburg",
  },
  {
    id: "6191",
    zip: "22559",
    city: "Hamburg",
  },
  {
    id: "6192",
    zip: "22587",
    city: "Hamburg",
  },
  {
    id: "6193",
    zip: "22589",
    city: "Hamburg",
  },
  {
    id: "6194",
    zip: "22605",
    city: "Hamburg",
  },
  {
    id: "6195",
    zip: "22607",
    city: "Hamburg",
  },
  {
    id: "6196",
    zip: "22609",
    city: "Hamburg",
  },
  {
    id: "6197",
    zip: "22761",
    city: "Hamburg",
  },
  {
    id: "6198",
    zip: "22763",
    city: "Hamburg",
  },
  {
    id: "6199",
    zip: "22765",
    city: "Hamburg",
  },
  {
    id: "6200",
    zip: "22767",
    city: "Hamburg",
  },
  {
    id: "6201",
    zip: "22769",
    city: "Hamburg",
  },
  {
    id: "6202",
    zip: "22844",
    city: "Norderstedt",
  },
  {
    id: "6206",
    zip: "22846",
    city: "Norderstedt",
  },
  {
    id: "6207",
    zip: "22848",
    city: "Norderstedt",
  },
  {
    id: "6208",
    zip: "22850",
    city: "Norderstedt",
  },
  {
    id: "6209",
    zip: "22851",
    city: "Norderstedt",
  },
  {
    id: "6210",
    zip: "22869",
    city: "Schenefeld",
  },
  {
    id: "6211",
    zip: "22880",
    city: "Wedel (Holstein)",
  },
  {
    id: "6212",
    zip: "22885",
    city: "Barsbüttel",
  },
  {
    id: "6213",
    zip: "22889",
    city: "Tangstedt",
  },
  {
    id: "6214",
    zip: "22926",
    city: "Ahrensburg",
  },
  {
    id: "6203",
    zip: "22927",
    city: "Großhansdorf",
  },
  {
    id: "6204",
    zip: "22929",
    city: "Delingsdorf",
  },
  {
    id: "6205",
    zip: "22941",
    city: "Bargteheide",
  },
  {
    id: "6215",
    zip: "22946",
    city: "Trittau",
  },
  {
    id: "6216",
    zip: "22949",
    city: "Ammersbek",
  },
  {
    id: "6217",
    zip: "22952",
    city: "Lütjensee",
  },
  {
    id: "6218",
    zip: "22955",
    city: "Hoisdorf",
  },
  {
    id: "6219",
    zip: "22956",
    city: "Grönwohld",
  },
  {
    id: "6220",
    zip: "22958",
    city: "Kuddewörde",
  },
  {
    id: "6221",
    zip: "22959",
    city: "Linau",
  },
  {
    id: "6222",
    zip: "22961",
    city: "Hoisdorf",
  },
  {
    id: "6223",
    zip: "22962",
    city: "Siek",
  },
  {
    id: "6224",
    zip: "22964",
    city: "Steinburg",
  },
  {
    id: "6225",
    zip: "22965",
    city: "Todendorf",
  },
  {
    id: "6226",
    zip: "22967",
    city: "Tremsbüttel",
  },
  {
    id: "6227",
    zip: "22969",
    city: "Witzhave",
  },
  {
    id: "6228",
    zip: "23552",
    city: "Lübeck",
  },
  {
    id: "6229",
    zip: "23554",
    city: "Lübeck",
  },
  {
    id: "6230",
    zip: "23556",
    city: "Lübeck",
  },
  {
    id: "6231",
    zip: "23558",
    city: "Lübeck",
  },
  {
    id: "6232",
    zip: "23560",
    city: "Lübeck",
  },
  {
    id: "6233",
    zip: "23562",
    city: "Lübeck",
  },
  {
    id: "6234",
    zip: "23564",
    city: "Lübeck",
  },
  {
    id: "6235",
    zip: "23566",
    city: "Lübeck",
  },
  {
    id: "6236",
    zip: "23568",
    city: "Lübeck",
  },
  {
    id: "6237",
    zip: "23569",
    city: "Lübeck",
  },
  {
    id: "6238",
    zip: "23570",
    city: "Lübeck",
  },
  {
    id: "6239",
    zip: "23611",
    city: "Bad Schwartau",
  },
  {
    id: "6240",
    zip: "23617",
    city: "Stockelsdorf",
  },
  {
    id: "6241",
    zip: "23619",
    city: "Zarpen",
  },
  {
    id: "6242",
    zip: "23623",
    city: "Ahrensbök",
  },
  {
    id: "6243",
    zip: "23626",
    city: "Ratekau",
  },
  {
    id: "6244",
    zip: "23627",
    city: "Groß Grönau",
  },
  {
    id: "6245",
    zip: "23628",
    city: "Krummesse",
  },
  {
    id: "6246",
    zip: "23629",
    city: "Scharbeutz",
  },
  {
    id: "6247",
    zip: "23669",
    city: "Timmendorfer Strand",
  },
  {
    id: "6248",
    zip: "23683",
    city: "Scharbeutz",
  },
  {
    id: "6249",
    zip: "23684",
    city: "Scharbeutz",
  },
  {
    id: "6250",
    zip: "23689",
    city: "Ratekau",
  },
  {
    id: "6251",
    zip: "23701",
    city: "Eutin",
  },
  {
    id: "6252",
    zip: "23714",
    city: "Malente",
  },
  {
    id: "6253",
    zip: "23715",
    city: "Bosau",
  },
  {
    id: "6254",
    zip: "23717",
    city: "Kasseedorf",
  },
  {
    id: "6255",
    zip: "23719",
    city: "Glasau",
  },
  {
    id: "6256",
    zip: "23730",
    city: "Neustadt in Holstein",
  },
  {
    id: "6257",
    zip: "23738",
    city: "Lensahn",
  },
  {
    id: "6258",
    zip: "23743",
    city: "Grömitz",
  },
  {
    id: "6259",
    zip: "23744",
    city: "Schönwalde am Bungsberg",
  },
  {
    id: "6260",
    zip: "23746",
    city: "Kellenhusen (Ostsee)",
  },
  {
    id: "6261",
    zip: "23747",
    city: "Dahme",
  },
  {
    id: "6262",
    zip: "23749",
    city: "Grube",
  },
  {
    id: "6263",
    zip: "23758",
    city: "Oldenburg in Holstein",
  },
  {
    id: "6264",
    zip: "23769",
    city: "Burg auf Fehmarn",
  },
  {
    id: "6265",
    zip: "23774",
    city: "Heiligenhafen",
  },
  {
    id: "6266",
    zip: "23775",
    city: "Großenbrode",
  },
  {
    id: "6267",
    zip: "23777",
    city: "Heringsdorf",
  },
  {
    id: "6268",
    zip: "23779",
    city: "Neukirchen",
  },
  {
    id: "6269",
    zip: "23795",
    city: "Bad Segeberg",
  },
  {
    id: "6270",
    zip: "23812",
    city: "Wahlstedt",
  },
  {
    id: "6271",
    zip: "23813",
    city: "Nehms",
  },
  {
    id: "6272",
    zip: "23815",
    city: "Geschendorf",
  },
  {
    id: "6273",
    zip: "23816",
    city: "Leezen",
  },
  {
    id: "6274",
    zip: "23818",
    city: "Neuengörs",
  },
  {
    id: "6275",
    zip: "23820",
    city: "Pronstorf",
  },
  {
    id: "6276",
    zip: "23821",
    city: "Rohlstorf",
  },
  {
    id: "6277",
    zip: "23823",
    city: "Seedorf",
  },
  {
    id: "6278",
    zip: "23824",
    city: "Tensfeld",
  },
  {
    id: "6279",
    zip: "23826",
    city: "Bark",
  },
  {
    id: "6280",
    zip: "23827",
    city: "Wensin",
  },
  {
    id: "6281",
    zip: "23829",
    city: "Wittenborn",
  },
  {
    id: "6282",
    zip: "23843",
    city: "Bad Oldesloe",
  },
  {
    id: "6283",
    zip: "23845",
    city: "Seth",
  },
  {
    id: "6284",
    zip: "23847",
    city: "Lasbek",
  },
  {
    id: "6285",
    zip: "23858",
    city: "Reinfeld (Holstein)",
  },
  {
    id: "6286",
    zip: "23860",
    city: "Klein Wesenberg",
  },
  {
    id: "6287",
    zip: "23863",
    city: "Bargfeld-Stegen",
  },
  {
    id: "6288",
    zip: "23866",
    city: "Nahe",
  },
  {
    id: "6289",
    zip: "23867",
    city: "Sülfeld",
  },
  {
    id: "6290",
    zip: "23869",
    city: "Elmenhorst",
  },
  {
    id: "6291",
    zip: "23879",
    city: "Mölln",
  },
  {
    id: "6293",
    zip: "23881",
    city: "Breitenfelde",
  },
  {
    id: "6294",
    zip: "23883",
    city: "Sterley",
  },
  {
    id: "6295",
    zip: "23896",
    city: "Nusse",
  },
  {
    id: "6296",
    zip: "23898",
    city: "Sandesneben",
  },
  {
    id: "6298",
    zip: "23899",
    city: "Gudow",
  },
  {
    id: "6299",
    zip: "23909",
    city: "Ratzeburg",
  },
  {
    id: "6300",
    zip: "23911",
    city: "Ziethen",
  },
  {
    id: "6301",
    zip: "23919",
    city: "Berkenthin",
  },
  {
    id: "6302",
    zip: "23923",
    city: "Schönberg",
  },
  {
    id: "6303",
    zip: "23936",
    city: "Grevesmühlen",
  },
  {
    id: "6304",
    zip: "23942",
    city: "Dassow",
  },
  {
    id: "6305",
    zip: "23946",
    city: "Boltenhagen",
  },
  {
    id: "6306",
    zip: "23948",
    city: "Klütz",
  },
  {
    id: "6307",
    zip: "23966",
    city: "Wismar",
  },
  {
    id: "6308",
    zip: "23968",
    city: "Wismar",
  },
  {
    id: "6309",
    zip: "23970",
    city: "Wismar",
  },
  {
    id: "6310",
    zip: "23972",
    city: "Dorf Mecklenburg",
  },
  {
    id: "6311",
    zip: "23974",
    city: "Neuburg-Steinhausen",
  },
  {
    id: "6312",
    zip: "23992",
    city: "Neukloster",
  },
  {
    id: "6313",
    zip: "23996",
    city: "Bad Kleinen",
  },
  {
    id: "6314",
    zip: "23999",
    city: "Insel Poel",
  },
  {
    id: "6315",
    zip: "24103",
    city: "Kiel",
  },
  {
    id: "6316",
    zip: "24105",
    city: "Kiel",
  },
  {
    id: "6292",
    zip: "24106",
    city: "Kiel",
  },
  {
    id: "6317",
    zip: "24107",
    city: "Kiel",
  },
  {
    id: "6318",
    zip: "24109",
    city: "Kiel",
  },
  {
    id: "6319",
    zip: "24111",
    city: "Kiel",
  },
  {
    id: "6320",
    zip: "24113",
    city: "Kiel",
  },
  {
    id: "6321",
    zip: "24114",
    city: "Kiel",
  },
  {
    id: "6322",
    zip: "24116",
    city: "Kiel",
  },
  {
    id: "6323",
    zip: "24118",
    city: "Kiel",
  },
  {
    id: "6324",
    zip: "24119",
    city: "Kronshagen",
  },
  {
    id: "6325",
    zip: "24143",
    city: "Kiel",
  },
  {
    id: "6326",
    zip: "24145",
    city: "Kiel",
  },
  {
    id: "6327",
    zip: "24146",
    city: "Kiel",
  },
  {
    id: "6328",
    zip: "24147",
    city: "Kiel",
  },
  {
    id: "6329",
    zip: "24148",
    city: "Kiel",
  },
  {
    id: "6330",
    zip: "24149",
    city: "Kiel",
  },
  {
    id: "6331",
    zip: "24159",
    city: "Kiel",
  },
  {
    id: "6332",
    zip: "24161",
    city: "Altenholz",
  },
  {
    id: "6333",
    zip: "24211",
    city: "Preetz",
  },
  {
    id: "6334",
    zip: "24214",
    city: "Gettorf",
  },
  {
    id: "6335",
    zip: "24217",
    city: "Schönberg (Holstein)",
  },
  {
    id: "6336",
    zip: "24220",
    city: "Flintbek",
  },
  {
    id: "6337",
    zip: "24223",
    city: "Raisdorf",
  },
  {
    id: "6338",
    zip: "24226",
    city: "Heikendorf",
  },
  {
    id: "6339",
    zip: "24229",
    city: "Dänischenhagen",
  },
  {
    id: "6340",
    zip: "24232",
    city: "Schönkirchen",
  },
  {
    id: "6341",
    zip: "24235",
    city: "Laboe",
  },
  {
    id: "6342",
    zip: "24238",
    city: "Selent",
  },
  {
    id: "6343",
    zip: "24239",
    city: "Achterwehr",
  },
  {
    id: "6344",
    zip: "24241",
    city: "Blumenthal",
  },
  {
    id: "6346",
    zip: "24242",
    city: "Felde",
  },
  {
    id: "6347",
    zip: "24244",
    city: "Felm",
  },
  {
    id: "6348",
    zip: "24245",
    city: "Kirchbarkau",
  },
  {
    id: "6349",
    zip: "24247",
    city: "Mielkendorf",
  },
  {
    id: "6350",
    zip: "24248",
    city: "Mönkeberg",
  },
  {
    id: "6351",
    zip: "24250",
    city: "Nettelsee",
  },
  {
    id: "6352",
    zip: "24251",
    city: "Osdorf",
  },
  {
    id: "6353",
    zip: "24253",
    city: "Probsteierhagen",
  },
  {
    id: "6354",
    zip: "24254",
    city: "Rumohr",
  },
  {
    id: "6355",
    zip: "24256",
    city: "Fargau-Pratjau",
  },
  {
    id: "6356",
    zip: "24257",
    city: "Hohenfelde",
  },
  {
    id: "6357",
    zip: "24259",
    city: "Westensee",
  },
  {
    id: "6358",
    zip: "24306",
    city: "Plön",
  },
  {
    id: "6359",
    zip: "24321",
    city: "Lütjenburg",
  },
  {
    id: "6360",
    zip: "24326",
    city: "Ascheberg (Holstein)",
  },
  {
    id: "6361",
    zip: "24327",
    city: "Blekendorf",
  },
  {
    id: "6362",
    zip: "24329",
    city: "Grebin",
  },
  {
    id: "6363",
    zip: "24340",
    city: "Eckernförde",
  },
  {
    id: "6297",
    zip: "24351",
    city: "Damp",
  },
  {
    id: "6364",
    zip: "24354",
    city: "Rieseby",
  },
  {
    id: "6365",
    zip: "24357",
    city: "Fleckeby",
  },
  {
    id: "6366",
    zip: "24358",
    city: "Ascheffel",
  },
  {
    id: "6367",
    zip: "24360",
    city: "Barkelsby",
  },
  {
    id: "6368",
    zip: "24361",
    city: "Groß Wittensee",
  },
  {
    id: "6369",
    zip: "24363",
    city: "Holtsee",
  },
  {
    id: "6345",
    zip: "24364",
    city: "Holzdorf",
  },
  {
    id: "6370",
    zip: "24366",
    city: "Loose",
  },
  {
    id: "6371",
    zip: "24367",
    city: "Osterby",
  },
  {
    id: "6372",
    zip: "24369",
    city: "Waabs",
  },
  {
    id: "6373",
    zip: "24376",
    city: "Kappeln",
  },
  {
    id: "6374",
    zip: "24392",
    city: "Süderbrarup",
  },
  {
    id: "6375",
    zip: "24395",
    city: "Gelting",
  },
  {
    id: "6376",
    zip: "24398",
    city: "Dörphof",
  },
  {
    id: "6377",
    zip: "24399",
    city: "Arnis",
  },
  {
    id: "6378",
    zip: "24401",
    city: "Böel",
  },
  {
    id: "6379",
    zip: "24402",
    city: "Esgrus",
  },
  {
    id: "6380",
    zip: "24404",
    city: "Maasholm",
  },
  {
    id: "6381",
    zip: "24405",
    city: "Mohrkirch",
  },
  {
    id: "6382",
    zip: "24407",
    city: "Rabenkirchen-Faulück",
  },
  {
    id: "6383",
    zip: "24409",
    city: "Stoltebüll",
  },
  {
    id: "6384",
    zip: "24534",
    city: "Neumünster",
  },
  {
    id: "6385",
    zip: "24536",
    city: "Neumünster",
  },
  {
    id: "6386",
    zip: "24537",
    city: "Neumünster",
  },
  {
    id: "6387",
    zip: "24539",
    city: "Neumünster",
  },
  {
    id: "6388",
    zip: "24558",
    city: "Henstedt-Ulzburg",
  },
  {
    id: "6389",
    zip: "24568",
    city: "Kaltenkirchen",
  },
  {
    id: "6390",
    zip: "24576",
    city: "Bad Bramstedt",
  },
  {
    id: "6391",
    zip: "24582",
    city: "Bordesholm",
  },
  {
    id: "6392",
    zip: "24589",
    city: "Nortorf",
  },
  {
    id: "6393",
    zip: "24594",
    city: "Hohenwestedt",
  },
  {
    id: "6394",
    zip: "24598",
    city: "Boostedt",
  },
  {
    id: "6395",
    zip: "24601",
    city: "Wankendorf",
  },
  {
    id: "6396",
    zip: "24610",
    city: "Trappenkamp",
  },
  {
    id: "6397",
    zip: "24613",
    city: "Aukrug",
  },
  {
    id: "6398",
    zip: "24616",
    city: "Brokstedt",
  },
  {
    id: "6399",
    zip: "24619",
    city: "Bornhöved",
  },
  {
    id: "6400",
    zip: "24620",
    city: "Bönebüttel",
  },
  {
    id: "6401",
    zip: "24622",
    city: "Gnutz",
  },
  {
    id: "6402",
    zip: "24623",
    city: "Großenaspe",
  },
  {
    id: "6403",
    zip: "24625",
    city: "Großharrie",
  },
  {
    id: "6404",
    zip: "24626",
    city: "Groß Kummerfeld",
  },
  {
    id: "6405",
    zip: "24628",
    city: "Hartenholm",
  },
  {
    id: "6406",
    zip: "24629",
    city: "Kisdorf",
  },
  {
    id: "6407",
    zip: "24631",
    city: "Langwedel",
  },
  {
    id: "6408",
    zip: "24632",
    city: "Lentföhrden",
  },
  {
    id: "6409",
    zip: "24634",
    city: "Padenstedt",
  },
  {
    id: "6410",
    zip: "24635",
    city: "Rickling",
  },
  {
    id: "6411",
    zip: "24637",
    city: "Schillsdorf",
  },
  {
    id: "6412",
    zip: "24638",
    city: "Schmalensee",
  },
  {
    id: "6413",
    zip: "24640",
    city: "Schmalfeld",
  },
  {
    id: "6414",
    zip: "24641",
    city: "Sievershütten",
  },
  {
    id: "6415",
    zip: "24643",
    city: "Struvenhütten",
  },
  {
    id: "6416",
    zip: "24644",
    city: "Timmaspe",
  },
  {
    id: "6417",
    zip: "24646",
    city: "Warder",
  },
  {
    id: "6418",
    zip: "24647",
    city: "Wasbek",
  },
  {
    id: "6419",
    zip: "24649",
    city: "Wiemersdorf",
  },
  {
    id: "6420",
    zip: "24768",
    city: "Rendsburg",
  },
  {
    id: "6421",
    zip: "24782",
    city: "Büdelsdorf",
  },
  {
    id: "6422",
    zip: "24783",
    city: "Osterrönfeld",
  },
  {
    id: "6423",
    zip: "24784",
    city: "Westerrönfeld",
  },
  {
    id: "6424",
    zip: "24787",
    city: "Fockbek",
  },
  {
    id: "6425",
    zip: "24790",
    city: "Schacht-Audorf",
  },
  {
    id: "6426",
    zip: "24791",
    city: "Alt Duvenstedt",
  },
  {
    id: "6427",
    zip: "24793",
    city: "Bargstedt",
  },
  {
    id: "6428",
    zip: "24794",
    city: "Borgstedt",
  },
  {
    id: "6429",
    zip: "24796",
    city: "Bredenbek",
  },
  {
    id: "6430",
    zip: "24797",
    city: "Breiholz",
  },
  {
    id: "6431",
    zip: "24799",
    city: "Meggerdorf",
  },
  {
    id: "6432",
    zip: "24800",
    city: "Elsdorf-Westermühlen",
  },
  {
    id: "6433",
    zip: "24802",
    city: "Emkendorf",
  },
  {
    id: "6434",
    zip: "24803",
    city: "Erfde",
  },
  {
    id: "6435",
    zip: "24805",
    city: "Hamdorf",
  },
  {
    id: "6436",
    zip: "24806",
    city: "Hohn",
  },
  {
    id: "6437",
    zip: "24808",
    city: "Jevenstedt",
  },
  {
    id: "6438",
    zip: "24809",
    city: "Nübbel",
  },
  {
    id: "6439",
    zip: "24811",
    city: "Owschlag",
  },
  {
    id: "13148",
    zip: "24813",
    city: "Schülp bei Rendsburg",
  },
  {
    id: "6440",
    zip: "24814",
    city: "Sehestedt",
  },
  {
    id: "6441",
    zip: "24816",
    city: "Hamweddel",
  },
  {
    id: "6442",
    zip: "24817",
    city: "Tetenhusen",
  },
  {
    id: "6443",
    zip: "24819",
    city: "Todenbüttel",
  },
  {
    id: "6444",
    zip: "24837",
    city: "Schleswig",
  },
  {
    id: "6445",
    zip: "24848",
    city: "Kropp",
  },
  {
    id: "6446",
    zip: "24850",
    city: "Schuby",
  },
  {
    id: "6447",
    zip: "24852",
    city: "Eggebek",
  },
  {
    id: "6448",
    zip: "24855",
    city: "Jübek",
  },
  {
    id: "6449",
    zip: "24857",
    city: "Fahrdorf",
  },
  {
    id: "6450",
    zip: "24860",
    city: "Böklund",
  },
  {
    id: "6451",
    zip: "24861",
    city: "Bergenhusen",
  },
  {
    id: "6452",
    zip: "24863",
    city: "Börm",
  },
  {
    id: "6453",
    zip: "24864",
    city: "Brodersby",
  },
  {
    id: "6454",
    zip: "24866",
    city: "Busdorf",
  },
  {
    id: "6455",
    zip: "24867",
    city: "Dannewerk",
  },
  {
    id: "6456",
    zip: "24869",
    city: "Dörpstedt",
  },
  {
    id: "6457",
    zip: "24870",
    city: "Ellingstedt",
  },
  {
    id: "6458",
    zip: "24872",
    city: "Groß Rheide",
  },
  {
    id: "6459",
    zip: "24873",
    city: "Havetoft",
  },
  {
    id: "6460",
    zip: "24875",
    city: "Havetoftloit",
  },
  {
    id: "6461",
    zip: "24876",
    city: "Hollingstedt",
  },
  {
    id: "6462",
    zip: "24878",
    city: "Jagel",
  },
  {
    id: "6463",
    zip: "24879",
    city: "Neuberend",
  },
  {
    id: "6464",
    zip: "24881",
    city: "Nübel",
  },
  {
    id: "6465",
    zip: "24882",
    city: "Schaalby",
  },
  {
    id: "6466",
    zip: "24884",
    city: "Selk",
  },
  {
    id: "6467",
    zip: "24885",
    city: "Sieverstedt",
  },
  {
    id: "6468",
    zip: "24887",
    city: "Silberstedt",
  },
  {
    id: "6469",
    zip: "24888",
    city: "Steinfeld",
  },
  {
    id: "6470",
    zip: "24890",
    city: "Stolk",
  },
  {
    id: "6471",
    zip: "24891",
    city: "Struxdorf",
  },
  {
    id: "6472",
    zip: "24893",
    city: "Taarstedt",
  },
  {
    id: "6473",
    zip: "24894",
    city: "Tolk",
  },
  {
    id: "6474",
    zip: "24896",
    city: "Treia",
  },
  {
    id: "6475",
    zip: "24897",
    city: "Ulsnis",
  },
  {
    id: "6476",
    zip: "24899",
    city: "Wohlde",
  },
  {
    id: "6477",
    zip: "24937",
    city: "Flensburg",
  },
  {
    id: "6478",
    zip: "24939",
    city: "Flensburg",
  },
  {
    id: "6479",
    zip: "24941",
    city: "Flensburg",
  },
  {
    id: "6480",
    zip: "24943",
    city: "Flensburg",
  },
  {
    id: "6481",
    zip: "24944",
    city: "Flensburg",
  },
  {
    id: "6482",
    zip: "24955",
    city: "Harrislee",
  },
  {
    id: "6483",
    zip: "24960",
    city: "Glücksburg (Ostsee)",
  },
  {
    id: "6484",
    zip: "24963",
    city: "Tarp",
  },
  {
    id: "6485",
    zip: "24966",
    city: "Sörup",
  },
  {
    id: "6486",
    zip: "24969",
    city: "Großenwiehe",
  },
  {
    id: "6487",
    zip: "24972",
    city: "Quern",
  },
  {
    id: "6488",
    zip: "24975",
    city: "Husby",
  },
  {
    id: "6489",
    zip: "24977",
    city: "Langballig",
  },
  {
    id: "6490",
    zip: "24980",
    city: "Schafflund",
  },
  {
    id: "6491",
    zip: "24983",
    city: "Handewitt",
  },
  {
    id: "6492",
    zip: "24986",
    city: "Satrup",
  },
  {
    id: "6493",
    zip: "24988",
    city: "Oeversee",
  },
  {
    id: "6494",
    zip: "24989",
    city: "Dollerup",
  },
  {
    id: "6495",
    zip: "24991",
    city: "Großsolt",
  },
  {
    id: "6496",
    zip: "24992",
    city: "Jörl",
  },
  {
    id: "6497",
    zip: "24994",
    city: "Medelby",
  },
  {
    id: "6498",
    zip: "24996",
    city: "Sterup",
  },
  {
    id: "6499",
    zip: "24997",
    city: "Wanderup",
  },
  {
    id: "6500",
    zip: "24999",
    city: "Wees",
  },
  {
    id: "6501",
    zip: "25335",
    city: "Elmshorn",
  },
  {
    id: "6502",
    zip: "25336",
    city: "Elmshorn",
  },
  {
    id: "6503",
    zip: "25337",
    city: "Elmshorn",
  },
  {
    id: "6504",
    zip: "25348",
    city: "Glückstadt",
  },
  {
    id: "6505",
    zip: "25355",
    city: "Barmstedt",
  },
  {
    id: "6506",
    zip: "25358",
    city: "Horst (Holstein)",
  },
  {
    id: "6507",
    zip: "25361",
    city: "Krempe",
  },
  {
    id: "6508",
    zip: "25364",
    city: "Brande-Hörnerkirchen",
  },
  {
    id: "6509",
    zip: "25365",
    city: "Klein Offenseth-Sparrieshoop",
  },
  {
    id: "6510",
    zip: "25368",
    city: "Kiebitzreihe",
  },
  {
    id: "6511",
    zip: "25370",
    city: "Seester",
  },
  {
    id: "6512",
    zip: "25371",
    city: "Seestermühe",
  },
  {
    id: "6513",
    zip: "25373",
    city: "Ellerhoop",
  },
  {
    id: "6514",
    zip: "25376",
    city: "Borsfleth",
  },
  {
    id: "6515",
    zip: "25377",
    city: "Kollmar",
  },
  {
    id: "6516",
    zip: "25379",
    city: "Herzhorn",
  },
  {
    id: "6517",
    zip: "25421",
    city: "Pinneberg",
  },
  {
    id: "6518",
    zip: "25436",
    city: "Uetersen",
  },
  {
    id: "6519",
    zip: "25451",
    city: "Quickborn",
  },
  {
    id: "6520",
    zip: "25462",
    city: "Rellingen",
  },
  {
    id: "6521",
    zip: "25469",
    city: "Halstenbek",
  },
  {
    id: "6522",
    zip: "25474",
    city: "Ellerbek",
  },
  {
    id: "6523",
    zip: "25479",
    city: "Ellerau",
  },
  {
    id: "6524",
    zip: "25482",
    city: "Appen",
  },
  {
    id: "6525",
    zip: "25485",
    city: "Hemdingen",
  },
  {
    id: "6526",
    zip: "25486",
    city: "Alveslohe",
  },
  {
    id: "6527",
    zip: "25488",
    city: "Holm",
  },
  {
    id: "6528",
    zip: "25489",
    city: "Haseldorf",
  },
  {
    id: "6529",
    zip: "25491",
    city: "Hetlingen",
  },
  {
    id: "6530",
    zip: "25492",
    city: "Heist",
  },
  {
    id: "6532",
    zip: "25494",
    city: "Borstel-Hohenraden",
  },
  {
    id: "6533",
    zip: "25495",
    city: "Kummerfeld",
  },
  {
    id: "6534",
    zip: "25497",
    city: "Prisdorf",
  },
  {
    id: "6535",
    zip: "25499",
    city: "Tangstedt",
  },
  {
    id: "6536",
    zip: "25524",
    city: "Itzehoe",
  },
  {
    id: "6537",
    zip: "25541",
    city: "Brunsbüttel",
  },
  {
    id: "6538",
    zip: "25548",
    city: "Kellinghusen",
  },
  {
    id: "6539",
    zip: "25551",
    city: "Hohenlockstedt",
  },
  {
    id: "6540",
    zip: "25554",
    city: "Wilster",
  },
  {
    id: "6542",
    zip: "25557",
    city: "Hanerau-Hademarschen",
  },
  {
    id: "6543",
    zip: "25560",
    city: "Schenefeld",
  },
  {
    id: "6544",
    zip: "25563",
    city: "Wrist",
  },
  {
    id: "6545",
    zip: "25566",
    city: "Lägerdorf",
  },
  {
    id: "6546",
    zip: "25569",
    city: "Kremperheide",
  },
  {
    id: "6531",
    zip: "25572",
    city: "Sankt Margarethen",
  },
  {
    id: "6541",
    zip: "25573",
    city: "Beidenfleth",
  },
  {
    id: "6547",
    zip: "25575",
    city: "Beringstedt",
  },
  {
    id: "6548",
    zip: "25576",
    city: "Brokdorf",
  },
  {
    id: "6549",
    zip: "25578",
    city: "Dägeling",
  },
  {
    id: "6550",
    zip: "25579",
    city: "Fitzbek",
  },
  {
    id: "6551",
    zip: "25581",
    city: "Hennstedt",
  },
  {
    id: "6552",
    zip: "25582",
    city: "Hohenaspe",
  },
  {
    id: "6553",
    zip: "25584",
    city: "Holstenniendorf",
  },
  {
    id: "6554",
    zip: "25585",
    city: "Lütjenwestedt",
  },
  {
    id: "6555",
    zip: "25587",
    city: "Münsterdorf",
  },
  {
    id: "6556",
    zip: "25588",
    city: "Oldendorf",
  },
  {
    id: "6557",
    zip: "25590",
    city: "Osterstedt",
  },
  {
    id: "6558",
    zip: "25591",
    city: "Ottenbüttel",
  },
  {
    id: "6559",
    zip: "25593",
    city: "Reher",
  },
  {
    id: "6560",
    zip: "25594",
    city: "Vaale",
  },
  {
    id: "6561",
    zip: "25596",
    city: "Wacken",
  },
  {
    id: "6562",
    zip: "25597",
    city: "Westermoor",
  },
  {
    id: "6563",
    zip: "25599",
    city: "Wewelsfleth",
  },
  {
    id: "6564",
    zip: "25693",
    city: "Sankt Michaelisdonn",
  },
  {
    id: "6565",
    zip: "25704",
    city: "Meldorf",
  },
  {
    id: "6566",
    zip: "25709",
    city: "Marne",
  },
  {
    id: "6567",
    zip: "25712",
    city: "Burg (Dithmarschen)",
  },
  {
    id: "6568",
    zip: "25715",
    city: "Eddelak",
  },
  {
    id: "6569",
    zip: "25718",
    city: "Friedrichskoog",
  },
  {
    id: "6570",
    zip: "25719",
    city: "Barlt",
  },
  {
    id: "6571",
    zip: "25721",
    city: "Eggstedt",
  },
  {
    id: "6572",
    zip: "25724",
    city: "Neufeld",
  },
  {
    id: "6573",
    zip: "25725",
    city: "Schafstedt",
  },
  {
    id: "6574",
    zip: "25727",
    city: "Süderhastedt",
  },
  {
    id: "6575",
    zip: "25729",
    city: "Windbergen",
  },
  {
    id: "6576",
    zip: "25746",
    city: "Heide",
  },
  {
    id: "6577",
    zip: "25761",
    city: "Büsum",
  },
  {
    id: "6578",
    zip: "25764",
    city: "Wesselburen",
  },
  {
    id: "6579",
    zip: "25767",
    city: "Albersdorf",
  },
  {
    id: "6580",
    zip: "25770",
    city: "Hemmingstedt",
  },
  {
    id: "6581",
    zip: "25774",
    city: "Lunden",
  },
  {
    id: "6582",
    zip: "25776",
    city: "Rehm-Flehde-Bargen",
  },
  {
    id: "6583",
    zip: "25779",
    city: "Hennstedt",
  },
  {
    id: "6584",
    zip: "25782",
    city: "Tellingstedt",
  },
  {
    id: "6585",
    zip: "25785",
    city: "Nordhastedt",
  },
  {
    id: "6586",
    zip: "25786",
    city: "Dellstedt",
  },
  {
    id: "6587",
    zip: "25788",
    city: "Delve",
  },
  {
    id: "6588",
    zip: "25791",
    city: "Linden",
  },
  {
    id: "6589",
    zip: "25792",
    city: "Neuenkirchen",
  },
  {
    id: "6590",
    zip: "25794",
    city: "Pahlen",
  },
  {
    id: "6591",
    zip: "25795",
    city: "Weddingstedt",
  },
  {
    id: "6592",
    zip: "25797",
    city: "Wöhrden",
  },
  {
    id: "6593",
    zip: "25799",
    city: "Wrohm",
  },
  {
    id: "6594",
    zip: "25813",
    city: "Husum",
  },
  {
    id: "6595",
    zip: "25821",
    city: "Bredstedt",
  },
  {
    id: "6596",
    zip: "25826",
    city: "Sankt Peter-Ording",
  },
  {
    id: "6597",
    zip: "25832",
    city: "Tönning",
  },
  {
    id: "6598",
    zip: "25836",
    city: "Garding",
  },
  {
    id: "6599",
    zip: "25840",
    city: "Friedrichstadt",
  },
  {
    id: "6600",
    zip: "25842",
    city: "Langenhorn",
  },
  {
    id: "6601",
    zip: "25845",
    city: "Nordstrand",
  },
  {
    id: "6602",
    zip: "25849",
    city: "Pellworm",
  },
  {
    id: "6603",
    zip: "25850",
    city: "Behrendorf",
  },
  {
    id: "6604",
    zip: "25852",
    city: "Bordelum",
  },
  {
    id: "6605",
    zip: "25853",
    city: "Drelsdorf",
  },
  {
    id: "6606",
    zip: "25855",
    city: "Haselund",
  },
  {
    id: "6607",
    zip: "25856",
    city: "Hattstedt",
  },
  {
    id: "6608",
    zip: "25858",
    city: "Högel",
  },
  {
    id: "6609",
    zip: "25859",
    city: "Hooge",
  },
  {
    id: "6610",
    zip: "25860",
    city: "Horstedt",
  },
  {
    id: "6611",
    zip: "25862",
    city: "Joldelund",
  },
  {
    id: "6612",
    zip: "25863",
    city: "Langeneß",
  },
  {
    id: "6613",
    zip: "25864",
    city: "Löwenstedt",
  },
  {
    id: "6614",
    zip: "25866",
    city: "Mildstedt",
  },
  {
    id: "6615",
    zip: "25868",
    city: "Norderstapel",
  },
  {
    id: "6616",
    zip: "25869",
    city: "Langeneß",
  },
  {
    id: "6617",
    zip: "25870",
    city: "Oldenswort",
  },
  {
    id: "6618",
    zip: "25872",
    city: "Ostenfeld (Husum)",
  },
  {
    id: "6619",
    zip: "25873",
    city: "Rantrum",
  },
  {
    id: "6620",
    zip: "25875",
    city: "Schobüll",
  },
  {
    id: "6621",
    zip: "25876",
    city: "Schwabstedt",
  },
  {
    id: "6622",
    zip: "25878",
    city: "Seeth",
  },
  {
    id: "6623",
    zip: "25879",
    city: "Süderstapel",
  },
  {
    id: "6624",
    zip: "25881",
    city: "Tating",
  },
  {
    id: "6625",
    zip: "25882",
    city: "Tetenbüll",
  },
  {
    id: "6626",
    zip: "25884",
    city: "Viöl",
  },
  {
    id: "6627",
    zip: "25885",
    city: "Wester-Ohrstedt",
  },
  {
    id: "6628",
    zip: "25887",
    city: "Winnert",
  },
  {
    id: "6629",
    zip: "25889",
    city: "Witzwort",
  },
  {
    id: "6630",
    zip: "25899",
    city: "Niebüll",
  },
  {
    id: "6631",
    zip: "25917",
    city: "Leck",
  },
  {
    id: "6632",
    zip: "25920",
    city: "Risum-Lindholm",
  },
  {
    id: "6633",
    zip: "25923",
    city: "Süderlügum",
  },
  {
    id: "6634",
    zip: "25924",
    city: "Emmelsbüll-Horsbüll",
  },
  {
    id: "6635",
    zip: "25926",
    city: "Ladelund",
  },
  {
    id: "6636",
    zip: "25927",
    city: "Neukirchen",
  },
  {
    id: "6637",
    zip: "25938",
    city: "Wyk auf Föhr",
  },
  {
    id: "6638",
    zip: "25946",
    city: "Nebel",
  },
  {
    id: "6639",
    zip: "25980",
    city: "Westerland",
  },
  {
    id: "6640",
    zip: "25992",
    city: "List",
  },
  {
    id: "6641",
    zip: "25996",
    city: "Wenningstedt (Sylt)",
  },
  {
    id: "6642",
    zip: "25997",
    city: "Hörnum (Sylt)",
  },
  {
    id: "6643",
    zip: "25999",
    city: "Kampen (Sylt)",
  },
  {
    id: "6644",
    zip: "26121",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6645",
    zip: "26122",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6646",
    zip: "26123",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6647",
    zip: "26125",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6648",
    zip: "26127",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6649",
    zip: "26129",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6651",
    zip: "26131",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6652",
    zip: "26133",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6653",
    zip: "26135",
    city: "Oldenburg (Oldenburg)",
  },
  {
    id: "6654",
    zip: "26160",
    city: "Bad Zwischenahn",
  },
  {
    id: "6655",
    zip: "26169",
    city: "Friesoythe",
  },
  {
    id: "6656",
    zip: "26180",
    city: "Rastede",
  },
  {
    id: "6657",
    zip: "26188",
    city: "Edewecht",
  },
  {
    id: "6658",
    zip: "26197",
    city: "Großenkneten",
  },
  {
    id: "6659",
    zip: "26203",
    city: "Wardenburg",
  },
  {
    id: "6660",
    zip: "26209",
    city: "Hatten",
  },
  {
    id: "6661",
    zip: "26215",
    city: "Wiefelstede",
  },
  {
    id: "6662",
    zip: "26219",
    city: "Bösel",
  },
  {
    id: "6663",
    zip: "26316",
    city: "Varel",
  },
  {
    id: "6664",
    zip: "26340",
    city: "Zetel",
  },
  {
    id: "6665",
    zip: "26345",
    city: "Bockhorn",
  },
  {
    id: "6666",
    zip: "26349",
    city: "Jade",
  },
  {
    id: "6667",
    zip: "26382",
    city: "Wilhelmshaven",
  },
  {
    id: "6668",
    zip: "26384",
    city: "Wilhelmshaven",
  },
  {
    id: "6669",
    zip: "26386",
    city: "Wilhelmshaven",
  },
  {
    id: "6670",
    zip: "26388",
    city: "Wilhelmshaven",
  },
  {
    id: "6671",
    zip: "26389",
    city: "Wilhelmshaven",
  },
  {
    id: "6672",
    zip: "26409",
    city: "Wittmund",
  },
  {
    id: "6673",
    zip: "26419",
    city: "Schortens",
  },
  {
    id: "6674",
    zip: "26427",
    city: "Esens",
  },
  {
    id: "6675",
    zip: "26434",
    city: "Wangerland",
  },
  {
    id: "6676",
    zip: "26441",
    city: "Jever",
  },
  {
    id: "6677",
    zip: "26446",
    city: "Friedeburg",
  },
  {
    id: "6678",
    zip: "26452",
    city: "Sande",
  },
  {
    id: "6679",
    zip: "26465",
    city: "Langeoog",
  },
  {
    id: "6680",
    zip: "26474",
    city: "Spiekeroog",
  },
  {
    id: "6681",
    zip: "26486",
    city: "Nordseebad Wangerooge",
  },
  {
    id: "6650",
    zip: "26487",
    city: "Blomberg",
  },
  {
    id: "6682",
    zip: "26489",
    city: "Ochtersum",
  },
  {
    id: "6683",
    zip: "26506",
    city: "Norden",
  },
  {
    id: "6684",
    zip: "26524",
    city: "Hage",
  },
  {
    id: "6685",
    zip: "26529",
    city: "Upgant-Schott",
  },
  {
    id: "6689",
    zip: "26532",
    city: "Großheide",
  },
  {
    id: "6690",
    zip: "26548",
    city: "Norderney",
  },
  {
    id: "6691",
    zip: "26553",
    city: "Dornum",
  },
  {
    id: "6692",
    zip: "26556",
    city: "Westerholt",
  },
  {
    id: "6693",
    zip: "26571",
    city: "Juist",
  },
  {
    id: "6694",
    zip: "26579",
    city: "Baltrum",
  },
  {
    id: "6686",
    zip: "26603",
    city: "Aurich",
  },
  {
    id: "6687",
    zip: "26605",
    city: "Aurich",
  },
  {
    id: "6688",
    zip: "26607",
    city: "Aurich",
  },
  {
    id: "6695",
    zip: "26624",
    city: "Südbrookmerland",
  },
  {
    id: "6696",
    zip: "26629",
    city: "Großefehn",
  },
  {
    id: "6697",
    zip: "26632",
    city: "Ihlow",
  },
  {
    id: "6698",
    zip: "26639",
    city: "Wiesmoor",
  },
  {
    id: "6699",
    zip: "26655",
    city: "Westerstede",
  },
  {
    id: "6700",
    zip: "26670",
    city: "Uplengen",
  },
  {
    id: "6701",
    zip: "26676",
    city: "Barßel",
  },
  {
    id: "6702",
    zip: "26683",
    city: "Saterland",
  },
  {
    id: "6703",
    zip: "26689",
    city: "Apen",
  },
  {
    id: "6704",
    zip: "26721",
    city: "Emden",
  },
  {
    id: "6705",
    zip: "26723",
    city: "Emden",
  },
  {
    id: "6706",
    zip: "26725",
    city: "Emden",
  },
  {
    id: "6707",
    zip: "26736",
    city: "Krummhörn",
  },
  {
    id: "6708",
    zip: "26757",
    city: "Borkum",
  },
  {
    id: "6709",
    zip: "26759",
    city: "Hinte",
  },
  {
    id: "6710",
    zip: "26789",
    city: "Leer (Ostfriesland)",
  },
  {
    id: "6711",
    zip: "26802",
    city: "Moormerland",
  },
  {
    id: "6712",
    zip: "26810",
    city: "Westoverledingen",
  },
  {
    id: "6713",
    zip: "26817",
    city: "Rhauderfehn",
  },
  {
    id: "6714",
    zip: "26826",
    city: "Weener",
  },
  {
    id: "6715",
    zip: "26831",
    city: "Bunde",
  },
  {
    id: "6716",
    zip: "26835",
    city: "Hesel",
  },
  {
    id: "6717",
    zip: "26842",
    city: "Ostrhauderfehn",
  },
  {
    id: "6718",
    zip: "26844",
    city: "Jemgum",
  },
  {
    id: "6719",
    zip: "26845",
    city: "Nortmoor",
  },
  {
    id: "6720",
    zip: "26847",
    city: "Detern",
  },
  {
    id: "6721",
    zip: "26849",
    city: "Filsum",
  },
  {
    id: "6722",
    zip: "26871",
    city: "Papenburg",
  },
  {
    id: "6723",
    zip: "26892",
    city: "Dörpen",
  },
  {
    id: "6725",
    zip: "26897",
    city: "Esterwegen",
  },
  {
    id: "6726",
    zip: "26899",
    city: "Rhede (Ems)",
  },
  {
    id: "6727",
    zip: "26901",
    city: "Lorup",
  },
  {
    id: "6728",
    zip: "26903",
    city: "Surwold",
  },
  {
    id: "6729",
    zip: "26904",
    city: "Börger",
  },
  {
    id: "6730",
    zip: "26906",
    city: "Dersum",
  },
  {
    id: "6724",
    zip: "26907",
    city: "Walchum",
  },
  {
    id: "6731",
    zip: "26909",
    city: "Neubörger",
  },
  {
    id: "6732",
    zip: "26919",
    city: "Brake (Unterweser)",
  },
  {
    id: "6733",
    zip: "26931",
    city: "Elsfleth",
  },
  {
    id: "6734",
    zip: "26935",
    city: "Stadland",
  },
  {
    id: "6735",
    zip: "26936",
    city: "Stadland",
  },
  {
    id: "6736",
    zip: "26937",
    city: "Stadland",
  },
  {
    id: "6737",
    zip: "26939",
    city: "Ovelgönne",
  },
  {
    id: "6738",
    zip: "26954",
    city: "Nordenham",
  },
  {
    id: "6739",
    zip: "26969",
    city: "Butjadingen",
  },
  {
    id: "6740",
    zip: "27211",
    city: "Bassum",
  },
  {
    id: "6741",
    zip: "27232",
    city: "Sulingen",
  },
  {
    id: "6742",
    zip: "27239",
    city: "Twistringen",
  },
  {
    id: "6743",
    zip: "27243",
    city: "Harpstedt",
  },
  {
    id: "6744",
    zip: "27245",
    city: "Kirchdorf",
  },
  {
    id: "6745",
    zip: "27246",
    city: "Borstel",
  },
  {
    id: "6746",
    zip: "27248",
    city: "Ehrenburg",
  },
  {
    id: "6747",
    zip: "27249",
    city: "Mellinghausen",
  },
  {
    id: "6748",
    zip: "27251",
    city: "Neuenkirchen",
  },
  {
    id: "6749",
    zip: "27252",
    city: "Schwaförden",
  },
  {
    id: "6750",
    zip: "27254",
    city: "Siedenburg",
  },
  {
    id: "6751",
    zip: "27257",
    city: "Sudwalde",
  },
  {
    id: "6752",
    zip: "27259",
    city: "Varrel",
  },
  {
    id: "6753",
    zip: "27283",
    city: "Verden (Aller)",
  },
  {
    id: "6754",
    zip: "27299",
    city: "Langwedel",
  },
  {
    id: "6755",
    zip: "27305",
    city: "Bruchhausen-Vilsen",
  },
  {
    id: "6756",
    zip: "27308",
    city: "Kirchlinteln",
  },
  {
    id: "6757",
    zip: "27313",
    city: "Dörverden",
  },
  {
    id: "6758",
    zip: "27318",
    city: "Hoya",
  },
  {
    id: "6759",
    zip: "27321",
    city: "Thedinghausen",
  },
  {
    id: "6760",
    zip: "27324",
    city: "Eystrup",
  },
  {
    id: "6761",
    zip: "27327",
    city: "Martfeld",
  },
  {
    id: "6762",
    zip: "27330",
    city: "Asendorf",
  },
  {
    id: "6763",
    zip: "27333",
    city: "Bücken",
  },
  {
    id: "6764",
    zip: "27336",
    city: "Rethem (Aller)",
  },
  {
    id: "6765",
    zip: "27337",
    city: "Blender",
  },
  {
    id: "6766",
    zip: "27339",
    city: "Riede",
  },
  {
    id: "6767",
    zip: "27356",
    city: "Rotenburg (Wümme)",
  },
  {
    id: "6768",
    zip: "27367",
    city: "Sottrum",
  },
  {
    id: "6769",
    zip: "27374",
    city: "Visselhövede",
  },
  {
    id: "6770",
    zip: "27383",
    city: "Scheeßel",
  },
  {
    id: "6771",
    zip: "27386",
    city: "Bothel",
  },
  {
    id: "6772",
    zip: "27389",
    city: "Fintel",
  },
  {
    id: "6773",
    zip: "27404",
    city: "Zeven",
  },
  {
    id: "6774",
    zip: "27412",
    city: "Tarmstedt",
  },
  {
    id: "6775",
    zip: "27419",
    city: "Sittensen",
  },
  {
    id: "6776",
    zip: "27432",
    city: "Bremervörde",
  },
  {
    id: "6777",
    zip: "27442",
    city: "Gnarrenburg",
  },
  {
    id: "6778",
    zip: "27446",
    city: "Selsingen",
  },
  {
    id: "6779",
    zip: "27449",
    city: "Kutenholz",
  },
  {
    id: "6780",
    zip: "27472",
    city: "Cuxhaven",
  },
  {
    id: "6781",
    zip: "27474",
    city: "Cuxhaven",
  },
  {
    id: "6782",
    zip: "27476",
    city: "Cuxhaven",
  },
  {
    id: "6783",
    zip: "27478",
    city: "Cuxhaven",
  },
  {
    id: "6784",
    zip: "27498",
    city: "Helgoland",
  },
  {
    id: "6785",
    zip: "27499",
    city: "Hamburg",
  },
  {
    id: "6786",
    zip: "27568",
    city: "Bremerhaven",
  },
  {
    id: "6787",
    zip: "27570",
    city: "Bremerhaven",
  },
  {
    id: "6788",
    zip: "27572",
    city: "Bremerhaven",
  },
  {
    id: "6789",
    zip: "27574",
    city: "Bremerhaven",
  },
  {
    id: "6790",
    zip: "27576",
    city: "Bremerhaven",
  },
  {
    id: "6791",
    zip: "27578",
    city: "Bremerhaven",
  },
  {
    id: "6792",
    zip: "27580",
    city: "Bremerhaven",
  },
  {
    id: "6793",
    zip: "27607",
    city: "Langen",
  },
  {
    id: "6794",
    zip: "27612",
    city: "Loxstedt",
  },
  {
    id: "6795",
    zip: "27616",
    city: "Beverstedt",
  },
  {
    id: "6796",
    zip: "27619",
    city: "Schiffdorf",
  },
  {
    id: "6797",
    zip: "27624",
    city: "Bederkesa",
  },
  {
    id: "6798",
    zip: "27628",
    city: "Hagen im Bremischen",
  },
  {
    id: "6799",
    zip: "27632",
    city: "Dorum",
  },
  {
    id: "6800",
    zip: "27637",
    city: "Nordholz",
  },
  {
    id: "6801",
    zip: "27638",
    city: "Wremen",
  },
  {
    id: "6802",
    zip: "27711",
    city: "Osterholz-Scharmbeck",
  },
  {
    id: "6803",
    zip: "27721",
    city: "Ritterhude",
  },
  {
    id: "6804",
    zip: "27726",
    city: "Worpswede",
  },
  {
    id: "6805",
    zip: "27729",
    city: "Hambergen",
  },
  {
    id: "6807",
    zip: "27749",
    city: "Delmenhorst",
  },
  {
    id: "6808",
    zip: "27751",
    city: "Delmenhorst",
  },
  {
    id: "6809",
    zip: "27753",
    city: "Delmenhorst",
  },
  {
    id: "6810",
    zip: "27755",
    city: "Delmenhorst",
  },
  {
    id: "6811",
    zip: "27777",
    city: "Ganderkesee",
  },
  {
    id: "6812",
    zip: "27793",
    city: "Wildeshausen",
  },
  {
    id: "6813",
    zip: "27798",
    city: "Hude (Oldenburg)",
  },
  {
    id: "6814",
    zip: "27801",
    city: "Dötlingen",
  },
  {
    id: "6815",
    zip: "27804",
    city: "Berne",
  },
  {
    id: "6816",
    zip: "27809",
    city: "Lemwerder",
  },
  {
    id: "6817",
    zip: "28195",
    city: "Bremen",
  },
  {
    id: "6818",
    zip: "28197",
    city: "Bremen",
  },
  {
    id: "6819",
    zip: "28199",
    city: "Bremen",
  },
  {
    id: "6820",
    zip: "28201",
    city: "Bremen",
  },
  {
    id: "6821",
    zip: "28203",
    city: "Bremen",
  },
  {
    id: "6822",
    zip: "28205",
    city: "Bremen",
  },
  {
    id: "6823",
    zip: "28207",
    city: "Bremen",
  },
  {
    id: "6824",
    zip: "28209",
    city: "Bremen",
  },
  {
    id: "6806",
    zip: "28211",
    city: "Bremen",
  },
  {
    id: "6825",
    zip: "28213",
    city: "Bremen",
  },
  {
    id: "6826",
    zip: "28215",
    city: "Bremen",
  },
  {
    id: "6827",
    zip: "28217",
    city: "Bremen",
  },
  {
    id: "6828",
    zip: "28219",
    city: "Bremen",
  },
  {
    id: "6829",
    zip: "28237",
    city: "Bremen",
  },
  {
    id: "6830",
    zip: "28239",
    city: "Bremen",
  },
  {
    id: "6831",
    zip: "28259",
    city: "Bremen",
  },
  {
    id: "6832",
    zip: "28277",
    city: "Bremen",
  },
  {
    id: "6833",
    zip: "28279",
    city: "Bremen",
  },
  {
    id: "6835",
    zip: "28307",
    city: "Bremen",
  },
  {
    id: "6836",
    zip: "28309",
    city: "Bremen",
  },
  {
    id: "6837",
    zip: "28325",
    city: "Bremen",
  },
  {
    id: "6838",
    zip: "28327",
    city: "Bremen",
  },
  {
    id: "6839",
    zip: "28329",
    city: "Bremen",
  },
  {
    id: "6840",
    zip: "28355",
    city: "Bremen",
  },
  {
    id: "6841",
    zip: "28357",
    city: "Bremen",
  },
  {
    id: "6842",
    zip: "28359",
    city: "Bremen",
  },
  {
    id: "6843",
    zip: "28717",
    city: "Bremen",
  },
  {
    id: "6844",
    zip: "28719",
    city: "Bremen",
  },
  {
    id: "6845",
    zip: "28755",
    city: "Bremen",
  },
  {
    id: "6834",
    zip: "28757",
    city: "Bremen",
  },
  {
    id: "6846",
    zip: "28759",
    city: "Bremen",
  },
  {
    id: "6847",
    zip: "28777",
    city: "Bremen",
  },
  {
    id: "6848",
    zip: "28779",
    city: "Bremen",
  },
  {
    id: "6849",
    zip: "28790",
    city: "Schwanewede",
  },
  {
    id: "6850",
    zip: "28816",
    city: "Stuhr",
  },
  {
    id: "6851",
    zip: "28832",
    city: "Achim",
  },
  {
    id: "6852",
    zip: "28844",
    city: "Weyhe",
  },
  {
    id: "6853",
    zip: "28857",
    city: "Syke",
  },
  {
    id: "6854",
    zip: "28865",
    city: "Lilienthal",
  },
  {
    id: "6855",
    zip: "28870",
    city: "Ottersberg",
  },
  {
    id: "6856",
    zip: "28876",
    city: "Oyten",
  },
  {
    id: "6857",
    zip: "28879",
    city: "Grasberg",
  },
  {
    id: "6858",
    zip: "29221",
    city: "Celle",
  },
  {
    id: "6859",
    zip: "29223",
    city: "Celle",
  },
  {
    id: "6860",
    zip: "29225",
    city: "Celle",
  },
  {
    id: "6861",
    zip: "29227",
    city: "Celle",
  },
  {
    id: "6862",
    zip: "29229",
    city: "Celle",
  },
  {
    id: "6863",
    zip: "29303",
    city: "Bergen",
  },
  {
    id: "6864",
    zip: "29308",
    city: "Winsen (Aller)",
  },
  {
    id: "6865",
    zip: "29313",
    city: "Hambühren",
  },
  {
    id: "6866",
    zip: "29320",
    city: "Hermannsburg",
  },
  {
    id: "6867",
    zip: "29323",
    city: "Wietze",
  },
  {
    id: "6868",
    zip: "29328",
    city: "Faßberg",
  },
  {
    id: "6869",
    zip: "29331",
    city: "Lachendorf",
  },
  {
    id: "6870",
    zip: "29336",
    city: "Nienhagen",
  },
  {
    id: "6871",
    zip: "29339",
    city: "Wathlingen",
  },
  {
    id: "6872",
    zip: "29342",
    city: "Wienhausen",
  },
  {
    id: "6873",
    zip: "29345",
    city: "Unterlüß",
  },
  {
    id: "6874",
    zip: "29348",
    city: "Eschede",
  },
  {
    id: "6875",
    zip: "29351",
    city: "Eldingen",
  },
  {
    id: "6876",
    zip: "29352",
    city: "Adelheidsdorf",
  },
  {
    id: "6877",
    zip: "29353",
    city: "Ahnsbeck",
  },
  {
    id: "6878",
    zip: "29355",
    city: "Beedenbostel",
  },
  {
    id: "6879",
    zip: "29356",
    city: "Bröckel",
  },
  {
    id: "6882",
    zip: "29358",
    city: "Eicklingen",
  },
  {
    id: "6883",
    zip: "29359",
    city: "Habighorst",
  },
  {
    id: "6884",
    zip: "29361",
    city: "Höfer",
  },
  {
    id: "6885",
    zip: "29362",
    city: "Hohne",
  },
  {
    id: "6886",
    zip: "29364",
    city: "Langlingen",
  },
  {
    id: "6887",
    zip: "29365",
    city: "Sprakensehl",
  },
  {
    id: "6888",
    zip: "29367",
    city: "Steinhorst",
  },
  {
    id: "6889",
    zip: "29369",
    city: "Ummern",
  },
  {
    id: "6890",
    zip: "29378",
    city: "Wittingen",
  },
  {
    id: "6891",
    zip: "29379",
    city: "Wittingen",
  },
  {
    id: "6892",
    zip: "29386",
    city: "Hankensbüttel",
  },
  {
    id: "6893",
    zip: "29389",
    city: "Bodenteich",
  },
  {
    id: "6894",
    zip: "29392",
    city: "Wesendorf",
  },
  {
    id: "6895",
    zip: "29393",
    city: "Groß Oesingen",
  },
  {
    id: "6896",
    zip: "29394",
    city: "Lüder",
  },
  {
    id: "6897",
    zip: "29396",
    city: "Schönewörde",
  },
  {
    id: "6898",
    zip: "29399",
    city: "Wahrenholz",
  },
  {
    id: "6899",
    zip: "29410",
    city: "Salzwedel",
  },
  {
    id: "6900",
    zip: "29413",
    city: "Diesdorf",
  },
  {
    id: "6901",
    zip: "29416",
    city: "Pretzier",
  },
  {
    id: "6902",
    zip: "29439",
    city: "Lüchow",
  },
  {
    id: "6903",
    zip: "29451",
    city: "Dannenberg (Elbe)",
  },
  {
    id: "6904",
    zip: "29456",
    city: "Hitzacker",
  },
  {
    id: "6905",
    zip: "29459",
    city: "Clenze",
  },
  {
    id: "6906",
    zip: "29462",
    city: "Wustrow",
  },
  {
    id: "6907",
    zip: "29465",
    city: "Schnega",
  },
  {
    id: "6908",
    zip: "29468",
    city: "Bergen (Dumme)",
  },
  {
    id: "6909",
    zip: "29471",
    city: "Gartow",
  },
  {
    id: "6880",
    zip: "29472",
    city: "Damnatz",
  },
  {
    id: "6881",
    zip: "29473",
    city: "Göhrde",
  },
  {
    id: "6910",
    zip: "29475",
    city: "Gorleben",
  },
  {
    id: "6911",
    zip: "29476",
    city: "Gusborn",
  },
  {
    id: "6912",
    zip: "29478",
    city: "Höhbeck",
  },
  {
    id: "6913",
    zip: "29479",
    city: "Jameln",
  },
  {
    id: "6914",
    zip: "29481",
    city: "Karwitz",
  },
  {
    id: "6915",
    zip: "29482",
    city: "Küsten",
  },
  {
    id: "6916",
    zip: "29484",
    city: "Langendorf",
  },
  {
    id: "6917",
    zip: "29485",
    city: "Lemgow",
  },
  {
    id: "6918",
    zip: "29487",
    city: "Luckau",
  },
  {
    id: "6919",
    zip: "29488",
    city: "Lübbow",
  },
  {
    id: "6920",
    zip: "29490",
    city: "Neu Darchau",
  },
  {
    id: "6921",
    zip: "29491",
    city: "Prezelle",
  },
  {
    id: "6922",
    zip: "29493",
    city: "Schnackenburg",
  },
  {
    id: "6923",
    zip: "29494",
    city: "Trebel",
  },
  {
    id: "6925",
    zip: "29496",
    city: "Waddeweitz",
  },
  {
    id: "6926",
    zip: "29497",
    city: "Woltersdorf",
  },
  {
    id: "6927",
    zip: "29499",
    city: "Zernien",
  },
  {
    id: "6928",
    zip: "29525",
    city: "Uelzen",
  },
  {
    id: "6929",
    zip: "29549",
    city: "Bad Bevensen",
  },
  {
    id: "6930",
    zip: "29553",
    city: "Bienenbüttel",
  },
  {
    id: "6931",
    zip: "29556",
    city: "Suderburg",
  },
  {
    id: "6932",
    zip: "29559",
    city: "Wrestedt",
  },
  {
    id: "6933",
    zip: "29562",
    city: "Suhlendorf",
  },
  {
    id: "6934",
    zip: "29565",
    city: "Wriedel",
  },
  {
    id: "6935",
    zip: "29568",
    city: "Wieren",
  },
  {
    id: "6936",
    zip: "29571",
    city: "Rosche",
  },
  {
    id: "6937",
    zip: "29574",
    city: "Ebstorf",
  },
  {
    id: "6938",
    zip: "29575",
    city: "Altenmedingen",
  },
  {
    id: "6939",
    zip: "29576",
    city: "Barum",
  },
  {
    id: "6941",
    zip: "29578",
    city: "Eimke",
  },
  {
    id: "6942",
    zip: "29579",
    city: "Emmendorf",
  },
  {
    id: "6943",
    zip: "29581",
    city: "Gerdau",
  },
  {
    id: "6944",
    zip: "29582",
    city: "Hanstedt",
  },
  {
    id: "6924",
    zip: "29584",
    city: "Himbergen",
  },
  {
    id: "6940",
    zip: "29585",
    city: "Jelmstorf",
  },
  {
    id: "6945",
    zip: "29587",
    city: "Natendorf",
  },
  {
    id: "6946",
    zip: "29588",
    city: "Oetzen",
  },
  {
    id: "6947",
    zip: "29590",
    city: "Rätzlingen",
  },
  {
    id: "6948",
    zip: "29591",
    city: "Römstedt",
  },
  {
    id: "6949",
    zip: "29593",
    city: "Schwienau",
  },
  {
    id: "6950",
    zip: "29594",
    city: "Soltendieck",
  },
  {
    id: "6951",
    zip: "29596",
    city: "Stadensen",
  },
  {
    id: "6952",
    zip: "29597",
    city: "Stoetze",
  },
  {
    id: "6953",
    zip: "29599",
    city: "Weste",
  },
  {
    id: "6954",
    zip: "29614",
    city: "Soltau",
  },
  {
    id: "6955",
    zip: "29633",
    city: "Munster",
  },
  {
    id: "6956",
    zip: "29640",
    city: "Schneverdingen",
  },
  {
    id: "6957",
    zip: "29643",
    city: "Neuenkirchen",
  },
  {
    id: "6958",
    zip: "29646",
    city: "Bispingen",
  },
  {
    id: "6959",
    zip: "29649",
    city: "Wietzendorf",
  },
  {
    id: "6960",
    zip: "29664",
    city: "Walsrode",
  },
  {
    id: "6961",
    zip: "29683",
    city: "Fallingbostel",
  },
  {
    id: "6962",
    zip: "29690",
    city: "Schwarmstedt",
  },
  {
    id: "6963",
    zip: "29693",
    city: "Hodenhagen",
  },
  {
    id: "6964",
    zip: "29699",
    city: "Bomlitz",
  },
  {
    id: "6965",
    zip: "30159",
    city: "Hannover",
  },
  {
    id: "6966",
    zip: "30161",
    city: "Hannover",
  },
  {
    id: "6967",
    zip: "30163",
    city: "Hannover",
  },
  {
    id: "6968",
    zip: "30165",
    city: "Hannover",
  },
  {
    id: "6969",
    zip: "30167",
    city: "Hannover",
  },
  {
    id: "6971",
    zip: "30169",
    city: "Hannover",
  },
  {
    id: "6972",
    zip: "30171",
    city: "Hannover",
  },
  {
    id: "6973",
    zip: "30173",
    city: "Hannover",
  },
  {
    id: "6974",
    zip: "30175",
    city: "Hannover",
  },
  {
    id: "6975",
    zip: "30177",
    city: "Hannover",
  },
  {
    id: "6970",
    zip: "30179",
    city: "Hannover",
  },
  {
    id: "6976",
    zip: "30419",
    city: "Hannover",
  },
  {
    id: "6977",
    zip: "30449",
    city: "Hannover",
  },
  {
    id: "6978",
    zip: "30451",
    city: "Hannover",
  },
  {
    id: "6979",
    zip: "30453",
    city: "Hannover",
  },
  {
    id: "6980",
    zip: "30455",
    city: "Hannover",
  },
  {
    id: "6981",
    zip: "30457",
    city: "Hannover",
  },
  {
    id: "6982",
    zip: "30459",
    city: "Hannover",
  },
  {
    id: "6983",
    zip: "30519",
    city: "Hannover",
  },
  {
    id: "6984",
    zip: "30521",
    city: "Hannover",
  },
  {
    id: "6985",
    zip: "30539",
    city: "Hannover",
  },
  {
    id: "6986",
    zip: "30559",
    city: "Hannover",
  },
  {
    id: "6987",
    zip: "30625",
    city: "Hannover",
  },
  {
    id: "6988",
    zip: "30627",
    city: "Hannover",
  },
  {
    id: "6989",
    zip: "30629",
    city: "Hannover",
  },
  {
    id: "6990",
    zip: "30655",
    city: "Hannover",
  },
  {
    id: "6991",
    zip: "30657",
    city: "Hannover",
  },
  {
    id: "6992",
    zip: "30659",
    city: "Hannover",
  },
  {
    id: "6993",
    zip: "30669",
    city: "Hannover",
  },
  {
    id: "6994",
    zip: "30823",
    city: "Garbsen",
  },
  {
    id: "6995",
    zip: "30826",
    city: "Garbsen",
  },
  {
    id: "6996",
    zip: "30827",
    city: "Garbsen",
  },
  {
    id: "6997",
    zip: "30851",
    city: "Langenhagen",
  },
  {
    id: "6998",
    zip: "30853",
    city: "Langenhagen",
  },
  {
    id: "6999",
    zip: "30855",
    city: "Langenhagen",
  },
  {
    id: "7000",
    zip: "30880",
    city: "Laatzen",
  },
  {
    id: "7001",
    zip: "30890",
    city: "Barsinghausen",
  },
  {
    id: "7002",
    zip: "30900",
    city: "Wedemark",
  },
  {
    id: "7003",
    zip: "30916",
    city: "Isernhagen",
  },
  {
    id: "7004",
    zip: "30926",
    city: "Seelze",
  },
  {
    id: "7005",
    zip: "30938",
    city: "Burgwedel",
  },
  {
    id: "7006",
    zip: "30952",
    city: "Ronnenberg",
  },
  {
    id: "7007",
    zip: "30966",
    city: "Hemmingen",
  },
  {
    id: "7008",
    zip: "30974",
    city: "Wennigsen (Deister)",
  },
  {
    id: "7009",
    zip: "30982",
    city: "Pattensen",
  },
  {
    id: "7010",
    zip: "30989",
    city: "Gehrden",
  },
  {
    id: "7011",
    zip: "31008",
    city: "Elze",
  },
  {
    id: "7012",
    zip: "31020",
    city: "Salzhemmendorf",
  },
  {
    id: "7013",
    zip: "31028",
    city: "Gronau (Leine)",
  },
  {
    id: "7014",
    zip: "31029",
    city: "Banteln",
  },
  {
    id: "7015",
    zip: "31032",
    city: "Betheln",
  },
  {
    id: "7016",
    zip: "31033",
    city: "Brüggen",
  },
  {
    id: "7017",
    zip: "31035",
    city: "Despetal",
  },
  {
    id: "7018",
    zip: "31036",
    city: "Eime",
  },
  {
    id: "7019",
    zip: "31039",
    city: "Rheden",
  },
  {
    id: "7020",
    zip: "31061",
    city: "Alfeld (Leine)",
  },
  {
    id: "7021",
    zip: "31073",
    city: "Delligsen",
  },
  {
    id: "7022",
    zip: "31079",
    city: "Sibbesse",
  },
  {
    id: "7023",
    zip: "31084",
    city: "Freden (Leine)",
  },
  {
    id: "7024",
    zip: "31085",
    city: "Everode",
  },
  {
    id: "7025",
    zip: "31087",
    city: "Landwehr",
  },
  {
    id: "7026",
    zip: "31088",
    city: "Winzenburg",
  },
  {
    id: "7027",
    zip: "31089",
    city: "Duingen",
  },
  {
    id: "7028",
    zip: "31091",
    city: "Coppengrave",
  },
  {
    id: "7029",
    zip: "31093",
    city: "Hoyershausen",
  },
  {
    id: "7030",
    zip: "31094",
    city: "Marienhagen",
  },
  {
    id: "7031",
    zip: "31096",
    city: "Weenzen",
  },
  {
    id: "7032",
    zip: "31097",
    city: "Harbarnsen",
  },
  {
    id: "7033",
    zip: "31099",
    city: "Woltershausen",
  },
  {
    id: "7034",
    zip: "31134",
    city: "Hildesheim",
  },
  {
    id: "7035",
    zip: "31135",
    city: "Hildesheim",
  },
  {
    id: "7036",
    zip: "31137",
    city: "Hildesheim",
  },
  {
    id: "7037",
    zip: "31139",
    city: "Hildesheim",
  },
  {
    id: "7038",
    zip: "31141",
    city: "Hildesheim",
  },
  {
    id: "7039",
    zip: "31157",
    city: "Sarstedt",
  },
  {
    id: "7040",
    zip: "31162",
    city: "Bad Salzdetfurth",
  },
  {
    id: "7041",
    zip: "31167",
    city: "Bockenem",
  },
  {
    id: "7042",
    zip: "31171",
    city: "Nordstemmen",
  },
  {
    id: "7043",
    zip: "31174",
    city: "Schellerten",
  },
  {
    id: "7044",
    zip: "31177",
    city: "Harsum",
  },
  {
    id: "7045",
    zip: "31180",
    city: "Giesen",
  },
  {
    id: "7046",
    zip: "31185",
    city: "Söhlde",
  },
  {
    id: "7047",
    zip: "31188",
    city: "Holle",
  },
  {
    id: "7048",
    zip: "31191",
    city: "Algermissen",
  },
  {
    id: "7049",
    zip: "31195",
    city: "Lamspringe",
  },
  {
    id: "7050",
    zip: "31196",
    city: "Sehlem",
  },
  {
    id: "7051",
    zip: "31199",
    city: "Diekholzen",
  },
  {
    id: "7052",
    zip: "31224",
    city: "Peine",
  },
  {
    id: "7053",
    zip: "31226",
    city: "Peine",
  },
  {
    id: "7054",
    zip: "31228",
    city: "Peine",
  },
  {
    id: "7055",
    zip: "31234",
    city: "Edemissen",
  },
  {
    id: "7056",
    zip: "31241",
    city: "Ilsede",
  },
  {
    id: "7057",
    zip: "31246",
    city: "Lahstedt",
  },
  {
    id: "7058",
    zip: "31249",
    city: "Hohenhameln",
  },
  {
    id: "7059",
    zip: "31275",
    city: "Lehrte",
  },
  {
    id: "7060",
    zip: "31303",
    city: "Burgdorf",
  },
  {
    id: "7061",
    zip: "31311",
    city: "Uetze",
  },
  {
    id: "7062",
    zip: "31319",
    city: "Sehnde",
  },
  {
    id: "7063",
    zip: "31515",
    city: "Wunstorf",
  },
  {
    id: "7064",
    zip: "31535",
    city: "Neustadt am Rübenberge",
  },
  {
    id: "7065",
    zip: "31542",
    city: "Bad Nenndorf",
  },
  {
    id: "7066",
    zip: "31547",
    city: "Rehburg-Loccum",
  },
  {
    id: "7067",
    zip: "31552",
    city: "Rodenberg",
  },
  {
    id: "7068",
    zip: "31553",
    city: "Sachsenhagen",
  },
  {
    id: "7069",
    zip: "31555",
    city: "Suthfeld",
  },
  {
    id: "7070",
    zip: "31556",
    city: "Wölpinghausen",
  },
  {
    id: "7071",
    zip: "31558",
    city: "Hagenburg",
  },
  {
    id: "7072",
    zip: "31559",
    city: "Haste",
  },
  {
    id: "7073",
    zip: "31582",
    city: "Nienburg (Weser)",
  },
  {
    id: "7074",
    zip: "31592",
    city: "Stolzenau",
  },
  {
    id: "7075",
    zip: "31595",
    city: "Steyerberg",
  },
  {
    id: "7076",
    zip: "31600",
    city: "Uchte",
  },
  {
    id: "7077",
    zip: "31603",
    city: "Diepenau",
  },
  {
    id: "7078",
    zip: "31604",
    city: "Raddestorf",
  },
  {
    id: "7079",
    zip: "31606",
    city: "Warmsen",
  },
  {
    id: "7080",
    zip: "31608",
    city: "Marklohe",
  },
  {
    id: "7081",
    zip: "31609",
    city: "Balge",
  },
  {
    id: "7082",
    zip: "31613",
    city: "Wietzen",
  },
  {
    id: "7083",
    zip: "31618",
    city: "Liebenau",
  },
  {
    id: "7084",
    zip: "31619",
    city: "Binnen",
  },
  {
    id: "7085",
    zip: "31621",
    city: "Pennigsehl",
  },
  {
    id: "7086",
    zip: "31622",
    city: "Heemsen",
  },
  {
    id: "7087",
    zip: "31623",
    city: "Drakenburg",
  },
  {
    id: "7089",
    zip: "31626",
    city: "Haßbergen",
  },
  {
    id: "7090",
    zip: "31627",
    city: "Rohrsen",
  },
  {
    id: "7091",
    zip: "31628",
    city: "Landesbergen",
  },
  {
    id: "7092",
    zip: "31629",
    city: "Estorf",
  },
  {
    id: "7093",
    zip: "31632",
    city: "Husum",
  },
  {
    id: "7094",
    zip: "31633",
    city: "Leese",
  },
  {
    id: "7095",
    zip: "31634",
    city: "Steimbke",
  },
  {
    id: "7096",
    zip: "31636",
    city: "Linsburg",
  },
  {
    id: "7097",
    zip: "31637",
    city: "Rodewald",
  },
  {
    id: "7098",
    zip: "31638",
    city: "Stöckse",
  },
  {
    id: "7099",
    zip: "31655",
    city: "Stadthagen",
  },
  {
    id: "7100",
    zip: "31675",
    city: "Bückeburg",
  },
  {
    id: "7101",
    zip: "31683",
    city: "Obernkirchen",
  },
  {
    id: "7102",
    zip: "31688",
    city: "Nienstädt",
  },
  {
    id: "7103",
    zip: "31691",
    city: "Helpsen",
  },
  {
    id: "7104",
    zip: "31693",
    city: "Hespe",
  },
  {
    id: "7105",
    zip: "31698",
    city: "Lindhorst",
  },
  {
    id: "7106",
    zip: "31699",
    city: "Beckedorf",
  },
  {
    id: "7107",
    zip: "31700",
    city: "Heuerßen",
  },
  {
    id: "7108",
    zip: "31702",
    city: "Lüdersfeld",
  },
  {
    id: "7109",
    zip: "31707",
    city: "Bad Eilsen",
  },
  {
    id: "7088",
    zip: "31708",
    city: "Ahnsen",
  },
  {
    id: "7110",
    zip: "31710",
    city: "Buchholz",
  },
  {
    id: "7111",
    zip: "31711",
    city: "Luhden",
  },
  {
    id: "7112",
    zip: "31712",
    city: "Niedernwöhren",
  },
  {
    id: "7113",
    zip: "31714",
    city: "Lauenhagen",
  },
  {
    id: "7114",
    zip: "31715",
    city: "Meerbeck",
  },
  {
    id: "7115",
    zip: "31717",
    city: "Nordsehl",
  },
  {
    id: "7116",
    zip: "31718",
    city: "Pollhagen",
  },
  {
    id: "7117",
    zip: "31719",
    city: "Wiedensahl",
  },
  {
    id: "7118",
    zip: "31737",
    city: "Rinteln",
  },
  {
    id: "7119",
    zip: "31749",
    city: "Auetal",
  },
  {
    id: "7120",
    zip: "31785",
    city: "Hameln",
  },
  {
    id: "7121",
    zip: "31787",
    city: "Hameln",
  },
  {
    id: "7122",
    zip: "31789",
    city: "Hameln",
  },
  {
    id: "7123",
    zip: "31812",
    city: "Bad Pyrmont",
  },
  {
    id: "7124",
    zip: "31832",
    city: "Springe",
  },
  {
    id: "7125",
    zip: "31840",
    city: "Hessisch Oldendorf",
  },
  {
    id: "7126",
    zip: "31848",
    city: "Bad Münder am Deister",
  },
  {
    id: "7127",
    zip: "31855",
    city: "Aerzen",
  },
  {
    id: "7128",
    zip: "31860",
    city: "Emmerthal",
  },
  {
    id: "7129",
    zip: "31863",
    city: "Coppenbrügge",
  },
  {
    id: "7130",
    zip: "31867",
    city: "Lauenau",
  },
  {
    id: "7131",
    zip: "31868",
    city: "Ottenstein",
  },
  {
    id: "7132",
    zip: "32049",
    city: "Herford",
  },
  {
    id: "7133",
    zip: "32051",
    city: "Herford",
  },
  {
    id: "7134",
    zip: "32052",
    city: "Herford",
  },
  {
    id: "7135",
    zip: "32105",
    city: "Bad Salzuflen",
  },
  {
    id: "7136",
    zip: "32107",
    city: "Bad Salzuflen",
  },
  {
    id: "7137",
    zip: "32108",
    city: "Bad Salzuflen",
  },
  {
    id: "7138",
    zip: "32120",
    city: "Hiddenhausen",
  },
  {
    id: "7139",
    zip: "32130",
    city: "Enger",
  },
  {
    id: "7140",
    zip: "32139",
    city: "Spenge",
  },
  {
    id: "7141",
    zip: "32257",
    city: "Bünde",
  },
  {
    id: "7142",
    zip: "32278",
    city: "Kirchlengern",
  },
  {
    id: "7143",
    zip: "32289",
    city: "Rödinghausen",
  },
  {
    id: "7144",
    zip: "32312",
    city: "Lübbecke",
  },
  {
    id: "7145",
    zip: "32339",
    city: "Espelkamp",
  },
  {
    id: "7146",
    zip: "32351",
    city: "Stemwede",
  },
  {
    id: "7147",
    zip: "32361",
    city: "Preußisch Oldendorf",
  },
  {
    id: "7148",
    zip: "32369",
    city: "Rahden",
  },
  {
    id: "7149",
    zip: "32423",
    city: "Minden",
  },
  {
    id: "7150",
    zip: "32425",
    city: "Minden",
  },
  {
    id: "7151",
    zip: "32427",
    city: "Minden",
  },
  {
    id: "7152",
    zip: "32429",
    city: "Minden",
  },
  {
    id: "7153",
    zip: "32457",
    city: "Porta Westfalica",
  },
  {
    id: "7154",
    zip: "32469",
    city: "Petershagen",
  },
  {
    id: "7155",
    zip: "32479",
    city: "Hille",
  },
  {
    id: "7156",
    zip: "32545",
    city: "Bad Oeynhausen",
  },
  {
    id: "7157",
    zip: "32547",
    city: "Bad Oeynhausen",
  },
  {
    id: "7158",
    zip: "32549",
    city: "Bad Oeynhausen",
  },
  {
    id: "7159",
    zip: "32584",
    city: "Löhne",
  },
  {
    id: "7160",
    zip: "32602",
    city: "Vlotho",
  },
  {
    id: "7161",
    zip: "32609",
    city: "Hüllhorst",
  },
  {
    id: "7162",
    zip: "32657",
    city: "Lemgo",
  },
  {
    id: "7163",
    zip: "32676",
    city: "Lügde",
  },
  {
    id: "7164",
    zip: "32683",
    city: "Barntrup",
  },
  {
    id: "7165",
    zip: "32689",
    city: "Kalletal",
  },
  {
    id: "7166",
    zip: "32694",
    city: "Dörentrup",
  },
  {
    id: "7167",
    zip: "32699",
    city: "Extertal",
  },
  {
    id: "7168",
    zip: "32756",
    city: "Detmold",
  },
  {
    id: "7169",
    zip: "32758",
    city: "Detmold",
  },
  {
    id: "7170",
    zip: "32760",
    city: "Detmold",
  },
  {
    id: "7171",
    zip: "32791",
    city: "Lage",
  },
  {
    id: "7172",
    zip: "32805",
    city: "Horn-Bad Meinberg",
  },
  {
    id: "7173",
    zip: "32816",
    city: "Schieder-Schwalenberg",
  },
  {
    id: "7174",
    zip: "32825",
    city: "Blomberg",
  },
  {
    id: "7175",
    zip: "32832",
    city: "Augustdorf",
  },
  {
    id: "7176",
    zip: "32839",
    city: "Steinheim",
  },
  {
    id: "7177",
    zip: "33014",
    city: "Bad Driburg",
  },
  {
    id: "7178",
    zip: "33034",
    city: "Brakel",
  },
  {
    id: "7179",
    zip: "33039",
    city: "Nieheim",
  },
  {
    id: "7180",
    zip: "33098",
    city: "Paderborn",
  },
  {
    id: "7181",
    zip: "33100",
    city: "Paderborn",
  },
  {
    id: "7182",
    zip: "33102",
    city: "Paderborn",
  },
  {
    id: "7183",
    zip: "33104",
    city: "Paderborn",
  },
  {
    id: "7184",
    zip: "33106",
    city: "Paderborn",
  },
  {
    id: "7185",
    zip: "33129",
    city: "Delbrück",
  },
  {
    id: "7186",
    zip: "33142",
    city: "Büren",
  },
  {
    id: "7187",
    zip: "33154",
    city: "Salzkotten",
  },
  {
    id: "7188",
    zip: "33161",
    city: "Hövelhof",
  },
  {
    id: "7189",
    zip: "33165",
    city: "Lichtenau",
  },
  {
    id: "7190",
    zip: "33175",
    city: "Bad Lippspringe",
  },
  {
    id: "7191",
    zip: "33178",
    city: "Borchen",
  },
  {
    id: "7192",
    zip: "33181",
    city: "Wünnenberg",
  },
  {
    id: "7193",
    zip: "33184",
    city: "Altenbeken",
  },
  {
    id: "7194",
    zip: "33189",
    city: "Schlangen",
  },
  {
    id: "7195",
    zip: "33330",
    city: "Gütersloh",
  },
  {
    id: "7196",
    zip: "33332",
    city: "Gütersloh",
  },
  {
    id: "153666",
    zip: "33333",
    city: "Gütersloh",
  },
  {
    id: "7197",
    zip: "33334",
    city: "Gütersloh",
  },
  {
    id: "7198",
    zip: "33335",
    city: "Gütersloh",
  },
  {
    id: "7199",
    zip: "33378",
    city: "Rheda-Wiedenbrück",
  },
  {
    id: "7200",
    zip: "33397",
    city: "Rietberg",
  },
  {
    id: "7201",
    zip: "33415",
    city: "Verl",
  },
  {
    id: "7202",
    zip: "33428",
    city: "Harsewinkel",
  },
  {
    id: "7203",
    zip: "33442",
    city: "Herzebrock-Clarholz",
  },
  {
    id: "7204",
    zip: "33449",
    city: "Langenberg",
  },
  {
    id: "7205",
    zip: "33602",
    city: "Bielefeld",
  },
  {
    id: "7206",
    zip: "33604",
    city: "Bielefeld",
  },
  {
    id: "7207",
    zip: "33605",
    city: "Bielefeld",
  },
  {
    id: "7208",
    zip: "33607",
    city: "Bielefeld",
  },
  {
    id: "7209",
    zip: "33609",
    city: "Bielefeld",
  },
  {
    id: "7211",
    zip: "33611",
    city: "Bielefeld",
  },
  {
    id: "7212",
    zip: "33613",
    city: "Bielefeld",
  },
  {
    id: "7213",
    zip: "33615",
    city: "Bielefeld",
  },
  {
    id: "7214",
    zip: "33617",
    city: "Bielefeld",
  },
  {
    id: "7215",
    zip: "33619",
    city: "Bielefeld",
  },
  {
    id: "7216",
    zip: "33647",
    city: "Bielefeld",
  },
  {
    id: "7217",
    zip: "33649",
    city: "Bielefeld",
  },
  {
    id: "7218",
    zip: "33659",
    city: "Bielefeld",
  },
  {
    id: "7219",
    zip: "33689",
    city: "Bielefeld",
  },
  {
    id: "7220",
    zip: "33699",
    city: "Bielefeld",
  },
  {
    id: "7221",
    zip: "33719",
    city: "Bielefeld",
  },
  {
    id: "7222",
    zip: "33729",
    city: "Bielefeld",
  },
  {
    id: "7223",
    zip: "33739",
    city: "Bielefeld",
  },
  {
    id: "7224",
    zip: "33758",
    city: "Schloß Holte-Stukenbrock",
  },
  {
    id: "7225",
    zip: "33775",
    city: "Versmold",
  },
  {
    id: "13149",
    zip: "33790",
    city: "Halle (Westfalen)",
  },
  {
    id: "7226",
    zip: "33803",
    city: "Steinhagen",
  },
  {
    id: "7227",
    zip: "33813",
    city: "Oerlinghausen",
  },
  {
    id: "7228",
    zip: "33818",
    city: "Leopoldshöhe",
  },
  {
    id: "13150",
    zip: "33824",
    city: "Werther (Westfalen)",
  },
  {
    id: "7229",
    zip: "33829",
    city: "Borgholzhausen",
  },
  {
    id: "7210",
    zip: "34117",
    city: "Kassel",
  },
  {
    id: "7230",
    zip: "34119",
    city: "Kassel",
  },
  {
    id: "7231",
    zip: "34121",
    city: "Kassel",
  },
  {
    id: "7232",
    zip: "34123",
    city: "Kassel",
  },
  {
    id: "7233",
    zip: "34125",
    city: "Kassel",
  },
  {
    id: "7234",
    zip: "34127",
    city: "Kassel",
  },
  {
    id: "7235",
    zip: "34128",
    city: "Kassel",
  },
  {
    id: "7236",
    zip: "34130",
    city: "Kassel",
  },
  {
    id: "7237",
    zip: "34131",
    city: "Kassel",
  },
  {
    id: "7238",
    zip: "34132",
    city: "Kassel",
  },
  {
    id: "7239",
    zip: "34134",
    city: "Kassel",
  },
  {
    id: "7240",
    zip: "34212",
    city: "Melsungen",
  },
  {
    id: "7241",
    zip: "34225",
    city: "Baunatal",
  },
  {
    id: "7242",
    zip: "34233",
    city: "Fuldatal",
  },
  {
    id: "7243",
    zip: "34246",
    city: "Vellmar",
  },
  {
    id: "7244",
    zip: "34253",
    city: "Lohfelden",
  },
  {
    id: "7245",
    zip: "34260",
    city: "Kaufungen",
  },
  {
    id: "7246",
    zip: "34266",
    city: "Niestetal",
  },
  {
    id: "7247",
    zip: "34270",
    city: "Schauenburg",
  },
  {
    id: "7248",
    zip: "34277",
    city: "Fuldabrück",
  },
  {
    id: "7249",
    zip: "34281",
    city: "Gudensberg",
  },
  {
    id: "7250",
    zip: "34286",
    city: "Spangenberg",
  },
  {
    id: "7251",
    zip: "34289",
    city: "Zierenberg",
  },
  {
    id: "7252",
    zip: "34292",
    city: "Ahnatal",
  },
  {
    id: "7253",
    zip: "34295",
    city: "Edermünde",
  },
  {
    id: "7254",
    zip: "34298",
    city: "Helsa",
  },
  {
    id: "7255",
    zip: "34302",
    city: "Guxhagen",
  },
  {
    id: "7256",
    zip: "34305",
    city: "Niedenstein",
  },
  {
    id: "7257",
    zip: "34308",
    city: "Bad Emstal",
  },
  {
    id: "7258",
    zip: "34311",
    city: "Naumburg",
  },
  {
    id: "7259",
    zip: "34314",
    city: "Espenau",
  },
  {
    id: "7260",
    zip: "34317",
    city: "Habichtswald",
  },
  {
    id: "7261",
    zip: "34320",
    city: "Söhrewald",
  },
  {
    id: "7262",
    zip: "34323",
    city: "Malsfeld",
  },
  {
    id: "7263",
    zip: "34326",
    city: "Morschen",
  },
  {
    id: "7264",
    zip: "34327",
    city: "Körle",
  },
  {
    id: "7265",
    zip: "34329",
    city: "Nieste",
  },
  {
    id: "13151",
    zip: "34346",
    city: "Hannoversch Münden",
  },
  {
    id: "7266",
    zip: "34355",
    city: "Staufenberg",
  },
  {
    id: "7267",
    zip: "34359",
    city: "Reinhardshagen",
  },
  {
    id: "7268",
    zip: "34369",
    city: "Hofgeismar",
  },
  {
    id: "7269",
    zip: "34376",
    city: "Immenhausen",
  },
  {
    id: "7270",
    zip: "34379",
    city: "Calden",
  },
  {
    id: "7271",
    zip: "34385",
    city: "Bad Karlshafen",
  },
  {
    id: "7272",
    zip: "34388",
    city: "Trendelburg",
  },
  {
    id: "7273",
    zip: "34393",
    city: "Grebenstein",
  },
  {
    id: "7274",
    zip: "34396",
    city: "Liebenau",
  },
  {
    id: "7275",
    zip: "34399",
    city: "Oberweser",
  },
  {
    id: "7276",
    zip: "34414",
    city: "Warburg",
  },
  {
    id: "7277",
    zip: "34431",
    city: "Marsberg",
  },
  {
    id: "7278",
    zip: "34434",
    city: "Borgentreich",
  },
  {
    id: "7279",
    zip: "34439",
    city: "Willebadessen",
  },
  {
    id: "7280",
    zip: "34454",
    city: "Arolsen",
  },
  {
    id: "7281",
    zip: "34466",
    city: "Wolfhagen",
  },
  {
    id: "7282",
    zip: "34471",
    city: "Volkmarsen",
  },
  {
    id: "7283",
    zip: "34474",
    city: "Diemelstadt",
  },
  {
    id: "7284",
    zip: "34477",
    city: "Twistetal",
  },
  {
    id: "7285",
    zip: "34479",
    city: "Breuna",
  },
  {
    id: "7286",
    zip: "34497",
    city: "Korbach",
  },
  {
    id: "7287",
    zip: "34508",
    city: "Willingen (Upland)",
  },
  {
    id: "7288",
    zip: "34513",
    city: "Waldeck",
  },
  {
    id: "7289",
    zip: "34516",
    city: "Vöhl",
  },
  {
    id: "7290",
    zip: "34519",
    city: "Diemelsee",
  },
  {
    id: "7291",
    zip: "34537",
    city: "Bad Wildungen",
  },
  {
    id: "7292",
    zip: "34549",
    city: "Edertal",
  },
  {
    id: "7293",
    zip: "34560",
    city: "Fritzlar",
  },
  {
    id: "7294",
    zip: "34576",
    city: "Homberg (Efze)",
  },
  {
    id: "7295",
    zip: "34582",
    city: "Borken (Hessen)",
  },
  {
    id: "7296",
    zip: "34587",
    city: "Felsberg",
  },
  {
    id: "7297",
    zip: "34590",
    city: "Wabern",
  },
  {
    id: "7298",
    zip: "34593",
    city: "Knüllwald",
  },
  {
    id: "7299",
    zip: "34596",
    city: "Bad Zwesten",
  },
  {
    id: "7300",
    zip: "34599",
    city: "Neuental",
  },
  {
    id: "7301",
    zip: "34613",
    city: "Schwalmstadt",
  },
  {
    id: "7302",
    zip: "34621",
    city: "Frielendorf",
  },
  {
    id: "7308",
    zip: "34626",
    city: "Neukirchen",
  },
  {
    id: "7310",
    zip: "34628",
    city: "Willingshausen",
  },
  {
    id: "7311",
    zip: "34630",
    city: "Gilserberg",
  },
  {
    id: "7312",
    zip: "34632",
    city: "Jesberg",
  },
  {
    id: "7313",
    zip: "34633",
    city: "Ottrau",
  },
  {
    id: "7314",
    zip: "34637",
    city: "Schrecksbach",
  },
  {
    id: "7309",
    zip: "34639",
    city: "Schwarzenborn",
  },
  {
    id: "7315",
    zip: "35037",
    city: "Marburg",
  },
  {
    id: "7316",
    zip: "35039",
    city: "Marburg",
  },
  {
    id: "7317",
    zip: "35041",
    city: "Marburg",
  },
  {
    id: "7318",
    zip: "35043",
    city: "Marburg",
  },
  {
    id: "7319",
    zip: "35066",
    city: "Frankenberg (Eder)",
  },
  {
    id: "7320",
    zip: "35075",
    city: "Gladenbach",
  },
  {
    id: "7321",
    zip: "35080",
    city: "Bad Endbach",
  },
  {
    id: "7322",
    zip: "35083",
    city: "Wetter (Hessen)",
  },
  {
    id: "7303",
    zip: "35085",
    city: "Ebsdorfergrund",
  },
  {
    id: "7304",
    zip: "35088",
    city: "Battenberg (Eder)",
  },
  {
    id: "7305",
    zip: "35091",
    city: "Cölbe",
  },
  {
    id: "7306",
    zip: "35094",
    city: "Lahntal",
  },
  {
    id: "7307",
    zip: "35096",
    city: "Weimar",
  },
  {
    id: "7323",
    zip: "35099",
    city: "Burgwald",
  },
  {
    id: "7324",
    zip: "35102",
    city: "Lohra",
  },
  {
    id: "7326",
    zip: "35104",
    city: "Lichtenfels",
  },
  {
    id: "7327",
    zip: "35108",
    city: "Allendorf (Eder)",
  },
  {
    id: "7328",
    zip: "35110",
    city: "Frankenau",
  },
  {
    id: "7329",
    zip: "35112",
    city: "Fronhausen",
  },
  {
    id: "7325",
    zip: "35114",
    city: "Haina (Kloster)",
  },
  {
    id: "7331",
    zip: "35116",
    city: "Hatzfeld (Eder)",
  },
  {
    id: "7332",
    zip: "35117",
    city: "Münchhausen",
  },
  {
    id: "7333",
    zip: "35119",
    city: "Rosenthal",
  },
  {
    id: "7334",
    zip: "35216",
    city: "Biedenkopf",
  },
  {
    id: "7335",
    zip: "35232",
    city: "Dautphetal",
  },
  {
    id: "7336",
    zip: "35236",
    city: "Breidenbach",
  },
  {
    id: "7337",
    zip: "35239",
    city: "Steffenberg",
  },
  {
    id: "7338",
    zip: "35260",
    city: "Stadtallendorf",
  },
  {
    id: "7339",
    zip: "35274",
    city: "Kirchhain",
  },
  {
    id: "7340",
    zip: "35279",
    city: "Neustadt (Hessen)",
  },
  {
    id: "7341",
    zip: "35282",
    city: "Rauschenberg",
  },
  {
    id: "7342",
    zip: "35285",
    city: "Gemünden (Wohra)",
  },
  {
    id: "7343",
    zip: "35287",
    city: "Amöneburg",
  },
  {
    id: "7344",
    zip: "35288",
    city: "Wohratal",
  },
  {
    id: "7345",
    zip: "35305",
    city: "Grünberg",
  },
  {
    id: "7346",
    zip: "35315",
    city: "Homberg (Ohm)",
  },
  {
    id: "7347",
    zip: "35321",
    city: "Laubach",
  },
  {
    id: "7348",
    zip: "35325",
    city: "Mücke",
  },
  {
    id: "7349",
    zip: "35327",
    city: "Ulrichstein",
  },
  {
    id: "7350",
    zip: "35329",
    city: "Gemünden (Felda)",
  },
  {
    id: "7351",
    zip: "35390",
    city: "Gießen",
  },
  {
    id: "7352",
    zip: "35392",
    city: "Gießen",
  },
  {
    id: "7353",
    zip: "35394",
    city: "Gießen",
  },
  {
    id: "7354",
    zip: "35396",
    city: "Gießen",
  },
  {
    id: "7355",
    zip: "35398",
    city: "Gießen",
  },
  {
    id: "7356",
    zip: "35410",
    city: "Hungen",
  },
  {
    id: "7357",
    zip: "35415",
    city: "Pohlheim",
  },
  {
    id: "7358",
    zip: "35418",
    city: "Buseck",
  },
  {
    id: "7359",
    zip: "35423",
    city: "Lich",
  },
  {
    id: "7360",
    zip: "35428",
    city: "Langgöns",
  },
  {
    id: "7361",
    zip: "35435",
    city: "Wettenberg",
  },
  {
    id: "7363",
    zip: "35440",
    city: "Linden",
  },
  {
    id: "7364",
    zip: "35444",
    city: "Biebertal",
  },
  {
    id: "7365",
    zip: "35447",
    city: "Reiskirchen",
  },
  {
    id: "7367",
    zip: "35452",
    city: "Heuchelheim",
  },
  {
    id: "7362",
    zip: "35457",
    city: "Lollar",
  },
  {
    id: "7368",
    zip: "35460",
    city: "Staufenberg",
  },
  {
    id: "7369",
    zip: "35463",
    city: "Fernwald",
  },
  {
    id: "7370",
    zip: "35466",
    city: "Rabenau",
  },
  {
    id: "7371",
    zip: "35469",
    city: "Allendorf (Lumda)",
  },
  {
    id: "7372",
    zip: "35510",
    city: "Butzbach",
  },
  {
    id: "7373",
    zip: "35516",
    city: "Münzenberg",
  },
  {
    id: "7374",
    zip: "35519",
    city: "Rockenberg",
  },
  {
    id: "7366",
    zip: "35576",
    city: "Wetzlar",
  },
  {
    id: "7375",
    zip: "35578",
    city: "Wetzlar",
  },
  {
    id: "7376",
    zip: "35579",
    city: "Wetzlar",
  },
  {
    id: "7377",
    zip: "35580",
    city: "Wetzlar",
  },
  {
    id: "7378",
    zip: "35581",
    city: "Wetzlar",
  },
  {
    id: "7379",
    zip: "35582",
    city: "Wetzlar",
  },
  {
    id: "7382",
    zip: "35583",
    city: "Wetzlar",
  },
  {
    id: "7383",
    zip: "35584",
    city: "Wetzlar",
  },
  {
    id: "7330",
    zip: "35585",
    city: "Wetzlar",
  },
  {
    id: "7384",
    zip: "35586",
    city: "Wetzlar",
  },
  {
    id: "7385",
    zip: "35606",
    city: "Solms",
  },
  {
    id: "7386",
    zip: "35614",
    city: "Aßlar",
  },
  {
    id: "7387",
    zip: "35619",
    city: "Braunfels",
  },
  {
    id: "7388",
    zip: "35625",
    city: "Hüttenberg",
  },
  {
    id: "7389",
    zip: "35630",
    city: "Ehringshausen",
  },
  {
    id: "7390",
    zip: "35633",
    city: "Lahnau",
  },
  {
    id: "7391",
    zip: "35638",
    city: "Leun",
  },
  {
    id: "7392",
    zip: "35641",
    city: "Schöffengrund",
  },
  {
    id: "7393",
    zip: "35644",
    city: "Hohenahr",
  },
  {
    id: "7394",
    zip: "35647",
    city: "Waldsolms",
  },
  {
    id: "7395",
    zip: "35649",
    city: "Bischoffen",
  },
  {
    id: "7396",
    zip: "35683",
    city: "Dillenburg",
  },
  {
    id: "7380",
    zip: "35684",
    city: "Dillenburg",
  },
  {
    id: "7381",
    zip: "35685",
    city: "Dillenburg",
  },
  {
    id: "7397",
    zip: "35686",
    city: "Dillenburg",
  },
  {
    id: "7398",
    zip: "35687",
    city: "Dillenburg",
  },
  {
    id: "7399",
    zip: "35688",
    city: "Dillenburg",
  },
  {
    id: "7400",
    zip: "35689",
    city: "Dillenburg",
  },
  {
    id: "7401",
    zip: "35690",
    city: "Dillenburg",
  },
  {
    id: "7402",
    zip: "35708",
    city: "Haiger",
  },
  {
    id: "7403",
    zip: "35713",
    city: "Eschenburg",
  },
  {
    id: "7404",
    zip: "35716",
    city: "Dietzhölztal",
  },
  {
    id: "7405",
    zip: "35719",
    city: "Angelburg",
  },
  {
    id: "7406",
    zip: "35745",
    city: "Herborn",
  },
  {
    id: "7407",
    zip: "35753",
    city: "Greifenstein",
  },
  {
    id: "7408",
    zip: "35756",
    city: "Mittenaar",
  },
  {
    id: "7411",
    zip: "35759",
    city: "Driedorf",
  },
  {
    id: "7412",
    zip: "35764",
    city: "Sinn",
  },
  {
    id: "7413",
    zip: "35767",
    city: "Breitscheid",
  },
  {
    id: "7414",
    zip: "35768",
    city: "Siegbach",
  },
  {
    id: "7415",
    zip: "35781",
    city: "Weilburg",
  },
  {
    id: "7416",
    zip: "35789",
    city: "Weilmünster",
  },
  {
    id: "7409",
    zip: "35792",
    city: "Löhnberg",
  },
  {
    id: "7424",
    zip: "35794",
    city: "Mengerskirchen",
  },
  {
    id: "7425",
    zip: "35796",
    city: "Weinbach",
  },
  {
    id: "7426",
    zip: "35799",
    city: "Merenberg",
  },
  {
    id: "7427",
    zip: "36037",
    city: "Fulda",
  },
  {
    id: "7428",
    zip: "36039",
    city: "Fulda",
  },
  {
    id: "7429",
    zip: "36041",
    city: "Fulda",
  },
  {
    id: "7430",
    zip: "36043",
    city: "Fulda",
  },
  {
    id: "7431",
    zip: "36088",
    city: "Hünfeld",
  },
  {
    id: "7432",
    zip: "36093",
    city: "Künzell",
  },
  {
    id: "7433",
    zip: "36100",
    city: "Petersberg",
  },
  {
    id: "7434",
    zip: "36103",
    city: "Flieden",
  },
  {
    id: "7435",
    zip: "36110",
    city: "Schlitz",
  },
  {
    id: "7436",
    zip: "36115",
    city: "Hilders",
  },
  {
    id: "7437",
    zip: "36119",
    city: "Neuhof",
  },
  {
    id: "7410",
    zip: "36124",
    city: "Eichenzell",
  },
  {
    id: "7417",
    zip: "36129",
    city: "Gersfeld (Rhön)",
  },
  {
    id: "7418",
    zip: "36132",
    city: "Eiterfeld",
  },
  {
    id: "7419",
    zip: "36137",
    city: "Großenlüder",
  },
  {
    id: "7420",
    zip: "36142",
    city: "Tann (Rhön)",
  },
  {
    id: "7421",
    zip: "36145",
    city: "Hofbieber",
  },
  {
    id: "7422",
    zip: "36148",
    city: "Kalbach",
  },
  {
    id: "7423",
    zip: "36151",
    city: "Burghaun",
  },
  {
    id: "7438",
    zip: "36154",
    city: "Hosenfeld",
  },
  {
    id: "7439",
    zip: "36157",
    city: "Ebersburg",
  },
  {
    id: "7440",
    zip: "36160",
    city: "Dipperz",
  },
  {
    id: "7441",
    zip: "36163",
    city: "Poppenhausen (Wasserkuppe)",
  },
  {
    id: "7442",
    zip: "36166",
    city: "Haunetal",
  },
  {
    id: "7443",
    zip: "36167",
    city: "Nüsttal",
  },
  {
    id: "7444",
    zip: "36169",
    city: "Rasdorf",
  },
  {
    id: "7445",
    zip: "36179",
    city: "Bebra",
  },
  {
    id: "13152",
    zip: "36199",
    city: "Rotenburg an der Fulda",
  },
  {
    id: "7446",
    zip: "36205",
    city: "Sontra",
  },
  {
    id: "7447",
    zip: "36208",
    city: "Wildeck",
  },
  {
    id: "7448",
    zip: "36211",
    city: "Alheim",
  },
  {
    id: "7449",
    zip: "36214",
    city: "Nentershausen",
  },
  {
    id: "7450",
    zip: "36217",
    city: "Ronshausen",
  },
  {
    id: "7451",
    zip: "36219",
    city: "Cornberg",
  },
  {
    id: "7452",
    zip: "36251",
    city: "Bad Hersfeld",
  },
  {
    id: "7453",
    zip: "36266",
    city: "Heringen (Werra)",
  },
  {
    id: "7455",
    zip: "36269",
    city: "Philippsthal (Werra)",
  },
  {
    id: "7456",
    zip: "36272",
    city: "Niederaula",
  },
  {
    id: "7457",
    zip: "36275",
    city: "Kirchheim",
  },
  {
    id: "7458",
    zip: "36277",
    city: "Schenklengsfeld",
  },
  {
    id: "7459",
    zip: "36280",
    city: "Oberaula",
  },
  {
    id: "7461",
    zip: "36282",
    city: "Hauneck",
  },
  {
    id: "7462",
    zip: "36284",
    city: "Hohenroda",
  },
  {
    id: "7463",
    zip: "36286",
    city: "Neuenstein",
  },
  {
    id: "13153",
    zip: "36287",
    city: "Breitenbach am Herzberg",
  },
  {
    id: "7464",
    zip: "36289",
    city: "Friedewald",
  },
  {
    id: "7465",
    zip: "36304",
    city: "Alsfeld",
  },
  {
    id: "7466",
    zip: "36318",
    city: "Schwalmtal",
  },
  {
    id: "7467",
    zip: "36320",
    city: "Kirtorf",
  },
  {
    id: "7468",
    zip: "36323",
    city: "Grebenau",
  },
  {
    id: "7469",
    zip: "36325",
    city: "Feldatal",
  },
  {
    id: "7470",
    zip: "36326",
    city: "Antrifttal",
  },
  {
    id: "7471",
    zip: "36329",
    city: "Romrod",
  },
  {
    id: "7472",
    zip: "36341",
    city: "Lauterbach (Hessen)",
  },
  {
    id: "7473",
    zip: "36355",
    city: "Grebenhain",
  },
  {
    id: "7474",
    zip: "36358",
    city: "Herbstein",
  },
  {
    id: "7460",
    zip: "36364",
    city: "Bad Salzschlirf",
  },
  {
    id: "7475",
    zip: "36367",
    city: "Wartenberg",
  },
  {
    id: "7476",
    zip: "36369",
    city: "Lautertal (Vogelsberg)",
  },
  {
    id: "7477",
    zip: "36381",
    city: "Schlüchtern",
  },
  {
    id: "7478",
    zip: "36391",
    city: "Sinntal",
  },
  {
    id: "7479",
    zip: "36396",
    city: "Steinau an der Straße",
  },
  {
    id: "7480",
    zip: "36399",
    city: "Freiensteinau",
  },
  {
    id: "7481",
    zip: "36404",
    city: "Vacha",
  },
  {
    id: "7482",
    zip: "36414",
    city: "Unterbreizbach",
  },
  {
    id: "7483",
    zip: "36419",
    city: "Geisa",
  },
  {
    id: "7484",
    zip: "36433",
    city: "Bad Salzungen",
  },
  {
    id: "7485",
    zip: "36448",
    city: "Bad Liebenstein",
  },
  {
    id: "7486",
    zip: "36452",
    city: "Kaltennordheim",
  },
  {
    id: "7487",
    zip: "36456",
    city: "Barchfeld",
  },
  {
    id: "7488",
    zip: "36457",
    city: "Stadtlengsfeld",
  },
  {
    id: "7489",
    zip: "36460",
    city: "Merkers-Kieselbach",
  },
  {
    id: "7490",
    zip: "36466",
    city: "Dermbach",
  },
  {
    id: "7491",
    zip: "36469",
    city: "Tiefenort",
  },
  {
    id: "7492",
    zip: "37073",
    city: "Göttingen",
  },
  {
    id: "7493",
    zip: "37075",
    city: "Göttingen",
  },
  {
    id: "7494",
    zip: "37077",
    city: "Göttingen",
  },
  {
    id: "7495",
    zip: "37079",
    city: "Göttingen",
  },
  {
    id: "7496",
    zip: "37081",
    city: "Göttingen",
  },
  {
    id: "7497",
    zip: "37083",
    city: "Göttingen",
  },
  {
    id: "7498",
    zip: "37085",
    city: "Göttingen",
  },
  {
    id: "7499",
    zip: "37115",
    city: "Duderstadt",
  },
  {
    id: "7500",
    zip: "37120",
    city: "Bovenden",
  },
  {
    id: "7501",
    zip: "37124",
    city: "Rosdorf",
  },
  {
    id: "7502",
    zip: "37127",
    city: "Rosdorf",
  },
  {
    id: "7503",
    zip: "37130",
    city: "Gleichen",
  },
  {
    id: "7504",
    zip: "37133",
    city: "Friedland",
  },
  {
    id: "7505",
    zip: "37136",
    city: "Ebergötzen",
  },
  {
    id: "7506",
    zip: "37139",
    city: "Adelebsen",
  },
  {
    id: "7507",
    zip: "37154",
    city: "Northeim",
  },
  {
    id: "7508",
    zip: "37170",
    city: "Uslar",
  },
  {
    id: "7509",
    zip: "37176",
    city: "Nörten-Hardenberg",
  },
  {
    id: "7510",
    zip: "37181",
    city: "Hardegsen",
  },
  {
    id: "7511",
    zip: "37186",
    city: "Moringen",
  },
  {
    id: "7512",
    zip: "37191",
    city: "Katlenburg-Lindau",
  },
  {
    id: "7513",
    zip: "37194",
    city: "Bodenfelde",
  },
  {
    id: "7514",
    zip: "37197",
    city: "Hattorf am Harz",
  },
  {
    id: "7515",
    zip: "37199",
    city: "Wulften",
  },
  {
    id: "7516",
    zip: "37213",
    city: "Witzenhausen",
  },
  {
    id: "7517",
    zip: "37214",
    city: "Witzenhausen",
  },
  {
    id: "7518",
    zip: "37215",
    city: "Witzenhausen",
  },
  {
    id: "7519",
    zip: "37216",
    city: "Witzenhausen",
  },
  {
    id: "7520",
    zip: "37217",
    city: "Witzenhausen",
  },
  {
    id: "7521",
    zip: "37218",
    city: "Witzenhausen",
  },
  {
    id: "7522",
    zip: "37235",
    city: "Hessisch Lichtenau",
  },
  {
    id: "7523",
    zip: "37242",
    city: "Bad Sooden-Allendorf",
  },
  {
    id: "7524",
    zip: "37247",
    city: "Großalmerode",
  },
  {
    id: "7525",
    zip: "37249",
    city: "Neu-Eichenberg",
  },
  {
    id: "7526",
    zip: "37269",
    city: "Eschwege",
  },
  {
    id: "7527",
    zip: "37276",
    city: "Meinhard",
  },
  {
    id: "7528",
    zip: "37281",
    city: "Wanfried",
  },
  {
    id: "7529",
    zip: "37284",
    city: "Waldkappel",
  },
  {
    id: "7530",
    zip: "37287",
    city: "Wehretal",
  },
  {
    id: "7531",
    zip: "37290",
    city: "Meißner",
  },
  {
    id: "7532",
    zip: "37293",
    city: "Herleshausen",
  },
  {
    id: "7533",
    zip: "37296",
    city: "Ringgau",
  },
  {
    id: "7534",
    zip: "37297",
    city: "Berkatal",
  },
  {
    id: "7535",
    zip: "37299",
    city: "Weißenborn",
  },
  {
    id: "7536",
    zip: "37308",
    city: "Heiligenstadt",
  },
  {
    id: "7537",
    zip: "37318",
    city: "Uder",
  },
  {
    id: "7538",
    zip: "37327",
    city: "Leinefelde",
  },
  {
    id: "7539",
    zip: "37339",
    city: "Worbis",
  },
  {
    id: "7540",
    zip: "37345",
    city: "Bischofferode",
  },
  {
    id: "7541",
    zip: "37351",
    city: "Dingelstädt",
  },
  {
    id: "7542",
    zip: "37355",
    city: "Niederorschel",
  },
  {
    id: "7543",
    zip: "37359",
    city: "Küllstedt",
  },
  {
    id: "7544",
    zip: "37412",
    city: "Herzberg am Harz",
  },
  {
    id: "7545",
    zip: "37431",
    city: "Bad Lauterberg im Harz",
  },
  {
    id: "7546",
    zip: "37434",
    city: "Gieboldehausen",
  },
  {
    id: "7547",
    zip: "37441",
    city: "Bad Sachsa",
  },
  {
    id: "7548",
    zip: "37444",
    city: "Sankt Andreasberg",
  },
  {
    id: "7549",
    zip: "37445",
    city: "Walkenried",
  },
  {
    id: "7550",
    zip: "37447",
    city: "Wieda",
  },
  {
    id: "7551",
    zip: "37449",
    city: "Zorge",
  },
  {
    id: "7552",
    zip: "37520",
    city: "Osterode am Harz",
  },
  {
    id: "7553",
    zip: "37534",
    city: "Gittelde",
  },
  {
    id: "7554",
    zip: "37539",
    city: "Bad Grund (Harz)",
  },
  {
    id: "7555",
    zip: "37547",
    city: "Kreiensen",
  },
  {
    id: "7556",
    zip: "37574",
    city: "Einbeck",
  },
  {
    id: "7557",
    zip: "37581",
    city: "Bad Gandersheim",
  },
  {
    id: "7558",
    zip: "37586",
    city: "Dassel",
  },
  {
    id: "7559",
    zip: "37589",
    city: "Kalefeld",
  },
  {
    id: "7560",
    zip: "37603",
    city: "Holzminden",
  },
  {
    id: "7561",
    zip: "37619",
    city: "Bodenwerder",
  },
  {
    id: "7562",
    zip: "37620",
    city: "Halle",
  },
  {
    id: "7563",
    zip: "37627",
    city: "Stadtoldendorf",
  },
  {
    id: "7564",
    zip: "37632",
    city: "Eschershausen",
  },
  {
    id: "7565",
    zip: "37633",
    city: "Dielmissen",
  },
  {
    id: "7566",
    zip: "37635",
    city: "Lüerdissen",
  },
  {
    id: "7567",
    zip: "37639",
    city: "Bevern",
  },
  {
    id: "7568",
    zip: "37640",
    city: "Golmbach",
  },
  {
    id: "7454",
    zip: "37642",
    city: "Holenberg",
  },
  {
    id: "7569",
    zip: "37643",
    city: "Negenborn",
  },
  {
    id: "7570",
    zip: "37647",
    city: "Polle",
  },
  {
    id: "7571",
    zip: "37649",
    city: "Heinsen",
  },
  {
    id: "7572",
    zip: "37671",
    city: "Höxter",
  },
  {
    id: "7573",
    zip: "37688",
    city: "Beverungen",
  },
  {
    id: "7574",
    zip: "37691",
    city: "Boffzen",
  },
  {
    id: "7575",
    zip: "37696",
    city: "Marienmünster",
  },
  {
    id: "7576",
    zip: "37697",
    city: "Lauenförde",
  },
  {
    id: "7577",
    zip: "37699",
    city: "Fürstenberg",
  },
  {
    id: "7578",
    zip: "38100",
    city: "Braunschweig",
  },
  {
    id: "7579",
    zip: "38102",
    city: "Braunschweig",
  },
  {
    id: "7580",
    zip: "38104",
    city: "Braunschweig",
  },
  {
    id: "7581",
    zip: "38106",
    city: "Braunschweig",
  },
  {
    id: "7582",
    zip: "38108",
    city: "Braunschweig",
  },
  {
    id: "7583",
    zip: "38110",
    city: "Braunschweig",
  },
  {
    id: "7584",
    zip: "38112",
    city: "Braunschweig",
  },
  {
    id: "7585",
    zip: "38114",
    city: "Braunschweig",
  },
  {
    id: "7586",
    zip: "38116",
    city: "Braunschweig",
  },
  {
    id: "7587",
    zip: "38118",
    city: "Braunschweig",
  },
  {
    id: "7588",
    zip: "38120",
    city: "Braunschweig",
  },
  {
    id: "7589",
    zip: "38122",
    city: "Braunschweig",
  },
  {
    id: "7590",
    zip: "38124",
    city: "Braunschweig",
  },
  {
    id: "7591",
    zip: "38126",
    city: "Braunschweig",
  },
  {
    id: "7592",
    zip: "38154",
    city: "Königslutter am Elm",
  },
  {
    id: "7593",
    zip: "38159",
    city: "Vechelde",
  },
  {
    id: "7594",
    zip: "38162",
    city: "Cremlingen",
  },
  {
    id: "7595",
    zip: "38165",
    city: "Lehre",
  },
  {
    id: "7596",
    zip: "38170",
    city: "Schöppenstedt",
  },
  {
    id: "7597",
    zip: "38173",
    city: "Sickte",
  },
  {
    id: "7598",
    zip: "38176",
    city: "Wendeburg",
  },
  {
    id: "7599",
    zip: "38179",
    city: "Schwülper",
  },
  {
    id: "7600",
    zip: "38226",
    city: "Salzgitter",
  },
  {
    id: "7601",
    zip: "38228",
    city: "Salzgitter",
  },
  {
    id: "7602",
    zip: "38229",
    city: "Salzgitter",
  },
  {
    id: "7603",
    zip: "38239",
    city: "Salzgitter",
  },
  {
    id: "7604",
    zip: "38259",
    city: "Salzgitter",
  },
  {
    id: "7605",
    zip: "38268",
    city: "Lengede",
  },
  {
    id: "7606",
    zip: "38271",
    city: "Baddeckenstedt",
  },
  {
    id: "7607",
    zip: "38272",
    city: "Burgdorf",
  },
  {
    id: "7608",
    zip: "38274",
    city: "Elbe",
  },
  {
    id: "7609",
    zip: "38275",
    city: "Haverlah",
  },
  {
    id: "7610",
    zip: "38277",
    city: "Heere",
  },
  {
    id: "7611",
    zip: "38279",
    city: "Sehlde",
  },
  {
    id: "7612",
    zip: "38300",
    city: "Wolfenbüttel",
  },
  {
    id: "7613",
    zip: "38302",
    city: "Wolfenbüttel",
  },
  {
    id: "7614",
    zip: "38304",
    city: "Wolfenbüttel",
  },
  {
    id: "7615",
    zip: "38312",
    city: "Börßum",
  },
  {
    id: "7616",
    zip: "38315",
    city: "Schladen",
  },
  {
    id: "7617",
    zip: "38319",
    city: "Remlingen",
  },
  {
    id: "7618",
    zip: "38321",
    city: "Denkte",
  },
  {
    id: "7619",
    zip: "38322",
    city: "Hedeper",
  },
  {
    id: "7620",
    zip: "38324",
    city: "Kissenbrück",
  },
  {
    id: "7621",
    zip: "38325",
    city: "Roklum",
  },
  {
    id: "7622",
    zip: "38327",
    city: "Semmenstedt",
  },
  {
    id: "7623",
    zip: "38329",
    city: "Wittmar",
  },
  {
    id: "7624",
    zip: "38350",
    city: "Helmstedt",
  },
  {
    id: "7625",
    zip: "38364",
    city: "Schöningen",
  },
  {
    id: "7626",
    zip: "38368",
    city: "Grasleben",
  },
  {
    id: "7627",
    zip: "38372",
    city: "Büddenstedt",
  },
  {
    id: "7628",
    zip: "38373",
    city: "Süpplingen",
  },
  {
    id: "7629",
    zip: "38375",
    city: "Räbke",
  },
  {
    id: "7630",
    zip: "38376",
    city: "Süpplingenburg",
  },
  {
    id: "7631",
    zip: "38378",
    city: "Warberg",
  },
  {
    id: "7632",
    zip: "38379",
    city: "Wolsdorf",
  },
  {
    id: "7633",
    zip: "38381",
    city: "Jerxheim",
  },
  {
    id: "7634",
    zip: "38382",
    city: "Beierstedt",
  },
  {
    id: "7635",
    zip: "38384",
    city: "Gevensleben",
  },
  {
    id: "7636",
    zip: "38385",
    city: "Ingeleben",
  },
  {
    id: "7637",
    zip: "38387",
    city: "Söllingen",
  },
  {
    id: "7638",
    zip: "38388",
    city: "Twieflingen",
  },
  {
    id: "7639",
    zip: "38440",
    city: "Wolfsburg",
  },
  {
    id: "7640",
    zip: "38442",
    city: "Wolfsburg",
  },
  {
    id: "7641",
    zip: "38444",
    city: "Wolfsburg",
  },
  {
    id: "7642",
    zip: "38446",
    city: "Wolfsburg",
  },
  {
    id: "7643",
    zip: "38448",
    city: "Wolfsburg",
  },
  {
    id: "7644",
    zip: "38458",
    city: "Velpke",
  },
  {
    id: "7645",
    zip: "38459",
    city: "Bahrdorf",
  },
  {
    id: "7646",
    zip: "38461",
    city: "Danndorf",
  },
  {
    id: "7647",
    zip: "38462",
    city: "Grafhorst",
  },
  {
    id: "7648",
    zip: "38464",
    city: "Groß Twülpstedt",
  },
  {
    id: "7649",
    zip: "38465",
    city: "Brome",
  },
  {
    id: "7650",
    zip: "38467",
    city: "Bergfeld",
  },
  {
    id: "7651",
    zip: "38468",
    city: "Ehra-Lessien",
  },
  {
    id: "7652",
    zip: "38470",
    city: "Parsau",
  },
  {
    id: "7653",
    zip: "38471",
    city: "Rühen",
  },
  {
    id: "7654",
    zip: "38473",
    city: "Tiddische",
  },
  {
    id: "7655",
    zip: "38474",
    city: "Tülau",
  },
  {
    id: "7656",
    zip: "38476",
    city: "Barwedel",
  },
  {
    id: "7657",
    zip: "38477",
    city: "Jembke",
  },
  {
    id: "7658",
    zip: "38479",
    city: "Tappenbeck",
  },
  {
    id: "12884",
    zip: "38486",
    city: "Klötze / Altmark",
  },
  {
    id: "7659",
    zip: "38489",
    city: "Beetzendorf",
  },
  {
    id: "7660",
    zip: "38518",
    city: "Gifhorn",
  },
  {
    id: "7661",
    zip: "38524",
    city: "Sassenburg",
  },
  {
    id: "7662",
    zip: "38527",
    city: "Meine",
  },
  {
    id: "7663",
    zip: "38528",
    city: "Adenbüttel",
  },
  {
    id: "7664",
    zip: "38530",
    city: "Didderse",
  },
  {
    id: "7665",
    zip: "38531",
    city: "Rötgesbüttel",
  },
  {
    id: "7666",
    zip: "38533",
    city: "Vordorf",
  },
  {
    id: "7667",
    zip: "38536",
    city: "Meinersen",
  },
  {
    id: "7668",
    zip: "38539",
    city: "Müden (Aller)",
  },
  {
    id: "7669",
    zip: "38542",
    city: "Leiferde",
  },
  {
    id: "7670",
    zip: "38543",
    city: "Hillerse",
  },
  {
    id: "7671",
    zip: "38547",
    city: "Calberlah",
  },
  {
    id: "7672",
    zip: "38550",
    city: "Isenbüttel",
  },
  {
    id: "7673",
    zip: "38551",
    city: "Ribbesbüttel",
  },
  {
    id: "7674",
    zip: "38553",
    city: "Wasbüttel",
  },
  {
    id: "7675",
    zip: "38554",
    city: "Weyhausen",
  },
  {
    id: "7676",
    zip: "38556",
    city: "Bokensdorf",
  },
  {
    id: "7677",
    zip: "38557",
    city: "Osloß",
  },
  {
    id: "7678",
    zip: "38559",
    city: "Wagenhoff",
  },
  {
    id: "7679",
    zip: "38640",
    city: "Goslar",
  },
  {
    id: "7680",
    zip: "38642",
    city: "Goslar",
  },
  {
    id: "7681",
    zip: "38644",
    city: "Goslar",
  },
  {
    id: "7682",
    zip: "38667",
    city: "Bad Harzburg",
  },
  {
    id: "7683",
    zip: "38678",
    city: "Clausthal-Zellerfeld",
  },
  {
    id: "7684",
    zip: "38685",
    city: "Langelsheim",
  },
  {
    id: "7685",
    zip: "38690",
    city: "Vienenburg",
  },
  {
    id: "7686",
    zip: "38700",
    city: "Braunlage",
  },
  {
    id: "7687",
    zip: "38704",
    city: "Liebenburg",
  },
  {
    id: "7688",
    zip: "38707",
    city: "Altenau",
  },
  {
    id: "7689",
    zip: "38709",
    city: "Wildemann",
  },
  {
    id: "7690",
    zip: "38723",
    city: "Seesen",
  },
  {
    id: "7691",
    zip: "38729",
    city: "Lutter am Barenberge",
  },
  {
    id: "7692",
    zip: "38820",
    city: "Halberstadt",
  },
  {
    id: "7693",
    zip: "38822",
    city: "Halberstadt",
  },
  {
    id: "7694",
    zip: "38828",
    city: "Wegeleben",
  },
  {
    id: "7695",
    zip: "38829",
    city: "Harsleben",
  },
  {
    id: "7696",
    zip: "38835",
    city: "Osterwieck",
  },
  {
    id: "7697",
    zip: "38836",
    city: "Badersleben",
  },
  {
    id: "13154",
    zip: "38838",
    city: "Dingelstedt am Huy",
  },
  {
    id: "7698",
    zip: "38855",
    city: "Wernigerode",
  },
  {
    id: "12885",
    zip: "38871",
    city: "Ilsenburg / Harz",
  },
  {
    id: "12886",
    zip: "38875",
    city: "Elbingerode / Harz",
  },
  {
    id: "12887",
    zip: "38877",
    city: "Benneckenstein / Harz",
  },
  {
    id: "7699",
    zip: "38879",
    city: "Schierke",
  },
  {
    id: "12888",
    zip: "38889",
    city: "Blankenburg / Harz",
  },
  {
    id: "7700",
    zip: "38895",
    city: "Derenburg",
  },
  {
    id: "7701",
    zip: "38899",
    city: "Hasselfelde",
  },
  {
    id: "7702",
    zip: "39104",
    city: "Magdeburg",
  },
  {
    id: "7703",
    zip: "39106",
    city: "Magdeburg",
  },
  {
    id: "7704",
    zip: "39108",
    city: "Magdeburg",
  },
  {
    id: "7705",
    zip: "39110",
    city: "Magdeburg",
  },
  {
    id: "7706",
    zip: "39112",
    city: "Magdeburg",
  },
  {
    id: "7707",
    zip: "39114",
    city: "Magdeburg",
  },
  {
    id: "7708",
    zip: "39116",
    city: "Magdeburg",
  },
  {
    id: "7709",
    zip: "39118",
    city: "Magdeburg",
  },
  {
    id: "7710",
    zip: "39120",
    city: "Magdeburg",
  },
  {
    id: "7711",
    zip: "39122",
    city: "Magdeburg",
  },
  {
    id: "7712",
    zip: "39124",
    city: "Magdeburg",
  },
  {
    id: "7713",
    zip: "39126",
    city: "Magdeburg",
  },
  {
    id: "7714",
    zip: "39128",
    city: "Magdeburg",
  },
  {
    id: "7715",
    zip: "39130",
    city: "Magdeburg",
  },
  {
    id: "7716",
    zip: "39164",
    city: "Wanzleben",
  },
  {
    id: "7717",
    zip: "39167",
    city: "Niederndodeleben",
  },
  {
    id: "7718",
    zip: "39171",
    city: "Langenweddingen",
  },
  {
    id: "7719",
    zip: "39175",
    city: "Biederitz",
  },
  {
    id: "7720",
    zip: "39179",
    city: "Barleben",
  },
  {
    id: "153640",
    zip: "39217",
    city: "Schönebeck / Elbe",
  },
  {
    id: "12889",
    zip: "39218",
    city: "Schönebeck / Elbe",
  },
  {
    id: "7721",
    zip: "39221",
    city: "Magdeburg",
  },
  {
    id: "12890",
    zip: "39240",
    city: "Calbe / Saale",
  },
  {
    id: "7722",
    zip: "39245",
    city: "Gommern",
  },
  {
    id: "12891",
    zip: "39249",
    city: "Barby / Elbe",
  },
  {
    id: "7723",
    zip: "39261",
    city: "Zerbst",
  },
  {
    id: "7724",
    zip: "39264",
    city: "Lindau",
  },
  {
    id: "7725",
    zip: "39279",
    city: "Loburg",
  },
  {
    id: "13155",
    zip: "39288",
    city: "Burg bei Magdeburg",
  },
  {
    id: "7726",
    zip: "39291",
    city: "Möckern",
  },
  {
    id: "7727",
    zip: "39307",
    city: "Genthin",
  },
  {
    id: "7728",
    zip: "39317",
    city: "Parey",
  },
  {
    id: "7729",
    zip: "39319",
    city: "Jerichow",
  },
  {
    id: "7730",
    zip: "39326",
    city: "Wolmirstedt",
  },
  {
    id: "7731",
    zip: "39340",
    city: "Haldensleben",
  },
  {
    id: "7732",
    zip: "39343",
    city: "Haldensleben",
  },
  {
    id: "7733",
    zip: "39345",
    city: "Haldensleben",
  },
  {
    id: "7734",
    zip: "39356",
    city: "Weferlingen",
  },
  {
    id: "7735",
    zip: "39359",
    city: "Calvörde",
  },
  {
    id: "7736",
    zip: "39365",
    city: "Wefensleben",
  },
  {
    id: "12892",
    zip: "39387",
    city: "Oschersleben / Bode",
  },
  {
    id: "7737",
    zip: "39393",
    city: "Hötensleben",
  },
  {
    id: "7738",
    zip: "39397",
    city: "Gröningen",
  },
  {
    id: "7739",
    zip: "39398",
    city: "Hadmersleben",
  },
  {
    id: "7740",
    zip: "39418",
    city: "Staßfurt",
  },
  {
    id: "7741",
    zip: "39435",
    city: "Egeln",
  },
  {
    id: "7742",
    zip: "39439",
    city: "Güsten",
  },
  {
    id: "7743",
    zip: "39443",
    city: "Förderstedt",
  },
  {
    id: "7744",
    zip: "39444",
    city: "Hecklingen",
  },
  {
    id: "7745",
    zip: "39446",
    city: "Löderburg",
  },
  {
    id: "7746",
    zip: "39448",
    city: "Westeregeln",
  },
  {
    id: "7747",
    zip: "39517",
    city: "Tangerhütte",
  },
  {
    id: "12893",
    zip: "39524",
    city: "Schönhausen / Elbe",
  },
  {
    id: "7748",
    zip: "39539",
    city: "Havelberg",
  },
  {
    id: "7749",
    zip: "39576",
    city: "Stendal",
  },
  {
    id: "7750",
    zip: "39579",
    city: "Kläden",
  },
  {
    id: "7751",
    zip: "39590",
    city: "Tangermünde",
  },
  {
    id: "7752",
    zip: "39596",
    city: "Arneburg",
  },
  {
    id: "7753",
    zip: "39599",
    city: "Uchtspringe",
  },
  {
    id: "12894",
    zip: "39606",
    city: "Osterburg / Altmark",
  },
  {
    id: "12895",
    zip: "39615",
    city: "Seehausen / Altmark",
  },
  {
    id: "12896",
    zip: "39619",
    city: "Arendsee / Altmark",
  },
  {
    id: "12897",
    zip: "39624",
    city: "Kalbe / Milde",
  },
  {
    id: "12898",
    zip: "39629",
    city: "Bismark / Altmark",
  },
  {
    id: "7754",
    zip: "39638",
    city: "Gardelegen",
  },
  {
    id: "7755",
    zip: "39646",
    city: "Oebisfelde",
  },
  {
    id: "7756",
    zip: "39649",
    city: "Mieste",
  },
  {
    id: "7757",
    zip: "40210",
    city: "Düsseldorf",
  },
  {
    id: "7758",
    zip: "40211",
    city: "Düsseldorf",
  },
  {
    id: "7759",
    zip: "40212",
    city: "Düsseldorf",
  },
  {
    id: "7760",
    zip: "40213",
    city: "Düsseldorf",
  },
  {
    id: "7761",
    zip: "40215",
    city: "Düsseldorf",
  },
  {
    id: "7762",
    zip: "40217",
    city: "Düsseldorf",
  },
  {
    id: "7763",
    zip: "40219",
    city: "Düsseldorf",
  },
  {
    id: "7764",
    zip: "40221",
    city: "Düsseldorf",
  },
  {
    id: "7765",
    zip: "40223",
    city: "Düsseldorf",
  },
  {
    id: "7766",
    zip: "40225",
    city: "Düsseldorf",
  },
  {
    id: "7767",
    zip: "40227",
    city: "Düsseldorf",
  },
  {
    id: "7768",
    zip: "40229",
    city: "Düsseldorf",
  },
  {
    id: "7769",
    zip: "40231",
    city: "Düsseldorf",
  },
  {
    id: "7770",
    zip: "40233",
    city: "Düsseldorf",
  },
  {
    id: "7771",
    zip: "40235",
    city: "Düsseldorf",
  },
  {
    id: "7772",
    zip: "40237",
    city: "Düsseldorf",
  },
  {
    id: "7773",
    zip: "40239",
    city: "Düsseldorf",
  },
  {
    id: "7774",
    zip: "40468",
    city: "Düsseldorf",
  },
  {
    id: "7775",
    zip: "40470",
    city: "Düsseldorf",
  },
  {
    id: "7776",
    zip: "40472",
    city: "Düsseldorf",
  },
  {
    id: "7777",
    zip: "40474",
    city: "Düsseldorf",
  },
  {
    id: "7778",
    zip: "40476",
    city: "Düsseldorf",
  },
  {
    id: "7779",
    zip: "40477",
    city: "Düsseldorf",
  },
  {
    id: "7780",
    zip: "40479",
    city: "Düsseldorf",
  },
  {
    id: "7781",
    zip: "40489",
    city: "Düsseldorf",
  },
  {
    id: "7782",
    zip: "40545",
    city: "Düsseldorf",
  },
  {
    id: "7783",
    zip: "40547",
    city: "Düsseldorf",
  },
  {
    id: "7784",
    zip: "40549",
    city: "Düsseldorf",
  },
  {
    id: "7785",
    zip: "40589",
    city: "Düsseldorf",
  },
  {
    id: "7787",
    zip: "40591",
    city: "Düsseldorf",
  },
  {
    id: "7788",
    zip: "40593",
    city: "Düsseldorf",
  },
  {
    id: "7789",
    zip: "40595",
    city: "Düsseldorf",
  },
  {
    id: "7790",
    zip: "40597",
    city: "Düsseldorf",
  },
  {
    id: "7786",
    zip: "40599",
    city: "Düsseldorf",
  },
  {
    id: "7791",
    zip: "40625",
    city: "Düsseldorf",
  },
  {
    id: "7792",
    zip: "40627",
    city: "Düsseldorf",
  },
  {
    id: "7793",
    zip: "40629",
    city: "Düsseldorf",
  },
  {
    id: "7794",
    zip: "40667",
    city: "Meerbusch",
  },
  {
    id: "7795",
    zip: "40668",
    city: "Meerbusch",
  },
  {
    id: "7796",
    zip: "40670",
    city: "Meerbusch",
  },
  {
    id: "7797",
    zip: "40699",
    city: "Erkrath",
  },
  {
    id: "7798",
    zip: "40721",
    city: "Hilden",
  },
  {
    id: "7799",
    zip: "40723",
    city: "Hilden",
  },
  {
    id: "7801",
    zip: "40724",
    city: "Hilden",
  },
  {
    id: "7802",
    zip: "40764",
    city: "Langenfeld (Rheinland)",
  },
  {
    id: "7803",
    zip: "40789",
    city: "Monheim am Rhein",
  },
  {
    id: "7804",
    zip: "40822",
    city: "Mettmann",
  },
  {
    id: "7805",
    zip: "40878",
    city: "Ratingen",
  },
  {
    id: "7806",
    zip: "40880",
    city: "Ratingen",
  },
  {
    id: "7807",
    zip: "40882",
    city: "Ratingen",
  },
  {
    id: "7808",
    zip: "40883",
    city: "Ratingen",
  },
  {
    id: "7809",
    zip: "40885",
    city: "Ratingen",
  },
  {
    id: "7810",
    zip: "41061",
    city: "Mönchengladbach",
  },
  {
    id: "7811",
    zip: "41063",
    city: "Mönchengladbach",
  },
  {
    id: "7812",
    zip: "41065",
    city: "Mönchengladbach",
  },
  {
    id: "7813",
    zip: "41066",
    city: "Mönchengladbach",
  },
  {
    id: "7814",
    zip: "41068",
    city: "Mönchengladbach",
  },
  {
    id: "7815",
    zip: "41069",
    city: "Mönchengladbach",
  },
  {
    id: "7816",
    zip: "41169",
    city: "Mönchengladbach",
  },
  {
    id: "7817",
    zip: "41179",
    city: "Mönchengladbach",
  },
  {
    id: "7818",
    zip: "41189",
    city: "Mönchengladbach",
  },
  {
    id: "7819",
    zip: "41199",
    city: "Mönchengladbach",
  },
  {
    id: "7800",
    zip: "41236",
    city: "Mönchengladbach",
  },
  {
    id: "7820",
    zip: "41238",
    city: "Mönchengladbach",
  },
  {
    id: "7821",
    zip: "41239",
    city: "Mönchengladbach",
  },
  {
    id: "7822",
    zip: "41334",
    city: "Nettetal",
  },
  {
    id: "7823",
    zip: "41352",
    city: "Korschenbroich",
  },
  {
    id: "7824",
    zip: "41363",
    city: "Jüchen",
  },
  {
    id: "7825",
    zip: "41366",
    city: "Schwalmtal",
  },
  {
    id: "7826",
    zip: "41372",
    city: "Niederkrüchten",
  },
  {
    id: "7827",
    zip: "41379",
    city: "Brüggen",
  },
  {
    id: "7828",
    zip: "41460",
    city: "Neuss",
  },
  {
    id: "7829",
    zip: "41462",
    city: "Neuss",
  },
  {
    id: "7830",
    zip: "41464",
    city: "Neuss",
  },
  {
    id: "7831",
    zip: "41466",
    city: "Neuss",
  },
  {
    id: "7832",
    zip: "41468",
    city: "Neuss",
  },
  {
    id: "7833",
    zip: "41469",
    city: "Neuss",
  },
  {
    id: "7834",
    zip: "41470",
    city: "Neuss",
  },
  {
    id: "7835",
    zip: "41472",
    city: "Neuss",
  },
  {
    id: "7836",
    zip: "41515",
    city: "Grevenbroich",
  },
  {
    id: "7837",
    zip: "41516",
    city: "Grevenbroich",
  },
  {
    id: "7838",
    zip: "41517",
    city: "Grevenbroich",
  },
  {
    id: "7839",
    zip: "41539",
    city: "Dormagen",
  },
  {
    id: "7840",
    zip: "41540",
    city: "Dormagen",
  },
  {
    id: "7841",
    zip: "41541",
    city: "Dormagen",
  },
  {
    id: "7842",
    zip: "41542",
    city: "Dormagen",
  },
  {
    id: "7843",
    zip: "41564",
    city: "Kaarst",
  },
  {
    id: "7844",
    zip: "41569",
    city: "Rommerskirchen",
  },
  {
    id: "7845",
    zip: "41747",
    city: "Viersen",
  },
  {
    id: "7846",
    zip: "41748",
    city: "Viersen",
  },
  {
    id: "7847",
    zip: "41749",
    city: "Viersen",
  },
  {
    id: "7848",
    zip: "41751",
    city: "Viersen",
  },
  {
    id: "7849",
    zip: "41812",
    city: "Erkelenz",
  },
  {
    id: "7850",
    zip: "41836",
    city: "Hückelhoven",
  },
  {
    id: "7851",
    zip: "41844",
    city: "Wegberg",
  },
  {
    id: "7852",
    zip: "41849",
    city: "Wassenberg",
  },
  {
    id: "7853",
    zip: "42103",
    city: "Wuppertal",
  },
  {
    id: "7854",
    zip: "42105",
    city: "Wuppertal",
  },
  {
    id: "7855",
    zip: "42107",
    city: "Wuppertal",
  },
  {
    id: "7856",
    zip: "42109",
    city: "Wuppertal",
  },
  {
    id: "7857",
    zip: "42111",
    city: "Wuppertal",
  },
  {
    id: "7860",
    zip: "42113",
    city: "Wuppertal",
  },
  {
    id: "7861",
    zip: "42115",
    city: "Wuppertal",
  },
  {
    id: "7862",
    zip: "42117",
    city: "Wuppertal",
  },
  {
    id: "7863",
    zip: "42119",
    city: "Wuppertal",
  },
  {
    id: "7864",
    zip: "42275",
    city: "Wuppertal",
  },
  {
    id: "7858",
    zip: "42277",
    city: "Wuppertal",
  },
  {
    id: "7859",
    zip: "42279",
    city: "Wuppertal",
  },
  {
    id: "7865",
    zip: "42281",
    city: "Wuppertal",
  },
  {
    id: "7866",
    zip: "42283",
    city: "Wuppertal",
  },
  {
    id: "7867",
    zip: "42285",
    city: "Wuppertal",
  },
  {
    id: "7868",
    zip: "42287",
    city: "Wuppertal",
  },
  {
    id: "7869",
    zip: "42289",
    city: "Wuppertal",
  },
  {
    id: "7870",
    zip: "42327",
    city: "Wuppertal",
  },
  {
    id: "7871",
    zip: "42329",
    city: "Wuppertal",
  },
  {
    id: "7872",
    zip: "42349",
    city: "Wuppertal",
  },
  {
    id: "7873",
    zip: "42369",
    city: "Wuppertal",
  },
  {
    id: "7874",
    zip: "42389",
    city: "Wuppertal",
  },
  {
    id: "7875",
    zip: "42399",
    city: "Wuppertal",
  },
  {
    id: "7876",
    zip: "42477",
    city: "Radevormwald",
  },
  {
    id: "7877",
    zip: "42489",
    city: "Wülfrath",
  },
  {
    id: "7878",
    zip: "42499",
    city: "Hückeswagen",
  },
  {
    id: "7879",
    zip: "42549",
    city: "Velbert",
  },
  {
    id: "7880",
    zip: "42551",
    city: "Velbert",
  },
  {
    id: "7881",
    zip: "42553",
    city: "Velbert",
  },
  {
    id: "7882",
    zip: "42555",
    city: "Velbert",
  },
  {
    id: "7883",
    zip: "42579",
    city: "Heiligenhaus",
  },
  {
    id: "7884",
    zip: "42651",
    city: "Solingen",
  },
  {
    id: "7885",
    zip: "42653",
    city: "Solingen",
  },
  {
    id: "7886",
    zip: "42655",
    city: "Solingen",
  },
  {
    id: "7887",
    zip: "42657",
    city: "Solingen",
  },
  {
    id: "7888",
    zip: "42659",
    city: "Solingen",
  },
  {
    id: "7889",
    zip: "42697",
    city: "Solingen",
  },
  {
    id: "7890",
    zip: "42699",
    city: "Solingen",
  },
  {
    id: "7891",
    zip: "42719",
    city: "Solingen",
  },
  {
    id: "7892",
    zip: "42781",
    city: "Haan",
  },
  {
    id: "7893",
    zip: "42799",
    city: "Leichlingen (Rheinland)",
  },
  {
    id: "7894",
    zip: "42853",
    city: "Remscheid",
  },
  {
    id: "7895",
    zip: "42855",
    city: "Remscheid",
  },
  {
    id: "7896",
    zip: "42857",
    city: "Remscheid",
  },
  {
    id: "7897",
    zip: "42859",
    city: "Remscheid",
  },
  {
    id: "7898",
    zip: "42897",
    city: "Remscheid",
  },
  {
    id: "7899",
    zip: "42899",
    city: "Remscheid",
  },
  {
    id: "7900",
    zip: "42929",
    city: "Wermelskirchen",
  },
  {
    id: "7901",
    zip: "44135",
    city: "Dortmund",
  },
  {
    id: "7902",
    zip: "44137",
    city: "Dortmund",
  },
  {
    id: "7903",
    zip: "44139",
    city: "Dortmund",
  },
  {
    id: "7904",
    zip: "44141",
    city: "Dortmund",
  },
  {
    id: "7905",
    zip: "44143",
    city: "Dortmund",
  },
  {
    id: "7906",
    zip: "44145",
    city: "Dortmund",
  },
  {
    id: "7907",
    zip: "44147",
    city: "Dortmund",
  },
  {
    id: "7908",
    zip: "44149",
    city: "Dortmund",
  },
  {
    id: "7909",
    zip: "44225",
    city: "Dortmund",
  },
  {
    id: "7910",
    zip: "44227",
    city: "Dortmund",
  },
  {
    id: "7911",
    zip: "44229",
    city: "Dortmund",
  },
  {
    id: "7912",
    zip: "44263",
    city: "Dortmund",
  },
  {
    id: "7913",
    zip: "44265",
    city: "Dortmund",
  },
  {
    id: "7914",
    zip: "44267",
    city: "Dortmund",
  },
  {
    id: "7915",
    zip: "44269",
    city: "Dortmund",
  },
  {
    id: "7916",
    zip: "44287",
    city: "Dortmund",
  },
  {
    id: "7917",
    zip: "44289",
    city: "Dortmund",
  },
  {
    id: "7918",
    zip: "44309",
    city: "Dortmund",
  },
  {
    id: "7919",
    zip: "44319",
    city: "Dortmund",
  },
  {
    id: "7920",
    zip: "44328",
    city: "Dortmund",
  },
  {
    id: "7921",
    zip: "44329",
    city: "Dortmund",
  },
  {
    id: "7922",
    zip: "44339",
    city: "Dortmund",
  },
  {
    id: "7923",
    zip: "44357",
    city: "Dortmund",
  },
  {
    id: "7924",
    zip: "44359",
    city: "Dortmund",
  },
  {
    id: "7925",
    zip: "44369",
    city: "Dortmund",
  },
  {
    id: "7926",
    zip: "44379",
    city: "Dortmund",
  },
  {
    id: "7927",
    zip: "44388",
    city: "Dortmund",
  },
  {
    id: "7928",
    zip: "44532",
    city: "Lünen",
  },
  {
    id: "7929",
    zip: "44534",
    city: "Lünen",
  },
  {
    id: "7930",
    zip: "44536",
    city: "Lünen",
  },
  {
    id: "7931",
    zip: "44575",
    city: "Castrop-Rauxel",
  },
  {
    id: "7932",
    zip: "44577",
    city: "Castrop-Rauxel",
  },
  {
    id: "7933",
    zip: "44579",
    city: "Castrop-Rauxel",
  },
  {
    id: "7934",
    zip: "44581",
    city: "Castrop-Rauxel",
  },
  {
    id: "7935",
    zip: "44623",
    city: "Herne",
  },
  {
    id: "7936",
    zip: "44625",
    city: "Herne",
  },
  {
    id: "7937",
    zip: "44627",
    city: "Herne",
  },
  {
    id: "7938",
    zip: "44628",
    city: "Herne",
  },
  {
    id: "7939",
    zip: "44629",
    city: "Herne",
  },
  {
    id: "7940",
    zip: "44649",
    city: "Herne",
  },
  {
    id: "7941",
    zip: "44651",
    city: "Herne",
  },
  {
    id: "7942",
    zip: "44652",
    city: "Herne",
  },
  {
    id: "7943",
    zip: "44653",
    city: "Herne",
  },
  {
    id: "7944",
    zip: "44787",
    city: "Bochum",
  },
  {
    id: "7945",
    zip: "44789",
    city: "Bochum",
  },
  {
    id: "7946",
    zip: "44791",
    city: "Bochum",
  },
  {
    id: "7947",
    zip: "44793",
    city: "Bochum",
  },
  {
    id: "7948",
    zip: "44795",
    city: "Bochum",
  },
  {
    id: "7949",
    zip: "44797",
    city: "Bochum",
  },
  {
    id: "7950",
    zip: "44799",
    city: "Bochum",
  },
  {
    id: "7951",
    zip: "44801",
    city: "Bochum",
  },
  {
    id: "7952",
    zip: "44803",
    city: "Bochum",
  },
  {
    id: "7953",
    zip: "44805",
    city: "Bochum",
  },
  {
    id: "7954",
    zip: "44807",
    city: "Bochum",
  },
  {
    id: "7955",
    zip: "44809",
    city: "Bochum",
  },
  {
    id: "7956",
    zip: "44866",
    city: "Bochum",
  },
  {
    id: "7957",
    zip: "44867",
    city: "Bochum",
  },
  {
    id: "7958",
    zip: "44869",
    city: "Bochum",
  },
  {
    id: "7959",
    zip: "44879",
    city: "Bochum",
  },
  {
    id: "7960",
    zip: "44892",
    city: "Bochum",
  },
  {
    id: "7961",
    zip: "44894",
    city: "Bochum",
  },
  {
    id: "7962",
    zip: "45127",
    city: "Essen",
  },
  {
    id: "7963",
    zip: "45128",
    city: "Essen",
  },
  {
    id: "7964",
    zip: "45130",
    city: "Essen",
  },
  {
    id: "7965",
    zip: "45131",
    city: "Essen",
  },
  {
    id: "7966",
    zip: "45133",
    city: "Essen",
  },
  {
    id: "7967",
    zip: "45134",
    city: "Essen",
  },
  {
    id: "7968",
    zip: "45136",
    city: "Essen",
  },
  {
    id: "7969",
    zip: "45138",
    city: "Essen",
  },
  {
    id: "7970",
    zip: "45139",
    city: "Essen",
  },
  {
    id: "7971",
    zip: "45141",
    city: "Essen",
  },
  {
    id: "7972",
    zip: "45143",
    city: "Essen",
  },
  {
    id: "7973",
    zip: "45144",
    city: "Essen",
  },
  {
    id: "7974",
    zip: "45145",
    city: "Essen",
  },
  {
    id: "7975",
    zip: "45147",
    city: "Essen",
  },
  {
    id: "7976",
    zip: "45149",
    city: "Essen",
  },
  {
    id: "7977",
    zip: "45219",
    city: "Essen",
  },
  {
    id: "7978",
    zip: "45239",
    city: "Essen",
  },
  {
    id: "7979",
    zip: "45257",
    city: "Essen",
  },
  {
    id: "7980",
    zip: "45259",
    city: "Essen",
  },
  {
    id: "7981",
    zip: "45276",
    city: "Essen",
  },
  {
    id: "7982",
    zip: "45277",
    city: "Essen",
  },
  {
    id: "7983",
    zip: "45279",
    city: "Essen",
  },
  {
    id: "7984",
    zip: "45289",
    city: "Essen",
  },
  {
    id: "7985",
    zip: "45307",
    city: "Essen",
  },
  {
    id: "7986",
    zip: "45309",
    city: "Essen",
  },
  {
    id: "7987",
    zip: "45326",
    city: "Essen",
  },
  {
    id: "7988",
    zip: "45327",
    city: "Essen",
  },
  {
    id: "7989",
    zip: "45329",
    city: "Essen",
  },
  {
    id: "7990",
    zip: "45355",
    city: "Essen",
  },
  {
    id: "7991",
    zip: "45356",
    city: "Essen",
  },
  {
    id: "7992",
    zip: "45357",
    city: "Essen",
  },
  {
    id: "7993",
    zip: "45359",
    city: "Essen",
  },
  {
    id: "7994",
    zip: "45468",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "7995",
    zip: "45470",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "7996",
    zip: "45472",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "7997",
    zip: "45473",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "7998",
    zip: "45475",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "7999",
    zip: "45476",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "8000",
    zip: "45478",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "8001",
    zip: "45479",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "8002",
    zip: "45481",
    city: "Mülheim an der Ruhr",
  },
  {
    id: "8003",
    zip: "45525",
    city: "Hattingen",
  },
  {
    id: "8004",
    zip: "45527",
    city: "Hattingen",
  },
  {
    id: "8005",
    zip: "45529",
    city: "Hattingen",
  },
  {
    id: "8006",
    zip: "45549",
    city: "Sprockhövel",
  },
  {
    id: "8007",
    zip: "45657",
    city: "Recklinghausen",
  },
  {
    id: "8008",
    zip: "45659",
    city: "Recklinghausen",
  },
  {
    id: "8009",
    zip: "45661",
    city: "Recklinghausen",
  },
  {
    id: "8010",
    zip: "45663",
    city: "Recklinghausen",
  },
  {
    id: "8011",
    zip: "45665",
    city: "Recklinghausen",
  },
  {
    id: "8012",
    zip: "45699",
    city: "Herten",
  },
  {
    id: "8013",
    zip: "45701",
    city: "Herten",
  },
  {
    id: "8014",
    zip: "45711",
    city: "Datteln",
  },
  {
    id: "8015",
    zip: "45721",
    city: "Haltern",
  },
  {
    id: "8016",
    zip: "45731",
    city: "Waltrop",
  },
  {
    id: "8017",
    zip: "45739",
    city: "Oer-Erkenschwick",
  },
  {
    id: "8018",
    zip: "45768",
    city: "Marl",
  },
  {
    id: "8019",
    zip: "45770",
    city: "Marl",
  },
  {
    id: "8020",
    zip: "45772",
    city: "Marl",
  },
  {
    id: "8021",
    zip: "45879",
    city: "Gelsenkirchen",
  },
  {
    id: "8023",
    zip: "45881",
    city: "Gelsenkirchen",
  },
  {
    id: "8024",
    zip: "45883",
    city: "Gelsenkirchen",
  },
  {
    id: "8025",
    zip: "45884",
    city: "Gelsenkirchen",
  },
  {
    id: "8026",
    zip: "45886",
    city: "Gelsenkirchen",
  },
  {
    id: "8027",
    zip: "45888",
    city: "Gelsenkirchen",
  },
  {
    id: "8028",
    zip: "45889",
    city: "Gelsenkirchen",
  },
  {
    id: "8029",
    zip: "45891",
    city: "Gelsenkirchen",
  },
  {
    id: "8030",
    zip: "45892",
    city: "Gelsenkirchen",
  },
  {
    id: "8031",
    zip: "45894",
    city: "Gelsenkirchen",
  },
  {
    id: "8032",
    zip: "45896",
    city: "Gelsenkirchen",
  },
  {
    id: "8033",
    zip: "45897",
    city: "Gelsenkirchen",
  },
  {
    id: "8034",
    zip: "45899",
    city: "Gelsenkirchen",
  },
  {
    id: "8035",
    zip: "45964",
    city: "Gladbeck",
  },
  {
    id: "8036",
    zip: "45966",
    city: "Gladbeck",
  },
  {
    id: "8037",
    zip: "45968",
    city: "Gladbeck",
  },
  {
    id: "8022",
    zip: "46045",
    city: "Oberhausen",
  },
  {
    id: "8038",
    zip: "46047",
    city: "Oberhausen",
  },
  {
    id: "8039",
    zip: "46049",
    city: "Oberhausen",
  },
  {
    id: "8040",
    zip: "46117",
    city: "Oberhausen",
  },
  {
    id: "8041",
    zip: "46119",
    city: "Oberhausen",
  },
  {
    id: "8042",
    zip: "46145",
    city: "Oberhausen",
  },
  {
    id: "8043",
    zip: "46147",
    city: "Oberhausen",
  },
  {
    id: "8044",
    zip: "46149",
    city: "Oberhausen",
  },
  {
    id: "8045",
    zip: "46236",
    city: "Bottrop",
  },
  {
    id: "8046",
    zip: "46238",
    city: "Bottrop",
  },
  {
    id: "8047",
    zip: "46240",
    city: "Bottrop",
  },
  {
    id: "8048",
    zip: "46242",
    city: "Bottrop",
  },
  {
    id: "8049",
    zip: "46244",
    city: "Bottrop",
  },
  {
    id: "8050",
    zip: "46282",
    city: "Dorsten",
  },
  {
    id: "8051",
    zip: "46284",
    city: "Dorsten",
  },
  {
    id: "8052",
    zip: "46286",
    city: "Dorsten",
  },
  {
    id: "8053",
    zip: "46325",
    city: "Borken",
  },
  {
    id: "8054",
    zip: "46342",
    city: "Velen",
  },
  {
    id: "8055",
    zip: "46348",
    city: "Raesfeld",
  },
  {
    id: "8056",
    zip: "46354",
    city: "Südlohn",
  },
  {
    id: "8057",
    zip: "46359",
    city: "Heiden",
  },
  {
    id: "8058",
    zip: "46395",
    city: "Bocholt",
  },
  {
    id: "8059",
    zip: "46397",
    city: "Bocholt",
  },
  {
    id: "8060",
    zip: "46399",
    city: "Bocholt",
  },
  {
    id: "8061",
    zip: "46414",
    city: "Rhede",
  },
  {
    id: "8062",
    zip: "46419",
    city: "Isselburg",
  },
  {
    id: "8063",
    zip: "46446",
    city: "Emmerich",
  },
  {
    id: "8064",
    zip: "46459",
    city: "Rees",
  },
  {
    id: "8065",
    zip: "46483",
    city: "Wesel",
  },
  {
    id: "8066",
    zip: "46485",
    city: "Wesel",
  },
  {
    id: "8067",
    zip: "46487",
    city: "Wesel",
  },
  {
    id: "8068",
    zip: "46499",
    city: "Hamminkeln",
  },
  {
    id: "8069",
    zip: "46509",
    city: "Xanten",
  },
  {
    id: "8070",
    zip: "46514",
    city: "Schermbeck",
  },
  {
    id: "8071",
    zip: "46519",
    city: "Alpen",
  },
  {
    id: "8072",
    zip: "46535",
    city: "Dinslaken",
  },
  {
    id: "8073",
    zip: "46537",
    city: "Dinslaken",
  },
  {
    id: "8074",
    zip: "46539",
    city: "Dinslaken",
  },
  {
    id: "8075",
    zip: "46562",
    city: "Voerde (Niederrhein)",
  },
  {
    id: "8076",
    zip: "46569",
    city: "Hünxe",
  },
  {
    id: "8077",
    zip: "47051",
    city: "Duisburg",
  },
  {
    id: "8078",
    zip: "47053",
    city: "Duisburg",
  },
  {
    id: "8079",
    zip: "47055",
    city: "Duisburg",
  },
  {
    id: "8080",
    zip: "47057",
    city: "Duisburg",
  },
  {
    id: "8081",
    zip: "47058",
    city: "Duisburg",
  },
  {
    id: "8082",
    zip: "47059",
    city: "Duisburg",
  },
  {
    id: "8083",
    zip: "47119",
    city: "Duisburg",
  },
  {
    id: "8084",
    zip: "47137",
    city: "Duisburg",
  },
  {
    id: "8085",
    zip: "47138",
    city: "Duisburg",
  },
  {
    id: "8086",
    zip: "47139",
    city: "Duisburg",
  },
  {
    id: "8087",
    zip: "47166",
    city: "Duisburg",
  },
  {
    id: "8088",
    zip: "47167",
    city: "Duisburg",
  },
  {
    id: "8089",
    zip: "47169",
    city: "Duisburg",
  },
  {
    id: "8090",
    zip: "47178",
    city: "Duisburg",
  },
  {
    id: "8091",
    zip: "47179",
    city: "Duisburg",
  },
  {
    id: "8092",
    zip: "47198",
    city: "Duisburg",
  },
  {
    id: "8093",
    zip: "47199",
    city: "Duisburg",
  },
  {
    id: "8094",
    zip: "47226",
    city: "Duisburg",
  },
  {
    id: "8095",
    zip: "47228",
    city: "Duisburg",
  },
  {
    id: "8096",
    zip: "47229",
    city: "Duisburg",
  },
  {
    id: "8097",
    zip: "47239",
    city: "Duisburg",
  },
  {
    id: "8098",
    zip: "47249",
    city: "Duisburg",
  },
  {
    id: "8099",
    zip: "47259",
    city: "Duisburg",
  },
  {
    id: "8100",
    zip: "47269",
    city: "Duisburg",
  },
  {
    id: "8101",
    zip: "47279",
    city: "Duisburg",
  },
  {
    id: "8102",
    zip: "47441",
    city: "Moers",
  },
  {
    id: "8103",
    zip: "47443",
    city: "Moers",
  },
  {
    id: "8104",
    zip: "47445",
    city: "Moers",
  },
  {
    id: "8105",
    zip: "47447",
    city: "Moers",
  },
  {
    id: "8106",
    zip: "47475",
    city: "Kamp-Lintfort",
  },
  {
    id: "8107",
    zip: "47495",
    city: "Rheinberg",
  },
  {
    id: "8108",
    zip: "47506",
    city: "Neukirchen-Vluyn",
  },
  {
    id: "8109",
    zip: "47509",
    city: "Rheurdt",
  },
  {
    id: "8110",
    zip: "47533",
    city: "Kleve",
  },
  {
    id: "8111",
    zip: "47546",
    city: "Kalkar",
  },
  {
    id: "8112",
    zip: "47551",
    city: "Bedburg-Hau",
  },
  {
    id: "8113",
    zip: "47559",
    city: "Kranenburg",
  },
  {
    id: "8114",
    zip: "47574",
    city: "Goch",
  },
  {
    id: "8115",
    zip: "47589",
    city: "Uedem",
  },
  {
    id: "8116",
    zip: "47608",
    city: "Geldern",
  },
  {
    id: "8117",
    zip: "47623",
    city: "Kevelaer",
  },
  {
    id: "8118",
    zip: "47624",
    city: "Kevelaer",
  },
  {
    id: "8119",
    zip: "47625",
    city: "Kevelaer",
  },
  {
    id: "8120",
    zip: "47626",
    city: "Kevelaer",
  },
  {
    id: "8121",
    zip: "47627",
    city: "Kevelaer",
  },
  {
    id: "8122",
    zip: "47638",
    city: "Straelen",
  },
  {
    id: "8123",
    zip: "47647",
    city: "Kerken",
  },
  {
    id: "8124",
    zip: "47652",
    city: "Weeze",
  },
  {
    id: "8125",
    zip: "47661",
    city: "Issum",
  },
  {
    id: "8126",
    zip: "47665",
    city: "Sonsbeck",
  },
  {
    id: "8127",
    zip: "47669",
    city: "Wachtendonk",
  },
  {
    id: "8128",
    zip: "47798",
    city: "Krefeld",
  },
  {
    id: "8129",
    zip: "47799",
    city: "Krefeld",
  },
  {
    id: "8130",
    zip: "47800",
    city: "Krefeld",
  },
  {
    id: "8131",
    zip: "47802",
    city: "Krefeld",
  },
  {
    id: "8133",
    zip: "47803",
    city: "Krefeld",
  },
  {
    id: "8134",
    zip: "47804",
    city: "Krefeld",
  },
  {
    id: "8135",
    zip: "47805",
    city: "Krefeld",
  },
  {
    id: "8136",
    zip: "47807",
    city: "Krefeld",
  },
  {
    id: "8137",
    zip: "47809",
    city: "Krefeld",
  },
  {
    id: "8138",
    zip: "47829",
    city: "Krefeld",
  },
  {
    id: "8139",
    zip: "47839",
    city: "Krefeld",
  },
  {
    id: "8140",
    zip: "47877",
    city: "Willich",
  },
  {
    id: "8141",
    zip: "47906",
    city: "Kempen",
  },
  {
    id: "8142",
    zip: "47918",
    city: "Tönisvorst",
  },
  {
    id: "8143",
    zip: "47929",
    city: "Grefrath",
  },
  {
    id: "8144",
    zip: "48143",
    city: "Münster",
  },
  {
    id: "8145",
    zip: "48145",
    city: "Münster",
  },
  {
    id: "8146",
    zip: "48147",
    city: "Münster",
  },
  {
    id: "8147",
    zip: "48149",
    city: "Münster",
  },
  {
    id: "8148",
    zip: "48151",
    city: "Münster",
  },
  {
    id: "8149",
    zip: "48153",
    city: "Münster",
  },
  {
    id: "8150",
    zip: "48155",
    city: "Münster",
  },
  {
    id: "8151",
    zip: "48157",
    city: "Münster",
  },
  {
    id: "8152",
    zip: "48159",
    city: "Münster",
  },
  {
    id: "8153",
    zip: "48161",
    city: "Münster",
  },
  {
    id: "8154",
    zip: "48163",
    city: "Münster",
  },
  {
    id: "8155",
    zip: "48165",
    city: "Münster",
  },
  {
    id: "8156",
    zip: "48167",
    city: "Münster",
  },
  {
    id: "8157",
    zip: "48231",
    city: "Warendorf",
  },
  {
    id: "8158",
    zip: "48249",
    city: "Dülmen",
  },
  {
    id: "8159",
    zip: "48268",
    city: "Greven",
  },
  {
    id: "8160",
    zip: "48282",
    city: "Emsdetten",
  },
  {
    id: "8161",
    zip: "48291",
    city: "Telgte",
  },
  {
    id: "8162",
    zip: "48301",
    city: "Nottuln",
  },
  {
    id: "8163",
    zip: "48308",
    city: "Senden",
  },
  {
    id: "8164",
    zip: "48317",
    city: "Drensteinfurt",
  },
  {
    id: "8165",
    zip: "48324",
    city: "Sendenhorst",
  },
  {
    id: "8166",
    zip: "48329",
    city: "Havixbeck",
  },
  {
    id: "8167",
    zip: "48336",
    city: "Sassenberg",
  },
  {
    id: "8168",
    zip: "48341",
    city: "Altenberge",
  },
  {
    id: "8169",
    zip: "48346",
    city: "Ostbevern",
  },
  {
    id: "8170",
    zip: "48351",
    city: "Everswinkel",
  },
  {
    id: "8171",
    zip: "48356",
    city: "Nordwalde",
  },
  {
    id: "8172",
    zip: "48361",
    city: "Beelen",
  },
  {
    id: "8173",
    zip: "48366",
    city: "Laer",
  },
  {
    id: "8174",
    zip: "48369",
    city: "Saerbeck",
  },
  {
    id: "8132",
    zip: "48429",
    city: "Rheine",
  },
  {
    id: "8175",
    zip: "48431",
    city: "Rheine",
  },
  {
    id: "8176",
    zip: "48432",
    city: "Rheine",
  },
  {
    id: "8177",
    zip: "48455",
    city: "Bad Bentheim",
  },
  {
    id: "8178",
    zip: "48465",
    city: "Schüttorf",
  },
  {
    id: "8179",
    zip: "48477",
    city: "Hörstel",
  },
  {
    id: "8180",
    zip: "48480",
    city: "Spelle",
  },
  {
    id: "8181",
    zip: "48485",
    city: "Neuenkirchen",
  },
  {
    id: "8182",
    zip: "48488",
    city: "Emsbüren",
  },
  {
    id: "8183",
    zip: "48493",
    city: "Wettringen",
  },
  {
    id: "8184",
    zip: "48496",
    city: "Hopsten",
  },
  {
    id: "8185",
    zip: "48499",
    city: "Salzbergen",
  },
  {
    id: "8186",
    zip: "48527",
    city: "Nordhorn",
  },
  {
    id: "8187",
    zip: "48529",
    city: "Nordhorn",
  },
  {
    id: "8188",
    zip: "48531",
    city: "Nordhorn",
  },
  {
    id: "8189",
    zip: "48565",
    city: "Steinfurt",
  },
  {
    id: "13156",
    zip: "48599",
    city: "Gronau (Westfalen)",
  },
  {
    id: "8190",
    zip: "48607",
    city: "Ochtrup",
  },
  {
    id: "8191",
    zip: "48612",
    city: "Horstmar",
  },
  {
    id: "8192",
    zip: "48619",
    city: "Heek",
  },
  {
    id: "8193",
    zip: "48624",
    city: "Schöppingen",
  },
  {
    id: "8194",
    zip: "48629",
    city: "Metelen",
  },
  {
    id: "8195",
    zip: "48653",
    city: "Coesfeld",
  },
  {
    id: "8196",
    zip: "48683",
    city: "Ahaus",
  },
  {
    id: "8197",
    zip: "48691",
    city: "Vreden",
  },
  {
    id: "8198",
    zip: "48703",
    city: "Stadtlohn",
  },
  {
    id: "8199",
    zip: "48712",
    city: "Gescher",
  },
  {
    id: "8200",
    zip: "48720",
    city: "Rosendahl",
  },
  {
    id: "8201",
    zip: "48727",
    city: "Billerbeck",
  },
  {
    id: "8202",
    zip: "48734",
    city: "Reken",
  },
  {
    id: "8203",
    zip: "48739",
    city: "Legden",
  },
  {
    id: "8204",
    zip: "49074",
    city: "Osnabrück",
  },
  {
    id: "8205",
    zip: "49076",
    city: "Osnabrück",
  },
  {
    id: "8206",
    zip: "49078",
    city: "Osnabrück",
  },
  {
    id: "8207",
    zip: "49080",
    city: "Osnabrück",
  },
  {
    id: "8208",
    zip: "49082",
    city: "Osnabrück",
  },
  {
    id: "8209",
    zip: "49084",
    city: "Osnabrück",
  },
  {
    id: "8210",
    zip: "49086",
    city: "Osnabrück",
  },
  {
    id: "8211",
    zip: "49088",
    city: "Osnabrück",
  },
  {
    id: "8212",
    zip: "49090",
    city: "Osnabrück",
  },
  {
    id: "8213",
    zip: "49124",
    city: "Georgsmarienhütte",
  },
  {
    id: "8214",
    zip: "49134",
    city: "Wallenhorst",
  },
  {
    id: "8215",
    zip: "49143",
    city: "Bissendorf",
  },
  {
    id: "8216",
    zip: "49152",
    city: "Bad Essen",
  },
  {
    id: "8217",
    zip: "49163",
    city: "Bohmte",
  },
  {
    id: "8218",
    zip: "49170",
    city: "Hagen am Teutoburger Wald",
  },
  {
    id: "8219",
    zip: "49176",
    city: "Hilter am Teutoburger Wald",
  },
  {
    id: "8220",
    zip: "49179",
    city: "Ostercappeln",
  },
  {
    id: "8221",
    zip: "49186",
    city: "Bad Iburg",
  },
  {
    id: "8222",
    zip: "49191",
    city: "Belm",
  },
  {
    id: "8223",
    zip: "49196",
    city: "Bad Laer",
  },
  {
    id: "8224",
    zip: "49201",
    city: "Dissen am Teutoburger Wald",
  },
  {
    id: "8225",
    zip: "49205",
    city: "Hasbergen",
  },
  {
    id: "8226",
    zip: "49214",
    city: "Bad Rothenfelde",
  },
  {
    id: "8227",
    zip: "49219",
    city: "Glandorf",
  },
  {
    id: "8228",
    zip: "49324",
    city: "Melle",
  },
  {
    id: "8229",
    zip: "49326",
    city: "Melle",
  },
  {
    id: "8230",
    zip: "49328",
    city: "Melle",
  },
  {
    id: "8231",
    zip: "49356",
    city: "Diepholz",
  },
  {
    id: "8232",
    zip: "49377",
    city: "Vechta",
  },
  {
    id: "8233",
    zip: "49393",
    city: "Lohne (Oldenburg)",
  },
  {
    id: "8234",
    zip: "49401",
    city: "Damme",
  },
  {
    id: "8235",
    zip: "49406",
    city: "Barnstorf",
  },
  {
    id: "8236",
    zip: "49413",
    city: "Dinklage",
  },
  {
    id: "8237",
    zip: "49419",
    city: "Wagenfeld",
  },
  {
    id: "8238",
    zip: "49424",
    city: "Goldenstedt",
  },
  {
    id: "8239",
    zip: "49429",
    city: "Visbek",
  },
  {
    id: "8240",
    zip: "49434",
    city: "Neuenkirchen-Vörden",
  },
  {
    id: "8241",
    zip: "49439",
    city: "Steinfeld (Oldenburg)",
  },
  {
    id: "8242",
    zip: "49448",
    city: "Lemförde",
  },
  {
    id: "8243",
    zip: "49451",
    city: "Holdorf",
  },
  {
    id: "8244",
    zip: "49453",
    city: "Rehden",
  },
  {
    id: "8245",
    zip: "49456",
    city: "Bakum",
  },
  {
    id: "8246",
    zip: "49457",
    city: "Drebber",
  },
  {
    id: "8247",
    zip: "49459",
    city: "Lembruch",
  },
  {
    id: "8248",
    zip: "49477",
    city: "Ibbenbüren",
  },
  {
    id: "8249",
    zip: "49479",
    city: "Ibbenbüren",
  },
  {
    id: "8250",
    zip: "49492",
    city: "Westerkappeln",
  },
  {
    id: "8251",
    zip: "49497",
    city: "Mettingen",
  },
  {
    id: "8252",
    zip: "49504",
    city: "Lotte",
  },
  {
    id: "8253",
    zip: "49509",
    city: "Recke",
  },
  {
    id: "8254",
    zip: "49525",
    city: "Lengerich",
  },
  {
    id: "8255",
    zip: "49536",
    city: "Lienen",
  },
  {
    id: "8256",
    zip: "49545",
    city: "Tecklenburg",
  },
  {
    id: "8257",
    zip: "49549",
    city: "Ladbergen",
  },
  {
    id: "8258",
    zip: "49565",
    city: "Bramsche",
  },
  {
    id: "8259",
    zip: "49577",
    city: "Ankum",
  },
  {
    id: "8260",
    zip: "49584",
    city: "Fürstenau",
  },
  {
    id: "8261",
    zip: "49586",
    city: "Neuenkirchen",
  },
  {
    id: "8262",
    zip: "49593",
    city: "Bersenbrück",
  },
  {
    id: "8263",
    zip: "49594",
    city: "Alfhausen",
  },
  {
    id: "8264",
    zip: "49596",
    city: "Gehrde",
  },
  {
    id: "8265",
    zip: "49597",
    city: "Rieste",
  },
  {
    id: "8266",
    zip: "49599",
    city: "Voltlage",
  },
  {
    id: "8267",
    zip: "49610",
    city: "Quakenbrück",
  },
  {
    id: "8268",
    zip: "49624",
    city: "Löningen",
  },
  {
    id: "8269",
    zip: "49626",
    city: "Berge",
  },
  {
    id: "8270",
    zip: "49632",
    city: "Essen (Oldenburg)",
  },
  {
    id: "8271",
    zip: "49635",
    city: "Badbergen",
  },
  {
    id: "8272",
    zip: "49637",
    city: "Menslage",
  },
  {
    id: "8273",
    zip: "49638",
    city: "Nortrup",
  },
  {
    id: "8274",
    zip: "49661",
    city: "Cloppenburg",
  },
  {
    id: "8275",
    zip: "49681",
    city: "Garrel",
  },
  {
    id: "8276",
    zip: "49685",
    city: "Emstek",
  },
  {
    id: "8277",
    zip: "49688",
    city: "Lastrup",
  },
  {
    id: "8278",
    zip: "49692",
    city: "Cappeln (Oldenburg)",
  },
  {
    id: "8279",
    zip: "49696",
    city: "Molbergen",
  },
  {
    id: "8280",
    zip: "49699",
    city: "Lindern (Oldenburg)",
  },
  {
    id: "8281",
    zip: "49716",
    city: "Meppen",
  },
  {
    id: "8282",
    zip: "49733",
    city: "Haren (Ems)",
  },
  {
    id: "8283",
    zip: "49740",
    city: "Haselünne",
  },
  {
    id: "8284",
    zip: "49744",
    city: "Geeste",
  },
  {
    id: "8285",
    zip: "49751",
    city: "Sögel",
  },
  {
    id: "8286",
    zip: "49757",
    city: "Werlte",
  },
  {
    id: "8287",
    zip: "49762",
    city: "Lathen",
  },
  {
    id: "8288",
    zip: "49767",
    city: "Twist",
  },
  {
    id: "8289",
    zip: "49770",
    city: "Herzlake",
  },
  {
    id: "8290",
    zip: "49774",
    city: "Lähden",
  },
  {
    id: "8291",
    zip: "49777",
    city: "Stavern",
  },
  {
    id: "8292",
    zip: "49779",
    city: "Niederlangen",
  },
  {
    id: "8293",
    zip: "49808",
    city: "Lingen (Ems)",
  },
  {
    id: "8294",
    zip: "49809",
    city: "Lingen (Ems)",
  },
  {
    id: "8295",
    zip: "49811",
    city: "Lingen (Ems)",
  },
  {
    id: "8296",
    zip: "49824",
    city: "Emlichheim",
  },
  {
    id: "8297",
    zip: "49828",
    city: "Neuenhaus",
  },
  {
    id: "8298",
    zip: "49832",
    city: "Freren",
  },
  {
    id: "8299",
    zip: "49835",
    city: "Wietmarschen",
  },
  {
    id: "8300",
    zip: "49838",
    city: "Lengerich",
  },
  {
    id: "8301",
    zip: "49843",
    city: "Uelsen",
  },
  {
    id: "8302",
    zip: "49844",
    city: "Bawinkel",
  },
  {
    id: "8303",
    zip: "49846",
    city: "Hoogstede",
  },
  {
    id: "8304",
    zip: "49847",
    city: "Itterbeck",
  },
  {
    id: "8305",
    zip: "49849",
    city: "Wilsum",
  },
  {
    id: "8306",
    zip: "50126",
    city: "Bergheim",
  },
  {
    id: "8307",
    zip: "50127",
    city: "Bergheim",
  },
  {
    id: "8308",
    zip: "50129",
    city: "Bergheim",
  },
  {
    id: "8310",
    zip: "50169",
    city: "Kerpen",
  },
  {
    id: "8311",
    zip: "50170",
    city: "Kerpen",
  },
  {
    id: "8312",
    zip: "50171",
    city: "Kerpen",
  },
  {
    id: "8313",
    zip: "50181",
    city: "Bedburg",
  },
  {
    id: "8314",
    zip: "50189",
    city: "Elsdorf",
  },
  {
    id: "8315",
    zip: "50226",
    city: "Frechen",
  },
  {
    id: "8316",
    zip: "50259",
    city: "Pulheim",
  },
  {
    id: "8317",
    zip: "50321",
    city: "Brühl",
  },
  {
    id: "8318",
    zip: "50354",
    city: "Hürth",
  },
  {
    id: "8319",
    zip: "50374",
    city: "Erftstadt",
  },
  {
    id: "8320",
    zip: "50389",
    city: "Wesseling",
  },
  {
    id: "8321",
    zip: "50667",
    city: "Köln",
  },
  {
    id: "8322",
    zip: "50668",
    city: "Köln",
  },
  {
    id: "8323",
    zip: "50670",
    city: "Köln",
  },
  {
    id: "8309",
    zip: "50672",
    city: "Köln",
  },
  {
    id: "8324",
    zip: "50674",
    city: "Köln",
  },
  {
    id: "8325",
    zip: "50676",
    city: "Köln",
  },
  {
    id: "8326",
    zip: "50677",
    city: "Köln",
  },
  {
    id: "8327",
    zip: "50678",
    city: "Köln",
  },
  {
    id: "8328",
    zip: "50679",
    city: "Köln",
  },
  {
    id: "8329",
    zip: "50733",
    city: "Köln",
  },
  {
    id: "8330",
    zip: "50735",
    city: "Köln",
  },
  {
    id: "8331",
    zip: "50737",
    city: "Köln",
  },
  {
    id: "8332",
    zip: "50739",
    city: "Köln",
  },
  {
    id: "8333",
    zip: "50765",
    city: "Köln",
  },
  {
    id: "8334",
    zip: "50767",
    city: "Köln",
  },
  {
    id: "8335",
    zip: "50769",
    city: "Köln",
  },
  {
    id: "8336",
    zip: "50823",
    city: "Köln",
  },
  {
    id: "8337",
    zip: "50825",
    city: "Köln",
  },
  {
    id: "8338",
    zip: "50827",
    city: "Köln",
  },
  {
    id: "8339",
    zip: "50829",
    city: "Köln",
  },
  {
    id: "8340",
    zip: "50858",
    city: "Köln",
  },
  {
    id: "8341",
    zip: "50859",
    city: "Köln",
  },
  {
    id: "8342",
    zip: "50931",
    city: "Köln",
  },
  {
    id: "8343",
    zip: "50933",
    city: "Köln",
  },
  {
    id: "8344",
    zip: "50935",
    city: "Köln",
  },
  {
    id: "8345",
    zip: "50937",
    city: "Köln",
  },
  {
    id: "8346",
    zip: "50939",
    city: "Köln",
  },
  {
    id: "8349",
    zip: "50968",
    city: "Köln",
  },
  {
    id: "8350",
    zip: "50969",
    city: "Köln",
  },
  {
    id: "8351",
    zip: "50996",
    city: "Köln",
  },
  {
    id: "8352",
    zip: "50997",
    city: "Köln",
  },
  {
    id: "8347",
    zip: "50999",
    city: "Köln",
  },
  {
    id: "8348",
    zip: "51061",
    city: "Köln",
  },
  {
    id: "8353",
    zip: "51063",
    city: "Köln",
  },
  {
    id: "8354",
    zip: "51065",
    city: "Köln",
  },
  {
    id: "8355",
    zip: "51067",
    city: "Köln",
  },
  {
    id: "8356",
    zip: "51069",
    city: "Köln",
  },
  {
    id: "8357",
    zip: "51103",
    city: "Köln",
  },
  {
    id: "8358",
    zip: "51105",
    city: "Köln",
  },
  {
    id: "8359",
    zip: "51107",
    city: "Köln",
  },
  {
    id: "8360",
    zip: "51109",
    city: "Köln",
  },
  {
    id: "8361",
    zip: "51143",
    city: "Köln",
  },
  {
    id: "8362",
    zip: "51145",
    city: "Köln",
  },
  {
    id: "8363",
    zip: "51147",
    city: "Köln",
  },
  {
    id: "8364",
    zip: "51149",
    city: "Köln",
  },
  {
    id: "8365",
    zip: "51371",
    city: "Leverkusen",
  },
  {
    id: "8366",
    zip: "51373",
    city: "Leverkusen",
  },
  {
    id: "8367",
    zip: "51375",
    city: "Leverkusen",
  },
  {
    id: "8368",
    zip: "51377",
    city: "Leverkusen",
  },
  {
    id: "8369",
    zip: "51379",
    city: "Leverkusen",
  },
  {
    id: "8370",
    zip: "51381",
    city: "Leverkusen",
  },
  {
    id: "8371",
    zip: "51399",
    city: "Burscheid",
  },
  {
    id: "8372",
    zip: "51427",
    city: "Bergisch Gladbach",
  },
  {
    id: "8373",
    zip: "51429",
    city: "Bergisch Gladbach",
  },
  {
    id: "8374",
    zip: "51465",
    city: "Bergisch Gladbach",
  },
  {
    id: "8375",
    zip: "51467",
    city: "Bergisch Gladbach",
  },
  {
    id: "8376",
    zip: "51469",
    city: "Bergisch Gladbach",
  },
  {
    id: "8377",
    zip: "51491",
    city: "Overath",
  },
  {
    id: "8378",
    zip: "51503",
    city: "Rösrath",
  },
  {
    id: "8379",
    zip: "51515",
    city: "Kürten",
  },
  {
    id: "8380",
    zip: "51519",
    city: "Odenthal",
  },
  {
    id: "8381",
    zip: "51545",
    city: "Waldbröl",
  },
  {
    id: "8382",
    zip: "51570",
    city: "Windeck",
  },
  {
    id: "8383",
    zip: "51580",
    city: "Reichshof",
  },
  {
    id: "8384",
    zip: "51588",
    city: "Nümbrecht",
  },
  {
    id: "8385",
    zip: "51597",
    city: "Morsbach",
  },
  {
    id: "8386",
    zip: "51598",
    city: "Friesenhagen",
  },
  {
    id: "8387",
    zip: "51643",
    city: "Gummersbach",
  },
  {
    id: "8388",
    zip: "51645",
    city: "Gummersbach",
  },
  {
    id: "8389",
    zip: "51647",
    city: "Gummersbach",
  },
  {
    id: "8390",
    zip: "51674",
    city: "Wiehl",
  },
  {
    id: "8391",
    zip: "51688",
    city: "Wipperfürth",
  },
  {
    id: "8392",
    zip: "51702",
    city: "Bergneustadt",
  },
  {
    id: "8393",
    zip: "51709",
    city: "Marienheide",
  },
  {
    id: "8394",
    zip: "51766",
    city: "Engelskirchen",
  },
  {
    id: "8395",
    zip: "51789",
    city: "Lindlar",
  },
  {
    id: "8396",
    zip: "52062",
    city: "Aachen",
  },
  {
    id: "8397",
    zip: "52064",
    city: "Aachen",
  },
  {
    id: "8398",
    zip: "52066",
    city: "Aachen",
  },
  {
    id: "8399",
    zip: "52068",
    city: "Aachen",
  },
  {
    id: "8400",
    zip: "52070",
    city: "Aachen",
  },
  {
    id: "8401",
    zip: "52072",
    city: "Aachen",
  },
  {
    id: "8402",
    zip: "52074",
    city: "Aachen",
  },
  {
    id: "8403",
    zip: "52076",
    city: "Aachen",
  },
  {
    id: "8404",
    zip: "52078",
    city: "Aachen",
  },
  {
    id: "8405",
    zip: "52080",
    city: "Aachen",
  },
  {
    id: "8406",
    zip: "52134",
    city: "Herzogenrath",
  },
  {
    id: "8407",
    zip: "52146",
    city: "Würselen",
  },
  {
    id: "8408",
    zip: "52152",
    city: "Simmerath",
  },
  {
    id: "8409",
    zip: "52156",
    city: "Monschau",
  },
  {
    id: "8410",
    zip: "52159",
    city: "Roetgen",
  },
  {
    id: "13157",
    zip: "52222",
    city: "Stolberg (Rheinland)",
  },
  {
    id: "13158",
    zip: "52223",
    city: "Stolberg (Rheinland)",
  },
  {
    id: "13159",
    zip: "52224",
    city: "Stolberg (Rheinland)",
  },
  {
    id: "8411",
    zip: "52249",
    city: "Eschweiler",
  },
  {
    id: "8412",
    zip: "52349",
    city: "Düren",
  },
  {
    id: "8413",
    zip: "52351",
    city: "Düren",
  },
  {
    id: "8414",
    zip: "52353",
    city: "Düren",
  },
  {
    id: "8415",
    zip: "52355",
    city: "Düren",
  },
  {
    id: "8416",
    zip: "52372",
    city: "Kreuzau",
  },
  {
    id: "8417",
    zip: "52379",
    city: "Langerwehe",
  },
  {
    id: "8418",
    zip: "52382",
    city: "Niederzier",
  },
  {
    id: "8419",
    zip: "52385",
    city: "Nideggen",
  },
  {
    id: "8420",
    zip: "52388",
    city: "Nörvenich",
  },
  {
    id: "8421",
    zip: "52391",
    city: "Vettweiß",
  },
  {
    id: "8422",
    zip: "52393",
    city: "Hürtgenwald",
  },
  {
    id: "8423",
    zip: "52396",
    city: "Heimbach",
  },
  {
    id: "8424",
    zip: "52399",
    city: "Merzenich",
  },
  {
    id: "8425",
    zip: "52428",
    city: "Jülich",
  },
  {
    id: "8426",
    zip: "52441",
    city: "Linnich",
  },
  {
    id: "8427",
    zip: "52445",
    city: "Titz",
  },
  {
    id: "8428",
    zip: "52457",
    city: "Aldenhoven",
  },
  {
    id: "8429",
    zip: "52459",
    city: "Inden",
  },
  {
    id: "8430",
    zip: "52477",
    city: "Alsdorf",
  },
  {
    id: "8431",
    zip: "52499",
    city: "Baesweiler",
  },
  {
    id: "8432",
    zip: "52511",
    city: "Geilenkirchen",
  },
  {
    id: "8433",
    zip: "52525",
    city: "Heinsberg",
  },
  {
    id: "8434",
    zip: "52531",
    city: "Übach-Palenberg",
  },
  {
    id: "8435",
    zip: "52538",
    city: "Gangelt",
  },
  {
    id: "8436",
    zip: "53111",
    city: "Bonn",
  },
  {
    id: "8437",
    zip: "53113",
    city: "Bonn",
  },
  {
    id: "8438",
    zip: "53115",
    city: "Bonn",
  },
  {
    id: "8439",
    zip: "53117",
    city: "Bonn",
  },
  {
    id: "8440",
    zip: "53119",
    city: "Bonn",
  },
  {
    id: "8441",
    zip: "53121",
    city: "Bonn",
  },
  {
    id: "8442",
    zip: "53123",
    city: "Bonn",
  },
  {
    id: "8443",
    zip: "53125",
    city: "Bonn",
  },
  {
    id: "8444",
    zip: "53127",
    city: "Bonn",
  },
  {
    id: "8445",
    zip: "53129",
    city: "Bonn",
  },
  {
    id: "8446",
    zip: "53173",
    city: "Bonn",
  },
  {
    id: "8447",
    zip: "53175",
    city: "Bonn",
  },
  {
    id: "8448",
    zip: "53177",
    city: "Bonn",
  },
  {
    id: "8449",
    zip: "53179",
    city: "Bonn",
  },
  {
    id: "8450",
    zip: "53225",
    city: "Bonn",
  },
  {
    id: "8451",
    zip: "53227",
    city: "Bonn",
  },
  {
    id: "8452",
    zip: "53229",
    city: "Bonn",
  },
  {
    id: "8453",
    zip: "53332",
    city: "Bornheim",
  },
  {
    id: "8454",
    zip: "53340",
    city: "Meckenheim",
  },
  {
    id: "8455",
    zip: "53343",
    city: "Wachtberg",
  },
  {
    id: "8456",
    zip: "53347",
    city: "Alfter",
  },
  {
    id: "8457",
    zip: "53359",
    city: "Rheinbach",
  },
  {
    id: "8458",
    zip: "53424",
    city: "Remagen",
  },
  {
    id: "8459",
    zip: "53426",
    city: "Schalkenbach",
  },
  {
    id: "8460",
    zip: "53474",
    city: "Bad Neuenahr-Ahrweiler",
  },
  {
    id: "8461",
    zip: "53489",
    city: "Sinzig",
  },
  {
    id: "8462",
    zip: "53498",
    city: "Bad Breisig",
  },
  {
    id: "8463",
    zip: "53501",
    city: "Grafschaft",
  },
  {
    id: "8464",
    zip: "53505",
    city: "Altenahr",
  },
  {
    id: "8465",
    zip: "53506",
    city: "Ahrbrück",
  },
  {
    id: "8466",
    zip: "53507",
    city: "Dernau",
  },
  {
    id: "8467",
    zip: "53508",
    city: "Mayschoß",
  },
  {
    id: "8468",
    zip: "53518",
    city: "Adenau",
  },
  {
    id: "8469",
    zip: "53520",
    city: "Schuld",
  },
  {
    id: "8470",
    zip: "53533",
    city: "Antweiler",
  },
  {
    id: "8471",
    zip: "53534",
    city: "Barweiler",
  },
  {
    id: "8472",
    zip: "53539",
    city: "Kelberg",
  },
  {
    id: "8473",
    zip: "53545",
    city: "Linz am Rhein",
  },
  {
    id: "8474",
    zip: "53547",
    city: "Breitscheid",
  },
  {
    id: "8475",
    zip: "53557",
    city: "Bad Hönningen",
  },
  {
    id: "8476",
    zip: "53560",
    city: "Vettelschoß",
  },
  {
    id: "8477",
    zip: "53562",
    city: "Sankt Katharinen (Landkreis",
  },
  {
    id: "8478",
    zip: "53567",
    city: "Asbach",
  },
  {
    id: "8479",
    zip: "53572",
    city: "Unkel",
  },
  {
    id: "8480",
    zip: "53577",
    city: "Neustadt (Wied)",
  },
  {
    id: "8481",
    zip: "53578",
    city: "Windhagen",
  },
  {
    id: "8482",
    zip: "53579",
    city: "Erpel",
  },
  {
    id: "8483",
    zip: "53604",
    city: "Bad Honnef",
  },
  {
    id: "8484",
    zip: "53619",
    city: "Rheinbreitbach",
  },
  {
    id: "8485",
    zip: "53639",
    city: "Königswinter",
  },
  {
    id: "8486",
    zip: "53721",
    city: "Siegburg",
  },
  {
    id: "8487",
    zip: "53757",
    city: "Sankt Augustin",
  },
  {
    id: "8488",
    zip: "53773",
    city: "Hennef (Sieg)",
  },
  {
    id: "8489",
    zip: "53783",
    city: "Eitorf",
  },
  {
    id: "8490",
    zip: "53797",
    city: "Lohmar",
  },
  {
    id: "8491",
    zip: "53804",
    city: "Much",
  },
  {
    id: "8492",
    zip: "53809",
    city: "Ruppichteroth",
  },
  {
    id: "8493",
    zip: "53819",
    city: "Neunkirchen-Seelscheid",
  },
  {
    id: "8494",
    zip: "53840",
    city: "Troisdorf",
  },
  {
    id: "8495",
    zip: "53842",
    city: "Troisdorf",
  },
  {
    id: "8496",
    zip: "53844",
    city: "Troisdorf",
  },
  {
    id: "8497",
    zip: "53859",
    city: "Niederkassel",
  },
  {
    id: "8498",
    zip: "53879",
    city: "Euskirchen",
  },
  {
    id: "8499",
    zip: "53881",
    city: "Euskirchen",
  },
  {
    id: "8500",
    zip: "53894",
    city: "Mechernich",
  },
  {
    id: "8501",
    zip: "53902",
    city: "Bad Münstereifel",
  },
  {
    id: "8502",
    zip: "53909",
    city: "Zülpich",
  },
  {
    id: "8503",
    zip: "53913",
    city: "Swisttal",
  },
  {
    id: "8504",
    zip: "53919",
    city: "Weilerswist",
  },
  {
    id: "8505",
    zip: "53925",
    city: "Kall",
  },
  {
    id: "8506",
    zip: "53937",
    city: "Schleiden",
  },
  {
    id: "8507",
    zip: "53940",
    city: "Hellenthal",
  },
  {
    id: "8508",
    zip: "53945",
    city: "Blankenheim",
  },
  {
    id: "8509",
    zip: "53947",
    city: "Nettersheim",
  },
  {
    id: "8510",
    zip: "53949",
    city: "Dahlem",
  },
  {
    id: "8511",
    zip: "54290",
    city: "Trier",
  },
  {
    id: "8512",
    zip: "54292",
    city: "Trier",
  },
  {
    id: "8513",
    zip: "54293",
    city: "Trier",
  },
  {
    id: "8514",
    zip: "54294",
    city: "Trier",
  },
  {
    id: "8515",
    zip: "54295",
    city: "Trier",
  },
  {
    id: "8516",
    zip: "54296",
    city: "Trier",
  },
  {
    id: "8517",
    zip: "54298",
    city: "Welschbillig",
  },
  {
    id: "8518",
    zip: "54306",
    city: "Kordel",
  },
  {
    id: "8519",
    zip: "54308",
    city: "Langsur",
  },
  {
    id: "8520",
    zip: "54309",
    city: "Newel",
  },
  {
    id: "8521",
    zip: "54310",
    city: "Ralingen",
  },
  {
    id: "8522",
    zip: "54311",
    city: "Trierweiler",
  },
  {
    id: "8523",
    zip: "54313",
    city: "Zemmer",
  },
  {
    id: "8524",
    zip: "54314",
    city: "Zerf",
  },
  {
    id: "8525",
    zip: "54316",
    city: "Pluwig",
  },
  {
    id: "8526",
    zip: "54317",
    city: "Gusterath",
  },
  {
    id: "8527",
    zip: "54318",
    city: "Mertesdorf",
  },
  {
    id: "8528",
    zip: "54320",
    city: "Waldrach",
  },
  {
    id: "8529",
    zip: "54329",
    city: "Konz",
  },
  {
    id: "8530",
    zip: "54331",
    city: "Pellingen",
  },
  {
    id: "8531",
    zip: "54332",
    city: "Wasserliesch",
  },
  {
    id: "8532",
    zip: "54338",
    city: "Schweich",
  },
  {
    id: "8533",
    zip: "54340",
    city: "Leiwen",
  },
  {
    id: "8534",
    zip: "54341",
    city: "Fell",
  },
  {
    id: "8535",
    zip: "54343",
    city: "Föhren",
  },
  {
    id: "8536",
    zip: "54344",
    city: "Kenn",
  },
  {
    id: "8537",
    zip: "54346",
    city: "Mehring",
  },
  {
    id: "8538",
    zip: "54347",
    city: "Neumagen-Dhron",
  },
  {
    id: "8539",
    zip: "54349",
    city: "Trittenheim",
  },
  {
    id: "8540",
    zip: "54411",
    city: "Hermeskeil",
  },
  {
    id: "8541",
    zip: "54413",
    city: "Gusenburg",
  },
  {
    id: "8542",
    zip: "54421",
    city: "Reinsfeld",
  },
  {
    id: "8543",
    zip: "54422",
    city: "Neuhütten",
  },
  {
    id: "8544",
    zip: "54424",
    city: "Thalfang",
  },
  {
    id: "8545",
    zip: "54426",
    city: "Malborn",
  },
  {
    id: "8546",
    zip: "54427",
    city: "Kell am See",
  },
  {
    id: "8547",
    zip: "54429",
    city: "Schillingen",
  },
  {
    id: "8548",
    zip: "54439",
    city: "Saarburg",
  },
  {
    id: "8549",
    zip: "54441",
    city: "Ayl",
  },
  {
    id: "8550",
    zip: "54450",
    city: "Freudenburg",
  },
  {
    id: "8551",
    zip: "54451",
    city: "Irsch",
  },
  {
    id: "8552",
    zip: "54453",
    city: "Nittel",
  },
  {
    id: "8553",
    zip: "54455",
    city: "Serrig",
  },
  {
    id: "8554",
    zip: "54456",
    city: "Tawern",
  },
  {
    id: "8555",
    zip: "54457",
    city: "Wincheringen",
  },
  {
    id: "8556",
    zip: "54459",
    city: "Wiltingen",
  },
  {
    id: "8557",
    zip: "54470",
    city: "Bernkastel-Kues",
  },
  {
    id: "8558",
    zip: "54472",
    city: "Monzelfeld",
  },
  {
    id: "8559",
    zip: "54483",
    city: "Kleinich",
  },
  {
    id: "8560",
    zip: "54484",
    city: "Maring-Noviand",
  },
  {
    id: "8561",
    zip: "54486",
    city: "Mülheim (Mosel)",
  },
  {
    id: "8562",
    zip: "54487",
    city: "Wintrich",
  },
  {
    id: "8563",
    zip: "54492",
    city: "Zeltingen-Rachtig",
  },
  {
    id: "8564",
    zip: "54497",
    city: "Morbach",
  },
  {
    id: "8565",
    zip: "54498",
    city: "Piesport",
  },
  {
    id: "8566",
    zip: "54516",
    city: "Wittlich",
  },
  {
    id: "8567",
    zip: "54518",
    city: "Osann-Monzel",
  },
  {
    id: "8568",
    zip: "54523",
    city: "Hetzerath",
  },
  {
    id: "8569",
    zip: "54524",
    city: "Klausen",
  },
  {
    id: "8570",
    zip: "54526",
    city: "Landscheid",
  },
  {
    id: "8571",
    zip: "54528",
    city: "Salmtal",
  },
  {
    id: "8572",
    zip: "54529",
    city: "Spangdahlem",
  },
  {
    id: "8573",
    zip: "54531",
    city: "Manderscheid",
  },
  {
    id: "8574",
    zip: "54533",
    city: "Bettenfeld",
  },
  {
    id: "8575",
    zip: "54534",
    city: "Großlittgen",
  },
  {
    id: "8576",
    zip: "54536",
    city: "Kröv",
  },
  {
    id: "8577",
    zip: "54538",
    city: "Bausendorf",
  },
  {
    id: "8578",
    zip: "54539",
    city: "Ürzig",
  },
  {
    id: "8579",
    zip: "54550",
    city: "Daun",
  },
  {
    id: "8580",
    zip: "54552",
    city: "Mehren",
  },
  {
    id: "8581",
    zip: "54558",
    city: "Gillenfeld",
  },
  {
    id: "8582",
    zip: "54568",
    city: "Gerolstein",
  },
  {
    id: "8583",
    zip: "54570",
    city: "Pelm",
  },
  {
    id: "8584",
    zip: "54574",
    city: "Birresborn",
  },
  {
    id: "8585",
    zip: "54576",
    city: "Hillesheim",
  },
  {
    id: "8586",
    zip: "54578",
    city: "Walsdorf",
  },
  {
    id: "8587",
    zip: "54579",
    city: "Üxheim",
  },
  {
    id: "8588",
    zip: "54584",
    city: "Jünkerath",
  },
  {
    id: "8589",
    zip: "54585",
    city: "Esch",
  },
  {
    id: "8590",
    zip: "54586",
    city: "Schüller",
  },
  {
    id: "8591",
    zip: "54587",
    city: "Lissendorf",
  },
  {
    id: "8592",
    zip: "54589",
    city: "Stadtkyll",
  },
  {
    id: "8593",
    zip: "54595",
    city: "Prüm",
  },
  {
    id: "8594",
    zip: "54597",
    city: "Pronsfeld",
  },
  {
    id: "8595",
    zip: "54608",
    city: "Bleialf",
  },
  {
    id: "8596",
    zip: "54610",
    city: "Büdesheim",
  },
  {
    id: "8597",
    zip: "54611",
    city: "Hallschlag",
  },
  {
    id: "8598",
    zip: "54612",
    city: "Lasel",
  },
  {
    id: "8599",
    zip: "54614",
    city: "Schönecken",
  },
  {
    id: "8600",
    zip: "54616",
    city: "Winterspelt",
  },
  {
    id: "8601",
    zip: "54617",
    city: "Lützkampen",
  },
  {
    id: "8602",
    zip: "54619",
    city: "Üttfeld",
  },
  {
    id: "8603",
    zip: "54634",
    city: "Bitburg",
  },
  {
    id: "8604",
    zip: "54636",
    city: "Rittersdorf",
  },
  {
    id: "8605",
    zip: "54646",
    city: "Bettingen",
  },
  {
    id: "8606",
    zip: "54647",
    city: "Dudeldorf",
  },
  {
    id: "8607",
    zip: "54649",
    city: "Waxweiler",
  },
  {
    id: "8608",
    zip: "54655",
    city: "Kyllburg",
  },
  {
    id: "8609",
    zip: "54657",
    city: "Badem",
  },
  {
    id: "8610",
    zip: "54662",
    city: "Speicher",
  },
  {
    id: "8611",
    zip: "54664",
    city: "Preist",
  },
  {
    id: "8612",
    zip: "54666",
    city: "Irrel",
  },
  {
    id: "8613",
    zip: "54668",
    city: "Ferschweiler",
  },
  {
    id: "8614",
    zip: "54669",
    city: "Bollendorf",
  },
  {
    id: "8615",
    zip: "54673",
    city: "Neuerburg",
  },
  {
    id: "8616",
    zip: "54675",
    city: "Körperich",
  },
  {
    id: "8617",
    zip: "54687",
    city: "Arzfeld",
  },
  {
    id: "8618",
    zip: "54689",
    city: "Daleiden",
  },
  {
    id: "8619",
    zip: "55116",
    city: "Mainz",
  },
  {
    id: "8620",
    zip: "55118",
    city: "Mainz",
  },
  {
    id: "8621",
    zip: "55120",
    city: "Mainz",
  },
  {
    id: "8622",
    zip: "55122",
    city: "Mainz",
  },
  {
    id: "8623",
    zip: "55124",
    city: "Mainz",
  },
  {
    id: "8624",
    zip: "55126",
    city: "Mainz",
  },
  {
    id: "8625",
    zip: "55127",
    city: "Mainz",
  },
  {
    id: "8626",
    zip: "55128",
    city: "Mainz",
  },
  {
    id: "8627",
    zip: "55129",
    city: "Mainz",
  },
  {
    id: "8628",
    zip: "55130",
    city: "Mainz",
  },
  {
    id: "8629",
    zip: "55131",
    city: "Mainz",
  },
  {
    id: "8630",
    zip: "55218",
    city: "Ingelheim am Rhein",
  },
  {
    id: "8631",
    zip: "55232",
    city: "Alzey",
  },
  {
    id: "8632",
    zip: "55234",
    city: "Albig",
  },
  {
    id: "8633",
    zip: "55237",
    city: "Flonheim",
  },
  {
    id: "8634",
    zip: "55239",
    city: "Gau-Odernheim",
  },
  {
    id: "8635",
    zip: "55246",
    city: "Wiesbaden",
  },
  {
    id: "8636",
    zip: "55252",
    city: "Wiesbaden",
  },
  {
    id: "8637",
    zip: "55257",
    city: "Budenheim",
  },
  {
    id: "8638",
    zip: "55262",
    city: "Heidesheim am Rhein",
  },
  {
    id: "8639",
    zip: "55263",
    city: "Wackernheim",
  },
  {
    id: "8640",
    zip: "55268",
    city: "Nieder-Olm",
  },
  {
    id: "8641",
    zip: "55270",
    city: "Ober-Olm",
  },
  {
    id: "8642",
    zip: "55271",
    city: "Stadecken-Elsheim",
  },
  {
    id: "8644",
    zip: "55276",
    city: "Oppenheim",
  },
  {
    id: "8645",
    zip: "55278",
    city: "Mommenheim",
  },
  {
    id: "8646",
    zip: "55283",
    city: "Nierstein",
  },
  {
    id: "8647",
    zip: "55286",
    city: "Wörrstadt",
  },
  {
    id: "8648",
    zip: "55288",
    city: "Armsheim",
  },
  {
    id: "8649",
    zip: "55291",
    city: "Saulheim",
  },
  {
    id: "8650",
    zip: "55294",
    city: "Bodenheim",
  },
  {
    id: "8651",
    zip: "55296",
    city: "Harxheim",
  },
  {
    id: "8652",
    zip: "55299",
    city: "Nackenheim",
  },
  {
    id: "8653",
    zip: "55411",
    city: "Bingen am Rhein",
  },
  {
    id: "8654",
    zip: "55413",
    city: "Weiler bei Bingen",
  },
  {
    id: "8655",
    zip: "55422",
    city: "Bacharach",
  },
  {
    id: "8656",
    zip: "55424",
    city: "Münster-Sarmsheim",
  },
  {
    id: "8657",
    zip: "55425",
    city: "Waldalgesheim",
  },
  {
    id: "8643",
    zip: "55430",
    city: "Oberwesel",
  },
  {
    id: "8658",
    zip: "55432",
    city: "Niederburg",
  },
  {
    id: "8659",
    zip: "55435",
    city: "Gau-Algesheim",
  },
  {
    id: "8660",
    zip: "55437",
    city: "Ockenheim",
  },
  {
    id: "8661",
    zip: "55442",
    city: "Stromberg",
  },
  {
    id: "8662",
    zip: "55444",
    city: "Seibersbach",
  },
  {
    id: "8663",
    zip: "55450",
    city: "Langenlonsheim",
  },
  {
    id: "8664",
    zip: "55452",
    city: "Guldental",
  },
  {
    id: "8665",
    zip: "55457",
    city: "Gensingen",
  },
  {
    id: "8666",
    zip: "55459",
    city: "Aspisheim",
  },
  {
    id: "12899",
    zip: "55469",
    city: "Simmern / Hunsrück",
  },
  {
    id: "8667",
    zip: "55471",
    city: "Tiefenbach",
  },
  {
    id: "8668",
    zip: "55481",
    city: "Kirchberg (Hunsrück)",
  },
  {
    id: "8669",
    zip: "55483",
    city: "Dickenschied",
  },
  {
    id: "8670",
    zip: "55487",
    city: "Sohren",
  },
  {
    id: "8671",
    zip: "55490",
    city: "Gemünden",
  },
  {
    id: "8672",
    zip: "55491",
    city: "Büchenbeuren",
  },
  {
    id: "8673",
    zip: "55494",
    city: "Rheinböllen",
  },
  {
    id: "8674",
    zip: "55496",
    city: "Argenthal",
  },
  {
    id: "8675",
    zip: "55497",
    city: "Ellern (Hunsrück)",
  },
  {
    id: "8676",
    zip: "55499",
    city: "Riesweiler",
  },
  {
    id: "8677",
    zip: "55543",
    city: "Bad Kreuznach",
  },
  {
    id: "8678",
    zip: "55545",
    city: "Bad Kreuznach",
  },
  {
    id: "8679",
    zip: "55546",
    city: "Hackenheim",
  },
  {
    id: "8680",
    zip: "55559",
    city: "Bretzenheim",
  },
  {
    id: "8681",
    zip: "55566",
    city: "Sobernheim",
  },
  {
    id: "8682",
    zip: "55568",
    city: "Staudernheim",
  },
  {
    id: "8683",
    zip: "55569",
    city: "Monzingen",
  },
  {
    id: "8684",
    zip: "55571",
    city: "Odernheim am Glan",
  },
  {
    id: "8685",
    zip: "55576",
    city: "Sprendlingen",
  },
  {
    id: "8688",
    zip: "55578",
    city: "Wallertheim",
  },
  {
    id: "8689",
    zip: "55583",
    city: "Bad Münster am Stein-Ebernbu",
  },
  {
    id: "8690",
    zip: "55585",
    city: "Norheim",
  },
  {
    id: "8691",
    zip: "55590",
    city: "Meisenheim",
  },
  {
    id: "8692",
    zip: "55592",
    city: "Rehborn",
  },
  {
    id: "8686",
    zip: "55593",
    city: "Rüdesheim",
  },
  {
    id: "8687",
    zip: "55595",
    city: "Hargesheim",
  },
  {
    id: "8693",
    zip: "55596",
    city: "Waldböckelheim",
  },
  {
    id: "8694",
    zip: "55597",
    city: "Wöllstein",
  },
  {
    id: "8695",
    zip: "55599",
    city: "Gau-Bickelheim",
  },
  {
    id: "8696",
    zip: "55606",
    city: "Kirn",
  },
  {
    id: "8697",
    zip: "55608",
    city: "Bergen",
  },
  {
    id: "8698",
    zip: "55618",
    city: "Simmertal",
  },
  {
    id: "8699",
    zip: "55619",
    city: "Hennweiler",
  },
  {
    id: "8700",
    zip: "55621",
    city: "Hundsbach",
  },
  {
    id: "8701",
    zip: "55624",
    city: "Rhaunen",
  },
  {
    id: "8702",
    zip: "55626",
    city: "Bundenbach",
  },
  {
    id: "8703",
    zip: "55627",
    city: "Merxheim",
  },
  {
    id: "8704",
    zip: "55629",
    city: "Seesbach",
  },
  {
    id: "8707",
    zip: "55743",
    city: "Idar-Oberstein",
  },
  {
    id: "8708",
    zip: "55756",
    city: "Herrstein",
  },
  {
    id: "8709",
    zip: "55758",
    city: "Niederwörresbach",
  },
  {
    id: "8710",
    zip: "55765",
    city: "Birkenfeld",
  },
  {
    id: "8711",
    zip: "55767",
    city: "Brücken",
  },
  {
    id: "8712",
    zip: "55768",
    city: "Hoppstädten-Weiersbach",
  },
  {
    id: "8713",
    zip: "55774",
    city: "Baumholder",
  },
  {
    id: "8714",
    zip: "55776",
    city: "Ruschberg",
  },
  {
    id: "8715",
    zip: "55777",
    city: "Berschweiler bei Baumholder",
  },
  {
    id: "8716",
    zip: "55779",
    city: "Heimbach",
  },
  {
    id: "8717",
    zip: "56068",
    city: "Koblenz",
  },
  {
    id: "8718",
    zip: "56070",
    city: "Koblenz",
  },
  {
    id: "8719",
    zip: "56072",
    city: "Koblenz",
  },
  {
    id: "8720",
    zip: "56073",
    city: "Koblenz",
  },
  {
    id: "8721",
    zip: "56075",
    city: "Koblenz",
  },
  {
    id: "8722",
    zip: "56076",
    city: "Koblenz",
  },
  {
    id: "8723",
    zip: "56077",
    city: "Koblenz",
  },
  {
    id: "8724",
    zip: "56112",
    city: "Lahnstein",
  },
  {
    id: "8725",
    zip: "56130",
    city: "Bad Ems",
  },
  {
    id: "8705",
    zip: "56132",
    city: "Dausenau",
  },
  {
    id: "8706",
    zip: "56133",
    city: "Fachbach",
  },
  {
    id: "8726",
    zip: "56154",
    city: "Boppard",
  },
  {
    id: "8727",
    zip: "56170",
    city: "Bendorf",
  },
  {
    id: "8728",
    zip: "56179",
    city: "Vallendar",
  },
  {
    id: "8729",
    zip: "56182",
    city: "Urbar",
  },
  {
    id: "8730",
    zip: "56191",
    city: "Weitersburg",
  },
  {
    id: "8731",
    zip: "56203",
    city: "Höhr-Grenzhausen",
  },
  {
    id: "8732",
    zip: "56204",
    city: "Hillscheid",
  },
  {
    id: "8733",
    zip: "56206",
    city: "Hilgert",
  },
  {
    id: "8734",
    zip: "56218",
    city: "Mülheim-Kärlich",
  },
  {
    id: "8735",
    zip: "56220",
    city: "Urmitz",
  },
  {
    id: "8736",
    zip: "56235",
    city: "Ransbach-Baumbach",
  },
  {
    id: "8737",
    zip: "56237",
    city: "Nauort",
  },
  {
    id: "8738",
    zip: "56242",
    city: "Selters (Westerwald)",
  },
  {
    id: "8739",
    zip: "56244",
    city: "Ötzingen",
  },
  {
    id: "8740",
    zip: "56249",
    city: "Herschbach",
  },
  {
    id: "8744",
    zip: "56253",
    city: "Treis-Karden",
  },
  {
    id: "8745",
    zip: "56254",
    city: "Müden (Mosel)",
  },
  {
    id: "8746",
    zip: "56269",
    city: "Dierdorf",
  },
  {
    id: "8747",
    zip: "56271",
    city: "Kleinmaischeid",
  },
  {
    id: "8748",
    zip: "56276",
    city: "Großmaischeid",
  },
  {
    id: "8741",
    zip: "56281",
    city: "Emmelshausen",
  },
  {
    id: "8742",
    zip: "56283",
    city: "Gondershausen",
  },
  {
    id: "8743",
    zip: "56288",
    city: "Kastellaun",
  },
  {
    id: "8749",
    zip: "56290",
    city: "Beltheim",
  },
  {
    id: "8750",
    zip: "56291",
    city: "Leiningen",
  },
  {
    id: "8751",
    zip: "56294",
    city: "Münstermaifeld",
  },
  {
    id: "8752",
    zip: "56295",
    city: "Lonnig",
  },
  {
    id: "8753",
    zip: "56299",
    city: "Ochtendung",
  },
  {
    id: "8754",
    zip: "56305",
    city: "Puderbach",
  },
  {
    id: "8755",
    zip: "56307",
    city: "Dürrholz",
  },
  {
    id: "8756",
    zip: "56316",
    city: "Raubach",
  },
  {
    id: "8757",
    zip: "56317",
    city: "Urbach",
  },
  {
    id: "8758",
    zip: "56321",
    city: "Rhens",
  },
  {
    id: "8759",
    zip: "56322",
    city: "Spay",
  },
  {
    id: "8760",
    zip: "56323",
    city: "Waldesch",
  },
  {
    id: "8761",
    zip: "56329",
    city: "Sankt Goar",
  },
  {
    id: "8762",
    zip: "56330",
    city: "Kobern-Gondorf",
  },
  {
    id: "8763",
    zip: "56332",
    city: "Dieblich",
  },
  {
    id: "8766",
    zip: "56333",
    city: "Winningen",
  },
  {
    id: "8767",
    zip: "56335",
    city: "Neuhäusel",
  },
  {
    id: "8768",
    zip: "56337",
    city: "Eitelborn",
  },
  {
    id: "8769",
    zip: "56338",
    city: "Braubach",
  },
  {
    id: "8770",
    zip: "56340",
    city: "Osterspai",
  },
  {
    id: "8771",
    zip: "56341",
    city: "Kamp-Bornhofen",
  },
  {
    id: "8764",
    zip: "56346",
    city: "Sankt Goarshausen",
  },
  {
    id: "8765",
    zip: "56348",
    city: "Bornich",
  },
  {
    id: "8772",
    zip: "56349",
    city: "Kaub",
  },
  {
    id: "8773",
    zip: "56355",
    city: "Nastätten",
  },
  {
    id: "8774",
    zip: "56357",
    city: "Miehlen",
  },
  {
    id: "8775",
    zip: "56368",
    city: "Katzenelnbogen",
  },
  {
    id: "8776",
    zip: "56370",
    city: "Schönborn",
  },
  {
    id: "8777",
    zip: "56377",
    city: "Nassau",
  },
  {
    id: "8778",
    zip: "56379",
    city: "Singhofen",
  },
  {
    id: "8779",
    zip: "56410",
    city: "Montabaur",
  },
  {
    id: "8780",
    zip: "56412",
    city: "Nentershausen",
  },
  {
    id: "8781",
    zip: "56414",
    city: "Hundsangen",
  },
  {
    id: "8782",
    zip: "56422",
    city: "Wirges",
  },
  {
    id: "8783",
    zip: "56424",
    city: "Ebernhahn",
  },
  {
    id: "8784",
    zip: "56427",
    city: "Siershahn",
  },
  {
    id: "8785",
    zip: "56428",
    city: "Dernbach (Westerwald)",
  },
  {
    id: "8786",
    zip: "56457",
    city: "Westerburg",
  },
  {
    id: "8787",
    zip: "56459",
    city: "Langenhahn",
  },
  {
    id: "8788",
    zip: "56462",
    city: "Höhn",
  },
  {
    id: "8789",
    zip: "56470",
    city: "Bad Marienberg (Westerwald)",
  },
  {
    id: "8790",
    zip: "56472",
    city: "Hof",
  },
  {
    id: "8794",
    zip: "56477",
    city: "Rennerod",
  },
  {
    id: "8795",
    zip: "56479",
    city: "Seck",
  },
  {
    id: "8796",
    zip: "56564",
    city: "Neuwied",
  },
  {
    id: "8797",
    zip: "56566",
    city: "Neuwied",
  },
  {
    id: "8798",
    zip: "56567",
    city: "Neuwied",
  },
  {
    id: "8799",
    zip: "56575",
    city: "Weißenthurm",
  },
  {
    id: "8800",
    zip: "56579",
    city: "Rengsdorf",
  },
  {
    id: "8802",
    zip: "56581",
    city: "Melsbach",
  },
  {
    id: "8803",
    zip: "56584",
    city: "Anhausen",
  },
  {
    id: "8804",
    zip: "56587",
    city: "Straßenhaus",
  },
  {
    id: "8805",
    zip: "56588",
    city: "Waldbreitbach",
  },
  {
    id: "8806",
    zip: "56589",
    city: "Niederbreitbach",
  },
  {
    id: "8807",
    zip: "56593",
    city: "Horhausen (Westerwald)",
  },
  {
    id: "8808",
    zip: "56594",
    city: "Willroth",
  },
  {
    id: "8809",
    zip: "56598",
    city: "Rheinbrohl",
  },
  {
    id: "8810",
    zip: "56599",
    city: "Leutesdorf",
  },
  {
    id: "8811",
    zip: "56626",
    city: "Andernach",
  },
  {
    id: "8812",
    zip: "56630",
    city: "Kretz",
  },
  {
    id: "8791",
    zip: "56637",
    city: "Plaidt",
  },
  {
    id: "8792",
    zip: "56642",
    city: "Kruft",
  },
  {
    id: "8793",
    zip: "56645",
    city: "Nickenich",
  },
  {
    id: "8801",
    zip: "56648",
    city: "Saffig",
  },
  {
    id: "8813",
    zip: "56651",
    city: "Niederzissen",
  },
  {
    id: "8814",
    zip: "56653",
    city: "Wehr",
  },
  {
    id: "8815",
    zip: "56656",
    city: "Brohl-Lützing",
  },
  {
    id: "8816",
    zip: "56659",
    city: "Burgbrohl",
  },
  {
    id: "8817",
    zip: "56727",
    city: "Mayen",
  },
  {
    id: "8818",
    zip: "56729",
    city: "Ettringen",
  },
  {
    id: "8819",
    zip: "56736",
    city: "Kottenheim",
  },
  {
    id: "8820",
    zip: "56743",
    city: "Mendig",
  },
  {
    id: "8821",
    zip: "56745",
    city: "Bell",
  },
  {
    id: "8822",
    zip: "56746",
    city: "Kempenich",
  },
  {
    id: "8823",
    zip: "56751",
    city: "Polch",
  },
  {
    id: "8824",
    zip: "56753",
    city: "Mertloch",
  },
  {
    id: "8825",
    zip: "56754",
    city: "Binningen",
  },
  {
    id: "8826",
    zip: "56759",
    city: "Kaisersesch",
  },
  {
    id: "8827",
    zip: "56761",
    city: "Düngenheim",
  },
  {
    id: "8828",
    zip: "56766",
    city: "Ulmen",
  },
  {
    id: "8829",
    zip: "56767",
    city: "Uersfeld",
  },
  {
    id: "8830",
    zip: "56769",
    city: "Retterath",
  },
  {
    id: "8831",
    zip: "56812",
    city: "Cochem",
  },
  {
    id: "8832",
    zip: "56814",
    city: "Ediger-Eller",
  },
  {
    id: "8833",
    zip: "56818",
    city: "Klotten",
  },
  {
    id: "8834",
    zip: "56820",
    city: "Senheim",
  },
  {
    id: "8835",
    zip: "56821",
    city: "Ellenz-Poltersdorf",
  },
  {
    id: "8836",
    zip: "56823",
    city: "Büchel",
  },
  {
    id: "8837",
    zip: "56825",
    city: "Gevenich",
  },
  {
    id: "8838",
    zip: "56826",
    city: "Lutzerath",
  },
  {
    id: "8839",
    zip: "56828",
    city: "Alflen",
  },
  {
    id: "8840",
    zip: "56829",
    city: "Pommern",
  },
  {
    id: "8842",
    zip: "56841",
    city: "Traben-Trarbach",
  },
  {
    id: "8843",
    zip: "56843",
    city: "Irmenach",
  },
  {
    id: "8844",
    zip: "56850",
    city: "Enkirch",
  },
  {
    id: "8845",
    zip: "56856",
    city: "Zell (Mosel)",
  },
  {
    id: "8846",
    zip: "56858",
    city: "Peterswald-Löffelscheid",
  },
  {
    id: "8841",
    zip: "56859",
    city: "Bullay",
  },
  {
    id: "8847",
    zip: "56861",
    city: "Reil",
  },
  {
    id: "8848",
    zip: "56862",
    city: "Pünderich",
  },
  {
    id: "8849",
    zip: "56864",
    city: "Bad Bertrich",
  },
  {
    id: "8850",
    zip: "56865",
    city: "Blankenrath",
  },
  {
    id: "8851",
    zip: "56867",
    city: "Briedel",
  },
  {
    id: "8852",
    zip: "56869",
    city: "Mastershausen",
  },
  {
    id: "8853",
    zip: "57072",
    city: "Siegen",
  },
  {
    id: "8854",
    zip: "57074",
    city: "Siegen",
  },
  {
    id: "8855",
    zip: "57076",
    city: "Siegen",
  },
  {
    id: "8856",
    zip: "57078",
    city: "Siegen",
  },
  {
    id: "8857",
    zip: "57080",
    city: "Siegen",
  },
  {
    id: "8858",
    zip: "57223",
    city: "Kreuztal",
  },
  {
    id: "8859",
    zip: "57234",
    city: "Wilnsdorf",
  },
  {
    id: "8860",
    zip: "57250",
    city: "Netphen",
  },
  {
    id: "8861",
    zip: "57258",
    city: "Freudenberg",
  },
  {
    id: "8862",
    zip: "57271",
    city: "Hilchenbach",
  },
  {
    id: "8863",
    zip: "57290",
    city: "Neunkirchen",
  },
  {
    id: "8864",
    zip: "57299",
    city: "Burbach",
  },
  {
    id: "8865",
    zip: "57319",
    city: "Bad Berleburg",
  },
  {
    id: "8866",
    zip: "57334",
    city: "Bad Laasphe",
  },
  {
    id: "8867",
    zip: "57339",
    city: "Erndtebrück",
  },
  {
    id: "8868",
    zip: "57368",
    city: "Lennestadt",
  },
  {
    id: "8869",
    zip: "57392",
    city: "Schmallenberg",
  },
  {
    id: "8870",
    zip: "57399",
    city: "Kirchhundem",
  },
  {
    id: "8871",
    zip: "57413",
    city: "Finnentrop",
  },
  {
    id: "8872",
    zip: "57439",
    city: "Attendorn",
  },
  {
    id: "8873",
    zip: "57462",
    city: "Olpe",
  },
  {
    id: "8874",
    zip: "57482",
    city: "Wenden",
  },
  {
    id: "8875",
    zip: "57489",
    city: "Drolshagen",
  },
  {
    id: "8876",
    zip: "57518",
    city: "Betzdorf",
  },
  {
    id: "12900",
    zip: "57520",
    city: "Steinebach / Sieg",
  },
  {
    id: "8877",
    zip: "57537",
    city: "Wissen",
  },
  {
    id: "8878",
    zip: "57539",
    city: "Fürthen",
  },
  {
    id: "8879",
    zip: "57548",
    city: "Kirchen (Sieg)",
  },
  {
    id: "8880",
    zip: "57555",
    city: "Mudersbach",
  },
  {
    id: "8881",
    zip: "57562",
    city: "Herdorf",
  },
  {
    id: "8882",
    zip: "57567",
    city: "Daaden",
  },
  {
    id: "8883",
    zip: "57572",
    city: "Niederfischbach",
  },
  {
    id: "8884",
    zip: "57577",
    city: "Hamm (Sieg)",
  },
  {
    id: "8885",
    zip: "57578",
    city: "Elkenroth",
  },
  {
    id: "8886",
    zip: "57580",
    city: "Gebhardshain",
  },
  {
    id: "8887",
    zip: "57581",
    city: "Katzwinkel (Sieg)",
  },
  {
    id: "8888",
    zip: "57583",
    city: "Nauroth",
  },
  {
    id: "8889",
    zip: "57584",
    city: "Scheuerfeld",
  },
  {
    id: "8890",
    zip: "57586",
    city: "Weitefeld",
  },
  {
    id: "8891",
    zip: "57587",
    city: "Birken-Honigsessen",
  },
  {
    id: "8892",
    zip: "57589",
    city: "Pracht",
  },
  {
    id: "8893",
    zip: "57610",
    city: "Altenkirchen (Westerwald)",
  },
  {
    id: "8894",
    zip: "57612",
    city: "Birnbach",
  },
  {
    id: "8895",
    zip: "57614",
    city: "Steimel",
  },
  {
    id: "8896",
    zip: "57627",
    city: "Hachenburg",
  },
  {
    id: "8897",
    zip: "57629",
    city: "Malberg",
  },
  {
    id: "8898",
    zip: "57632",
    city: "Flammersfeld",
  },
  {
    id: "8899",
    zip: "57635",
    city: "Weyerbusch",
  },
  {
    id: "8900",
    zip: "57636",
    city: "Mammelzen",
  },
  {
    id: "8901",
    zip: "57638",
    city: "Neitersen",
  },
  {
    id: "8902",
    zip: "57639",
    city: "Oberdreis",
  },
  {
    id: "8903",
    zip: "57641",
    city: "Oberlahr",
  },
  {
    id: "8904",
    zip: "57642",
    city: "Alpenrod",
  },
  {
    id: "8905",
    zip: "57644",
    city: "Hattert",
  },
  {
    id: "8906",
    zip: "57645",
    city: "Nister",
  },
  {
    id: "8907",
    zip: "57647",
    city: "Nistertal",
  },
  {
    id: "8908",
    zip: "57648",
    city: "Unnau",
  },
  {
    id: "8909",
    zip: "58089",
    city: "Hagen",
  },
  {
    id: "8910",
    zip: "58091",
    city: "Hagen",
  },
  {
    id: "8911",
    zip: "58093",
    city: "Hagen",
  },
  {
    id: "8912",
    zip: "58095",
    city: "Hagen",
  },
  {
    id: "8913",
    zip: "58097",
    city: "Hagen",
  },
  {
    id: "8914",
    zip: "58099",
    city: "Hagen",
  },
  {
    id: "8915",
    zip: "58119",
    city: "Hagen",
  },
  {
    id: "8916",
    zip: "58135",
    city: "Hagen",
  },
  {
    id: "8917",
    zip: "58239",
    city: "Schwerte",
  },
  {
    id: "8918",
    zip: "58256",
    city: "Ennepetal",
  },
  {
    id: "8919",
    zip: "58285",
    city: "Gevelsberg",
  },
  {
    id: "8920",
    zip: "58300",
    city: "Wetter (Ruhr)",
  },
  {
    id: "8921",
    zip: "58313",
    city: "Herdecke",
  },
  {
    id: "8922",
    zip: "58332",
    city: "Schwelm",
  },
  {
    id: "8923",
    zip: "58339",
    city: "Breckerfeld",
  },
  {
    id: "8924",
    zip: "58452",
    city: "Witten",
  },
  {
    id: "8925",
    zip: "58453",
    city: "Witten",
  },
  {
    id: "8926",
    zip: "58454",
    city: "Witten",
  },
  {
    id: "8927",
    zip: "58455",
    city: "Witten",
  },
  {
    id: "8928",
    zip: "58456",
    city: "Witten",
  },
  {
    id: "8929",
    zip: "58507",
    city: "Lüdenscheid",
  },
  {
    id: "8930",
    zip: "58509",
    city: "Lüdenscheid",
  },
  {
    id: "8931",
    zip: "58511",
    city: "Lüdenscheid",
  },
  {
    id: "8932",
    zip: "58513",
    city: "Lüdenscheid",
  },
  {
    id: "8933",
    zip: "58515",
    city: "Lüdenscheid",
  },
  {
    id: "8934",
    zip: "58540",
    city: "Meinerzhagen",
  },
  {
    id: "8935",
    zip: "58553",
    city: "Halver",
  },
  {
    id: "8936",
    zip: "58566",
    city: "Kierspe",
  },
  {
    id: "8937",
    zip: "58579",
    city: "Schalksmühle",
  },
  {
    id: "8938",
    zip: "58636",
    city: "Iserlohn",
  },
  {
    id: "8939",
    zip: "58638",
    city: "Iserlohn",
  },
  {
    id: "8940",
    zip: "58640",
    city: "Iserlohn",
  },
  {
    id: "8941",
    zip: "58642",
    city: "Iserlohn",
  },
  {
    id: "8942",
    zip: "58644",
    city: "Iserlohn",
  },
  {
    id: "8943",
    zip: "58675",
    city: "Hemer",
  },
  {
    id: "8944",
    zip: "58706",
    city: "Menden (Sauerland)",
  },
  {
    id: "8945",
    zip: "58708",
    city: "Menden (Sauerland)",
  },
  {
    id: "8946",
    zip: "58710",
    city: "Menden (Sauerland)",
  },
  {
    id: "8947",
    zip: "58730",
    city: "Fröndenberg",
  },
  {
    id: "8948",
    zip: "58739",
    city: "Wickede (Ruhr)",
  },
  {
    id: "8949",
    zip: "58762",
    city: "Altena",
  },
  {
    id: "8950",
    zip: "58769",
    city: "Nachrodt-Wiblingwerde",
  },
  {
    id: "8951",
    zip: "58791",
    city: "Werdohl",
  },
  {
    id: "8952",
    zip: "58802",
    city: "Balve",
  },
  {
    id: "8953",
    zip: "58809",
    city: "Neuenrade",
  },
  {
    id: "8954",
    zip: "58840",
    city: "Plettenberg",
  },
  {
    id: "8955",
    zip: "58849",
    city: "Herscheid",
  },
  {
    id: "8956",
    zip: "59063",
    city: "Hamm",
  },
  {
    id: "8957",
    zip: "59065",
    city: "Hamm",
  },
  {
    id: "8958",
    zip: "59067",
    city: "Hamm",
  },
  {
    id: "8959",
    zip: "59069",
    city: "Hamm",
  },
  {
    id: "8960",
    zip: "59071",
    city: "Hamm",
  },
  {
    id: "8961",
    zip: "59073",
    city: "Hamm",
  },
  {
    id: "8962",
    zip: "59075",
    city: "Hamm",
  },
  {
    id: "8963",
    zip: "59077",
    city: "Hamm",
  },
  {
    id: "8964",
    zip: "59174",
    city: "Kamen",
  },
  {
    id: "8965",
    zip: "59192",
    city: "Bergkamen",
  },
  {
    id: "8966",
    zip: "59199",
    city: "Bönen",
  },
  {
    id: "8967",
    zip: "59227",
    city: "Ahlen",
  },
  {
    id: "8968",
    zip: "59229",
    city: "Ahlen",
  },
  {
    id: "8969",
    zip: "59269",
    city: "Beckum",
  },
  {
    id: "8970",
    zip: "59302",
    city: "Oelde",
  },
  {
    id: "8971",
    zip: "59320",
    city: "Ennigerloh",
  },
  {
    id: "8972",
    zip: "59329",
    city: "Wadersloh",
  },
  {
    id: "8973",
    zip: "59348",
    city: "Lüdinghausen",
  },
  {
    id: "8974",
    zip: "59368",
    city: "Werne",
  },
  {
    id: "8975",
    zip: "59379",
    city: "Selm",
  },
  {
    id: "8976",
    zip: "59387",
    city: "Ascheberg",
  },
  {
    id: "8977",
    zip: "59394",
    city: "Nordkirchen",
  },
  {
    id: "8978",
    zip: "59399",
    city: "Olfen",
  },
  {
    id: "8979",
    zip: "59423",
    city: "Unna",
  },
  {
    id: "8980",
    zip: "59425",
    city: "Unna",
  },
  {
    id: "8981",
    zip: "59427",
    city: "Unna",
  },
  {
    id: "8982",
    zip: "59439",
    city: "Holzwickede",
  },
  {
    id: "8983",
    zip: "59457",
    city: "Werl",
  },
  {
    id: "8984",
    zip: "59469",
    city: "Ense",
  },
  {
    id: "8985",
    zip: "59494",
    city: "Soest",
  },
  {
    id: "8986",
    zip: "59505",
    city: "Bad Sassendorf",
  },
  {
    id: "8987",
    zip: "59510",
    city: "Lippetal",
  },
  {
    id: "8988",
    zip: "59514",
    city: "Welver",
  },
  {
    id: "8989",
    zip: "59519",
    city: "Möhnesee",
  },
  {
    id: "8990",
    zip: "59555",
    city: "Lippstadt",
  },
  {
    id: "8991",
    zip: "59556",
    city: "Lippstadt",
  },
  {
    id: "8992",
    zip: "59557",
    city: "Lippstadt",
  },
  {
    id: "8993",
    zip: "59558",
    city: "Lippstadt",
  },
  {
    id: "8994",
    zip: "59581",
    city: "Warstein",
  },
  {
    id: "8995",
    zip: "59590",
    city: "Geseke",
  },
  {
    id: "8996",
    zip: "59597",
    city: "Erwitte",
  },
  {
    id: "8997",
    zip: "59602",
    city: "Rüthen",
  },
  {
    id: "8998",
    zip: "59609",
    city: "Anröchte",
  },
  {
    id: "8999",
    zip: "59755",
    city: "Arnsberg",
  },
  {
    id: "9000",
    zip: "59757",
    city: "Arnsberg",
  },
  {
    id: "9001",
    zip: "59759",
    city: "Arnsberg",
  },
  {
    id: "9002",
    zip: "59821",
    city: "Arnsberg",
  },
  {
    id: "9003",
    zip: "59823",
    city: "Arnsberg",
  },
  {
    id: "9004",
    zip: "59846",
    city: "Sundern (Sauerland)",
  },
  {
    id: "9005",
    zip: "59872",
    city: "Meschede",
  },
  {
    id: "9006",
    zip: "59889",
    city: "Eslohe (Sauerland)",
  },
  {
    id: "9007",
    zip: "59909",
    city: "Bestwig",
  },
  {
    id: "9008",
    zip: "59929",
    city: "Brilon",
  },
  {
    id: "9009",
    zip: "59939",
    city: "Olsberg",
  },
  {
    id: "9010",
    zip: "59955",
    city: "Winterberg",
  },
  {
    id: "9011",
    zip: "59964",
    city: "Medebach",
  },
  {
    id: "9012",
    zip: "59969",
    city: "Hallenberg",
  },
  {
    id: "153642",
    zip: "60306",
    city: "Frankfurt am Main",
  },
  {
    id: "9013",
    zip: "60308",
    city: "Frankfurt am Main",
  },
  {
    id: "153668",
    zip: "60310",
    city: "Frankfurt am Main",
  },
  {
    id: "9014",
    zip: "60311",
    city: "Frankfurt am Main",
  },
  {
    id: "9015",
    zip: "60313",
    city: "Frankfurt am Main",
  },
  {
    id: "9016",
    zip: "60314",
    city: "Frankfurt am Main",
  },
  {
    id: "9017",
    zip: "60316",
    city: "Frankfurt am Main",
  },
  {
    id: "9018",
    zip: "60318",
    city: "Frankfurt am Main",
  },
  {
    id: "9019",
    zip: "60320",
    city: "Frankfurt am Main",
  },
  {
    id: "9020",
    zip: "60322",
    city: "Frankfurt am Main",
  },
  {
    id: "9021",
    zip: "60323",
    city: "Frankfurt am Main",
  },
  {
    id: "9022",
    zip: "60325",
    city: "Frankfurt am Main",
  },
  {
    id: "9023",
    zip: "60326",
    city: "Frankfurt am Main",
  },
  {
    id: "9024",
    zip: "60327",
    city: "Frankfurt am Main",
  },
  {
    id: "9025",
    zip: "60329",
    city: "Frankfurt am Main",
  },
  {
    id: "9026",
    zip: "60385",
    city: "Frankfurt am Main",
  },
  {
    id: "9027",
    zip: "60386",
    city: "Frankfurt am Main",
  },
  {
    id: "9028",
    zip: "60388",
    city: "Frankfurt am Main",
  },
  {
    id: "9029",
    zip: "60389",
    city: "Frankfurt am Main",
  },
  {
    id: "9030",
    zip: "60431",
    city: "Frankfurt am Main",
  },
  {
    id: "9031",
    zip: "60433",
    city: "Frankfurt am Main",
  },
  {
    id: "9032",
    zip: "60435",
    city: "Frankfurt am Main",
  },
  {
    id: "9033",
    zip: "60437",
    city: "Frankfurt am Main",
  },
  {
    id: "153644",
    zip: "60438",
    city: "Frankfurt am Main",
  },
  {
    id: "9034",
    zip: "60439",
    city: "Frankfurt am Main",
  },
  {
    id: "9035",
    zip: "60486",
    city: "Frankfurt am Main",
  },
  {
    id: "9036",
    zip: "60487",
    city: "Frankfurt am Main",
  },
  {
    id: "9037",
    zip: "60488",
    city: "Frankfurt am Main",
  },
  {
    id: "9038",
    zip: "60489",
    city: "Frankfurt am Main",
  },
  {
    id: "9039",
    zip: "60528",
    city: "Frankfurt am Main",
  },
  {
    id: "9040",
    zip: "60529",
    city: "Frankfurt am Main",
  },
  {
    id: "9041",
    zip: "60549",
    city: "Frankfurt am Main",
  },
  {
    id: "9042",
    zip: "60594",
    city: "Frankfurt am Main",
  },
  {
    id: "9043",
    zip: "60596",
    city: "Frankfurt am Main",
  },
  {
    id: "9044",
    zip: "60598",
    city: "Frankfurt am Main",
  },
  {
    id: "9045",
    zip: "60599",
    city: "Frankfurt am Main",
  },
  {
    id: "9046",
    zip: "61118",
    city: "Bad Vilbel",
  },
  {
    id: "9047",
    zip: "61130",
    city: "Nidderau",
  },
  {
    id: "9048",
    zip: "61137",
    city: "Schöneck",
  },
  {
    id: "9049",
    zip: "61138",
    city: "Niederdorfelden",
  },
  {
    id: "9050",
    zip: "61169",
    city: "Friedberg (Hessen)",
  },
  {
    id: "9051",
    zip: "61184",
    city: "Karben",
  },
  {
    id: "13160",
    zip: "61191",
    city: "Rosbach vor der Höhe",
  },
  {
    id: "9052",
    zip: "61194",
    city: "Niddatal",
  },
  {
    id: "9053",
    zip: "61197",
    city: "Florstadt",
  },
  {
    id: "9054",
    zip: "61200",
    city: "Wölfersheim",
  },
  {
    id: "9055",
    zip: "61203",
    city: "Reichelsheim (Wetterau)",
  },
  {
    id: "9056",
    zip: "61206",
    city: "Wöllstadt",
  },
  {
    id: "9057",
    zip: "61209",
    city: "Echzell",
  },
  {
    id: "9058",
    zip: "61231",
    city: "Bad Nauheim",
  },
  {
    id: "9059",
    zip: "61239",
    city: "Ober-Mörlen",
  },
  {
    id: "9060",
    zip: "61250",
    city: "Usingen",
  },
  {
    id: "9061",
    zip: "61267",
    city: "Neu-Anspach",
  },
  {
    id: "9062",
    zip: "61273",
    city: "Wehrheim",
  },
  {
    id: "9063",
    zip: "61276",
    city: "Weilrod",
  },
  {
    id: "9064",
    zip: "61279",
    city: "Grävenwiesbach",
  },
  {
    id: "13161",
    zip: "61348",
    city: "Bad Homburg vor der Höhe",
  },
  {
    id: "13162",
    zip: "61350",
    city: "Bad Homburg vor der Höhe",
  },
  {
    id: "13163",
    zip: "61352",
    city: "Bad Homburg vor der Höhe",
  },
  {
    id: "9065",
    zip: "61381",
    city: "Friedrichsdorf",
  },
  {
    id: "9066",
    zip: "61389",
    city: "Schmitten",
  },
  {
    id: "9067",
    zip: "61440",
    city: "Oberursel (Taunus)",
  },
  {
    id: "9068",
    zip: "61449",
    city: "Steinbach (Taunus)",
  },
  {
    id: "9069",
    zip: "61462",
    city: "Königstein im Taunus",
  },
  {
    id: "9070",
    zip: "61476",
    city: "Kronberg im Taunus",
  },
  {
    id: "9071",
    zip: "61479",
    city: "Glashütten",
  },
  {
    id: "9072",
    zip: "63065",
    city: "Offenbach am Main",
  },
  {
    id: "9073",
    zip: "63067",
    city: "Offenbach am Main",
  },
  {
    id: "9074",
    zip: "63069",
    city: "Offenbach am Main",
  },
  {
    id: "9075",
    zip: "63071",
    city: "Offenbach am Main",
  },
  {
    id: "9076",
    zip: "63073",
    city: "Offenbach am Main",
  },
  {
    id: "9077",
    zip: "63075",
    city: "Offenbach am Main",
  },
  {
    id: "9078",
    zip: "63110",
    city: "Rodgau",
  },
  {
    id: "9079",
    zip: "63128",
    city: "Dietzenbach",
  },
  {
    id: "9080",
    zip: "63150",
    city: "Heusenstamm",
  },
  {
    id: "9081",
    zip: "63165",
    city: "Mühlheim am Main",
  },
  {
    id: "9082",
    zip: "63179",
    city: "Obertshausen",
  },
  {
    id: "9083",
    zip: "63225",
    city: "Langen",
  },
  {
    id: "9084",
    zip: "63263",
    city: "Neu-Isenburg",
  },
  {
    id: "9085",
    zip: "63303",
    city: "Dreieich",
  },
  {
    id: "9086",
    zip: "63322",
    city: "Rödermark",
  },
  {
    id: "9087",
    zip: "63329",
    city: "Egelsbach",
  },
  {
    id: "9088",
    zip: "63450",
    city: "Hanau",
  },
  {
    id: "9089",
    zip: "63452",
    city: "Hanau",
  },
  {
    id: "9090",
    zip: "63454",
    city: "Hanau",
  },
  {
    id: "9092",
    zip: "63456",
    city: "Hanau",
  },
  {
    id: "9093",
    zip: "63457",
    city: "Hanau",
  },
  {
    id: "9094",
    zip: "63477",
    city: "Maintal",
  },
  {
    id: "9095",
    zip: "63486",
    city: "Bruchköbel",
  },
  {
    id: "9096",
    zip: "63500",
    city: "Seligenstadt",
  },
  {
    id: "9097",
    zip: "63505",
    city: "Langenselbold",
  },
  {
    id: "9098",
    zip: "63512",
    city: "Hainburg",
  },
  {
    id: "9099",
    zip: "63517",
    city: "Rodenbach",
  },
  {
    id: "9100",
    zip: "63526",
    city: "Erlensee",
  },
  {
    id: "9101",
    zip: "63533",
    city: "Mainhausen",
  },
  {
    id: "9102",
    zip: "63538",
    city: "Großkrotzenburg",
  },
  {
    id: "9103",
    zip: "63543",
    city: "Neuberg",
  },
  {
    id: "9104",
    zip: "63546",
    city: "Hammersbach",
  },
  {
    id: "9105",
    zip: "63549",
    city: "Ronneburg",
  },
  {
    id: "9106",
    zip: "63571",
    city: "Gelnhausen",
  },
  {
    id: "9107",
    zip: "63579",
    city: "Freigericht",
  },
  {
    id: "9108",
    zip: "63584",
    city: "Gründau",
  },
  {
    id: "9109",
    zip: "63589",
    city: "Linsengericht",
  },
  {
    id: "9110",
    zip: "63594",
    city: "Hasselroth",
  },
  {
    id: "9111",
    zip: "63599",
    city: "Biebergemünd",
  },
  {
    id: "9112",
    zip: "63607",
    city: "Wächtersbach",
  },
  {
    id: "9113",
    zip: "63619",
    city: "Bad Orb",
  },
  {
    id: "9114",
    zip: "63628",
    city: "Bad Soden-Salmünster",
  },
  {
    id: "9115",
    zip: "63633",
    city: "Birstein",
  },
  {
    id: "9116",
    zip: "63636",
    city: "Brachttal",
  },
  {
    id: "9118",
    zip: "63637",
    city: "Jossgrund",
  },
  {
    id: "9119",
    zip: "63639",
    city: "Flörsbachtal",
  },
  {
    id: "9120",
    zip: "63654",
    city: "Büdingen",
  },
  {
    id: "9121",
    zip: "63667",
    city: "Nidda",
  },
  {
    id: "9122",
    zip: "63674",
    city: "Altenstadt",
  },
  {
    id: "9123",
    zip: "63679",
    city: "Schotten",
  },
  {
    id: "9124",
    zip: "63683",
    city: "Ortenberg",
  },
  {
    id: "9125",
    zip: "63688",
    city: "Gedern",
  },
  {
    id: "9126",
    zip: "63691",
    city: "Ranstadt",
  },
  {
    id: "9117",
    zip: "63694",
    city: "Limeshain",
  },
  {
    id: "9127",
    zip: "63695",
    city: "Glauburg",
  },
  {
    id: "9091",
    zip: "63697",
    city: "Hirzenhain",
  },
  {
    id: "9128",
    zip: "63699",
    city: "Kefenrod",
  },
  {
    id: "9129",
    zip: "63739",
    city: "Aschaffenburg",
  },
  {
    id: "9130",
    zip: "63741",
    city: "Aschaffenburg",
  },
  {
    id: "9131",
    zip: "63743",
    city: "Aschaffenburg",
  },
  {
    id: "13164",
    zip: "63755",
    city: "Alzenau in Unterfranken",
  },
  {
    id: "9132",
    zip: "63762",
    city: "Großostheim",
  },
  {
    id: "9133",
    zip: "63768",
    city: "Hösbach",
  },
  {
    id: "9134",
    zip: "63773",
    city: "Goldbach",
  },
  {
    id: "9135",
    zip: "63776",
    city: "Mömbris",
  },
  {
    id: "13165",
    zip: "63785",
    city: "Obernburg am Main",
  },
  {
    id: "13166",
    zip: "63791",
    city: "Karlstein am Main",
  },
  {
    id: "13167",
    zip: "63796",
    city: "Kahl am Main",
  },
  {
    id: "9136",
    zip: "63801",
    city: "Kleinostheim",
  },
  {
    id: "9137",
    zip: "63808",
    city: "Haibach",
  },
  {
    id: "13168",
    zip: "63811",
    city: "Stockstadt am Main",
  },
  {
    id: "9138",
    zip: "63814",
    city: "Mainaschaff",
  },
  {
    id: "9139",
    zip: "63820",
    city: "Elsenfeld",
  },
  {
    id: "9140",
    zip: "63825",
    city: "Schöllkrippen",
  },
  {
    id: "9141",
    zip: "63826",
    city: "Geiselbach",
  },
  {
    id: "9142",
    zip: "63828",
    city: "Kleinkahl",
  },
  {
    id: "9143",
    zip: "63829",
    city: "Krombach",
  },
  {
    id: "9144",
    zip: "63831",
    city: "Wiesen",
  },
  {
    id: "13169",
    zip: "63834",
    city: "Sulzbach am Main",
  },
  {
    id: "9145",
    zip: "63839",
    city: "Kleinwallstadt",
  },
  {
    id: "9146",
    zip: "63840",
    city: "Hausen",
  },
  {
    id: "9147",
    zip: "63843",
    city: "Niedernberg",
  },
  {
    id: "9148",
    zip: "63846",
    city: "Laufach",
  },
  {
    id: "9149",
    zip: "63849",
    city: "Leidersbach",
  },
  {
    id: "9150",
    zip: "63853",
    city: "Mömlingen",
  },
  {
    id: "9151",
    zip: "63856",
    city: "Bessenbach",
  },
  {
    id: "9152",
    zip: "63857",
    city: "Waldaschaff",
  },
  {
    id: "9153",
    zip: "63860",
    city: "Rothenbuch",
  },
  {
    id: "9154",
    zip: "63863",
    city: "Eschau",
  },
  {
    id: "9155",
    zip: "63864",
    city: "Glattbach",
  },
  {
    id: "9156",
    zip: "63867",
    city: "Johannesberg",
  },
  {
    id: "9157",
    zip: "63868",
    city: "Großwallstadt",
  },
  {
    id: "9158",
    zip: "63869",
    city: "Heigenbrücken",
  },
  {
    id: "9159",
    zip: "63871",
    city: "Heinrichsthal",
  },
  {
    id: "9160",
    zip: "63872",
    city: "Heimbuchenthal",
  },
  {
    id: "9161",
    zip: "63874",
    city: "Dammbach",
  },
  {
    id: "9162",
    zip: "63875",
    city: "Mespelbrunn",
  },
  {
    id: "9163",
    zip: "63877",
    city: "Sailauf",
  },
  {
    id: "9164",
    zip: "63879",
    city: "Weibersbrunn",
  },
  {
    id: "9165",
    zip: "63897",
    city: "Miltenberg",
  },
  {
    id: "13170",
    zip: "63906",
    city: "Erlenbach am Main",
  },
  {
    id: "13171",
    zip: "63911",
    city: "Klingenberg am Main",
  },
  {
    id: "9166",
    zip: "63916",
    city: "Amorbach",
  },
  {
    id: "9167",
    zip: "63920",
    city: "Großheubach",
  },
  {
    id: "9168",
    zip: "63924",
    city: "Kleinheubach",
  },
  {
    id: "9169",
    zip: "63925",
    city: "Laudenbach",
  },
  {
    id: "9170",
    zip: "63927",
    city: "Bürgstadt",
  },
  {
    id: "9171",
    zip: "63928",
    city: "Eichenbühl",
  },
  {
    id: "9174",
    zip: "63930",
    city: "Neunkirchen",
  },
  {
    id: "9175",
    zip: "63931",
    city: "Kirchzell",
  },
  {
    id: "9176",
    zip: "63933",
    city: "Mönchberg",
  },
  {
    id: "9177",
    zip: "63934",
    city: "Röllbach",
  },
  {
    id: "9178",
    zip: "63936",
    city: "Schneeberg",
  },
  {
    id: "9179",
    zip: "63937",
    city: "Weilbach",
  },
  {
    id: "13172",
    zip: "63939",
    city: "Wörth am Main",
  },
  {
    id: "9182",
    zip: "64283",
    city: "Darmstadt",
  },
  {
    id: "9183",
    zip: "64285",
    city: "Darmstadt",
  },
  {
    id: "9184",
    zip: "64287",
    city: "Darmstadt",
  },
  {
    id: "9185",
    zip: "64289",
    city: "Darmstadt",
  },
  {
    id: "9186",
    zip: "64291",
    city: "Darmstadt",
  },
  {
    id: "9187",
    zip: "64293",
    city: "Darmstadt",
  },
  {
    id: "9172",
    zip: "64295",
    city: "Darmstadt",
  },
  {
    id: "9173",
    zip: "64297",
    city: "Darmstadt",
  },
  {
    id: "9188",
    zip: "64319",
    city: "Pfungstadt",
  },
  {
    id: "9189",
    zip: "64331",
    city: "Weiterstadt",
  },
  {
    id: "9190",
    zip: "64342",
    city: "Seeheim-Jugenheim",
  },
  {
    id: "9191",
    zip: "64347",
    city: "Griesheim",
  },
  {
    id: "9192",
    zip: "64354",
    city: "Reinheim",
  },
  {
    id: "9193",
    zip: "64367",
    city: "Mühltal",
  },
  {
    id: "9194",
    zip: "64372",
    city: "Ober-Ramstadt",
  },
  {
    id: "9195",
    zip: "64380",
    city: "Roßdorf",
  },
  {
    id: "9196",
    zip: "64385",
    city: "Reichelsheim (Odenwald)",
  },
  {
    id: "9197",
    zip: "64390",
    city: "Erzhausen",
  },
  {
    id: "9198",
    zip: "64395",
    city: "Brensbach",
  },
  {
    id: "9199",
    zip: "64397",
    city: "Modautal",
  },
  {
    id: "9200",
    zip: "64401",
    city: "Groß-Bieberau",
  },
  {
    id: "9201",
    zip: "64404",
    city: "Bickenbach",
  },
  {
    id: "9202",
    zip: "64405",
    city: "Fischbachtal",
  },
  {
    id: "9203",
    zip: "64407",
    city: "Fränkisch-Crumbach",
  },
  {
    id: "9204",
    zip: "64409",
    city: "Messel",
  },
  {
    id: "9205",
    zip: "64521",
    city: "Groß-Gerau",
  },
  {
    id: "9206",
    zip: "64546",
    city: "Mörfelden-Walldorf",
  },
  {
    id: "9207",
    zip: "64560",
    city: "Riedstadt",
  },
  {
    id: "9208",
    zip: "64569",
    city: "Nauheim",
  },
  {
    id: "9209",
    zip: "64572",
    city: "Büttelborn",
  },
  {
    id: "9210",
    zip: "64579",
    city: "Gernsheim",
  },
  {
    id: "9211",
    zip: "64584",
    city: "Biebesheim am Rhein",
  },
  {
    id: "9212",
    zip: "64589",
    city: "Stockstadt am Rhein",
  },
  {
    id: "9213",
    zip: "64625",
    city: "Bensheim",
  },
  {
    id: "9214",
    zip: "64646",
    city: "Heppenheim (Bergstraße)",
  },
  {
    id: "9215",
    zip: "64653",
    city: "Lorsch",
  },
  {
    id: "9216",
    zip: "64658",
    city: "Fürth",
  },
  {
    id: "9218",
    zip: "64665",
    city: "Alsbach-Hähnlein",
  },
  {
    id: "9219",
    zip: "64668",
    city: "Rimbach",
  },
  {
    id: "9220",
    zip: "64673",
    city: "Zwingenberg",
  },
  {
    id: "9221",
    zip: "64678",
    city: "Lindenfels",
  },
  {
    id: "9222",
    zip: "64683",
    city: "Einhausen",
  },
  {
    id: "9223",
    zip: "64686",
    city: "Lautertal (Odenwald)",
  },
  {
    id: "9224",
    zip: "64689",
    city: "Grasellenbach",
  },
  {
    id: "9225",
    zip: "64711",
    city: "Erbach",
  },
  {
    id: "9226",
    zip: "64720",
    city: "Michelstadt",
  },
  {
    id: "9227",
    zip: "64732",
    city: "Bad König",
  },
  {
    id: "13181",
    zip: "64739",
    city: "Höchst im Odenwald",
  },
  {
    id: "9228",
    zip: "64743",
    city: "Beerfelden",
  },
  {
    id: "9229",
    zip: "64747",
    city: "Breuberg",
  },
  {
    id: "9230",
    zip: "64750",
    city: "Lützelbach",
  },
  {
    id: "9231",
    zip: "64753",
    city: "Brombachtal",
  },
  {
    id: "9180",
    zip: "64754",
    city: "Hesseneck",
  },
  {
    id: "9181",
    zip: "64756",
    city: "Mossautal",
  },
  {
    id: "9217",
    zip: "64757",
    city: "Rothenberg",
  },
  {
    id: "9232",
    zip: "64759",
    city: "Sensbachtal",
  },
  {
    id: "9233",
    zip: "64807",
    city: "Dieburg",
  },
  {
    id: "9234",
    zip: "64823",
    city: "Groß-Umstadt",
  },
  {
    id: "9235",
    zip: "64832",
    city: "Babenhausen",
  },
  {
    id: "9236",
    zip: "64839",
    city: "Münster",
  },
  {
    id: "9237",
    zip: "64846",
    city: "Groß-Zimmern",
  },
  {
    id: "9238",
    zip: "64850",
    city: "Schaafheim",
  },
  {
    id: "9239",
    zip: "64853",
    city: "Otzberg",
  },
  {
    id: "9240",
    zip: "64859",
    city: "Eppertshausen",
  },
  {
    id: "9241",
    zip: "65183",
    city: "Wiesbaden",
  },
  {
    id: "9242",
    zip: "65185",
    city: "Wiesbaden",
  },
  {
    id: "9243",
    zip: "65187",
    city: "Wiesbaden",
  },
  {
    id: "9244",
    zip: "65189",
    city: "Wiesbaden",
  },
  {
    id: "9245",
    zip: "65191",
    city: "Wiesbaden",
  },
  {
    id: "9246",
    zip: "65193",
    city: "Wiesbaden",
  },
  {
    id: "9247",
    zip: "65195",
    city: "Wiesbaden",
  },
  {
    id: "9248",
    zip: "65197",
    city: "Wiesbaden",
  },
  {
    id: "9249",
    zip: "65199",
    city: "Wiesbaden",
  },
  {
    id: "9250",
    zip: "65201",
    city: "Wiesbaden",
  },
  {
    id: "9251",
    zip: "65203",
    city: "Wiesbaden",
  },
  {
    id: "9252",
    zip: "65205",
    city: "Wiesbaden",
  },
  {
    id: "9253",
    zip: "65207",
    city: "Wiesbaden",
  },
  {
    id: "9254",
    zip: "65232",
    city: "Taunusstein",
  },
  {
    id: "9255",
    zip: "65239",
    city: "Hochheim am Main",
  },
  {
    id: "9256",
    zip: "65307",
    city: "Bad Schwalbach",
  },
  {
    id: "9257",
    zip: "65321",
    city: "Heidenrod",
  },
  {
    id: "9258",
    zip: "65326",
    city: "Aarbergen",
  },
  {
    id: "9259",
    zip: "65329",
    city: "Hohenstein",
  },
  {
    id: "9260",
    zip: "65343",
    city: "Eltville am Rhein",
  },
  {
    id: "9261",
    zip: "65344",
    city: "Eltville am Rhein",
  },
  {
    id: "9262",
    zip: "65345",
    city: "Eltville am Rhein",
  },
  {
    id: "9263",
    zip: "65346",
    city: "Eltville am Rhein",
  },
  {
    id: "9264",
    zip: "65347",
    city: "Eltville am Rhein",
  },
  {
    id: "9265",
    zip: "65366",
    city: "Geisenheim",
  },
  {
    id: "9266",
    zip: "65375",
    city: "Oestrich-Winkel",
  },
  {
    id: "9267",
    zip: "65385",
    city: "Rüdesheim am Rhein",
  },
  {
    id: "9268",
    zip: "65388",
    city: "Schlangenbad",
  },
  {
    id: "9269",
    zip: "65391",
    city: "Lorch",
  },
  {
    id: "9270",
    zip: "65396",
    city: "Walluf",
  },
  {
    id: "9271",
    zip: "65399",
    city: "Kiedrich",
  },
  {
    id: "9272",
    zip: "65428",
    city: "Rüsselsheim",
  },
  {
    id: "9273",
    zip: "65439",
    city: "Flörsheim am Main",
  },
  {
    id: "9274",
    zip: "65451",
    city: "Kelsterbach",
  },
  {
    id: "9275",
    zip: "65462",
    city: "Ginsheim-Gustavsburg",
  },
  {
    id: "9276",
    zip: "65468",
    city: "Trebur",
  },
  {
    id: "9277",
    zip: "65474",
    city: "Bischofsheim",
  },
  {
    id: "9278",
    zip: "65479",
    city: "Raunheim",
  },
  {
    id: "9279",
    zip: "65510",
    city: "Idstein",
  },
  {
    id: "9280",
    zip: "65520",
    city: "Bad Camberg",
  },
  {
    id: "9281",
    zip: "65527",
    city: "Niedernhausen",
  },
  {
    id: "9282",
    zip: "65529",
    city: "Waldems",
  },
  {
    id: "13174",
    zip: "65549",
    city: "Limburg an der Lahn",
  },
  {
    id: "13173",
    zip: "65550",
    city: "Limburg an der Lahn",
  },
  {
    id: "13175",
    zip: "65551",
    city: "Limburg an der Lahn",
  },
  {
    id: "13176",
    zip: "65552",
    city: "Limburg an der Lahn",
  },
  {
    id: "13177",
    zip: "65553",
    city: "Limburg an der Lahn",
  },
  {
    id: "13178",
    zip: "65554",
    city: "Limburg an der Lahn",
  },
  {
    id: "13179",
    zip: "65555",
    city: "Limburg an der Lahn",
  },
  {
    id: "13180",
    zip: "65556",
    city: "Limburg an der Lahn",
  },
  {
    id: "9283",
    zip: "65558",
    city: "Burgschwalbach",
  },
  {
    id: "9284",
    zip: "65582",
    city: "Diez",
  },
  {
    id: "9285",
    zip: "65589",
    city: "Hadamar",
  },
  {
    id: "9286",
    zip: "65594",
    city: "Runkel",
  },
  {
    id: "9287",
    zip: "65597",
    city: "Hünfelden",
  },
  {
    id: "9288",
    zip: "65599",
    city: "Dornburg",
  },
  {
    id: "9289",
    zip: "65604",
    city: "Elz",
  },
  {
    id: "9290",
    zip: "65606",
    city: "Villmar",
  },
  {
    id: "9291",
    zip: "65611",
    city: "Brechen",
  },
  {
    id: "9292",
    zip: "65614",
    city: "Beselich",
  },
  {
    id: "9293",
    zip: "65618",
    city: "Selters (Taunus)",
  },
  {
    id: "9294",
    zip: "65620",
    city: "Waldbrunn (Westerwald)",
  },
  {
    id: "9295",
    zip: "65623",
    city: "Hahnstätten",
  },
  {
    id: "9296",
    zip: "65624",
    city: "Altendiez",
  },
  {
    id: "9297",
    zip: "65626",
    city: "Birlenbach",
  },
  {
    id: "9298",
    zip: "65627",
    city: "Elbtal",
  },
  {
    id: "9299",
    zip: "65629",
    city: "Niederneisen",
  },
  {
    id: "9300",
    zip: "65719",
    city: "Hofheim am Taunus",
  },
  {
    id: "9301",
    zip: "65760",
    city: "Eschborn",
  },
  {
    id: "9302",
    zip: "65779",
    city: "Kelkheim (Taunus)",
  },
  {
    id: "9303",
    zip: "65795",
    city: "Hattersheim am Main",
  },
  {
    id: "9304",
    zip: "65812",
    city: "Bad Soden am Taunus",
  },
  {
    id: "9305",
    zip: "65817",
    city: "Eppstein",
  },
  {
    id: "9308",
    zip: "65824",
    city: "Schwalbach am Taunus",
  },
  {
    id: "9309",
    zip: "65830",
    city: "Kriftel",
  },
  {
    id: "9310",
    zip: "65835",
    city: "Liederbach am Taunus",
  },
  {
    id: "9311",
    zip: "65843",
    city: "Sulzbach (Taunus)",
  },
  {
    id: "9312",
    zip: "65929",
    city: "Frankfurt am Main",
  },
  {
    id: "9313",
    zip: "65931",
    city: "Frankfurt am Main",
  },
  {
    id: "9314",
    zip: "65933",
    city: "Frankfurt am Main",
  },
  {
    id: "9315",
    zip: "65934",
    city: "Frankfurt am Main",
  },
  {
    id: "9316",
    zip: "65936",
    city: "Frankfurt am Main",
  },
  {
    id: "9317",
    zip: "66111",
    city: "Saarbrücken",
  },
  {
    id: "9306",
    zip: "66113",
    city: "Saarbrücken",
  },
  {
    id: "9307",
    zip: "66115",
    city: "Saarbrücken",
  },
  {
    id: "9318",
    zip: "66117",
    city: "Saarbrücken",
  },
  {
    id: "9319",
    zip: "66119",
    city: "Saarbrücken",
  },
  {
    id: "9320",
    zip: "66121",
    city: "Saarbrücken",
  },
  {
    id: "9321",
    zip: "66123",
    city: "Saarbrücken",
  },
  {
    id: "9322",
    zip: "66125",
    city: "Saarbrücken",
  },
  {
    id: "9323",
    zip: "66126",
    city: "Saarbrücken",
  },
  {
    id: "9324",
    zip: "66127",
    city: "Saarbrücken",
  },
  {
    id: "9325",
    zip: "66128",
    city: "Saarbrücken",
  },
  {
    id: "9326",
    zip: "66129",
    city: "Saarbrücken",
  },
  {
    id: "9327",
    zip: "66130",
    city: "Saarbrücken",
  },
  {
    id: "9328",
    zip: "66131",
    city: "Saarbrücken",
  },
  {
    id: "9329",
    zip: "66132",
    city: "Saarbrücken",
  },
  {
    id: "9330",
    zip: "66133",
    city: "Saarbrücken",
  },
  {
    id: "9331",
    zip: "66265",
    city: "Heusweiler",
  },
  {
    id: "9332",
    zip: "66271",
    city: "Kleinblittersdorf",
  },
  {
    id: "12901",
    zip: "66280",
    city: "Sulzbach / Saar",
  },
  {
    id: "9333",
    zip: "66287",
    city: "Quierschied",
  },
  {
    id: "9334",
    zip: "66292",
    city: "Riegelsberg",
  },
  {
    id: "9335",
    zip: "66299",
    city: "Friedrichsthal",
  },
  {
    id: "9336",
    zip: "66333",
    city: "Völklingen",
  },
  {
    id: "9337",
    zip: "66346",
    city: "Püttlingen",
  },
  {
    id: "9338",
    zip: "66352",
    city: "Großrosseln",
  },
  {
    id: "9339",
    zip: "66359",
    city: "Bous",
  },
  {
    id: "9340",
    zip: "66386",
    city: "Sankt Ingbert",
  },
  {
    id: "9341",
    zip: "66399",
    city: "Mandelbachtal",
  },
  {
    id: "9342",
    zip: "66424",
    city: "Homburg",
  },
  {
    id: "9343",
    zip: "66440",
    city: "Blieskastel",
  },
  {
    id: "9344",
    zip: "66450",
    city: "Bexbach",
  },
  {
    id: "9345",
    zip: "66453",
    city: "Gersheim",
  },
  {
    id: "9346",
    zip: "66459",
    city: "Kirkel",
  },
  {
    id: "9347",
    zip: "66482",
    city: "Zweibrücken",
  },
  {
    id: "9348",
    zip: "66484",
    city: "Battweiler",
  },
  {
    id: "9349",
    zip: "66497",
    city: "Contwig",
  },
  {
    id: "9350",
    zip: "66500",
    city: "Hornbach",
  },
  {
    id: "9351",
    zip: "66501",
    city: "Kleinbundenbach",
  },
  {
    id: "9352",
    zip: "66503",
    city: "Dellfeld",
  },
  {
    id: "9353",
    zip: "66504",
    city: "Bottenbach",
  },
  {
    id: "9354",
    zip: "66506",
    city: "Maßweiler",
  },
  {
    id: "9355",
    zip: "66507",
    city: "Reifenberg",
  },
  {
    id: "9356",
    zip: "66509",
    city: "Rieschweiler-Mühlbach",
  },
  {
    id: "9357",
    zip: "66538",
    city: "Neunkirchen",
  },
  {
    id: "9358",
    zip: "66539",
    city: "Neunkirchen",
  },
  {
    id: "9359",
    zip: "66540",
    city: "Neunkirchen",
  },
  {
    id: "9360",
    zip: "66557",
    city: "Illingen",
  },
  {
    id: "9361",
    zip: "66564",
    city: "Ottweiler",
  },
  {
    id: "9362",
    zip: "66571",
    city: "Eppelborn",
  },
  {
    id: "9363",
    zip: "66578",
    city: "Schiffweiler",
  },
  {
    id: "9364",
    zip: "66583",
    city: "Spiesen-Elversberg",
  },
  {
    id: "9365",
    zip: "66589",
    city: "Merchweiler",
  },
  {
    id: "9366",
    zip: "66606",
    city: "Sankt Wendel",
  },
  {
    id: "9367",
    zip: "66620",
    city: "Nonnweiler",
  },
  {
    id: "9368",
    zip: "66625",
    city: "Nohfelden",
  },
  {
    id: "9369",
    zip: "66629",
    city: "Freisen",
  },
  {
    id: "9370",
    zip: "66636",
    city: "Tholey",
  },
  {
    id: "9371",
    zip: "66640",
    city: "Namborn",
  },
  {
    id: "9372",
    zip: "66646",
    city: "Marpingen",
  },
  {
    id: "9373",
    zip: "66649",
    city: "Oberthal",
  },
  {
    id: "9374",
    zip: "66663",
    city: "Merzig",
  },
  {
    id: "9375",
    zip: "66679",
    city: "Losheim",
  },
  {
    id: "9376",
    zip: "66687",
    city: "Wadern",
  },
  {
    id: "9377",
    zip: "66693",
    city: "Mettlach",
  },
  {
    id: "9378",
    zip: "66701",
    city: "Beckingen",
  },
  {
    id: "9379",
    zip: "66706",
    city: "Perl",
  },
  {
    id: "9380",
    zip: "66709",
    city: "Weiskirchen",
  },
  {
    id: "9381",
    zip: "66740",
    city: "Saarlouis",
  },
  {
    id: "12902",
    zip: "66763",
    city: "Dillingen / Saar",
  },
  {
    id: "9382",
    zip: "66773",
    city: "Schwalbach",
  },
  {
    id: "9383",
    zip: "66780",
    city: "Rehlingen-Siersburg",
  },
  {
    id: "9384",
    zip: "66787",
    city: "Wadgassen",
  },
  {
    id: "9385",
    zip: "66793",
    city: "Saarwellingen",
  },
  {
    id: "9386",
    zip: "66798",
    city: "Wallerfangen",
  },
  {
    id: "9387",
    zip: "66802",
    city: "Überherrn",
  },
  {
    id: "9388",
    zip: "66806",
    city: "Ensdorf",
  },
  {
    id: "9389",
    zip: "66809",
    city: "Nalbach",
  },
  {
    id: "9390",
    zip: "66822",
    city: "Lebach",
  },
  {
    id: "9391",
    zip: "66839",
    city: "Schmelz",
  },
  {
    id: "9392",
    zip: "66849",
    city: "Landstuhl",
  },
  {
    id: "9393",
    zip: "66851",
    city: "Queidersbach",
  },
  {
    id: "9394",
    zip: "66862",
    city: "Kindsbach",
  },
  {
    id: "9395",
    zip: "66869",
    city: "Kusel",
  },
  {
    id: "9396",
    zip: "66871",
    city: "Pfeffelbach",
  },
  {
    id: "9398",
    zip: "66877",
    city: "Ramstein-Miesenbach",
  },
  {
    id: "9399",
    zip: "66879",
    city: "Steinwenden",
  },
  {
    id: "9400",
    zip: "66882",
    city: "Hütschenhausen",
  },
  {
    id: "9401",
    zip: "66885",
    city: "Altenglan",
  },
  {
    id: "9402",
    zip: "66887",
    city: "Rammelsbach",
  },
  {
    id: "9403",
    zip: "66892",
    city: "Bruchmühlbach-Miesau",
  },
  {
    id: "9404",
    zip: "66894",
    city: "Bechhofen",
  },
  {
    id: "9397",
    zip: "66901",
    city: "Schönenberg-Kübelberg",
  },
  {
    id: "9405",
    zip: "66903",
    city: "Altenkirchen",
  },
  {
    id: "9406",
    zip: "66904",
    city: "Brücken (Pfalz)",
  },
  {
    id: "9407",
    zip: "66907",
    city: "Glan-Münchweiler",
  },
  {
    id: "9408",
    zip: "66909",
    city: "Herschweiler-Pettersheim",
  },
  {
    id: "9409",
    zip: "66914",
    city: "Waldmohr",
  },
  {
    id: "9410",
    zip: "66916",
    city: "Breitenbach",
  },
  {
    id: "9411",
    zip: "66917",
    city: "Wallhalben",
  },
  {
    id: "9412",
    zip: "66919",
    city: "Obernheim-Kirchenarnbach",
  },
  {
    id: "9413",
    zip: "66953",
    city: "Pirmasens",
  },
  {
    id: "9414",
    zip: "66954",
    city: "Pirmasens",
  },
  {
    id: "9415",
    zip: "66955",
    city: "Pirmasens",
  },
  {
    id: "9416",
    zip: "66957",
    city: "Vinningen",
  },
  {
    id: "9417",
    zip: "66969",
    city: "Lemberg",
  },
  {
    id: "9418",
    zip: "66976",
    city: "Rodalben",
  },
  {
    id: "9419",
    zip: "66978",
    city: "Clausen",
  },
  {
    id: "9420",
    zip: "66981",
    city: "Münchweiler an der Rodalb",
  },
  {
    id: "9421",
    zip: "66987",
    city: "Thaleischweiler-Fröschen",
  },
  {
    id: "9422",
    zip: "66989",
    city: "Höheinöd",
  },
  {
    id: "9423",
    zip: "66994",
    city: "Dahn",
  },
  {
    id: "9424",
    zip: "66996",
    city: "Fischbach bei Dahn",
  },
  {
    id: "9425",
    zip: "66999",
    city: "Hinterweidenthal",
  },
  {
    id: "9426",
    zip: "67059",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9427",
    zip: "67061",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9428",
    zip: "67063",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9429",
    zip: "67065",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9430",
    zip: "67067",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9431",
    zip: "67069",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9432",
    zip: "67071",
    city: "Ludwigshafen am Rhein",
  },
  {
    id: "9433",
    zip: "67098",
    city: "Bad Dürkheim",
  },
  {
    id: "9434",
    zip: "67105",
    city: "Schifferstadt",
  },
  {
    id: "9435",
    zip: "67112",
    city: "Mutterstadt",
  },
  {
    id: "9436",
    zip: "67117",
    city: "Limburgerhof",
  },
  {
    id: "9437",
    zip: "67122",
    city: "Altrip",
  },
  {
    id: "9438",
    zip: "67125",
    city: "Dannstadt-Schauernheim",
  },
  {
    id: "9439",
    zip: "67126",
    city: "Hochdorf-Assenheim",
  },
  {
    id: "9440",
    zip: "67127",
    city: "Rödersheim-Gronau",
  },
  {
    id: "9442",
    zip: "67133",
    city: "Maxdorf",
  },
  {
    id: "9443",
    zip: "67134",
    city: "Birkenheide",
  },
  {
    id: "9444",
    zip: "67136",
    city: "Fußgönheim",
  },
  {
    id: "9445",
    zip: "67141",
    city: "Neuhofen",
  },
  {
    id: "9446",
    zip: "67146",
    city: "Deidesheim",
  },
  {
    id: "9441",
    zip: "67147",
    city: "Forst an der Weinstraße",
  },
  {
    id: "9447",
    zip: "67149",
    city: "Meckenheim",
  },
  {
    id: "9448",
    zip: "67150",
    city: "Niederkirchen bei Deidesheim",
  },
  {
    id: "9449",
    zip: "67152",
    city: "Ruppertsberg",
  },
  {
    id: "9450",
    zip: "67157",
    city: "Wachenheim an der Weinstraße",
  },
  {
    id: "9451",
    zip: "67158",
    city: "Ellerstadt",
  },
  {
    id: "9452",
    zip: "67159",
    city: "Friedelsheim",
  },
  {
    id: "9453",
    zip: "67161",
    city: "Gönnheim",
  },
  {
    id: "9454",
    zip: "67165",
    city: "Waldsee",
  },
  {
    id: "9455",
    zip: "67166",
    city: "Otterstadt",
  },
  {
    id: "9456",
    zip: "67167",
    city: "Erpolzheim",
  },
  {
    id: "9457",
    zip: "67169",
    city: "Kallstadt",
  },
  {
    id: "9458",
    zip: "67227",
    city: "Frankenthal (Pfalz)",
  },
  {
    id: "9459",
    zip: "67229",
    city: "Gerolsheim",
  },
  {
    id: "9460",
    zip: "67240",
    city: "Bobenheim-Roxheim",
  },
  {
    id: "9461",
    zip: "67245",
    city: "Lambsheim",
  },
  {
    id: "9462",
    zip: "67246",
    city: "Dirmstein",
  },
  {
    id: "9463",
    zip: "67251",
    city: "Freinsheim",
  },
  {
    id: "9464",
    zip: "67256",
    city: "Weisenheim am Sand",
  },
  {
    id: "9465",
    zip: "67258",
    city: "Heßheim",
  },
  {
    id: "9467",
    zip: "67259",
    city: "Beindersheim",
  },
  {
    id: "9468",
    zip: "67269",
    city: "Grünstadt",
  },
  {
    id: "9469",
    zip: "67271",
    city: "Kindenheim",
  },
  {
    id: "9470",
    zip: "67273",
    city: "Weisenheim am Berg",
  },
  {
    id: "9471",
    zip: "67278",
    city: "Bockenheim an der Weinstraße",
  },
  {
    id: "9472",
    zip: "67280",
    city: "Ebertsheim",
  },
  {
    id: "9473",
    zip: "67281",
    city: "Kirchheim an der Weinstraße",
  },
  {
    id: "9474",
    zip: "67283",
    city: "Obrigheim (Pfalz)",
  },
  {
    id: "9475",
    zip: "67292",
    city: "Orbis",
  },
  {
    id: "9476",
    zip: "67294",
    city: "Kirchheimbolanden",
  },
  {
    id: "9466",
    zip: "67295",
    city: "Bolanden",
  },
  {
    id: "9477",
    zip: "67297",
    city: "Marnheim",
  },
  {
    id: "9478",
    zip: "67304",
    city: "Eisenberg (Pfalz)",
  },
  {
    id: "9479",
    zip: "67305",
    city: "Ramsen",
  },
  {
    id: "9480",
    zip: "67307",
    city: "Göllheim",
  },
  {
    id: "9481",
    zip: "67308",
    city: "Albisheim (Pfrimm)",
  },
  {
    id: "9482",
    zip: "67310",
    city: "Hettenleidelheim",
  },
  {
    id: "9483",
    zip: "67311",
    city: "Tiefenthal",
  },
  {
    id: "9484",
    zip: "67316",
    city: "Carlsberg",
  },
  {
    id: "9485",
    zip: "67317",
    city: "Altleiningen",
  },
  {
    id: "9486",
    zip: "67319",
    city: "Wattenheim",
  },
  {
    id: "9487",
    zip: "67346",
    city: "Speyer",
  },
  {
    id: "9488",
    zip: "67354",
    city: "Römerberg",
  },
  {
    id: "9489",
    zip: "67360",
    city: "Lingenfeld",
  },
  {
    id: "9490",
    zip: "67361",
    city: "Freisbach",
  },
  {
    id: "9491",
    zip: "67363",
    city: "Lustadt",
  },
  {
    id: "9492",
    zip: "67365",
    city: "Schwegenheim",
  },
  {
    id: "9493",
    zip: "67366",
    city: "Weingarten (Pfalz)",
  },
  {
    id: "9494",
    zip: "67368",
    city: "Westheim (Pfalz)",
  },
  {
    id: "9496",
    zip: "67373",
    city: "Dudenhofen",
  },
  {
    id: "9497",
    zip: "67374",
    city: "Hanhofen",
  },
  {
    id: "9498",
    zip: "67376",
    city: "Harthausen",
  },
  {
    id: "9499",
    zip: "67377",
    city: "Gommersheim",
  },
  {
    id: "9500",
    zip: "67378",
    city: "Zeiskam",
  },
  {
    id: "9501",
    zip: "67433",
    city: "Neustadt an der Weinstraße",
  },
  {
    id: "9502",
    zip: "67434",
    city: "Neustadt an der Weinstraße",
  },
  {
    id: "9503",
    zip: "67435",
    city: "Neustadt an der Weinstraße",
  },
  {
    id: "9504",
    zip: "67454",
    city: "Haßloch",
  },
  {
    id: "9505",
    zip: "67459",
    city: "Böhl-Iggelheim",
  },
  {
    id: "9506",
    zip: "67466",
    city: "Lambrecht (Pfalz)",
  },
  {
    id: "9507",
    zip: "67468",
    city: "Neidenfels",
  },
  {
    id: "9508",
    zip: "67471",
    city: "Elmstein",
  },
  {
    id: "9509",
    zip: "67472",
    city: "Esthal",
  },
  {
    id: "9495",
    zip: "67473",
    city: "Lindenberg",
  },
  {
    id: "9510",
    zip: "67475",
    city: "Weidenthal",
  },
  {
    id: "9511",
    zip: "67480",
    city: "Edenkoben",
  },
  {
    id: "9512",
    zip: "67482",
    city: "Venningen",
  },
  {
    id: "9513",
    zip: "67483",
    city: "Edesheim",
  },
  {
    id: "9514",
    zip: "67487",
    city: "Maikammer",
  },
  {
    id: "9515",
    zip: "67489",
    city: "Kirrweiler (Pfalz)",
  },
  {
    id: "9516",
    zip: "67547",
    city: "Worms",
  },
  {
    id: "9517",
    zip: "67549",
    city: "Worms",
  },
  {
    id: "9518",
    zip: "67550",
    city: "Worms",
  },
  {
    id: "9519",
    zip: "67551",
    city: "Worms",
  },
  {
    id: "9520",
    zip: "67574",
    city: "Osthofen",
  },
  {
    id: "9521",
    zip: "67575",
    city: "Eich",
  },
  {
    id: "9522",
    zip: "67577",
    city: "Alsheim",
  },
  {
    id: "9523",
    zip: "67578",
    city: "Gimbsheim",
  },
  {
    id: "9524",
    zip: "67580",
    city: "Hamm",
  },
  {
    id: "9525",
    zip: "67582",
    city: "Mettenheim",
  },
  {
    id: "9526",
    zip: "67583",
    city: "Guntersblum",
  },
  {
    id: "9527",
    zip: "67585",
    city: "Dorn-Dürkheim",
  },
  {
    id: "9528",
    zip: "67586",
    city: "Hillesheim",
  },
  {
    id: "9529",
    zip: "67587",
    city: "Wintersheim",
  },
  {
    id: "9530",
    zip: "67590",
    city: "Monsheim",
  },
  {
    id: "9531",
    zip: "67591",
    city: "Offstein",
  },
  {
    id: "9532",
    zip: "67592",
    city: "Flörsheim-Dalsheim",
  },
  {
    id: "9533",
    zip: "67593",
    city: "Westhofen",
  },
  {
    id: "9534",
    zip: "67595",
    city: "Bechtheim",
  },
  {
    id: "9535",
    zip: "67596",
    city: "Dittelsheim-Heßloch",
  },
  {
    id: "9536",
    zip: "67598",
    city: "Gundersheim",
  },
  {
    id: "9537",
    zip: "67599",
    city: "Gundheim",
  },
  {
    id: "9538",
    zip: "67655",
    city: "Kaiserslautern",
  },
  {
    id: "9539",
    zip: "67657",
    city: "Kaiserslautern",
  },
  {
    id: "9540",
    zip: "67659",
    city: "Kaiserslautern",
  },
  {
    id: "9541",
    zip: "67661",
    city: "Kaiserslautern",
  },
  {
    id: "9542",
    zip: "67663",
    city: "Kaiserslautern",
  },
  {
    id: "9543",
    zip: "67677",
    city: "Enkenbach-Alsenborn",
  },
  {
    id: "9544",
    zip: "67678",
    city: "Mehlingen",
  },
  {
    id: "9545",
    zip: "67680",
    city: "Neuhemsbach",
  },
  {
    id: "9546",
    zip: "67681",
    city: "Sembach",
  },
  {
    id: "9548",
    zip: "67685",
    city: "Weilerbach",
  },
  {
    id: "9549",
    zip: "67686",
    city: "Mackenbach",
  },
  {
    id: "9550",
    zip: "67688",
    city: "Rodenbach",
  },
  {
    id: "9551",
    zip: "67691",
    city: "Hochspeyer",
  },
  {
    id: "9552",
    zip: "67693",
    city: "Fischbach",
  },
  {
    id: "9553",
    zip: "67697",
    city: "Otterberg",
  },
  {
    id: "9547",
    zip: "67699",
    city: "Schneckenhausen",
  },
  {
    id: "9554",
    zip: "67700",
    city: "Niederkirchen",
  },
  {
    id: "9555",
    zip: "67701",
    city: "Schallodenbach",
  },
  {
    id: "9556",
    zip: "67705",
    city: "Trippstadt",
  },
  {
    id: "9557",
    zip: "67706",
    city: "Krickenbach",
  },
  {
    id: "9558",
    zip: "67707",
    city: "Schopp",
  },
  {
    id: "9559",
    zip: "67714",
    city: "Waldfischbach-Burgalben",
  },
  {
    id: "9560",
    zip: "67715",
    city: "Geiselberg",
  },
  {
    id: "9561",
    zip: "67716",
    city: "Heltersberg",
  },
  {
    id: "9562",
    zip: "67718",
    city: "Schmalenberg",
  },
  {
    id: "9563",
    zip: "67722",
    city: "Winnweiler",
  },
  {
    id: "9564",
    zip: "67724",
    city: "Höringen",
  },
  {
    id: "9565",
    zip: "67725",
    city: "Börrstadt",
  },
  {
    id: "9566",
    zip: "67727",
    city: "Lohnsfeld",
  },
  {
    id: "9567",
    zip: "67728",
    city: "Münchweiler an der Alsenz",
  },
  {
    id: "9568",
    zip: "67729",
    city: "Sippersfeld",
  },
  {
    id: "9569",
    zip: "67731",
    city: "Otterbach",
  },
  {
    id: "12903",
    zip: "67732",
    city: "Hirschhorn / Pfalz",
  },
  {
    id: "9570",
    zip: "67734",
    city: "Katzweiler",
  },
  {
    id: "9571",
    zip: "67735",
    city: "Mehlbach",
  },
  {
    id: "9572",
    zip: "67737",
    city: "Olsbrücken",
  },
  {
    id: "9573",
    zip: "67742",
    city: "Lauterecken",
  },
  {
    id: "9574",
    zip: "67744",
    city: "Medard",
  },
  {
    id: "9575",
    zip: "67745",
    city: "Grumbach",
  },
  {
    id: "9576",
    zip: "67746",
    city: "Langweiler",
  },
  {
    id: "9577",
    zip: "67748",
    city: "Odenbach",
  },
  {
    id: "9578",
    zip: "67749",
    city: "Offenbach-Hundheim",
  },
  {
    id: "9579",
    zip: "67752",
    city: "Wolfstein",
  },
  {
    id: "9580",
    zip: "67753",
    city: "Rothselberg",
  },
  {
    id: "9581",
    zip: "67754",
    city: "Eßweiler",
  },
  {
    id: "9582",
    zip: "67756",
    city: "Hinzweiler",
  },
  {
    id: "9583",
    zip: "67757",
    city: "Kreimbach-Kaulbach",
  },
  {
    id: "9584",
    zip: "67759",
    city: "Nußbach",
  },
  {
    id: "9585",
    zip: "67806",
    city: "Rockenhausen",
  },
  {
    id: "9586",
    zip: "67808",
    city: "Steinbach am Donnersberg",
  },
  {
    id: "9587",
    zip: "67811",
    city: "Dielkirchen",
  },
  {
    id: "9588",
    zip: "67813",
    city: "Gerbach",
  },
  {
    id: "9589",
    zip: "67814",
    city: "Dannenfels",
  },
  {
    id: "9590",
    zip: "67816",
    city: "Dreisen",
  },
  {
    id: "9591",
    zip: "67817",
    city: "Imsbach",
  },
  {
    id: "9592",
    zip: "67819",
    city: "Kriegsfeld",
  },
  {
    id: "9593",
    zip: "67821",
    city: "Alsenz",
  },
  {
    id: "9594",
    zip: "67822",
    city: "Münsterappel",
  },
  {
    id: "9595",
    zip: "67823",
    city: "Obermoschel",
  },
  {
    id: "9596",
    zip: "67824",
    city: "Feilbingert",
  },
  {
    id: "9597",
    zip: "67826",
    city: "Hallgarten",
  },
  {
    id: "9598",
    zip: "67827",
    city: "Becherbach",
  },
  {
    id: "9599",
    zip: "67829",
    city: "Callbach",
  },
  {
    id: "9600",
    zip: "68159",
    city: "Mannheim",
  },
  {
    id: "9601",
    zip: "68161",
    city: "Mannheim",
  },
  {
    id: "9602",
    zip: "68163",
    city: "Mannheim",
  },
  {
    id: "9603",
    zip: "68165",
    city: "Mannheim",
  },
  {
    id: "9604",
    zip: "68167",
    city: "Mannheim",
  },
  {
    id: "9605",
    zip: "68169",
    city: "Mannheim",
  },
  {
    id: "9606",
    zip: "68199",
    city: "Mannheim",
  },
  {
    id: "9607",
    zip: "68219",
    city: "Mannheim",
  },
  {
    id: "9608",
    zip: "68229",
    city: "Mannheim",
  },
  {
    id: "9609",
    zip: "68239",
    city: "Mannheim",
  },
  {
    id: "9610",
    zip: "68259",
    city: "Mannheim",
  },
  {
    id: "9611",
    zip: "68305",
    city: "Mannheim",
  },
  {
    id: "9612",
    zip: "68307",
    city: "Mannheim",
  },
  {
    id: "9614",
    zip: "68309",
    city: "Mannheim",
  },
  {
    id: "9615",
    zip: "68519",
    city: "Viernheim",
  },
  {
    id: "9616",
    zip: "68526",
    city: "Ladenburg",
  },
  {
    id: "9617",
    zip: "68535",
    city: "Edingen-Neckarhausen",
  },
  {
    id: "9618",
    zip: "68542",
    city: "Heddesheim",
  },
  {
    id: "9619",
    zip: "68549",
    city: "Ilvesheim",
  },
  {
    id: "9620",
    zip: "68623",
    city: "Lampertheim",
  },
  {
    id: "9621",
    zip: "68642",
    city: "Bürstadt",
  },
  {
    id: "9622",
    zip: "68647",
    city: "Biblis",
  },
  {
    id: "9623",
    zip: "68649",
    city: "Groß-Rohrheim",
  },
  {
    id: "9624",
    zip: "68723",
    city: "Schwetzingen",
  },
  {
    id: "9625",
    zip: "68753",
    city: "Waghäusel",
  },
  {
    id: "9626",
    zip: "68766",
    city: "Hockenheim",
  },
  {
    id: "9627",
    zip: "68775",
    city: "Ketsch",
  },
  {
    id: "9628",
    zip: "68782",
    city: "Brühl",
  },
  {
    id: "9629",
    zip: "68789",
    city: "Sankt Leon-Rot",
  },
  {
    id: "9630",
    zip: "68794",
    city: "Oberhausen-Rheinhausen",
  },
  {
    id: "9631",
    zip: "68799",
    city: "Reilingen",
  },
  {
    id: "9632",
    zip: "68804",
    city: "Altlußheim",
  },
  {
    id: "9613",
    zip: "68809",
    city: "Neulußheim",
  },
  {
    id: "9633",
    zip: "69115",
    city: "Heidelberg",
  },
  {
    id: "9634",
    zip: "69117",
    city: "Heidelberg",
  },
  {
    id: "9635",
    zip: "69118",
    city: "Heidelberg",
  },
  {
    id: "9636",
    zip: "69120",
    city: "Heidelberg",
  },
  {
    id: "9637",
    zip: "69121",
    city: "Heidelberg",
  },
  {
    id: "9638",
    zip: "69123",
    city: "Heidelberg",
  },
  {
    id: "9639",
    zip: "69124",
    city: "Heidelberg",
  },
  {
    id: "9640",
    zip: "69126",
    city: "Heidelberg",
  },
  {
    id: "9641",
    zip: "69151",
    city: "Neckargemünd",
  },
  {
    id: "9642",
    zip: "69168",
    city: "Wiesloch",
  },
  {
    id: "9643",
    zip: "69181",
    city: "Leimen",
  },
  {
    id: "9644",
    zip: "69190",
    city: "Walldorf",
  },
  {
    id: "9645",
    zip: "69198",
    city: "Schriesheim",
  },
  {
    id: "9646",
    zip: "69207",
    city: "Sandhausen",
  },
  {
    id: "9647",
    zip: "69214",
    city: "Eppelheim",
  },
  {
    id: "9648",
    zip: "69221",
    city: "Dossenheim",
  },
  {
    id: "9649",
    zip: "69226",
    city: "Nußloch",
  },
  {
    id: "9650",
    zip: "69231",
    city: "Rauenberg",
  },
  {
    id: "9651",
    zip: "69234",
    city: "Dielheim",
  },
  {
    id: "9652",
    zip: "69239",
    city: "Neckarsteinach",
  },
  {
    id: "9653",
    zip: "69242",
    city: "Mühlhausen",
  },
  {
    id: "9654",
    zip: "69245",
    city: "Bammental",
  },
  {
    id: "9655",
    zip: "69250",
    city: "Schönau",
  },
  {
    id: "9656",
    zip: "69251",
    city: "Gaiberg",
  },
  {
    id: "9657",
    zip: "69253",
    city: "Heiligkreuzsteinach",
  },
  {
    id: "9658",
    zip: "69254",
    city: "Malsch",
  },
  {
    id: "9659",
    zip: "69256",
    city: "Mauer",
  },
  {
    id: "9660",
    zip: "69257",
    city: "Wiesenbach",
  },
  {
    id: "9661",
    zip: "69259",
    city: "Wilhelmsfeld",
  },
  {
    id: "9662",
    zip: "69412",
    city: "Eberbach",
  },
  {
    id: "9663",
    zip: "69427",
    city: "Mudau",
  },
  {
    id: "9664",
    zip: "69429",
    city: "Waldbrunn",
  },
  {
    id: "9665",
    zip: "69434",
    city: "Eberbach",
  },
  {
    id: "9666",
    zip: "69436",
    city: "Schönbrunn",
  },
  {
    id: "9667",
    zip: "69437",
    city: "Neckargerach",
  },
  {
    id: "9668",
    zip: "69439",
    city: "Zwingenberg",
  },
  {
    id: "9669",
    zip: "69469",
    city: "Weinheim",
  },
  {
    id: "9670",
    zip: "69483",
    city: "Wald-Michelbach",
  },
  {
    id: "9671",
    zip: "69488",
    city: "Birkenau",
  },
  {
    id: "9672",
    zip: "69493",
    city: "Hirschberg an der Bergstraße",
  },
  {
    id: "9673",
    zip: "69502",
    city: "Hemsbach",
  },
  {
    id: "9674",
    zip: "69509",
    city: "Mörlenbach",
  },
  {
    id: "9675",
    zip: "69514",
    city: "Laudenbach",
  },
  {
    id: "9676",
    zip: "69517",
    city: "Gorxheimertal",
  },
  {
    id: "9677",
    zip: "69518",
    city: "Abtsteinach",
  },
  {
    id: "9678",
    zip: "70173",
    city: "Stuttgart",
  },
  {
    id: "9679",
    zip: "70174",
    city: "Stuttgart",
  },
  {
    id: "9680",
    zip: "70176",
    city: "Stuttgart",
  },
  {
    id: "9681",
    zip: "70178",
    city: "Stuttgart",
  },
  {
    id: "9682",
    zip: "70180",
    city: "Stuttgart",
  },
  {
    id: "9683",
    zip: "70182",
    city: "Stuttgart",
  },
  {
    id: "9684",
    zip: "70184",
    city: "Stuttgart",
  },
  {
    id: "9687",
    zip: "70186",
    city: "Stuttgart",
  },
  {
    id: "9688",
    zip: "70188",
    city: "Stuttgart",
  },
  {
    id: "9689",
    zip: "70190",
    city: "Stuttgart",
  },
  {
    id: "9690",
    zip: "70191",
    city: "Stuttgart",
  },
  {
    id: "9691",
    zip: "70192",
    city: "Stuttgart",
  },
  {
    id: "9692",
    zip: "70193",
    city: "Stuttgart",
  },
  {
    id: "9693",
    zip: "70195",
    city: "Stuttgart",
  },
  {
    id: "9694",
    zip: "70197",
    city: "Stuttgart",
  },
  {
    id: "9695",
    zip: "70199",
    city: "Stuttgart",
  },
  {
    id: "9696",
    zip: "70327",
    city: "Stuttgart",
  },
  {
    id: "9697",
    zip: "70329",
    city: "Stuttgart",
  },
  {
    id: "9698",
    zip: "70372",
    city: "Stuttgart",
  },
  {
    id: "9699",
    zip: "70374",
    city: "Stuttgart",
  },
  {
    id: "9701",
    zip: "70376",
    city: "Stuttgart",
  },
  {
    id: "9702",
    zip: "70378",
    city: "Stuttgart",
  },
  {
    id: "9703",
    zip: "70435",
    city: "Stuttgart",
  },
  {
    id: "9704",
    zip: "70437",
    city: "Stuttgart",
  },
  {
    id: "9700",
    zip: "70439",
    city: "Stuttgart",
  },
  {
    id: "9705",
    zip: "70469",
    city: "Stuttgart",
  },
  {
    id: "9706",
    zip: "70499",
    city: "Stuttgart",
  },
  {
    id: "9707",
    zip: "70563",
    city: "Stuttgart",
  },
  {
    id: "9708",
    zip: "70565",
    city: "Stuttgart",
  },
  {
    id: "9709",
    zip: "70567",
    city: "Stuttgart",
  },
  {
    id: "9710",
    zip: "70569",
    city: "Stuttgart",
  },
  {
    id: "9711",
    zip: "70597",
    city: "Stuttgart",
  },
  {
    id: "9712",
    zip: "70599",
    city: "Stuttgart",
  },
  {
    id: "9713",
    zip: "70619",
    city: "Stuttgart",
  },
  {
    id: "9714",
    zip: "70629",
    city: "Stuttgart",
  },
  {
    id: "9715",
    zip: "70734",
    city: "Fellbach",
  },
  {
    id: "9716",
    zip: "70736",
    city: "Fellbach",
  },
  {
    id: "9717",
    zip: "70771",
    city: "Leinfelden-Echterdingen",
  },
  {
    id: "9718",
    zip: "70794",
    city: "Filderstadt",
  },
  {
    id: "9719",
    zip: "70806",
    city: "Kornwestheim",
  },
  {
    id: "9720",
    zip: "70825",
    city: "Korntal-Münchingen",
  },
  {
    id: "9721",
    zip: "70839",
    city: "Gerlingen",
  },
  {
    id: "9722",
    zip: "71032",
    city: "Böblingen",
  },
  {
    id: "9723",
    zip: "71034",
    city: "Böblingen",
  },
  {
    id: "9724",
    zip: "71063",
    city: "Sindelfingen",
  },
  {
    id: "9725",
    zip: "71065",
    city: "Sindelfingen",
  },
  {
    id: "9726",
    zip: "71067",
    city: "Sindelfingen",
  },
  {
    id: "9727",
    zip: "71069",
    city: "Sindelfingen",
  },
  {
    id: "9728",
    zip: "71083",
    city: "Herrenberg",
  },
  {
    id: "9729",
    zip: "71088",
    city: "Holzgerlingen",
  },
  {
    id: "9730",
    zip: "71093",
    city: "Weil im Schönbuch",
  },
  {
    id: "9731",
    zip: "71101",
    city: "Schönaich",
  },
  {
    id: "9732",
    zip: "71106",
    city: "Magstadt",
  },
  {
    id: "9733",
    zip: "71111",
    city: "Waldenbuch",
  },
  {
    id: "9734",
    zip: "71116",
    city: "Gärtringen",
  },
  {
    id: "9735",
    zip: "71120",
    city: "Grafenau",
  },
  {
    id: "9736",
    zip: "71126",
    city: "Gäufelden",
  },
  {
    id: "9737",
    zip: "71131",
    city: "Jettingen",
  },
  {
    id: "9738",
    zip: "71134",
    city: "Aidlingen",
  },
  {
    id: "9739",
    zip: "71139",
    city: "Ehningen",
  },
  {
    id: "9740",
    zip: "71144",
    city: "Steinenbronn",
  },
  {
    id: "9742",
    zip: "71149",
    city: "Bondorf",
  },
  {
    id: "9743",
    zip: "71154",
    city: "Nufringen",
  },
  {
    id: "9744",
    zip: "71155",
    city: "Altdorf",
  },
  {
    id: "9745",
    zip: "71157",
    city: "Hildrizhausen",
  },
  {
    id: "9746",
    zip: "71159",
    city: "Mötzingen",
  },
  {
    id: "9747",
    zip: "71229",
    city: "Leonberg",
  },
  {
    id: "9748",
    zip: "71254",
    city: "Ditzingen",
  },
  {
    id: "9749",
    zip: "71263",
    city: "Weil der Stadt",
  },
  {
    id: "9750",
    zip: "71272",
    city: "Renningen",
  },
  {
    id: "9741",
    zip: "71277",
    city: "Rutesheim",
  },
  {
    id: "9751",
    zip: "71282",
    city: "Hemmingen",
  },
  {
    id: "9752",
    zip: "71287",
    city: "Weissach",
  },
  {
    id: "9753",
    zip: "71292",
    city: "Friolzheim",
  },
  {
    id: "9754",
    zip: "71296",
    city: "Heimsheim",
  },
  {
    id: "9755",
    zip: "71297",
    city: "Mönsheim",
  },
  {
    id: "9756",
    zip: "71299",
    city: "Wimsheim",
  },
  {
    id: "9757",
    zip: "71332",
    city: "Waiblingen",
  },
  {
    id: "9758",
    zip: "71334",
    city: "Waiblingen",
  },
  {
    id: "9759",
    zip: "71336",
    city: "Waiblingen",
  },
  {
    id: "9760",
    zip: "71364",
    city: "Winnenden",
  },
  {
    id: "9761",
    zip: "71384",
    city: "Weinstadt",
  },
  {
    id: "9762",
    zip: "71394",
    city: "Kernen im Remstal",
  },
  {
    id: "9763",
    zip: "71397",
    city: "Leutenbach",
  },
  {
    id: "9764",
    zip: "71404",
    city: "Korb",
  },
  {
    id: "9765",
    zip: "71409",
    city: "Schwaikheim",
  },
  {
    id: "9766",
    zip: "71522",
    city: "Backnang",
  },
  {
    id: "9767",
    zip: "71540",
    city: "Murrhardt",
  },
  {
    id: "9768",
    zip: "71543",
    city: "Wüstenrot",
  },
  {
    id: "9769",
    zip: "71546",
    city: "Aspach",
  },
  {
    id: "9770",
    zip: "71549",
    city: "Auenwald",
  },
  {
    id: "9771",
    zip: "71554",
    city: "Weissach im Tal",
  },
  {
    id: "9772",
    zip: "71560",
    city: "Sulzbach an der Murr",
  },
  {
    id: "9773",
    zip: "71563",
    city: "Affalterbach",
  },
  {
    id: "9685",
    zip: "71566",
    city: "Althütte",
  },
  {
    id: "9686",
    zip: "71570",
    city: "Oppenweiler",
  },
  {
    id: "9774",
    zip: "71573",
    city: "Allmersbach im Tal",
  },
  {
    id: "9775",
    zip: "71576",
    city: "Burgstetten",
  },
  {
    id: "9776",
    zip: "71577",
    city: "Großerlach",
  },
  {
    id: "9777",
    zip: "71579",
    city: "Spiegelberg",
  },
  {
    id: "9778",
    zip: "71634",
    city: "Ludwigsburg",
  },
  {
    id: "9779",
    zip: "71636",
    city: "Ludwigsburg",
  },
  {
    id: "9780",
    zip: "71638",
    city: "Ludwigsburg",
  },
  {
    id: "9781",
    zip: "71640",
    city: "Ludwigsburg",
  },
  {
    id: "9783",
    zip: "71642",
    city: "Ludwigsburg",
  },
  {
    id: "9784",
    zip: "71665",
    city: "Vaihingen an der Enz",
  },
  {
    id: "9785",
    zip: "71672",
    city: "Marbach am Neckar",
  },
  {
    id: "9786",
    zip: "71679",
    city: "Asperg",
  },
  {
    id: "9787",
    zip: "71686",
    city: "Remseck am Neckar",
  },
  {
    id: "9788",
    zip: "71691",
    city: "Freiberg am Neckar",
  },
  {
    id: "9789",
    zip: "71696",
    city: "Möglingen",
  },
  {
    id: "9790",
    zip: "71701",
    city: "Schwieberdingen",
  },
  {
    id: "9791",
    zip: "71706",
    city: "Markgröningen",
  },
  {
    id: "9792",
    zip: "71711",
    city: "Steinheim an der Murr",
  },
  {
    id: "9793",
    zip: "71717",
    city: "Beilstein",
  },
  {
    id: "9794",
    zip: "71720",
    city: "Oberstenfeld",
  },
  {
    id: "9795",
    zip: "71723",
    city: "Großbottwar",
  },
  {
    id: "9782",
    zip: "71726",
    city: "Benningen am Neckar",
  },
  {
    id: "9796",
    zip: "71729",
    city: "Erdmannhausen",
  },
  {
    id: "9797",
    zip: "71732",
    city: "Tamm",
  },
  {
    id: "9798",
    zip: "71735",
    city: "Eberdingen",
  },
  {
    id: "9799",
    zip: "71737",
    city: "Kirchberg an der Murr",
  },
  {
    id: "9800",
    zip: "71739",
    city: "Oberriexingen",
  },
  {
    id: "9801",
    zip: "72070",
    city: "Tübingen",
  },
  {
    id: "9802",
    zip: "72072",
    city: "Tübingen",
  },
  {
    id: "9803",
    zip: "72074",
    city: "Tübingen",
  },
  {
    id: "9804",
    zip: "72076",
    city: "Tübingen",
  },
  {
    id: "9805",
    zip: "72108",
    city: "Rottenburg am Neckar",
  },
  {
    id: "9806",
    zip: "72116",
    city: "Mössingen",
  },
  {
    id: "9807",
    zip: "72119",
    city: "Ammerbuch",
  },
  {
    id: "9808",
    zip: "72124",
    city: "Pliezhausen",
  },
  {
    id: "9809",
    zip: "72127",
    city: "Kusterdingen",
  },
  {
    id: "9810",
    zip: "72131",
    city: "Ofterdingen",
  },
  {
    id: "9811",
    zip: "72135",
    city: "Dettenhausen",
  },
  {
    id: "9812",
    zip: "72138",
    city: "Kirchentellinsfurt",
  },
  {
    id: "9813",
    zip: "72141",
    city: "Walddorfhäslach",
  },
  {
    id: "9814",
    zip: "72144",
    city: "Dußlingen",
  },
  {
    id: "9815",
    zip: "72145",
    city: "Hirrlingen",
  },
  {
    id: "9816",
    zip: "72147",
    city: "Nehren",
  },
  {
    id: "9817",
    zip: "72149",
    city: "Neustetten",
  },
  {
    id: "9818",
    zip: "72160",
    city: "Horb am Neckar",
  },
  {
    id: "9819",
    zip: "72172",
    city: "Sulz am Neckar",
  },
  {
    id: "9820",
    zip: "72175",
    city: "Dornhan",
  },
  {
    id: "9821",
    zip: "72178",
    city: "Waldachtal",
  },
  {
    id: "9822",
    zip: "72181",
    city: "Starzach",
  },
  {
    id: "9823",
    zip: "72184",
    city: "Eutingen im Gäu",
  },
  {
    id: "9824",
    zip: "72186",
    city: "Empfingen",
  },
  {
    id: "9825",
    zip: "72189",
    city: "Vöhringen",
  },
  {
    id: "9826",
    zip: "72202",
    city: "Nagold",
  },
  {
    id: "9827",
    zip: "72213",
    city: "Altensteig",
  },
  {
    id: "9828",
    zip: "72218",
    city: "Wildberg",
  },
  {
    id: "9829",
    zip: "72221",
    city: "Haiterbach",
  },
  {
    id: "9830",
    zip: "72224",
    city: "Ebhausen",
  },
  {
    id: "9831",
    zip: "72226",
    city: "Simmersfeld",
  },
  {
    id: "9832",
    zip: "72227",
    city: "Egenhausen",
  },
  {
    id: "9833",
    zip: "72229",
    city: "Rohrdorf",
  },
  {
    id: "9834",
    zip: "72250",
    city: "Freudenstadt",
  },
  {
    id: "9835",
    zip: "72270",
    city: "Baiersbronn",
  },
  {
    id: "9836",
    zip: "72275",
    city: "Alpirsbach",
  },
  {
    id: "9837",
    zip: "72280",
    city: "Dornstetten",
  },
  {
    id: "9838",
    zip: "72285",
    city: "Pfalzgrafenweiler",
  },
  {
    id: "9839",
    zip: "72290",
    city: "Loßburg",
  },
  {
    id: "9840",
    zip: "72291",
    city: "Betzweiler-Wälde",
  },
  {
    id: "9841",
    zip: "72293",
    city: "Glatten",
  },
  {
    id: "9842",
    zip: "72294",
    city: "Grömbach",
  },
  {
    id: "9843",
    zip: "72296",
    city: "Schopfloch",
  },
  {
    id: "9844",
    zip: "72297",
    city: "Seewald",
  },
  {
    id: "9845",
    zip: "72299",
    city: "Wörnersberg",
  },
  {
    id: "9846",
    zip: "72336",
    city: "Balingen",
  },
  {
    id: "9847",
    zip: "72348",
    city: "Rosenfeld",
  },
  {
    id: "9848",
    zip: "72351",
    city: "Geislingen",
  },
  {
    id: "9849",
    zip: "72355",
    city: "Schömberg",
  },
  {
    id: "9850",
    zip: "72356",
    city: "Dautmergen",
  },
  {
    id: "9851",
    zip: "72358",
    city: "Dormettingen",
  },
  {
    id: "9852",
    zip: "72359",
    city: "Dotternhausen",
  },
  {
    id: "9853",
    zip: "72361",
    city: "Hausen am Tann",
  },
  {
    id: "9854",
    zip: "72362",
    city: "Nusplingen",
  },
  {
    id: "9855",
    zip: "72364",
    city: "Obernheim",
  },
  {
    id: "9856",
    zip: "72365",
    city: "Ratshausen",
  },
  {
    id: "9857",
    zip: "72367",
    city: "Weilen unter den Rinnen",
  },
  {
    id: "9858",
    zip: "72369",
    city: "Zimmern unter der Burg",
  },
  {
    id: "9859",
    zip: "72379",
    city: "Hechingen",
  },
  {
    id: "9860",
    zip: "72393",
    city: "Burladingen",
  },
  {
    id: "9861",
    zip: "72401",
    city: "Haigerloch",
  },
  {
    id: "9862",
    zip: "72406",
    city: "Bisingen",
  },
  {
    id: "9863",
    zip: "72411",
    city: "Bodelshausen",
  },
  {
    id: "9864",
    zip: "72414",
    city: "Rangendingen",
  },
  {
    id: "9865",
    zip: "72415",
    city: "Grosselfingen",
  },
  {
    id: "9866",
    zip: "72417",
    city: "Jungingen",
  },
  {
    id: "9867",
    zip: "72419",
    city: "Neufra",
  },
  {
    id: "9868",
    zip: "72458",
    city: "Albstadt",
  },
  {
    id: "9869",
    zip: "72459",
    city: "Albstadt",
  },
  {
    id: "9870",
    zip: "72461",
    city: "Albstadt",
  },
  {
    id: "9871",
    zip: "72469",
    city: "Meßstetten",
  },
  {
    id: "9872",
    zip: "72474",
    city: "Winterlingen",
  },
  {
    id: "9873",
    zip: "72475",
    city: "Bitz",
  },
  {
    id: "9874",
    zip: "72477",
    city: "Schwenningen",
  },
  {
    id: "9875",
    zip: "72479",
    city: "Straßberg",
  },
  {
    id: "9876",
    zip: "72488",
    city: "Sigmaringen",
  },
  {
    id: "9877",
    zip: "72501",
    city: "Gammertingen",
  },
  {
    id: "9878",
    zip: "72505",
    city: "Krauchenwies",
  },
  {
    id: "9879",
    zip: "72510",
    city: "Stetten am kalten Markt",
  },
  {
    id: "9880",
    zip: "72511",
    city: "Bingen",
  },
  {
    id: "9881",
    zip: "72513",
    city: "Hettingen",
  },
  {
    id: "9882",
    zip: "72514",
    city: "Inzigkofen",
  },
  {
    id: "9883",
    zip: "72516",
    city: "Scheer",
  },
  {
    id: "9884",
    zip: "72517",
    city: "Sigmaringendorf",
  },
  {
    id: "9885",
    zip: "72519",
    city: "Veringenstadt",
  },
  {
    id: "9886",
    zip: "72525",
    city: "Münsingen",
  },
  {
    id: "9887",
    zip: "72531",
    city: "Hohenstein",
  },
  {
    id: "9888",
    zip: "72532",
    city: "Gomadingen",
  },
  {
    id: "9889",
    zip: "72534",
    city: "Hayingen",
  },
  {
    id: "9890",
    zip: "72535",
    city: "Heroldstatt",
  },
  {
    id: "9891",
    zip: "72537",
    city: "Mehrstetten",
  },
  {
    id: "9892",
    zip: "72539",
    city: "Pfronstetten",
  },
  {
    id: "9893",
    zip: "72555",
    city: "Metzingen",
  },
  {
    id: "9894",
    zip: "72574",
    city: "Bad Urach",
  },
  {
    id: "9895",
    zip: "72581",
    city: "Dettingen an der Erms",
  },
  {
    id: "9896",
    zip: "72582",
    city: "Grabenstetten",
  },
  {
    id: "9897",
    zip: "72584",
    city: "Hülben",
  },
  {
    id: "9898",
    zip: "72585",
    city: "Riederich",
  },
  {
    id: "9899",
    zip: "72587",
    city: "Römerstein",
  },
  {
    id: "9900",
    zip: "72589",
    city: "Westerheim",
  },
  {
    id: "9901",
    zip: "72622",
    city: "Nürtingen",
  },
  {
    id: "9902",
    zip: "72631",
    city: "Aichtal",
  },
  {
    id: "9903",
    zip: "72636",
    city: "Frickenhausen",
  },
  {
    id: "9904",
    zip: "72639",
    city: "Neuffen",
  },
  {
    id: "9905",
    zip: "72644",
    city: "Oberboihingen",
  },
  {
    id: "9906",
    zip: "72649",
    city: "Wolfschlugen",
  },
  {
    id: "9907",
    zip: "72654",
    city: "Neckartenzlingen",
  },
  {
    id: "9908",
    zip: "72655",
    city: "Altdorf",
  },
  {
    id: "9909",
    zip: "72657",
    city: "Altenriet",
  },
  {
    id: "9910",
    zip: "72658",
    city: "Bempflingen",
  },
  {
    id: "9911",
    zip: "72660",
    city: "Beuren",
  },
  {
    id: "9912",
    zip: "72661",
    city: "Grafenberg",
  },
  {
    id: "9913",
    zip: "72663",
    city: "Großbettlingen",
  },
  {
    id: "9914",
    zip: "72664",
    city: "Kohlberg",
  },
  {
    id: "9915",
    zip: "72666",
    city: "Neckartailfingen",
  },
  {
    id: "9916",
    zip: "72667",
    city: "Schlaitdorf",
  },
  {
    id: "9917",
    zip: "72669",
    city: "Unterensingen",
  },
  {
    id: "9918",
    zip: "72760",
    city: "Reutlingen",
  },
  {
    id: "9919",
    zip: "72762",
    city: "Reutlingen",
  },
  {
    id: "9920",
    zip: "72764",
    city: "Reutlingen",
  },
  {
    id: "9921",
    zip: "72766",
    city: "Reutlingen",
  },
  {
    id: "9922",
    zip: "72768",
    city: "Reutlingen",
  },
  {
    id: "9923",
    zip: "72770",
    city: "Reutlingen",
  },
  {
    id: "9924",
    zip: "72793",
    city: "Pfullingen",
  },
  {
    id: "9925",
    zip: "72800",
    city: "Eningen unter Achalm",
  },
  {
    id: "9926",
    zip: "72805",
    city: "Lichtenstein",
  },
  {
    id: "9927",
    zip: "72810",
    city: "Gomaringen",
  },
  {
    id: "13182",
    zip: "72813",
    city: "Sankt Johann",
  },
  {
    id: "9928",
    zip: "72818",
    city: "Trochtelfingen",
  },
  {
    id: "9929",
    zip: "72820",
    city: "Sonnenbühl",
  },
  {
    id: "9930",
    zip: "72827",
    city: "Wannweil",
  },
  {
    id: "9931",
    zip: "72829",
    city: "Engstingen",
  },
  {
    id: "9932",
    zip: "73033",
    city: "Göppingen",
  },
  {
    id: "9933",
    zip: "73035",
    city: "Göppingen",
  },
  {
    id: "9934",
    zip: "73037",
    city: "Göppingen",
  },
  {
    id: "12904",
    zip: "73054",
    city: "Eislingen / Fils",
  },
  {
    id: "9935",
    zip: "73061",
    city: "Ebersbach an der Fils",
  },
  {
    id: "9936",
    zip: "73066",
    city: "Uhingen",
  },
  {
    id: "9937",
    zip: "73072",
    city: "Donzdorf",
  },
  {
    id: "9938",
    zip: "73079",
    city: "Süßen",
  },
  {
    id: "9940",
    zip: "73084",
    city: "Salach",
  },
  {
    id: "9941",
    zip: "73087",
    city: "Boll",
  },
  {
    id: "9942",
    zip: "73092",
    city: "Heiningen",
  },
  {
    id: "9943",
    zip: "73095",
    city: "Albershausen",
  },
  {
    id: "9944",
    zip: "73098",
    city: "Rechberghausen",
  },
  {
    id: "9945",
    zip: "73099",
    city: "Adelberg",
  },
  {
    id: "9946",
    zip: "73101",
    city: "Aichelberg",
  },
  {
    id: "9947",
    zip: "73102",
    city: "Birenbach",
  },
  {
    id: "9948",
    zip: "73104",
    city: "Börtlingen",
  },
  {
    id: "9949",
    zip: "73105",
    city: "Dürnau",
  },
  {
    id: "9939",
    zip: "73107",
    city: "Eschenbach",
  },
  {
    id: "9950",
    zip: "73108",
    city: "Gammelshausen",
  },
  {
    id: "9951",
    zip: "73110",
    city: "Hattenhofen",
  },
  {
    id: "9952",
    zip: "73111",
    city: "Lauterstein",
  },
  {
    id: "9953",
    zip: "73113",
    city: "Ottenbach",
  },
  {
    id: "9954",
    zip: "73114",
    city: "Schlat",
  },
  {
    id: "9955",
    zip: "73116",
    city: "Wäschenbeuren",
  },
  {
    id: "9956",
    zip: "73117",
    city: "Wangen",
  },
  {
    id: "9957",
    zip: "73119",
    city: "Zell unter Aichelberg",
  },
  {
    id: "9958",
    zip: "73207",
    city: "Plochingen",
  },
  {
    id: "9959",
    zip: "73230",
    city: "Kirchheim unter Teck",
  },
  {
    id: "9960",
    zip: "73235",
    city: "Weilheim an der Teck",
  },
  {
    id: "9961",
    zip: "73240",
    city: "Wendlingen am Neckar",
  },
  {
    id: "9962",
    zip: "73249",
    city: "Wernau (Neckar)",
  },
  {
    id: "9963",
    zip: "73252",
    city: "Lenningen",
  },
  {
    id: "9964",
    zip: "73257",
    city: "Köngen",
  },
  {
    id: "9965",
    zip: "73262",
    city: "Reichenbach an der Fils",
  },
  {
    id: "9966",
    zip: "73265",
    city: "Dettingen unter Teck",
  },
  {
    id: "9967",
    zip: "73266",
    city: "Bissingen an der Teck",
  },
  {
    id: "9968",
    zip: "73268",
    city: "Erkenbrechtsweiler",
  },
  {
    id: "9969",
    zip: "73269",
    city: "Hochdorf",
  },
  {
    id: "9970",
    zip: "73271",
    city: "Holzmaden",
  },
  {
    id: "9971",
    zip: "73272",
    city: "Neidlingen",
  },
  {
    id: "9972",
    zip: "73274",
    city: "Notzingen",
  },
  {
    id: "9973",
    zip: "73275",
    city: "Ohmden",
  },
  {
    id: "9974",
    zip: "73277",
    city: "Owen",
  },
  {
    id: "9975",
    zip: "73278",
    city: "Schlierbach",
  },
  {
    id: "9976",
    zip: "73312",
    city: "Geislingen an der Steige",
  },
  {
    id: "9977",
    zip: "73326",
    city: "Deggingen",
  },
  {
    id: "9978",
    zip: "73329",
    city: "Kuchen",
  },
  {
    id: "9979",
    zip: "73333",
    city: "Gingen an der Fils",
  },
  {
    id: "9980",
    zip: "73337",
    city: "Bad Überkingen",
  },
  {
    id: "9981",
    zip: "73340",
    city: "Amstetten",
  },
  {
    id: "9982",
    zip: "73342",
    city: "Bad Ditzenbach",
  },
  {
    id: "9983",
    zip: "73344",
    city: "Gruibingen",
  },
  {
    id: "9984",
    zip: "73345",
    city: "Hohenstadt",
  },
  {
    id: "9985",
    zip: "73347",
    city: "Mühlhausen im Täle",
  },
  {
    id: "9986",
    zip: "73349",
    city: "Wiesensteig",
  },
  {
    id: "9987",
    zip: "73430",
    city: "Aalen",
  },
  {
    id: "9988",
    zip: "73431",
    city: "Aalen",
  },
  {
    id: "9989",
    zip: "73432",
    city: "Aalen",
  },
  {
    id: "9990",
    zip: "73433",
    city: "Aalen",
  },
  {
    id: "9991",
    zip: "73434",
    city: "Aalen",
  },
  {
    id: "9992",
    zip: "73441",
    city: "Bopfingen",
  },
  {
    id: "9993",
    zip: "73447",
    city: "Oberkochen",
  },
  {
    id: "9994",
    zip: "73450",
    city: "Neresheim",
  },
  {
    id: "9995",
    zip: "73453",
    city: "Abtsgmünd",
  },
  {
    id: "9996",
    zip: "73457",
    city: "Essingen",
  },
  {
    id: "9997",
    zip: "73460",
    city: "Hüttlingen",
  },
  {
    id: "9998",
    zip: "73463",
    city: "Westhausen",
  },
  {
    id: "9999",
    zip: "73466",
    city: "Lauchheim",
  },
  {
    id: "10000",
    zip: "73467",
    city: "Kirchheim am Ries",
  },
  {
    id: "10001",
    zip: "73469",
    city: "Riesbürg",
  },
  {
    id: "10002",
    zip: "73479",
    city: "Ellwangen (Jagst)",
  },
  {
    id: "10003",
    zip: "73485",
    city: "Unterschneidheim",
  },
  {
    id: "10004",
    zip: "73486",
    city: "Adelmannsfelden",
  },
  {
    id: "10005",
    zip: "73488",
    city: "Ellenberg",
  },
  {
    id: "10006",
    zip: "73489",
    city: "Jagstzell",
  },
  {
    id: "10007",
    zip: "73491",
    city: "Neuler",
  },
  {
    id: "10008",
    zip: "73492",
    city: "Rainau",
  },
  {
    id: "10009",
    zip: "73494",
    city: "Rosenberg",
  },
  {
    id: "10010",
    zip: "73495",
    city: "Stödtlen",
  },
  {
    id: "10011",
    zip: "73497",
    city: "Tannhausen",
  },
  {
    id: "10012",
    zip: "73499",
    city: "Wört",
  },
  {
    id: "10013",
    zip: "73525",
    city: "Schwäbisch Gmünd",
  },
  {
    id: "10014",
    zip: "73527",
    city: "Schwäbisch Gmünd",
  },
  {
    id: "10015",
    zip: "73529",
    city: "Schwäbisch Gmünd",
  },
  {
    id: "10016",
    zip: "73540",
    city: "Heubach",
  },
  {
    id: "10017",
    zip: "73547",
    city: "Lorch",
  },
  {
    id: "10018",
    zip: "73550",
    city: "Waldstetten",
  },
  {
    id: "10019",
    zip: "73553",
    city: "Alfdorf",
  },
  {
    id: "10020",
    zip: "73557",
    city: "Mutlangen",
  },
  {
    id: "10021",
    zip: "73560",
    city: "Böbingen an der Rems",
  },
  {
    id: "10022",
    zip: "73563",
    city: "Mögglingen",
  },
  {
    id: "10023",
    zip: "73565",
    city: "Spraitbach",
  },
  {
    id: "10024",
    zip: "73566",
    city: "Bartholomä",
  },
  {
    id: "10025",
    zip: "73568",
    city: "Durlangen",
  },
  {
    id: "10026",
    zip: "73569",
    city: "Eschach",
  },
  {
    id: "10027",
    zip: "73571",
    city: "Göggingen",
  },
  {
    id: "10028",
    zip: "73572",
    city: "Heuchlingen",
  },
  {
    id: "10029",
    zip: "73574",
    city: "Iggingen",
  },
  {
    id: "10030",
    zip: "73575",
    city: "Leinzell",
  },
  {
    id: "10031",
    zip: "73577",
    city: "Ruppertshofen",
  },
  {
    id: "10032",
    zip: "73579",
    city: "Schechingen",
  },
  {
    id: "10033",
    zip: "73614",
    city: "Schorndorf",
  },
  {
    id: "10034",
    zip: "73630",
    city: "Remshalden",
  },
  {
    id: "10035",
    zip: "73635",
    city: "Rudersberg",
  },
  {
    id: "10036",
    zip: "73642",
    city: "Welzheim",
  },
  {
    id: "10037",
    zip: "73650",
    city: "Winterbach",
  },
  {
    id: "10038",
    zip: "73655",
    city: "Plüderhausen",
  },
  {
    id: "10039",
    zip: "73660",
    city: "Urbach",
  },
  {
    id: "10040",
    zip: "73663",
    city: "Berglen",
  },
  {
    id: "10041",
    zip: "73666",
    city: "Baltmannsweiler",
  },
  {
    id: "10042",
    zip: "73667",
    city: "Kaisersbach",
  },
  {
    id: "10043",
    zip: "73669",
    city: "Lichtenwald",
  },
  {
    id: "10044",
    zip: "73728",
    city: "Esslingen am Neckar",
  },
  {
    id: "10045",
    zip: "73730",
    city: "Esslingen am Neckar",
  },
  {
    id: "10046",
    zip: "73732",
    city: "Esslingen am Neckar",
  },
  {
    id: "10047",
    zip: "73733",
    city: "Esslingen am Neckar",
  },
  {
    id: "10048",
    zip: "73734",
    city: "Esslingen am Neckar",
  },
  {
    id: "10049",
    zip: "73760",
    city: "Ostfildern",
  },
  {
    id: "10050",
    zip: "73765",
    city: "Neuhausen auf den Fildern",
  },
  {
    id: "10051",
    zip: "73770",
    city: "Denkendorf",
  },
  {
    id: "10052",
    zip: "73773",
    city: "Aichwald",
  },
  {
    id: "10053",
    zip: "73776",
    city: "Altbach",
  },
  {
    id: "10055",
    zip: "73779",
    city: "Deizisau",
  },
  {
    id: "10056",
    zip: "74072",
    city: "Heilbronn",
  },
  {
    id: "10057",
    zip: "74074",
    city: "Heilbronn",
  },
  {
    id: "10058",
    zip: "74076",
    city: "Heilbronn",
  },
  {
    id: "10059",
    zip: "74078",
    city: "Heilbronn",
  },
  {
    id: "10060",
    zip: "74080",
    city: "Heilbronn",
  },
  {
    id: "10061",
    zip: "74081",
    city: "Heilbronn",
  },
  {
    id: "10062",
    zip: "74172",
    city: "Neckarsulm",
  },
  {
    id: "10063",
    zip: "74177",
    city: "Bad Friedrichshall",
  },
  {
    id: "10064",
    zip: "74182",
    city: "Obersulm",
  },
  {
    id: "10065",
    zip: "74189",
    city: "Weinsberg",
  },
  {
    id: "10066",
    zip: "74193",
    city: "Schwaigern",
  },
  {
    id: "10067",
    zip: "74196",
    city: "Neuenstadt am Kocher",
  },
  {
    id: "10068",
    zip: "74199",
    city: "Untergruppenbach",
  },
  {
    id: "10069",
    zip: "74206",
    city: "Bad Wimpfen",
  },
  {
    id: "10070",
    zip: "74211",
    city: "Leingarten",
  },
  {
    id: "10054",
    zip: "74214",
    city: "Schöntal",
  },
  {
    id: "10071",
    zip: "74219",
    city: "Möckmühl",
  },
  {
    id: "10072",
    zip: "74223",
    city: "Flein",
  },
  {
    id: "10073",
    zip: "74226",
    city: "Nordheim",
  },
  {
    id: "10074",
    zip: "74229",
    city: "Oedheim",
  },
  {
    id: "10075",
    zip: "74232",
    city: "Abstatt",
  },
  {
    id: "10076",
    zip: "74235",
    city: "Erlenbach",
  },
  {
    id: "10077",
    zip: "74238",
    city: "Krautheim",
  },
  {
    id: "10078",
    zip: "74239",
    city: "Hardthausen am Kocher",
  },
  {
    id: "10079",
    zip: "74243",
    city: "Langenbrettach",
  },
  {
    id: "10080",
    zip: "74245",
    city: "Löwenstein",
  },
  {
    id: "10081",
    zip: "74246",
    city: "Eberstadt",
  },
  {
    id: "10082",
    zip: "74248",
    city: "Ellhofen",
  },
  {
    id: "10083",
    zip: "74249",
    city: "Jagsthausen",
  },
  {
    id: "10084",
    zip: "74251",
    city: "Lehrensteinsfeld",
  },
  {
    id: "10085",
    zip: "74252",
    city: "Massenbachhausen",
  },
  {
    id: "10086",
    zip: "74254",
    city: "Offenau",
  },
  {
    id: "10087",
    zip: "74255",
    city: "Roigheim",
  },
  {
    id: "10088",
    zip: "74257",
    city: "Untereisesheim",
  },
  {
    id: "10089",
    zip: "74259",
    city: "Widdern",
  },
  {
    id: "10090",
    zip: "74321",
    city: "Bietigheim-Bissingen",
  },
  {
    id: "10091",
    zip: "74336",
    city: "Brackenheim",
  },
  {
    id: "10092",
    zip: "74343",
    city: "Sachsenheim",
  },
  {
    id: "10093",
    zip: "74348",
    city: "Lauffen am Neckar",
  },
  {
    id: "10094",
    zip: "74354",
    city: "Besigheim",
  },
  {
    id: "10095",
    zip: "74357",
    city: "Bönnigheim",
  },
  {
    id: "10096",
    zip: "74360",
    city: "Ilsfeld",
  },
  {
    id: "10097",
    zip: "74363",
    city: "Güglingen",
  },
  {
    id: "10098",
    zip: "74366",
    city: "Kirchheim am Neckar",
  },
  {
    id: "10100",
    zip: "74369",
    city: "Löchgau",
  },
  {
    id: "10101",
    zip: "74372",
    city: "Sersheim",
  },
  {
    id: "10102",
    zip: "74374",
    city: "Zaberfeld",
  },
  {
    id: "10103",
    zip: "74376",
    city: "Gemmrigheim",
  },
  {
    id: "10099",
    zip: "74379",
    city: "Ingersheim",
  },
  {
    id: "10104",
    zip: "74382",
    city: "Neckarwestheim",
  },
  {
    id: "10105",
    zip: "74385",
    city: "Pleidelsheim",
  },
  {
    id: "10106",
    zip: "74388",
    city: "Talheim",
  },
  {
    id: "10107",
    zip: "74389",
    city: "Cleebronn",
  },
  {
    id: "10108",
    zip: "74391",
    city: "Erligheim",
  },
  {
    id: "10109",
    zip: "74392",
    city: "Freudental",
  },
  {
    id: "10110",
    zip: "74394",
    city: "Hessigheim",
  },
  {
    id: "10111",
    zip: "74395",
    city: "Mundelsheim",
  },
  {
    id: "10112",
    zip: "74397",
    city: "Pfaffenhofen",
  },
  {
    id: "10113",
    zip: "74399",
    city: "Walheim",
  },
  {
    id: "10114",
    zip: "74405",
    city: "Gaildorf",
  },
  {
    id: "10115",
    zip: "74417",
    city: "Gschwend",
  },
  {
    id: "10116",
    zip: "74420",
    city: "Oberrot",
  },
  {
    id: "10117",
    zip: "74423",
    city: "Obersontheim",
  },
  {
    id: "10118",
    zip: "74424",
    city: "Bühlertann",
  },
  {
    id: "10119",
    zip: "74426",
    city: "Bühlerzell",
  },
  {
    id: "10120",
    zip: "74427",
    city: "Fichtenberg",
  },
  {
    id: "10121",
    zip: "74429",
    city: "Sulzbach-Laufen",
  },
  {
    id: "10122",
    zip: "74523",
    city: "Schwäbisch Hall",
  },
  {
    id: "10123",
    zip: "74532",
    city: "Ilshofen",
  },
  {
    id: "10124",
    zip: "74535",
    city: "Mainhardt",
  },
  {
    id: "10125",
    zip: "74538",
    city: "Rosengarten",
  },
  {
    id: "10126",
    zip: "74541",
    city: "Vellberg",
  },
  {
    id: "10127",
    zip: "74542",
    city: "Braunsbach",
  },
  {
    id: "10128",
    zip: "74544",
    city: "Michelbach an der Bilz",
  },
  {
    id: "10129",
    zip: "74545",
    city: "Michelfeld",
  },
  {
    id: "10130",
    zip: "74547",
    city: "Untermünkheim",
  },
  {
    id: "10131",
    zip: "74549",
    city: "Wolpertshausen",
  },
  {
    id: "10132",
    zip: "74564",
    city: "Crailsheim",
  },
  {
    id: "10133",
    zip: "74572",
    city: "Blaufelden",
  },
  {
    id: "10134",
    zip: "74575",
    city: "Schrozberg",
  },
  {
    id: "10135",
    zip: "74579",
    city: "Fichtenau",
  },
  {
    id: "10136",
    zip: "74582",
    city: "Gerabronn",
  },
  {
    id: "10137",
    zip: "74585",
    city: "Rot am See",
  },
  {
    id: "10138",
    zip: "74586",
    city: "Frankenhardt",
  },
  {
    id: "10139",
    zip: "74589",
    city: "Satteldorf",
  },
  {
    id: "10140",
    zip: "74592",
    city: "Kirchberg an der Jagst",
  },
  {
    id: "10141",
    zip: "74594",
    city: "Kreßberg",
  },
  {
    id: "10142",
    zip: "74595",
    city: "Langenburg",
  },
  {
    id: "10143",
    zip: "74597",
    city: "Stimpfach",
  },
  {
    id: "10144",
    zip: "74599",
    city: "Wallhausen",
  },
  {
    id: "10145",
    zip: "74613",
    city: "Öhringen",
  },
  {
    id: "10146",
    zip: "74626",
    city: "Bretzfeld",
  },
  {
    id: "10147",
    zip: "74629",
    city: "Pfedelbach",
  },
  {
    id: "10148",
    zip: "74632",
    city: "Neuenstein",
  },
  {
    id: "10149",
    zip: "74635",
    city: "Kupferzell",
  },
  {
    id: "10150",
    zip: "74638",
    city: "Waldenburg",
  },
  {
    id: "10151",
    zip: "74639",
    city: "Zweiflingen",
  },
  {
    id: "10152",
    zip: "74653",
    city: "Künzelsau",
  },
  {
    id: "10153",
    zip: "74670",
    city: "Forchtenberg",
  },
  {
    id: "10154",
    zip: "74673",
    city: "Mulfingen",
  },
  {
    id: "10155",
    zip: "74676",
    city: "Niedernhall",
  },
  {
    id: "10156",
    zip: "74677",
    city: "Dörzbach",
  },
  {
    id: "10157",
    zip: "74679",
    city: "Weißbach",
  },
  {
    id: "10158",
    zip: "74706",
    city: "Osterburken",
  },
  {
    id: "10159",
    zip: "74722",
    city: "Buchen (Odenwald)",
  },
  {
    id: "10160",
    zip: "74731",
    city: "Walldürn",
  },
  {
    id: "10161",
    zip: "74736",
    city: "Hardheim",
  },
  {
    id: "10162",
    zip: "74740",
    city: "Adelsheim",
  },
  {
    id: "10163",
    zip: "74743",
    city: "Seckach",
  },
  {
    id: "10164",
    zip: "74744",
    city: "Ahorn",
  },
  {
    id: "10165",
    zip: "74746",
    city: "Höpfingen",
  },
  {
    id: "10166",
    zip: "74747",
    city: "Ravenstein",
  },
  {
    id: "10167",
    zip: "74749",
    city: "Rosenberg",
  },
  {
    id: "10168",
    zip: "74821",
    city: "Mosbach",
  },
  {
    id: "10169",
    zip: "74831",
    city: "Gundelsheim",
  },
  {
    id: "10170",
    zip: "74834",
    city: "Elztal",
  },
  {
    id: "10171",
    zip: "74838",
    city: "Limbach",
  },
  {
    id: "10172",
    zip: "74842",
    city: "Billigheim",
  },
  {
    id: "10173",
    zip: "74847",
    city: "Obrigheim",
  },
  {
    id: "10174",
    zip: "74850",
    city: "Schefflenz",
  },
  {
    id: "10175",
    zip: "74855",
    city: "Haßmersheim",
  },
  {
    id: "10176",
    zip: "74858",
    city: "Aglasterhausen",
  },
  {
    id: "10177",
    zip: "74861",
    city: "Neudenau",
  },
  {
    id: "10178",
    zip: "74862",
    city: "Binau",
  },
  {
    id: "10179",
    zip: "74864",
    city: "Fahrenbach",
  },
  {
    id: "10180",
    zip: "74865",
    city: "Neckarzimmern",
  },
  {
    id: "10181",
    zip: "74867",
    city: "Neunkirchen",
  },
  {
    id: "10182",
    zip: "74869",
    city: "Schwarzach",
  },
  {
    id: "10183",
    zip: "74889",
    city: "Sinsheim",
  },
  {
    id: "10184",
    zip: "74906",
    city: "Bad Rappenau",
  },
  {
    id: "10185",
    zip: "74909",
    city: "Meckesheim",
  },
  {
    id: "10186",
    zip: "74912",
    city: "Kirchardt",
  },
  {
    id: "10187",
    zip: "74915",
    city: "Waibstadt",
  },
  {
    id: "10188",
    zip: "74918",
    city: "Angelbachtal",
  },
  {
    id: "10189",
    zip: "74921",
    city: "Helmstadt-Bargen",
  },
  {
    id: "10190",
    zip: "74924",
    city: "Neckarbischofsheim",
  },
  {
    id: "10191",
    zip: "74925",
    city: "Epfenbach",
  },
  {
    id: "10192",
    zip: "74927",
    city: "Eschelbronn",
  },
  {
    id: "10193",
    zip: "74928",
    city: "Hüffenhardt",
  },
  {
    id: "10194",
    zip: "74930",
    city: "Ittlingen",
  },
  {
    id: "10195",
    zip: "74931",
    city: "Lobbach",
  },
  {
    id: "10196",
    zip: "74933",
    city: "Neidenstein",
  },
  {
    id: "10197",
    zip: "74934",
    city: "Reichartshausen",
  },
  {
    id: "10198",
    zip: "74936",
    city: "Siegelsbach",
  },
  {
    id: "10199",
    zip: "74937",
    city: "Spechbach",
  },
  {
    id: "10200",
    zip: "74939",
    city: "Zuzenhausen",
  },
  {
    id: "10201",
    zip: "75015",
    city: "Bretten",
  },
  {
    id: "10202",
    zip: "75031",
    city: "Eppingen",
  },
  {
    id: "10203",
    zip: "75038",
    city: "Oberderdingen",
  },
  {
    id: "10204",
    zip: "75045",
    city: "Walzbachtal",
  },
  {
    id: "10205",
    zip: "75050",
    city: "Gemmingen",
  },
  {
    id: "10206",
    zip: "75053",
    city: "Gondelsheim",
  },
  {
    id: "10207",
    zip: "75056",
    city: "Sulzfeld",
  },
  {
    id: "10208",
    zip: "75057",
    city: "Kürnbach",
  },
  {
    id: "10209",
    zip: "75059",
    city: "Zaisenhausen",
  },
  {
    id: "10210",
    zip: "75172",
    city: "Pforzheim",
  },
  {
    id: "10211",
    zip: "75173",
    city: "Pforzheim",
  },
  {
    id: "10212",
    zip: "75175",
    city: "Pforzheim",
  },
  {
    id: "10213",
    zip: "75177",
    city: "Pforzheim",
  },
  {
    id: "10214",
    zip: "75179",
    city: "Pforzheim",
  },
  {
    id: "10215",
    zip: "75180",
    city: "Pforzheim",
  },
  {
    id: "10216",
    zip: "75181",
    city: "Pforzheim",
  },
  {
    id: "10217",
    zip: "75196",
    city: "Remchingen",
  },
  {
    id: "10218",
    zip: "75203",
    city: "Königsbach-Stein",
  },
  {
    id: "10219",
    zip: "75210",
    city: "Keltern",
  },
  {
    id: "10220",
    zip: "75217",
    city: "Birkenfeld",
  },
  {
    id: "10221",
    zip: "75223",
    city: "Niefern-+schelbronn",
  },
  {
    id: "10222",
    zip: "75228",
    city: "Ispringen",
  },
  {
    id: "10223",
    zip: "75233",
    city: "Tiefenbronn",
  },
  {
    id: "10225",
    zip: "75236",
    city: "Kämpfelbach",
  },
  {
    id: "10226",
    zip: "75239",
    city: "Eisingen",
  },
  {
    id: "10227",
    zip: "75242",
    city: "Neuhausen",
  },
  {
    id: "10228",
    zip: "75245",
    city: "Neulingen",
  },
  {
    id: "10229",
    zip: "75248",
    city: "Ölbronn-Dürrn",
  },
  {
    id: "10230",
    zip: "75249",
    city: "Kieselbronn",
  },
  {
    id: "10231",
    zip: "75305",
    city: "Neuenbürg",
  },
  {
    id: "10232",
    zip: "75323",
    city: "Bad Wildbad im Schwarzwald",
  },
  {
    id: "10233",
    zip: "75328",
    city: "Schömberg",
  },
  {
    id: "10234",
    zip: "75331",
    city: "Engelsbrand",
  },
  {
    id: "10235",
    zip: "75334",
    city: "Straubenhardt",
  },
  {
    id: "10236",
    zip: "75335",
    city: "Dobel",
  },
  {
    id: "10237",
    zip: "75337",
    city: "Enzklösterle",
  },
  {
    id: "10238",
    zip: "75339",
    city: "Höfen an der Enz",
  },
  {
    id: "10239",
    zip: "75365",
    city: "Calw",
  },
  {
    id: "10240",
    zip: "75378",
    city: "Bad Liebenzell",
  },
  {
    id: "10241",
    zip: "75382",
    city: "Althengstett",
  },
  {
    id: "10242",
    zip: "75385",
    city: "Bad Teinach-Zavelstein",
  },
  {
    id: "10243",
    zip: "75387",
    city: "Neubulach",
  },
  {
    id: "10244",
    zip: "75389",
    city: "Neuweiler",
  },
  {
    id: "10245",
    zip: "75391",
    city: "Gechingen",
  },
  {
    id: "10224",
    zip: "75392",
    city: "Deckenpfronn",
  },
  {
    id: "10246",
    zip: "75394",
    city: "Oberreichenbach",
  },
  {
    id: "10247",
    zip: "75395",
    city: "Ostelsheim",
  },
  {
    id: "10248",
    zip: "75397",
    city: "Simmozheim",
  },
  {
    id: "10249",
    zip: "75399",
    city: "Unterreichenbach",
  },
  {
    id: "10250",
    zip: "75417",
    city: "Mühlacker",
  },
  {
    id: "10251",
    zip: "75428",
    city: "Illingen",
  },
  {
    id: "10252",
    zip: "75433",
    city: "Maulbronn",
  },
  {
    id: "10253",
    zip: "75438",
    city: "Knittlingen",
  },
  {
    id: "10254",
    zip: "75443",
    city: "Ötisheim",
  },
  {
    id: "10255",
    zip: "75446",
    city: "Wiernsheim",
  },
  {
    id: "10256",
    zip: "75447",
    city: "Sternenfels",
  },
  {
    id: "10257",
    zip: "75449",
    city: "Wurmberg",
  },
  {
    id: "10258",
    zip: "76131",
    city: "Karlsruhe",
  },
  {
    id: "10259",
    zip: "76133",
    city: "Karlsruhe",
  },
  {
    id: "10260",
    zip: "76135",
    city: "Karlsruhe",
  },
  {
    id: "10261",
    zip: "76137",
    city: "Karlsruhe",
  },
  {
    id: "10262",
    zip: "76139",
    city: "Karlsruhe",
  },
  {
    id: "10263",
    zip: "76149",
    city: "Karlsruhe",
  },
  {
    id: "10264",
    zip: "76185",
    city: "Karlsruhe",
  },
  {
    id: "10265",
    zip: "76187",
    city: "Karlsruhe",
  },
  {
    id: "10266",
    zip: "76189",
    city: "Karlsruhe",
  },
  {
    id: "10267",
    zip: "76199",
    city: "Karlsruhe",
  },
  {
    id: "10268",
    zip: "76227",
    city: "Karlsruhe",
  },
  {
    id: "10269",
    zip: "76228",
    city: "Karlsruhe",
  },
  {
    id: "10270",
    zip: "76229",
    city: "Karlsruhe",
  },
  {
    id: "10271",
    zip: "76275",
    city: "Ettlingen",
  },
  {
    id: "10272",
    zip: "76287",
    city: "Rheinstetten",
  },
  {
    id: "10273",
    zip: "76297",
    city: "Stutensee",
  },
  {
    id: "10274",
    zip: "76307",
    city: "Karlsbad",
  },
  {
    id: "10275",
    zip: "76316",
    city: "Malsch",
  },
  {
    id: "10276",
    zip: "76327",
    city: "Pfinztal",
  },
  {
    id: "10277",
    zip: "76332",
    city: "Bad Herrenalb",
  },
  {
    id: "10278",
    zip: "76337",
    city: "Waldbronn",
  },
  {
    id: "10279",
    zip: "76344",
    city: "Eggenstein-Leopoldshafen",
  },
  {
    id: "10280",
    zip: "76351",
    city: "Linkenheim-Hochstetten",
  },
  {
    id: "10281",
    zip: "76356",
    city: "Weingarten (Baden)",
  },
  {
    id: "10282",
    zip: "76359",
    city: "Marxzell",
  },
  {
    id: "10283",
    zip: "76437",
    city: "Rastatt",
  },
  {
    id: "10284",
    zip: "76448",
    city: "Durmersheim",
  },
  {
    id: "10285",
    zip: "76456",
    city: "Kuppenheim",
  },
  {
    id: "10286",
    zip: "76461",
    city: "Muggensturm",
  },
  {
    id: "10287",
    zip: "76467",
    city: "Bietigheim",
  },
  {
    id: "10288",
    zip: "76470",
    city: "Ötigheim",
  },
  {
    id: "10289",
    zip: "76473",
    city: "Iffezheim",
  },
  {
    id: "10290",
    zip: "76474",
    city: "Au am Rhein",
  },
  {
    id: "10291",
    zip: "76476",
    city: "Bischweier",
  },
  {
    id: "10292",
    zip: "76477",
    city: "Elchesheim-Illingen",
  },
  {
    id: "10293",
    zip: "76479",
    city: "Steinmauern",
  },
  {
    id: "10294",
    zip: "76530",
    city: "Baden-Baden",
  },
  {
    id: "10295",
    zip: "76532",
    city: "Baden-Baden",
  },
  {
    id: "10296",
    zip: "76534",
    city: "Baden-Baden",
  },
  {
    id: "10297",
    zip: "76547",
    city: "Sinzheim",
  },
  {
    id: "10298",
    zip: "76549",
    city: "Hügelsheim",
  },
  {
    id: "10299",
    zip: "76571",
    city: "Gaggenau",
  },
  {
    id: "10300",
    zip: "76593",
    city: "Gernsbach",
  },
  {
    id: "10301",
    zip: "76596",
    city: "Forbach",
  },
  {
    id: "10302",
    zip: "76597",
    city: "Loffenau",
  },
  {
    id: "10303",
    zip: "76599",
    city: "Weisenbach",
  },
  {
    id: "10304",
    zip: "76646",
    city: "Bruchsal",
  },
  {
    id: "10305",
    zip: "76661",
    city: "Philippsburg",
  },
  {
    id: "10306",
    zip: "76669",
    city: "Bad Schönborn",
  },
  {
    id: "10307",
    zip: "76676",
    city: "Graben-Neudorf",
  },
  {
    id: "10308",
    zip: "76684",
    city: "Östringen",
  },
  {
    id: "10309",
    zip: "76689",
    city: "Karlsdorf-Neuthard",
  },
  {
    id: "10310",
    zip: "76694",
    city: "Forst",
  },
  {
    id: "10311",
    zip: "76698",
    city: "Ubstadt-Weiher",
  },
  {
    id: "10312",
    zip: "76703",
    city: "Kraichtal",
  },
  {
    id: "10313",
    zip: "76706",
    city: "Dettenheim",
  },
  {
    id: "10314",
    zip: "76707",
    city: "Hambrücken",
  },
  {
    id: "10315",
    zip: "76709",
    city: "Kronau",
  },
  {
    id: "10316",
    zip: "76726",
    city: "Germersheim",
  },
  {
    id: "10317",
    zip: "76744",
    city: "Wörth am Rhein",
  },
  {
    id: "10318",
    zip: "76751",
    city: "Jockgrim",
  },
  {
    id: "10319",
    zip: "76756",
    city: "Bellheim",
  },
  {
    id: "10320",
    zip: "76761",
    city: "Rülzheim",
  },
  {
    id: "10321",
    zip: "76764",
    city: "Rheinzabern",
  },
  {
    id: "10322",
    zip: "76767",
    city: "Hagenbach",
  },
  {
    id: "10323",
    zip: "76768",
    city: "Berg (Pfalz)",
  },
  {
    id: "10324",
    zip: "76770",
    city: "Hatzenbühl",
  },
  {
    id: "10325",
    zip: "76771",
    city: "Hördt",
  },
  {
    id: "10326",
    zip: "76773",
    city: "Kuhardt",
  },
  {
    id: "10327",
    zip: "76774",
    city: "Leimersheim",
  },
  {
    id: "10328",
    zip: "76776",
    city: "Neuburg am Rhein",
  },
  {
    id: "10329",
    zip: "76777",
    city: "Neupotz",
  },
  {
    id: "10330",
    zip: "76779",
    city: "Scheibenhardt",
  },
  {
    id: "10331",
    zip: "76829",
    city: "Landau in der Pfalz",
  },
  {
    id: "10332",
    zip: "76831",
    city: "Billigheim-Ingenheim",
  },
  {
    id: "10333",
    zip: "76833",
    city: "Frankweiler",
  },
  {
    id: "10334",
    zip: "76835",
    city: "Rhodt unter Rietburg",
  },
  {
    id: "10335",
    zip: "76846",
    city: "Hauenstein",
  },
  {
    id: "10336",
    zip: "76848",
    city: "Wilgartswiesen",
  },
  {
    id: "10337",
    zip: "76855",
    city: "Annweiler am Trifels",
  },
  {
    id: "10338",
    zip: "76857",
    city: "Albersweiler",
  },
  {
    id: "12905",
    zip: "76863",
    city: "Herxheim bei Landau / Pfalz",
  },
  {
    id: "10339",
    zip: "76865",
    city: "Insheim",
  },
  {
    id: "10340",
    zip: "76870",
    city: "Kandel",
  },
  {
    id: "10341",
    zip: "76872",
    city: "Steinweiler",
  },
  {
    id: "10342",
    zip: "76877",
    city: "Offenbach an der Queich",
  },
  {
    id: "10343",
    zip: "76879",
    city: "Hochstadt (Pfalz)",
  },
  {
    id: "10344",
    zip: "76887",
    city: "Bad Bergzabern",
  },
  {
    id: "10345",
    zip: "76889",
    city: "Klingenmünster",
  },
  {
    id: "10346",
    zip: "76891",
    city: "Bruchweiler-Bärenbach",
  },
  {
    id: "10347",
    zip: "77652",
    city: "Offenburg",
  },
  {
    id: "10348",
    zip: "77654",
    city: "Offenburg",
  },
  {
    id: "10349",
    zip: "77656",
    city: "Offenburg",
  },
  {
    id: "10350",
    zip: "77694",
    city: "Kehl",
  },
  {
    id: "10351",
    zip: "77704",
    city: "Oberkirch",
  },
  {
    id: "10352",
    zip: "77709",
    city: "Wolfach",
  },
  {
    id: "10353",
    zip: "77716",
    city: "Haslach im Kinzigtal",
  },
  {
    id: "10354",
    zip: "77723",
    city: "Gengenbach",
  },
  {
    id: "10355",
    zip: "77728",
    city: "Oppenau",
  },
  {
    id: "10356",
    zip: "77731",
    city: "Willstätt",
  },
  {
    id: "10357",
    zip: "77736",
    city: "Zell am Harmersbach",
  },
  {
    id: "10358",
    zip: "77740",
    city: "Bad Peterstal-Griesbach",
  },
  {
    id: "10359",
    zip: "77743",
    city: "Neuried",
  },
  {
    id: "10360",
    zip: "77746",
    city: "Schutterwald",
  },
  {
    id: "10361",
    zip: "77749",
    city: "Hohberg",
  },
  {
    id: "10362",
    zip: "77756",
    city: "Hausach",
  },
  {
    id: "10363",
    zip: "77761",
    city: "Schiltach",
  },
  {
    id: "10364",
    zip: "77767",
    city: "Appenweier",
  },
  {
    id: "10365",
    zip: "77770",
    city: "Durbach",
  },
  {
    id: "10366",
    zip: "77773",
    city: "Schenkenzell",
  },
  {
    id: "10368",
    zip: "77776",
    city: "Bad Rippoldsau-Schapbach",
  },
  {
    id: "10369",
    zip: "77781",
    city: "Biberach",
  },
  {
    id: "10370",
    zip: "77784",
    city: "Oberharmersbach",
  },
  {
    id: "10371",
    zip: "77787",
    city: "Nordrach",
  },
  {
    id: "10372",
    zip: "77790",
    city: "Steinach",
  },
  {
    id: "10367",
    zip: "77791",
    city: "Berghaupten",
  },
  {
    id: "10373",
    zip: "77793",
    city: "Gutach (Schwarzwaldbahn)",
  },
  {
    id: "10374",
    zip: "77794",
    city: "Lautenbach",
  },
  {
    id: "10375",
    zip: "77796",
    city: "Mühlenbach",
  },
  {
    id: "10376",
    zip: "77797",
    city: "Ohlsbach",
  },
  {
    id: "10377",
    zip: "77799",
    city: "Ortenberg",
  },
  {
    id: "10378",
    zip: "77815",
    city: "Bühl",
  },
  {
    id: "10379",
    zip: "77830",
    city: "Bühlertal",
  },
  {
    id: "10380",
    zip: "77833",
    city: "Ottersweier",
  },
  {
    id: "10381",
    zip: "77836",
    city: "Rheinmünster",
  },
  {
    id: "10382",
    zip: "77839",
    city: "Lichtenau",
  },
  {
    id: "10383",
    zip: "77855",
    city: "Achern",
  },
  {
    id: "10384",
    zip: "77866",
    city: "Rheinau",
  },
  {
    id: "10385",
    zip: "77871",
    city: "Renchen",
  },
  {
    id: "10386",
    zip: "77876",
    city: "Kappelrodeck",
  },
  {
    id: "10387",
    zip: "77880",
    city: "Sasbach",
  },
  {
    id: "10388",
    zip: "77883",
    city: "Ottenhöfen im Schwarzwald",
  },
  {
    id: "10389",
    zip: "77886",
    city: "Lauf",
  },
  {
    id: "10390",
    zip: "77887",
    city: "Sasbachwalden",
  },
  {
    id: "10391",
    zip: "77889",
    city: "Seebach",
  },
  {
    id: "12906",
    zip: "77933",
    city: "Lahr / Schwarzwald",
  },
  {
    id: "10392",
    zip: "77948",
    city: "Friesenheim",
  },
  {
    id: "10393",
    zip: "77955",
    city: "Ettenheim",
  },
  {
    id: "10394",
    zip: "77960",
    city: "Seelbach",
  },
  {
    id: "10395",
    zip: "77963",
    city: "Schwanau",
  },
  {
    id: "10396",
    zip: "77966",
    city: "Kappel-Grafenhausen",
  },
  {
    id: "10397",
    zip: "77971",
    city: "Kippenheim",
  },
  {
    id: "10398",
    zip: "77972",
    city: "Mahlberg",
  },
  {
    id: "10399",
    zip: "77974",
    city: "Meißenheim",
  },
  {
    id: "10400",
    zip: "77975",
    city: "Ringsheim",
  },
  {
    id: "10401",
    zip: "77977",
    city: "Rust",
  },
  {
    id: "10402",
    zip: "77978",
    city: "Schuttertal",
  },
  {
    id: "10403",
    zip: "78048",
    city: "Villingen-Schwenningen",
  },
  {
    id: "10404",
    zip: "78050",
    city: "Villingen-Schwenningen",
  },
  {
    id: "10405",
    zip: "78052",
    city: "Villingen-Schwenningen",
  },
  {
    id: "10406",
    zip: "78054",
    city: "Villingen-Schwenningen",
  },
  {
    id: "10407",
    zip: "78056",
    city: "Villingen-Schwenningen",
  },
  {
    id: "10408",
    zip: "78073",
    city: "Bad Dürrheim",
  },
  {
    id: "10409",
    zip: "78078",
    city: "Niedereschach",
  },
  {
    id: "10410",
    zip: "78083",
    city: "Dauchingen",
  },
  {
    id: "10411",
    zip: "78086",
    city: "Brigachtal",
  },
  {
    id: "10412",
    zip: "78087",
    city: "Mönchweiler",
  },
  {
    id: "10413",
    zip: "78089",
    city: "Unterkirnach",
  },
  {
    id: "10416",
    zip: "78098",
    city: "Triberg im Schwarzwald",
  },
  {
    id: "10417",
    zip: "78112",
    city: "Sankt Georgen im Schwarzwald",
  },
  {
    id: "10418",
    zip: "78120",
    city: "Furtwangen im Schwarzwald",
  },
  {
    id: "10419",
    zip: "78126",
    city: "Königsfeld im Schwarzwald",
  },
  {
    id: "10420",
    zip: "78132",
    city: "Hornberg",
  },
  {
    id: "10421",
    zip: "78136",
    city: "Schonach im Schwarzwald",
  },
  {
    id: "10422",
    zip: "78141",
    city: "Schönwald im Schwarzwald",
  },
  {
    id: "10423",
    zip: "78144",
    city: "Tennenbronn",
  },
  {
    id: "10424",
    zip: "78147",
    city: "Vöhrenbach",
  },
  {
    id: "10425",
    zip: "78148",
    city: "Gütenbach",
  },
  {
    id: "10426",
    zip: "78166",
    city: "Donaueschingen",
  },
  {
    id: "10427",
    zip: "78176",
    city: "Blumberg",
  },
  {
    id: "10428",
    zip: "78183",
    city: "Hüfingen",
  },
  {
    id: "10429",
    zip: "78187",
    city: "Geisingen",
  },
  {
    id: "10430",
    zip: "78194",
    city: "Immendingen",
  },
  {
    id: "10431",
    zip: "78199",
    city: "Bräunlingen",
  },
  {
    id: "10432",
    zip: "78224",
    city: "Singen (Hohentwiel)",
  },
  {
    id: "10433",
    zip: "78234",
    city: "Engen",
  },
  {
    id: "10434",
    zip: "78239",
    city: "Rielasingen-Worblingen",
  },
  {
    id: "10414",
    zip: "78244",
    city: "Gottmadingen",
  },
  {
    id: "10415",
    zip: "78247",
    city: "Hilzingen",
  },
  {
    id: "10435",
    zip: "78250",
    city: "Tengen",
  },
  {
    id: "10436",
    zip: "78253",
    city: "Eigeltingen",
  },
  {
    id: "10437",
    zip: "78256",
    city: "Steißlingen",
  },
  {
    id: "10438",
    zip: "78259",
    city: "Mühlhausen-Ehingen",
  },
  {
    id: "10439",
    zip: "78262",
    city: "Gailingen am Hochrhein",
  },
  {
    id: "10440",
    zip: "78266",
    city: "Büsingen am Hochrhein",
  },
  {
    id: "10441",
    zip: "78267",
    city: "Aach",
  },
  {
    id: "10442",
    zip: "78269",
    city: "Volkertshausen",
  },
  {
    id: "10443",
    zip: "78315",
    city: "Radolfzell am Bodensee",
  },
  {
    id: "10444",
    zip: "78333",
    city: "Stockach",
  },
  {
    id: "10445",
    zip: "78337",
    city: "Öhningen",
  },
  {
    id: "10446",
    zip: "78343",
    city: "Gaienhofen",
  },
  {
    id: "10447",
    zip: "78345",
    city: "Moos",
  },
  {
    id: "10448",
    zip: "78351",
    city: "Bodman-Ludwigshafen",
  },
  {
    id: "10449",
    zip: "78354",
    city: "Sipplingen",
  },
  {
    id: "10450",
    zip: "78355",
    city: "Hohenfels",
  },
  {
    id: "10451",
    zip: "78357",
    city: "Mühlingen",
  },
  {
    id: "10452",
    zip: "78359",
    city: "Orsingen-Nenzingen",
  },
  {
    id: "10453",
    zip: "78462",
    city: "Konstanz",
  },
  {
    id: "10454",
    zip: "78464",
    city: "Konstanz",
  },
  {
    id: "10455",
    zip: "78465",
    city: "Konstanz",
  },
  {
    id: "10456",
    zip: "78467",
    city: "Konstanz",
  },
  {
    id: "10457",
    zip: "78476",
    city: "Allensbach",
  },
  {
    id: "10458",
    zip: "78479",
    city: "Reichenau",
  },
  {
    id: "10459",
    zip: "78532",
    city: "Tuttlingen",
  },
  {
    id: "10460",
    zip: "78549",
    city: "Spaichingen",
  },
  {
    id: "10461",
    zip: "78554",
    city: "Aldingen",
  },
  {
    id: "10462",
    zip: "78559",
    city: "Gosheim",
  },
  {
    id: "10463",
    zip: "78564",
    city: "Wehingen",
  },
  {
    id: "10464",
    zip: "78567",
    city: "Fridingen an der Donau",
  },
  {
    id: "10465",
    zip: "78570",
    city: "Mühlheim an der Donau",
  },
  {
    id: "10466",
    zip: "78573",
    city: "Wurmlingen",
  },
  {
    id: "10467",
    zip: "78576",
    city: "Emmingen-Liptingen",
  },
  {
    id: "10470",
    zip: "78579",
    city: "Neuhausen ob Eck",
  },
  {
    id: "10471",
    zip: "78580",
    city: "Bärenthal",
  },
  {
    id: "10472",
    zip: "78582",
    city: "Balgheim",
  },
  {
    id: "10473",
    zip: "78583",
    city: "Böttingen",
  },
  {
    id: "10474",
    zip: "78585",
    city: "Bubsheim",
  },
  {
    id: "10475",
    zip: "78586",
    city: "Deilingen",
  },
  {
    id: "10476",
    zip: "78588",
    city: "Denkingen",
  },
  {
    id: "10477",
    zip: "78589",
    city: "Dürbheim",
  },
  {
    id: "10468",
    zip: "78591",
    city: "Durchhausen",
  },
  {
    id: "10469",
    zip: "78592",
    city: "Egesheim",
  },
  {
    id: "10478",
    zip: "78594",
    city: "Gunningen",
  },
  {
    id: "10479",
    zip: "78595",
    city: "Hausen ob Verena",
  },
  {
    id: "10480",
    zip: "78597",
    city: "Irndorf",
  },
  {
    id: "10481",
    zip: "78598",
    city: "Königsheim",
  },
  {
    id: "10482",
    zip: "78600",
    city: "Kolbingen",
  },
  {
    id: "10483",
    zip: "78601",
    city: "Mahlstetten",
  },
  {
    id: "10484",
    zip: "78603",
    city: "Renquishausen",
  },
  {
    id: "10485",
    zip: "78604",
    city: "Rietheim-Weilheim",
  },
  {
    id: "10486",
    zip: "78606",
    city: "Seitingen-Oberflacht",
  },
  {
    id: "10487",
    zip: "78607",
    city: "Talheim",
  },
  {
    id: "10488",
    zip: "78609",
    city: "Tuningen",
  },
  {
    id: "10489",
    zip: "78628",
    city: "Rottweil",
  },
  {
    id: "10491",
    zip: "78647",
    city: "Trossingen",
  },
  {
    id: "10492",
    zip: "78652",
    city: "Deißlingen",
  },
  {
    id: "10493",
    zip: "78655",
    city: "Dunningen",
  },
  {
    id: "10494",
    zip: "78658",
    city: "Zimmern ob Rottweil",
  },
  {
    id: "10495",
    zip: "78661",
    city: "Dietingen",
  },
  {
    id: "10496",
    zip: "78662",
    city: "Bösingen",
  },
  {
    id: "10497",
    zip: "78664",
    city: "Eschbronn",
  },
  {
    id: "10498",
    zip: "78665",
    city: "Frittlingen",
  },
  {
    id: "10499",
    zip: "78667",
    city: "Villingendorf",
  },
  {
    id: "10500",
    zip: "78669",
    city: "Wellendingen",
  },
  {
    id: "10501",
    zip: "78713",
    city: "Schramberg",
  },
  {
    id: "10502",
    zip: "78727",
    city: "Oberndorf am Neckar",
  },
  {
    id: "10503",
    zip: "78730",
    city: "Lauterbach",
  },
  {
    id: "10504",
    zip: "78733",
    city: "Aichhalden",
  },
  {
    id: "10505",
    zip: "78736",
    city: "Epfendorf",
  },
  {
    id: "10490",
    zip: "78737",
    city: "Fluorn-Winzeln",
  },
  {
    id: "10506",
    zip: "78739",
    city: "Hardt",
  },
  {
    id: "10507",
    zip: "79098",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10508",
    zip: "79100",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10509",
    zip: "79102",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10510",
    zip: "79104",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10511",
    zip: "79106",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10512",
    zip: "79108",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10513",
    zip: "79110",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10514",
    zip: "79111",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10515",
    zip: "79112",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10516",
    zip: "79114",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10517",
    zip: "79115",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10518",
    zip: "79117",
    city: "Freiburg im Breisgau",
  },
  {
    id: "10519",
    zip: "79183",
    city: "Waldkirch",
  },
  {
    id: "10520",
    zip: "79189",
    city: "Bad Krozingen",
  },
  {
    id: "10521",
    zip: "79194",
    city: "Gundelfingen",
  },
  {
    id: "10522",
    zip: "79199",
    city: "Kirchzarten",
  },
  {
    id: "10523",
    zip: "79206",
    city: "Breisach am Rhein",
  },
  {
    id: "10524",
    zip: "79211",
    city: "Denzlingen",
  },
  {
    id: "10525",
    zip: "79215",
    city: "Elzach",
  },
  {
    id: "10526",
    zip: "79219",
    city: "Staufen im Breisgau",
  },
  {
    id: "10527",
    zip: "79224",
    city: "Umkirch",
  },
  {
    id: "10528",
    zip: "79227",
    city: "Schallstadt",
  },
  {
    id: "10529",
    zip: "79232",
    city: "March",
  },
  {
    id: "10530",
    zip: "79235",
    city: "Vogtsburg im Kaiserstuhl",
  },
  {
    id: "10531",
    zip: "79238",
    city: "Ehrenkirchen",
  },
  {
    id: "10532",
    zip: "79241",
    city: "Ihringen",
  },
  {
    id: "12907",
    zip: "79244",
    city: "Münstertal / Schwarzwald",
  },
  {
    id: "10533",
    zip: "79249",
    city: "Merzhausen",
  },
  {
    id: "10534",
    zip: "79252",
    city: "Stegen",
  },
  {
    id: "10535",
    zip: "79254",
    city: "Oberried",
  },
  {
    id: "10536",
    zip: "79256",
    city: "Buchenbach",
  },
  {
    id: "10537",
    zip: "79258",
    city: "Hartheim",
  },
  {
    id: "10538",
    zip: "79261",
    city: "Gutach im Breisgau",
  },
  {
    id: "10539",
    zip: "79263",
    city: "Simonswald",
  },
  {
    id: "10540",
    zip: "79268",
    city: "Bötzingen",
  },
  {
    id: "10541",
    zip: "79271",
    city: "Sankt Peter",
  },
  {
    id: "10542",
    zip: "79274",
    city: "Sankt Märgen",
  },
  {
    id: "10543",
    zip: "79276",
    city: "Reute",
  },
  {
    id: "10544",
    zip: "79279",
    city: "Vörstetten",
  },
  {
    id: "10545",
    zip: "79280",
    city: "Au",
  },
  {
    id: "10546",
    zip: "79282",
    city: "Ballrechten-Dottingen",
  },
  {
    id: "10547",
    zip: "79283",
    city: "Bollschweil",
  },
  {
    id: "10548",
    zip: "79285",
    city: "Ebringen",
  },
  {
    id: "10549",
    zip: "79286",
    city: "Glottertal",
  },
  {
    id: "10551",
    zip: "79288",
    city: "Gottenheim",
  },
  {
    id: "10552",
    zip: "79289",
    city: "Horben",
  },
  {
    id: "10553",
    zip: "79291",
    city: "Merdingen",
  },
  {
    id: "10554",
    zip: "79292",
    city: "Pfaffenweiler",
  },
  {
    id: "10555",
    zip: "79294",
    city: "Sölden",
  },
  {
    id: "10556",
    zip: "79295",
    city: "Sulzburg",
  },
  {
    id: "10550",
    zip: "79297",
    city: "Winden im Elztal",
  },
  {
    id: "10557",
    zip: "79299",
    city: "Wittnau",
  },
  {
    id: "10558",
    zip: "79312",
    city: "Emmendingen",
  },
  {
    id: "10559",
    zip: "79331",
    city: "Teningen",
  },
  {
    id: "10560",
    zip: "79336",
    city: "Herbolzheim",
  },
  {
    id: "10561",
    zip: "79341",
    city: "Kenzingen",
  },
  {
    id: "10562",
    zip: "79346",
    city: "Endingen am Kaiserstuhl",
  },
  {
    id: "10563",
    zip: "79348",
    city: "Freiamt",
  },
  {
    id: "10564",
    zip: "79350",
    city: "Sexau",
  },
  {
    id: "10565",
    zip: "79353",
    city: "Bahlingen",
  },
  {
    id: "10566",
    zip: "79356",
    city: "Eichstetten",
  },
  {
    id: "10567",
    zip: "79359",
    city: "Riegel",
  },
  {
    id: "10568",
    zip: "79361",
    city: "Sasbach",
  },
  {
    id: "10569",
    zip: "79362",
    city: "Forchheim",
  },
  {
    id: "10570",
    zip: "79364",
    city: "Malterdingen",
  },
  {
    id: "10571",
    zip: "79365",
    city: "Rheinhausen",
  },
  {
    id: "10572",
    zip: "79367",
    city: "Weisweil",
  },
  {
    id: "10573",
    zip: "79369",
    city: "Wyhl",
  },
  {
    id: "10574",
    zip: "79379",
    city: "Müllheim",
  },
  {
    id: "10576",
    zip: "79395",
    city: "Neuenburg am Rhein",
  },
  {
    id: "10577",
    zip: "79400",
    city: "Kandern",
  },
  {
    id: "10578",
    zip: "79410",
    city: "Badenweiler",
  },
  {
    id: "10579",
    zip: "79415",
    city: "Bad Bellingen",
  },
  {
    id: "10580",
    zip: "79418",
    city: "Schliengen",
  },
  {
    id: "10581",
    zip: "79423",
    city: "Heitersheim",
  },
  {
    id: "10575",
    zip: "79424",
    city: "Auggen",
  },
  {
    id: "10582",
    zip: "79426",
    city: "Buggingen",
  },
  {
    id: "10583",
    zip: "79427",
    city: "Eschbach",
  },
  {
    id: "10584",
    zip: "79429",
    city: "Malsburg-Marzell",
  },
  {
    id: "10585",
    zip: "79539",
    city: "Lörrach",
  },
  {
    id: "10586",
    zip: "79540",
    city: "Lörrach",
  },
  {
    id: "10587",
    zip: "79541",
    city: "Lörrach",
  },
  {
    id: "10588",
    zip: "79576",
    city: "Weil am Rhein",
  },
  {
    id: "10589",
    zip: "79585",
    city: "Steinen",
  },
  {
    id: "10590",
    zip: "79588",
    city: "Efringen-Kirchen",
  },
  {
    id: "10591",
    zip: "79589",
    city: "Binzen",
  },
  {
    id: "10592",
    zip: "79591",
    city: "Eimeldingen",
  },
  {
    id: "10593",
    zip: "79592",
    city: "Fischingen",
  },
  {
    id: "10594",
    zip: "79594",
    city: "Inzlingen",
  },
  {
    id: "10595",
    zip: "79595",
    city: "Rümmingen",
  },
  {
    id: "10596",
    zip: "79597",
    city: "Schallbach",
  },
  {
    id: "10597",
    zip: "79599",
    city: "Wittlingen",
  },
  {
    id: "10598",
    zip: "79618",
    city: "Rheinfelden (Baden)",
  },
  {
    id: "10599",
    zip: "79639",
    city: "Grenzach-Wyhlen",
  },
  {
    id: "10600",
    zip: "79650",
    city: "Schopfheim",
  },
  {
    id: "10601",
    zip: "79664",
    city: "Wehr",
  },
  {
    id: "10602",
    zip: "79669",
    city: "Zell im Wiesental",
  },
  {
    id: "10603",
    zip: "79674",
    city: "Todtnau",
  },
  {
    id: "10604",
    zip: "79677",
    city: "Schönau im Schwarzwald",
  },
  {
    id: "10605",
    zip: "79682",
    city: "Todtmoos",
  },
  {
    id: "10606",
    zip: "79683",
    city: "Bürchau",
  },
  {
    id: "10607",
    zip: "79685",
    city: "Häg-Ehrsberg",
  },
  {
    id: "10608",
    zip: "79686",
    city: "Hasel",
  },
  {
    id: "10609",
    zip: "79688",
    city: "Hausen im Wiesental",
  },
  {
    id: "10610",
    zip: "79689",
    city: "Maulburg",
  },
  {
    id: "10611",
    zip: "79691",
    city: "Neuenweg",
  },
  {
    id: "10612",
    zip: "79692",
    city: "Tegernau",
  },
  {
    id: "10613",
    zip: "79694",
    city: "Utzenfeld",
  },
  {
    id: "10614",
    zip: "79695",
    city: "Wieden",
  },
  {
    id: "10615",
    zip: "79697",
    city: "Wies",
  },
  {
    id: "10616",
    zip: "79699",
    city: "Wieslet",
  },
  {
    id: "10617",
    zip: "79713",
    city: "Bad Säckingen",
  },
  {
    id: "10618",
    zip: "79725",
    city: "Laufenburg (Baden)",
  },
  {
    id: "10619",
    zip: "79730",
    city: "Murg",
  },
  {
    id: "10620",
    zip: "79733",
    city: "Görwihl",
  },
  {
    id: "10621",
    zip: "79736",
    city: "Rickenbach",
  },
  {
    id: "10622",
    zip: "79737",
    city: "Herrischried",
  },
  {
    id: "10623",
    zip: "79739",
    city: "Schwörstadt",
  },
  {
    id: "10624",
    zip: "79761",
    city: "Waldshut-Tiengen",
  },
  {
    id: "10625",
    zip: "79771",
    city: "Klettgau",
  },
  {
    id: "10626",
    zip: "79774",
    city: "Albbruck",
  },
  {
    id: "10627",
    zip: "79777",
    city: "Ühlingen-Birkendorf",
  },
  {
    id: "10628",
    zip: "79780",
    city: "Stühlingen",
  },
  {
    id: "10629",
    zip: "79787",
    city: "Lauchringen",
  },
  {
    id: "10630",
    zip: "79790",
    city: "Küssaberg",
  },
  {
    id: "10631",
    zip: "79793",
    city: "Wutöschingen",
  },
  {
    id: "10632",
    zip: "79798",
    city: "Jestetten",
  },
  {
    id: "10633",
    zip: "79801",
    city: "Hohentengen am Hochrhein",
  },
  {
    id: "10634",
    zip: "79802",
    city: "Dettighofen",
  },
  {
    id: "10636",
    zip: "79804",
    city: "Dogern",
  },
  {
    id: "10637",
    zip: "79805",
    city: "Eggingen",
  },
  {
    id: "10638",
    zip: "79807",
    city: "Lottstetten",
  },
  {
    id: "10639",
    zip: "79809",
    city: "Weilheim",
  },
  {
    id: "10640",
    zip: "79822",
    city: "Titisee-Neustadt",
  },
  {
    id: "10641",
    zip: "79837",
    city: "Sankt Blasien",
  },
  {
    id: "10642",
    zip: "79843",
    city: "Löffingen",
  },
  {
    id: "10643",
    zip: "79848",
    city: "Bonndorf im Schwarzwald",
  },
  {
    id: "10644",
    zip: "79853",
    city: "Lenzkirch",
  },
  {
    id: "10645",
    zip: "79856",
    city: "Hinterzarten",
  },
  {
    id: "10646",
    zip: "79859",
    city: "Schluchsee",
  },
  {
    id: "10647",
    zip: "79862",
    city: "Höchenschwand",
  },
  {
    id: "10635",
    zip: "79865",
    city: "Grafenhausen",
  },
  {
    id: "10648",
    zip: "79868",
    city: "Feldberg (Schwarzwald)",
  },
  {
    id: "10649",
    zip: "79871",
    city: "Eisenbach (Hochschwarzwald)",
  },
  {
    id: "10650",
    zip: "79872",
    city: "Bernau",
  },
  {
    id: "10651",
    zip: "79874",
    city: "Breitnau",
  },
  {
    id: "10652",
    zip: "79875",
    city: "Dachsberg (Südschwarzwald)",
  },
  {
    id: "10653",
    zip: "79877",
    city: "Friedenweiler",
  },
  {
    id: "10654",
    zip: "79879",
    city: "Wutach",
  },
  {
    id: "10655",
    zip: "80331",
    city: "München",
  },
  {
    id: "10656",
    zip: "80333",
    city: "München",
  },
  {
    id: "10657",
    zip: "80335",
    city: "München",
  },
  {
    id: "10658",
    zip: "80336",
    city: "München",
  },
  {
    id: "10659",
    zip: "80337",
    city: "München",
  },
  {
    id: "10660",
    zip: "80339",
    city: "München",
  },
  {
    id: "10661",
    zip: "80469",
    city: "München",
  },
  {
    id: "10662",
    zip: "80538",
    city: "München",
  },
  {
    id: "10663",
    zip: "80539",
    city: "München",
  },
  {
    id: "10664",
    zip: "80634",
    city: "München",
  },
  {
    id: "10665",
    zip: "80636",
    city: "München",
  },
  {
    id: "10666",
    zip: "80637",
    city: "München",
  },
  {
    id: "10667",
    zip: "80638",
    city: "München",
  },
  {
    id: "10668",
    zip: "80639",
    city: "München",
  },
  {
    id: "10669",
    zip: "80686",
    city: "München",
  },
  {
    id: "10670",
    zip: "80687",
    city: "München",
  },
  {
    id: "10671",
    zip: "80689",
    city: "München",
  },
  {
    id: "10672",
    zip: "80796",
    city: "München",
  },
  {
    id: "10673",
    zip: "80797",
    city: "München",
  },
  {
    id: "10674",
    zip: "80798",
    city: "München",
  },
  {
    id: "10675",
    zip: "80799",
    city: "München",
  },
  {
    id: "10676",
    zip: "80801",
    city: "München",
  },
  {
    id: "10677",
    zip: "80802",
    city: "München",
  },
  {
    id: "10678",
    zip: "80803",
    city: "München",
  },
  {
    id: "10679",
    zip: "80804",
    city: "München",
  },
  {
    id: "10680",
    zip: "80805",
    city: "München",
  },
  {
    id: "10681",
    zip: "80807",
    city: "München",
  },
  {
    id: "10682",
    zip: "80809",
    city: "München",
  },
  {
    id: "10683",
    zip: "80933",
    city: "München",
  },
  {
    id: "10684",
    zip: "80935",
    city: "München",
  },
  {
    id: "10685",
    zip: "80937",
    city: "München",
  },
  {
    id: "10686",
    zip: "80939",
    city: "München",
  },
  {
    id: "10688",
    zip: "80992",
    city: "München",
  },
  {
    id: "10689",
    zip: "80993",
    city: "München",
  },
  {
    id: "10690",
    zip: "80995",
    city: "München",
  },
  {
    id: "10691",
    zip: "80997",
    city: "München",
  },
  {
    id: "10692",
    zip: "80999",
    city: "München",
  },
  {
    id: "10693",
    zip: "81241",
    city: "München",
  },
  {
    id: "10694",
    zip: "81243",
    city: "München",
  },
  {
    id: "10695",
    zip: "81245",
    city: "München",
  },
  {
    id: "10696",
    zip: "81247",
    city: "München",
  },
  {
    id: "10697",
    zip: "81249",
    city: "München",
  },
  {
    id: "10698",
    zip: "81369",
    city: "München",
  },
  {
    id: "10699",
    zip: "81371",
    city: "München",
  },
  {
    id: "10700",
    zip: "81373",
    city: "München",
  },
  {
    id: "10701",
    zip: "81375",
    city: "München",
  },
  {
    id: "10702",
    zip: "81377",
    city: "München",
  },
  {
    id: "10703",
    zip: "81379",
    city: "München",
  },
  {
    id: "10704",
    zip: "81475",
    city: "München",
  },
  {
    id: "10705",
    zip: "81476",
    city: "München",
  },
  {
    id: "10706",
    zip: "81477",
    city: "München",
  },
  {
    id: "10707",
    zip: "81479",
    city: "München",
  },
  {
    id: "10708",
    zip: "81539",
    city: "München",
  },
  {
    id: "10709",
    zip: "81541",
    city: "München",
  },
  {
    id: "10710",
    zip: "81543",
    city: "München",
  },
  {
    id: "10711",
    zip: "81545",
    city: "München",
  },
  {
    id: "10712",
    zip: "81547",
    city: "München",
  },
  {
    id: "10687",
    zip: "81549",
    city: "München",
  },
  {
    id: "10713",
    zip: "81667",
    city: "München",
  },
  {
    id: "10714",
    zip: "81669",
    city: "München",
  },
  {
    id: "10715",
    zip: "81671",
    city: "München",
  },
  {
    id: "10716",
    zip: "81673",
    city: "München",
  },
  {
    id: "10717",
    zip: "81675",
    city: "München",
  },
  {
    id: "10718",
    zip: "81677",
    city: "München",
  },
  {
    id: "10719",
    zip: "81679",
    city: "München",
  },
  {
    id: "10720",
    zip: "81735",
    city: "München",
  },
  {
    id: "10721",
    zip: "81737",
    city: "München",
  },
  {
    id: "10722",
    zip: "81739",
    city: "München",
  },
  {
    id: "10723",
    zip: "81825",
    city: "München",
  },
  {
    id: "10724",
    zip: "81827",
    city: "München",
  },
  {
    id: "10725",
    zip: "81829",
    city: "München",
  },
  {
    id: "10727",
    zip: "81925",
    city: "München",
  },
  {
    id: "10728",
    zip: "81927",
    city: "München",
  },
  {
    id: "10729",
    zip: "81929",
    city: "München",
  },
  {
    id: "10730",
    zip: "82008",
    city: "Unterhaching",
  },
  {
    id: "10731",
    zip: "82024",
    city: "Taufkirchen",
  },
  {
    id: "10732",
    zip: "82031",
    city: "Grünwald",
  },
  {
    id: "10733",
    zip: "82041",
    city: "Oberhaching",
  },
  {
    id: "13183",
    zip: "82049",
    city: "Pullach im Isartal",
  },
  {
    id: "10734",
    zip: "82054",
    city: "Sauerlach",
  },
  {
    id: "10735",
    zip: "82057",
    city: "Icking",
  },
  {
    id: "10736",
    zip: "82061",
    city: "Neuried",
  },
  {
    id: "10737",
    zip: "82064",
    city: "Straßlach-Dingharting",
  },
  {
    id: "10738",
    zip: "82065",
    city: "Baierbrunn",
  },
  {
    id: "10739",
    zip: "82067",
    city: "Schäftlarn",
  },
  {
    id: "10740",
    zip: "82069",
    city: "Schäftlarn",
  },
  {
    id: "10741",
    zip: "82110",
    city: "Germering",
  },
  {
    id: "10742",
    zip: "82131",
    city: "Gauting",
  },
  {
    id: "10743",
    zip: "82140",
    city: "Olching",
  },
  {
    id: "10744",
    zip: "82152",
    city: "Planegg",
  },
  {
    id: "10745",
    zip: "82166",
    city: "Gräfelfing",
  },
  {
    id: "10726",
    zip: "82178",
    city: "Puchheim",
  },
  {
    id: "10746",
    zip: "82194",
    city: "Gröbenzell",
  },
  {
    id: "10747",
    zip: "82205",
    city: "Gilching",
  },
  {
    id: "13184",
    zip: "82211",
    city: "Herrsching am Ammersee",
  },
  {
    id: "10748",
    zip: "82216",
    city: "Maisach",
  },
  {
    id: "10749",
    zip: "82223",
    city: "Eichenau",
  },
  {
    id: "10750",
    zip: "82229",
    city: "Seefeld",
  },
  {
    id: "10751",
    zip: "82234",
    city: "Weßling",
  },
  {
    id: "10752",
    zip: "82237",
    city: "Wörthsee",
  },
  {
    id: "10753",
    zip: "82239",
    city: "Alling",
  },
  {
    id: "10754",
    zip: "82256",
    city: "Fürstenfeldbruck",
  },
  {
    id: "13185",
    zip: "82266",
    city: "Inning am Ammersee",
  },
  {
    id: "10755",
    zip: "82269",
    city: "Geltendorf",
  },
  {
    id: "10756",
    zip: "82272",
    city: "Moorenweis",
  },
  {
    id: "10757",
    zip: "82275",
    city: "Emmering",
  },
  {
    id: "10758",
    zip: "82276",
    city: "Adelshofen",
  },
  {
    id: "10759",
    zip: "82278",
    city: "Althegnenberg",
  },
  {
    id: "13186",
    zip: "82279",
    city: "Eching am Ammersee",
  },
  {
    id: "10760",
    zip: "82281",
    city: "Egenhofen",
  },
  {
    id: "10761",
    zip: "82282",
    city: "Egenhofen",
  },
  {
    id: "10762",
    zip: "82284",
    city: "Grafrath",
  },
  {
    id: "10763",
    zip: "82285",
    city: "Hattenhofen",
  },
  {
    id: "10764",
    zip: "82287",
    city: "Jesenwang",
  },
  {
    id: "10765",
    zip: "82288",
    city: "Kottgeisering",
  },
  {
    id: "10766",
    zip: "82290",
    city: "Landsberied",
  },
  {
    id: "10767",
    zip: "82291",
    city: "Mammendorf",
  },
  {
    id: "10768",
    zip: "82293",
    city: "Mittelstetten",
  },
  {
    id: "10769",
    zip: "82294",
    city: "Oberschweinbach",
  },
  {
    id: "10770",
    zip: "82296",
    city: "Schöngeising",
  },
  {
    id: "10771",
    zip: "82297",
    city: "Steindorf",
  },
  {
    id: "10772",
    zip: "82299",
    city: "Türkenfeld",
  },
  {
    id: "10773",
    zip: "82319",
    city: "Starnberg",
  },
  {
    id: "10774",
    zip: "82327",
    city: "Tutzing",
  },
  {
    id: "10775",
    zip: "82335",
    city: "Berg",
  },
  {
    id: "10776",
    zip: "82340",
    city: "Feldafing",
  },
  {
    id: "10777",
    zip: "82343",
    city: "Pöcking",
  },
  {
    id: "10778",
    zip: "82346",
    city: "Andechs",
  },
  {
    id: "10779",
    zip: "82347",
    city: "Bernried",
  },
  {
    id: "10780",
    zip: "82349",
    city: "Krailling",
  },
  {
    id: "13187",
    zip: "82362",
    city: "Weilheim in Oberbayern",
  },
  {
    id: "10782",
    zip: "82377",
    city: "Penzberg",
  },
  {
    id: "10783",
    zip: "82380",
    city: "Peißenberg",
  },
  {
    id: "10784",
    zip: "82383",
    city: "Hohenpeißenberg",
  },
  {
    id: "10785",
    zip: "82386",
    city: "Huglfing",
  },
  {
    id: "10781",
    zip: "82387",
    city: "Antdorf",
  },
  {
    id: "10786",
    zip: "82389",
    city: "Böbing",
  },
  {
    id: "10787",
    zip: "82390",
    city: "Eberfing",
  },
  {
    id: "10788",
    zip: "82392",
    city: "Habach",
  },
  {
    id: "10789",
    zip: "82393",
    city: "Iffeldorf",
  },
  {
    id: "10790",
    zip: "82395",
    city: "Obersöchering",
  },
  {
    id: "10791",
    zip: "82396",
    city: "Pähl",
  },
  {
    id: "10792",
    zip: "82398",
    city: "Polling",
  },
  {
    id: "10793",
    zip: "82399",
    city: "Raisting",
  },
  {
    id: "10794",
    zip: "82401",
    city: "Rottenbuch",
  },
  {
    id: "10795",
    zip: "82402",
    city: "Seeshaupt",
  },
  {
    id: "10796",
    zip: "82404",
    city: "Sindelsdorf",
  },
  {
    id: "10797",
    zip: "82405",
    city: "Wessobrunn",
  },
  {
    id: "10798",
    zip: "82407",
    city: "Wielenbach",
  },
  {
    id: "10799",
    zip: "82409",
    city: "Wildsteig",
  },
  {
    id: "13188",
    zip: "82418",
    city: "Murnau am Staffelsee",
  },
  {
    id: "13189",
    zip: "82431",
    city: "Kochel am See",
  },
  {
    id: "13190",
    zip: "82432",
    city: "Kochel am See",
  },
  {
    id: "10800",
    zip: "82433",
    city: "Bad Kohlgrub",
  },
  {
    id: "10801",
    zip: "82435",
    city: "Bayersoien",
  },
  {
    id: "10802",
    zip: "82436",
    city: "Eglfing",
  },
  {
    id: "10803",
    zip: "82438",
    city: "Eschenlohe",
  },
  {
    id: "10804",
    zip: "82439",
    city: "Großweil",
  },
  {
    id: "10805",
    zip: "82441",
    city: "Ohlstadt",
  },
  {
    id: "10806",
    zip: "82442",
    city: "Saulgrub",
  },
  {
    id: "10807",
    zip: "82444",
    city: "Schlehdorf",
  },
  {
    id: "10808",
    zip: "82445",
    city: "Schwaigen",
  },
  {
    id: "10809",
    zip: "82447",
    city: "Spatzenhausen",
  },
  {
    id: "13191",
    zip: "82449",
    city: "Uffing am Staffelsee",
  },
  {
    id: "10810",
    zip: "82467",
    city: "Garmisch-Partenkirchen",
  },
  {
    id: "10811",
    zip: "82475",
    city: "Garmisch-Partenkirchen",
  },
  {
    id: "10812",
    zip: "82481",
    city: "Mittenwald",
  },
  {
    id: "10813",
    zip: "82487",
    city: "Oberammergau",
  },
  {
    id: "10814",
    zip: "82488",
    city: "Ettal",
  },
  {
    id: "10815",
    zip: "82490",
    city: "Farchant",
  },
  {
    id: "10816",
    zip: "82491",
    city: "Grainau",
  },
  {
    id: "10817",
    zip: "82493",
    city: "Krün",
  },
  {
    id: "10818",
    zip: "82494",
    city: "Krün",
  },
  {
    id: "10819",
    zip: "82496",
    city: "Oberau",
  },
  {
    id: "10820",
    zip: "82497",
    city: "Unterammergau",
  },
  {
    id: "10821",
    zip: "82499",
    city: "Wallgau",
  },
  {
    id: "10823",
    zip: "82515",
    city: "Wolfratshausen",
  },
  {
    id: "10824",
    zip: "82538",
    city: "Geretsried",
  },
  {
    id: "10825",
    zip: "82541",
    city: "Münsing",
  },
  {
    id: "10826",
    zip: "82544",
    city: "Egling",
  },
  {
    id: "10827",
    zip: "82547",
    city: "Eurasburg",
  },
  {
    id: "10828",
    zip: "82549",
    city: "Königsdorf",
  },
  {
    id: "10829",
    zip: "83022",
    city: "Rosenheim",
  },
  {
    id: "10830",
    zip: "83024",
    city: "Rosenheim",
  },
  {
    id: "10831",
    zip: "83026",
    city: "Rosenheim",
  },
  {
    id: "10832",
    zip: "83043",
    city: "Bad Aibling",
  },
  {
    id: "10833",
    zip: "83052",
    city: "Bruckmühl",
  },
  {
    id: "10834",
    zip: "83059",
    city: "Kolbermoor",
  },
  {
    id: "10835",
    zip: "83064",
    city: "Raubling",
  },
  {
    id: "10836",
    zip: "83071",
    city: "Stephanskirchen",
  },
  {
    id: "10837",
    zip: "83075",
    city: "Bad Feilnbach",
  },
  {
    id: "10838",
    zip: "83080",
    city: "Oberaudorf",
  },
  {
    id: "10822",
    zip: "83083",
    city: "Riedering",
  },
  {
    id: "10839",
    zip: "83088",
    city: "Kiefersfelden",
  },
  {
    id: "10840",
    zip: "83093",
    city: "Bad Endorf",
  },
  {
    id: "10841",
    zip: "83098",
    city: "Brannenburg",
  },
  {
    id: "10842",
    zip: "83101",
    city: "Rohrdorf",
  },
  {
    id: "10843",
    zip: "83104",
    city: "Tuntenhausen",
  },
  {
    id: "10844",
    zip: "83109",
    city: "Großkarolinenfeld",
  },
  {
    id: "10845",
    zip: "83112",
    city: "Frasdorf",
  },
  {
    id: "10846",
    zip: "83115",
    city: "Neubeuern",
  },
  {
    id: "10847",
    zip: "83119",
    city: "Obing",
  },
  {
    id: "10848",
    zip: "83122",
    city: "Samerberg",
  },
  {
    id: "10849",
    zip: "83123",
    city: "Amerang",
  },
  {
    id: "10850",
    zip: "83125",
    city: "Eggstätt",
  },
  {
    id: "13192",
    zip: "83126",
    city: "Flintsbach am Inn",
  },
  {
    id: "10851",
    zip: "83128",
    city: "Halfing",
  },
  {
    id: "10852",
    zip: "83129",
    city: "Höslwang",
  },
  {
    id: "13193",
    zip: "83131",
    city: "Nußdorf am Inn",
  },
  {
    id: "10853",
    zip: "83132",
    city: "Pittenhart",
  },
  {
    id: "10854",
    zip: "83134",
    city: "Prutting",
  },
  {
    id: "10855",
    zip: "83135",
    city: "Schechen",
  },
  {
    id: "10856",
    zip: "83137",
    city: "Schonstett",
  },
  {
    id: "10857",
    zip: "83139",
    city: "Söchtenau",
  },
  {
    id: "13194",
    zip: "83209",
    city: "Prien am Chiemsee",
  },
  {
    id: "10858",
    zip: "83224",
    city: "Grassau",
  },
  {
    id: "13195",
    zip: "83229",
    city: "Aschau im Chiemgau",
  },
  {
    id: "13196",
    zip: "83233",
    city: "Bernau am Chiemsee",
  },
  {
    id: "10859",
    zip: "83236",
    city: "Übersee",
  },
  {
    id: "10860",
    zip: "83242",
    city: "Reit im Winkl",
  },
  {
    id: "10861",
    zip: "83246",
    city: "Unterwössen",
  },
  {
    id: "10862",
    zip: "83250",
    city: "Marquartstein",
  },
  {
    id: "10863",
    zip: "83253",
    city: "Rimsting",
  },
  {
    id: "13197",
    zip: "83254",
    city: "Breitbrunn am Chiemsee",
  },
  {
    id: "10864",
    zip: "83256",
    city: "Chiemsee",
  },
  {
    id: "13198",
    zip: "83257",
    city: "Gstadt am Chiemsee",
  },
  {
    id: "10865",
    zip: "83259",
    city: "Schleching",
  },
  {
    id: "10866",
    zip: "83278",
    city: "Traunstein",
  },
  {
    id: "10867",
    zip: "83301",
    city: "Traunreut",
  },
  {
    id: "10868",
    zip: "83308",
    city: "Trostberg",
  },
  {
    id: "10869",
    zip: "83313",
    city: "Siegsdorf",
  },
  {
    id: "10870",
    zip: "83317",
    city: "Teisendorf",
  },
  {
    id: "10871",
    zip: "83324",
    city: "Ruhpolding",
  },
  {
    id: "13199",
    zip: "83329",
    city: "Waging am See",
  },
  {
    id: "10872",
    zip: "83334",
    city: "Inzell",
  },
  {
    id: "10873",
    zip: "83339",
    city: "Chieming",
  },
  {
    id: "10874",
    zip: "83342",
    city: "Tacherting",
  },
  {
    id: "10875",
    zip: "83346",
    city: "Bergen",
  },
  {
    id: "10876",
    zip: "83349",
    city: "Palling",
  },
  {
    id: "13200",
    zip: "83352",
    city: "Altenmarkt an der Alz",
  },
  {
    id: "10877",
    zip: "83355",
    city: "Grabenstätt",
  },
  {
    id: "10878",
    zip: "83358",
    city: "Seeon-Seebruck",
  },
  {
    id: "10879",
    zip: "83359",
    city: "Surberg",
  },
  {
    id: "10880",
    zip: "83361",
    city: "Kienberg",
  },
  {
    id: "10881",
    zip: "83362",
    city: "Surberg",
  },
  {
    id: "10882",
    zip: "83364",
    city: "Teisendorf",
  },
  {
    id: "10883",
    zip: "83365",
    city: "Nußdorf",
  },
  {
    id: "10885",
    zip: "83367",
    city: "Petting",
  },
  {
    id: "10886",
    zip: "83368",
    city: "Traunreut",
  },
  {
    id: "10887",
    zip: "83370",
    city: "Seeon-Seebruck",
  },
  {
    id: "10888",
    zip: "83371",
    city: "Traunreut",
  },
  {
    id: "13201",
    zip: "83373",
    city: "Taching am See",
  },
  {
    id: "10884",
    zip: "83374",
    city: "Traunreut",
  },
  {
    id: "10889",
    zip: "83376",
    city: "Seeon-Seebruck",
  },
  {
    id: "10890",
    zip: "83377",
    city: "Vachendorf",
  },
  {
    id: "10891",
    zip: "83379",
    city: "Wonneberg",
  },
  {
    id: "10892",
    zip: "83395",
    city: "Freilassing",
  },
  {
    id: "10893",
    zip: "83404",
    city: "Ainring",
  },
  {
    id: "10894",
    zip: "83410",
    city: "Laufen",
  },
  {
    id: "10895",
    zip: "83413",
    city: "Fridolfing",
  },
  {
    id: "10896",
    zip: "83416",
    city: "Saaldorf",
  },
  {
    id: "10897",
    zip: "83417",
    city: "Kirchanschöring",
  },
  {
    id: "10898",
    zip: "83435",
    city: "Bad Reichenhall",
  },
  {
    id: "10899",
    zip: "83451",
    city: "Piding",
  },
  {
    id: "10900",
    zip: "83454",
    city: "Anger",
  },
  {
    id: "10901",
    zip: "83457",
    city: "Bayerisch Gmain",
  },
  {
    id: "10902",
    zip: "83458",
    city: "Schneizlreuth",
  },
  {
    id: "10903",
    zip: "83471",
    city: "Berchtesgaden",
  },
  {
    id: "10904",
    zip: "83483",
    city: "Bischofswiesen",
  },
  {
    id: "13202",
    zip: "83486",
    city: "Ramsau bei Berchtesgaden",
  },
  {
    id: "10905",
    zip: "83487",
    city: "Marktschellenberg",
  },
  {
    id: "10906",
    zip: "83489",
    city: "Bischofswiesen",
  },
  {
    id: "13203",
    zip: "83512",
    city: "Wasserburg am Inn",
  },
  {
    id: "13204",
    zip: "83527",
    city: "Haag in Oberbayern",
  },
  {
    id: "10907",
    zip: "83530",
    city: "Schnaitsee",
  },
  {
    id: "10908",
    zip: "83533",
    city: "Edling",
  },
  {
    id: "13205",
    zip: "83536",
    city: "Gars am Inn",
  },
  {
    id: "10909",
    zip: "83539",
    city: "Pfaffing",
  },
  {
    id: "13209",
    zip: "83543",
    city: "Rott am Inn",
  },
  {
    id: "10910",
    zip: "83544",
    city: "Albaching",
  },
  {
    id: "13206",
    zip: "83546",
    city: "Gars am Inn",
  },
  {
    id: "10911",
    zip: "83547",
    city: "Babensham",
  },
  {
    id: "10912",
    zip: "83549",
    city: "Eiselfing",
  },
  {
    id: "10913",
    zip: "83550",
    city: "Emmering",
  },
  {
    id: "10914",
    zip: "83552",
    city: "Amerang",
  },
  {
    id: "10915",
    zip: "83553",
    city: "Frauenneuharting",
  },
  {
    id: "13207",
    zip: "83555",
    city: "Gars am Inn",
  },
  {
    id: "10916",
    zip: "83556",
    city: "Griesstätt",
  },
  {
    id: "10917",
    zip: "83558",
    city: "Maitenbeth",
  },
  {
    id: "13208",
    zip: "83559",
    city: "Gars am Inn",
  },
  {
    id: "10918",
    zip: "83561",
    city: "Ramerberg",
  },
  {
    id: "10919",
    zip: "83562",
    city: "Rechtmehring",
  },
  {
    id: "10920",
    zip: "83564",
    city: "Soyen",
  },
  {
    id: "10921",
    zip: "83565",
    city: "Frauenneuharting",
  },
  {
    id: "10922",
    zip: "83567",
    city: "Unterreit",
  },
  {
    id: "10923",
    zip: "83569",
    city: "Vogtareuth",
  },
  {
    id: "10924",
    zip: "83607",
    city: "Holzkirchen",
  },
  {
    id: "10925",
    zip: "83620",
    city: "Feldkirchen-Westerham",
  },
  {
    id: "10926",
    zip: "83623",
    city: "Dietramszell",
  },
  {
    id: "10927",
    zip: "83624",
    city: "Otterfing",
  },
  {
    id: "10928",
    zip: "83626",
    city: "Valley",
  },
  {
    id: "10929",
    zip: "83627",
    city: "Warngau",
  },
  {
    id: "10930",
    zip: "83629",
    city: "Weyarn",
  },
  {
    id: "10931",
    zip: "83646",
    city: "Bad Tölz",
  },
  {
    id: "10932",
    zip: "83661",
    city: "Lenggries",
  },
  {
    id: "10933",
    zip: "83666",
    city: "Waakirchen",
  },
  {
    id: "10934",
    zip: "83670",
    city: "Bad Heilbrunn",
  },
  {
    id: "10935",
    zip: "83671",
    city: "Benediktbeuern",
  },
  {
    id: "10936",
    zip: "83673",
    city: "Bichl",
  },
  {
    id: "10937",
    zip: "83674",
    city: "Gaißach",
  },
  {
    id: "10938",
    zip: "83676",
    city: "Jachenau",
  },
  {
    id: "10939",
    zip: "83677",
    city: "Reichersbeuern",
  },
  {
    id: "10940",
    zip: "83679",
    city: "Sachsenkam",
  },
  {
    id: "10941",
    zip: "83684",
    city: "Tegernsee",
  },
  {
    id: "10942",
    zip: "83700",
    city: "Rottach-Egern",
  },
  {
    id: "13210",
    zip: "83703",
    city: "Gmund am Tegernsee",
  },
  {
    id: "10943",
    zip: "83707",
    city: "Bad Wiessee",
  },
  {
    id: "10945",
    zip: "83708",
    city: "Kreuth",
  },
  {
    id: "10946",
    zip: "83714",
    city: "Miesbach",
  },
  {
    id: "10947",
    zip: "83727",
    city: "Schliersee",
  },
  {
    id: "10948",
    zip: "83730",
    city: "Fischbachau",
  },
  {
    id: "10949",
    zip: "83734",
    city: "Hausham",
  },
  {
    id: "10944",
    zip: "83735",
    city: "Bayrischzell",
  },
  {
    id: "10950",
    zip: "83737",
    city: "Irschenberg",
  },
  {
    id: "10951",
    zip: "83739",
    city: "Irschenberg",
  },
  {
    id: "10952",
    zip: "84028",
    city: "Landshut",
  },
  {
    id: "10953",
    zip: "84030",
    city: "Ergolding",
  },
  {
    id: "10954",
    zip: "84032",
    city: "Altdorf",
  },
  {
    id: "10955",
    zip: "84034",
    city: "Landshut",
  },
  {
    id: "10956",
    zip: "84036",
    city: "Landshut",
  },
  {
    id: "10957",
    zip: "84048",
    city: "Mainburg",
  },
  {
    id: "10958",
    zip: "84051",
    city: "Essenbach",
  },
  {
    id: "13211",
    zip: "84056",
    city: "Rottenburg an der Laaber",
  },
  {
    id: "10959",
    zip: "84061",
    city: "Ergoldsbach",
  },
  {
    id: "10960",
    zip: "84066",
    city: "Mallersdorf-Pfaffenberg",
  },
  {
    id: "10961",
    zip: "84069",
    city: "Schierling",
  },
  {
    id: "13212",
    zip: "84072",
    city: "Au in der Hallertau",
  },
  {
    id: "10962",
    zip: "84076",
    city: "Pfeffenhausen",
  },
  {
    id: "10963",
    zip: "84079",
    city: "Bruckberg",
  },
  {
    id: "10964",
    zip: "84082",
    city: "Laberweinting",
  },
  {
    id: "10965",
    zip: "84085",
    city: "Langquaid",
  },
  {
    id: "13213",
    zip: "84088",
    city: "Neufahrn in Niederbayern",
  },
  {
    id: "10966",
    zip: "84089",
    city: "Aiglsbach",
  },
  {
    id: "10967",
    zip: "84091",
    city: "Attenhofen",
  },
  {
    id: "13214",
    zip: "84092",
    city: "Bayerbach bei Ergoldsbach",
  },
  {
    id: "10968",
    zip: "84094",
    city: "Elsendorf",
  },
  {
    id: "10969",
    zip: "84095",
    city: "Furth",
  },
  {
    id: "10970",
    zip: "84097",
    city: "Herrngiersdorf",
  },
  {
    id: "10971",
    zip: "84098",
    city: "Hohenthann",
  },
  {
    id: "10972",
    zip: "84100",
    city: "Niederaichbach",
  },
  {
    id: "10973",
    zip: "84101",
    city: "Obersüßbach",
  },
  {
    id: "10974",
    zip: "84103",
    city: "Postau",
  },
  {
    id: "10976",
    zip: "84104",
    city: "Rudelzhausen",
  },
  {
    id: "10977",
    zip: "84106",
    city: "Volkenschwand",
  },
  {
    id: "10978",
    zip: "84107",
    city: "Weihmichl",
  },
  {
    id: "13215",
    zip: "84109",
    city: "Wörth an der Isar",
  },
  {
    id: "10980",
    zip: "84130",
    city: "Dingolfing",
  },
  {
    id: "10981",
    zip: "84137",
    city: "Vilsbiburg",
  },
  {
    id: "10982",
    zip: "84140",
    city: "Gangkofen",
  },
  {
    id: "10983",
    zip: "84144",
    city: "Geisenhausen",
  },
  {
    id: "10979",
    zip: "84149",
    city: "Velden",
  },
  {
    id: "10984",
    zip: "84152",
    city: "Mengkofen",
  },
  {
    id: "10985",
    zip: "84155",
    city: "Bodenkirchen",
  },
  {
    id: "10986",
    zip: "84160",
    city: "Frontenhausen",
  },
  {
    id: "10987",
    zip: "84163",
    city: "Marklkofen",
  },
  {
    id: "10988",
    zip: "84164",
    city: "Moosthenning",
  },
  {
    id: "10989",
    zip: "84166",
    city: "Adlkofen",
  },
  {
    id: "10990",
    zip: "84168",
    city: "Aham",
  },
  {
    id: "10991",
    zip: "84169",
    city: "Altfraunhofen",
  },
  {
    id: "10992",
    zip: "84171",
    city: "Baierbach",
  },
  {
    id: "13216",
    zip: "84172",
    city: "Buch am Erlbach",
  },
  {
    id: "10993",
    zip: "84174",
    city: "Eching",
  },
  {
    id: "10994",
    zip: "84175",
    city: "Gerzen",
  },
  {
    id: "10995",
    zip: "84177",
    city: "Gottfrieding",
  },
  {
    id: "10996",
    zip: "84178",
    city: "Kröning",
  },
  {
    id: "10975",
    zip: "84180",
    city: "Loiching",
  },
  {
    id: "10997",
    zip: "84181",
    city: "Neufraunhofen",
  },
  {
    id: "10998",
    zip: "84183",
    city: "Niederviehbach",
  },
  {
    id: "10999",
    zip: "84184",
    city: "Tiefenbach",
  },
  {
    id: "11000",
    zip: "84186",
    city: "Vilsheim",
  },
  {
    id: "11001",
    zip: "84187",
    city: "Weng",
  },
  {
    id: "11002",
    zip: "84189",
    city: "Wurmsham",
  },
  {
    id: "11003",
    zip: "84307",
    city: "Eggenfelden",
  },
  {
    id: "11004",
    zip: "84323",
    city: "Massing",
  },
  {
    id: "11005",
    zip: "84326",
    city: "Falkenberg",
  },
  {
    id: "11006",
    zip: "84329",
    city: "Wurmannsquick",
  },
  {
    id: "11007",
    zip: "84332",
    city: "Hebertsfelden",
  },
  {
    id: "11008",
    zip: "84333",
    city: "Malgersdorf",
  },
  {
    id: "11009",
    zip: "84335",
    city: "Mitterskirchen",
  },
  {
    id: "11010",
    zip: "84337",
    city: "Schönau",
  },
  {
    id: "11011",
    zip: "84339",
    city: "Unterdietfurt",
  },
  {
    id: "11012",
    zip: "84347",
    city: "Pfarrkirchen",
  },
  {
    id: "13217",
    zip: "84359",
    city: "Simbach am Inn",
  },
  {
    id: "11013",
    zip: "84364",
    city: "Bad Birnbach",
  },
  {
    id: "11014",
    zip: "84367",
    city: "Tann",
  },
  {
    id: "11015",
    zip: "84371",
    city: "Triftern",
  },
  {
    id: "13218",
    zip: "84375",
    city: "Kirchdorf am Inn",
  },
  {
    id: "11016",
    zip: "84378",
    city: "Dietersburg",
  },
  {
    id: "11017",
    zip: "84381",
    city: "Johanniskirchen",
  },
  {
    id: "11018",
    zip: "84384",
    city: "Wittibreut",
  },
  {
    id: "11019",
    zip: "84385",
    city: "Egglham",
  },
  {
    id: "11020",
    zip: "84387",
    city: "Julbach",
  },
  {
    id: "11021",
    zip: "84389",
    city: "Postmünster",
  },
  {
    id: "11022",
    zip: "84405",
    city: "Dorfen",
  },
  {
    id: "11024",
    zip: "84416",
    city: "Taufkirchen (Vils)",
  },
  {
    id: "11025",
    zip: "84419",
    city: "Schwindegg",
  },
  {
    id: "11026",
    zip: "84424",
    city: "Isen",
  },
  {
    id: "11027",
    zip: "84427",
    city: "Sankt Wolfgang",
  },
  {
    id: "11028",
    zip: "84428",
    city: "Buchbach",
  },
  {
    id: "11023",
    zip: "84431",
    city: "Heldenstein",
  },
  {
    id: "11029",
    zip: "84432",
    city: "Hohenpolding",
  },
  {
    id: "11030",
    zip: "84434",
    city: "Kirchberg",
  },
  {
    id: "11031",
    zip: "84435",
    city: "Lengdorf",
  },
  {
    id: "11032",
    zip: "84437",
    city: "Reichertsheim",
  },
  {
    id: "11033",
    zip: "84439",
    city: "Steinkirchen",
  },
  {
    id: "13219",
    zip: "84453",
    city: "Mühldorf am Inn",
  },
  {
    id: "11034",
    zip: "84478",
    city: "Waldkraiburg",
  },
  {
    id: "11035",
    zip: "84489",
    city: "Burghausen",
  },
  {
    id: "11036",
    zip: "84494",
    city: "Neumarkt-Sankt Veit",
  },
  {
    id: "11037",
    zip: "84503",
    city: "Altötting",
  },
  {
    id: "13220",
    zip: "84508",
    city: "Burgkirchen an der Alz",
  },
  {
    id: "13221",
    zip: "84513",
    city: "Töging am Inn",
  },
  {
    id: "13222",
    zip: "84518",
    city: "Garching an der Alz",
  },
  {
    id: "11038",
    zip: "84524",
    city: "Neuötting",
  },
  {
    id: "11039",
    zip: "84529",
    city: "Tittmoning",
  },
  {
    id: "11040",
    zip: "84533",
    city: "Marktl",
  },
  {
    id: "11041",
    zip: "84539",
    city: "Ampfing",
  },
  {
    id: "11042",
    zip: "84543",
    city: "Winhöring",
  },
  {
    id: "13223",
    zip: "84544",
    city: "Aschau am Inn",
  },
  {
    id: "11043",
    zip: "84546",
    city: "Egglkofen",
  },
  {
    id: "11044",
    zip: "84547",
    city: "Emmerting",
  },
  {
    id: "11045",
    zip: "84549",
    city: "Engelsberg",
  },
  {
    id: "13224",
    zip: "84550",
    city: "Feichten an der Alz",
  },
  {
    id: "11046",
    zip: "84552",
    city: "Geratskirchen",
  },
  {
    id: "11047",
    zip: "84553",
    city: "Halsbach",
  },
  {
    id: "11048",
    zip: "84555",
    city: "Jettenbach",
  },
  {
    id: "11049",
    zip: "84556",
    city: "Kastl",
  },
  {
    id: "11050",
    zip: "84558",
    city: "Kirchweidach",
  },
  {
    id: "13225",
    zip: "84559",
    city: "Kraiburg am Inn",
  },
  {
    id: "11051",
    zip: "84561",
    city: "Mehring",
  },
  {
    id: "11052",
    zip: "84562",
    city: "Mettenheim",
  },
  {
    id: "11053",
    zip: "84564",
    city: "Oberbergkirchen",
  },
  {
    id: "11054",
    zip: "84565",
    city: "Oberneukirchen",
  },
  {
    id: "11055",
    zip: "84567",
    city: "Erlbach",
  },
  {
    id: "11056",
    zip: "84568",
    city: "Pleiskirchen",
  },
  {
    id: "11057",
    zip: "84570",
    city: "Polling",
  },
  {
    id: "11058",
    zip: "84571",
    city: "Reischach",
  },
  {
    id: "11059",
    zip: "84573",
    city: "Schönberg",
  },
  {
    id: "11060",
    zip: "84574",
    city: "Taufkirchen",
  },
  {
    id: "11061",
    zip: "84576",
    city: "Teising",
  },
  {
    id: "11062",
    zip: "84577",
    city: "Tüßling",
  },
  {
    id: "11063",
    zip: "84579",
    city: "Unterneukirchen",
  },
  {
    id: "11064",
    zip: "85049",
    city: "Ingolstadt",
  },
  {
    id: "11065",
    zip: "85051",
    city: "Ingolstadt",
  },
  {
    id: "11066",
    zip: "85053",
    city: "Ingolstadt",
  },
  {
    id: "11067",
    zip: "85055",
    city: "Ingolstadt",
  },
  {
    id: "11068",
    zip: "85057",
    city: "Ingolstadt",
  },
  {
    id: "11069",
    zip: "85072",
    city: "Eichstätt",
  },
  {
    id: "11070",
    zip: "85077",
    city: "Manching",
  },
  {
    id: "11071",
    zip: "85080",
    city: "Gaimersheim",
  },
  {
    id: "11072",
    zip: "85084",
    city: "Reichertshofen",
  },
  {
    id: "13226",
    zip: "85088",
    city: "Vohburg an der Donau",
  },
  {
    id: "11073",
    zip: "85092",
    city: "Kösching",
  },
  {
    id: "11074",
    zip: "85095",
    city: "Denkendorf",
  },
  {
    id: "11075",
    zip: "85098",
    city: "Großmehring",
  },
  {
    id: "11076",
    zip: "85101",
    city: "Lenting",
  },
  {
    id: "11077",
    zip: "85104",
    city: "Pförring",
  },
  {
    id: "11078",
    zip: "85107",
    city: "Baar-Ebenhausen",
  },
  {
    id: "11079",
    zip: "85110",
    city: "Kipfenberg",
  },
  {
    id: "11080",
    zip: "85111",
    city: "Adelschlag",
  },
  {
    id: "11081",
    zip: "85113",
    city: "Böhmfeld",
  },
  {
    id: "11082",
    zip: "85114",
    city: "Buxheim",
  },
  {
    id: "11083",
    zip: "85116",
    city: "Egweil",
  },
  {
    id: "11084",
    zip: "85117",
    city: "Eitensheim",
  },
  {
    id: "11085",
    zip: "85119",
    city: "Ernsgaden",
  },
  {
    id: "11086",
    zip: "85120",
    city: "Hepberg",
  },
  {
    id: "11087",
    zip: "85122",
    city: "Hitzhofen",
  },
  {
    id: "11088",
    zip: "85123",
    city: "Karlskron",
  },
  {
    id: "11089",
    zip: "85125",
    city: "Kinding",
  },
  {
    id: "11090",
    zip: "85126",
    city: "Münchsmünster",
  },
  {
    id: "11091",
    zip: "85128",
    city: "Nassenfels",
  },
  {
    id: "11092",
    zip: "85129",
    city: "Oberdolling",
  },
  {
    id: "11093",
    zip: "85131",
    city: "Pollenfeld",
  },
  {
    id: "11094",
    zip: "85132",
    city: "Schernfeld",
  },
  {
    id: "11095",
    zip: "85134",
    city: "Stammham",
  },
  {
    id: "11096",
    zip: "85135",
    city: "Titting",
  },
  {
    id: "11097",
    zip: "85137",
    city: "Walting",
  },
  {
    id: "11098",
    zip: "85139",
    city: "Wettstetten",
  },
  {
    id: "11099",
    zip: "85221",
    city: "Dachau",
  },
  {
    id: "11100",
    zip: "85229",
    city: "Markt Indersdorf",
  },
  {
    id: "11101",
    zip: "85232",
    city: "Bergkirchen",
  },
  {
    id: "11102",
    zip: "85235",
    city: "Odelzhausen",
  },
  {
    id: "11103",
    zip: "85238",
    city: "Petershausen",
  },
  {
    id: "11104",
    zip: "85241",
    city: "Hebertshausen",
  },
  {
    id: "11105",
    zip: "85244",
    city: "Röhrmoos",
  },
  {
    id: "11106",
    zip: "85247",
    city: "Schwabhausen",
  },
  {
    id: "11107",
    zip: "85250",
    city: "Altomünster",
  },
  {
    id: "11108",
    zip: "85253",
    city: "Erdweg",
  },
  {
    id: "11109",
    zip: "85254",
    city: "Sulzemoos",
  },
  {
    id: "11110",
    zip: "85256",
    city: "Vierkirchen",
  },
  {
    id: "11111",
    zip: "85258",
    city: "Weichs",
  },
  {
    id: "11112",
    zip: "85259",
    city: "Sulzemoos",
  },
  {
    id: "13227",
    zip: "85276",
    city: "Pfaffenhofen an der Ilm",
  },
  {
    id: "11113",
    zip: "85283",
    city: "Wolnzach",
  },
  {
    id: "11114",
    zip: "85290",
    city: "Geisenfeld",
  },
  {
    id: "11115",
    zip: "85293",
    city: "Reichertshausen",
  },
  {
    id: "11116",
    zip: "85296",
    city: "Rohrbach",
  },
  {
    id: "11117",
    zip: "85298",
    city: "Scheyern",
  },
  {
    id: "11118",
    zip: "85301",
    city: "Schweitenkirchen",
  },
  {
    id: "11119",
    zip: "85302",
    city: "Gerolsbach",
  },
  {
    id: "11120",
    zip: "85304",
    city: "Ilmmünster",
  },
  {
    id: "11121",
    zip: "85305",
    city: "Jetzendorf",
  },
  {
    id: "11122",
    zip: "85307",
    city: "Paunzhausen",
  },
  {
    id: "11123",
    zip: "85309",
    city: "Pörnbach",
  },
  {
    id: "11124",
    zip: "85354",
    city: "Freising",
  },
  {
    id: "11125",
    zip: "85356",
    city: "Freising",
  },
  {
    id: "13228",
    zip: "85368",
    city: "Moosburg an der Isar",
  },
  {
    id: "13229",
    zip: "85375",
    city: "Neufahrn bei Freising",
  },
  {
    id: "13230",
    zip: "85376",
    city: "Neufahrn bei Freising",
  },
  {
    id: "11126",
    zip: "85386",
    city: "Eching",
  },
  {
    id: "11127",
    zip: "85391",
    city: "Allershausen",
  },
  {
    id: "11128",
    zip: "85395",
    city: "Attenkirchen",
  },
  {
    id: "11129",
    zip: "85399",
    city: "Hallbergmoos",
  },
  {
    id: "11130",
    zip: "85402",
    city: "Kranzberg",
  },
  {
    id: "11131",
    zip: "85405",
    city: "Nandlstadt",
  },
  {
    id: "11132",
    zip: "85406",
    city: "Zolling",
  },
  {
    id: "11133",
    zip: "85408",
    city: "Gammelsdorf",
  },
  {
    id: "13231",
    zip: "85410",
    city: "Haag an der Amper",
  },
  {
    id: "11134",
    zip: "85411",
    city: "Hohenkammer",
  },
  {
    id: "11135",
    zip: "85413",
    city: "Hörgertshausen",
  },
  {
    id: "13232",
    zip: "85414",
    city: "Kirchdorf an der Amper",
  },
  {
    id: "11136",
    zip: "85416",
    city: "Langenbach",
  },
  {
    id: "11137",
    zip: "85417",
    city: "Marzling",
  },
  {
    id: "11138",
    zip: "85419",
    city: "Mauern",
  },
  {
    id: "11139",
    zip: "85435",
    city: "Erding",
  },
  {
    id: "11140",
    zip: "85445",
    city: "Oberding",
  },
  {
    id: "11141",
    zip: "85447",
    city: "Fraunberg",
  },
  {
    id: "11142",
    zip: "85452",
    city: "Moosinning",
  },
  {
    id: "11143",
    zip: "85456",
    city: "Wartenberg",
  },
  {
    id: "11144",
    zip: "85457",
    city: "Wörth",
  },
  {
    id: "11145",
    zip: "85459",
    city: "Berglern",
  },
  {
    id: "11146",
    zip: "85461",
    city: "Bockhorn",
  },
  {
    id: "11147",
    zip: "85462",
    city: "Eitting",
  },
  {
    id: "11148",
    zip: "85464",
    city: "Finsing",
  },
  {
    id: "11149",
    zip: "85465",
    city: "Langenpreising",
  },
  {
    id: "11150",
    zip: "85467",
    city: "Neuching",
  },
  {
    id: "11151",
    zip: "85469",
    city: "Walpertskirchen",
  },
  {
    id: "11152",
    zip: "85521",
    city: "Ottobrunn",
  },
  {
    id: "11153",
    zip: "85540",
    city: "Haar",
  },
  {
    id: "13233",
    zip: "85551",
    city: "Kirchheim bei München",
  },
  {
    id: "11154",
    zip: "85560",
    city: "Ebersberg",
  },
  {
    id: "13234",
    zip: "85567",
    city: "Grafing bei München",
  },
  {
    id: "11155",
    zip: "85570",
    city: "Markt Schwaben",
  },
  {
    id: "11156",
    zip: "85579",
    city: "Neubiberg",
  },
  {
    id: "11157",
    zip: "85586",
    city: "Poing",
  },
  {
    id: "11158",
    zip: "85591",
    city: "Vaterstetten",
  },
  {
    id: "11159",
    zip: "85598",
    city: "Zorneding",
  },
  {
    id: "11160",
    zip: "85599",
    city: "Vaterstetten",
  },
  {
    id: "11161",
    zip: "85604",
    city: "Zorneding",
  },
  {
    id: "11162",
    zip: "85609",
    city: "Aschheim",
  },
  {
    id: "11163",
    zip: "85614",
    city: "Kirchseeon",
  },
  {
    id: "11164",
    zip: "85617",
    city: "Aßling",
  },
  {
    id: "11165",
    zip: "85622",
    city: "Feldkirchen",
  },
  {
    id: "11166",
    zip: "85625",
    city: "Glonn",
  },
  {
    id: "11167",
    zip: "85630",
    city: "Grasbrunn",
  },
  {
    id: "11168",
    zip: "85635",
    city: "Höhenkirchen-Siegertsbrunn",
  },
  {
    id: "11169",
    zip: "85640",
    city: "Putzbrunn",
  },
  {
    id: "11170",
    zip: "85643",
    city: "Steinhöring",
  },
  {
    id: "11171",
    zip: "85646",
    city: "Anzing",
  },
  {
    id: "11172",
    zip: "85649",
    city: "Brunnthal",
  },
  {
    id: "11173",
    zip: "85652",
    city: "Pliening",
  },
  {
    id: "11174",
    zip: "85653",
    city: "Aying",
  },
  {
    id: "11175",
    zip: "85655",
    city: "Aying",
  },
  {
    id: "13235",
    zip: "85656",
    city: "Buch am Buchrain",
  },
  {
    id: "11176",
    zip: "85658",
    city: "Egmating",
  },
  {
    id: "11177",
    zip: "85659",
    city: "Forstern",
  },
  {
    id: "11178",
    zip: "85661",
    city: "Forstinning",
  },
  {
    id: "11179",
    zip: "85662",
    city: "Hohenbrunn",
  },
  {
    id: "11180",
    zip: "85664",
    city: "Hohenlinden",
  },
  {
    id: "11181",
    zip: "85665",
    city: "Moosach",
  },
  {
    id: "11182",
    zip: "85667",
    city: "Oberpframmern",
  },
  {
    id: "11183",
    zip: "85669",
    city: "Pastetten",
  },
  {
    id: "11184",
    zip: "85716",
    city: "Unterschleißheim",
  },
  {
    id: "11185",
    zip: "85737",
    city: "Ismaning",
  },
  {
    id: "13236",
    zip: "85748",
    city: "Garching bei München",
  },
  {
    id: "11186",
    zip: "85757",
    city: "Karlsfeld",
  },
  {
    id: "11187",
    zip: "85764",
    city: "Oberschleißheim",
  },
  {
    id: "11188",
    zip: "85774",
    city: "Unterföhring",
  },
  {
    id: "11189",
    zip: "85777",
    city: "Fahrenzhausen",
  },
  {
    id: "11190",
    zip: "85778",
    city: "Haimhausen",
  },
  {
    id: "11191",
    zip: "86150",
    city: "Augsburg",
  },
  {
    id: "11192",
    zip: "86152",
    city: "Augsburg",
  },
  {
    id: "11193",
    zip: "86153",
    city: "Augsburg",
  },
  {
    id: "11194",
    zip: "86154",
    city: "Augsburg",
  },
  {
    id: "11195",
    zip: "86156",
    city: "Augsburg",
  },
  {
    id: "11196",
    zip: "86157",
    city: "Augsburg",
  },
  {
    id: "11197",
    zip: "86159",
    city: "Augsburg",
  },
  {
    id: "11198",
    zip: "86161",
    city: "Augsburg",
  },
  {
    id: "11199",
    zip: "86163",
    city: "Augsburg",
  },
  {
    id: "11200",
    zip: "86165",
    city: "Augsburg",
  },
  {
    id: "11201",
    zip: "86167",
    city: "Augsburg",
  },
  {
    id: "11202",
    zip: "86169",
    city: "Augsburg",
  },
  {
    id: "11203",
    zip: "86179",
    city: "Augsburg",
  },
  {
    id: "11204",
    zip: "86199",
    city: "Augsburg",
  },
  {
    id: "11205",
    zip: "86316",
    city: "Friedberg",
  },
  {
    id: "11206",
    zip: "86343",
    city: "Königsbrunn",
  },
  {
    id: "11207",
    zip: "86356",
    city: "Neusäß",
  },
  {
    id: "11208",
    zip: "86368",
    city: "Gersthofen",
  },
  {
    id: "11209",
    zip: "86381",
    city: "Krumbach (Schwaben)",
  },
  {
    id: "11210",
    zip: "86391",
    city: "Stadtbergen",
  },
  {
    id: "11211",
    zip: "86399",
    city: "Bobingen",
  },
  {
    id: "11212",
    zip: "86405",
    city: "Meitingen",
  },
  {
    id: "11213",
    zip: "86415",
    city: "Mering",
  },
  {
    id: "11214",
    zip: "86420",
    city: "Diedorf",
  },
  {
    id: "11215",
    zip: "86424",
    city: "Dinkelscherben",
  },
  {
    id: "11216",
    zip: "86438",
    city: "Kissing",
  },
  {
    id: "11217",
    zip: "86441",
    city: "Zusmarshausen",
  },
  {
    id: "11218",
    zip: "86444",
    city: "Affing",
  },
  {
    id: "11219",
    zip: "86447",
    city: "Aindling",
  },
  {
    id: "11220",
    zip: "86450",
    city: "Altenmünster",
  },
  {
    id: "11221",
    zip: "86453",
    city: "Dasing",
  },
  {
    id: "11222",
    zip: "86456",
    city: "Gablingen",
  },
  {
    id: "11223",
    zip: "86459",
    city: "Gessertshausen",
  },
  {
    id: "13237",
    zip: "86462",
    city: "Langweid am Lech",
  },
  {
    id: "11224",
    zip: "86465",
    city: "Welden",
  },
  {
    id: "11225",
    zip: "86470",
    city: "Thannhausen",
  },
  {
    id: "11226",
    zip: "86473",
    city: "Ziemetshausen",
  },
  {
    id: "13238",
    zip: "86476",
    city: "Neuburg an der Kammel",
  },
  {
    id: "11227",
    zip: "86477",
    city: "Adelsried",
  },
  {
    id: "11228",
    zip: "86479",
    city: "Aichen",
  },
  {
    id: "11229",
    zip: "86480",
    city: "Aletshausen",
  },
  {
    id: "11230",
    zip: "86482",
    city: "Aystetten",
  },
  {
    id: "11231",
    zip: "86483",
    city: "Balzhausen",
  },
  {
    id: "11232",
    zip: "86485",
    city: "Biberbach",
  },
  {
    id: "11233",
    zip: "86486",
    city: "Bonstetten",
  },
  {
    id: "11234",
    zip: "86488",
    city: "Breitenthal",
  },
  {
    id: "11235",
    zip: "86489",
    city: "Deisenhausen",
  },
  {
    id: "11236",
    zip: "86491",
    city: "Ebershausen",
  },
  {
    id: "13239",
    zip: "86492",
    city: "Egling an der Paar",
  },
  {
    id: "11237",
    zip: "86494",
    city: "Emersacker",
  },
  {
    id: "11238",
    zip: "86495",
    city: "Eurasburg",
  },
  {
    id: "11239",
    zip: "86497",
    city: "Horgau",
  },
  {
    id: "11240",
    zip: "86498",
    city: "Kettershausen",
  },
  {
    id: "11241",
    zip: "86500",
    city: "Kutzenhausen",
  },
  {
    id: "11242",
    zip: "86502",
    city: "Laugna",
  },
  {
    id: "11243",
    zip: "86504",
    city: "Merching",
  },
  {
    id: "11244",
    zip: "86505",
    city: "Münsterhausen",
  },
  {
    id: "11245",
    zip: "86507",
    city: "Oberottmarshausen",
  },
  {
    id: "11246",
    zip: "86508",
    city: "Rehling",
  },
  {
    id: "11247",
    zip: "86510",
    city: "Ried",
  },
  {
    id: "11248",
    zip: "86511",
    city: "Schmiechen",
  },
  {
    id: "11249",
    zip: "86513",
    city: "Ursberg",
  },
  {
    id: "11250",
    zip: "86514",
    city: "Ustersbach",
  },
  {
    id: "11251",
    zip: "86517",
    city: "Wehringen",
  },
  {
    id: "11252",
    zip: "86519",
    city: "Wiesenbach",
  },
  {
    id: "11253",
    zip: "86529",
    city: "Schrobenhausen",
  },
  {
    id: "11254",
    zip: "86551",
    city: "Aichach",
  },
  {
    id: "11255",
    zip: "86554",
    city: "Pöttmes",
  },
  {
    id: "11256",
    zip: "86556",
    city: "Kühbach",
  },
  {
    id: "11257",
    zip: "86558",
    city: "Hohenwart",
  },
  {
    id: "11258",
    zip: "86559",
    city: "Adelzhausen",
  },
  {
    id: "11259",
    zip: "86561",
    city: "Aresing",
  },
  {
    id: "11260",
    zip: "86562",
    city: "Berg im Gau",
  },
  {
    id: "11261",
    zip: "86564",
    city: "Brunnen",
  },
  {
    id: "11262",
    zip: "86565",
    city: "Gachenbach",
  },
  {
    id: "11263",
    zip: "86567",
    city: "Hilgertshausen-Tandern",
  },
  {
    id: "11264",
    zip: "86568",
    city: "Hollenbach",
  },
  {
    id: "11265",
    zip: "86570",
    city: "Inchenhofen",
  },
  {
    id: "11266",
    zip: "86571",
    city: "Langenmosen",
  },
  {
    id: "11267",
    zip: "86573",
    city: "Obergriesbach",
  },
  {
    id: "11268",
    zip: "86574",
    city: "Petersdorf",
  },
  {
    id: "11269",
    zip: "86576",
    city: "Schiltberg",
  },
  {
    id: "11270",
    zip: "86577",
    city: "Sielenbach",
  },
  {
    id: "11271",
    zip: "86579",
    city: "Waidhofen",
  },
  {
    id: "11272",
    zip: "86609",
    city: "Donauwörth",
  },
  {
    id: "13240",
    zip: "86633",
    city: "Neuburg an der Donau",
  },
  {
    id: "11273",
    zip: "86637",
    city: "Wertingen",
  },
  {
    id: "11274",
    zip: "86641",
    city: "Rain",
  },
  {
    id: "11275",
    zip: "86643",
    city: "Rennertshofen",
  },
  {
    id: "11276",
    zip: "86647",
    city: "Buttenwiesen",
  },
  {
    id: "11277",
    zip: "86650",
    city: "Wemding",
  },
  {
    id: "11278",
    zip: "86653",
    city: "Monheim",
  },
  {
    id: "11279",
    zip: "86655",
    city: "Harburg (Schwaben)",
  },
  {
    id: "11280",
    zip: "86657",
    city: "Bissingen",
  },
  {
    id: "11282",
    zip: "86660",
    city: "Tapfheim",
  },
  {
    id: "11283",
    zip: "86663",
    city: "Asbach-Bäumenheim",
  },
  {
    id: "11284",
    zip: "86666",
    city: "Burgheim",
  },
  {
    id: "11285",
    zip: "86668",
    city: "Karlshuld",
  },
  {
    id: "11286",
    zip: "86669",
    city: "Königsmoos",
  },
  {
    id: "11287",
    zip: "86672",
    city: "Thierhaupten",
  },
  {
    id: "11288",
    zip: "86673",
    city: "Bergheim",
  },
  {
    id: "11289",
    zip: "86674",
    city: "Baar",
  },
  {
    id: "11281",
    zip: "86675",
    city: "Buchdorf",
  },
  {
    id: "11290",
    zip: "86676",
    city: "Ehekirchen",
  },
  {
    id: "11291",
    zip: "86678",
    city: "Ehingen",
  },
  {
    id: "11292",
    zip: "86679",
    city: "Ellgau",
  },
  {
    id: "11293",
    zip: "86681",
    city: "Fünfstetten",
  },
  {
    id: "11294",
    zip: "86682",
    city: "Genderkingen",
  },
  {
    id: "11295",
    zip: "86684",
    city: "Holzheim",
  },
  {
    id: "11296",
    zip: "86685",
    city: "Huisheim",
  },
  {
    id: "11297",
    zip: "86687",
    city: "Kaisheim",
  },
  {
    id: "11298",
    zip: "86688",
    city: "Marxheim",
  },
  {
    id: "11299",
    zip: "86690",
    city: "Mertingen",
  },
  {
    id: "11300",
    zip: "86692",
    city: "Münster",
  },
  {
    id: "11301",
    zip: "86694",
    city: "Niederschönenfeld",
  },
  {
    id: "11302",
    zip: "86695",
    city: "Nordendorf",
  },
  {
    id: "11303",
    zip: "86697",
    city: "Oberhausen",
  },
  {
    id: "13241",
    zip: "86698",
    city: "Oberndorf am Lech",
  },
  {
    id: "11304",
    zip: "86700",
    city: "Otting",
  },
  {
    id: "11305",
    zip: "86701",
    city: "Rohrenfels",
  },
  {
    id: "11306",
    zip: "86703",
    city: "Rögling",
  },
  {
    id: "11307",
    zip: "86704",
    city: "Tagmersheim",
  },
  {
    id: "11308",
    zip: "86706",
    city: "Weichering",
  },
  {
    id: "11309",
    zip: "86707",
    city: "Westendorf",
  },
  {
    id: "11310",
    zip: "86709",
    city: "Wolferstadt",
  },
  {
    id: "11311",
    zip: "86720",
    city: "Nördlingen",
  },
  {
    id: "13242",
    zip: "86732",
    city: "Oettingen in Bayern",
  },
  {
    id: "11312",
    zip: "86733",
    city: "Alerheim",
  },
  {
    id: "11313",
    zip: "86735",
    city: "Amerdingen",
  },
  {
    id: "11314",
    zip: "86736",
    city: "Auhausen",
  },
  {
    id: "11315",
    zip: "86738",
    city: "Deiningen",
  },
  {
    id: "11316",
    zip: "86739",
    city: "Ederheim",
  },
  {
    id: "13243",
    zip: "86741",
    city: "Ehingen am Ries",
  },
  {
    id: "11317",
    zip: "86742",
    city: "Fremdingen",
  },
  {
    id: "11318",
    zip: "86744",
    city: "Hainsfarth",
  },
  {
    id: "11319",
    zip: "86745",
    city: "Hohenaltheim",
  },
  {
    id: "11320",
    zip: "86747",
    city: "Maihingen",
  },
  {
    id: "11321",
    zip: "86748",
    city: "Marktoffingen",
  },
  {
    id: "11322",
    zip: "86750",
    city: "Megesheim",
  },
  {
    id: "11323",
    zip: "86751",
    city: "Mönchsdeggingen",
  },
  {
    id: "11324",
    zip: "86753",
    city: "Möttingen",
  },
  {
    id: "11325",
    zip: "86754",
    city: "Munningen",
  },
  {
    id: "11326",
    zip: "86756",
    city: "Reimlingen",
  },
  {
    id: "11327",
    zip: "86757",
    city: "Wallerstein",
  },
  {
    id: "11328",
    zip: "86759",
    city: "Wechingen",
  },
  {
    id: "11329",
    zip: "86807",
    city: "Buchloe",
  },
  {
    id: "11330",
    zip: "86825",
    city: "Bad Wörishofen",
  },
  {
    id: "11331",
    zip: "86830",
    city: "Schwabmünchen",
  },
  {
    id: "11332",
    zip: "86833",
    city: "Ettringen",
  },
  {
    id: "11333",
    zip: "86836",
    city: "Untermeitingen",
  },
  {
    id: "11334",
    zip: "86842",
    city: "Türkheim",
  },
  {
    id: "11335",
    zip: "86845",
    city: "Großaitingen",
  },
  {
    id: "11336",
    zip: "86850",
    city: "Fischach",
  },
  {
    id: "11337",
    zip: "86853",
    city: "Langerringen",
  },
  {
    id: "11338",
    zip: "86854",
    city: "Amberg",
  },
  {
    id: "11339",
    zip: "86856",
    city: "Hiltenfingen",
  },
  {
    id: "11340",
    zip: "86857",
    city: "Hurlach",
  },
  {
    id: "11341",
    zip: "86859",
    city: "Igling",
  },
  {
    id: "11342",
    zip: "86860",
    city: "Jengen",
  },
  {
    id: "11343",
    zip: "86862",
    city: "Lamerdingen",
  },
  {
    id: "11344",
    zip: "86863",
    city: "Langenneufnach",
  },
  {
    id: "11345",
    zip: "86865",
    city: "Markt Wald",
  },
  {
    id: "11346",
    zip: "86866",
    city: "Mickhausen",
  },
  {
    id: "11347",
    zip: "86868",
    city: "Mittelneufnach",
  },
  {
    id: "11348",
    zip: "86869",
    city: "Oberostendorf",
  },
  {
    id: "11349",
    zip: "86871",
    city: "Rammingen",
  },
  {
    id: "11350",
    zip: "86872",
    city: "Scherstetten",
  },
  {
    id: "11351",
    zip: "86874",
    city: "Tussenhausen",
  },
  {
    id: "11352",
    zip: "86875",
    city: "Waal",
  },
  {
    id: "11353",
    zip: "86877",
    city: "Walkertshofen",
  },
  {
    id: "11354",
    zip: "86879",
    city: "Wiedergeltingen",
  },
  {
    id: "13244",
    zip: "86899",
    city: "Landsberg am Lech",
  },
  {
    id: "13245",
    zip: "86911",
    city: "Dießen am Ammersee",
  },
  {
    id: "11355",
    zip: "86916",
    city: "Kaufering",
  },
  {
    id: "13246",
    zip: "86919",
    city: "Utting am Ammersee",
  },
  {
    id: "11356",
    zip: "86920",
    city: "Denklingen",
  },
  {
    id: "11357",
    zip: "86922",
    city: "Eresing",
  },
  {
    id: "11358",
    zip: "86923",
    city: "Finning",
  },
  {
    id: "11359",
    zip: "86925",
    city: "Fuchstal",
  },
  {
    id: "11360",
    zip: "86926",
    city: "Greifenberg",
  },
  {
    id: "11361",
    zip: "86928",
    city: "Hofstetten",
  },
  {
    id: "11362",
    zip: "86929",
    city: "Penzing",
  },
  {
    id: "11363",
    zip: "86931",
    city: "Prittriching",
  },
  {
    id: "11364",
    zip: "86932",
    city: "Pürgen",
  },
  {
    id: "11365",
    zip: "86934",
    city: "Reichling",
  },
  {
    id: "11366",
    zip: "86935",
    city: "Rott",
  },
  {
    id: "11367",
    zip: "86937",
    city: "Scheuring",
  },
  {
    id: "13247",
    zip: "86938",
    city: "Schondorf am Ammersee",
  },
  {
    id: "11368",
    zip: "86940",
    city: "Schwifting",
  },
  {
    id: "11369",
    zip: "86941",
    city: "Eresing",
  },
  {
    id: "11370",
    zip: "86943",
    city: "Thaining",
  },
  {
    id: "11371",
    zip: "86944",
    city: "Unterdießen",
  },
  {
    id: "11372",
    zip: "86946",
    city: "Vilgertshofen",
  },
  {
    id: "11373",
    zip: "86947",
    city: "Weil",
  },
  {
    id: "11374",
    zip: "86949",
    city: "Windach",
  },
  {
    id: "11375",
    zip: "86956",
    city: "Schongau",
  },
  {
    id: "11376",
    zip: "86971",
    city: "Peiting",
  },
  {
    id: "11377",
    zip: "86972",
    city: "Altenstadt",
  },
  {
    id: "11378",
    zip: "86974",
    city: "Apfeldorf",
  },
  {
    id: "11379",
    zip: "86975",
    city: "Bernbeuren",
  },
  {
    id: "11380",
    zip: "86977",
    city: "Burggen",
  },
  {
    id: "11381",
    zip: "86978",
    city: "Hohenfurch",
  },
  {
    id: "11382",
    zip: "86980",
    city: "Ingenried",
  },
  {
    id: "11383",
    zip: "86981",
    city: "Kinsau",
  },
  {
    id: "11384",
    zip: "86983",
    city: "Lechbruck",
  },
  {
    id: "11385",
    zip: "86984",
    city: "Prem",
  },
  {
    id: "11386",
    zip: "86986",
    city: "Schwabbruck",
  },
  {
    id: "11387",
    zip: "86987",
    city: "Schwabsoien",
  },
  {
    id: "11388",
    zip: "86989",
    city: "Steingaden",
  },
  {
    id: "11389",
    zip: "87435",
    city: "Kempten (Allgäu)",
  },
  {
    id: "11390",
    zip: "87437",
    city: "Kempten (Allgäu)",
  },
  {
    id: "11391",
    zip: "87439",
    city: "Kempten (Allgäu)",
  },
  {
    id: "11392",
    zip: "87448",
    city: "Waltenhofen",
  },
  {
    id: "11393",
    zip: "87452",
    city: "Altusried",
  },
  {
    id: "11394",
    zip: "87459",
    city: "Pfronten",
  },
  {
    id: "11395",
    zip: "87463",
    city: "Dietmannsried",
  },
  {
    id: "11396",
    zip: "87466",
    city: "Oy-Mittelberg",
  },
  {
    id: "11397",
    zip: "87471",
    city: "Durach",
  },
  {
    id: "11398",
    zip: "87474",
    city: "Buchenberg",
  },
  {
    id: "11399",
    zip: "87477",
    city: "Sulzberg",
  },
  {
    id: "11400",
    zip: "87480",
    city: "Weitnau",
  },
  {
    id: "11401",
    zip: "87484",
    city: "Nesselwang",
  },
  {
    id: "11402",
    zip: "87487",
    city: "Wiggensbach",
  },
  {
    id: "11403",
    zip: "87488",
    city: "Betzigau",
  },
  {
    id: "11404",
    zip: "87490",
    city: "Haldenwang",
  },
  {
    id: "11405",
    zip: "87493",
    city: "Lauben",
  },
  {
    id: "11406",
    zip: "87494",
    city: "Rückholz",
  },
  {
    id: "11407",
    zip: "87496",
    city: "Untrasried",
  },
  {
    id: "11409",
    zip: "87497",
    city: "Wertach",
  },
  {
    id: "11410",
    zip: "87499",
    city: "Wildpoldsried",
  },
  {
    id: "13248",
    zip: "87509",
    city: "Immenstadt im Allgäu",
  },
  {
    id: "11411",
    zip: "87527",
    city: "Sonthofen",
  },
  {
    id: "11412",
    zip: "87534",
    city: "Oberstaufen",
  },
  {
    id: "13249",
    zip: "87538",
    city: "Fischen im Allgäu",
  },
  {
    id: "11413",
    zip: "87541",
    city: "Hindelang",
  },
  {
    id: "11414",
    zip: "87544",
    city: "Blaichach",
  },
  {
    id: "13250",
    zip: "87545",
    city: "Burgberg im Allgäu",
  },
  {
    id: "11415",
    zip: "87547",
    city: "Missen-Wilhams",
  },
  {
    id: "11416",
    zip: "87549",
    city: "Rettenberg",
  },
  {
    id: "11417",
    zip: "87561",
    city: "Oberstdorf",
  },
  {
    id: "11418",
    zip: "87600",
    city: "Kaufbeuren",
  },
  {
    id: "11419",
    zip: "87616",
    city: "Marktoberdorf",
  },
  {
    id: "11408",
    zip: "87629",
    city: "Füssen",
  },
  {
    id: "11420",
    zip: "87634",
    city: "Obergünzburg",
  },
  {
    id: "11421",
    zip: "87637",
    city: "Seeg",
  },
  {
    id: "11422",
    zip: "87640",
    city: "Biessenhofen",
  },
  {
    id: "11423",
    zip: "87642",
    city: "Halblech",
  },
  {
    id: "11424",
    zip: "87645",
    city: "Schwangau",
  },
  {
    id: "11425",
    zip: "87647",
    city: "Unterthingau",
  },
  {
    id: "11426",
    zip: "87648",
    city: "Aitrang",
  },
  {
    id: "11427",
    zip: "87650",
    city: "Baisweil",
  },
  {
    id: "11428",
    zip: "87651",
    city: "Bidingen",
  },
  {
    id: "11429",
    zip: "87653",
    city: "Eggenthal",
  },
  {
    id: "11430",
    zip: "87654",
    city: "Friesenried",
  },
  {
    id: "11431",
    zip: "87656",
    city: "Germaringen",
  },
  {
    id: "11432",
    zip: "87657",
    city: "Görisried",
  },
  {
    id: "11433",
    zip: "87659",
    city: "Hopferau",
  },
  {
    id: "11434",
    zip: "87660",
    city: "Irsee",
  },
  {
    id: "11435",
    zip: "87662",
    city: "Kaltental",
  },
  {
    id: "11436",
    zip: "87663",
    city: "Lengenwang",
  },
  {
    id: "11437",
    zip: "87665",
    city: "Mauerstetten",
  },
  {
    id: "11438",
    zip: "87666",
    city: "Pforzen",
  },
  {
    id: "11439",
    zip: "87668",
    city: "Rieden",
  },
  {
    id: "11440",
    zip: "87669",
    city: "Rieden am Forggensee",
  },
  {
    id: "11441",
    zip: "87671",
    city: "Ronsberg",
  },
  {
    id: "11442",
    zip: "87672",
    city: "Roßhaupten",
  },
  {
    id: "11443",
    zip: "87674",
    city: "Ruderatshofen",
  },
  {
    id: "13251",
    zip: "87675",
    city: "Stötten am Au",
  },
  {
    id: "11444",
    zip: "87677",
    city: "Stöttwang",
  },
  {
    id: "11445",
    zip: "87679",
    city: "Westendorf",
  },
  {
    id: "11446",
    zip: "87700",
    city: "Memmingen",
  },
  {
    id: "11447",
    zip: "87719",
    city: "Mindelheim",
  },
  {
    id: "11448",
    zip: "87724",
    city: "Ottobeuren",
  },
  {
    id: "11449",
    zip: "87727",
    city: "Babenhausen",
  },
  {
    id: "11450",
    zip: "87730",
    city: "Grönenbach",
  },
  {
    id: "11451",
    zip: "87733",
    city: "Markt Rettenbach",
  },
  {
    id: "11452",
    zip: "87734",
    city: "Benningen",
  },
  {
    id: "11453",
    zip: "87736",
    city: "Böhen",
  },
  {
    id: "11454",
    zip: "87737",
    city: "Boos",
  },
  {
    id: "11455",
    zip: "87739",
    city: "Breitenbrunn",
  },
  {
    id: "11456",
    zip: "87740",
    city: "Buxheim",
  },
  {
    id: "11457",
    zip: "87742",
    city: "Apfeltrach",
  },
  {
    id: "13252",
    zip: "87743",
    city: "Egg an der Günz",
  },
  {
    id: "11458",
    zip: "87745",
    city: "Eppishausen",
  },
  {
    id: "11459",
    zip: "87746",
    city: "Erkheim",
  },
  {
    id: "11460",
    zip: "87748",
    city: "Fellheim",
  },
  {
    id: "11461",
    zip: "87749",
    city: "Hawangen",
  },
  {
    id: "11462",
    zip: "87751",
    city: "Heimertingen",
  },
  {
    id: "11463",
    zip: "87752",
    city: "Holzgünz",
  },
  {
    id: "11464",
    zip: "87754",
    city: "Kammlach",
  },
  {
    id: "11465",
    zip: "87755",
    city: "Kirchhaslach",
  },
  {
    id: "13253",
    zip: "87757",
    city: "Kirchheim im Schwarzwald",
  },
  {
    id: "11466",
    zip: "87758",
    city: "Kronburg",
  },
  {
    id: "11467",
    zip: "87760",
    city: "Lachen",
  },
  {
    id: "11468",
    zip: "87761",
    city: "Lauben",
  },
  {
    id: "11469",
    zip: "87763",
    city: "Lautrach",
  },
  {
    id: "11470",
    zip: "87764",
    city: "Legau",
  },
  {
    id: "11471",
    zip: "87766",
    city: "Memmingerberg",
  },
  {
    id: "11472",
    zip: "87767",
    city: "Niederrieden",
  },
  {
    id: "11473",
    zip: "87769",
    city: "Oberrieden",
  },
  {
    id: "11474",
    zip: "87770",
    city: "Oberschönegg",
  },
  {
    id: "11475",
    zip: "87772",
    city: "Pfaffenhausen",
  },
  {
    id: "11476",
    zip: "87773",
    city: "Pleß",
  },
  {
    id: "11477",
    zip: "87775",
    city: "Salgen",
  },
  {
    id: "11478",
    zip: "87776",
    city: "Sontheim",
  },
  {
    id: "11479",
    zip: "87778",
    city: "Stetten",
  },
  {
    id: "11480",
    zip: "87779",
    city: "Trunkelsberg",
  },
  {
    id: "11481",
    zip: "87781",
    city: "Ungerhausen",
  },
  {
    id: "11482",
    zip: "87782",
    city: "Dirlewang",
  },
  {
    id: "11483",
    zip: "87784",
    city: "Westerheim",
  },
  {
    id: "11484",
    zip: "87785",
    city: "Winterrieden",
  },
  {
    id: "11485",
    zip: "87787",
    city: "Wolfertschwenden",
  },
  {
    id: "11486",
    zip: "87789",
    city: "Woringen",
  },
  {
    id: "11487",
    zip: "88045",
    city: "Friedrichshafen",
  },
  {
    id: "11488",
    zip: "88046",
    city: "Friedrichshafen",
  },
  {
    id: "11489",
    zip: "88048",
    city: "Friedrichshafen",
  },
  {
    id: "11490",
    zip: "88069",
    city: "Tettnang",
  },
  {
    id: "11491",
    zip: "88074",
    city: "Meckenbeuren",
  },
  {
    id: "11492",
    zip: "88079",
    city: "Kressbronn am Bodensee",
  },
  {
    id: "11493",
    zip: "88085",
    city: "Langenargen",
  },
  {
    id: "11494",
    zip: "88090",
    city: "Immenstaad am Bodensee",
  },
  {
    id: "11495",
    zip: "88094",
    city: "Oberteuringen",
  },
  {
    id: "11496",
    zip: "88097",
    city: "Eriskirch",
  },
  {
    id: "11497",
    zip: "88099",
    city: "Neukirch",
  },
  {
    id: "11498",
    zip: "88131",
    city: "Lindau (Bodensee)",
  },
  {
    id: "11499",
    zip: "88138",
    city: "Sigmarszell",
  },
  {
    id: "11500",
    zip: "88142",
    city: "Wasserburg (Bodensee)",
  },
  {
    id: "11501",
    zip: "88145",
    city: "Hergatz",
  },
  {
    id: "11502",
    zip: "88147",
    city: "Achberg",
  },
  {
    id: "11503",
    zip: "88149",
    city: "Nonnenhorn",
  },
  {
    id: "13254",
    zip: "88161",
    city: "Lindenberg im Allgäu",
  },
  {
    id: "11504",
    zip: "88167",
    city: "Röthenbach (Allgäu)",
  },
  {
    id: "11505",
    zip: "88171",
    city: "Weiler-Simmerberg",
  },
  {
    id: "11506",
    zip: "88175",
    city: "Scheidegg",
  },
  {
    id: "11507",
    zip: "88178",
    city: "Heimenkirch",
  },
  {
    id: "11508",
    zip: "88179",
    city: "Oberreute",
  },
  {
    id: "11509",
    zip: "88212",
    city: "Ravensburg",
  },
  {
    id: "11510",
    zip: "88213",
    city: "Ravensburg",
  },
  {
    id: "11511",
    zip: "88214",
    city: "Ravensburg",
  },
  {
    id: "11512",
    zip: "88239",
    city: "Wangen im Allgäu",
  },
  {
    id: "11513",
    zip: "88250",
    city: "Weingarten",
  },
  {
    id: "11514",
    zip: "88255",
    city: "Baienfurt",
  },
  {
    id: "11515",
    zip: "88260",
    city: "Argenbühl",
  },
  {
    id: "11516",
    zip: "88263",
    city: "Horgenzell",
  },
  {
    id: "11517",
    zip: "88267",
    city: "Vogt",
  },
  {
    id: "11518",
    zip: "88271",
    city: "Wilhelmsdorf",
  },
  {
    id: "11519",
    zip: "88273",
    city: "Fronreute",
  },
  {
    id: "11520",
    zip: "88276",
    city: "Berg",
  },
  {
    id: "11522",
    zip: "88279",
    city: "Amtzell",
  },
  {
    id: "11523",
    zip: "88281",
    city: "Schlier",
  },
  {
    id: "11524",
    zip: "88284",
    city: "Wolpertswende",
  },
  {
    id: "11525",
    zip: "88285",
    city: "Bodnegg",
  },
  {
    id: "11526",
    zip: "88287",
    city: "Grünkraut",
  },
  {
    id: "11527",
    zip: "88289",
    city: "Waldburg",
  },
  {
    id: "11528",
    zip: "88299",
    city: "Leutkirch im Allgäu",
  },
  {
    id: "11529",
    zip: "88316",
    city: "Isny im Allgäu",
  },
  {
    id: "11521",
    zip: "88317",
    city: "Aichstetten",
  },
  {
    id: "11530",
    zip: "88319",
    city: "Aitrach",
  },
  {
    id: "11531",
    zip: "88326",
    city: "Aulendorf",
  },
  {
    id: "11532",
    zip: "88339",
    city: "Bad Waldsee",
  },
  {
    id: "11533",
    zip: "88348",
    city: "Saulgau",
  },
  {
    id: "11534",
    zip: "88353",
    city: "Kißlegg",
  },
  {
    id: "11535",
    zip: "88356",
    city: "Ostrach",
  },
  {
    id: "11536",
    zip: "88361",
    city: "Altshausen",
  },
  {
    id: "11537",
    zip: "88364",
    city: "Wolfegg",
  },
  {
    id: "11538",
    zip: "88367",
    city: "Hohentengen",
  },
  {
    id: "11539",
    zip: "88368",
    city: "Bergatreute",
  },
  {
    id: "11540",
    zip: "88370",
    city: "Ebenweiler",
  },
  {
    id: "11541",
    zip: "88371",
    city: "Ebersbach-Musbach",
  },
  {
    id: "11542",
    zip: "88373",
    city: "Fleischwangen",
  },
  {
    id: "11543",
    zip: "88374",
    city: "Hoßkirch",
  },
  {
    id: "11544",
    zip: "88376",
    city: "Königseggwald",
  },
  {
    id: "11545",
    zip: "88377",
    city: "Riedhausen",
  },
  {
    id: "11546",
    zip: "88379",
    city: "Unterwaldhausen",
  },
  {
    id: "11547",
    zip: "88400",
    city: "Biberach an der Riß",
  },
  {
    id: "11548",
    zip: "88410",
    city: "Bad Wurzach",
  },
  {
    id: "11549",
    zip: "88416",
    city: "Ochsenhausen",
  },
  {
    id: "11550",
    zip: "88422",
    city: "Bad Buchau",
  },
  {
    id: "11551",
    zip: "88427",
    city: "Bad Schussenried",
  },
  {
    id: "11552",
    zip: "88430",
    city: "Rot an der Rot",
  },
  {
    id: "11553",
    zip: "88433",
    city: "Schemmerhofen",
  },
  {
    id: "11555",
    zip: "88436",
    city: "Eberhardzell",
  },
  {
    id: "11556",
    zip: "88437",
    city: "Maselheim",
  },
  {
    id: "11557",
    zip: "88441",
    city: "Biberach an der Riß",
  },
  {
    id: "11558",
    zip: "88444",
    city: "Ummendorf",
  },
  {
    id: "11559",
    zip: "88447",
    city: "Warthausen",
  },
  {
    id: "11560",
    zip: "88448",
    city: "Attenweiler",
  },
  {
    id: "11561",
    zip: "88450",
    city: "Berkheim",
  },
  {
    id: "11562",
    zip: "88451",
    city: "Dettingen an der Iller",
  },
  {
    id: "11563",
    zip: "88453",
    city: "Erolzheim",
  },
  {
    id: "11564",
    zip: "88454",
    city: "Hochdorf",
  },
  {
    id: "11565",
    zip: "88456",
    city: "Ingoldingen",
  },
  {
    id: "11566",
    zip: "88457",
    city: "Kirchdorf an der Iller",
  },
  {
    id: "11567",
    zip: "88459",
    city: "Tannheim",
  },
  {
    id: "11568",
    zip: "88471",
    city: "Laupheim",
  },
  {
    id: "11569",
    zip: "88477",
    city: "Schwendi",
  },
  {
    id: "11570",
    zip: "88480",
    city: "Achstetten",
  },
  {
    id: "11571",
    zip: "88481",
    city: "Balzheim",
  },
  {
    id: "11572",
    zip: "88483",
    city: "Burgrieden",
  },
  {
    id: "11573",
    zip: "88484",
    city: "Gutenzell-Hürbel",
  },
  {
    id: "11574",
    zip: "88486",
    city: "Kirchberg an der Iller",
  },
  {
    id: "11575",
    zip: "88487",
    city: "Mietingen",
  },
  {
    id: "11554",
    zip: "88489",
    city: "Wain",
  },
  {
    id: "11576",
    zip: "88499",
    city: "Riedlingen",
  },
  {
    id: "11577",
    zip: "88512",
    city: "Mengen",
  },
  {
    id: "11578",
    zip: "88515",
    city: "Langenenslingen",
  },
  {
    id: "11579",
    zip: "88518",
    city: "Herbertingen",
  },
  {
    id: "11580",
    zip: "88521",
    city: "Ertingen",
  },
  {
    id: "11581",
    zip: "88524",
    city: "Uttenweiler",
  },
  {
    id: "11582",
    zip: "88525",
    city: "Dürmentingen",
  },
  {
    id: "11583",
    zip: "88527",
    city: "Unlingen",
  },
  {
    id: "11584",
    zip: "88529",
    city: "Zwiefalten",
  },
  {
    id: "11585",
    zip: "88605",
    city: "Meßkirch",
  },
  {
    id: "11586",
    zip: "88630",
    city: "Pfullendorf",
  },
  {
    id: "11587",
    zip: "88631",
    city: "Beuron",
  },
  {
    id: "11588",
    zip: "88633",
    city: "Heiligenberg",
  },
  {
    id: "11589",
    zip: "88634",
    city: "Herdwangen-Schönach",
  },
  {
    id: "11590",
    zip: "88636",
    city: "Illmensee",
  },
  {
    id: "11591",
    zip: "88637",
    city: "Leibertingen",
  },
  {
    id: "11592",
    zip: "88639",
    city: "Wald",
  },
  {
    id: "11593",
    zip: "88662",
    city: "Überlingen",
  },
  {
    id: "11594",
    zip: "88677",
    city: "Markdorf",
  },
  {
    id: "11595",
    zip: "88682",
    city: "Salem",
  },
  {
    id: "11596",
    zip: "88690",
    city: "Uhldingen-Mühlhofen",
  },
  {
    id: "11597",
    zip: "88693",
    city: "Deggenhausertal",
  },
  {
    id: "11598",
    zip: "88696",
    city: "Owingen",
  },
  {
    id: "11599",
    zip: "88697",
    city: "Bermatingen",
  },
  {
    id: "11600",
    zip: "88699",
    city: "Frickingen",
  },
  {
    id: "11601",
    zip: "88709",
    city: "Meersburg",
  },
  {
    id: "11602",
    zip: "88718",
    city: "Daisendorf",
  },
  {
    id: "11603",
    zip: "88719",
    city: "Stetten",
  },
  {
    id: "11604",
    zip: "89073",
    city: "Ulm",
  },
  {
    id: "11605",
    zip: "89075",
    city: "Ulm",
  },
  {
    id: "11606",
    zip: "89077",
    city: "Ulm",
  },
  {
    id: "11607",
    zip: "89079",
    city: "Ulm",
  },
  {
    id: "11608",
    zip: "89081",
    city: "Ulm",
  },
  {
    id: "11609",
    zip: "89129",
    city: "Langenau",
  },
  {
    id: "11610",
    zip: "89134",
    city: "Blaustein",
  },
  {
    id: "11611",
    zip: "89143",
    city: "Blaubeuren",
  },
  {
    id: "11612",
    zip: "89150",
    city: "Laichingen",
  },
  {
    id: "11613",
    zip: "89155",
    city: "Erbach",
  },
  {
    id: "11614",
    zip: "89160",
    city: "Dornstadt",
  },
  {
    id: "11615",
    zip: "89165",
    city: "Dietenheim",
  },
  {
    id: "11616",
    zip: "89168",
    city: "Niederstotzingen",
  },
  {
    id: "11617",
    zip: "89171",
    city: "Illerkirchberg",
  },
  {
    id: "11618",
    zip: "89173",
    city: "Lonsee",
  },
  {
    id: "11619",
    zip: "89174",
    city: "Altheim (Alb)",
  },
  {
    id: "11620",
    zip: "89176",
    city: "Asselfingen",
  },
  {
    id: "11621",
    zip: "89177",
    city: "Ballendorf",
  },
  {
    id: "11622",
    zip: "89179",
    city: "Beimerstetten",
  },
  {
    id: "11623",
    zip: "89180",
    city: "Berghülen",
  },
  {
    id: "11624",
    zip: "89182",
    city: "Bernstadt",
  },
  {
    id: "11625",
    zip: "89183",
    city: "Breitingen",
  },
  {
    id: "11626",
    zip: "89185",
    city: "Hüttisheim",
  },
  {
    id: "11627",
    zip: "89186",
    city: "Illerrieden",
  },
  {
    id: "11628",
    zip: "89188",
    city: "Merklingen",
  },
  {
    id: "11629",
    zip: "89189",
    city: "Neenstetten",
  },
  {
    id: "11630",
    zip: "89191",
    city: "Nellingen",
  },
  {
    id: "11631",
    zip: "89192",
    city: "Rammingen",
  },
  {
    id: "11632",
    zip: "89194",
    city: "Schnürpflingen",
  },
  {
    id: "11633",
    zip: "89195",
    city: "Staig",
  },
  {
    id: "11634",
    zip: "89197",
    city: "Weidenstetten",
  },
  {
    id: "11635",
    zip: "89198",
    city: "Westerstetten",
  },
  {
    id: "11636",
    zip: "89231",
    city: "Neu-Ulm",
  },
  {
    id: "11637",
    zip: "89233",
    city: "Neu-Ulm",
  },
  {
    id: "11638",
    zip: "89250",
    city: "Senden",
  },
  {
    id: "11639",
    zip: "89257",
    city: "Illertissen",
  },
  {
    id: "11640",
    zip: "89264",
    city: "Weißenhorn",
  },
  {
    id: "11641",
    zip: "89269",
    city: "Vöhringen",
  },
  {
    id: "11642",
    zip: "89275",
    city: "Elchingen",
  },
  {
    id: "11643",
    zip: "89278",
    city: "Nersingen",
  },
  {
    id: "11644",
    zip: "89281",
    city: "Altenstadt",
  },
  {
    id: "13255",
    zip: "89284",
    city: "Pfaffenhofen an der Roth",
  },
  {
    id: "11645",
    zip: "89287",
    city: "Bellenberg",
  },
  {
    id: "11646",
    zip: "89290",
    city: "Buch",
  },
  {
    id: "11647",
    zip: "89291",
    city: "Holzheim",
  },
  {
    id: "13256",
    zip: "89293",
    city: "Kellmünz an der Iller",
  },
  {
    id: "11648",
    zip: "89294",
    city: "Oberroth",
  },
  {
    id: "11649",
    zip: "89296",
    city: "Osterberg",
  },
  {
    id: "11650",
    zip: "89297",
    city: "Roggenburg",
  },
  {
    id: "11651",
    zip: "89299",
    city: "Unterroth",
  },
  {
    id: "11652",
    zip: "89312",
    city: "Günzburg",
  },
  {
    id: "11653",
    zip: "89331",
    city: "Burgau",
  },
  {
    id: "11654",
    zip: "89335",
    city: "Ichenhausen",
  },
  {
    id: "11655",
    zip: "89340",
    city: "Leipheim",
  },
  {
    id: "11657",
    zip: "89343",
    city: "Jettingen-Scheppach",
  },
  {
    id: "11658",
    zip: "89344",
    city: "Aislingen",
  },
  {
    id: "11659",
    zip: "89346",
    city: "Bibertal",
  },
  {
    id: "11660",
    zip: "89347",
    city: "Bubesheim",
  },
  {
    id: "11661",
    zip: "89349",
    city: "Burtenbach",
  },
  {
    id: "11656",
    zip: "89350",
    city: "Dürrlauingen",
  },
  {
    id: "11662",
    zip: "89352",
    city: "Ellzee",
  },
  {
    id: "11663",
    zip: "89353",
    city: "Glött",
  },
  {
    id: "11664",
    zip: "89355",
    city: "Gundremmingen",
  },
  {
    id: "11665",
    zip: "89356",
    city: "Haldenwang",
  },
  {
    id: "11666",
    zip: "89358",
    city: "Kammeltal",
  },
  {
    id: "11667",
    zip: "89359",
    city: "Kötz",
  },
  {
    id: "11668",
    zip: "89361",
    city: "Landensberg",
  },
  {
    id: "11669",
    zip: "89362",
    city: "Offingen",
  },
  {
    id: "11670",
    zip: "89364",
    city: "Rettenbach",
  },
  {
    id: "11671",
    zip: "89365",
    city: "Röfingen",
  },
  {
    id: "11672",
    zip: "89367",
    city: "Waldstetten",
  },
  {
    id: "11673",
    zip: "89368",
    city: "Winterbach",
  },
  {
    id: "13257",
    zip: "89407",
    city: "Dillingen an der Donau",
  },
  {
    id: "11674",
    zip: "89415",
    city: "Lauingen (Donau)",
  },
  {
    id: "13258",
    zip: "89420",
    city: "Höchstädt an der Donau",
  },
  {
    id: "13259",
    zip: "89423",
    city: "Gundelfingen an der Donau",
  },
  {
    id: "11675",
    zip: "89426",
    city: "Wittislingen",
  },
  {
    id: "11676",
    zip: "89428",
    city: "Syrgenstein",
  },
  {
    id: "11677",
    zip: "89429",
    city: "Bachhagel",
  },
  {
    id: "13260",
    zip: "89431",
    city: "Bächingen an der Brenz",
  },
  {
    id: "11678",
    zip: "89434",
    city: "Blindheim",
  },
  {
    id: "11679",
    zip: "89435",
    city: "Finningen",
  },
  {
    id: "11680",
    zip: "89437",
    city: "Haunsheim",
  },
  {
    id: "11681",
    zip: "89438",
    city: "Holzheim",
  },
  {
    id: "11682",
    zip: "89440",
    city: "Lutzingen",
  },
  {
    id: "11683",
    zip: "89441",
    city: "Medlingen",
  },
  {
    id: "11684",
    zip: "89443",
    city: "Schwenningen",
  },
  {
    id: "11685",
    zip: "89446",
    city: "Ziertheim",
  },
  {
    id: "11686",
    zip: "89447",
    city: "Zöschingen",
  },
  {
    id: "11687",
    zip: "89518",
    city: "Heidenheim an der Brenz",
  },
  {
    id: "11688",
    zip: "89520",
    city: "Heidenheim an der Brenz",
  },
  {
    id: "11689",
    zip: "89522",
    city: "Heidenheim an der Brenz",
  },
  {
    id: "11690",
    zip: "89537",
    city: "Giengen an der Brenz",
  },
  {
    id: "11691",
    zip: "89542",
    city: "Herbrechtingen",
  },
  {
    id: "11692",
    zip: "89547",
    city: "Gerstetten",
  },
  {
    id: "11693",
    zip: "89551",
    city: "Königsbronn",
  },
  {
    id: "11694",
    zip: "89555",
    city: "Steinheim am Albuch",
  },
  {
    id: "11695",
    zip: "89558",
    city: "Böhmenkirch",
  },
  {
    id: "11696",
    zip: "89561",
    city: "Dischingen",
  },
  {
    id: "11697",
    zip: "89564",
    city: "Nattheim",
  },
  {
    id: "11698",
    zip: "89567",
    city: "Sontheim an der Brenz",
  },
  {
    id: "11699",
    zip: "89568",
    city: "Hermaringen",
  },
  {
    id: "11700",
    zip: "89584",
    city: "Ehingen (Donau)",
  },
  {
    id: "11701",
    zip: "89597",
    city: "Munderkingen",
  },
  {
    id: "11702",
    zip: "89601",
    city: "Schelklingen",
  },
  {
    id: "11703",
    zip: "89604",
    city: "Allmendingen",
  },
  {
    id: "11704",
    zip: "89605",
    city: "Altheim",
  },
  {
    id: "11705",
    zip: "89607",
    city: "Emerkingen",
  },
  {
    id: "11706",
    zip: "89608",
    city: "Griesingen",
  },
  {
    id: "11707",
    zip: "89610",
    city: "Oberdischingen",
  },
  {
    id: "11708",
    zip: "89611",
    city: "Obermarchtal",
  },
  {
    id: "11709",
    zip: "89613",
    city: "Oberstadion",
  },
  {
    id: "11710",
    zip: "89614",
    city: "Öpfingen",
  },
  {
    id: "11711",
    zip: "89616",
    city: "Rottenacker",
  },
  {
    id: "11712",
    zip: "89617",
    city: "Untermarchtal",
  },
  {
    id: "11713",
    zip: "89619",
    city: "Unterstadion",
  },
  {
    id: "11714",
    zip: "90402",
    city: "Nürnberg",
  },
  {
    id: "11715",
    zip: "90403",
    city: "Nürnberg",
  },
  {
    id: "11716",
    zip: "90408",
    city: "Nürnberg",
  },
  {
    id: "11717",
    zip: "90409",
    city: "Nürnberg",
  },
  {
    id: "11718",
    zip: "90411",
    city: "Nürnberg",
  },
  {
    id: "11719",
    zip: "90419",
    city: "Nürnberg",
  },
  {
    id: "11720",
    zip: "90425",
    city: "Nürnberg",
  },
  {
    id: "11721",
    zip: "90427",
    city: "Nürnberg",
  },
  {
    id: "11722",
    zip: "90429",
    city: "Nürnberg",
  },
  {
    id: "11725",
    zip: "90431",
    city: "Nürnberg",
  },
  {
    id: "11726",
    zip: "90439",
    city: "Nürnberg",
  },
  {
    id: "11727",
    zip: "90441",
    city: "Nürnberg",
  },
  {
    id: "11728",
    zip: "90443",
    city: "Nürnberg",
  },
  {
    id: "11729",
    zip: "90449",
    city: "Nürnberg",
  },
  {
    id: "11731",
    zip: "90451",
    city: "Nürnberg",
  },
  {
    id: "11732",
    zip: "90453",
    city: "Nürnberg",
  },
  {
    id: "11733",
    zip: "90455",
    city: "Nürnberg",
  },
  {
    id: "11734",
    zip: "90459",
    city: "Nürnberg",
  },
  {
    id: "11735",
    zip: "90461",
    city: "Nürnberg",
  },
  {
    id: "11736",
    zip: "90469",
    city: "Nürnberg",
  },
  {
    id: "11737",
    zip: "90471",
    city: "Nürnberg",
  },
  {
    id: "11738",
    zip: "90473",
    city: "Nürnberg",
  },
  {
    id: "11739",
    zip: "90475",
    city: "Nürnberg",
  },
  {
    id: "11723",
    zip: "90478",
    city: "Nürnberg",
  },
  {
    id: "11724",
    zip: "90480",
    city: "Nürnberg",
  },
  {
    id: "11730",
    zip: "90482",
    city: "Nürnberg",
  },
  {
    id: "11740",
    zip: "90489",
    city: "Nürnberg",
  },
  {
    id: "11741",
    zip: "90491",
    city: "Nürnberg",
  },
  {
    id: "11742",
    zip: "90513",
    city: "Zirndorf",
  },
  {
    id: "13261",
    zip: "90518",
    city: "Altdorf bei Nürnberg",
  },
  {
    id: "11743",
    zip: "90522",
    city: "Oberasbach",
  },
  {
    id: "11744",
    zip: "90530",
    city: "Wendelstein",
  },
  {
    id: "11745",
    zip: "90537",
    city: "Feucht",
  },
  {
    id: "11746",
    zip: "90542",
    city: "Eckental",
  },
  {
    id: "11747",
    zip: "90547",
    city: "Stein",
  },
  {
    id: "13262",
    zip: "90552",
    city: "Röthenbach an der Pegnitz",
  },
  {
    id: "11748",
    zip: "90556",
    city: "Cadolzburg",
  },
  {
    id: "11749",
    zip: "90559",
    city: "Burgthann",
  },
  {
    id: "11750",
    zip: "90562",
    city: "Heroldsberg",
  },
  {
    id: "13263",
    zip: "90571",
    city: "Schwaig bei Nürnberg",
  },
  {
    id: "11751",
    zip: "90574",
    city: "Roßtal",
  },
  {
    id: "11752",
    zip: "90579",
    city: "Langenzenn",
  },
  {
    id: "11753",
    zip: "90584",
    city: "Allersberg",
  },
  {
    id: "11754",
    zip: "90587",
    city: "Veitsbronn",
  },
  {
    id: "11755",
    zip: "90592",
    city: "Schwarzenbruck",
  },
  {
    id: "11756",
    zip: "90596",
    city: "Schwanstetten",
  },
  {
    id: "11757",
    zip: "90599",
    city: "Dietenhofen",
  },
  {
    id: "11758",
    zip: "90602",
    city: "Pyrbaum",
  },
  {
    id: "11759",
    zip: "90607",
    city: "Rückersdorf",
  },
  {
    id: "11760",
    zip: "90610",
    city: "Winkelhaid",
  },
  {
    id: "11761",
    zip: "90613",
    city: "Großhabersdorf",
  },
  {
    id: "11762",
    zip: "90614",
    city: "Ammerndorf",
  },
  {
    id: "13264",
    zip: "90616",
    city: "Neuhof an der Zenn",
  },
  {
    id: "11763",
    zip: "90617",
    city: "Puschendorf",
  },
  {
    id: "11764",
    zip: "90619",
    city: "Trautskirchen",
  },
  {
    id: "11765",
    zip: "90762",
    city: "Fürth",
  },
  {
    id: "11766",
    zip: "90763",
    city: "Fürth",
  },
  {
    id: "11767",
    zip: "90765",
    city: "Fürth",
  },
  {
    id: "11768",
    zip: "90766",
    city: "Fürth",
  },
  {
    id: "11769",
    zip: "90768",
    city: "Fürth",
  },
  {
    id: "11770",
    zip: "91052",
    city: "Erlangen",
  },
  {
    id: "11771",
    zip: "91054",
    city: "Erlangen",
  },
  {
    id: "11772",
    zip: "91056",
    city: "Erlangen",
  },
  {
    id: "11773",
    zip: "91058",
    city: "Erlangen",
  },
  {
    id: "11774",
    zip: "91074",
    city: "Herzogenaurach",
  },
  {
    id: "13265",
    zip: "91077",
    city: "Neunkirchen am Brand",
  },
  {
    id: "11775",
    zip: "91080",
    city: "Uttenreuth",
  },
  {
    id: "11776",
    zip: "91083",
    city: "Baiersdorf",
  },
  {
    id: "11777",
    zip: "91085",
    city: "Weisendorf",
  },
  {
    id: "11778",
    zip: "91086",
    city: "Aurachtal",
  },
  {
    id: "11779",
    zip: "91088",
    city: "Bubenreuth",
  },
  {
    id: "11780",
    zip: "91090",
    city: "Effeltrich",
  },
  {
    id: "11781",
    zip: "91091",
    city: "Großenseebach",
  },
  {
    id: "11782",
    zip: "91093",
    city: "Heßdorf",
  },
  {
    id: "11783",
    zip: "91094",
    city: "Langensendelbach",
  },
  {
    id: "11784",
    zip: "91096",
    city: "Möhrendorf",
  },
  {
    id: "11785",
    zip: "91097",
    city: "Oberreichenbach",
  },
  {
    id: "11786",
    zip: "91099",
    city: "Poxdorf",
  },
  {
    id: "11787",
    zip: "91126",
    city: "Schwabach",
  },
  {
    id: "11788",
    zip: "91154",
    city: "Roth",
  },
  {
    id: "11789",
    zip: "91161",
    city: "Hilpoltstein",
  },
  {
    id: "11790",
    zip: "91166",
    city: "Georgensgmünd",
  },
  {
    id: "11791",
    zip: "91171",
    city: "Greding",
  },
  {
    id: "11792",
    zip: "91174",
    city: "Spalt",
  },
  {
    id: "11793",
    zip: "91177",
    city: "Thalmässing",
  },
  {
    id: "11794",
    zip: "91180",
    city: "Heideck",
  },
  {
    id: "11795",
    zip: "91183",
    city: "Abenberg",
  },
  {
    id: "11796",
    zip: "91186",
    city: "Büchenbach",
  },
  {
    id: "11797",
    zip: "91187",
    city: "Röttenbach",
  },
  {
    id: "11798",
    zip: "91189",
    city: "Rohr",
  },
  {
    id: "13266",
    zip: "91207",
    city: "Lauf an der Pegnitz",
  },
  {
    id: "11799",
    zip: "91217",
    city: "Hersbruck",
  },
  {
    id: "11800",
    zip: "91220",
    city: "Schnaittach",
  },
  {
    id: "11801",
    zip: "91224",
    city: "Pommelsbrunn",
  },
  {
    id: "11802",
    zip: "91227",
    city: "Leinburg",
  },
  {
    id: "11803",
    zip: "91230",
    city: "Happurg",
  },
  {
    id: "13267",
    zip: "91233",
    city: "Neunkirchen am Sand",
  },
  {
    id: "11804",
    zip: "91235",
    city: "Velden",
  },
  {
    id: "11805",
    zip: "91236",
    city: "Alfeld",
  },
  {
    id: "11806",
    zip: "91238",
    city: "Offenhausen",
  },
  {
    id: "11807",
    zip: "91239",
    city: "Henfenfeld",
  },
  {
    id: "11808",
    zip: "91241",
    city: "Kirchensittenbach",
  },
  {
    id: "11813",
    zip: "91242",
    city: "Ottensoos",
  },
  {
    id: "11814",
    zip: "91244",
    city: "Reichenschwand",
  },
  {
    id: "11815",
    zip: "91245",
    city: "Simmelsdorf",
  },
  {
    id: "11816",
    zip: "91247",
    city: "Vorra",
  },
  {
    id: "11817",
    zip: "91249",
    city: "Weigendorf",
  },
  {
    id: "11818",
    zip: "91257",
    city: "Pegnitz",
  },
  {
    id: "13268",
    zip: "91275",
    city: "Auerbach in der Oberpfalz",
  },
  {
    id: "11819",
    zip: "91278",
    city: "Pottenstein",
  },
  {
    id: "11820",
    zip: "91281",
    city: "Kirchenthumbach",
  },
  {
    id: "11821",
    zip: "91282",
    city: "Betzenstein",
  },
  {
    id: "13269",
    zip: "91284",
    city: "Neuhaus an der Pegnitz",
  },
  {
    id: "11822",
    zip: "91286",
    city: "Obertrubach",
  },
  {
    id: "11823",
    zip: "91287",
    city: "Plech",
  },
  {
    id: "11824",
    zip: "91289",
    city: "Schnabelwaid",
  },
  {
    id: "11825",
    zip: "91301",
    city: "Forchheim",
  },
  {
    id: "13270",
    zip: "91315",
    city: "Höchstadt an der Aisch",
  },
  {
    id: "11826",
    zip: "91320",
    city: "Ebermannstadt",
  },
  {
    id: "11809",
    zip: "91322",
    city: "Gräfenberg",
  },
  {
    id: "11810",
    zip: "91325",
    city: "Adelsdorf",
  },
  {
    id: "11811",
    zip: "91327",
    city: "Gößweinstein",
  },
  {
    id: "11812",
    zip: "91330",
    city: "Eggolsheim",
  },
  {
    id: "13271",
    zip: "91332",
    city: "Heiligenstadt in Oberfranken",
  },
  {
    id: "11827",
    zip: "91334",
    city: "Hemhofen",
  },
  {
    id: "11828",
    zip: "91336",
    city: "Heroldsbach",
  },
  {
    id: "11829",
    zip: "91338",
    city: "Igensdorf",
  },
  {
    id: "11830",
    zip: "91341",
    city: "Röttenbach",
  },
  {
    id: "11831",
    zip: "91344",
    city: "Waischenfeld",
  },
  {
    id: "11832",
    zip: "91346",
    city: "Wiesenttal",
  },
  {
    id: "11833",
    zip: "91347",
    city: "Aufseß",
  },
  {
    id: "11834",
    zip: "91349",
    city: "Egloffstein",
  },
  {
    id: "11835",
    zip: "91350",
    city: "Gremsdorf",
  },
  {
    id: "11836",
    zip: "91352",
    city: "Hallerndorf",
  },
  {
    id: "11837",
    zip: "91353",
    city: "Hausen",
  },
  {
    id: "11838",
    zip: "91355",
    city: "Hiltpoltstein",
  },
  {
    id: "11839",
    zip: "91356",
    city: "Kirchehrenbach",
  },
  {
    id: "11840",
    zip: "91358",
    city: "Kunreuth",
  },
  {
    id: "11841",
    zip: "91359",
    city: "Leutenbach",
  },
  {
    id: "11842",
    zip: "91361",
    city: "Pinzberg",
  },
  {
    id: "11843",
    zip: "91362",
    city: "Pretzfeld",
  },
  {
    id: "11844",
    zip: "91364",
    city: "Unterleinleiter",
  },
  {
    id: "11845",
    zip: "91365",
    city: "Weilersbach",
  },
  {
    id: "11846",
    zip: "91367",
    city: "Weißenohe",
  },
  {
    id: "11847",
    zip: "91369",
    city: "Wiesenthau",
  },
  {
    id: "13272",
    zip: "91413",
    city: "Neustadt an der Aisch",
  },
  {
    id: "11848",
    zip: "91438",
    city: "Bad Windsheim",
  },
  {
    id: "11849",
    zip: "91443",
    city: "Scheinfeld",
  },
  {
    id: "11850",
    zip: "91448",
    city: "Emskirchen",
  },
  {
    id: "11851",
    zip: "91452",
    city: "Wilhermsdorf",
  },
  {
    id: "11852",
    zip: "91456",
    city: "Diespeck",
  },
  {
    id: "11853",
    zip: "91459",
    city: "Markt Erlbach",
  },
  {
    id: "11854",
    zip: "91460",
    city: "Baudenbach",
  },
  {
    id: "11855",
    zip: "91462",
    city: "Dachsbach",
  },
  {
    id: "11856",
    zip: "91463",
    city: "Dietersheim",
  },
  {
    id: "11857",
    zip: "91465",
    city: "Ergersheim",
  },
  {
    id: "11858",
    zip: "91466",
    city: "Gerhardshofen",
  },
  {
    id: "11859",
    zip: "91468",
    city: "Gutenstetten",
  },
  {
    id: "11860",
    zip: "91469",
    city: "Hagenbüchach",
  },
  {
    id: "11861",
    zip: "91471",
    city: "Illesheim",
  },
  {
    id: "11862",
    zip: "91472",
    city: "Ipsheim",
  },
  {
    id: "11863",
    zip: "91474",
    city: "Langenfeld",
  },
  {
    id: "11864",
    zip: "91475",
    city: "Lonnerstadt",
  },
  {
    id: "11865",
    zip: "91477",
    city: "Markt Bibart",
  },
  {
    id: "11866",
    zip: "91478",
    city: "Markt Nordheim",
  },
  {
    id: "11867",
    zip: "91480",
    city: "Markt Taschendorf",
  },
  {
    id: "11868",
    zip: "91481",
    city: "Münchsteinach",
  },
  {
    id: "11874",
    zip: "91483",
    city: "Oberscheinfeld",
  },
  {
    id: "11875",
    zip: "91484",
    city: "Sugenheim",
  },
  {
    id: "11876",
    zip: "91486",
    city: "Uehlfeld",
  },
  {
    id: "11877",
    zip: "91487",
    city: "Vestenbergsgreuth",
  },
  {
    id: "11869",
    zip: "91489",
    city: "Wilhelmsdorf",
  },
  {
    id: "11870",
    zip: "91522",
    city: "Ansbach",
  },
  {
    id: "11871",
    zip: "91541",
    city: "Rothenburg ob der Tauber",
  },
  {
    id: "11872",
    zip: "91550",
    city: "Dinkelsbühl",
  },
  {
    id: "11873",
    zip: "91555",
    city: "Feuchtwangen",
  },
  {
    id: "11878",
    zip: "91560",
    city: "Heilsbronn",
  },
  {
    id: "11879",
    zip: "91564",
    city: "Neuendettelsau",
  },
  {
    id: "11880",
    zip: "91567",
    city: "Herrieden",
  },
  {
    id: "11881",
    zip: "91572",
    city: "Bechhofen",
  },
  {
    id: "11882",
    zip: "91575",
    city: "Windsbach",
  },
  {
    id: "11883",
    zip: "91578",
    city: "Leutershausen",
  },
  {
    id: "11884",
    zip: "91580",
    city: "Petersaurach",
  },
  {
    id: "11885",
    zip: "91583",
    city: "Schillingsfürst",
  },
  {
    id: "11886",
    zip: "91586",
    city: "Lichtenau",
  },
  {
    id: "11887",
    zip: "91587",
    city: "Adelshofen",
  },
  {
    id: "11889",
    zip: "91589",
    city: "Aurach",
  },
  {
    id: "11890",
    zip: "91590",
    city: "Bruckberg",
  },
  {
    id: "13273",
    zip: "91592",
    city: "Buch am Wald",
  },
  {
    id: "11891",
    zip: "91593",
    city: "Burgbernheim",
  },
  {
    id: "11892",
    zip: "91595",
    city: "Burgoberbach",
  },
  {
    id: "11893",
    zip: "91596",
    city: "Burk",
  },
  {
    id: "11894",
    zip: "91598",
    city: "Colmberg",
  },
  {
    id: "13274",
    zip: "91599",
    city: "Dentlein am Forst",
  },
  {
    id: "11895",
    zip: "91601",
    city: "Dombühl",
  },
  {
    id: "11896",
    zip: "91602",
    city: "Dürrwangen",
  },
  {
    id: "11897",
    zip: "91604",
    city: "Flachslanden",
  },
  {
    id: "11888",
    zip: "91605",
    city: "Gallmersgarten",
  },
  {
    id: "11898",
    zip: "91607",
    city: "Gebsattel",
  },
  {
    id: "11899",
    zip: "91608",
    city: "Geslau",
  },
  {
    id: "11901",
    zip: "91610",
    city: "Insingen",
  },
  {
    id: "11902",
    zip: "91611",
    city: "Lehrberg",
  },
  {
    id: "11903",
    zip: "91613",
    city: "Marktbergel",
  },
  {
    id: "11904",
    zip: "91614",
    city: "Mönchsroth",
  },
  {
    id: "11905",
    zip: "91616",
    city: "Neusitz",
  },
  {
    id: "11906",
    zip: "91617",
    city: "Oberdachstetten",
  },
  {
    id: "11907",
    zip: "91619",
    city: "Obernzenn",
  },
  {
    id: "11908",
    zip: "91620",
    city: "Ohrenbach",
  },
  {
    id: "11910",
    zip: "91622",
    city: "Rügland",
  },
  {
    id: "13275",
    zip: "91623",
    city: "Sachsen bei Ansbach",
  },
  {
    id: "11911",
    zip: "91625",
    city: "Schnelldorf",
  },
  {
    id: "11912",
    zip: "91626",
    city: "Schopfloch",
  },
  {
    id: "11900",
    zip: "91628",
    city: "Steinsfeld",
  },
  {
    id: "11913",
    zip: "91629",
    city: "Weihenzell",
  },
  {
    id: "11914",
    zip: "91631",
    city: "Wettringen",
  },
  {
    id: "11909",
    zip: "91632",
    city: "Wieseth",
  },
  {
    id: "11915",
    zip: "91634",
    city: "Wilburgstetten",
  },
  {
    id: "11916",
    zip: "91635",
    city: "Windelsbach",
  },
  {
    id: "11917",
    zip: "91637",
    city: "Wörnitz",
  },
  {
    id: "11918",
    zip: "91639",
    city: "Wolframs-Eschenbach",
  },
  {
    id: "11919",
    zip: "91710",
    city: "Gunzenhausen",
  },
  {
    id: "11920",
    zip: "91717",
    city: "Wassertrüdingen",
  },
  {
    id: "11921",
    zip: "91719",
    city: "Heidenheim",
  },
  {
    id: "11922",
    zip: "91720",
    city: "Absberg",
  },
  {
    id: "11923",
    zip: "91722",
    city: "Arberg",
  },
  {
    id: "11924",
    zip: "91723",
    city: "Dittenheim",
  },
  {
    id: "11925",
    zip: "91725",
    city: "Ehingen",
  },
  {
    id: "11926",
    zip: "91726",
    city: "Gerolfingen",
  },
  {
    id: "11927",
    zip: "91728",
    city: "Gnotzheim",
  },
  {
    id: "11928",
    zip: "91729",
    city: "Haundorf",
  },
  {
    id: "11929",
    zip: "91731",
    city: "Langfurth",
  },
  {
    id: "11930",
    zip: "91732",
    city: "Merkendorf",
  },
  {
    id: "11931",
    zip: "91734",
    city: "Mitteleschenbach",
  },
  {
    id: "13276",
    zip: "91735",
    city: "Muhr am See",
  },
  {
    id: "11932",
    zip: "91737",
    city: "Ornbau",
  },
  {
    id: "11933",
    zip: "91738",
    city: "Pfofeld",
  },
  {
    id: "11934",
    zip: "91740",
    city: "Röckingen",
  },
  {
    id: "11935",
    zip: "91741",
    city: "Theilenhofen",
  },
  {
    id: "11936",
    zip: "91743",
    city: "Unterschwaningen",
  },
  {
    id: "11937",
    zip: "91744",
    city: "Weiltingen",
  },
  {
    id: "11938",
    zip: "91746",
    city: "Weidenbach",
  },
  {
    id: "11939",
    zip: "91747",
    city: "Westheim",
  },
  {
    id: "11940",
    zip: "91749",
    city: "Wittelshofen",
  },
  {
    id: "11941",
    zip: "91757",
    city: "Treuchtlingen",
  },
  {
    id: "13277",
    zip: "91781",
    city: "Weißenburg in Bayern",
  },
  {
    id: "11942",
    zip: "91785",
    city: "Pleinfeld",
  },
  {
    id: "11944",
    zip: "91788",
    city: "Pappenheim",
  },
  {
    id: "11945",
    zip: "91790",
    city: "Nennslingen",
  },
  {
    id: "11946",
    zip: "91792",
    city: "Ellingen",
  },
  {
    id: "11947",
    zip: "91793",
    city: "Alesheim",
  },
  {
    id: "11949",
    zip: "91795",
    city: "Dollnstein",
  },
  {
    id: "11950",
    zip: "91796",
    city: "Ettenstatt",
  },
  {
    id: "11951",
    zip: "91798",
    city: "Höttingen",
  },
  {
    id: "11952",
    zip: "91799",
    city: "Langenaltheim",
  },
  {
    id: "11953",
    zip: "91801",
    city: "Markt Berolzheim",
  },
  {
    id: "11943",
    zip: "91802",
    city: "Meinheim",
  },
  {
    id: "11948",
    zip: "91804",
    city: "Mörnsheim",
  },
  {
    id: "11954",
    zip: "91805",
    city: "Polsingen",
  },
  {
    id: "11955",
    zip: "91807",
    city: "Solnhofen",
  },
  {
    id: "11956",
    zip: "91809",
    city: "Wellheim",
  },
  {
    id: "11957",
    zip: "92224",
    city: "Amberg",
  },
  {
    id: "11958",
    zip: "92237",
    city: "Sulzbach-Rosenberg",
  },
  {
    id: "11959",
    zip: "92242",
    city: "Hirschau",
  },
  {
    id: "11960",
    zip: "92245",
    city: "Kümmersbruck",
  },
  {
    id: "11961",
    zip: "92249",
    city: "Vilseck",
  },
  {
    id: "11962",
    zip: "92253",
    city: "Schnaittenbach",
  },
  {
    id: "11963",
    zip: "92256",
    city: "Hahnbach",
  },
  {
    id: "13278",
    zip: "92259",
    city: "Neukirchen bei Sulzbach-Rosen",
  },
  {
    id: "11964",
    zip: "92260",
    city: "Ammerthal",
  },
  {
    id: "11966",
    zip: "92262",
    city: "Birgland",
  },
  {
    id: "11967",
    zip: "92263",
    city: "Ebermannsdorf",
  },
  {
    id: "11968",
    zip: "92265",
    city: "Edelsfeld",
  },
  {
    id: "11969",
    zip: "92266",
    city: "Ensdorf",
  },
  {
    id: "11970",
    zip: "92268",
    city: "Etzelwang",
  },
  {
    id: "11971",
    zip: "92269",
    city: "Fensterbach",
  },
  {
    id: "11972",
    zip: "92271",
    city: "Freihung",
  },
  {
    id: "11973",
    zip: "92272",
    city: "Freudenberg",
  },
  {
    id: "11974",
    zip: "92274",
    city: "Gebenbach",
  },
  {
    id: "11975",
    zip: "92275",
    city: "Hirschbach",
  },
  {
    id: "11976",
    zip: "92277",
    city: "Hohenburg",
  },
  {
    id: "11977",
    zip: "92278",
    city: "Illschwang",
  },
  {
    id: "11978",
    zip: "92280",
    city: "Kastl",
  },
  {
    id: "11979",
    zip: "92281",
    city: "Königstein",
  },
  {
    id: "11980",
    zip: "92283",
    city: "Lauterhofen",
  },
  {
    id: "11981",
    zip: "92284",
    city: "Poppenricht",
  },
  {
    id: "11982",
    zip: "92286",
    city: "Rieden",
  },
  {
    id: "11983",
    zip: "92287",
    city: "Schmidmühlen",
  },
  {
    id: "11984",
    zip: "92289",
    city: "Ursensollen",
  },
  {
    id: "13279",
    zip: "92318",
    city: "Neumarkt in der Oberpfalz",
  },
  {
    id: "11985",
    zip: "92331",
    city: "Parsberg",
  },
  {
    id: "11986",
    zip: "92334",
    city: "Berching",
  },
  {
    id: "11987",
    zip: "92339",
    city: "Beilngries",
  },
  {
    id: "11988",
    zip: "92342",
    city: "Freystadt",
  },
  {
    id: "13280",
    zip: "92345",
    city: "Dietfurt an der Altmühl",
  },
  {
    id: "13281",
    zip: "92348",
    city: "Berg bei Neumarkt in der Oberpfalz",
  },
  {
    id: "11989",
    zip: "92353",
    city: "Postbauer-Heng",
  },
  {
    id: "11990",
    zip: "92355",
    city: "Velburg",
  },
  {
    id: "13282",
    zip: "92358",
    city: "Seubersdorf in der Oberpfalz",
  },
  {
    id: "11991",
    zip: "92360",
    city: "Mühlhausen",
  },
  {
    id: "11992",
    zip: "92361",
    city: "Berngau",
  },
  {
    id: "11993",
    zip: "92363",
    city: "Breitenbrunn",
  },
  {
    id: "11994",
    zip: "92364",
    city: "Deining",
  },
  {
    id: "11995",
    zip: "92366",
    city: "Hohenfels",
  },
  {
    id: "11996",
    zip: "92367",
    city: "Pilsach",
  },
  {
    id: "11997",
    zip: "92369",
    city: "Sengenthal",
  },
  {
    id: "11998",
    zip: "92421",
    city: "Schwandorf",
  },
  {
    id: "11999",
    zip: "92431",
    city: "Neunburg vorm Wald",
  },
  {
    id: "13283",
    zip: "92436",
    city: "Bruck in der Oberpfalz",
  },
  {
    id: "12000",
    zip: "92439",
    city: "Bodenwöhr",
  },
  {
    id: "12001",
    zip: "92442",
    city: "Wackersdorf",
  },
  {
    id: "12002",
    zip: "92444",
    city: "Rötz",
  },
  {
    id: "12003",
    zip: "92445",
    city: "Neukirchen-Balbini",
  },
  {
    id: "12004",
    zip: "92447",
    city: "Schwarzhofen",
  },
  {
    id: "12005",
    zip: "92449",
    city: "Steinberg",
  },
  {
    id: "12006",
    zip: "92507",
    city: "Nabburg",
  },
  {
    id: "12007",
    zip: "92521",
    city: "Schwarzenfeld",
  },
  {
    id: "12008",
    zip: "92526",
    city: "Oberviechtach",
  },
  {
    id: "12009",
    zip: "92533",
    city: "Wernberg-Köblitz",
  },
  {
    id: "12010",
    zip: "92536",
    city: "Pfreimd",
  },
  {
    id: "12011",
    zip: "92539",
    city: "Schönsee",
  },
  {
    id: "12012",
    zip: "92540",
    city: "Altendorf",
  },
  {
    id: "12013",
    zip: "92542",
    city: "Dieterskirchen",
  },
  {
    id: "12014",
    zip: "92543",
    city: "Guteneck",
  },
  {
    id: "12015",
    zip: "92545",
    city: "Niedermurach",
  },
  {
    id: "12016",
    zip: "92546",
    city: "Schmidgaden",
  },
  {
    id: "13284",
    zip: "92548",
    city: "Schwarzach bei Nabburg",
  },
  {
    id: "12017",
    zip: "92549",
    city: "Stadlern",
  },
  {
    id: "12018",
    zip: "92551",
    city: "Stulln",
  },
  {
    id: "11965",
    zip: "92552",
    city: "Teunz",
  },
  {
    id: "12019",
    zip: "92554",
    city: "Thanstein",
  },
  {
    id: "12020",
    zip: "92555",
    city: "Trausnitz",
  },
  {
    id: "12021",
    zip: "92557",
    city: "Weiding",
  },
  {
    id: "12022",
    zip: "92559",
    city: "Winklarn",
  },
  {
    id: "13285",
    zip: "92637",
    city: "Weiden in der Oberpfalz",
  },
  {
    id: "12023",
    zip: "92648",
    city: "Vohenstrauß",
  },
  {
    id: "12024",
    zip: "92655",
    city: "Grafenwöhr",
  },
  {
    id: "13286",
    zip: "92660",
    city: "Neustadt an der Waldnaab",
  },
  {
    id: "13287",
    zip: "92665",
    city: "Altenstadt an der Waldnaab",
  },
  {
    id: "12026",
    zip: "92670",
    city: "Windischeschenbach",
  },
  {
    id: "13288",
    zip: "92676",
    city: "Eschenbach in der Oberpfalz",
  },
  {
    id: "12027",
    zip: "92681",
    city: "Erbendorf",
  },
  {
    id: "12028",
    zip: "92685",
    city: "Floß",
  },
  {
    id: "12030",
    zip: "92690",
    city: "Pressath",
  },
  {
    id: "12031",
    zip: "92693",
    city: "Eslarn",
  },
  {
    id: "12032",
    zip: "92694",
    city: "Etzenricht",
  },
  {
    id: "12033",
    zip: "92696",
    city: "Flossenbürg",
  },
  {
    id: "12025",
    zip: "92697",
    city: "Georgenberg",
  },
  {
    id: "12029",
    zip: "92699",
    city: "Bechtsried",
  },
  {
    id: "12034",
    zip: "92700",
    city: "Weiherhammer",
  },
  {
    id: "12035",
    zip: "92702",
    city: "Kohlberg",
  },
  {
    id: "12036",
    zip: "92703",
    city: "Krummennaab",
  },
  {
    id: "12037",
    zip: "92705",
    city: "Leuchtenberg",
  },
  {
    id: "12038",
    zip: "92706",
    city: "Luhe-Wildenau",
  },
  {
    id: "12039",
    zip: "92708",
    city: "Mantel",
  },
  {
    id: "12040",
    zip: "92709",
    city: "Moosbach",
  },
  {
    id: "12041",
    zip: "92711",
    city: "Parkstein",
  },
  {
    id: "12042",
    zip: "92712",
    city: "Pirk",
  },
  {
    id: "12043",
    zip: "92714",
    city: "Pleystein",
  },
  {
    id: "12044",
    zip: "92715",
    city: "Püchersreuth",
  },
  {
    id: "13289",
    zip: "92717",
    city: "Reuth bei Erbendorf",
  },
  {
    id: "12046",
    zip: "92718",
    city: "Schirmitz",
  },
  {
    id: "12047",
    zip: "92720",
    city: "Schwarzenbach",
  },
  {
    id: "12048",
    zip: "92721",
    city: "Störnstein",
  },
  {
    id: "12049",
    zip: "92723",
    city: "Tännesberg",
  },
  {
    id: "12050",
    zip: "92724",
    city: "Trabitz",
  },
  {
    id: "12051",
    zip: "92726",
    city: "Waidhaus",
  },
  {
    id: "12052",
    zip: "92727",
    city: "Waldthurn",
  },
  {
    id: "12053",
    zip: "92729",
    city: "Weiherhammer",
  },
  {
    id: "12054",
    zip: "93047",
    city: "Regensburg",
  },
  {
    id: "12055",
    zip: "93049",
    city: "Regensburg",
  },
  {
    id: "12056",
    zip: "93051",
    city: "Regensburg",
  },
  {
    id: "12057",
    zip: "93053",
    city: "Regensburg",
  },
  {
    id: "12058",
    zip: "93055",
    city: "Regensburg",
  },
  {
    id: "12059",
    zip: "93057",
    city: "Regensburg",
  },
  {
    id: "12060",
    zip: "93059",
    city: "Regensburg",
  },
  {
    id: "12061",
    zip: "93073",
    city: "Neutraubling",
  },
  {
    id: "12062",
    zip: "93077",
    city: "Bad Abbach",
  },
  {
    id: "12063",
    zip: "93080",
    city: "Pentling",
  },
  {
    id: "12064",
    zip: "93083",
    city: "Obertraubling",
  },
  {
    id: "13290",
    zip: "93086",
    city: "Wörth an der Donau",
  },
  {
    id: "12045",
    zip: "93087",
    city: "Alteglofsheim",
  },
  {
    id: "12065",
    zip: "93089",
    city: "Aufhausen",
  },
  {
    id: "13291",
    zip: "93090",
    city: "Bach an der Donau",
  },
  {
    id: "12066",
    zip: "93092",
    city: "Barbing",
  },
  {
    id: "12067",
    zip: "93093",
    city: "Donaustauf",
  },
  {
    id: "12068",
    zip: "93095",
    city: "Hagelstadt",
  },
  {
    id: "12069",
    zip: "93096",
    city: "Köfering",
  },
  {
    id: "12070",
    zip: "93098",
    city: "Mintraching",
  },
  {
    id: "12071",
    zip: "93099",
    city: "Mötzing",
  },
  {
    id: "12072",
    zip: "93101",
    city: "Pfakofen",
  },
  {
    id: "12073",
    zip: "93102",
    city: "Pfatter",
  },
  {
    id: "12074",
    zip: "93104",
    city: "Sünching",
  },
  {
    id: "12075",
    zip: "93105",
    city: "Tegernheim",
  },
  {
    id: "12076",
    zip: "93107",
    city: "Thalmassing",
  },
  {
    id: "12077",
    zip: "93109",
    city: "Wiesent",
  },
  {
    id: "12078",
    zip: "93128",
    city: "Regenstauf",
  },
  {
    id: "12079",
    zip: "93133",
    city: "Burglengenfeld",
  },
  {
    id: "12080",
    zip: "93138",
    city: "Lappersdorf",
  },
  {
    id: "12081",
    zip: "93142",
    city: "Maxhütte-Haidhof",
  },
  {
    id: "12082",
    zip: "93149",
    city: "Nittenau",
  },
  {
    id: "12083",
    zip: "93152",
    city: "Nittendorf",
  },
  {
    id: "12084",
    zip: "93155",
    city: "Hemau",
  },
  {
    id: "12085",
    zip: "93158",
    city: "Teublitz",
  },
  {
    id: "12086",
    zip: "93161",
    city: "Sinzing",
  },
  {
    id: "12087",
    zip: "93164",
    city: "Laaber",
  },
  {
    id: "12088",
    zip: "93167",
    city: "Falkenstein",
  },
  {
    id: "12089",
    zip: "93170",
    city: "Bernhardswald",
  },
  {
    id: "12090",
    zip: "93173",
    city: "Wenzenbach",
  },
  {
    id: "12091",
    zip: "93176",
    city: "Beratzhausen",
  },
  {
    id: "12092",
    zip: "93177",
    city: "Altenthann",
  },
  {
    id: "12093",
    zip: "93179",
    city: "Brennberg",
  },
  {
    id: "12094",
    zip: "93180",
    city: "Deuerling",
  },
  {
    id: "12095",
    zip: "93182",
    city: "Duggendorf",
  },
  {
    id: "12096",
    zip: "93183",
    city: "Kallmünz",
  },
  {
    id: "12097",
    zip: "93185",
    city: "Michelsneukirchen",
  },
  {
    id: "12098",
    zip: "93186",
    city: "Pettendorf",
  },
  {
    id: "12099",
    zip: "93188",
    city: "Pielenhofen",
  },
  {
    id: "12100",
    zip: "93189",
    city: "Reichenbach",
  },
  {
    id: "12101",
    zip: "93191",
    city: "Rettenbach",
  },
  {
    id: "12102",
    zip: "93192",
    city: "Wald",
  },
  {
    id: "12103",
    zip: "93194",
    city: "Walderbach",
  },
  {
    id: "12104",
    zip: "93195",
    city: "Wolfsegg",
  },
  {
    id: "12105",
    zip: "93197",
    city: "Zeitlarn",
  },
  {
    id: "12106",
    zip: "93199",
    city: "Zell",
  },
  {
    id: "12107",
    zip: "93309",
    city: "Kelheim",
  },
  {
    id: "12108",
    zip: "93326",
    city: "Abensberg",
  },
  {
    id: "13292",
    zip: "93333",
    city: "Neustadt an der Donau",
  },
  {
    id: "12109",
    zip: "93336",
    city: "Altmannstein",
  },
  {
    id: "12110",
    zip: "93339",
    city: "Riedenburg",
  },
  {
    id: "13293",
    zip: "93342",
    city: "Saal an der Donau",
  },
  {
    id: "12111",
    zip: "93343",
    city: "Essing",
  },
  {
    id: "12112",
    zip: "93345",
    city: "Hausen",
  },
  {
    id: "12113",
    zip: "93346",
    city: "Ihrlerstein",
  },
  {
    id: "12114",
    zip: "93348",
    city: "Kirchdorf",
  },
  {
    id: "12115",
    zip: "93349",
    city: "Mindelstetten",
  },
  {
    id: "12116",
    zip: "93351",
    city: "Painten",
  },
  {
    id: "13294",
    zip: "93352",
    city: "Rohr in Niederbayern",
  },
  {
    id: "12117",
    zip: "93354",
    city: "Siegenburg",
  },
  {
    id: "12118",
    zip: "93356",
    city: "Teugn",
  },
  {
    id: "12119",
    zip: "93358",
    city: "Train",
  },
  {
    id: "12120",
    zip: "93359",
    city: "Wildenberg",
  },
  {
    id: "12121",
    zip: "93413",
    city: "Cham",
  },
  {
    id: "12122",
    zip: "93426",
    city: "Roding",
  },
  {
    id: "13295",
    zip: "93437",
    city: "Furth im Wald",
  },
  {
    id: "12123",
    zip: "93444",
    city: "Kötzting",
  },
  {
    id: "12124",
    zip: "93449",
    city: "Waldmünchen",
  },
  {
    id: "13296",
    zip: "93453",
    city: "Neukirchen bei Heilig Blut",
  },
  {
    id: "12126",
    zip: "93455",
    city: "Traitsching",
  },
  {
    id: "12127",
    zip: "93458",
    city: "Eschlkam",
  },
  {
    id: "12128",
    zip: "93462",
    city: "Lam",
  },
  {
    id: "12129",
    zip: "93464",
    city: "Tiefenbach",
  },
  {
    id: "12125",
    zip: "93466",
    city: "Chamerau",
  },
  {
    id: "12130",
    zip: "93468",
    city: "Miltach",
  },
  {
    id: "12131",
    zip: "93470",
    city: "Lohberg",
  },
  {
    id: "12132",
    zip: "93471",
    city: "Arnbruck",
  },
  {
    id: "12133",
    zip: "93473",
    city: "Arnschwang",
  },
  {
    id: "12134",
    zip: "93474",
    city: "Arrach",
  },
  {
    id: "12135",
    zip: "93476",
    city: "Blaibach",
  },
  {
    id: "12136",
    zip: "93477",
    city: "Gleißenberg",
  },
  {
    id: "12137",
    zip: "93479",
    city: "Grafenwiesen",
  },
  {
    id: "12138",
    zip: "93480",
    city: "Hohenwarth",
  },
  {
    id: "12139",
    zip: "93482",
    city: "Pemfling",
  },
  {
    id: "12140",
    zip: "93483",
    city: "Pösing",
  },
  {
    id: "12141",
    zip: "93485",
    city: "Rimbach",
  },
  {
    id: "12142",
    zip: "93486",
    city: "Runding",
  },
  {
    id: "12143",
    zip: "93488",
    city: "Schönthal",
  },
  {
    id: "12144",
    zip: "93489",
    city: "Schorndorf",
  },
  {
    id: "12145",
    zip: "93491",
    city: "Stamsried",
  },
  {
    id: "12146",
    zip: "93492",
    city: "Treffelstein",
  },
  {
    id: "12147",
    zip: "93494",
    city: "Waffenbrunn",
  },
  {
    id: "12149",
    zip: "93495",
    city: "Weiding",
  },
  {
    id: "12150",
    zip: "93497",
    city: "Willmering",
  },
  {
    id: "12151",
    zip: "93499",
    city: "Zandt",
  },
  {
    id: "12152",
    zip: "94032",
    city: "Passau",
  },
  {
    id: "12153",
    zip: "94034",
    city: "Passau",
  },
  {
    id: "12154",
    zip: "94036",
    city: "Passau",
  },
  {
    id: "12148",
    zip: "94051",
    city: "Hauzenberg",
  },
  {
    id: "12155",
    zip: "94060",
    city: "Pocking",
  },
  {
    id: "12156",
    zip: "94065",
    city: "Waldkirchen",
  },
  {
    id: "12157",
    zip: "94072",
    city: "Bad Füssing",
  },
  {
    id: "12158",
    zip: "94078",
    city: "Freyung",
  },
  {
    id: "12159",
    zip: "94081",
    city: "Fürstenzell",
  },
  {
    id: "13297",
    zip: "94086",
    city: "Griesbach im Rottal",
  },
  {
    id: "12160",
    zip: "94089",
    city: "Neureichenau",
  },
  {
    id: "12161",
    zip: "94094",
    city: "Rotthalmünster",
  },
  {
    id: "13298",
    zip: "94099",
    city: "Ruhstorf an der Rott",
  },
  {
    id: "12162",
    zip: "94104",
    city: "Tittling",
  },
  {
    id: "12163",
    zip: "94107",
    city: "Untergriesbach",
  },
  {
    id: "12164",
    zip: "94110",
    city: "Wegscheid",
  },
  {
    id: "12165",
    zip: "94113",
    city: "Tiefenbach",
  },
  {
    id: "12167",
    zip: "94116",
    city: "Hutthurm",
  },
  {
    id: "12168",
    zip: "94118",
    city: "Jandelsbrunn",
  },
  {
    id: "12169",
    zip: "94121",
    city: "Salzweg",
  },
  {
    id: "12170",
    zip: "94124",
    city: "Büchlberg",
  },
  {
    id: "13299",
    zip: "94127",
    city: "Neuburg am Inn",
  },
  {
    id: "12171",
    zip: "94130",
    city: "Obernzell",
  },
  {
    id: "12172",
    zip: "94133",
    city: "Röhrnbach",
  },
  {
    id: "12173",
    zip: "94136",
    city: "Thyrnau",
  },
  {
    id: "12174",
    zip: "94137",
    city: "Bayerbach",
  },
  {
    id: "12166",
    zip: "94139",
    city: "Breitenberg",
  },
  {
    id: "12175",
    zip: "94140",
    city: "Ering",
  },
  {
    id: "12176",
    zip: "94142",
    city: "Fürsteneck",
  },
  {
    id: "12177",
    zip: "94143",
    city: "Grainet",
  },
  {
    id: "12178",
    zip: "94145",
    city: "Haidmühle",
  },
  {
    id: "12179",
    zip: "94146",
    city: "Hinterschmiding",
  },
  {
    id: "12180",
    zip: "94148",
    city: "Kirchham",
  },
  {
    id: "12181",
    zip: "94149",
    city: "Kößlarn",
  },
  {
    id: "12182",
    zip: "94151",
    city: "Mauth",
  },
  {
    id: "13300",
    zip: "94152",
    city: "Neuhaus am Inn",
  },
  {
    id: "12183",
    zip: "94154",
    city: "Neukirchen vorm Wald",
  },
  {
    id: "12185",
    zip: "94155",
    city: "Windorf",
  },
  {
    id: "12186",
    zip: "94157",
    city: "Perlesreut",
  },
  {
    id: "12187",
    zip: "94158",
    city: "Philippsreut",
  },
  {
    id: "12188",
    zip: "94160",
    city: "Ringelai",
  },
  {
    id: "12189",
    zip: "94161",
    city: "Ruderting",
  },
  {
    id: "12184",
    zip: "94163",
    city: "Saldenburg",
  },
  {
    id: "12190",
    zip: "94164",
    city: "Sonnen",
  },
  {
    id: "12191",
    zip: "94166",
    city: "Stubenberg",
  },
  {
    id: "12192",
    zip: "94167",
    city: "Tettenweis",
  },
  {
    id: "12193",
    zip: "94169",
    city: "Thurmansbang",
  },
  {
    id: "12194",
    zip: "94209",
    city: "Regen",
  },
  {
    id: "12195",
    zip: "94227",
    city: "Zwiesel",
  },
  {
    id: "12196",
    zip: "94234",
    city: "Viechtach",
  },
  {
    id: "12197",
    zip: "94239",
    city: "Zachenberg",
  },
  {
    id: "12198",
    zip: "94244",
    city: "Teisnach",
  },
  {
    id: "12199",
    zip: "94249",
    city: "Bodenmais",
  },
  {
    id: "12200",
    zip: "94250",
    city: "Achslach",
  },
  {
    id: "12201",
    zip: "94252",
    city: "Bayerisch Eisenstein",
  },
  {
    id: "12202",
    zip: "94253",
    city: "Bischofsmais",
  },
  {
    id: "12203",
    zip: "94255",
    city: "Böbrach",
  },
  {
    id: "12204",
    zip: "94256",
    city: "Drachselsried",
  },
  {
    id: "12205",
    zip: "94258",
    city: "Frauenau",
  },
  {
    id: "12206",
    zip: "94259",
    city: "Kirchberg",
  },
  {
    id: "13301",
    zip: "94261",
    city: "Kirchdorf im Wald",
  },
  {
    id: "12207",
    zip: "94262",
    city: "Kollnburg",
  },
  {
    id: "12208",
    zip: "94264",
    city: "Langdorf",
  },
  {
    id: "12209",
    zip: "94265",
    city: "Patersdorf",
  },
  {
    id: "12210",
    zip: "94267",
    city: "Prackenbach",
  },
  {
    id: "12211",
    zip: "94269",
    city: "Rinchnach",
  },
  {
    id: "12212",
    zip: "94315",
    city: "Straubing",
  },
  {
    id: "12213",
    zip: "94327",
    city: "Bogen",
  },
  {
    id: "12214",
    zip: "94330",
    city: "Aiterhofen",
  },
  {
    id: "12215",
    zip: "94333",
    city: "Geiselhöring",
  },
  {
    id: "12216",
    zip: "94336",
    city: "Hunderdorf",
  },
  {
    id: "12217",
    zip: "94339",
    city: "Leiblfing",
  },
  {
    id: "12218",
    zip: "94342",
    city: "Straßkirchen",
  },
  {
    id: "12219",
    zip: "94344",
    city: "Wiesenfelden",
  },
  {
    id: "12220",
    zip: "94345",
    city: "Aholfing",
  },
  {
    id: "12221",
    zip: "94347",
    city: "Ascha",
  },
  {
    id: "12222",
    zip: "94348",
    city: "Atting",
  },
  {
    id: "12223",
    zip: "94350",
    city: "Falkenfels",
  },
  {
    id: "12224",
    zip: "94351",
    city: "Feldkirchen",
  },
  {
    id: "12225",
    zip: "94353",
    city: "Haibach",
  },
  {
    id: "12226",
    zip: "94354",
    city: "Haselbach",
  },
  {
    id: "12227",
    zip: "94356",
    city: "Kirchroth",
  },
  {
    id: "12228",
    zip: "94357",
    city: "Konzell",
  },
  {
    id: "12229",
    zip: "94359",
    city: "Loitzendorf",
  },
  {
    id: "12230",
    zip: "94360",
    city: "Mitterfels",
  },
  {
    id: "12231",
    zip: "94362",
    city: "Neukirchen",
  },
  {
    id: "12232",
    zip: "94363",
    city: "Oberschneiding",
  },
  {
    id: "12233",
    zip: "94365",
    city: "Parkstetten",
  },
  {
    id: "12234",
    zip: "94366",
    city: "Perasdorf",
  },
  {
    id: "12235",
    zip: "94368",
    city: "Perkam",
  },
  {
    id: "12236",
    zip: "94369",
    city: "Rain",
  },
  {
    id: "12237",
    zip: "94371",
    city: "Rattenberg",
  },
  {
    id: "12238",
    zip: "94372",
    city: "Rattiszell",
  },
  {
    id: "12239",
    zip: "94374",
    city: "Schwarzach",
  },
  {
    id: "12240",
    zip: "94375",
    city: "Stallwang",
  },
  {
    id: "12241",
    zip: "94377",
    city: "Steinach",
  },
  {
    id: "12242",
    zip: "94379",
    city: "Sankt Englmar",
  },
  {
    id: "13302",
    zip: "94405",
    city: "Landau an der Isar",
  },
  {
    id: "12243",
    zip: "94419",
    city: "Reisbach",
  },
  {
    id: "12244",
    zip: "94424",
    city: "Arnstorf",
  },
  {
    id: "12246",
    zip: "94428",
    city: "Eichendorf",
  },
  {
    id: "12247",
    zip: "94431",
    city: "Pilsting",
  },
  {
    id: "12248",
    zip: "94436",
    city: "Simbach",
  },
  {
    id: "12249",
    zip: "94437",
    city: "Mamming",
  },
  {
    id: "12245",
    zip: "94439",
    city: "Roßbach",
  },
  {
    id: "12250",
    zip: "94447",
    city: "Plattling",
  },
  {
    id: "12251",
    zip: "94469",
    city: "Deggendorf",
  },
  {
    id: "12252",
    zip: "94474",
    city: "Vilshofen",
  },
  {
    id: "12253",
    zip: "94481",
    city: "Grafenau",
  },
  {
    id: "12254",
    zip: "94486",
    city: "Osterhofen",
  },
  {
    id: "12255",
    zip: "94491",
    city: "Hengersberg",
  },
  {
    id: "12256",
    zip: "94496",
    city: "Ortenburg",
  },
  {
    id: "12257",
    zip: "94501",
    city: "Aldersbach",
  },
  {
    id: "12258",
    zip: "94505",
    city: "Bernried",
  },
  {
    id: "12259",
    zip: "94508",
    city: "Schöllnach",
  },
  {
    id: "12260",
    zip: "94513",
    city: "Schönberg",
  },
  {
    id: "12261",
    zip: "94518",
    city: "Spiegelau",
  },
  {
    id: "12262",
    zip: "94522",
    city: "Wallersdorf",
  },
  {
    id: "12263",
    zip: "94526",
    city: "Metten",
  },
  {
    id: "12264",
    zip: "94527",
    city: "Aholming",
  },
  {
    id: "12265",
    zip: "94529",
    city: "Aicha vorm Wald",
  },
  {
    id: "12266",
    zip: "94530",
    city: "Auerbach",
  },
  {
    id: "12267",
    zip: "94532",
    city: "Außernzell",
  },
  {
    id: "12268",
    zip: "94533",
    city: "Buchhofen",
  },
  {
    id: "13303",
    zip: "94535",
    city: "Eging am See",
  },
  {
    id: "12269",
    zip: "94536",
    city: "Eppenschlag",
  },
  {
    id: "12270",
    zip: "94538",
    city: "Fürstenstein",
  },
  {
    id: "12271",
    zip: "94539",
    city: "Grafling",
  },
  {
    id: "12272",
    zip: "94541",
    city: "Grattersdorf",
  },
  {
    id: "12273",
    zip: "94542",
    city: "Haarbach",
  },
  {
    id: "12274",
    zip: "94544",
    city: "Hofkirchen",
  },
  {
    id: "12275",
    zip: "94545",
    city: "Hohenau",
  },
  {
    id: "12276",
    zip: "94547",
    city: "Iggensbach",
  },
  {
    id: "12277",
    zip: "94548",
    city: "Innernzell",
  },
  {
    id: "12278",
    zip: "94550",
    city: "Künzing",
  },
  {
    id: "12279",
    zip: "94551",
    city: "Lalling",
  },
  {
    id: "12280",
    zip: "94553",
    city: "Mariaposching",
  },
  {
    id: "12281",
    zip: "94554",
    city: "Moos",
  },
  {
    id: "12282",
    zip: "94556",
    city: "Neuschönau",
  },
  {
    id: "12283",
    zip: "94557",
    city: "Niederalteich",
  },
  {
    id: "12284",
    zip: "94559",
    city: "Niederwinkling",
  },
  {
    id: "12285",
    zip: "94560",
    city: "Offenberg",
  },
  {
    id: "12286",
    zip: "94562",
    city: "Oberpöring",
  },
  {
    id: "12287",
    zip: "94563",
    city: "Otzing",
  },
  {
    id: "12288",
    zip: "94565",
    city: "Windorf",
  },
  {
    id: "12289",
    zip: "94566",
    city: "Sankt Oswald-Riedlhütte",
  },
  {
    id: "12290",
    zip: "94568",
    city: "Sankt Oswald-Riedlhütte",
  },
  {
    id: "12291",
    zip: "94569",
    city: "Stephansposching",
  },
  {
    id: "12292",
    zip: "94571",
    city: "Schaufling",
  },
  {
    id: "12293",
    zip: "94572",
    city: "Schöfweg",
  },
  {
    id: "12294",
    zip: "94574",
    city: "Wallerfing",
  },
  {
    id: "12295",
    zip: "94575",
    city: "Windorf",
  },
  {
    id: "12296",
    zip: "94577",
    city: "Winzer",
  },
  {
    id: "12297",
    zip: "94579",
    city: "Zenting",
  },
  {
    id: "12298",
    zip: "95028",
    city: "Hof",
  },
  {
    id: "12299",
    zip: "95030",
    city: "Hof",
  },
  {
    id: "12300",
    zip: "95032",
    city: "Hof",
  },
  {
    id: "12301",
    zip: "95100",
    city: "Selb",
  },
  {
    id: "12302",
    zip: "95111",
    city: "Rehau",
  },
  {
    id: "12303",
    zip: "95119",
    city: "Naila",
  },
  {
    id: "13304",
    zip: "95126",
    city: "Schwarzenbach an der Saale",
  },
  {
    id: "13305",
    zip: "95131",
    city: "Schwarzenbach am Wald",
  },
  {
    id: "12304",
    zip: "95138",
    city: "Bad Steben",
  },
  {
    id: "12305",
    zip: "95145",
    city: "Oberkotzau",
  },
  {
    id: "12306",
    zip: "95152",
    city: "Selbitz",
  },
  {
    id: "12307",
    zip: "95158",
    city: "Kirchenlamitz",
  },
  {
    id: "12308",
    zip: "95163",
    city: "Weißenstadt",
  },
  {
    id: "12309",
    zip: "95168",
    city: "Marktleuthen",
  },
  {
    id: "12310",
    zip: "95173",
    city: "Schönwald",
  },
  {
    id: "12311",
    zip: "95176",
    city: "Konradsreuth",
  },
  {
    id: "12313",
    zip: "95179",
    city: "Geroldsgrün",
  },
  {
    id: "12314",
    zip: "95180",
    city: "Berg",
  },
  {
    id: "12315",
    zip: "95182",
    city: "Döhlau",
  },
  {
    id: "12316",
    zip: "95183",
    city: "Feilitzsch",
  },
  {
    id: "12317",
    zip: "95185",
    city: "Gattendorf",
  },
  {
    id: "13306",
    zip: "95186",
    city: "Höchstädt im Fichtelgebirge",
  },
  {
    id: "12318",
    zip: "95188",
    city: "Issigau",
  },
  {
    id: "12319",
    zip: "95189",
    city: "Köditz",
  },
  {
    id: "12321",
    zip: "95191",
    city: "Leupoldsgrün",
  },
  {
    id: "12322",
    zip: "95192",
    city: "Lichtenberg",
  },
  {
    id: "12323",
    zip: "95194",
    city: "Regnitzlosau",
  },
  {
    id: "12324",
    zip: "95195",
    city: "Röslau",
  },
  {
    id: "12326",
    zip: "95197",
    city: "Schauenstein",
  },
  {
    id: "12327",
    zip: "95199",
    city: "Thierstein",
  },
  {
    id: "12328",
    zip: "95213",
    city: "Münchberg",
  },
  {
    id: "12329",
    zip: "95233",
    city: "Helmbrechts",
  },
  {
    id: "12330",
    zip: "95234",
    city: "Sparneck",
  },
  {
    id: "12331",
    zip: "95236",
    city: "Stammbach",
  },
  {
    id: "12332",
    zip: "95237",
    city: "Weißdorf",
  },
  {
    id: "12333",
    zip: "95239",
    city: "Zell",
  },
  {
    id: "12334",
    zip: "95326",
    city: "Kulmbach",
  },
  {
    id: "12335",
    zip: "95336",
    city: "Mainleus",
  },
  {
    id: "12336",
    zip: "95339",
    city: "Neuenmarkt",
  },
  {
    id: "12337",
    zip: "95346",
    city: "Stadtsteinach",
  },
  {
    id: "12338",
    zip: "95349",
    city: "Thurnau",
  },
  {
    id: "12339",
    zip: "95352",
    city: "Marktleugast",
  },
  {
    id: "12340",
    zip: "95355",
    city: "Presseck",
  },
  {
    id: "12341",
    zip: "95356",
    city: "Grafengehaig",
  },
  {
    id: "12312",
    zip: "95358",
    city: "Guttenberg",
  },
  {
    id: "12325",
    zip: "95359",
    city: "Kasendorf",
  },
  {
    id: "12342",
    zip: "95361",
    city: "Ködnitz",
  },
  {
    id: "12343",
    zip: "95362",
    city: "Kupferberg",
  },
  {
    id: "12344",
    zip: "95364",
    city: "Ludwigschorgast",
  },
  {
    id: "12345",
    zip: "95365",
    city: "Rugendorf",
  },
  {
    id: "12346",
    zip: "95367",
    city: "Trebgast",
  },
  {
    id: "12347",
    zip: "95369",
    city: "Untersteinach",
  },
  {
    id: "12348",
    zip: "95444",
    city: "Bayreuth",
  },
  {
    id: "12349",
    zip: "95445",
    city: "Bayreuth",
  },
  {
    id: "12350",
    zip: "95447",
    city: "Bayreuth",
  },
  {
    id: "12351",
    zip: "95448",
    city: "Bayreuth",
  },
  {
    id: "13307",
    zip: "95460",
    city: "Bad Berneck im Fichtelgebirg",
  },
  {
    id: "12352",
    zip: "95463",
    city: "Bindlach",
  },
  {
    id: "12353",
    zip: "95466",
    city: "Weidenberg",
  },
  {
    id: "12354",
    zip: "95469",
    city: "Speichersdorf",
  },
  {
    id: "12355",
    zip: "95473",
    city: "Creußen",
  },
  {
    id: "12356",
    zip: "95478",
    city: "Kemnath",
  },
  {
    id: "12320",
    zip: "95482",
    city: "Gefrees",
  },
  {
    id: "12357",
    zip: "95485",
    city: "Warmensteinach",
  },
  {
    id: "12358",
    zip: "95488",
    city: "Eckersdorf",
  },
  {
    id: "12359",
    zip: "95490",
    city: "Mistelgau",
  },
  {
    id: "12360",
    zip: "95491",
    city: "Ahorntal",
  },
  {
    id: "12361",
    zip: "95493",
    city: "Bischofsgrün",
  },
  {
    id: "12362",
    zip: "95494",
    city: "Gesees",
  },
  {
    id: "12363",
    zip: "95496",
    city: "Glashütten",
  },
  {
    id: "12364",
    zip: "95497",
    city: "Goldkronach",
  },
  {
    id: "12365",
    zip: "95499",
    city: "Harsdorf",
  },
  {
    id: "12366",
    zip: "95500",
    city: "Heinersreuth",
  },
  {
    id: "12367",
    zip: "95502",
    city: "Himmelkron",
  },
  {
    id: "12368",
    zip: "95503",
    city: "Hummeltal",
  },
  {
    id: "12369",
    zip: "95505",
    city: "Immenreuth",
  },
  {
    id: "12370",
    zip: "95506",
    city: "Kastl",
  },
  {
    id: "12371",
    zip: "95508",
    city: "Kulmain",
  },
  {
    id: "12372",
    zip: "95509",
    city: "Marktschorgast",
  },
  {
    id: "12373",
    zip: "95511",
    city: "Mistelbach",
  },
  {
    id: "12374",
    zip: "95512",
    city: "Neudrossenfeld",
  },
  {
    id: "13308",
    zip: "95514",
    city: "Neustadt am Kulm",
  },
  {
    id: "12375",
    zip: "95515",
    city: "Plankenfels",
  },
  {
    id: "12376",
    zip: "95517",
    city: "Emtmannsberg",
  },
  {
    id: "12377",
    zip: "95519",
    city: "Vorbach",
  },
  {
    id: "12378",
    zip: "95615",
    city: "Marktredwitz",
  },
  {
    id: "12379",
    zip: "95632",
    city: "Wunsiedel",
  },
  {
    id: "12380",
    zip: "95643",
    city: "Tirschenreuth",
  },
  {
    id: "12381",
    zip: "95652",
    city: "Waldsassen",
  },
  {
    id: "12382",
    zip: "95659",
    city: "Arzberg",
  },
  {
    id: "12383",
    zip: "95666",
    city: "Mitterteich",
  },
  {
    id: "12384",
    zip: "95671",
    city: "Bärnau",
  },
  {
    id: "12385",
    zip: "95676",
    city: "Wiesau",
  },
  {
    id: "12386",
    zip: "95679",
    city: "Waldershof",
  },
  {
    id: "12387",
    zip: "95680",
    city: "Bad Alexandersbad",
  },
  {
    id: "12388",
    zip: "95682",
    city: "Brand",
  },
  {
    id: "12389",
    zip: "95683",
    city: "Ebnath",
  },
  {
    id: "12390",
    zip: "95685",
    city: "Falkenberg",
  },
  {
    id: "12391",
    zip: "95686",
    city: "Fichtelberg",
  },
  {
    id: "12392",
    zip: "95688",
    city: "Friedenfels",
  },
  {
    id: "12393",
    zip: "95689",
    city: "Fuchsmühl",
  },
  {
    id: "13309",
    zip: "95691",
    city: "Hohenberg an der Eger",
  },
  {
    id: "12394",
    zip: "95692",
    city: "Konnersreuth",
  },
  {
    id: "12395",
    zip: "95694",
    city: "Mehlmeisel",
  },
  {
    id: "12396",
    zip: "95695",
    city: "Mähring",
  },
  {
    id: "12397",
    zip: "95697",
    city: "Nagel",
  },
  {
    id: "12398",
    zip: "95698",
    city: "Neualbenreuth",
  },
  {
    id: "12399",
    zip: "95700",
    city: "Neusorg",
  },
  {
    id: "12400",
    zip: "95701",
    city: "Pechbrunn",
  },
  {
    id: "12401",
    zip: "95703",
    city: "Plößberg",
  },
  {
    id: "12402",
    zip: "95704",
    city: "Pullenreuth",
  },
  {
    id: "12403",
    zip: "95706",
    city: "Schirnding",
  },
  {
    id: "12404",
    zip: "95707",
    city: "Thiersheim",
  },
  {
    id: "12405",
    zip: "95709",
    city: "Tröstau",
  },
  {
    id: "12406",
    zip: "96047",
    city: "Bamberg",
  },
  {
    id: "12407",
    zip: "96049",
    city: "Bamberg",
  },
  {
    id: "12408",
    zip: "96050",
    city: "Bamberg",
  },
  {
    id: "12409",
    zip: "96052",
    city: "Bamberg",
  },
  {
    id: "12410",
    zip: "96103",
    city: "Hallstadt",
  },
  {
    id: "12411",
    zip: "96106",
    city: "Ebern",
  },
  {
    id: "12412",
    zip: "96110",
    city: "Scheßlitz",
  },
  {
    id: "12413",
    zip: "96114",
    city: "Hirschaid",
  },
  {
    id: "12414",
    zip: "96117",
    city: "Memmelsdorf",
  },
  {
    id: "12415",
    zip: "96120",
    city: "Bischberg",
  },
  {
    id: "12416",
    zip: "96123",
    city: "Litzendorf",
  },
  {
    id: "12417",
    zip: "96126",
    city: "Maroldsweisach",
  },
  {
    id: "12418",
    zip: "96129",
    city: "Strullendorf",
  },
  {
    id: "12419",
    zip: "96132",
    city: "Schlüsselfeld",
  },
  {
    id: "12420",
    zip: "96135",
    city: "Stegaurach",
  },
  {
    id: "12421",
    zip: "96138",
    city: "Burgebrach",
  },
  {
    id: "12422",
    zip: "96142",
    city: "Hollfeld",
  },
  {
    id: "12423",
    zip: "96145",
    city: "Seßlach",
  },
  {
    id: "12424",
    zip: "96146",
    city: "Altendorf",
  },
  {
    id: "12425",
    zip: "96148",
    city: "Baunach",
  },
  {
    id: "12426",
    zip: "96149",
    city: "Breitengüßbach",
  },
  {
    id: "12427",
    zip: "96151",
    city: "Breitbrunn",
  },
  {
    id: "12428",
    zip: "96152",
    city: "Burghaslach",
  },
  {
    id: "12429",
    zip: "96154",
    city: "Burgwindheim",
  },
  {
    id: "12430",
    zip: "96155",
    city: "Buttenheim",
  },
  {
    id: "12431",
    zip: "96157",
    city: "Ebrach",
  },
  {
    id: "12432",
    zip: "96158",
    city: "Frensdorf",
  },
  {
    id: "12433",
    zip: "96160",
    city: "Geiselwind",
  },
  {
    id: "12434",
    zip: "96161",
    city: "Gerach",
  },
  {
    id: "12435",
    zip: "96163",
    city: "Gundelsheim",
  },
  {
    id: "12436",
    zip: "96164",
    city: "Kemmern",
  },
  {
    id: "12437",
    zip: "96166",
    city: "Kirchlauter",
  },
  {
    id: "12438",
    zip: "96167",
    city: "Königsfeld",
  },
  {
    id: "12439",
    zip: "96169",
    city: "Lauter",
  },
  {
    id: "12440",
    zip: "96170",
    city: "Lisberg",
  },
  {
    id: "12441",
    zip: "96172",
    city: "Mühlhausen",
  },
  {
    id: "12442",
    zip: "96173",
    city: "Oberhaid",
  },
  {
    id: "12443",
    zip: "96175",
    city: "Pettstadt",
  },
  {
    id: "12444",
    zip: "96176",
    city: "Pfarrweisach",
  },
  {
    id: "12445",
    zip: "96178",
    city: "Pommersfelden",
  },
  {
    id: "12446",
    zip: "96179",
    city: "Rattelsdorf",
  },
  {
    id: "12447",
    zip: "96181",
    city: "Rauhenebrach",
  },
  {
    id: "12448",
    zip: "96182",
    city: "Reckendorf",
  },
  {
    id: "12449",
    zip: "96184",
    city: "Rentweinsdorf",
  },
  {
    id: "13310",
    zip: "96185",
    city: "Schönbrunn im Steigerwald",
  },
  {
    id: "12450",
    zip: "96187",
    city: "Stadelhofen",
  },
  {
    id: "12451",
    zip: "96188",
    city: "Stettfeld",
  },
  {
    id: "12452",
    zip: "96190",
    city: "Untermerzbach",
  },
  {
    id: "12453",
    zip: "96191",
    city: "Viereth-Trunstadt",
  },
  {
    id: "12454",
    zip: "96193",
    city: "Wachenroth",
  },
  {
    id: "12455",
    zip: "96194",
    city: "Walsdorf",
  },
  {
    id: "12456",
    zip: "96196",
    city: "Wattendorf",
  },
  {
    id: "12457",
    zip: "96197",
    city: "Wonsees",
  },
  {
    id: "12458",
    zip: "96199",
    city: "Zapfendorf",
  },
  {
    id: "12459",
    zip: "96215",
    city: "Lichtenfels",
  },
  {
    id: "12460",
    zip: "96224",
    city: "Burgkunstadt",
  },
  {
    id: "12461",
    zip: "96231",
    city: "Staffelstein",
  },
  {
    id: "13311",
    zip: "96237",
    city: "Ebersdorf bei Coburg",
  },
  {
    id: "12462",
    zip: "96242",
    city: "Sonnefeld",
  },
  {
    id: "13312",
    zip: "96247",
    city: "Michelau in Oberfranken",
  },
  {
    id: "12463",
    zip: "96250",
    city: "Ebensfeld",
  },
  {
    id: "12464",
    zip: "96253",
    city: "Untersiemau",
  },
  {
    id: "13313",
    zip: "96257",
    city: "Redwitz an der Rodach",
  },
  {
    id: "12465",
    zip: "96260",
    city: "Weismain",
  },
  {
    id: "12466",
    zip: "96264",
    city: "Altenkunstadt",
  },
  {
    id: "12467",
    zip: "96268",
    city: "Mitwitz",
  },
  {
    id: "12468",
    zip: "96269",
    city: "Großheirath",
  },
  {
    id: "13314",
    zip: "96271",
    city: "Grub am Forst",
  },
  {
    id: "13315",
    zip: "96272",
    city: "Hochstadt am Main",
  },
  {
    id: "12469",
    zip: "96274",
    city: "Itzgrund",
  },
  {
    id: "12470",
    zip: "96275",
    city: "Marktzeuln",
  },
  {
    id: "12471",
    zip: "96277",
    city: "Schneckenlohe",
  },
  {
    id: "13316",
    zip: "96279",
    city: "Weidhausen bei Coburg",
  },
  {
    id: "12472",
    zip: "96317",
    city: "Kronach",
  },
  {
    id: "12473",
    zip: "96328",
    city: "Küps",
  },
  {
    id: "12474",
    zip: "96332",
    city: "Pressig",
  },
  {
    id: "12475",
    zip: "96337",
    city: "Ludwigsstadt",
  },
  {
    id: "12476",
    zip: "96342",
    city: "Stockheim",
  },
  {
    id: "12477",
    zip: "96346",
    city: "Wallenfels",
  },
  {
    id: "12478",
    zip: "96349",
    city: "Steinwiesen",
  },
  {
    id: "12479",
    zip: "96352",
    city: "Wilhelmsthal",
  },
  {
    id: "12480",
    zip: "96355",
    city: "Tettau",
  },
  {
    id: "12481",
    zip: "96358",
    city: "Teuschnitz",
  },
  {
    id: "13317",
    zip: "96361",
    city: "Steinbach am Wald",
  },
  {
    id: "12482",
    zip: "96364",
    city: "Marktrodach",
  },
  {
    id: "12483",
    zip: "96365",
    city: "Nordhalben",
  },
  {
    id: "12484",
    zip: "96367",
    city: "Tschirn",
  },
  {
    id: "12485",
    zip: "96369",
    city: "Weißenbrunn",
  },
  {
    id: "12486",
    zip: "96450",
    city: "Coburg",
  },
  {
    id: "13318",
    zip: "96465",
    city: "Neustadt bei Coburg",
  },
  {
    id: "12487",
    zip: "96472",
    city: "Rödental",
  },
  {
    id: "13319",
    zip: "96476",
    city: "Rodach bei Coburg",
  },
  {
    id: "12488",
    zip: "96479",
    city: "Weitramsdorf",
  },
  {
    id: "12489",
    zip: "96482",
    city: "Ahorn",
  },
  {
    id: "12490",
    zip: "96484",
    city: "Meeder",
  },
  {
    id: "12491",
    zip: "96486",
    city: "Lautertal",
  },
  {
    id: "12492",
    zip: "96487",
    city: "Dörfles-Esbach",
  },
  {
    id: "12493",
    zip: "96489",
    city: "Niederfüllbach",
  },
  {
    id: "12494",
    zip: "96515",
    city: "Sonneberg",
  },
  {
    id: "12495",
    zip: "96523",
    city: "Steinach",
  },
  {
    id: "12496",
    zip: "96524",
    city: "Neuhaus-Schierschnitz",
  },
  {
    id: "12497",
    zip: "96528",
    city: "Effelder-Rauenstein",
  },
  {
    id: "12498",
    zip: "96529",
    city: "Mengersgereuth-Hämmern",
  },
  {
    id: "12499",
    zip: "97070",
    city: "Würzburg",
  },
  {
    id: "12500",
    zip: "97072",
    city: "Würzburg",
  },
  {
    id: "12501",
    zip: "97074",
    city: "Würzburg",
  },
  {
    id: "12502",
    zip: "97076",
    city: "Würzburg",
  },
  {
    id: "12503",
    zip: "97078",
    city: "Würzburg",
  },
  {
    id: "12504",
    zip: "97080",
    city: "Würzburg",
  },
  {
    id: "12505",
    zip: "97082",
    city: "Würzburg",
  },
  {
    id: "12506",
    zip: "97084",
    city: "Würzburg",
  },
  {
    id: "12507",
    zip: "97199",
    city: "Ochsenfurt",
  },
  {
    id: "12508",
    zip: "97204",
    city: "Höchberg",
  },
  {
    id: "12509",
    zip: "97209",
    city: "Veitshöchheim",
  },
  {
    id: "12510",
    zip: "97215",
    city: "Uffenheim",
  },
  {
    id: "12511",
    zip: "97218",
    city: "Gerbrunn",
  },
  {
    id: "12512",
    zip: "97222",
    city: "Rimpar",
  },
  {
    id: "12513",
    zip: "97225",
    city: "Zellingen",
  },
  {
    id: "12514",
    zip: "97228",
    city: "Rottendorf",
  },
  {
    id: "12515",
    zip: "97230",
    city: "Estenfeld",
  },
  {
    id: "12516",
    zip: "97232",
    city: "Giebelstadt",
  },
  {
    id: "12517",
    zip: "97234",
    city: "Reichenberg",
  },
  {
    id: "12518",
    zip: "97236",
    city: "Randersacker",
  },
  {
    id: "12519",
    zip: "97237",
    city: "Altertheim",
  },
  {
    id: "12520",
    zip: "97239",
    city: "Aub",
  },
  {
    id: "12521",
    zip: "97241",
    city: "Bergtheim",
  },
  {
    id: "12522",
    zip: "97243",
    city: "Bieberehren",
  },
  {
    id: "12523",
    zip: "97244",
    city: "Bütthard",
  },
  {
    id: "12524",
    zip: "97246",
    city: "Eibelstadt",
  },
  {
    id: "12525",
    zip: "97247",
    city: "Eisenheim",
  },
  {
    id: "12526",
    zip: "97249",
    city: "Eisingen",
  },
  {
    id: "12527",
    zip: "97250",
    city: "Erlabrunn",
  },
  {
    id: "13320",
    zip: "97252",
    city: "Frickenhausen am Main",
  },
  {
    id: "12528",
    zip: "97253",
    city: "Gaukönigshofen",
  },
  {
    id: "12529",
    zip: "97255",
    city: "Gelchsheim",
  },
  {
    id: "12530",
    zip: "97256",
    city: "Geroldshausen",
  },
  {
    id: "12531",
    zip: "97258",
    city: "Ippesheim",
  },
  {
    id: "12532",
    zip: "97259",
    city: "Greußenheim",
  },
  {
    id: "12533",
    zip: "97261",
    city: "Güntersleben",
  },
  {
    id: "13321",
    zip: "97262",
    city: "Hausen bei Würzburg",
  },
  {
    id: "12534",
    zip: "97264",
    city: "Helmstadt",
  },
  {
    id: "12535",
    zip: "97265",
    city: "Hettstadt",
  },
  {
    id: "12536",
    zip: "97267",
    city: "Himmelstadt",
  },
  {
    id: "12537",
    zip: "97268",
    city: "Kirchheim",
  },
  {
    id: "12538",
    zip: "97270",
    city: "Kist",
  },
  {
    id: "12539",
    zip: "97271",
    city: "Kleinrinderfeld",
  },
  {
    id: "12540",
    zip: "97273",
    city: "Kürnach",
  },
  {
    id: "12541",
    zip: "97274",
    city: "Leinach",
  },
  {
    id: "12542",
    zip: "97276",
    city: "Margetshöchheim",
  },
  {
    id: "12543",
    zip: "97277",
    city: "Neubrunn",
  },
  {
    id: "12544",
    zip: "97279",
    city: "Prosselsheim",
  },
  {
    id: "12545",
    zip: "97280",
    city: "Remlingen",
  },
  {
    id: "12546",
    zip: "97282",
    city: "Retzstadt",
  },
  {
    id: "12547",
    zip: "97283",
    city: "Riedenheim",
  },
  {
    id: "12548",
    zip: "97285",
    city: "Röttingen",
  },
  {
    id: "12549",
    zip: "97286",
    city: "Sommerhausen",
  },
  {
    id: "12550",
    zip: "97288",
    city: "Theilheim",
  },
  {
    id: "12551",
    zip: "97289",
    city: "Thüngen",
  },
  {
    id: "12552",
    zip: "97291",
    city: "Thüngersheim",
  },
  {
    id: "12553",
    zip: "97292",
    city: "Uettingen",
  },
  {
    id: "12554",
    zip: "97294",
    city: "Unterpleichfeld",
  },
  {
    id: "12555",
    zip: "97295",
    city: "Waldbrunn",
  },
  {
    id: "12556",
    zip: "97297",
    city: "Waldbüttelbrunn",
  },
  {
    id: "13322",
    zip: "97299",
    city: "Zell am Main",
  },
  {
    id: "12557",
    zip: "97318",
    city: "Kitzingen",
  },
  {
    id: "12558",
    zip: "97320",
    city: "Albertshofen",
  },
  {
    id: "12559",
    zip: "97332",
    city: "Volkach",
  },
  {
    id: "12560",
    zip: "97334",
    city: "Sommerach",
  },
  {
    id: "12561",
    zip: "97337",
    city: "Dettelbach",
  },
  {
    id: "12562",
    zip: "97340",
    city: "Marktbreit",
  },
  {
    id: "12563",
    zip: "97342",
    city: "Obernbreit",
  },
  {
    id: "12564",
    zip: "97346",
    city: "Iphofen",
  },
  {
    id: "12565",
    zip: "97348",
    city: "Rödelsee",
  },
  {
    id: "12566",
    zip: "97350",
    city: "Mainbernheim",
  },
  {
    id: "12567",
    zip: "97353",
    city: "Wiesentheid",
  },
  {
    id: "12568",
    zip: "97355",
    city: "Kleinlangheim",
  },
  {
    id: "12569",
    zip: "97357",
    city: "Prichsenstadt",
  },
  {
    id: "13323",
    zip: "97359",
    city: "Schwarzach am Main",
  },
  {
    id: "12570",
    zip: "97421",
    city: "Schweinfurt",
  },
  {
    id: "12571",
    zip: "97422",
    city: "Schweinfurt",
  },
  {
    id: "12572",
    zip: "97424",
    city: "Schweinfurt",
  },
  {
    id: "12573",
    zip: "97437",
    city: "Haßfurt",
  },
  {
    id: "12574",
    zip: "97440",
    city: "Werneck",
  },
  {
    id: "12575",
    zip: "97447",
    city: "Gerolzhofen",
  },
  {
    id: "12576",
    zip: "97450",
    city: "Arnstein",
  },
  {
    id: "12577",
    zip: "97453",
    city: "Schonungen",
  },
  {
    id: "12578",
    zip: "97456",
    city: "Dittelbrunn",
  },
  {
    id: "13324",
    zip: "97461",
    city: "Hofheim in Unterfranken",
  },
  {
    id: "12579",
    zip: "97464",
    city: "Niederwerrn",
  },
  {
    id: "12580",
    zip: "97469",
    city: "Gochsheim",
  },
  {
    id: "13325",
    zip: "97475",
    city: "Zeil am Main",
  },
  {
    id: "12581",
    zip: "97478",
    city: "Knetzgau",
  },
  {
    id: "12582",
    zip: "97483",
    city: "Eltmann",
  },
  {
    id: "13326",
    zip: "97486",
    city: "Königsberg in Bayern",
  },
  {
    id: "12583",
    zip: "97488",
    city: "Stadtlauringen",
  },
  {
    id: "12584",
    zip: "97490",
    city: "Poppenhausen",
  },
  {
    id: "12586",
    zip: "97491",
    city: "Aidhausen",
  },
  {
    id: "12587",
    zip: "97493",
    city: "Bergrheinfeld",
  },
  {
    id: "12588",
    zip: "97494",
    city: "Bundorf",
  },
  {
    id: "12589",
    zip: "97496",
    city: "Burgpreppach",
  },
  {
    id: "12590",
    zip: "97497",
    city: "Dingolshausen",
  },
  {
    id: "12585",
    zip: "97499",
    city: "Donnersdorf",
  },
  {
    id: "12591",
    zip: "97500",
    city: "Ebelsbach",
  },
  {
    id: "12592",
    zip: "97502",
    city: "Euerbach",
  },
  {
    id: "12593",
    zip: "97503",
    city: "Gädheim",
  },
  {
    id: "12594",
    zip: "97505",
    city: "Geldersheim",
  },
  {
    id: "12595",
    zip: "97506",
    city: "Grafenrheinfeld",
  },
  {
    id: "12596",
    zip: "97508",
    city: "Grettstadt",
  },
  {
    id: "12597",
    zip: "97509",
    city: "Kolitzheim",
  },
  {
    id: "12598",
    zip: "97511",
    city: "Lülsfeld",
  },
  {
    id: "13327",
    zip: "97513",
    city: "Michelau im Steigerwald",
  },
  {
    id: "12599",
    zip: "97514",
    city: "Oberaurach",
  },
  {
    id: "12600",
    zip: "97516",
    city: "Oberschwarzach",
  },
  {
    id: "12601",
    zip: "97517",
    city: "Rannungen",
  },
  {
    id: "12602",
    zip: "97519",
    city: "Riedbach",
  },
  {
    id: "12603",
    zip: "97520",
    city: "Röthlein",
  },
  {
    id: "13328",
    zip: "97522",
    city: "Sand am Main",
  },
  {
    id: "12604",
    zip: "97523",
    city: "Schwanfeld",
  },
  {
    id: "12605",
    zip: "97525",
    city: "Schwebheim",
  },
  {
    id: "12606",
    zip: "97526",
    city: "Sennfeld",
  },
  {
    id: "13329",
    zip: "97528",
    city: "Sulzdorf an der Lederhecke",
  },
  {
    id: "12607",
    zip: "97529",
    city: "Sulzheim",
  },
  {
    id: "12608",
    zip: "97531",
    city: "Theres",
  },
  {
    id: "12609",
    zip: "97532",
    city: "Üchtelhausen",
  },
  {
    id: "12610",
    zip: "97534",
    city: "Waigolshausen",
  },
  {
    id: "12611",
    zip: "97535",
    city: "Wasserlosen",
  },
  {
    id: "12612",
    zip: "97537",
    city: "Wipfeld",
  },
  {
    id: "12613",
    zip: "97539",
    city: "Wonfurt",
  },
  {
    id: "13330",
    zip: "97616",
    city: "Bad Neustadt an der Saale",
  },
  {
    id: "12614",
    zip: "97618",
    city: "Hohenroth",
  },
  {
    id: "13331",
    zip: "97631",
    city: "Bad Königshofen im Grabfeld",
  },
  {
    id: "12615",
    zip: "97633",
    city: "Sulzfeld",
  },
  {
    id: "12616",
    zip: "97638",
    city: "Mellrichstadt",
  },
  {
    id: "12617",
    zip: "97640",
    city: "Oberstreu",
  },
  {
    id: "13332",
    zip: "97645",
    city: "Ostheim vor der Rhön",
  },
  {
    id: "13333",
    zip: "97647",
    city: "Nordheim vor der Rhön",
  },
  {
    id: "12618",
    zip: "97650",
    city: "Fladungen",
  },
  {
    id: "13334",
    zip: "97653",
    city: "Bischofsheim an der Rhön",
  },
  {
    id: "12619",
    zip: "97654",
    city: "Bastheim",
  },
  {
    id: "12620",
    zip: "97656",
    city: "Oberelsbach",
  },
  {
    id: "12621",
    zip: "97657",
    city: "Sandberg",
  },
  {
    id: "13335",
    zip: "97659",
    city: "Schönau an der Brend",
  },
  {
    id: "12622",
    zip: "97688",
    city: "Bad Kissingen",
  },
  {
    id: "12623",
    zip: "97702",
    city: "Münnerstadt",
  },
  {
    id: "12624",
    zip: "97705",
    city: "Burkardroth",
  },
  {
    id: "12625",
    zip: "97708",
    city: "Bad Bocklet",
  },
  {
    id: "12627",
    zip: "97711",
    city: "Maßbach",
  },
  {
    id: "12628",
    zip: "97714",
    city: "Oerlenbach",
  },
  {
    id: "12629",
    zip: "97717",
    city: "Euerdorf",
  },
  {
    id: "12630",
    zip: "97720",
    city: "Nüdlingen",
  },
  {
    id: "12631",
    zip: "97723",
    city: "Oberthulba",
  },
  {
    id: "12632",
    zip: "97724",
    city: "Burglauer",
  },
  {
    id: "12633",
    zip: "97725",
    city: "Elfershausen",
  },
  {
    id: "12634",
    zip: "97727",
    city: "Fuchsstadt",
  },
  {
    id: "12635",
    zip: "97729",
    city: "Ramsthal",
  },
  {
    id: "13336",
    zip: "97737",
    city: "Gemünden am Main",
  },
  {
    id: "12636",
    zip: "97753",
    city: "Karlstadt",
  },
  {
    id: "12637",
    zip: "97762",
    city: "Hammelburg",
  },
  {
    id: "12638",
    zip: "97769",
    city: "Bad Brückenau",
  },
  {
    id: "12639",
    zip: "97772",
    city: "Wildflecken",
  },
  {
    id: "13337",
    zip: "97773",
    city: "Aura im Sinngrund",
  },
  {
    id: "12640",
    zip: "97775",
    city: "Burgsinn",
  },
  {
    id: "12641",
    zip: "97776",
    city: "Eußenheim",
  },
  {
    id: "12642",
    zip: "97778",
    city: "Fellen",
  },
  {
    id: "12643",
    zip: "97779",
    city: "Geroda",
  },
  {
    id: "12626",
    zip: "97780",
    city: "Gössenheim",
  },
  {
    id: "12644",
    zip: "97782",
    city: "Gräfendorf",
  },
  {
    id: "12645",
    zip: "97783",
    city: "Karsbach",
  },
  {
    id: "12646",
    zip: "97785",
    city: "Mittelsinn",
  },
  {
    id: "12647",
    zip: "97786",
    city: "Motten",
  },
  {
    id: "12648",
    zip: "97788",
    city: "Neuendorf",
  },
  {
    id: "12649",
    zip: "97789",
    city: "Oberleichtersbach",
  },
  {
    id: "12650",
    zip: "97791",
    city: "Obersinn",
  },
  {
    id: "12651",
    zip: "97792",
    city: "Riedenberg",
  },
  {
    id: "12652",
    zip: "97794",
    city: "Rieneck",
  },
  {
    id: "12653",
    zip: "97795",
    city: "Schondra",
  },
  {
    id: "12654",
    zip: "97797",
    city: "Wartmannsroth",
  },
  {
    id: "12655",
    zip: "97799",
    city: "Zeitlofs",
  },
  {
    id: "13338",
    zip: "97816",
    city: "Lohr am Main",
  },
  {
    id: "12656",
    zip: "97828",
    city: "Marktheidenfeld",
  },
  {
    id: "12657",
    zip: "97833",
    city: "Frammersbach",
  },
  {
    id: "12658",
    zip: "97834",
    city: "Birkenfeld",
  },
  {
    id: "12659",
    zip: "97836",
    city: "Bischbrunn",
  },
  {
    id: "13339",
    zip: "97837",
    city: "Erlenbach bei Marktheidenfeld",
  },
  {
    id: "12660",
    zip: "97839",
    city: "Esselbach",
  },
  {
    id: "12661",
    zip: "97840",
    city: "Hafenlohr",
  },
  {
    id: "12662",
    zip: "97842",
    city: "Karbach",
  },
  {
    id: "12663",
    zip: "97843",
    city: "Neuhütten",
  },
  {
    id: "13340",
    zip: "97845",
    city: "Neustadt am Main",
  },
  {
    id: "12664",
    zip: "97846",
    city: "Partenstein",
  },
  {
    id: "12665",
    zip: "97848",
    city: "Rechtenbach",
  },
  {
    id: "12666",
    zip: "97849",
    city: "Roden",
  },
  {
    id: "12667",
    zip: "97851",
    city: "Rothenfels",
  },
  {
    id: "12668",
    zip: "97852",
    city: "Bischbrunn",
  },
  {
    id: "12669",
    zip: "97854",
    city: "Steinfeld",
  },
  {
    id: "12670",
    zip: "97855",
    city: "Triefenstein",
  },
  {
    id: "12671",
    zip: "97857",
    city: "Urspringen",
  },
  {
    id: "12672",
    zip: "97859",
    city: "Wiesthal",
  },
  {
    id: "12673",
    zip: "97877",
    city: "Wertheim",
  },
  {
    id: "12674",
    zip: "97892",
    city: "Kreuzwertheim",
  },
  {
    id: "12675",
    zip: "97896",
    city: "Freudenberg",
  },
  {
    id: "12676",
    zip: "97900",
    city: "Külsheim",
  },
  {
    id: "12677",
    zip: "97901",
    city: "Altenbuch",
  },
  {
    id: "12678",
    zip: "97903",
    city: "Collenberg",
  },
  {
    id: "12679",
    zip: "97904",
    city: "Dorfprozelten",
  },
  {
    id: "12680",
    zip: "97906",
    city: "Faulbach",
  },
  {
    id: "12681",
    zip: "97907",
    city: "Hasloch",
  },
  {
    id: "12682",
    zip: "97909",
    city: "Stadtprozelten",
  },
  {
    id: "12683",
    zip: "97922",
    city: "Lauda-Königshofen",
  },
  {
    id: "12684",
    zip: "97941",
    city: "Tauberbischofsheim",
  },
  {
    id: "12685",
    zip: "97944",
    city: "Boxberg",
  },
  {
    id: "12686",
    zip: "97947",
    city: "Grünsfeld",
  },
  {
    id: "12687",
    zip: "97950",
    city: "Großrinderfeld",
  },
  {
    id: "12688",
    zip: "97953",
    city: "Königheim",
  },
  {
    id: "12689",
    zip: "97956",
    city: "Werbach",
  },
  {
    id: "12690",
    zip: "97957",
    city: "Wittighausen",
  },
  {
    id: "12691",
    zip: "97959",
    city: "Assamstadt",
  },
  {
    id: "12692",
    zip: "97980",
    city: "Bad Mergentheim",
  },
  {
    id: "12693",
    zip: "97990",
    city: "Weikersheim",
  },
  {
    id: "12694",
    zip: "97993",
    city: "Creglingen",
  },
  {
    id: "12695",
    zip: "97996",
    city: "Niederstetten",
  },
  {
    id: "12696",
    zip: "97999",
    city: "Igersheim",
  },
  {
    id: "12697",
    zip: "98527",
    city: "Suhl",
  },
  {
    id: "12698",
    zip: "98528",
    city: "Suhl",
  },
  {
    id: "12699",
    zip: "98529",
    city: "Suhl",
  },
  {
    id: "12700",
    zip: "98530",
    city: "Suhl",
  },
  {
    id: "12701",
    zip: "98544",
    city: "Zella-Mehlis",
  },
  {
    id: "12702",
    zip: "98547",
    city: "Viernau",
  },
  {
    id: "12703",
    zip: "98553",
    city: "Schleusingen",
  },
  {
    id: "12704",
    zip: "98554",
    city: "Benshausen",
  },
  {
    id: "12705",
    zip: "98559",
    city: "Oberhof",
  },
  {
    id: "12706",
    zip: "98574",
    city: "Schmalkalden",
  },
  {
    id: "12707",
    zip: "98587",
    city: "Steinbach-Hallenberg",
  },
  {
    id: "12708",
    zip: "98590",
    city: "Schmalkalden",
  },
  {
    id: "12709",
    zip: "98593",
    city: "Floh-Seligenthal",
  },
  {
    id: "12710",
    zip: "98596",
    city: "Trusetal",
  },
  {
    id: "12908",
    zip: "98597",
    city: "Breitungen / Werra",
  },
  {
    id: "12711",
    zip: "98599",
    city: "Brotterode",
  },
  {
    id: "12712",
    zip: "98617",
    city: "Meiningen",
  },
  {
    id: "12713",
    zip: "98631",
    city: "Römhild",
  },
  {
    id: "12714",
    zip: "98634",
    city: "Wasungen",
  },
  {
    id: "12715",
    zip: "98639",
    city: "Walldorf",
  },
  {
    id: "12716",
    zip: "98646",
    city: "Hildburghausen",
  },
  {
    id: "12717",
    zip: "98660",
    city: "Themar",
  },
  {
    id: "12718",
    zip: "98663",
    city: "Bad Colberg-Heldburg",
  },
  {
    id: "12719",
    zip: "98666",
    city: "Heubach",
  },
  {
    id: "12720",
    zip: "98667",
    city: "Schleusegrund",
  },
  {
    id: "12721",
    zip: "98669",
    city: "Veilsdorf",
  },
  {
    id: "12722",
    zip: "98673",
    city: "Eisfeld",
  },
  {
    id: "12723",
    zip: "98678",
    city: "Sachsenbrunn",
  },
  {
    id: "12724",
    zip: "98693",
    city: "Ilmenau",
  },
  {
    id: "12725",
    zip: "98701",
    city: "Großbreitenbach",
  },
  {
    id: "12726",
    zip: "98704",
    city: "Langewiesen",
  },
  {
    id: "12727",
    zip: "98708",
    city: "Gehren",
  },
  {
    id: "12728",
    zip: "98711",
    city: "Suhl",
  },
  {
    id: "12729",
    zip: "98714",
    city: "Stützerbach",
  },
  {
    id: "12730",
    zip: "98716",
    city: "Geschwenda",
  },
  {
    id: "13341",
    zip: "98724",
    city: "Neuhaus am Rennweg",
  },
  {
    id: "12731",
    zip: "98739",
    city: "Lichte",
  },
  {
    id: "12732",
    zip: "98743",
    city: "Gräfenthal",
  },
  {
    id: "13344",
    zip: "98744",
    city: "Oberweißbach / Thüringer Wald",
  },
  {
    id: "12733",
    zip: "98746",
    city: "Katzhütte",
  },
  {
    id: "12734",
    zip: "98749",
    city: "Steinheid",
  },
  {
    id: "12735",
    zip: "99084",
    city: "Erfurt",
  },
  {
    id: "12736",
    zip: "99085",
    city: "Erfurt",
  },
  {
    id: "12737",
    zip: "99086",
    city: "Erfurt",
  },
  {
    id: "12738",
    zip: "99087",
    city: "Erfurt",
  },
  {
    id: "12739",
    zip: "99089",
    city: "Erfurt",
  },
  {
    id: "12740",
    zip: "99091",
    city: "Erfurt",
  },
  {
    id: "12748",
    zip: "99092",
    city: "Erfurt",
  },
  {
    id: "12749",
    zip: "99094",
    city: "Erfurt",
  },
  {
    id: "12750",
    zip: "99096",
    city: "Erfurt",
  },
  {
    id: "12751",
    zip: "99097",
    city: "Erfurt",
  },
  {
    id: "12752",
    zip: "99098",
    city: "Erfurt",
  },
  {
    id: "12741",
    zip: "99099",
    city: "Erfurt",
  },
  {
    id: "12742",
    zip: "99100",
    city: "Erfurt",
  },
  {
    id: "12743",
    zip: "99102",
    city: "Erfurt",
  },
  {
    id: "12744",
    zip: "99189",
    city: "Erfurt",
  },
  {
    id: "12745",
    zip: "99192",
    city: "Erfurt",
  },
  {
    id: "12746",
    zip: "99195",
    city: "Erfurt",
  },
  {
    id: "12747",
    zip: "99198",
    city: "Erfurt",
  },
  {
    id: "12753",
    zip: "99310",
    city: "Arnstadt",
  },
  {
    id: "12754",
    zip: "99326",
    city: "Stadtilm",
  },
  {
    id: "12755",
    zip: "99330",
    city: "Gräfenroda",
  },
  {
    id: "12756",
    zip: "99334",
    city: "Ichtershausen",
  },
  {
    id: "12757",
    zip: "99338",
    city: "Arnstadt",
  },
  {
    id: "12758",
    zip: "99423",
    city: "Weimar",
  },
  {
    id: "12759",
    zip: "99425",
    city: "Weimar",
  },
  {
    id: "12760",
    zip: "99427",
    city: "Weimar",
  },
  {
    id: "12761",
    zip: "99428",
    city: "Weimar",
  },
  {
    id: "12762",
    zip: "99438",
    city: "Weimar",
  },
  {
    id: "12763",
    zip: "99439",
    city: "Berlstedt",
  },
  {
    id: "12764",
    zip: "99441",
    city: "Weimar",
  },
  {
    id: "12765",
    zip: "99444",
    city: "Blankenhain",
  },
  {
    id: "12766",
    zip: "99448",
    city: "Kranichfeld",
  },
  {
    id: "12767",
    zip: "99510",
    city: "Apolda",
  },
  {
    id: "12768",
    zip: "99518",
    city: "Bad Sulza",
  },
  {
    id: "12769",
    zip: "99610",
    city: "Sömmerda",
  },
  {
    id: "12770",
    zip: "99625",
    city: "Kölleda",
  },
  {
    id: "12771",
    zip: "99628",
    city: "Buttstädt",
  },
  {
    id: "12772",
    zip: "99631",
    city: "Weißensee",
  },
  {
    id: "12773",
    zip: "99634",
    city: "Straußfurt",
  },
  {
    id: "12774",
    zip: "99636",
    city: "Rastenberg",
  },
  {
    id: "12775",
    zip: "99638",
    city: "Kindelbrück",
  },
  {
    id: "12776",
    zip: "99706",
    city: "Sondershausen",
  },
  {
    id: "12777",
    zip: "99713",
    city: "Ebeleben",
  },
  {
    id: "12778",
    zip: "99718",
    city: "Greußen",
  },
  {
    id: "12779",
    zip: "99734",
    city: "Nordhausen",
  },
  {
    id: "12780",
    zip: "99735",
    city: "Nordhausen",
  },
  {
    id: "12781",
    zip: "99752",
    city: "Bleicherode",
  },
  {
    id: "12782",
    zip: "99755",
    city: "Ellrich",
  },
  {
    id: "12783",
    zip: "99759",
    city: "Sollstedt",
  },
  {
    id: "12784",
    zip: "99762",
    city: "Niedersachswerfen",
  },
  {
    id: "12909",
    zip: "99765",
    city: "Heringen / Helme",
  },
  {
    id: "12786",
    zip: "99768",
    city: "Ilfeld",
  },
  {
    id: "12787",
    zip: "99817",
    city: "Eisenach",
  },
  {
    id: "12788",
    zip: "99819",
    city: "Eisenach",
  },
  {
    id: "12789",
    zip: "99826",
    city: "Mihla",
  },
  {
    id: "12790",
    zip: "99830",
    city: "Treffurt",
  },
  {
    id: "12791",
    zip: "99831",
    city: "Creuzburg",
  },
  {
    id: "12792",
    zip: "99834",
    city: "Gerstungen",
  },
  {
    id: "12836",
    zip: "99837",
    city: "Berka / Werra",
  },
  {
    id: "12793",
    zip: "99842",
    city: "Ruhla",
  },
  {
    id: "12794",
    zip: "99843",
    city: "Ruhla",
  },
  {
    id: "12785",
    zip: "99846",
    city: "Seebach",
  },
  {
    id: "12795",
    zip: "99848",
    city: "Wutha-Farnroda",
  },
  {
    id: "12796",
    zip: "99867",
    city: "Gotha",
  },
  {
    id: "12797",
    zip: "99869",
    city: "Gotha",
  },
  {
    id: "12798",
    zip: "99880",
    city: "Waltershausen",
  },
  {
    id: "12799",
    zip: "99885",
    city: "Ohrdruf",
  },
  {
    id: "13345",
    zip: "99887",
    city: "Georgenthal / Thüringer Wald",
  },
  {
    id: "13346",
    zip: "99891",
    city: "Tabarz / Thüringer Wald",
  },
  {
    id: "12800",
    zip: "99894",
    city: "Friedrichroda",
  },
  {
    id: "13347",
    zip: "99897",
    city: "Tambach-Dietharz / Thüringen",
  },
  {
    id: "12801",
    zip: "99898",
    city: "Finsterbergen",
  },
  {
    id: "12802",
    zip: "99947",
    city: "Bad Langensalza",
  },
  {
    id: "12803",
    zip: "99955",
    city: "Bad Tennstedt",
  },
  {
    id: "12804",
    zip: "99958",
    city: "Bad Langensalza",
  },
  {
    id: "12805",
    zip: "99974",
    city: "Mühlhausen",
  },
  {
    id: "12806",
    zip: "99976",
    city: "Rodeberg",
  },
  {
    id: "12807",
    zip: "99986",
    city: "Oberdorla",
  },
  {
    id: "12808",
    zip: "99988",
    city: "Heyerode",
  },
  {
    id: "12809",
    zip: "99991",
    city: "Großengottern",
  },
  {
    id: "12810",
    zip: "99994",
    city: "Schlotheim",
  },
  {
    id: "12811",
    zip: "99996",
    city: "Mühlhausen",
  },
  {
    id: "12812",
    zip: "99998",
    city: "Weinbergen",
  },
];
