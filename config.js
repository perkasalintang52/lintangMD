const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281322577123']
global.premium = ['628132257712']
global.ownername = 'urfavboy-lintang'
global.botname = 'Kamagapo Bot'
global.packname = '© Kamagapo Bot'
global.gc = 'https://tiktok.com/@joceylintangg'
global.linkyt = 'https://instagram.com/joceylintangg'
global.linkgc = 'https://tiktok.com/@joceylintangg'
global.limitawal = '100'
global.author = '@Kamagapo Bot'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Emang Lu Admin Group Tod!',
    botAdmin: 'Jadiin Admin Dulu Tod!',
    owner: 'Emang Lu Ownernya Tod',
    group: 'Digunakan Hanya Untuk Group Tod!',
    private: 'Digunakan Hanya Untuk Private Chat Tod!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
