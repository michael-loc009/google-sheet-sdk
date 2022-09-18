class GoogleSheetsSDK {
    constructor(sheets) {
        this.sheets = sheets;
    }

    /**
     * Read the content from Google Sheet file:
     * @param sheetID The ID of the spreadsheet to retrieve data from.
     * @param range The A1 notation or R1C1 notation of the range to retrieve values from.
     * Please refer to this link for more info about the params - https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
     */
    async read(sheetID = "", range = "") {

        const res = await this.sheets.spreadsheets.values.get({
            spreadsheetId: sheetID,
            range: range
        });

        const sheetData = res.data.values;
        if (!sheetData || sheetData.length === 0) {
            console.log('No data found.');
            return;
        }

        return sheetData;
    }

    /**
     * Insert a new row to the Google Sheet file:
     * @param spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param range The A1 notation or R1C1 notation of the range to retrieve values from.
     * @param values The array of inserted data on the new row
     * Please refer to this link for more info about the params - https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
     */
    async insert(spreadsheetId = "", range = "", values = []) {
        const res = await this.sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: values,
            },
        });

        return res.data;
    }

    /**
     * Update a row from the Google Sheet file:
     * @param spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param range The A1 notation or R1C1 notation of the range to retrieve values from.
     * @param values The array of inserted data on the new row
     * Please refer to this link for more info about the params - https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
     */
    async update(spreadsheetId = "", range = "", values = [] ) {
        const res = await this.sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values
            },
        });

        console.log('%d cells updated.', res.data.updatedCells);
        return res.data;
    }

}

export default GoogleSheetsSDK;