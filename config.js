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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_29_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUG5GZ0NtWWtWMFNQbU5FTk93NUZVME52TmtETFZBMmJITzJUVStlczdiZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMDAwNTM0ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0NDc4QUYwMTdFRTg1REFCOEMyRUI2NzdGOTUzQTRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg5ODE4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3eVZGZXZDMVFSeTNYRzdsZlZvcjFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4MDMxNGYzLWYzMGUtNDgzZC04OWJiLTNjYmRkY2M2Yjk1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxLFxuICAgICAgMjM3LFxuICAgICAgMTYyLFxuICAgICAgOTEsXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgMTc4LFxuICAgICAgMSxcbiAgICAgIDE2NixcbiAgICAgIDg1LFxuICAgICAgMTM2LFxuICAgICAgMTEzLFxuICAgICAgMjE4LFxuICAgICAgMjQyLFxuICAgICAgMTMxLFxuICAgICAgMTcwLFxuICAgICAgMjgsXG4gICAgICAxNjIsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgNTIsXG4gICAgICAxNTQsXG4gICAgICA3NixcbiAgICAgIDE5OSxcbiAgICAgIDEzNyxcbiAgICAgIDEzNCxcbiAgICAgIDY5LFxuICAgICAgMTQ1LFxuICAgICAgOTksXG4gICAgICAyNDAsXG4gICAgICAyNDgsXG4gICAgICAxOTgsXG4gICAgICAxMzIsXG4gICAgICAxNjIsXG4gICAgICAxNjUsXG4gICAgICAyMDAsXG4gICAgICA3NCxcbiAgICAgIDIwOCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2QTlRRDM3TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDAwMDUzNDg0Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjMyMDQ3NjQzMjQwNzI6OThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dEdXBZQ0VMNmdqclFHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZRGRCZkVIL1J5aC9TUktUUjFlRThDQ2ZUMHcyMnRvM2QwOXYzQ1QxQm5zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInM4THV0eitxNGlFRlBtREh0MDkzb0FBUk9mTWZYODlKWjRNL2FFMGhnNFV6Q1dmcXhYNHd3ZXVvbXRXazlSdlFwcnVlc29hYlhYckJaRThDTmVsRkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkwrZnVNZFlVQ3pmZzN6eXFnTS9HeDkwZi9mdWttVlZNaERDekJsMEE2SVgyL3pDNDN4K05PVVptVFRaTWZMWGxJQmhWZUZsclIzVVVHUjlUdXJOWUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAwMDA1MzQ4NDo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODk4MTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjYyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNjIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdzR2OTd5YUZuWVJFS0dFV0pvdWErRmhqYjJYa2VqbmFqaHJPZEdTa3BzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4Mzk1ODk0OSxcImN1cnJlbnRJbmRleFwiOjEyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
