function main() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();
  const rangeValue = range.getValues();

  const result = filterEnable(rangeValue);

  const hikasenVtuber = createHikasenVtuber(result);

  Logger.log(hikasenVtuber);

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
  return sheetValue.map((value) => {
    const ffxiv = {
      datacenter: value[3],
      server: value[4],
    };

    return {
      channelID: value[0],
      name: value[2],
      channelIconID: "",
      twitter: "",
      twitch: "",
      ffxiv: ffxiv,
    };
  });
};
