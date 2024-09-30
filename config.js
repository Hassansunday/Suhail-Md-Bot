const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349164399740";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_43_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUrUHRPS1AvbFhCZER4ZU9HSVVFUFdVenNWWTEycHo0a3NGQmJibDFqczQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldoU2xtdFNUVElLMXppQU9wNnIyclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA1NmRkZWYtYzA2MS00NjFlLWE1YmMtZjM3NGQ5N2U4ODc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTQzLFxuICAgICAgMTEsXG4gICAgICAxLFxuICAgICAgMjM4LFxuICAgICAgMTA1LFxuICAgICAgNzgsXG4gICAgICA4OCxcbiAgICAgIDMzLFxuICAgICAgODUsXG4gICAgICAxMTcsXG4gICAgICAyNTQsXG4gICAgICAyNyxcbiAgICAgIDE5NCxcbiAgICAgIDcwLFxuICAgICAgMjIxLFxuICAgICAgMTY1LFxuICAgICAgMTE5LFxuICAgICAgMTMsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxMixcbiAgICAgIDgzLFxuICAgICAgMTExLFxuICAgICAgMTk1LFxuICAgICAgNjIsXG4gICAgICAyMzksXG4gICAgICAxNjcsXG4gICAgICA0MyxcbiAgICAgIDEwNixcbiAgICAgIDE5NixcbiAgICAgIDIyMyxcbiAgICAgIDE5MCxcbiAgICAgIDE5OCxcbiAgICAgIDQwLFxuICAgICAgMTMxLFxuICAgICAgMzUsXG4gICAgICAyMDMsXG4gICAgICAxOTMsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0tOMVkxWU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQzOTk3NDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVNVklMRSBUUkFOU0FUTEFOVElDIENPTSBMVEQgMlwiLFxuICAgIFwibGlkXCI6IFwiMTM5ODA0NzA5MTUyODY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQblgwM1lRMUozcXR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU3Nnhtb2NSQjZxMW5ZTm1yUHY4T3E2UkVaUjhYZ3RhZ1FoRGJ3djNzbE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFdtRmVFcENhT0h2L3c0NDNrZTloU01rRE1LbFd0SERFTXl0RWp2NHlVbzlLdER2T200dENHcHg4cStiY25JNTJJZC9nNWZzUVhlQ2xwOUU3QmJ6QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFIvZUlqcVBEU2ZPTThnN21VQndCQzJ6MVFWUjB1SnBBMmxxVGRNZjJ4YlkzblZaaENnM0lvU1JKWG1aR0I2WktJWFdka2N6bTl1NDBUYkcvek1nREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NDM5OTc0MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc2OTY2MDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
