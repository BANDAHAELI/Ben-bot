const a0_0xc43d18=a0_0x5517;(function(_0x155fa5,_0x19257e){const _0x156e59=a0_0x5517,_0x26d7df=_0x155fa5();while(!![]){try{const _0x2bda84=-parseInt(_0x156e59(0x1c0))/0x1+-parseInt(_0x156e59(0x1a9))/0x2*(-parseInt(_0x156e59(0x19a))/0x3)+-parseInt(_0x156e59(0x16a))/0x4*(parseInt(_0x156e59(0x1f5))/0x5)+parseInt(_0x156e59(0x18d))/0x6*(-parseInt(_0x156e59(0x144))/0x7)+parseInt(_0x156e59(0x1b5))/0x8+parseInt(_0x156e59(0x1e6))/0x9+-parseInt(_0x156e59(0x1c2))/0xa;if(_0x2bda84===_0x19257e)break;else _0x26d7df['push'](_0x26d7df['shift']());}catch(_0x1c6b1d){_0x26d7df['push'](_0x26d7df['shift']());}}}(a0_0x3275,0x91ce8),require(a0_0xc43d18(0x172)));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,jidDecode,proto,getContentType,downloadContentFromMessage,fetchLatestWaWebVersion}=require('@adiwajshing/baileys'),fs=require('fs'),pino=require('pino'),lolcatjs=require(a0_0xc43d18(0x1e0)),path=require(a0_0xc43d18(0x1b6)),unzipper=require(a0_0xc43d18(0x191)),https=require(a0_0xc43d18(0x1ec)),axios=require(a0_0xc43d18(0x183)),dotenv=require('dotenv');dotenv[a0_0xc43d18(0x17e)]();const NodeCache=require(a0_0xc43d18(0x189)),msgRetryCounterCache=new NodeCache(),fetch=require(a0_0xc43d18(0x14b)),FileType=require(a0_0xc43d18(0x140)),AdmZip=require(a0_0xc43d18(0x16f)),express=require(a0_0xc43d18(0x1e9)),app=express(),port=process[a0_0xc43d18(0x1dc)][a0_0xc43d18(0x1ee)]||0x2382,_=require('lodash'),{Boom}=require(a0_0xc43d18(0x1b9)),PhoneNumber=require('awesome-phonenumber'),readline=require(a0_0xc43d18(0x19b)),{smsg,color,getBuffer}=require(a0_0xc43d18(0x194)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(a0_0xc43d18(0x14f)),{toAudio,toPTT,toVideo}=require('./nothing-ben/converter'),yargs=require('yargs/yargs'),store=makeInMemoryStore({'logger':pino()[a0_0xc43d18(0x1b3)]({'level':a0_0xc43d18(0x175),'stream':a0_0xc43d18(0x1d1)})});global[a0_0xc43d18(0x1d4)]=new Object(yargs(process[a0_0xc43d18(0x15a)][a0_0xc43d18(0x16d)](0x2))[a0_0xc43d18(0x181)](![])[a0_0xc43d18(0x174)]());const low=require(a0_0xc43d18(0x1c7)),{Low,JSONFile}=low,mongoDB=require(a0_0xc43d18(0x19c));let db;urldb!==''?(db=new mongoDB(urldb),lolcatjs[a0_0xc43d18(0x1ea)](a0_0xc43d18(0x154))):(db=new JSONFile(a0_0xc43d18(0x1e3)),lolcatjs[a0_0xc43d18(0x1ea)]('[\x20Connected\x20To\x20Local\x20Database\x20]'));global['db']=new Low(db),global[a0_0xc43d18(0x163)]=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x4b925c=a0_0xc43d18;if(global['db']['READ'])return new Promise(_0x2aa29b=>setInterval(function(){const _0x440df6=a0_0x5517;!global['db'][_0x440df6(0x1d2)]?(clearInterval(this),_0x2aa29b(global['db'][_0x440df6(0x1e2)]==null?global['loadDatabase']():global['db'][_0x440df6(0x1e2)])):null;},0x3e8));if(global['db']['data']!==null)return;global['db'][_0x4b925c(0x1d2)]=!![],await global['db']['read'](),global['db']['READ']=![],global['db'][_0x4b925c(0x1e2)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x4b925c(0x1e2)]||{}},global['db'][_0x4b925c(0x1ab)]=_['chain'](global['db'][_0x4b925c(0x1e2)]);},global[a0_0xc43d18(0x1b8)](),process['on']('uncaughtException',console['error']);global['db']&&urldb!==''&&setInterval(async()=>{const _0x3d597e=a0_0xc43d18;global['db']['data']&&await global['db'][_0x3d597e(0x1b4)]();},0x7530);function createTmpFolder(){const _0x37efaf=a0_0xc43d18,_0x55809c=path[_0x37efaf(0x14e)](__dirname,_0x37efaf(0x1e8));!fs['existsSync'](_0x55809c)?(fs['mkdirSync'](_0x55809c),lolcatjs[_0x37efaf(0x1ea)](_0x37efaf(0x1ba))):lolcatjs['fromString'](_0x37efaf(0x161));}createTmpFolder();function a0_0x3275(){const _0x75698a=['6OBgfnt','readline','./nothing-ben/mongoDB','Result\x20is\x20not\x20a\x20buffer','Ubuntu','Whatsapp\x20bot\x20successfully\x20connected\x20✅','stdout','international','Chrome','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','createInterface','alloc','SESSION_ID','asImage','loggedOut','873122OpTzWC','messages','chain','sendMessage','connectionReplaced','listen','filename','mime','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','base64','child','write','6258192gmNqZi','path','Connection\x20TimedOut,\x20Reconnecting...','loadDatabase','@hapi/boom','Folder\x20\x27tmp\x27\x20successfully\x20created..','trim','writeFileSync','withoutContact','lib','✅\x20SESSION_ID\x20Successfully\x20saved!','282341KpWrJA','verifiedName','6513090vzxMIz','toString','resolve','receivedPendingNotifications','error','./nothing-ben/lowdb','mimetype','name','existsSync','stringify','bind','mtype','timedOut','20.0.04','replace','store','READ','end','opts','status','sendImageAsSticker','\x0aFN:','creds','ephemeralMessage','Unknown\x20DisconnectReason:\x20','GET','env','question','session','Restart\x20Required,\x20Restarting...','lolcatjs','video','data','./nothing-ben/databasee.json','sendFile','connectionClosed','6391134mvNWuG','WhatsApp','tmp','express','fromString','requestPairingCode','https','get','PORT','send','output','watchFile','unwatchFile','connection','public','24315keHGcb','@g.us','Pairing\x20code:\x20','status@broadcast','log','msg','asSticker','file-type','cache','Server\x20is\x20listening\x20on\x20port\x20','❌\x20Error\x20in\x20saving\x20SESSION_ID:','3521xAReGQ','authState','remoteJid','connectionLost','creds.json','creds.update','sendVideoAsSticker','node-fetch','application/octet-stream','isBuffer','join','./nothing-ben/exif','getFile','readFileSync','readMessages','Update\x20','[\x20Successfully\x20Comnected\x20to\x20database\x20MongoDB\x20]','keys','groupMetadata','Error\x20Connection.update\x20','Device\x20Logged\x20Out,\x20Please\x20Connect\x20Again\x20And\x20Run.','\x0a╭─────────────━┈⊷\x20\x0a│🌏\x20*ʙᴏᴛ\x20ɪs\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ*\x0a╰─────────────━┈⊷\x0a│💫\x20ᴘʀᴇғɪx:\x20*[\x20.\x20]*\x0a│⭕\x20ᴍᴏᴅᴇ:\x20*ᴘᴜʙʟɪᴄ*\x0a│📍\x20ᴠᴇʀꜱɪᴏɴ:\x20*1.0.0*\x0a│🤖\x20ʙᴏᴛ\x20ɴᴀᴍᴇ:\x20*ʙᴇɴ\x20ʙᴏᴛ*\x0a│👨‍💻\x20ᴏᴡɴᴇʀ\x20:\x20*ɴᴏᴛʜɪɴɢ*\x0a╰─────────────━┈⊷\x0a*Join\x20Whatsapp\x20Channel\x20For\x20Updates*\x0a>\x20https://whatsapp.com/channel/0029Vasu3qP9RZAUkVkvSv32\x0a','argv','message','serializeM','server','user','string','\x0aitem1.TEL;waid=','Folder\x20\x27tmp\x27\x20already\x20available.','length','DATABASE','@s.whatsapp.net','120363333589976873@newsletter','key','endsWith','createWriteStream','downloadAndSaveMediaMessage','20DugOnI','concat','https://files.catbox.moe/4i7dp7.jpg','slice','startsWith','adm-zip','contacts','json','./config','connection.update','parse','silent','notify','close','true','mkdirSync','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','from','unlink','image','config','subject','statusCode','exitProcess','promises','axios','\x20Contact','logout','sticker','decodeJid','document','node-cache','Commands\x20Installation\x20Completed\x20✅','Cant\x20find\x20SESSION_ID\x20in\x20.env.\x20First,\x20get\x20it,\x20save\x20it\x20in\x20.env,\x20and\x20try\x20deploying\x20again!','test','9666sCQAzh','split','autoViewStatus','./session','unzipper','restartRequired','\x0a\x20\x20\x20\x20<!DOCTYPE\x20html>\x0a\x20\x20\x20\x20<html\x20lang=\x22fa\x22>\x0a\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<title>WhatsApp\x20Bot\x20Status</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(45deg,\x20#ff00cc,\x20#3333ff);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Arial\x27,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.status-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2030px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(10px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.status-container\x20h1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20uppercase;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.status-container\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#4CAF50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22status-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>WhatsApp\x20Bot\x20Status</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>WhatsApp\x20Bot\x20is\x20running!\x20✅</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20</html>\x0a\x20\x20','./nothing-ben/myfunc','ext','author','fromBuffer','BAE5','getName'];a0_0x3275=function(){return _0x75698a;};return a0_0x3275();}const question=_0x216575=>{const _0x3c5417=a0_0xc43d18,_0x25c983=readline[_0x3c5417(0x1a4)]({'input':process['stdin'],'output':process[_0x3c5417(0x1a0)]});return new Promise(_0x4a1c5b=>{const _0x4a05d3=_0x3c5417;_0x25c983[_0x4a05d3(0x1dd)](_0x216575,_0x4a1c5b);});};async function updateCredsFile(){const _0xdfb5f9=a0_0xc43d18,_0x307235=_0xdfb5f9(0x190),_0x484c1c=path[_0xdfb5f9(0x14e)](_0x307235,_0xdfb5f9(0x148)),_0x36c380=process[_0xdfb5f9(0x1dc)][_0xdfb5f9(0x1a6)];if(!_0x36c380)return console[_0xdfb5f9(0x1c6)](_0xdfb5f9(0x18b)),![];try{return!fs[_0xdfb5f9(0x1ca)](_0x307235)&&fs[_0xdfb5f9(0x179)](_0x307235,{'recursive':!![]}),!fs[_0xdfb5f9(0x1ca)](_0x484c1c)&&fs[_0xdfb5f9(0x1bc)](_0x484c1c,''),fs[_0xdfb5f9(0x1bc)](_0x484c1c,_0x36c380),console[_0xdfb5f9(0x13d)](_0xdfb5f9(0x1bf)),!![];}catch(_0x21f481){return console[_0xdfb5f9(0x1c6)](_0xdfb5f9(0x143),_0x21f481),![];}}updateCredsFile();async function downloadFile(_0x3e047c,_0x243ca5){const _0x3e7663=a0_0xc43d18;if(fs[_0x3e7663(0x1ca)](_0x243ca5))return;const _0x576c3c=fs[_0x3e7663(0x168)](_0x243ca5),_0x38df83=await axios({'method':_0x3e7663(0x1db),'url':_0x3e047c,'responseType':'stream'});return _0x38df83[_0x3e7663(0x1e2)]['pipe'](_0x576c3c),new Promise((_0x1b75a2,_0xd37455)=>{const _0x4a484a=_0x3e7663;_0x576c3c['on']('finish',_0x1b75a2),_0x576c3c['on'](_0x4a484a(0x1c6),_0xd37455);});}function createLibAndFiles(){const _0x3304eb=a0_0xc43d18,_0x5185ad=path[_0x3304eb(0x14e)](__dirname,_0x3304eb(0x1be));!fs[_0x3304eb(0x1ca)](_0x5185ad)&&fs[_0x3304eb(0x179)](_0x5185ad,{'recursive':!![]});const _0x14d3dd={'tempmailid.json':[]};Object[_0x3304eb(0x155)](_0x14d3dd)['forEach'](_0x2042b7=>{const _0x5db2aa=_0x3304eb,_0x5b7cee=path['join'](_0x5185ad,_0x2042b7);if(!fs[_0x5db2aa(0x1ca)](_0x5b7cee))fs[_0x5db2aa(0x1bc)](_0x5b7cee,JSON[_0x5db2aa(0x1cb)](_0x14d3dd[_0x2042b7],null,0x2),'utf8');else{}});}createLibAndFiles();async function isTargetGroupOrChannel(_0x4806e0){const _0x59e949=a0_0xc43d18,_0xf61bea=['120363411517229272@g.us',_0x59e949(0x165)];return _0xf61bea['includes'](_0x4806e0);}function a0_0x5517(_0x274e49,_0x474c35){const _0x32750f=a0_0x3275();return a0_0x5517=function(_0x5517de,_0x2835c1){_0x5517de=_0x5517de-0x13a;let _0x5b0acb=_0x32750f[_0x5517de];return _0x5b0acb;},a0_0x5517(_0x274e49,_0x474c35);}async function startBotz(){const _0x542ddc=a0_0xc43d18,{state:_0x3e36ef,saveCreds:_0x290319}=await useMultiFileAuthState(_0x542ddc(0x1de)),_0x4f84b5=makeWASocket({'logger':pino({'level':'fatal'}),'printQRInTerminal':![],'auth':_0x3e36ef,'msgRetryCounterCache':msgRetryCounterCache,'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'emitOwnEvents':!![],'fireInitQueries':!![],'generateHighQualityLinkPreview':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'browser':[_0x542ddc(0x19e),_0x542ddc(0x1a2),_0x542ddc(0x1cf)]}),_0x2adc1f='https://files.catbox.moe/hj9bzm.js',_0x586fad=path['join'](__dirname,'message.js');await downloadFile(_0x2adc1f,_0x586fad);if(!![]&&!_0x4f84b5[_0x542ddc(0x145)][_0x542ddc(0x1d8)]['registered']){const _0x259e65=await question('\x0a\x0aPlease\x20Type\x20Your\x20WhatsApp\x20Number\x20Example\x2093******\x20:\x0a'),_0x29f46f=await _0x4f84b5[_0x542ddc(0x1eb)](_0x259e65[_0x542ddc(0x1bb)]());console[_0x542ddc(0x13d)](_0x542ddc(0x13b)+_0x29f46f);}store[_0x542ddc(0x1cc)](_0x4f84b5['ev']),_0x4f84b5['ev']['on']('messages.upsert',async _0x572b40=>{const _0x33bd4e=_0x542ddc;try{const _0x2d5e51=_0x572b40[_0x33bd4e(0x1aa)][0x0];if(!_0x2d5e51['message'])return;_0x2d5e51[_0x33bd4e(0x15b)]=Object[_0x33bd4e(0x155)](_0x2d5e51['message'])[0x0]===_0x33bd4e(0x1d9)?_0x2d5e51[_0x33bd4e(0x15b)][_0x33bd4e(0x1d9)][_0x33bd4e(0x15b)]:_0x2d5e51['message'];_0x2d5e51[_0x33bd4e(0x166)]&&_0x2d5e51['key'][_0x33bd4e(0x146)]===_0x33bd4e(0x13c)&&global[_0x33bd4e(0x18f)]&&await _0x4f84b5[_0x33bd4e(0x152)]([_0x2d5e51['key']]);if(!_0x4f84b5[_0x33bd4e(0x1f4)]&&!_0x2d5e51['key']['fromMe']&&_0x572b40['type']===_0x33bd4e(0x176))return;if(_0x2d5e51[_0x33bd4e(0x166)]['id'][_0x33bd4e(0x16e)](_0x33bd4e(0x198))&&_0x2d5e51[_0x33bd4e(0x166)]['id'][_0x33bd4e(0x162)]===0x10)return;const _0x48186c=smsg(_0x4f84b5,_0x2d5e51,store);require('./message')(_0x4f84b5,_0x48186c,_0x572b40,store);}catch(_0x3999db){console[_0x33bd4e(0x13d)](_0x3999db);}}),_0x4f84b5[_0x542ddc(0x187)]=_0x5f2938=>{const _0x15e8c5=_0x542ddc;if(!_0x5f2938)return _0x5f2938;if(/:\d+@/gi[_0x15e8c5(0x18c)](_0x5f2938)){let _0x1991ab=jidDecode(_0x5f2938)||{};return _0x1991ab['user']&&_0x1991ab[_0x15e8c5(0x15d)]&&_0x1991ab[_0x15e8c5(0x15e)]+'@'+_0x1991ab['server']||_0x5f2938;}else return _0x5f2938;},_0x4f84b5['ev']['on']('contacts.update',_0x596559=>{const _0x410f10=_0x542ddc;for(let _0x126875 of _0x596559){let _0xbd132=_0x4f84b5[_0x410f10(0x187)](_0x126875['id']);store&&store[_0x410f10(0x170)]&&(store['contacts'][_0xbd132]={'id':_0xbd132,'name':_0x126875[_0x410f10(0x176)]});}}),_0x4f84b5['getName']=(_0x361591,_0x5cca6a=![])=>{const _0xcc6edb=_0x542ddc;id=_0x4f84b5[_0xcc6edb(0x187)](_0x361591),_0x5cca6a=_0x4f84b5[_0xcc6edb(0x1bd)]||_0x5cca6a;let _0x3421af;if(id[_0xcc6edb(0x167)](_0xcc6edb(0x13a)))return new Promise(async _0x350ce3=>{const _0x398013=_0xcc6edb;_0x3421af=store[_0x398013(0x170)][id]||{},!(_0x3421af[_0x398013(0x1c9)]||_0x3421af['subject'])&&(_0x3421af=_0x4f84b5[_0x398013(0x156)](id)||{}),_0x350ce3(_0x3421af[_0x398013(0x1c9)]||_0x3421af[_0x398013(0x17f)]||PhoneNumber('+'+id['replace']('@s.whatsapp.net',''))['getNumber'](_0x398013(0x1a1)));});else _0x3421af=id==='0@s.whatsapp.net'?{'id':id,'name':_0xcc6edb(0x1e7)}:id===_0x4f84b5[_0xcc6edb(0x187)](_0x4f84b5[_0xcc6edb(0x15e)]['id'])?_0x4f84b5[_0xcc6edb(0x15e)]:store['contacts'][id]||{};return(_0x5cca6a?'':_0x3421af[_0xcc6edb(0x1c9)])||_0x3421af['subject']||_0x3421af[_0xcc6edb(0x1c1)]||PhoneNumber('+'+_0x361591[_0xcc6edb(0x1d0)]('@s.whatsapp.net',''))['getNumber'](_0xcc6edb(0x1a1));},_0x4f84b5['public']=!![],_0x4f84b5[_0x542ddc(0x15c)]=_0x3786f1=>smsg(_0x4f84b5,_0x3786f1,store),_0x4f84b5['ev']['on'](_0x542ddc(0x173),async _0x2ae717=>{const _0x1d54bd=_0x542ddc,{connection:_0x2f944e,lastDisconnect:_0x42766e}=_0x2ae717;try{if(_0x2f944e===_0x1d54bd(0x177)){let _0x4dc98e=new Boom(_0x42766e?.[_0x1d54bd(0x1c6)])?.[_0x1d54bd(0x1f0)][_0x1d54bd(0x180)];if(_0x4dc98e===DisconnectReason['badSession'])console[_0x1d54bd(0x13d)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Verifikasi\x20Again'),_0x4f84b5[_0x1d54bd(0x185)]();else{if(_0x4dc98e===DisconnectReason[_0x1d54bd(0x1e5)])console[_0x1d54bd(0x13d)]('Connection\x20closed,\x20reconnecting....'),startBotz();else{if(_0x4dc98e===DisconnectReason[_0x1d54bd(0x147)])console[_0x1d54bd(0x13d)](_0x1d54bd(0x17a)),startBotz();else{if(_0x4dc98e===DisconnectReason[_0x1d54bd(0x1ad)])console[_0x1d54bd(0x13d)](_0x1d54bd(0x1b1)),_0x4f84b5[_0x1d54bd(0x185)]();else{if(_0x4dc98e===DisconnectReason[_0x1d54bd(0x1a8)])console[_0x1d54bd(0x13d)](_0x1d54bd(0x158)),_0x4f84b5['logout']();else{if(_0x4dc98e===DisconnectReason[_0x1d54bd(0x192)])console['log'](_0x1d54bd(0x1df)),startBotz();else _0x4dc98e===DisconnectReason[_0x1d54bd(0x1ce)]?(console[_0x1d54bd(0x13d)](_0x1d54bd(0x1b7)),startBotz()):_0x4f84b5[_0x1d54bd(0x1d3)](_0x1d54bd(0x1da)+_0x4dc98e+'|'+_0x2f944e);}}}}}}if(_0x2ae717[_0x1d54bd(0x1f3)]=='open'||_0x2ae717[_0x1d54bd(0x1c5)]==_0x1d54bd(0x178)){var _0x37dc44=_0x4f84b5['user']['id']['split'](':')[0x0]+_0x1d54bd(0x164);console[_0x1d54bd(0x13d)](_0x1d54bd(0x18a)),_0x4f84b5[_0x1d54bd(0x1ac)](_0x37dc44,{'image':{'url':_0x1d54bd(0x16c)},'caption':_0x1d54bd(0x159)}),console[_0x1d54bd(0x13d)](_0x1d54bd(0x19f));}}catch(_0x1f608e){console['log'](_0x1d54bd(0x157)+_0x1f608e);}}),_0x4f84b5['ev']['on'](_0x542ddc(0x149),_0x290319),_0x4f84b5[_0x542ddc(0x150)]=async(_0x1ac531,_0x52daac)=>{const _0xe54be=_0x542ddc;let _0x4deaa4,_0x25c063;const _0x1ddc4f=Buffer[_0xe54be(0x14d)](_0x1ac531)?_0x1ac531:/^data:.*?\/.*?;base64,/i['test'](_0x1ac531)?Buffer['from'](_0x1ac531[_0xe54be(0x18e)]`,`[0x1],_0xe54be(0x1b2)):/^https?:\/\//[_0xe54be(0x18c)](_0x1ac531)?await(_0x4deaa4=await fetch(_0x1ac531))['buffer']():fs[_0xe54be(0x1ca)](_0x1ac531)?(_0x25c063=_0x1ac531,fs[_0xe54be(0x151)](_0x1ac531)):typeof _0x1ac531===_0xe54be(0x15f)?_0x1ac531:Buffer['alloc'](0x0);if(!Buffer[_0xe54be(0x14d)](_0x1ddc4f))throw new TypeError(_0xe54be(0x19d));const _0x6537ef=await FileType['fromBuffer'](_0x1ddc4f)||{'mime':_0xe54be(0x14c),'ext':'.bin'};return _0x1ddc4f&&_0x52daac&&!_0x25c063&&(_0x25c063=_0x4994f7[_0xe54be(0x14e)](__dirname,'./tmp/'+new Date()*0x1+'.'+_0x6537ef[_0xe54be(0x195)]),await fs[_0xe54be(0x182)]['writeFile'](_0x25c063,_0x1ddc4f)),{'res':_0x4deaa4,'filename':_0x25c063,..._0x6537ef,'data':_0x1ddc4f,'deleteFile'(){const _0x5db1c5=_0xe54be;return _0x25c063&&fs['promises'][_0x5db1c5(0x17c)](_0x25c063);}};},_0x4f84b5['downloadMediaMessage']=async _0x4f7379=>{const _0x1ac546=_0x542ddc;let _0x227da9=(_0x4f7379[_0x1ac546(0x13e)]||_0x4f7379)[_0x1ac546(0x1c8)]||'',_0x5ec5a1=_0x4f7379[_0x1ac546(0x1cd)]?_0x4f7379[_0x1ac546(0x1cd)][_0x1ac546(0x1d0)](/Message/gi,''):_0x227da9[_0x1ac546(0x18e)]('/')[0x0];const _0x1a810a=await downloadContentFromMessage(_0x4f7379,_0x5ec5a1);let _0x2e3b3c=Buffer[_0x1ac546(0x17b)]([]);for await(const _0x553d07 of _0x1a810a){_0x2e3b3c=Buffer[_0x1ac546(0x16b)]([_0x2e3b3c,_0x553d07]);}return _0x2e3b3c;},_0x4f84b5['sendContact']=async(_0x52be9c,_0x43d08e,_0x9f4a61='',_0x58dfb0={})=>{const _0x596a35=_0x542ddc;let _0x20817b=[];for(let _0x5e1974 of _0x43d08e){_0x20817b['push']({'displayName':await _0x4f84b5['getName'](_0x5e1974),'vcard':_0x596a35(0x1a3)+await _0x4f84b5[_0x596a35(0x199)](_0x5e1974)+_0x596a35(0x1d7)+await _0x4f84b5[_0x596a35(0x199)](_0x5e1974)+_0x596a35(0x160)+_0x5e1974['split']('@')[0x0]+':'+_0x5e1974['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'});}_0x4f84b5[_0x596a35(0x1ac)](_0x52be9c,{'contacts':{'displayName':_0x20817b['length']+_0x596a35(0x184),'contacts':_0x20817b},..._0x58dfb0},{'quoted':_0x9f4a61});},_0x4f84b5[_0x542ddc(0x1e4)]=async(_0x5395d9,_0x171cdf,_0x2bb365='',_0x3ae190='',_0x3e1072,_0x40ee20=![],_0x387914={})=>{const _0x267a31=_0x542ddc;let _0x1daf90=await _0x4f84b5[_0x267a31(0x150)](_0x171cdf,!![]),{res:_0x31935c,data:_0x2afcd6,filename:_0x3f4eaf}=_0x1daf90;if(_0x31935c&&_0x31935c[_0x267a31(0x1d5)]!==0xc8||_0x2afcd6[_0x267a31(0x162)]<=0x10000)try{throw{'json':JSON[_0x267a31(0x174)](_0x2afcd6[_0x267a31(0x1c3)]())};}catch(_0x4caabb){if(_0x4caabb[_0x267a31(0x171)])throw _0x4caabb[_0x267a31(0x171)];}let _0x2ab0dc={'filename':_0x2bb365};_0x3e1072&&(_0x2ab0dc['quoted']=_0x3e1072);!_0x1daf90&&(_0x387914['asDocument']=!![]);let _0x29da5e='',_0x342191=_0x1daf90[_0x267a31(0x1b0)],_0x2f6837;if(/webp/['test'](_0x1daf90[_0x267a31(0x1b0)])||/image/['test'](_0x1daf90[_0x267a31(0x1b0)])&&_0x387914[_0x267a31(0x13f)])_0x29da5e=_0x267a31(0x186);else{if(/image/[_0x267a31(0x18c)](_0x1daf90[_0x267a31(0x1b0)])||/webp/[_0x267a31(0x18c)](_0x1daf90[_0x267a31(0x1b0)])&&_0x387914[_0x267a31(0x1a7)])_0x29da5e=_0x267a31(0x17d);else{if(/video/[_0x267a31(0x18c)](_0x1daf90[_0x267a31(0x1b0)]))_0x29da5e=_0x267a31(0x1e1);else/audio/['test'](_0x1daf90[_0x267a31(0x1b0)])?(_0x2f6837=await(_0x40ee20?toPTT:toAudio)(_0x2afcd6,_0x1daf90[_0x267a31(0x195)]),_0x2afcd6=_0x2f6837[_0x267a31(0x1e2)],_0x3f4eaf=_0x2f6837[_0x267a31(0x1af)],_0x29da5e='audio',_0x342191='audio/ogg;\x20codecs=opus'):_0x29da5e=_0x267a31(0x188);}}_0x387914['asDocument']&&(_0x29da5e=_0x267a31(0x188));let _0x5e1c94={..._0x387914,'caption':_0x3ae190,'ptt':_0x40ee20,[_0x29da5e]:{'url':_0x3f4eaf},'mimetype':_0x342191},_0x5b91cc;try{_0x5b91cc=await _0x4f84b5[_0x267a31(0x1ac)](_0x5395d9,_0x5e1c94,{..._0x2ab0dc,..._0x387914});}catch(_0x750fc7){console[_0x267a31(0x1c6)](_0x750fc7),_0x5b91cc=null;}finally{return!_0x5b91cc&&(_0x5b91cc=await _0x4f84b5[_0x267a31(0x1ac)](_0x5395d9,{..._0x5e1c94,[_0x29da5e]:_0x2afcd6},{..._0x2ab0dc,..._0x387914})),_0x5b91cc;}},_0x4f84b5[_0x542ddc(0x14a)]=async(_0x32fe0c,_0x29e57b,_0xd3030a,_0x2c319f={})=>{const _0x461058=_0x542ddc;let _0x11a0a0=Buffer[_0x461058(0x14d)](_0x29e57b)?_0x29e57b:/^data:.*?\/.*?;base64,/i[_0x461058(0x18c)](_0x29e57b)?Buffer[_0x461058(0x17b)](_0x29e57b['split']`,`[0x1],'base64'):/^https?:\/\//[_0x461058(0x18c)](_0x29e57b)?await await getBuffer(_0x29e57b):fs[_0x461058(0x1ca)](_0x29e57b)?fs[_0x461058(0x151)](_0x29e57b):Buffer[_0x461058(0x1a5)](0x0),_0x404c08;return _0x2c319f&&(_0x2c319f['packname']||_0x2c319f[_0x461058(0x196)])?_0x404c08=await writeExifVid(_0x11a0a0,_0x2c319f):_0x404c08=await videoToWebp(_0x11a0a0),await _0x4f84b5[_0x461058(0x1ac)](_0x32fe0c,{'sticker':{'url':_0x404c08},..._0x2c319f},{'quoted':_0xd3030a}),_0x404c08;},_0x4f84b5[_0x542ddc(0x169)]=async(_0xbbb7f8,_0x2eeb9e,_0x5817cc=!![])=>{const _0x2fb6e3=_0x542ddc;let _0x4a4793=_0xbbb7f8['msg']?_0xbbb7f8[_0x2fb6e3(0x13e)]:_0xbbb7f8,_0x1b5835=(_0xbbb7f8[_0x2fb6e3(0x13e)]||_0xbbb7f8)['mimetype']||'',_0x2d8ded=_0xbbb7f8[_0x2fb6e3(0x1cd)]?_0xbbb7f8[_0x2fb6e3(0x1cd)][_0x2fb6e3(0x1d0)](/Message/gi,''):_0x1b5835[_0x2fb6e3(0x18e)]('/')[0x0];const _0x141623=await downloadContentFromMessage(_0x4a4793,_0x2d8ded);let _0x12fb75=Buffer[_0x2fb6e3(0x17b)]([]);for await(const _0x2dab8a of _0x141623){_0x12fb75=Buffer[_0x2fb6e3(0x16b)]([_0x12fb75,_0x2dab8a]);}let _0x5da122=await FileType[_0x2fb6e3(0x197)](_0x12fb75);return trueFileName=_0x5817cc?_0x2eeb9e+'.'+_0x5da122['ext']:_0x2eeb9e,await fs['writeFileSync'](trueFileName,_0x12fb75),trueFileName;};const _0x4994f7=require(_0x542ddc(0x1b6));return _0x4f84b5[_0x542ddc(0x169)]=async(_0x41ca47,_0x20cf0b,_0x39ac92=!![])=>{const _0x524b37=_0x542ddc;let _0x2882e9=_0x41ca47[_0x524b37(0x13e)]?_0x41ca47['msg']:_0x41ca47,_0x50f211=(_0x41ca47[_0x524b37(0x13e)]||_0x41ca47)[_0x524b37(0x1c8)]||'',_0x3441b1=_0x41ca47[_0x524b37(0x1cd)]?_0x41ca47[_0x524b37(0x1cd)]['replace'](/Message/gi,''):_0x50f211[_0x524b37(0x18e)]('/')[0x0];const _0x2c84c0=await downloadContentFromMessage(_0x2882e9,_0x3441b1);let _0x255194=Buffer[_0x524b37(0x17b)]([]);for await(const _0x1938ff of _0x2c84c0){_0x255194=Buffer['concat']([_0x255194,_0x1938ff]);}let _0x11bb6b=await FileType[_0x524b37(0x197)](_0x255194),_0x3c1e5a=_0x39ac92?_0x20cf0b+'.'+_0x11bb6b[_0x524b37(0x195)]:_0x20cf0b,_0x3142e1=_0x4994f7[_0x524b37(0x14e)](__dirname,_0x524b37(0x1e8),_0x3c1e5a);return await fs[_0x524b37(0x1bc)](_0x3142e1,_0x255194),_0x3142e1;},_0x4f84b5[_0x542ddc(0x1d6)]=async(_0x231821,_0x309215,_0x36987b,_0x22d65d={})=>{const _0x406d69=_0x542ddc;let _0x2a0856=Buffer[_0x406d69(0x14d)](_0x309215)?_0x309215:/^data:.*?\/.*?;base64,/i['test'](_0x309215)?Buffer[_0x406d69(0x17b)](_0x309215[_0x406d69(0x18e)]`,`[0x1],_0x406d69(0x1b2)):/^https?:\/\//['test'](_0x309215)?await await getBuffer(_0x309215):fs[_0x406d69(0x1ca)](_0x309215)?fs[_0x406d69(0x151)](_0x309215):Buffer[_0x406d69(0x1a5)](0x0),_0x25f2b0;return _0x22d65d&&(_0x22d65d['packname']||_0x22d65d[_0x406d69(0x196)])?_0x25f2b0=await writeExifImg(_0x2a0856,_0x22d65d):_0x25f2b0=await imageToWebp(_0x2a0856),await _0x4f84b5[_0x406d69(0x1ac)](_0x231821,{'sticker':{'url':_0x25f2b0},..._0x22d65d},{'quoted':_0x36987b}),_0x25f2b0;},_0x4f84b5['sendPoll']=(_0x5c5852,_0x2f9157='',_0x1f40a4=[],_0xc5c691=0x1)=>{const _0x23c3c8=_0x542ddc;return _0x4f84b5[_0x23c3c8(0x1ac)](_0x5c5852,{'poll':{'name':_0x2f9157,'values':_0x1f40a4,'selectableCount':_0xc5c691}});},_0x4f84b5['sendText']=(_0x2ff7e7,_0x5dd0f8,_0x556861='',_0x13d186)=>_0x4f84b5[_0x542ddc(0x1ac)](_0x2ff7e7,{'text':_0x5dd0f8,..._0x13d186},{'quoted':_0x556861}),_0x4f84b5;}app[a0_0xc43d18(0x1ed)]('/',(_0x3e4ae6,_0x351a3d)=>{const _0xbd2e85=a0_0xc43d18,_0x2018b5=_0xbd2e85(0x193);_0x351a3d[_0xbd2e85(0x1ef)](_0x2018b5);}),app[a0_0xc43d18(0x1ae)](port,()=>{const _0x47ed93=a0_0xc43d18;console[_0x47ed93(0x13d)](_0x47ed93(0x142)+port);}),startBotz();let file=require[a0_0xc43d18(0x1c4)](__filename);fs[a0_0xc43d18(0x1f1)](file,()=>{const _0x194149=a0_0xc43d18;fs[_0x194149(0x1f2)](file),console[_0x194149(0x13d)](_0x194149(0x153)+__filename),delete require[_0x194149(0x141)][file],require(file);});