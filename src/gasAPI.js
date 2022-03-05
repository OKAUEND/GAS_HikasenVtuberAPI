function myFunction() {
  const test = SpreadsheetApp.getActiveSheet();
  const Row = 2;
  const value = test.getRange(`A${Row}:D${Row}`).getValues();
  console.log(value);

  return response(value);
}

const response = (content) => {
  const response = ContentService.createTextOutput();
  response.setContent(ContentService.MimeType.JSON);
  response.setContent(JSON.stringify(content));
  return response;
};
