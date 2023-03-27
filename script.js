"use strict";

/* To make this, enable "One Column" option in SumoDB, copy & paste the tables
 * as plain text and then turn them into array like this. Don't forget to add
 * the empty spots in the banzuke (as empty string ""). Put the character ' '
 * in between the record and special letter Y, S, DK ... As ' '
 * is not considered a regular whitespace, it will not expand. Also make sure to
 * remove any double spaces.
 */
var theSekitori = [
  "Y1e Terunofuji 0-0-15",
  "",
  "",
  "O1w Takakeisho 3-4-8",
  "S1e Wakatakakage 7-7-1",
  "S1w Hoshoryu 10-5",
  "S2e Kiribayama 12-3 YG",
  "",
  "K1e Wakamotoharu 11-4",
  "K1w Kotonowaka 9-6",
  "K2e Daieisho 12-3 DG",
  "K2w Tobizaru 6-9",
  "M1e Tamawashi 3-12",
  "M1w Shodai 10-5",
  "M2e Abi 9-6",
  "M2w Ryuden 2-13",
  "M3e Mitakeumi 4-11",
  "M3w Nishikigi 6-9",
  "M4e Onosho 4-5-6",
  "M4w Meisei 5-10",
  "M5e Kotoshoho 6-9",
  "M5w Midorifuji 10-5",
  "M6e Endo 9-6",
  "M6w Sadanoumi 6-9",
  "M7e Hokutofuji 7-8",
  "M7w Takayasu 10-5",
  "M8e Ichiyamamoto 4-11",
  "M8w Ura 9-6",
  "M9e Aoiyama 6-9",
  "M9w Hiradoumi 7-8",
  "M10e Myogiryu 5-10",
  "M10w Nishikifuji 10-5",
  "M11e Azumaryu 4-11",
  "M11w Takanosho 8-7",
  "M12e Kagayaki 5-10",
  "M12w Takarafuji 8-7",
  "M13e Daishoho 8-7",
  "M13w Kotoeko 8-7",
  "M14e Kinbozan 11-4 K",
  "M14w Bushozan 5-10",
  "M15e Hokuseiho 9-6",
  "M15w Oho 7-8",
  "M16e Chiyoshoma 9-6",
  "M16w Tsurugisho 8-7",
  "M17e Mitoryu 8-7",
  "",
  "J1e Asanoyama 13-2",
  "J1w Tohakuryu 7-8",
  "J2e Chiyonokuni 3-12",
  "J2w Tochinoshin 5-10",
  "J3e Ichinojo 14-1 Y",
  "J3w Shonannoumi 9-6",
  "J4e Chiyomaru 4-11",
  "J4w Oshoma 8-7",
  "J5e Roga 8-7",
  "J5w Enho 9-6",
  "J6e Gonoyama 11-4",
  "J6w Daiamami 6-9",
  "J7e Akua 8-7",
  "J7w Shimazuumi 8-7",
  "J8e Hidenoumi 6-9",
  "J8w Atamifuji 8-7",
  "J9e Tsushimanada 4-11",
  "J9w Hakuyozan 9-6",
  "J10e Kotokuzan 4-11",
  "J10w Churanoumi 9-6",
  "J11e Shimanoumi 5-10",
  "J11w Kitanowaka 8-7",
  "J12e Tochimusashi 4-11",
  "J12w Takakento 10-5",
  "J13e Tamashoho 8-7",
  "J13w Tomokaze 8-7",
  "J14e Tokushoryu 4-11",
  "J14w Ochiai 10-5",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
var sekitoriID = [
  11927, 0, 0, 12191, 12370, 12451, 12231, 0, 11980, 12270, 11985, 12203, 5944,
  12130, 12094, 6594, 12210, 6596, 12043, 11946, 12449, 12352, 12055, 2879,
  12239, 6480, 12362, 12226, 11786, 12314, 11784, 12351, 11723, 11855, 11845,
  11728, 12040, 7153, 12721, 12117, 12646, 12453, 11785, 12113, 12406, 0, 12291,
  12575, 6642, 6599, 12107, 12162, 7240, 12717, 12516, 12412, 12688, 12273,
  11918, 12013, 12026, 12664, 12342, 11943, 11809, 12320, 12024, 12548, 12674,
  12114, 11976, 12427, 11726, 12796,
];

var hoshitori = [
  {
    record: [],
    aite: [],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [0, 1, 1, 0, 1, 0, 2],
    aite: [
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
    ],
  },
  {
    record: [2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    aite: [
      "Kiribayama",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Onosho",
      "Meisei",
      "Kotoshoho",
      "Midorifuji",
    ],
  },
  {
    record: [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
    aite: [
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Onosho",
      "Midorifuji",
      "Endo",
      "Takayasu",
    ],
  },
  {
    record: [3, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 5],
    aite: [
      "Wakatakakage",
      "Hoshoryu",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Onosho",
      "Meisei",
      "Endo",
      "Daieisho",
    ],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    aite: [
      "Hoshoryu",
      "Kiribayama",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Midorifuji",
      "Endo",
      "Hokutofuji",
    ],
  },
  {
    record: [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    aite: [
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Endo",
      "Hokutofuji",
    ],
  },
  {
    record: [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    aite: [
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Midorifuji",
      "Hokutofuji",
      "Takayasu",
      "Kiribayama",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Tamawashi",
      "Shodai",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Midorifuji",
      "Sadanoumi",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Shodai",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Kotoshoho",
      "Sadanoumi",
    ],
  },
  {
    record: [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Abi",
      "Ryuden",
      "Midorifuji",
      "Endo",
      "Ura",
      "Daishoho",
    ],
  },
  {
    record: [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Shodai",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Kotoshoho",
      "Endo",
      "Kinbozan",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Shodai",
      "Mitakeumi",
      "Nishikigi",
      "Meisei",
      "Kotoshoho",
      "Sadanoumi",
    ],
  },
  {
    record: [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Abi",
      "Ryuden",
      "Nishikigi",
      "Meisei",
      "Sadanoumi",
      "Takanosho",
    ],
  },
  {
    record: [3, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    aite: [
      "Takakeisho",
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Kotoshoho",
      "Sadanoumi",
      "Kagayaki",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 0, 0, 1, 2],
    aite: [
      "Wakatakakage",
      "Hoshoryu",
      "Kiribayama",
      "Meisei",
      "Kotoshoho",
      "Midorifuji",
      "Endo",
      "Sadanoumi",
      "Hokutofuji",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    aite: [
      "Wakatakakage",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Tobizaru",
      "Tamawashi",
      "Abi",
      "Ryuden",
      "Mitakeumi",
      "Onosho",
      "Kotoshoho",
      "Midorifuji",
      "Endo",
      "Sadanoumi",
    ],
  },
  {
    record: [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    aite: [
      "Wakatakakage",
      "Tamawashi",
      "Abi",
      "Ryuden",
      "Nishikigi",
      "Onosho",
      "Meisei",
      "Midorifuji",
      "Endo",
      "Sadanoumi",
      "Hokutofuji",
      "Takayasu",
      "Ichiyamamoto",
      "Ura",
      "Kagayaki",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aite: [
      "Wakatakakage",
      "Hoshoryu",
      "Wakamotoharu",
      "Daieisho",
      "Tobizaru",
      "Shodai",
      "Onosho",
      "Meisei",
      "Kotoshoho",
      "Endo",
      "Sadanoumi",
      "Hokutofuji",
      "Takayasu",
      "Ura",
      "Aoiyama",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    aite: [
      "Hoshoryu",
      "Kiribayama",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Onosho",
      "Meisei",
      "Kotoshoho",
      "Midorifuji",
      "Sadanoumi",
      "Hokutofuji",
      "Takayasu",
      "Aoiyama",
      "Hiradoumi",
    ],
  },
  {
    record: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    aite: [
      "Tobizaru",
      "Tamawashi",
      "Ryuden",
      "Mitakeumi",
      "Nishikigi",
      "Onosho",
      "Meisei",
      "Kotoshoho",
      "Midorifuji",
      "Endo",
      "Hokutofuji",
      "Takayasu",
      "Ichiyamamoto",
      "Azumaryu",
      "Takarafuji",
    ],
  },
  {
    record: [0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    aite: [
      "Wakamotoharu",
      "Kotonowaka",
      "Daieisho",
      "Onosho",
      "Kotoshoho",
      "Midorifuji",
      "Endo",
      "Sadanoumi",
      "Takayasu",
      "Ichiyamamoto",
      "Ura",
      "Aoiyama",
      "Hiradoumi",
      "Takarafuji",
      "Chiyoshoma",
    ],
  },
  {
    record: [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    aite: [
      "Hoshoryu",
      "Daieisho",
      "Kotoshoho",
      "Midorifuji",
      "Endo",
      "Sadanoumi",
      "Hokutofuji",
      "Ichiyamamoto",
      "Ura",
      "Aoiyama",
      "Hiradoumi",
      "Nishikifuji",
      "Kotoeko",
      "Kinbozan",
      "Chiyoshoma",
    ],
  },
  {
    record: [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    aite: [
      "Kotoshoho",
      "Sadanoumi",
      "Hokutofuji",
      "Takayasu",
      "Ura",
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Kagayaki",
      "Takarafuji",
      "Kotoeko",
      "Bushozan",
      "Hokuseiho",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    aite: [
      "Shodai",
      "Kotoshoho",
      "Midorifuji",
      "Hokutofuji",
      "Takayasu",
      "Ichiyamamoto",
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Daishoho",
      "Hokuseiho",
      "Chiyoshoma",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
    aite: [
      "Midorifuji",
      "Endo",
      "Hokutofuji",
      "Takayasu",
      "Ichiyamamoto",
      "Ura",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Takanosho",
      "Kagayaki",
      "Bushozan",
      "Oho",
      "Tsurugisho",
      "Mitoryu",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    aite: [
      "Endo",
      "Hokutofuji",
      "Takayasu",
      "Ichiyamamoto",
      "Ura",
      "Aoiyama",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Hokuseiho",
      "Oho",
    ],
  },
  {
    record: [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    aite: [
      "Ichiyamamoto",
      "Ura",
      "Aoiyama",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Kagayaki",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Bushozan",
      "Hokuseiho",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
    ],
  },
  {
    record: [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    aite: [
      "Takayasu",
      "Ichiyamamoto",
      "Ura",
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Azumaryu",
      "Takanosho",
      "Kagayaki",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Hokuseiho",
      "Chiyoshoma",
      "Tsurugisho",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    aite: [
      "Sadanoumi",
      "Ichiyamamoto",
      "Ura",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Takanosho",
      "Kagayaki",
      "Takarafuji",
      "Daishoho",
      "Bushozan",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
      "Mitoryu",
    ],
  },
  {
    record: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    aite: [
      "Mitakeumi",
      "Ura",
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Kagayaki",
      "Takarafuji",
      "Kotoeko",
      "Kinbozan",
      "Hokuseiho",
      "Chiyoshoma",
      "Tsurugisho",
      "Mitoryu",
    ],
  },
  {
    record: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    aite: [
      "Nishikigi",
      "Kotoshoho",
      "Ichiyamamoto",
      "Aoiyama",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Bushozan",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    aite: [
      "Sadanoumi",
      "Hokutofuji",
      "Ichiyamamoto",
      "Myogiryu",
      "Azumaryu",
      "Takanosho",
      "Kagayaki",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Hokuseiho",
      "Oho",
      "Tsurugisho",
      "Mitoryu",
    ],
  },
  {
    record: [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
    aite: [
      "Shodai",
      "Ura",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Kagayaki",
      "Takarafuji",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Hokuseiho",
      "Oho",
      "Chiyoshoma",
      "Mitoryu",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    aite: [
      "Takayasu",
      "Ichiyamamoto",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Takanosho",
      "Kagayaki",
      "Takarafuji",
      "Daishoho",
      "Kinbozan",
      "Hokuseiho",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
      "Mitoryu",
    ],
  },
  {
    record: [1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    aite: [
      "Abi",
      "Takayasu",
      "Hiradoumi",
      "Nishikifuji",
      "Takanosho",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Bushozan",
      "Hokuseiho",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
      "Mitoryu",
      "Chiyomaru",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
    aite: [
      "Ichiyamamoto",
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Azumaryu",
      "Kagayaki",
      "Takarafuji",
      "Daishoho",
      "Kinbozan",
      "Hokuseiho",
      "Oho",
      "Tsurugisho",
      "Mitoryu",
      "Ichinojo",
      "Shonannoumi",
    ],
  },
  {
    record: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    aite: [
      "Ichiyamamoto",
      "Ura",
      "Hiradoumi",
      "Myogiryu",
      "Nishikifuji",
      "Takanosho",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Oho",
      "Chiyoshoma",
      "Mitoryu",
      "Ichinojo",
    ],
  },
  {
    record: [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
    aite: [
      "Aoiyama",
      "Hiradoumi",
      "Myogiryu",
      "Azumaryu",
      "Kagayaki",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Hokuseiho",
      "Tsurugisho",
      "Mitoryu",
      "Asanoyama",
      "Chiyonokuni",
    ],
  },
  {
    record: [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
    aite: [
      "Hokutofuji",
      "Takayasu",
      "Ura",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Kagayaki",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Hokuseiho",
      "Tsurugisho",
      "Mitoryu",
      "Tochinoshin",
    ],
  },
  {
    record: [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    aite: [
      "Aoiyama",
      "Myogiryu",
      "Nishikifuji",
      "Azumaryu",
      "Takanosho",
      "Kagayaki",
      "Takarafuji",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Oho",
      "Chiyoshoma",
      "Mitoryu",
      "Tohakuryu",
      "Oshoma",
    ],
  },
  {
    record: [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    aite: [
      "Aoiyama",
      "Azumaryu",
      "Takanosho",
      "Takarafuji",
      "Daishoho",
      "Kotoeko",
      "Kinbozan",
      "Bushozan",
      "Hokuseiho",
      "Oho",
      "Chiyoshoma",
      "Tsurugisho",
      "Asanoyama",
      "Tohakuryu",
      "Shonannoumi",
    ],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aite: [
      "Oho",
      "Mitoryu",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Enho",
      "Gonoyama",
      "Akua",
      "Shimazuumi",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    aite: [
      "Tsurugisho",
      "Mitoryu",
      "Asanoyama",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Enho",
      "Gonoyama",
      "Daiamami",
      "Atamifuji",
      "Hakuyozan",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    aite: [
      "Oho",
      "Asanoyama",
      "Tohakuryu",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Oshoma",
      "Roga",
      "Enho",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Churanoumi",
      "Kitanowaka",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    aite: [
      "Chiyoshoma",
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Enho",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Tokushoryu",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    aite: [
      "Bushozan",
      "Hokuseiho",
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Enho",
      "Gonoyama",
      "Tsushimanada",
      "Hakuyozan",
      "Ochiai",
    ],
  },
  {
    record: [1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    aite: [
      "Bushozan",
      "Mitoryu",
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Enho",
      "Gonoyama",
      "Akua",
      "Hidenoumi",
      "Churanoumi",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    aite: [
      "Kinbozan",
      "Asanoyama",
      "Tohakuryu",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Oshoma",
      "Roga",
      "Enho",
      "Daiamami",
      "Kotokuzan",
      "Churanoumi",
      "Tochimusashi",
      "Tamashoho",
      "Tokushoryu",
    ],
  },
  {
    record: [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    aite: [
      "Tsurugisho",
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Roga",
      "Enho",
      "Gonoyama",
      "Tsushimanada",
      "Kotokuzan",
      "Churanoumi",
      "Kitanowaka",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    aite: [
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Enho",
      "Gonoyama",
      "Daiamami",
      "Hidenoumi",
      "Kotokuzan",
      "Shimanoumi",
      "Tomokaze",
    ],
  },
  {
    record: [0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    aite: [
      "Asanoyama",
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Ichinojo",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Gonoyama",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hakuyozan",
      "Takakento",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    aite: [
      "Asanoyama",
      "Tohakuryu",
      "Ichinojo",
      "Shonannoumi",
      "Oshoma",
      "Roga",
      "Enho",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Atamifuji",
      "Shimanoumi",
      "Takakento",
      "Ochiai",
    ],
  },
  {
    record: [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    aite: [
      "Tohakuryu",
      "Chiyonokuni",
      "Tochinoshin",
      "Chiyomaru",
      "Roga",
      "Enho",
      "Gonoyama",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Atamifuji",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Tochimusashi",
    ],
  },
  {
    record: [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    aite: [
      "Asanoyama",
      "Chiyonokuni",
      "Tochinoshin",
      "Shonannoumi",
      "Enho",
      "Gonoyama",
      "Daiamami",
      "Shimazuumi",
      "Hidenoumi",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Shimanoumi",
      "Kitanowaka",
      "Tochimusashi",
    ],
  },
  {
    record: [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
    aite: [
      "Asanoyama",
      "Chiyonokuni",
      "Tochinoshin",
      "Enho",
      "Gonoyama",
      "Daiamami",
      "Akua",
      "Hidenoumi",
      "Atamifuji",
      "Tsushimanada",
      "Shimanoumi",
      "Kitanowaka",
      "Takakento",
      "Tomokaze",
      "Tokushoryu",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    aite: [
      "Chiyonokuni",
      "Tochinoshin",
      "Shonannoumi",
      "Roga",
      "Gonoyama",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Kitanowaka",
      "Takakento",
      "Tamashoho",
    ],
  },
  {
    record: [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    aite: [
      "Tohakuryu",
      "Gonoyama",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    aite: [
      "Ichinojo",
      "Oshoma",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Atamifuji",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Tochimusashi",
      "Tamashoho",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    aite: [
      "Tohakuryu",
      "Ichinojo",
      "Enho",
      "Akua",
      "Hidenoumi",
      "Atamifuji",
      "Tsushimanada",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Ochiai",
    ],
  },
  {
    record: [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    aite: [
      "Chiyomaru",
      "Oshoma",
      "Roga",
      "Hidenoumi",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Tochimusashi",
      "Tamashoho",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    aite: [
      "Chiyonokuni",
      "Shonannoumi",
      "Chiyomaru",
      "Oshoma",
      "Daiamami",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Kitanowaka",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    aite: [
      "Roga",
      "Gonoyama",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Kitanowaka",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    aite: [
      "Chiyonokuni",
      "Oshoma",
      "Daiamami",
      "Akua",
      "Shimazuumi",
      "Hidenoumi",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tokushoryu",
    ],
  },
  {
    record: [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    aite: [
      "Chiyomaru",
      "Daiamami",
      "Akua",
      "Tsushimanada",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Takakento",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    aite: [
      "Enho",
      "Gonoyama",
      "Shimazuumi",
      "Hidenoumi",
      "Atamifuji",
      "Hakuyozan",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Tochimusashi",
      "Tamashoho",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    aite: [
      "Chiyomaru",
      "Hidenoumi",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Kitanowaka",
      "Takakento",
      "Tomokaze",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    aite: [
      "Roga",
      "Shimazuumi",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tokushoryu",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    aite: [
      "Tochinoshin",
      "Chiyomaru",
      "Shimazuumi",
      "Atamifuji",
      "Tsushimanada",
      "Kotokuzan",
      "Kitanowaka",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Ochiai",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    aite: [
      "Asanoyama",
      "Ichinojo",
      "Gonoyama",
      "Atamifuji",
      "Tsushimanada",
      "Hakuyozan",
      "Kotokuzan",
      "Churanoumi",
      "Shimanoumi",
      "Tochimusashi",
      "Takakento",
      "Tamashoho",
      "Tomokaze",
      "Tokushoryu",
    ],
  },
];

//***** Just update the "basho" variable and you're all done. *****

let redips = {},
  rd = REDIPS.drag;

window.onload = function () {
  $(function () {
    $(".wrapper1").scroll(function () {
      $(".wrapper2").scrollLeft($(".wrapper1").scrollLeft());
    });
    $(".wrapper2").scroll(function () {
      $(".wrapper1").scrollLeft($(".wrapper2").scrollLeft());
    });
  });

  var basho = "202303"; // The date of the basho just ended

  var CLIENT_ID =
    "527214845927-p6ofscooll9ettfc8vpb4f5dqbhome4h.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBiIfRASPUPjYmDLggGBQKCw63h-5B073o";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
  ];
  // https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/drive.install
  var SCOPES =
    "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.resource";
  var signinButton = document.getElementById("signinButton");
  var signoutButton = document.getElementById("signoutButton");
  var saveToDriveButton = document.getElementById("saveToDrive");
  var loadSaveButton = document.getElementById("loadSave");
  var messageLine = document.getElementById("messageLine");
  var progressText = document.getElementById("progressText");
  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  signinButton.style.display = "none";
  signoutButton.style.display = "none";
  saveToDriveButton.style.display = "none";
  loadSaveButton.style.display = "none";

  gapiLoaded();
  gisLoaded();

  function gapiLoaded() {
    gapi.load("client", initializeGapiClient);
  }

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    });
    gapiInited = true;
    maybeEnableButtons();
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      prompt: "",
      callback: "",
    });
    gisInited = true;
    maybeEnableButtons();
  }

  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      signinButton.style.display = "inline-block";
      messageLine.innerHTML = "Save or load your banzuke via Google Drive";
      progressText.innerHTML = "";
    }
  }

  signinButton.onclick = () => handleAuthClick();
  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) throw resp;
      signinButton.style.display = "none";
      signoutButton.style.display = "inline-block";
      saveToDriveButton.style.display = "inline-block";
      loadSaveButton.style.display = "inline-block";
      messageLine.innerHTML = "Please wait...";
      checkFolder("GTB Helper Save (do not modify)");
    };

    if (gapi.client.getToken() === null)
      tokenClient.requestAccessToken({ prompt: "consent" });
    else tokenClient.requestAccessToken({ prompt: "" });
  }

  signoutButton.onclick = () => handleSignoutClick();
  function handleSignoutClick() {
    const token = gapi.client.getToken();

    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      signinButton.style.display = "inline-block";
      signoutButton.style.display = "none";
      saveToDriveButton.style.display = "none";
      loadSaveButton.style.display = "none";
      messageLine.innerHTML = "Save or load your banzuke via Google Drive";
      progressText.innerHTML = "";
    }
  }

  function checkFolder(folderName) {
    gapi.client.drive.files
      .list({
        q: "name = '" + folderName + "'",
      })
      .then(function (response) {
        var files = response.result.files;

        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];

            window.localStorage.setItem("backupFolderId", file.id);
            //console.log("Folder available");
            showSave();
          }
        } else {
          createFolder("GTB Helper Save (do not modify)");
          messageLine.innerHTML = "No save";
          loadSaveButton.disabled = true;
        }
      });
  }

  function createFolder(folderName) {
    var access_token = gapi.auth.getToken().access_token;
    var request = gapi.client.request({
      path: "drive/v2/files",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
      body: {
        title: folderName,
        mimeType: "application/vnd.google-apps.folder",
      },
    });
    request.execute(function (response) {
      window.localStorage.setItem("backupFolderId", response.id);
    });
  }

  function showSave() {
    var saveId = "";

    gapi.client.drive.files
      .list({
        q:
          "name = 'gtb_helper_save.txt' and parents in '" +
          window.localStorage.getItem("backupFolderId") +
          "'",
      })
      .then(function (response) {
        var files = response.result.files;

        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var saveId = files[i].id;

            gapi.client.drive.files
              .get({
                fileId: saveId,
                fields: "modifiedTime",
              })
              .then(function (res) {
                var modifiedTime = moment(
                  res.result.modifiedTime,
                  "YYYY-MM-DDThh:mm:ss.SSSZ",
                ).format("dddd, MMMM Do YYYY, h:mm:ss a");

                messageLine.setAttribute("data-saveId", saveId);
                messageLine.innerHTML = "From " + modifiedTime;
                loadSaveButton.disabled = false;
              });
          }
        } else {
          loadSaveButton.disabled = true;
          messageLine.innerHTML = "No save";
        }
      });
  }

  function uploadSave() {
    const blob = new Blob([window.localStorage.getItem("banzuke")], {
      type: "plain/text",
    });
    const parentFolder = window.localStorage.getItem("backupFolderId");
    var metadata = {
      name: "gtb_helper_save.txt",
      mimeType: "plain/text",
      parents: [parentFolder],
    };
    var formData = new FormData();

    formData.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" }),
    );
    formData.append("file", blob);

    fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + gapi.auth.getToken().access_token,
        }),
        body: formData,
      },
    )
      .then(function (response) {
        if (response.ok) {
          progressText.innerHTML = "Saved!";
          showSave();
          setTimeout(function () {
            progressText.innerHTML = "";
          }, 1000);
        } else {
          console.error(response);
          progressText.innerHTML =
            "Access token expired. Please sign out and try again";
        }
        //return response.json();
      })
      .catch(function (err) {});
  }

  function updateSave() {
    var saveId = messageLine.getAttribute("data-saveId");
    var url =
      "https://www.googleapis.com/upload/drive/v3/files/" +
      saveId +
      "?uploadType=media";

    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        Authorization: "Bearer " + gapi.auth.getToken().access_token,
        "Content-type": "plain/text; charset=UTF-8",
      }),
      body: window.localStorage.getItem("banzuke"),
    })
      .then(function (response) {
        if (response.ok) {
          progressText.innerHTML = "Saved!";
          showSave();
          setTimeout(function () {
            progressText.innerHTML = "";
          }, 1000);
        } else {
          console.error(response);
          progressText.innerHTML =
            "Access token expired. Please sign out and try again";
        }
      })
      .catch(function (err) {});
  }

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  saveToDriveButton.addEventListener("click", function () {
    if (window.localStorage.getItem("banzuke") !== null) {
      progressText.innerHTML = "Please wait...";

      if (messageLine.innerHTML == "No save") uploadSave();
      else updateSave();
    }
  });

  loadSaveButton.addEventListener("click", function () {
    var saveId = messageLine.getAttribute("data-saveId");

    progressText.innerHTML = "Please wait...";

    gapi.client.drive.files
      .get({
        fileId: saveId,
        alt: "media",
      })
      .then(function (res) {
        var banzukeHtml = b64_to_utf8(btoa(res.body));

        document.getElementById("tableLiner").innerHTML = banzukeHtml;
        window.localStorage.setItem("banzuke", banzukeHtml);
        redips.init();
        progressText.innerHTML = "";
      })
      .catch(function (err) {
        console.error(err);
        progressText.innerHTML =
          "Access token expired. Please sign out and try again";
      });
  });

  //****************************************************************************

  if (window.localStorage.getItem("banzuke1") !== null) {
    window.localStorage.removeItem("banzuke1");
    window.localStorage.removeItem("banzuke2");
  }
  if (window.localStorage.getItem("banzuke") === null) {
    writeTableTitles(basho);
    populateSlots();
  } else {
    document.getElementById("tableLiner").innerHTML =
      window.localStorage.getItem("banzuke");
  }

  var radioButton = document.getElementsByClassName("checkbox"),
    radioLocal = window.localStorage.getItem("radioButton"),
    radioLocalDrop = window.localStorage.getItem("radioDrop");

  if (radioLocal === null || radioLocal == "openRikishiPage")
    radioButton[0].checked = true;
  else if (radioLocal == "returnToOld") radioButton[1].checked = true;
  else radioButton[2].checked = true;

  if (radioLocalDrop === null || radioLocalDrop == "multiple")
    radioButton[3].checked = true;
  else if (radioLocalDrop == "shift") radioButton[4].checked = true;
  else radioButton[5].checked = true;

  function writeTableTitles(endedBashoDate) {
    var bashoYear = parseInt(endedBashoDate.substring(0, 4)),
      bashoMonth = parseInt(endedBashoDate.slice(-2)),
      tableTitle = document.getElementsByClassName("tableTitle");

    const bashoMonthLookup = {
        1: "Hatsu",
        3: "Haru",
        5: "Natsu",
        7: "Nagoya",
        9: "Aki",
        11: "Kyushu",
      },
      getBashoName = (bMonth) => bashoMonthLookup[bMonth];

    tableTitle[0].innerHTML =
      getBashoName(bashoMonth) + " " + bashoYear + tableTitle[0].innerHTML;
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML =
      getBashoName(bashoMonth + 2) +
      " " +
      bashoYear +
      " Guess - " +
      tableTitle[1].innerHTML;
  }

  function populateSlots() {
    var cell = document.querySelectorAll(".redips-only");

    for (var i = 0; i < theSekitori.length; i++) {
      if (theSekitori[i] != "") {
        var card = document.createElement("div"),
          rikiData = theSekitori[i].split(" ");

        card.id = rikiData[0];
        card.className = "redips-drag se";
        card.setAttribute("data-rid", sekitoriID[i]);

        var cardColor;

        switch (rikiData[2].split("-")[0]) {
          case "14":
          case "15":
            cardColor = "#8fff8f";
            break;
          case "12":
          case "13":
            cardColor = "#A8FF94";
            break;
          case "10":
          case "11":
            cardColor = "#C0FF9A";
            break;
          case "8":
          case "9":
            cardColor = "#d9ff9f";
            break;
          case "6":
          case "7":
            cardColor = "#ffd0bf";
            break;
          case "4":
          case "5":
            cardColor = "#FFC8BF";
            break;
          case "2":
          case "3":
            cardColor = "#FFBFBF";
            break;
          default:
            cardColor = "#FFB7BF";
        }

        card.style.backgroundColor = cardColor;

        rikiData[2] =
          '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' +
          sekitoriID[i] +
          "&b=" +
          basho +
          '" target="_blank">' +
          rikiData[2] +
          "</a>";

        card.innerHTML = rikiData.join(" ");

        rikiData[1] =
          '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' +
          sekitoriID[i] +
          '" target="_blank">' +
          rikiData[1] +
          "</a>";

        if (retiredRikishi.includes(theSekitori[i].split(" ")[1])) {
          card.innerHTML = rikiData.join(" ");
          card.style.backgroundColor = "rgb(194, 194, 194)";
          card.className = "redips-drag intai";
          card.setAttribute("title", "Retired");
          card.removeAttribute("data-ko");
        }

        card.setAttribute("onmouseover", "showHoshitori(" + i + ")");
        card.setAttribute("onmouseout", "hideHoshitori()");

        var holder = document.createElement("span");
        holder.innerHTML = rikiData.join(" ");
        holder.style.display = "none";

        cell[i].appendChild(holder);
        cell[i].appendChild(card);
      }
    }
  }
};

function showHoshitori(i) {
  if (
    event.target.classList.contains("redips-drag") &&
    document.getElementById("hoshiCheckbox").checked
  ) {
    var rikishiCard = document.querySelectorAll(".redips-drag");

    event.target.style.border = "2px dotted black";
    event.target.style.lineHeight = "16px";
    event.target.style.padding = "0 2px";
    if (hoshitori[i].record.length > 0) {
      for (var j = 0; j < hoshitori[i].record.length; j++) {
        for (var k = 0; k < rikishiCard.length; k++) {
          if (
            rikishiCard[k].innerText.includes(hoshitori[i].aite[j]) &&
            rikishiCard[k] != event.target
          ) {
            var honwariBoutColor = "",
              ketteisenBoutColor = "";

            switch (hoshitori[i].record[j]) {
              case 0:
                honwariBoutColor = "2px solid red";
                break;
              case 1:
                honwariBoutColor = "2px solid black";
                break;
              case 2:
                honwariBoutColor = "2px dashed red";
                break;
              case 3:
                honwariBoutColor = "2px dashed black";
                break;
              case 4:
                ketteisenBoutColor = "2px solid red";
                break;
              default:
                ketteisenBoutColor = "2px solid black";
            }
            if (honwariBoutColor != "") {
              rikishiCard[k].style.lineHeight = "16px";
              rikishiCard[k].style.padding = "0 2px";
              rikishiCard[k].style.border = honwariBoutColor;
            } else {
              rikishiCard[k].style.outline = ketteisenBoutColor;
            }
          }
        }
      }
    }
  }
}

function hideHoshitori() {
  if (document.getElementById("hoshiCheckbox").checked) {
    var rikishiCard = document.querySelectorAll(".redips-drag");

    for (var j = 0; j < rikishiCard.length; j++) {
      if (rikishiCard[j].style.border != "") {
        rikishiCard[j].style.border = "";
        rikishiCard[j].style.padding = "";
        rikishiCard[j].style.lineHeight = "";
      }
      if (rikishiCard[j].style.outline != "") rikishiCard[j].style.outline = "";
    }
  }
}

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  if (button.value == "disable") rd.dropMode = "single";
  else rd.dropMode = "multiple";

  window.localStorage.setItem("radioDrop", button.value);
}

// *****************************************************************************

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "chartreuse";
  //rd.hover.borderTd = "2px solid blue";
  //rd.dropMode = "multiple";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) rd.dropMode = "single";
  else rd.dropMode = "multiple";

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(" ")[0];
      rd.only.div[rank] = rank;
    }
  }

  rd.event.changed = function (currentCell) {
    if (
      currentCell.children.length > 0 &&
      currentCell !== rd.obj.parentNode &&
      window.localStorage.getItem("radioDrop") == "shift" &&
      currentCell.className == "redips-only b2"
    ) {
      rd.hover.colorTd = "yellow";
    } else rd.hover.colorTd = "chartreuse";
  };

  rd.event.dblClicked = function () {
    var radioButton = document.getElementsByTagName("input");
    var rikishiURL =
      "https://sumodb.sumogames.de/Rikishi.aspx?r=" + rd.obj.dataset.rid;
    var thisRank = rd.obj.id,
      b1Cell = document.getElementsByTagName("td"),
      currentCell = rd.findParent("TD", rd.obj),
      currentChgCell;

    if (radioButton[0].checked) window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      for (var i = 0; i <= theSekitori.length; i++) {
        if (b1Cell[i].classList.contains(thisRank)) {
          if (currentCell.previousSibling.className == "ch")
            currentChgCell = currentCell.previousSibling;
          else if (currentCell.nextSibling.className == "ch")
            currentChgCell = currentCell.nextSibling;

          if (currentCell.children.length > 1) {
            var chgs = currentChgCell.innerHTML.split("<br>");

            for (var j = 0; j < currentCell.children.length; j++) {
              if (currentCell.children[j] == rd.obj) {
                chgs.splice(j, 1);
                currentChgCell.innerHTML = chgs.join("<br>");
              }
            }
          } else {
            currentChgCell.innerHTML = " ";
            currentCell.style.border = "1px dashed dimgray";
          }

          rd.moveObject({
            obj: rd.obj,
            target: b1Cell[i],
            callback: function () {
              document.getElementById("makRik").innerHTML--;
              b1Cell[i].children[0].style.display = "none";
              b1Cell[i].style.removeProperty("border");
              hideHoshitori();
              window.localStorage.setItem(
                "banzuke",
                document.getElementById("tableLiner").innerHTML,
              );
            },
          });
        }
      }
    }
  };

  rd.event.clicked = function (currentCell) {
    currentCell.style.boxShadow = "0 0 0 4px #0000003d inset";
    hideHoshitori();
  };

  rd.event.notMoved = function () {
    var currentCell = rd.findParent("TD", rd.obj);
    currentCell.style.removeProperty("box-shadow");
  };

  rd.event.droppedBefore = function (targetCell) {
    var rikiCount = document.getElementById("makRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      currentChgCell,
      dropRadio = document.getElementsByName("dropMode");

    currentCell.style.removeProperty("box-shadow");

    if (
      !currentCell.classList.contains("b2") &&
      targetCell.classList.contains("b2")
    ) {
      currentCell.children[0].style.display = "block";
      currentCell.style.border = "1px dashed dimgray";
      rikiCount.innerHTML++;
    } else if (
      currentCell.classList.contains("b2") &&
      !targetCell.classList.contains("b2")
    ) {
      targetCell.children[0].style.display = "none";
      targetCell.style.removeProperty("border");
      rikiCount.innerHTML--;
    }

    if (
      dropRadio[1].checked &&
      targetCell !== currentCell &&
      targetCell.classList.contains("b2") &&
      targetCell.children.length > 0
    ) {
      var b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

      for (var i = targetIndex + 1; i < b2Cell.length; i++) {
        if (
          b2Cell[i].children.length == 0 ||
          (b2Cell[i].children.length == 1 &&
            b2Cell[i] === thisCard.parentNode) ||
          (i == b2Cell.length - 1 && b2Cell[i].children.length > 0)
        ) {
          b2Cell[i].style.border = "none";
          for (var j = i - 1; j >= targetIndex; i--, j--)
            rd.relocate(b2Cell[j], b2Cell[i], "instant");
          break;
        }
      }
    }
  };
  rd.event.dropped = function (targetCell) {
    var b2Cell = document.querySelectorAll(".b2");

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        for (var j = 0; j < b2Cell[i].children.length; j++) {
          var thisRank = b2Cell[i].children[j].id,
            rikishiWins = b2Cell[i].children[j].innerText
              .split(" ")[2]
              .split("-")[0],
            thisChg,
            targetChgCell,
            targetCellRank;

          if (b2Cell[i].previousSibling.className == "ch") {
            targetChgCell = b2Cell[i].previousSibling;
            if (b2Cell[i].nextSibling.innerHTML == "J") targetCellRank = "J";
            else targetCellRank = b2Cell[i].nextSibling.innerHTML + "e";
          } else if (b2Cell[i].nextSibling.className == "ch") {
            targetChgCell = b2Cell[i].nextSibling;
            if (b2Cell[i].previousSibling.innerHTML == "J")
              targetCellRank = "J";
            else targetCellRank = b2Cell[i].previousSibling.innerHTML + "w";
          }

          thisChg = getChange(thisRank, targetCellRank);

          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins +
            "&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";

          if (j == 0) {
            targetChgCell.innerHTML = thisChg;
            b2Cell[i].style.border = "none";
          } else targetChgCell.innerHTML += "<br>" + thisChg;
        }
      } else {
        var targetChgCell;

        if (b2Cell[i].previousSibling.className == "ch")
          targetChgCell = b2Cell[i].previousSibling;
        else if (b2Cell[i].nextSibling.className == "ch")
          targetChgCell = b2Cell[i].nextSibling;
        targetChgCell.innerHTML = " ";
        b2Cell[i].style.border = "1px dashed dimgray";
      }
    }
  };

  rd.event.finish = function () {
    hideHoshitori();
    window.localStorage.setItem(
      "banzuke",
      document.getElementById("tableLiner").innerHTML,
    );
  };
};

redips.resetBanzuke = function () {
  if (
    confirm(
      "Reset the banzuke? This will not reset your save in Google Drive",
    ) == true
  ) {
    var b1Cell = document.getElementsByTagName("td"),
      b2Cell = document.querySelectorAll(".b2"),
      chgCell = document.getElementsByClassName("ch");

    window.localStorage.removeItem("banzuke");
    document.getElementById("makRik").innerHTML = 0;

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        b2Cell[i].style.border = "1px dashed dimgray";
        chgCell[i].innerHTML = " ";
        for (var j = b2Cell[i].children.length - 1; j >= 0; j--) {
          for (var k = 0; k <= theSekitori.length; k++) {
            if (b1Cell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j],
                target: b1Cell[k],
              });
              b1Cell[k].children[0].style.display = "none";
              b1Cell[k].style.removeProperty("border");
              break;
            }
          }
        }
      }
    }
  }
};

function getChange(thisRank, targetCellRank) {
  var chg;

  if (thisRank == targetCellRank) chg = "─";
  else {
    const change = [
      ["calc", "!!!", "!!!", "!!!", "!!!", "!!!"],
      [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!"],
      ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!"],
      ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!"],
      ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ "],
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "⇄"],
    ];
    var r1, r2;

    switch (thisRank.charAt(0)) {
      case "Y":
        r1 = 0;
        break;
      case "O":
        r1 = 1;
        break;
      case "S":
        r1 = 2;
        break;
      case "K":
        r1 = 3;
        break;
      case "M":
        r1 = 4;
        break;
      default:
        r1 = 5;
    }
    switch (targetCellRank.charAt(0)) {
      case "Y":
        r2 = 0;
        break;
      case "O":
        r2 = 1;
        break;
      case "S":
        r2 = 2;
        break;
      case "K":
        r2 = 3;
        break;
      case "M":
        r2 = 4;
        break;
      default:
        r2 = 5;
    }

    if (change[r1][r2] != "calc") chg = change[r1][r2];
    else {
      var thisRankNum = parseInt(thisRank.slice(1, -1)),
        targetRankNum = parseInt(targetCellRank.slice(1, -1));

      if (thisRank.slice(-1) == "w") thisRankNum += 0.5;
      if (targetCellRank.slice(-1) == "w") targetRankNum += 0.5;

      chg = thisRankNum - targetRankNum;

      if (chg > 0) chg = "+" + chg;
    }
  }

  return chg;
}

if (window.addEventListener)
  window.addEventListener("load", redips.init, false);
else if (window.attachEvent) window.attachEvent("onload", redips.init);

/*
var hoshitori = [], 
    rikishiTr = document.getElementsByTagName("tr");

for (var i = 1; i < rikishiTr.length; i++) {
  var recordArr = [], 
    aiteArr = [], 
    hyper = rikishiTr[i].getElementsByTagName('a');

  for (var j = 1; j < hyper.length; j++) {
    aiteArr.push(hyper[j].title.split(' ')[2]);
    if (hyper[j].children[0].getAttribute("src") == "img/w.gif") {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(3);
      else 
        recordArr.push(1);
    }
    else {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(2);
      else 
        recordArr.push(0);
    }
  }
  var rikishiObj = {
    record: recordArr, 
    aite: aiteArr
  }
  hoshitori.push(rikishiObj);
}
*/
