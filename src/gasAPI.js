function main() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();
  const rangeValue = range.getValues();
  Logger.log(rangeValue);

  return response(rangeValue);
}

const response = (content) => {
  const response = ContentService.createTextOutput();
  response.setContent(ContentService.MimeType.JSON);
  response.setContent(JSON.stringify(content));
  return response;
};
