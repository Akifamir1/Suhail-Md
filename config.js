const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIms1NnVrY0V0d290UGFqcXlncmRCYm5Qb09hVm94TFplc1gzK3hSSTNMTjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDk4ODIyMzA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGN0UwNDkxOTMxNDQzMjk0NDkwOENFNUVDMEJDNTI0QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTcyODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRDYtQlRWSWtUWWVEZmpFT09QYlpiZ1wiLFxuICBcInBob25lSWRcIjogXCIxMzU3NjZlOS1mNWU1LTRkOTUtOTM3YS1kZmFmMWI0MGYyMmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxOTYsXG4gICAgICAyNyxcbiAgICAgIDcsXG4gICAgICAxMzgsXG4gICAgICAyMjYsXG4gICAgICAzNixcbiAgICAgIDU5LFxuICAgICAgMTg2LFxuICAgICAgMjMyLFxuICAgICAgMjQsXG4gICAgICA3MCxcbiAgICAgIDEwOSxcbiAgICAgIDEwNSxcbiAgICAgIDE5LFxuICAgICAgMjQ4LFxuICAgICAgMjQxLFxuICAgICAgNTEsXG4gICAgICAxOTksXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTc0LFxuICAgICAgNTAsXG4gICAgICAxOTMsXG4gICAgICA2MixcbiAgICAgIDIwMyxcbiAgICAgIDM5LFxuICAgICAgMzksXG4gICAgICA4LFxuICAgICAgMTk4LFxuICAgICAgMTE3LFxuICAgICAgOTksXG4gICAgICAxMCxcbiAgICAgIDkwLFxuICAgICAgMzcsXG4gICAgICAyMDEsXG4gICAgICAxNzEsXG4gICAgICA4MixcbiAgICAgIDYsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREs0VjQxSzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5ODgyMjMwODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFraWZcIixcbiAgICBcImxpZFwiOiBcIjEzMTk4OTA0MzExODI5OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lpdmlNSUhFTUdTdXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSktLazN4OUR3aFpzOER3ZEpmNStxZU1sTnMvYi9POWZpWEYxb3UzY2lWWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtNHFZSlZiS1hXRXlmZ05Uamp0akNyRVRrSEpmZTQ0QjNMM0xSVmwxQXVhMjN1NnI0WGszQzV3SWVPRlNJeGxhYzR0SjFNayt2NjRkSk1JQTFiSExEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmdEpBZndMVXlKaU9ucHhvR2ZjUy9YcjdrV2NFWmptZEpQa0llTk9qajExZG1PYlc5TjFpSXkyOVhtOGJGWitFOWw0aCtidytQY2RXS2h4eENBdmtBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTg4MjIzMDg6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjE3MjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWdjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZ2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2SHFGOVJqM2Y4NUswSWlqVkZ0MkI2V3BCdmw2Z2FHMGFwSXoySisxTVV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTc1OTczMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
