import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ πΎ π²π°π½π°π» π³π΄ ππΎππππ±π΄*'
const { video, channel } = await youtubeSearch(text)
let pp = './galeria/menudorrat3.jpg'
m.reply(wait)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `

*π ${v.title} (${v.url})*
*β±οΈ DuraciΓ³n: ${v.durationH}*
*π Publicado ${v.publishedTime}*
*ποΈ ${v.view} Vistas*
`.trim()
case 'channel': return `
π *${v.channelName}* (${v.url})
π₯ _${v.subscriberH} ππππππππππππ_
π¦ ${v.videoCount} ππππππ
`.trim()
}
}).filter(v => v).join('\n\nβ’ β’ ββββββββββββββββββ β’ β’\n\n')
conn.sendButton(m.chat, teks, wm, pp,
[
['gracias πΉ', `.sc`]], m)
     }
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
