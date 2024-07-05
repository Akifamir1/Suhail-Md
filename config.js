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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_27_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2ZQWE9sSGF2Qm1JY1RDaVd2Q2lmQ3RwNjJGa1d3MU01RStkRStDelhKST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHpwSHdoN2xSRTZJV3NjMm9SRnl0Z1wiLFxuICBcInBob25lSWRcIjogXCI5OWJlODgwOS02NDliLTQwOWUtOWEzMi1mZTA3M2M3MWU2ZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxODgsXG4gICAgICA2MyxcbiAgICAgIDIyNCxcbiAgICAgIDEzMSxcbiAgICAgIDY4LFxuICAgICAgMjQ1LFxuICAgICAgNDksXG4gICAgICAzMyxcbiAgICAgIDE3MSxcbiAgICAgIDQ0LFxuICAgICAgMjA1LFxuICAgICAgMzEsXG4gICAgICAxMzgsXG4gICAgICAxMjAsXG4gICAgICAxNzMsXG4gICAgICAyNTMsXG4gICAgICA3OSxcbiAgICAgIDk5LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAyMTksXG4gICAgICA3OSxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDg0LFxuICAgICAgOTEsXG4gICAgICAxNjYsXG4gICAgICAxMTYsXG4gICAgICAyNTMsXG4gICAgICAxMSxcbiAgICAgIDIyLFxuICAgICAgNzMsXG4gICAgICAxNTIsXG4gICAgICAxNTUsXG4gICAgICA2MyxcbiAgICAgIDE3MyxcbiAgICAgIDM2LFxuICAgICAgMjQ5LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkNZQ0VKNU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM3NzQ5NTI0MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExMTY3MDkxNTQwMTYyOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEa3NhOEJFSmJ5bWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFBiL3gzM0dOQXBIZEwwWkRkRWNvamIvdVNnbXI1cjJsSDI3dnVoczAzST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsd0wyODN0VVdJMVdmeEdWMVdJOUNRZ1F5TEh0d2l1N3E0alBOQnB5Q0tCRzlhSi9zaFlVeW5HaDE3L3RiQ1o1eVhLa1gvVDBoZlFzeU5KR2M5MWxEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvMFQzNXJlTmdKQUdJMFhzOEJsS1QvdVZEZENMcTBRcUNDbGZjSm41cVVWMytSaTlMcHBMU2RGdWFqdy84NG1RM2tCdXJwMmthME0vNDZKaXBNVlVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNzc0OTUyNDM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwODg4NTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
