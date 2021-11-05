exports.gameMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 MENU GAME 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}limitgame
▢ ${prefix}slot
▢ ${prefix}siapaaku
▢ ${prefix}family100
▢ ${prefix}kuismath
▢ ${prefix}asahotak
▢ ${prefix}tebaklirik
▢ ${prefix}tebaklagu
▢ ${prefix}susunkata
▢ ${prefix}kimiakuis
▢ ${prefix}caklontong
▢ ${prefix}tebakjenaka
▢ ${prefix}tebakanime
▢ ${prefix}tebakgambar
▢ ${prefix}tebaktebakan
▢ ${prefix}tebakumur
▢ ${prefix}suit
▢ ${prefix}math

`
}
exports.funMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 FUN MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}mining
▢ ${prefix}cekwatak _nama_
▢ ${prefix}cekmati _nama_
▢ ${prefix}wangy _nama_
▢ ${prefix}citacita
▢ ${prefix}toxic
▢ ${prefix}truth
▢ ${prefix}dare
▢ ${prefix}apakah _teks_
▢ ${prefix}bisakah _teks_
▢ ${prefix}kapankah _teks_
▢ ${prefix}rate
`
}
exports.wibuMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 WIBU MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}loli
▢ ${prefix}lolivideo [ERROR]
▢ ${prefix}husbu
▢ ${prefix}milf
▢ ${prefix}cosplay
▢ ${prefix}wallml
▢ ${prefix}waifu
▢ ${prefix}quotesanime
▢ ${prefix}animequotes
▢ ${prefix}nhentai _code_
▢ ${prefix}nhentai2 _code_
`
}
exports.otherMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 OTHER MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}cerpen
▢ ${prefix}cecan
▢ ${prefix}brainly _query_
▢ ${prefix}artinama _namamu_
▢ ${prefix}shopee _query_
▢ ${prefix}playstore _query_
▢ ${prefix}ssweb _query_
▢ ${prefix}google _query_
▢ ${prefix}image _query_
▢ ${prefix}pinterest _query_
▢ ${prefix}nulis
▢ ${prefix}igstalk
▢ ${prefix}iguser
▢ ${prefix}githubstalk
▢ ${prefix}tiktokstalk
▢ ${prefix}img2url _reply image_
▢ ${prefix}ytsearch _query_
▢ ${prefix}infogempa
▢ ${prefix}infotsunami
`
}
exports.stickerMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 STICKER MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}attp _teks_
▢ ${prefix}ttp2 _teks_
▢ ${prefix}ttp3 _teks_
▢ ${prefix}ttp4 _teks_
▢ ${prefix}amongus _teks_
▢ ${prefix}dadu
▢ ${prefix}doge
▢ ${prefix}patrick
▢ ${prefix}gura
▢ ${prefix}stickeranime
▢ ${prefix}semoji _emoji_
▢ ${prefix}sticker _reply image_
▢ ${prefix}smeme _teks|teks_
▢ ${prefix}swm _pack|author_
▢ ${prefix}take _pack|author_
▢ ${prefix}tovideo
▢ ${prefix}toimg

`
}
exports.ownerMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 OWNER MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}bc _teks_
▢ ${prefix}term
▢ ${prefix}eval
▢ ${prefix}reset
▢ ${prefix}clearall
▢ ${prefix}leaveall
▢ ${prefix}join _link_
▢ ${prefix}shutdown
▢ ${prefix}getquoted
▢ ${prefix}addupdate _fitur_
▢ ${prefix}exif _nama|author_
▢ ${prefix}sewa add/del _waktu_
▢ ${prefix}premium add _@tag|nomor_
▢ ${prefix}premium del _@tag|nomor_

`
}

exports.groupMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return`*「 GRUP MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}gelud _@tag_
▢ ${prefix}tictactoe _@tag_
▢ ${prefix}cekganteng
▢ ${prefix}cekcantik
▢ ${prefix}babi
▢ ${prefix}beban
▢ ${prefix}cantik
▢ ${prefix}ganteng
▢ ${prefix}groupsetting
▢ ${prefix}afk _alasan_
▢ ${prefix}ceksewa
▢ ${prefix}kickall
▢ ${prefix}infogroup
▢ ${prefix}promote _@tag_
▢ ${prefix}demote _@tag_
▢ ${prefix}listonline
▢ ${prefix}tagall _teks_
▢ ${prefix}leave
▢ ${prefix}kick _@tag_
▢ ${prefix}add _62xxx_
▢ ${prefix}setnamegc
▢ ${prefix}setppgc _reply image_
▢ ${prefix}setdeskgc
▢ ${prefix}sider _reply chat bot_
▢ ${prefix}hidetag _teks_
▢ ${prefix}linkgc

`
}
exports.downloadMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
    return `*「 DOWNLOAD MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}fbdl
▢ ${prefix}igdl
▢ ${prefix}igdl2
▢ ${prefix}twitter
▢ ${prefix}tiktok
▢ ${prefix}play _query_
▢ ${prefix}ytmp3 _link
▢ ${prefix}ytmp4_ink
▢ ${prefix}ythd
▢ ${prefix}soundcloud
▢ ${prefix}tiktoknowm _link_
▢ ${prefix}tiktokaudio
▢ ${prefix}mediafire

`
}
exports.rulesBot = (prefix) => {
    return `*「 RULES KUHXBOT 」*
*Username :* ${pushname}


1. Jangan Toxic Ke Bot. 
Sanksi: *PERMANENT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan Spam Fitur Bot.
Sanksi: *PERMANENT BLOCK*

4. Jangan Culik Sembarangan.
Sanksi: *VERY HARD BLOCK*

*Jika sudah dipahami rules-nya,*
*Silahkan ketik ${prefix}menu untuk memulai!*
Mengterima kasih.
`
}
exports.iklanBot = (prefix) => {
return`         𝗜𝗞𝗟𝗔𝗡 𝗕𝗢𝗧𝗭
      
KEUNTUNGAN BOTZ
▢ BISA JAGA GRUP DARI LINK
▢ BISA BIKIN STIKER TEKS,VIDIO DAN GAMBAR
▢ BISA NYAPA TAMU YG MASUK
▢ BISA PLAY AUDIO DAN VIDIO
▢ BISA JADI ADMIN BERBER

KELEBIHAN BOTZ
▢ ON 24JAM KALAU GK DELAY
▢ SELALU UPDATE FITUR 
▢ BOT NO PASARAN

LIST HARGA SEWA BOTZ
▢ PERHARI 2K
▢ PERMINGGU 5K
▢ PERBULAN 15K
▢ PERMANEN 40K
MINAT HIBUNGI OWNER
wa.me/6282287486762

YG MAU TOP UP GAME MARI JOIN
https://chat.whatsapp.com/KUb8JJwppqL3zLS7p9xXx7`
}
exports.infoMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return `*「 INFO MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}update
▢ ${prefix}level
▢ ${prefix}rules
▢ ${prefix}profile
▢ ${prefix}waktu
▢ ${prefix}botstat
▢ ${prefix}sewabot
▢ ${prefix}listsewa
▢ ${prefix}owner
▢ ${prefix}ping
▢ ${prefix}runtime
▢ ${prefix}donasi
▢ ${prefix}listdm
▢ ${prefix}leaderboard
▢ ${prefix}cekpremium
▢ ${prefix}listpremium
▢ ${prefix}getpp
▢ ${prefix}setpp _reply image_
▢ ${prefix}bugreport _keluhan_

`
} 
exports.islamMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return `*「 ISLAM MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}kisahnabi
▢ ${prefix}jadwalsholat
▢ ${prefix}alquran
▢ ${prefix}asmaulhusna
▢ ${prefix}alquranaudio
▢ ${prefix}listsurah
`
}
exports.sertiMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return `*「 SERTI MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}sertitolol
▢ ${prefix}bucinserti
▢ ${prefix}fuckboy
▢ ${prefix}fuckgirl
▢ ${prefix}badboy
▢ ${prefix}badgirl
▢ ${prefix}goodboy
▢ ${prefix}goodgirl

`
}
exports.ceritaMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return`*「 CERITA MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}cerpen
▢ ${prefix}horor
▢ ${prefix}quotsdilan
▢ ${prefix}pantun
▢ ${prefix}faktaunik
▢ ${prefix}bucin
▢ ${prefix}quotes

`
}
exports.makerMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return`*「 MAKER MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}tahta
▢ ${prefix}cup
▢ ${prefix}cup1
▢ ${prefix}coffe
▢ ${prefix}birthdaycake
▢ ${prefix}metallogo
▢ ${prefix}lighttext
▢ ${prefix}halloween
▢ ${prefix}vampire
▢ ${prefix}matrix
▢ ${prefix}googletxt
▢ ${prefix}spiderman
▢ ${prefix}express

`
}
exports.toolsMenu = (prefix, pushname, isOwner, isPremium, baterai) => {
return`*「 TOOLS MENU 」*
*Username :* ${pushname}
*Status User :* ${isOwner ? 'Creator' : isPremium ? 'Premium' : 'Gratisan'}
*Info Baterai :* ${baterai}%

▢ ${prefix}addvn
▢ ${prefix}listvn
▢ ${prefix}getvn
▢ ${prefix}addimg
▢ ${prefix}listimg
▢ ${prefix}addvid
▢ ${prefix}listvid
▢ ${prefix}addstik
▢ ${prefix}liststik
▢ ${prefix}getstik
   `}