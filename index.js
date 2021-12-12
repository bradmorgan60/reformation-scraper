const cheerio = require('cheerio')
const request = require('request')

request("", (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
    }
})