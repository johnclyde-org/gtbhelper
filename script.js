"use strict";

/*
var shikonaCells = document.getElementsByClassName("shikona");
var theRikishi = [], rikishiID = [];
for (var i = 0; i < 100; i++) {
  theRikishi[i] = shikonaCells[i].previousSibling.innerHTML + ' ' + shikonaCells[i].children[0].innerHTML + ' ' + shikonaCells[i].nextSibling.children[0].innerHTML;
  rikishiID[i]  = shikonaCells[i].children[0].href.split('=')[1];
} 
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Terunofuji 14-1 Y",
  "O1w Takakeisho 8-7",
  "S1e Kiribayama 11-4 G",
  "S1w Hoshoryu 11-4",
  "S2e Daieisho 10-5",
  "S2w Wakamotoharu 10-5 G",
  "K1e Kotonowaka 8-7",
  "K1w Wakatakakage 0-0-15",
  "K2e Shodai 6-9",
  "M1e Abi 8-7",
  "M1w Midorifuji 6-9",
  "M2e Takayasu 3-3-9",
  "M2w Endo 0-7-8",
  "M3e Tobizaru 8-7",
  "M3w Nishikifuji 3-12",
  "M4e Ura 7-8",
  "M4w Nishikigi 9-6",
  "M5e Kinbozan 4-11",
  "M5w Kotoshoho 2-10-3",
  "M6e Meisei 8-7 S",
  "M6w Mitakeumi 9-6",
  "M7e Hokutofuji 6-9",
  "M7w Tamawashi 7-8",
  "M8e Sadanoumi 7-8",
  "M8w Takanosho 7-8",
  "M9e Onosho 8-7",
  "M9w Hiradoumi 9-6",
  "M10e Ryuden 5-10",
  "M10w Takarafuji 5-10",
  "M11e Hokuseiho 8-7",
  "M11w Daishoho 6-9",
  "M12e Aoiyama 5-10",
  "M12w Kotoeko 8-7",
  "M13e Chiyoshoma 8-7",
  "M13w Ichinojo 0-0",
  "M14e Asanoyama 12-3 J",
  "M14w Myogiryu 9-6",
  "M15e Ichiyamamoto 4-11",
  "M15w Tsurugisho 9-6",
  "M16e Mitoryu 5-10",
  "M16w Oho 11-4",
  "M17e Kagayaki 7-8",
  "J1e Gonoyama 14-1 Y",
  "J1w Shonannoumi 11-4",
  "J2e Azumaryu 2-13",
  "J2w Tohakuryu 4-11",
  "J3e Bushozan 10-5",
  "J3w Enho 0-10-5",
  "J4e Oshoma 7-8",
  "J4w Roga 9-6",
  "J5e Tochinoshin 0-6",
  "J5w Akua 5-10",
  "J6e Hakuyozan 6-8-1",
  "J6w Shimazuumi 8-7",
  "J7e Takakento 6-9",
  "J7w Churanoumi 7-8",
  "J8e Atamifuji 13-2",
  "J8w Ochiai 14-1 D",
  "J9e Daiamami 7-8",
  "J9w Chiyonokuni 0-10-5",
  "J10e Chiyomaru 6-9",
  "J10w Kitanowaka 8-7",
  "J11e Hidenoumi 6-9",
  "J11w Tamashoho 9-6",
  "J12e Tomokaze 8-7",
  "J12w Chiyosakae 8-7",
  "J13e Fujiseiun 9-6",
  "J13w Shimanoumi 8-7",
  "J14e Tokihayate 6-9",
  "J14w Tsushimanada 8-7",
  "Ms1e Shiden 4-3",
  "Ms1w Kawazoe 5-2",
  "Ms2e Kotokuzan 3-4",
  "Ms2w Shishi 6-1",
  "Ms3e Ryuo 1-7",
  "Ms3w Chiyonoumi 4-3",
  "Ms4e Tochimusashi 4-3",
  "Ms4w Hayatefuji 3-4",
  "Ms5e Yuma 5-2",
  "Ms5w Terutsuyoshi 2-5",
  "Ms6e Mukainakano 4-3",
  "Ms6w Tokushoryu 2-5",
  "Ms7e Dewanoryu 2-5",
  "Ms7w Akiseyama 2-5",
  "Ms8e Kamito 3-4",
  "Ms8w Kanzaki 3-4",
  "Ms9e Nabatame 3-4",
  "Ms9w Kaisho 4-3",
  "Ms10e Nishinoryu 3-4",
  "Ms10w Tsukahara 4-3",
  "Ms10TD Onosato 6-1",
  "Ms11e Ishizaki 5-2",
  "Ms11w Miyagi 3-4",
  "Ms12e Yoshii 2-5",
  "Ms12w Mineyaiba 4-3",
  "Ms13e Takahashi 6-1",
  "Ms13w Kazekeno 5-2",
  "Ms14e Kotoozutsu 4-3",
  "Ms14w Chiyonoo 5-2",
  "Ms15e Tochikamiyama 2-5",
  "Ms15w Toshunryu 3-4",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = ["Ichinojo", "Tochinoshin"];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
var sekitoriID = [
  11927, 12191, 12231, 12451, 11985, 11980, 12270, 12370, 12130, 12094, 12352,
  6480, 12055, 12203, 12351, 12226, 6596, 12721, 12449, 11946, 12210, 12239,
  5944, 2879, 11855, 12043, 12314, 6594, 11728, 12646, 12040, 11786, 7153,
  11785, 12107, 12291, 11784, 12362, 12113, 12406, 12453, 11845, 12688, 12162,
  11723, 12575, 12117, 12412, 12717, 12516, 6599, 11918, 11943, 12013, 12114,
  12320, 12664, 12796, 12273, 6642, 7240, 12548, 12026, 11976, 12427, 11736,
  12702, 12024, 12542, 12342, 12141, 12779, 11809, 12599, 11988, 12255, 12674,
  12596, 12165, 11868, 12709, 11726, 12592, 8900, 12416, 12733, 12597, 12075,
  12523, 12448, 12836, 12710, 12713, 12536, 12557, 12773, 12767, 12316, 11840,
  12531, 12771,
];

var hoshitori = [
  {
    record: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    aite: [
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Endo",
      "Tobizaru",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Kotoshoho",
      "Meisei",
      "Asanoyama",
    ],
  },
  {
    record: [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
    aite: [
      "Terunofuji",
      "Kiribayama",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Endo",
      "Tobizaru",
      "Nishikifuji",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Meisei",
    ],
  },
  {
    record: [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Endo",
      "Tobizaru",
      "Nishikifuji",
      "Ura",
      "Hiradoumi",
      "Hokuseiho",
    ],
  },
  {
    record: [0, 1, 0, 0, 1, 1, 1, 1, 3, 3, 0, 1, 1, 1, 1],
    aite: [
      "Terunofuji",
      "Kiribayama",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Takayasu",
      "Endo",
      "Tobizaru",
      "Nishikifuji",
      "Hiradoumi",
      "Hokuseiho",
      "Tsurugisho",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3, 1, 0, 1],
    aite: [
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Nishikifuji",
      "Ura",
      "Nishikigi",
      "Kotoshoho",
      "Meisei",
      "Mitakeumi",
      "Asanoyama",
    ],
  },
  {
    record: [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Endo",
      "Tobizaru",
      "Nishikifuji",
      "Nishikigi",
      "Hokuseiho",
      "Tsurugisho",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Tobizaru",
      "Nishikifuji",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Meisei",
    ],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Abi",
      "Midorifuji",
      "Tobizaru",
      "Nishikifuji",
      "Nishikigi",
      "Kinbozan",
      "Mitakeumi",
      "Asanoyama",
    ],
  },
  {
    record: [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Midorifuji",
      "Takayasu",
      "Tobizaru",
      "Nishikifuji",
      "Ura",
      "Nishikigi",
      "Meisei",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    aite: [
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Takayasu",
      "Endo",
      "Tobizaru",
      "Ura",
      "Kinbozan",
      "Hokutofuji",
      "Oho",
    ],
  },
  {
    record: [2, 1, 0, 1, 1, 0],
    aite: [
      "Hoshoryu",
      "Abi",
      "Midorifuji",
      "Nishikifuji",
      "Kotoshoho",
      "Tamawashi",
    ],
  },
  {
    record: [0, 0, 0, 2, 0, 0, 0],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Wakamotoharu",
      "Midorifuji",
      "Nishikifuji",
    ],
  },
  {
    record: [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Midorifuji",
      "Nishikifuji",
      "Ura",
      "Nishikigi",
      "Mitakeumi",
      "Tamawashi",
      "Kotoeko",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    aite: [
      "Takakeisho",
      "Kiribayama",
      "Hoshoryu",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Takayasu",
      "Endo",
      "Tobizaru",
      "Ura",
      "Kinbozan",
      "Sadanoumi",
      "Takanosho",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kiribayama",
      "Daieisho",
      "Kotonowaka",
      "Abi",
      "Midorifuji",
      "Tobizaru",
      "Nishikifuji",
      "Nishikigi",
      "Kotoshoho",
      "Meisei",
      "Mitakeumi",
      "Hokutofuji",
      "Daishoho",
    ],
  },
  {
    record: [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Daieisho",
      "Wakamotoharu",
      "Kotonowaka",
      "Shodai",
      "Abi",
      "Tobizaru",
      "Ura",
      "Kinbozan",
      "Kotoshoho",
      "Meisei",
      "Mitakeumi",
      "Hokutofuji",
      "Onosho",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Kotonowaka",
      "Shodai",
      "Midorifuji",
      "Nishikifuji",
      "Nishikigi",
      "Kotoshoho",
      "Meisei",
      "Mitakeumi",
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Daishoho",
      "Kotoeko",
    ],
  },
  {
    record: [0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    aite: [
      "Terunofuji",
      "Daieisho",
      "Takayasu",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Meisei",
      "Mitakeumi",
      "Hokutofuji",
      "Tamawashi",
      "Takanosho",
      "Takarafuji",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    aite: [
      "Terunofuji",
      "Takakeisho",
      "Daieisho",
      "Kotonowaka",
      "Abi",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Kotoshoho",
      "Mitakeumi",
      "Hokutofuji",
      "Sadanoumi",
      "Hiradoumi",
      "Hokuseiho",
      "Asanoyama",
    ],
  },
  {
    record: [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    aite: [
      "Daieisho",
      "Shodai",
      "Tobizaru",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Kotoshoho",
      "Meisei",
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Tsurugisho",
      "Kagayaki",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    aite: [
      "Midorifuji",
      "Ura",
      "Nishikigi",
      "Kinbozan",
      "Kotoshoho",
      "Meisei",
      "Mitakeumi",
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Aoiyama",
      "Mitoryu",
    ],
  },
  {
    record: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    aite: [
      "Takayasu",
      "Tobizaru",
      "Kinbozan",
      "Kotoshoho",
      "Mitakeumi",
      "Hokutofuji",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Ryuden",
      "Takarafuji",
      "Aoiyama",
      "Chiyoshoma",
      "Myogiryu",
      "Ichiyamamoto",
    ],
  },
  {
    record: [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    aite: [
      "Nishikifuji",
      "Kinbozan",
      "Meisei",
      "Mitakeumi",
      "Hokutofuji",
      "Tamawashi",
      "Takanosho",
      "Onosho",
      "Ryuden",
      "Takarafuji",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Tsurugisho",
      "Oho",
    ],
  },
  {
    record: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    aite: [
      "Nishikifuji",
      "Kotoshoho",
      "Mitakeumi",
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Takarafuji",
      "Daishoho",
      "Chiyoshoma",
      "Myogiryu",
      "Ichiyamamoto",
      "Mitoryu",
    ],
  },
  {
    record: [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    aite: [
      "Nishikigi",
      "Mitakeumi",
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Hiradoumi",
      "Ryuden",
      "Takarafuji",
      "Hokuseiho",
      "Daishoho",
      "Chiyoshoma",
      "Myogiryu",
      "Oho",
      "Kagayaki",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
    aite: [
      "Kiribayama",
      "Hoshoryu",
      "Meisei",
      "Hokutofuji",
      "Takanosho",
      "Onosho",
      "Ryuden",
      "Takarafuji",
      "Hokuseiho",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Tsurugisho",
    ],
  },
  {
    record: [0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    aite: [
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Hiradoumi",
      "Takarafuji",
      "Hokuseiho",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Ichiyamamoto",
      "Oho",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    aite: [
      "Kotoshoho",
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Hokuseiho",
      "Daishoho",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Oho",
      "Kagayaki",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    aite: [
      "Kiribayama",
      "Hoshoryu",
      "Wakamotoharu",
      "Meisei",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Takarafuji",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Asanoyama",
      "Tsurugisho",
      "Oho",
      "Kagayaki",
    ],
  },
  {
    record: [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    aite: [
      "Ura",
      "Kinbozan",
      "Takanosho",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Takarafuji",
      "Hokuseiho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Myogiryu",
      "Ichiyamamoto",
      "Mitoryu",
      "Kagayaki",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    aite: [
      "Hokutofuji",
      "Tamawashi",
      "Sadanoumi",
      "Hiradoumi",
      "Ryuden",
      "Hokuseiho",
      "Daishoho",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Mitoryu",
      "Oho",
      "Kagayaki",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    aite: [
      "Tobizaru",
      "Kinbozan",
      "Sadanoumi",
      "Hiradoumi",
      "Ryuden",
      "Hokuseiho",
      "Daishoho",
      "Aoiyama",
      "Chiyoshoma",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Mitoryu",
      "Oho",
      "Kagayaki",
    ],
  },
  {
    record: [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    aite: [
      "Tamawashi",
      "Sadanoumi",
      "Takanosho",
      "Onosho",
      "Hiradoumi",
      "Ryuden",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Kagayaki",
    ],
  },
  {
    record: [],
    aite: [],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    aite: [
      "Terunofuji",
      "Daieisho",
      "Shodai",
      "Meisei",
      "Hiradoumi",
      "Ryuden",
      "Hokuseiho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Oho",
    ],
  },
  {
    record: [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
    aite: [
      "Tamawashi",
      "Takanosho",
      "Onosho",
      "Takarafuji",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Oho",
      "Kagayaki",
      "Enho",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    aite: [
      "Tamawashi",
      "Takanosho",
      "Ryuden",
      "Takarafuji",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Myogiryu",
      "Tsurugisho",
      "Mitoryu",
      "Oho",
      "Kagayaki",
      "Bushozan",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
    aite: [
      "Hoshoryu",
      "Wakamotoharu",
      "Mitakeumi",
      "Sadanoumi",
      "Hiradoumi",
      "Takarafuji",
      "Hokuseiho",
      "Chiyoshoma",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Mitoryu",
      "Oho",
      "Kagayaki",
      "Tohakuryu",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    aite: [
      "Hokutofuji",
      "Takanosho",
      "Takarafuji",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Oho",
      "Kagayaki",
      "Azumaryu",
      "Tohakuryu",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0],
    aite: [
      "Midorifuji",
      "Sadanoumi",
      "Onosho",
      "Ryuden",
      "Takarafuji",
      "Hokuseiho",
      "Aoiyama",
      "Kotoeko",
      "Asanoyama",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Kagayaki",
      "Shonannoumi",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    aite: [
      "Mitakeumi",
      "Onosho",
      "Takarafuji",
      "Hokuseiho",
      "Daishoho",
      "Aoiyama",
      "Kotoeko",
      "Chiyoshoma",
      "Myogiryu",
      "Ichiyamamoto",
      "Tsurugisho",
      "Mitoryu",
      "Oho",
      "Gonoyama",
      "Oshoma",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    aite: [
      "Kagayaki",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Enho",
      "Oshoma",
      "Roga",
      "Akua",
      "Hakuyozan",
      "Shimazuumi",
      "Atamifuji",
      "Ochiai",
      "Kitanowaka",
      "Tamashoho",
    ],
  },
  {
    record: [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    aite: [
      "Oho",
      "Gonoyama",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Enho",
      "Oshoma",
      "Roga",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Tamashoho",
      "Chiyosakae",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    aite: [
      "Mitoryu",
      "Gonoyama",
      "Shonannoumi",
      "Bushozan",
      "Enho",
      "Oshoma",
      "Roga",
      "Akua",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Chiyomaru",
      "Kitanowaka",
      "Tomokaze",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    aite: [
      "Tsurugisho",
      "Mitoryu",
      "Gonoyama",
      "Shonannoumi",
      "Bushozan",
      "Enho",
      "Oshoma",
      "Roga",
      "Akua",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Daiamami",
      "Chiyomaru",
      "Hidenoumi",
    ],
  },
  {
    record: [1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    aite: [
      "Ichiyamamoto",
      "Gonoyama",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Enho",
      "Oshoma",
      "Roga",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Ochiai",
      "Hidenoumi",
      "Tamashoho",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    aite: [
      "Myogiryu",
      "Gonoyama",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Oshoma",
      "Roga",
      "Akua",
      "Takakento",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    aite: [
      "Kagayaki",
      "Gonoyama",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Enho",
      "Roga",
      "Tochinoshin",
      "Akua",
      "Hakuyozan",
      "Atamifuji",
      "Ochiai",
      "Chiyosakae",
      "Shimanoumi",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
    aite: [
      "Gonoyama",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Enho",
      "Oshoma",
      "Tochinoshin",
      "Akua",
      "Hakuyozan",
      "Ochiai",
      "Kitanowaka",
      "Tamashoho",
      "Fujiseiun",
      "Shimanoumi",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 2],
    aite: ["Oshoma", "Roga", "Akua", "Hakuyozan", "Shimazuumi", "Takakento"],
  },
  {
    record: [0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    aite: [
      "Gonoyama",
      "Azumaryu",
      "Tohakuryu",
      "Enho",
      "Oshoma",
      "Roga",
      "Tochinoshin",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Chiyomaru",
      "Hidenoumi",
      "Fujiseiun",
      "Tokihayate",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    aite: [
      "Gonoyama",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Oshoma",
      "Roga",
      "Tochinoshin",
      "Akua",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Atamifuji",
      "Tamashoho",
      "Fujiseiun",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    aite: [
      "Gonoyama",
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Tochinoshin",
      "Akua",
      "Hakuyozan",
      "Takakento",
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Chiyomaru",
      "Hidenoumi",
      "Chiyosakae",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    aite: [
      "Shonannoumi",
      "Azumaryu",
      "Tohakuryu",
      "Bushozan",
      "Enho",
      "Tochinoshin",
      "Akua",
      "Hakuyozan",
      "Shimazuumi",
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Daiamami",
      "Chiyosakae",
      "Shimanoumi",
    ],
  },
  {
    record: [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0],
    aite: [
      "Shonannoumi",
      "Azumaryu",
      "Bushozan",
      "Akua",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Atamifuji",
      "Ochiai",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Tomokaze",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    aite: [
      "Gonoyama",
      "Shonannoumi",
      "Oshoma",
      "Hakuyozan",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Ochiai",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Shimanoumi",
    ],
  },
  {
    record: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    aite: [
      "Gonoyama",
      "Shonannoumi",
      "Bushozan",
      "Oshoma",
      "Roga",
      "Shimazuumi",
      "Takakento",
      "Churanoumi",
      "Atamifuji",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
    ],
  },
  {
    record: [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    aite: [
      "Tohakuryu",
      "Takakento",
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Chiyosakae",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    aite: [
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Daiamami",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
      "Tomokaze",
      "Fujiseiun",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    aite: [
      "Azumaryu",
      "Tohakuryu",
      "Akua",
      "Shimazuumi",
      "Churanoumi",
      "Atamifuji",
      "Ochiai",
      "Daiamami",
      "Kitanowaka",
      "Hidenoumi",
      "Tomokaze",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    aite: [
      "Gonoyama",
      "Azumaryu",
      "Roga",
      "Ochiai",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Hidenoumi",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    aite: [
      "Tohakuryu",
      "Bushozan",
      "Akua",
      "Shimazuumi",
      "Ochiai",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Fujiseiun",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    aite: [
      "Gonoyama",
      "Shonannoumi",
      "Bushozan",
      "Roga",
      "Hakuyozan",
      "Atamifuji",
      "Ochiai",
      "Chiyonokuni",
      "Kitanowaka",
      "Hidenoumi",
      "Tomokaze",
      "Chiyosakae",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 1, 1, 3, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    aite: [
      "Azumaryu",
      "Churanoumi",
      "Atamifuji",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
      "Chiyosakae",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    aite: [
      "Shonannoumi",
      "Oshoma",
      "Shimazuumi",
      "Takakento",
      "Atamifuji",
      "Daiamami",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
      "Tomokaze",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    aite: [
      "Roga",
      "Akua",
      "Hakuyozan",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Tomokaze",
      "Chiyosakae",
      "Shimanoumi",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
    aite: [
      "Oshoma",
      "Roga",
      "Takakento",
      "Atamifuji",
      "Daiamami",
      "Chiyomaru",
      "Kitanowaka",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Fujiseiun",
      "Tokihayate",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    aite: [
      "Akua",
      "Churanoumi",
      "Daiamami",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Fujiseiun",
      "Shimanoumi",
      "Tsushimanada",
    ],
  },
  {
    record: [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
    aite: [
      "Churanoumi",
      "Daiamami",
      "Chiyonokuni",
      "Chiyomaru",
      "Kitanowaka",
      "Hidenoumi",
      "Tamashoho",
      "Tomokaze",
      "Chiyosakae",
      "Fujiseiun",
      "Shimanoumi",
      "Tokihayate",
    ],
  },
  {
    record: [1, 1, 0, 1, 1, 0, 0],
    aite: [
      "Kawazoe",
      "Tsushimanada",
      "Yuma",
      "Tochimusashi",
      "Mukainakano",
      "Onosato",
      "Fujiseiun",
    ],
  },
  {
    record: [0, 1, 1, 1, 0, 1, 1],
    aite: [
      "Shiden",
      "Tokihayate",
      "Ryuo",
      "Tokushoryu",
      "Yuma",
      "Kamito",
      "Tomokaze",
    ],
  },
  {
    record: [0, 0, 0, 1, 1, 0, 1],
    aite: [
      "Shishi",
      "Chiyonoumi",
      "Shimanoumi",
      "Dewanoryu",
      "Ryuo",
      "Tochimusashi",
      "Terutsuyoshi",
    ],
  },
  {
    record: [1, 1, 1, 1, 1, 0, 1],
    aite: [
      "Kotokuzan",
      "Ryuo",
      "Fujiseiun",
      "Yuma",
      "Takahashi",
      "Kiryuko",
      "Tokihayate",
    ],
  },
  {
    record: [1, 0, 0, 0, 0, 0, 0, 0],
    aite: [
      "Chiyonoumi",
      "Shishi",
      "Kawazoe",
      "Chiyosakae",
      "Kotokuzan",
      "Kanzaki",
      "Dewanoryu",
      "Daiamami",
    ],
  },
  {
    record: [0, 1, 0, 0, 1, 1, 1],
    aite: [
      "Ryuo",
      "Kotokuzan",
      "Tochimusashi",
      "Hayatefuji",
      "Tomokaze",
      "Terutsuyoshi",
      "Kamito",
    ],
  },
  {
    record: [0, 1, 1, 0, 0, 1, 1],
    aite: [
      "Hayatefuji",
      "Terutsuyoshi",
      "Chiyonoumi",
      "Shiden",
      "Tsushimanada",
      "Kotokuzan",
      "Nabatame",
    ],
  },
  {
    record: [1, 0, 0, 1, 1, 0, 0],
    aite: [
      "Tochimusashi",
      "Yuma",
      "Mukainakano",
      "Chiyonoumi",
      "Tokushoryu",
      "Tokihayate",
      "Kaisho",
    ],
  },
  {
    record: [1, 1, 1, 0, 1, 1, 0],
    aite: [
      "Terutsuyoshi",
      "Hayatefuji",
      "Shiden",
      "Shishi",
      "Kawazoe",
      "Shimanoumi",
      "Tsushimanada",
    ],
  },
  {
    record: [0, 0, 1, 0, 1, 0, 0],
    aite: [
      "Yuma",
      "Tochimusashi",
      "Dewanoryu",
      "Kamito",
      "Kanzaki",
      "Chiyonoumi",
      "Kotokuzan",
    ],
  },
  {
    record: [0, 1, 1, 1, 0, 1, 0],
    aite: [
      "Tokushoryu",
      "Dewanoryu",
      "Hayatefuji",
      "Akiseyama",
      "Shiden",
      "Nabatame",
      "Ishizaki",
    ],
  },
  {
    record: [1, 1, 0, 0, 0, 0, 0],
    aite: [
      "Mukainakano",
      "Kamito",
      "Nabatame",
      "Kawazoe",
      "Hayatefuji",
      "Nishinoryu",
      "Kanzaki",
    ],
  },
  {
    record: [0, 0, 0, 0, 0, 1, 1],
    aite: [
      "Akiseyama",
      "Mukainakano",
      "Terutsuyoshi",
      "Kotokuzan",
      "Miyagi",
      "Daiseiryu",
      "Ryuo",
    ],
  },
  {
    record: [1, 0, 1, 0, 0, 0, 0],
    aite: [
      "Dewanoryu",
      "Nabatame",
      "Kamito",
      "Mukainakano",
      "Kaisho",
      "Tsukahara",
      "Miyagi",
    ],
  },
  {
    record: [1, 0, 0, 1, 1, 0, 0],
    aite: [
      "Kanzaki",
      "Tokushoryu",
      "Akiseyama",
      "Terutsuyoshi",
      "Yoshii",
      "Kawazoe",
      "Chiyonoumi",
    ],
  },
  {
    record: [0, 0, 0, 1, 0, 1, 1],
    aite: [
      "Kamito",
      "Kaisho",
      "Tsukahara",
      "Miyagi",
      "Terutsuyoshi",
      "Ryuo",
      "Tokushoryu",
    ],
  },
  {
    record: [1, 1, 1, 0, 0, 0, 0],
    aite: [
      "Kaisho",
      "Akiseyama",
      "Tokushoryu",
      "Takahashi",
      "Onosato",
      "Mukainakano",
      "Tochimusashi",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 0, 1],
    aite: [
      "Nabatame",
      "Kanzaki",
      "Nishinoryu",
      "Onosato",
      "Akiseyama",
      "Ishizaki",
      "Hayatefuji",
    ],
  },
  {
    record: [1, 0, 0, 0, 1, 1, 0],
    aite: [
      "Tsukahara",
      "Ishizaki",
      "Kaisho",
      "Yoshii",
      "Tochikamiyama",
      "Tokushoryu",
      "Kotoozutsu",
    ],
  },
  {
    record: [0, 0, 1, 0, 1, 1, 1],
    aite: [
      "Nishinoryu",
      "Onosato",
      "Kanzaki",
      "Kotoozutsu",
      "Kayo",
      "Akiseyama",
      "Tokunomusashi",
    ],
  },
  {
    record: [0, 1, 1, 1, 1, 1, 1],
    aite: [
      "Ishizaki",
      "Tsukahara",
      "Yoshii",
      "Kaisho",
      "Nabatame",
      "Shiden",
      "Otsuji",
    ],
  },
  {
    record: [1, 1, 0, 1, 0, 1, 1],
    aite: [
      "Onosato",
      "Nishinoryu",
      "Takahashi",
      "Mineyaiba",
      "Kazekeno",
      "Kaisho",
      "Mukainakano",
    ],
  },
  {
    record: [0, 0, 0, 0, 1, 1, 1],
    aite: [
      "Yoshii",
      "Mineyaiba",
      "Tochikamiyama",
      "Kanzaki",
      "Dewanoryu",
      "Kotoyusho",
      "Akiseyama",
    ],
  },
  {
    record: [1, 0, 0, 1, 0, 0, 0],
    aite: [
      "Miyagi",
      "Takahashi",
      "Onosato",
      "Nishinoryu",
      "Kamito",
      "Kotoozutsu",
      "Toshunryu",
    ],
  },
  {
    record: [0, 1, 1, 0, 1, 1, 0],
    aite: [
      "Takahashi",
      "Miyagi",
      "Kotoozutsu",
      "Ishizaki",
      "Toshunryu",
      "Tokunomusashi",
      "Kazekeno",
    ],
  },
  {
    record: [1, 1, 1, 1, 0, 1, 1],
    aite: [
      "Mineyaiba",
      "Yoshii",
      "Ishizaki",
      "Nabatame",
      "Shishi",
      "Kazekeno",
      "Tsurubayashi",
    ],
  },
  {
    record: [1, 1, 1, 0, 1, 0, 1],
    aite: [
      "Kotoozutsu",
      "Chiyonoo",
      "Tokunomusashi",
      "Hitoshi",
      "Ishizaki",
      "Takahashi",
      "Mineyaiba",
    ],
  },
  {
    record: [0, 1, 0, 1, 0, 1, 1],
    aite: [
      "Kazekeno",
      "Tochikamiyama",
      "Mineyaiba",
      "Tsukahara",
      "Tokunomusashi",
      "Yoshii",
      "Nishinoryu",
    ],
  },
  {
    record: [1, 0, 1, 1, 1, 0, 1],
    aite: [
      "Tochikamiyama",
      "Kazekeno",
      "Tochimaru",
      "Tokunomusashi",
      "Yago",
      "Otsuji",
      "Fukai",
    ],
  },
  {
    record: [0, 0, 1, 0, 0, 0, 1],
    aite: [
      "Chiyonoo",
      "Kotoozutsu",
      "Miyagi",
      "Toshunryu",
      "Nishinoryu",
      "Kayo",
      "Kotoyusho",
    ],
  },
  {
    record: [0, 0, 1, 1, 0, 0, 1],
    aite: [
      "Tokunomusashi",
      "Tochimaru",
      "Kayo",
      "Tochikamiyama",
      "Mineyaiba",
      "Tochinobori",
      "Yoshii",
    ],
  },
];

//***** Just update the "basho" variable and you're all done. *****

let redips = {},
  rd = REDIPS.drag;

//let time = 0;

// On change paste keyup.
function saveNote() {
  // Reset the timer
  clearTimeout(time);
  time = setTimeout(function () {
    window.localStorage.setItem(
      "picks",
      document.getElementById("tableLiner").innerHTML,
    );
    console.log("hi");
  }, 1000);
}

function exportTableToCSV($table, filename) {
  var $rows = $table.find("tr:has(td),tr:has(th)"),
    // Temporary delimiter characters unlikely to be typed by keyboard
    // This is to avoid accidentally splitting the actual contents
    tmpColDelim = String.fromCharCode(11), // vertical tab character
    tmpRowDelim = String.fromCharCode(0), // null character
    // actual delimiter characters for CSV format
    colDelim = '","',
    rowDelim = '"\r\n"',
    // Grab text from table into CSV formatted string
    csv =
      '"' +
      $rows
        .map(function (i, row) {
          var $row = $(row),
            $cols = $row.find("td,th");

          return $cols
            .map(function (j, col) {
              var $col = $(col),
                text = $col.text(),
                html = $col.html(),
                arr = [];

              if ($col.prop("tagName") == "TH" || $col.hasClass("cur")) {
                $col.contents().each(function () {
                  if (this.nodeType == 3) arr.push(this.nodeValue);
                  else if (this.tagName == "SPAN") arr.push(this.innerText);
                });
                if ($col.hasClass("cur") && $col.prop("tagName") != "TH")
                  text = arr.join("\n");
                else text = arr.join(" ");
              } else if (
                $col.hasClass("b2") ||
                $col.hasClass("rs2") ||
                $col.hasClass("ch2")
              ) {
                $col.children().each(function () {
                  if (this.tagName != "BR") arr.push(this.innerText);
                });
                text = arr.join("\n");
              } else if ($col.hasClass("nte")) {
                var temp;
                $col
                  .children("div")
                  .children()
                  .each(function () {
                    temp = this.innerText.replace("\n", "");
                    arr.push(temp);
                  });
                text = arr.join("\n");
              }

              text = text.replace(/ /g, "");
              return text.replace(/"/g, '""'); // escape double quotes
            })
            .get()
            .join(tmpColDelim);
        })
        .get()
        .join(tmpRowDelim)
        .split(tmpRowDelim)
        .join(rowDelim)
        .split(tmpColDelim)
        .join(colDelim) +
      '"',
    // Data URI
    csvData = "data:application/csv;charset=utf-8," + encodeURIComponent(csv);

  console.log(csv);

  if (window.navigator.msSaveBlob) {
    // IE 10+
    //alert('IE' + csv);
    window.navigator.msSaveOrOpenBlob(
      new Blob([csv], { type: "text/plain;charset=utf-8;" }),
      "csvname.csv",
    );
  } else {
    $(this).attr({ download: filename, href: csvData, target: "_blank" });
  }
}

window.onload = function () {
  var basho = "202305"; // The date of the basho just ended

  /*
  var CLIENT_ID = "527214845927-p6ofscooll9ettfc8vpb4f5dqbhome4h.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBiIfRASPUPjYmDLggGBQKCw63h-5B073o";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  // https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/drive.install
  var SCOPES = "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.resource";
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
      discoveryDocs: DISCOVERY_DOCS
    });
    gapiInited = true;
    maybeEnableButtons();
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES, 
      prompt: "", 
      callback: ""
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

  signinButton.onclick = () => handleAuthClick()
  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) 
        throw (resp);
      signinButton.style.display = "none";
      signoutButton.style.display = "inline-block";
      saveToDriveButton.style.display = "inline-block";
      loadSaveButton.style.display = "inline-block";
      messageLine.innerHTML = "Please wait...";
      checkFolder("GTB Helper Save (do not modify)");
    };

    if (gapi.client.getToken() === null) 
      tokenClient.requestAccessToken({ prompt: "consent" });
    else 
      tokenClient.requestAccessToken({ prompt: "" });
  }

  signoutButton.onclick = () => handleSignoutClick()
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
    gapi.client.drive.files.list({
      'q': "name = '" + folderName + "'"
    }).then(function (response) {
      var files = response.result.files;

      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          window.localStorage.setItem("backupFolderId", file.id);
          //console.log("Folder available");
          showSave();
        }
      }
      else {
        createFolder("GTB Helper Save (do not modify)");
        messageLine.innerHTML = "No save";
        loadSaveButton.disabled = true;
      }
    });
  }

  function createFolder(folderName) {
    var access_token = gapi.auth.getToken().access_token;
    var request = gapi.client.request({
      "path": "drive/v2/files",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json", 
        "Authorization": "Bearer " + access_token
      }, 
      "body": {
        "title": folderName, 
        "mimeType": "application/vnd.google-apps.folder"
      }
    });
    request.execute(function (response) {
      window.localStorage.setItem("backupFolderId", response.id);
    })
  }

  function showSave() {
    var saveId = "";

    gapi.client.drive.files.list({
      'q': "name = 'gtb_helper_save.txt' and parents in '" + 
           window.localStorage.getItem("backupFolderId") + "'"
    }).then(function (response) {
      var files = response.result.files;

      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var saveId = files[i].id;

          gapi.client.drive.files.get({
            "fileId": saveId, 
            "fields": "modifiedTime"
          }).then(function (res) {
            var modifiedTime = moment(res.result.modifiedTime, 
              "YYYY-MM-DDThh:mm:ss.SSSZ").format("dddd, MMMM Do YYYY, h:mm:ss a");

            messageLine.setAttribute("data-saveId", saveId);
            messageLine.innerHTML = "From " + modifiedTime;
            loadSaveButton.disabled = false;
          });
        }
      }
      else {
        loadSaveButton.disabled = true;
        messageLine.innerHTML = "No save";
      }
    })
  }

  function uploadSave() {
    const blob = new Blob([window.localStorage.getItem("picks")], { type: "plain/text" });
    const parentFolder = window.localStorage.getItem("backupFolderId");
    var metadata = {
      name: "gtb_helper_save.txt", 
      mimeType: "plain/text", 
      parents: [parentFolder]
    };
    var formData = new FormData();

    formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    formData.append("file", blob);

    fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST", 
      headers: new Headers({ "Authorization": "Bearer " + gapi.auth.getToken().access_token }), 
      body: formData
    }).then(function (response) {
      if (response.ok) {
        progressText.innerHTML = "Saved to Drive!";
        showSave();
        setTimeout(function() {
          progressText.innerHTML = "";
        }, 1000);
      }
      else {
        console.error(response);
        progressText.innerHTML = "Access token expired. Please sign out and try again";
      }
      //return response.json();
    }).catch(function(err) {});
  }

  function updateSave() {
    var saveId = messageLine.getAttribute("data-saveId");
    var url = "https://www.googleapis.com/upload/drive/v3/files/" + saveId + "?uploadType=media";
    
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        Authorization: "Bearer " + gapi.auth.getToken().access_token,
        "Content-type": "plain/text; charset=UTF-8"
      }), 
      body: window.localStorage.getItem("picks")
    }).then(function (response) {
      if (response.ok) {
        progressText.innerHTML = "Saved to Drive!";
        showSave();
        setTimeout(function() {
          progressText.innerHTML = "";
        }, 1000);
      }
      else {
        console.error(response);
        progressText.innerHTML = "Access token expired. Please sign out and try again";
      }
    }).catch(function(err) {});
  }

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  saveToDriveButton.addEventListener("click", function() {
    if (window.localStorage.getItem("picks") !== null) {
      progressText.innerHTML = "Please wait...";

      if (messageLine.innerHTML == "No save") 
        uploadSave();
      else 
        updateSave();
    }
  });

  loadSaveButton.addEventListener("click", function() {
    var saveId = messageLine.getAttribute("data-saveId");

    progressText.innerHTML = "Please wait...";

    gapi.client.drive.files.get({
      fileId: saveId, 
      alt: "media"
    }).then(function (res) {
      var banzukeHtml = b64_to_utf8(btoa(res.body));

      document.getElementById("tableLiner").innerHTML = banzukeHtml;
      window.localStorage.setItem("picks", banzukeHtml);
      redips.init();
      progressText.innerHTML = "";
    }).catch(function (err) {
      console.error(err);
      progressText.innerHTML = "Access token expired. Please sign out and try again";
    });
  });
  */

  //****************************************************************************

  // This must be a hyperlink
  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });

  if (window.localStorage.getItem("banzuke1") !== null) {
    window.localStorage.removeItem("banzuke1");
    window.localStorage.removeItem("banzuke2");
  }
  if (window.localStorage.getItem("banzuke") !== null) {
    //document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("banzuke");
    window.localStorage.removeItem("banzuke");
    //writeTableTitles(basho);
    //populateSlots();
  }
  if (window.localStorage.getItem("picks") !== null) {
    document.getElementById("tableLiner").innerHTML =
      window.localStorage.getItem("picks");

    var banzuke1 = document.getElementById("banzuke1");
    var b1Cell = banzuke1.getElementsByClassName("redips-only");

    for (var i = 0; i < b1Cell.length; i++) {
      if (b1Cell[i].children.length > 1) b1Cell[i].children[0].remove();
    }

    window.localStorage.setItem(
      "picks",
      document.getElementById("tableLiner").innerHTML,
    );
  } else {
    writeTableTitles(basho);
    populateSlots();
  }
  if (window.localStorage.getItem("colCheck1") === null) {
    var columnCheckbox = document.querySelectorAll(".checkedByDefault");

    for (var i = 0; i < columnCheckbox.length; i++)
      columnCheckbox[i].checked = true;
  } else {
    for (var i = 1; i < 8; i++) {
      var columnCheck = document.querySelectorAll(".columnCheckbox")[i - 1];
      var check = JSON.parse(
        window.localStorage.getItem("colCheck" + String(i)),
      );

      columnCheck.checked = check;
    }
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

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function () {
      // Reset the timer
      clearTimeout(time);

      time = setTimeout(function () {
        window.localStorage.setItem(
          "picks",
          document.getElementById("tableLiner").innerHTML,
        );
        showSaving();
      }, 1000);
    });
  }

  var cards = document.querySelectorAll(".redips-drag");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", showHoshitori.bind(this));
    cards[i].addEventListener("mouseout", function () {
      this.style.border = "";
      if (document.getElementById("hoshiCheckbox").checked) {
        var rikishiCard = document.querySelectorAll(".redips-drag");

        for (var j = 0; j < rikishiCard.length; j++) {
          if (rikishiCard[j].style.border != "") {
            rikishiCard[j].style.border = "";
          }
          if (rikishiCard[j].style.outline != "")
            rikishiCard[j].style.outline = "";
        }
      }
    });
  }

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
      getBashoName(bashoMonth) +
      " " +
      bashoYear +
      tableTitle[0].innerHTML +
      " Result";
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML =
      getBashoName(bashoMonth + 2) +
      " " +
      bashoYear +
      " Makuuchi Guess - " +
      tableTitle[1].innerHTML;
  }

  function populateSlots() {
    var table1 = document.getElementById("banzuke1"),
      cell = table1.querySelectorAll(".redips-only");

    for (var i = 0; i < cell.length; i++) {
      for (var j = 0; j < theSekitori.length; j++) {
        if (cell[i].classList.contains(theSekitori[j].split(" ")[0])) {
          var card = document.createElement("div"),
            rikiData = theSekitori[j].split(" "),
            wins = rikiData[2].split("-")[0];

          if (rikiData.length > 3) rikiData[2] += " " + rikiData[3];

          card.id = rikiData[0];
          card.className = "redips-drag se";
          if (rikiData[0].startsWith("Ms"))
            card.setAttribute("data-w", wins * 2);
          else card.setAttribute("data-w", wins);

          /*
          var holder = document.createElement('a');

          holder.innerHTML = rikiData[1];
          holder.href = "https://sumodb.sumogames.de/Rikishi.aspx?r=" + sekitoriID[j];
          holder.target = "_blank";
          if (rikiData[0].startsWith("Ms")) 
            holder.className = "msLink";
          //holder.setAttribute("onmouseover", 'showNextRank("' + rikiData[0] + '")');
          //holder.setAttribute("onmouseout", "hideNextRank()");
          holder.style.display = "none";
          */

          rikiData[1] =
            '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' +
            sekitoriID[j] +
            '" target="_blank">' +
            rikiData[1] +
            "</a>";
          rikiData[2] =
            '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' +
            sekitoriID[j] +
            "&b=" +
            basho +
            '" target="_blank">' +
            rikiData[2] +
            "</a>";

          card.innerHTML = rikiData[1];

          if (retiredRikishi.includes(theSekitori[j].split(" ")[1])) {
            //card.innerHTML = rikiData.join(' ');
            card.style.backgroundColor = "rgb(203, 203, 203)";
            card.className = "redips-drag intai";
            card.setAttribute("title", "Retired");
            card.removeAttribute("data-ko");
          }

          //card.setAttribute("onmouseout", "hideHoshitori()");

          //cell[i].appendChild(holder);
          cell[i].appendChild(card);

          var resCell, newRankCell;

          if (i % 2 == 0) resCell = cell[i].previousSibling;
          else resCell = cell[i].nextSibling;

          resCell.innerHTML = rikiData[2];

          //cell[i].style.borderInline = "1px solid #929292";
        }
      }
    }
  }
};

function showHoshitori() {
  var thisRikishi = theSekitori.find((text) =>
    text.startsWith(event.target.id),
  );
  var rikishiNum = theSekitori.indexOf(thisRikishi);

  event.target.style.border = "2px solid blue";

  if (
    document.getElementById("hoshiCheckbox").checked &&
    hoshitori[rikishiNum].record.length > 0
  ) {
    for (var i = 0; i < hoshitori[rikishiNum].record.length; i++) {
      var aite = theSekitori.find(
        (text) => text.split(" ")[1] == hoshitori[rikishiNum].aite[i],
      );

      if (aite) {
        var aiteCard = document.getElementById(aite.split(" ")[0]);
        var honwariBoutColor = "",
          ketteisenBoutColor = "";

        switch (hoshitori[rikishiNum].record[i]) {
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
        if (honwariBoutColor != "") aiteCard.style.border = honwariBoutColor;
        else aiteCard.style.outline = ketteisenBoutColor;
      }
    }
  }
}

/*
function showNextRank(thisRank) {
  if (event.target.className == "hold") {
    var cards = document.querySelectorAll(".se");

    event.target.parentNode.style.boxShadow = "0 0 0 2px inset blue";
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id == thisRank) {
        var cardCurrentRank = cards[i].parentNode.id;
        var table1Cell = document.querySelectorAll('.' + cardCurrentRank);
        table1Cell[0].style.boxShadow = "0 0 0 2px inset black";
        break;
      }
    }
  }
}

function hideNextRank() {
  var cell = document.getElementsByTagName("td");
    
  for (var j = 0; j < cell.length; j++) {
    if (cell[j].style.boxShadow != "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset") {
      cell[j].style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset";
    }
  }
}
*/

function hideHoshitori() {
  event.target.style.border = "";
  if (document.getElementById("hoshiCheckbox").checked) {
    var rikishiCard = document.querySelectorAll(".redips-drag");

    for (var j = 0; j < rikishiCard.length; j++) {
      if (rikishiCard[j].style.border != "") {
        rikishiCard[j].style.border = "";
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
    var tip = document.getElementById("tip");

    if (typeof tip != "undefined" && tip != null) tip.remove();

    if (
      currentCell.children.length > 0 &&
      currentCell != rd.obj.parentNode &&
      window.localStorage.getItem("radioDrop") == "shift" &&
      currentCell.classList.contains("b2")
    ) {
      rd.hover.colorTd = "yellow";
      var tooltip = document.createElement("span");
      tooltip.id = "tip";
      tooltip.innerHTML = "shift→";
      currentCell.prepend(tooltip);
    } else rd.hover.colorTd = "chartreuse";
  };

  rd.event.dblClicked = function () {
    var radioButton = document.getElementsByTagName("input");
    var rikishiURL = rd.obj.children[0].href;
    var thisRank = rd.obj.id,
      originCell = document.querySelectorAll("." + thisRank)[0],
      currentCell = rd.findParent("TD", rd.obj),
      currentChgCell;

    if (radioButton[0].checked) window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj,
        target: originCell,
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == "J")
            document.getElementById("juRik").innerHTML--;
          else document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          //b1Cell[i].style.removeProperty("border");
          hideHoshitori();
          updateInfoCells();
          window.localStorage.setItem(
            "picks",
            document.getElementById("tableLiner").innerHTML,
          );
        },
      });
      showSaving();
    }
  };

  rd.event.clicked = function (currentCell) {
    //currentCell.style.boxShadow = "0 0 0 4px #0000003d inset";
    hideHoshitori();
  };

  /*
  rd.event.notMoved = function() {
    var currentCell = rd.findParent('TD', rd.obj); 
    currentCell.style.removeProperty("box-shadow");
  };
  */

  rd.event.droppedBefore = function (targetCell) {
    var makuCounter = document.getElementById("makRik"),
      juCounter = document.getElementById("juRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      currentChgCell,
      dropRadio = document.getElementsByName("dropMode");
    var currentCellRank,
      targetCellRank,
      curCellIsOfBanzuke2 = currentCell.classList.contains("b2"),
      tarCellIsOfBanzuke2 = targetCell.classList.contains("b2");

    //currentCell.style.removeProperty("box-shadow");

    if (curCellIsOfBanzuke2) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == "J") juCounter.innerHTML--;
      else makuCounter.innerHTML--;
    } else if (tarCellIsOfBanzuke2) {
      var holder = document.createElement("a");

      holder.innerHTML = thisCard.innerText;
      holder.href = thisCard.children[0].href;
      holder.target = "_blank";
      if (thisCard.id.startsWith("Ms")) holder.className = "msLink";
      currentCell.appendChild(holder);
    }

    if (tarCellIsOfBanzuke2) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == "J") juCounter.innerHTML++;
      else makuCounter.innerHTML++;
    } else targetCell.children[0].remove();

    if (
      dropRadio[1].checked &&
      targetCell !== currentCell &&
      tarCellIsOfBanzuke2 &&
      targetCell.children.length > 0
    ) {
      var tip = document.getElementById("tip");

      if (typeof tip != "undefined" && tip != null) tip.remove();

      var b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

      for (var i = targetIndex + 1; i < b2Cell.length; i++) {
        if (
          b2Cell[i].children.length == 0 ||
          (b2Cell[i].children.length == 1 &&
            b2Cell[i] === thisCard.parentNode) ||
          ((i == b2Cell.length - 1 || i == 53) && b2Cell[i].children.length > 0)
        ) {
          //b2Cell[i].style.border = "none";
          for (var j = i - 1; j >= targetIndex; i--, j--)
            rd.relocate(b2Cell[j], b2Cell[i], "instant");
          redips.init();
          break;
        }
      }
    }
  };
  rd.event.dropped = function (targetCell) {
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function () {
    hideHoshitori();
    window.localStorage.setItem(
      "picks",
      document.getElementById("tableLiner").innerHTML,
    );
  };
};

function toggleColumns(button) {
  var column = button.value;
  var colCell = document.getElementsByClassName(column);
  var colCheck = document.querySelectorAll(".columnCheckbox");
  var tableTitle = document.querySelectorAll(".tableTitle");

  if (button.checked) {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan += 2;
    else {
      tableTitle[1].colSpan += 2;
      tableTitle[2].colSpan += 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.remove("hid");
  } else {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan -= 2;
    else {
      tableTitle[1].colSpan -= 2;
      tableTitle[2].colSpan -= 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.add("hid");
  }
  for (var i = 1; i < 8; i++) {
    window.localStorage.setItem(
      "colCheck" + String(i),
      colCheck[i - 1].checked,
    );
  }
  window.localStorage.setItem(
    "picks",
    document.getElementById("tableLiner").innerHTML,
  );
}

function updateInfoCells() {
  var b2Cell = document.querySelectorAll(".b2"),
    b1Cell = document
      .getElementById("banzuke1")
      .querySelectorAll(".redips-only"),
    originCell,
    newRankCell,
    b1Chg,
    resultLink,
    resultCell,
    currRankCell,
    targetChgCell;

  for (var i = 0; i < b1Cell.length; i++) {
    if (b1Cell[i].children.length == 2) {
      newRankCell = b1Cell[i].nextSibling;
      if (i % 2 != 0) {
        newRankCell = newRankCell.nextSibling;
      }
      if (newRankCell.innerHTML != "") {
        newRankCell.innerHTML = "";
        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = "";
      }
    }
  }

  for (var i = 0; i < b2Cell.length; i++) {
    resultCell = b2Cell[i].nextSibling;
    currRankCell = b2Cell[i].previousSibling;
    targetChgCell = resultCell.nextSibling;

    if (b2Cell[i].children.length > 0) {
      for (var j = 0; j < b2Cell[i].children.length; j++) {
        var thisRank = b2Cell[i].children[j].id,
          rikishiWins = b2Cell[i].children[j].dataset.w,
          thisChg,
          targetCellRank,
          chg;

        originCell = document.querySelectorAll("." + thisRank)[0];
        newRankCell = originCell.nextSibling;
        if (thisRank.endsWith("w")) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        } else resultLink = originCell.previousSibling.innerHTML;

        targetCellRank = b2Cell[i].dataset.r;

        thisChg = getChange(thisRank, targetCellRank);

        if (thisRank.startsWith("Ms")) {
          if (thisRank.endsWith("TD")) thisRank = thisRank.slice(0, -2);
          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins / 2 +
            "&form1_year=196007-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";
        } else {
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
        }

        newRankCell.innerHTML = b2Cell[i].dataset.r;

        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j == 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML = b2Cell[i].children[j].id;
        } else {
          targetChgCell.innerHTML += "<br>" + thisChg;
          resultCell.innerHTML += "<br>" + resultLink;
          currRankCell.innerHTML += "<br>" + b2Cell[i].children[j].id;
        }
      }
    } else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  }
}

redips.resetBanzuke = function () {
  if (
    confirm(
      "Reset the banzuke? This will not reset your save in Google Drive",
    ) == true
  ) {
    var redipsCell = document.querySelectorAll(".redips-only"),
      b2Cell = document.querySelectorAll(".b2"),
      chgCell = document.getElementsByClassName("ch");
    var c1 = document.querySelectorAll(".new"),
      c2 = document.querySelectorAll(".ch1"),
      c3 = document.querySelectorAll(".rs2"),
      c4 = document.querySelectorAll(".cur"),
      c5 = document.querySelectorAll(".ch2"),
      c6 = document.querySelectorAll(".nte");

    window.localStorage.removeItem("picks");
    document.getElementById("makRik").innerHTML = 0;
    for (var i = 1; i < 8; i++)
      window.localStorage.removeItem("colCheck" + String(i));

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        //b2Cell[i].style.border = "1px dashed dimgray";
        //chgCell[i].innerHTML = ' ';
        for (var j = b2Cell[i].children.length - 1; j >= 0; j--) {
          for (var k = 0; k < 100; k++) {
            if (redipsCell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j],
                target: redipsCell[k],
              });
              redipsCell[k].children[0].style.display = "none";
              //b1Cell[k].style.removeProperty("border");
              break;
            }
          }
        }
      }
    }
    for (var i = 2; i < c1.length; i++) {
      if (c1[i].innerHTML != "") {
        c1[i].innerHTML = "";
        c2[i].innerHTML = "";
      }
    }
    for (var i = 2; i < c3.length; i++) {
      if (c3[i].innerHTML != "") {
        c3[i].innerHTML = "";
        c4[i].innerHTML = "";
        c5[i].innerHTML = "";
      }
      if (c6[i].children[0].innerHTML != "") c6[i].children[0].innerHTML = "";
    }
    location.reload();
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
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc"],
      ["!!!", "!!!", "!!!", "!!!", "!!!", " ↑ "],
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
        if (!thisRank.startsWith("Ms")) r1 = 4;
        else r1 = 6;
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

function showSaving() {
  var saving = document.getElementById("progressText");
  saving.innerHTML = "Saved!";
  setTimeout(function () {
    saving.innerHTML = "";
  }, 1000);
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

var tori = document.getElementsByClassName("rb_torikumi"), recordArr = [], aiteArr = [], record;
for (var i = 0; i < tori[0].children[0].children.length; i++) {
  record = tori[0].children[0].children[i].children[1].children[0].src.split('_')[1];
  switch (record) {
    case "kuro.gif":
      record = 0; break;
    case "shiro.gif":
      record = 1; break;
    case "fusenpai.gif":
      record = 2; break;
    case "fusensho.gif":
      record = 3; break;
  }
  recordArr.push(record);
  aiteArr.push(tori[0].children[0].children[i].children[3].children[0].innerHTML.split(' ')[1]);
}
var rikishiObj = {
  record: recordArr, 
  aite: aiteArr
}
console.log(rikishiObj);
*/
