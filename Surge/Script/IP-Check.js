let url = "http://ip-api.com/json/?lang=en"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `IP信息：${ip}\n所在地：${emoji} ${city}\n服务商：${isp}`,
    icon: "antenna.radiowaves.left.and.right.circle",
    "icon-color": "#007aff"
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}
