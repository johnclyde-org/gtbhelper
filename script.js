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
  "O1w Takakeisho 12-3 Y",
  "S1e Wakatakakage 9-6",
  "S1w Hoshoryu 8-7",
  "S2e Takayasu 1-5-9",
  "S2w Shodai 6-9",
  "K1e Kiribayama 11-4 JG",
  "K1w Kotonowaka 8-7",
  "K2e Meisei 5-10",
  "K2w Wakamotoharu 9-6",
  "M1e Tobizaru 8-7",
  "M1w Daieisho 10-5",
  "M2e Mitakeumi 7-8",
  "M2w Tamawashi 9-6",
  "M3e Abi 8-7",
  "M3w Midorifuji 6-9",
  "M4e Nishikifuji 4-11",
  "M4w Sadanoumi 6-9",
  "M5e Ryuden 9-6",
  "M5w Nishikigi 9-6",
  "M6e Hokutofuji 7-8",
  "M6w Myogiryu 6-9",
  "M7e Ichinojo 0-0-15",
  "M7w Ura 7-8",
  "M8e Onosho 10-5",
  "M8w Oho 4-11",
  "M9e Takanosho 6-9",
  "M9w Endo 9-6",
  "M10e Aoiyama 8-7",
  "M10w Hiradoumi 8-7",
  "M11e Chiyoshoma 5-10",
  "M11w Tochinoshin 2-3-10",
  "M12e Kagayaki 7-8",
  "M12w Okinoumi 0-6",
  "M13e Kotoshoho 11-4 JK",
  "M13w Kotoeko 7-8",
  "M14e Ichiyamamoto 10-5",
  "M14w Azumaryu 9-6",
  "M15e Tsurugisho 7-8",
  "M15w Mitoryu 7-8",
  "M16e Takarafuji 8-7",
  "M16w Chiyomaru 4-11",
  "J1e Akua 3-12",
  "J1w Bushozan 9-6",
  "J2e Hokuseiho 9-6",
  "J2w Daiamami 5-10",
  "J3e Atamifuji 3-8-4",
  "J3w Oshoma 7-8",
  "J4e Tohakuryu 9-6",
  "J4w Enho 7-8",
  "J5e Kinbozan 11-4",
  "J5w Kotokuzan 4-11",
  "J6e Churanoumi 4-11",
  "J6w Daishoho 12-3",
  "J7e Chiyonokuni 10-5",
  "J7w Tochimusashi 4-11",
  "J8e Shimanoumi 5-10",
  "J8w Kitanowaka 5-10",
  "J9e Roga 9-6",
  "J9w Hidenoumi 8-7",
  "J10e Gonoyama 9-6",
  "J10w Terutsuyoshi 5-10",
  "J11e Chiyosakae 5-10",
  "J11w Shimazuumi 9-6",
  "J12e Takakento 7-8",
  "J12w Asanoyama 14-1 Y",
  "J13e Shonannoumi 12-3",
  "J13w Kaisho 5-10",
  "J14e Tsushimanada 9-6",
  "J14w Hakuyozan 9-6",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = ["Okinoumi"];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
var sekitoriID = [
  11927, 0, 0, 12191, 12370, 12451, 6480, 12130, 12231, 12270, 11946, 11980,
  12203, 11985, 12210, 5944, 12094, 12352, 12351, 2879, 6594, 6596, 12239,
  11784, 12107, 12226, 12043, 12453, 11855, 12055, 11786, 12314, 11785, 6599,
  11845, 6463, 12449, 7153, 12362, 11723, 12113, 12406, 11728, 7240, 11918,
  12117, 12646, 12273, 12664, 12717, 12575, 12412, 12721, 11809, 12320, 12040,
  6642, 12674, 12024, 12548, 12516, 12026, 12688, 11868, 11736, 12013, 12114,
  12291, 12162, 12075, 12342, 11943,
];

//***** Just update the "basho" variable and you're all done. *****

let redips = {},
  rd = REDIPS.drag;

window.onload = function () {
  var basho = "202301"; // The date of the basho just ended

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
  else radioButton[4].checked = true;

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
      if (theSekitori[i] !== "") {
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

        var holder = document.createElement("span");
        holder.innerHTML = rikiData.join(" ");
        holder.style.display = "none";

        cell[i].appendChild(holder);
        cell[i].appendChild(card);
      }
    }
  }
};

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  window.localStorage.setItem("radioDrop", button.value);
}

// *****************************************************************************

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "yellow";
  //rd.hover.borderTd = "2px solid blue";
  rd.dropMode = "multiple";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(" ")[0];
      rd.only.div[rank] = rank;
    }
  }

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
    currentCell.style.backgroundColor = "lightblue";
  };

  rd.event.notMoved = function () {
    var currentCell = rd.findParent("TD", rd.obj);
    currentCell.style.removeProperty("background-color");
  };

  rd.event.droppedBefore = function (targetCell) {
    var rikiCount = document.getElementById("makRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      currentChgCell,
      dropRadio = document.getElementsByName("dropMode");

    currentCell.style.removeProperty("background-color");

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
