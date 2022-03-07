function main() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();
  const rangeValue = range.getValues();

  const result = filterEnable(rangeValue);

  Logger.log(result);

  return response(result);
}

const response = (content) => {
  const response = ContentService.createTextOutput();
  response.setContent(ContentService.MimeType.JSON);
  response.setContent(JSON.stringify(content));
  return response;
};

const filterEnable = (list) => {
  return list.filter((vtuber) => vtuber[1] === 1);
};

const createHikasenVtuber = (sheetValue) => {
  sheetValue.map((value) => {
    const FFXIV = {
      DataCenter: value[3],
      Server: value[4],
    };

    return {
      channelID: value[0],
      name: value[1],
      channelIconID: "",
      twitter: "",
      twitch: "",
      FFXIV: FFXIV,
    };
  });
};
