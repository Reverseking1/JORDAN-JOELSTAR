const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Jordanzzz4444@gmail.com"
global.location="Edo,Nigeria."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/jamesxtreme/JORDAN-JOELSTAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e1e12ab2d93f3e7dae4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2349054039891" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349054039891";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/f81015230c96d1f53ab60.mp4",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349054039891";

global.api_smd = "https://api-smd.onrender.com"
global.scan = "";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©JORDAN-JOELSTAR 🕸️" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"),
 
  author : process.env.PACK_AUTHER|| "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁🤖",
  packname: process.env.PACK_NAME || "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁🤖",
  botname : process.env.BOT_NAME  || "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻𝚂𝚃𝙰𝚁 🤖",
  ownername:process.env.OWNER_NAME|| "JORDAN JOELSTAR",

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURKZjZUM2R5a1lyVFlGdEdUZjI2Rld1OTVSWENranlpSnhmcGxscFkxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFp5bTYyaTFCWUN4Qzg2aTdmRm9TR3JSNXNsNzhEcDVtNjVic0RQSjlDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSGl2RGFzRWZqc0xLN09GVlR1RXFIWmRMK1I4VHpXQjRPMWdRSlg0eUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWEc0REdCeWk3c0t6OS9sVTRwajlOeGRZMUd2WDlFNGllOHhXVnVHc3dFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGTzBIenViM2NHOWZYR3oyYitvVFViYjhaNXd6RmVyZWFEZ0JqWUZoVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yMlBhaG16YjhlK2xrbnowc0F4SGJ5bTFFN0cydmhURllxck1NMTVORTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFEMFEzcVFhanY4S2IyTHVlaEVaUFI3SXMwaU42QlBoV3NVTHFDMG9IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHlITmsxb1N1dTh2TG9lTVNuMUNLY3IzK29VaHA3WWZ6NEIzcDRiR0xYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhxV3VLaWdjajB6RHpydjhMMCtONnJHTkRnOEkvWllsY3hwVExMNTRTS0JPTUpVa2VYcGxlSDhJNEcrRmY0VkxoNWxSR3dKUnR1MWw3WXF5MW9PUkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiI2ZDNSM0N0WjMvZm5GNjdHN0tLME9Kdm9DdnNUU2lxNzk2dDk0SXlSWFRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOLWNmb1RGTVI5aXI5SXJaYTV1Qk5RIiwicGhvbmVJZCI6ImE3NmNjY2ExLTg1NTYtNDYyYS1hNDAxLWM2MDIzZWY3ZmQyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYTdEQmZNeXI0T2EyOTMwOERUaDU1cEkvYVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJLWlAzT1RZdXJRM1lqMFNpV3lwd3RMZk5BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ1RkdDNktSIiwibWUiOnsiaWQiOiIyMzMyNTc1MTQ1MDQ6NTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5Z3BKZ0JFS3oyOTdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBLVVllbXBVZjV1cTdYNnI4OUhvV3FTWDNXUmowdktuNi8vYzlGcnZraUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikp1RXRValdkRm9qdlZ1TENhV2xoQjdUZXo4VUtBS0tyd1Ezd04vbmhRRXFwVzVzSHljSlZ5S05ka0wySUUzL0RUdGNVbjJtVGVVOFpWamQ2RFJQdWlBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvejFIMEVnTUMvanAwL0MwbmhtWUpMc2xqS29DMy95UmtYcytTaElNUkV0UTIrRUVhLzVCbTNtdmlyaVRwOElWTVpwTVJtaVhjL1J3VkhMSEIxWDlDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI1NzUxNDUwNDo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkQ2xHSHBxVkgrYnF1MStxL1BSNkZxa2w5MWtZOUx5cCt2LzNQUmE3NUloIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAwMTgxMDV9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "diVYfA5PJpwMSDrMCj2BYbnc",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "1",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b83709a7a0691e09fbe13db39068056a",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "JORDAN-JOELSTAR 🤖",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
