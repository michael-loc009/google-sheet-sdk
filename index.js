import googleConn from "./google_api_connection.js";
import GoogleSheetsSDK from "./google_sheets_sdk.js";


async function testReadGoogleSheetData(){
    console.log("===============test read data=================");

    const googleSheetsConn = await googleConn.connect();

    if (!googleSheetsConn) {
        console.error("unable to connect to google sheets api");
        return;
    }
    
    const googleSheetsSDK = new GoogleSheetsSDK(googleSheetsConn);
    
    const data = await googleSheetsSDK.read("1xQ52hXxO2xGyXWLjX0PLERgbezMTLY74gd-zFIkU7d4","Sheet1!A2:P");
    
    if (!data) {
        console.error("unable to read data");
        return;
    }

    data.forEach((rows) =>{
        console.log(rows);
    })
}

async function testInsertGoogleSheetData(){
    console.log("===============test insert data=================");

    const googleSheetsConn = await googleConn.connect();

    if (!googleSheetsConn) {
        console.error("unable to connect to google sheets api");
    }
    
    const googleSheetsSDK = new GoogleSheetsSDK(googleSheetsConn);

    let values = [
        ["haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha","haha"],
    ]
    
    const data = await googleSheetsSDK.insert("1xQ52hXxO2xGyXWLjX0PLERgbezMTLY74gd-zFIkU7d4","Sheet1!A2:P", values);
    
    if (!data) {
        console.error("unable to insert data");
        return;
    }

    console.log(data);
}

async function testUpdateGoogleSheetData(){
    console.log("===============test update data=================");

    const googleSheetsConn = await googleConn.connect();

    if (!googleSheetsConn) {
        console.error("unable to connect to google sheets api");
    }
    
    const googleSheetsSDK = new GoogleSheetsSDK(googleSheetsConn);

    let values = [
        ["hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi","hihi"],
    ]
    
    const data = await googleSheetsSDK.update("1xQ52hXxO2xGyXWLjX0PLERgbezMTLY74gd-zFIkU7d4","Sheet1!A1152:P", values);
    
    if (!data) {
        console.error("unable to update data");
        return;
    }

    console.log(data);
}


testReadGoogleSheetData().then(testInsertGoogleSheetData).then(testUpdateGoogleSheetData);