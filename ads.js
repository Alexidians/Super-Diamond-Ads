const SuperDiamondAds = {
 clearAds: function () {
  var adsExsist = document.getElementsByClassName("SuperDiamondAd").length !== 0
  while(adsExsist) {
   document.getElementsByClassName("SuperDiamondAd")[0].remove()
   if(document.getElementsByClassName("SuperDiamondAd").length == 0) {
    adsExsist = false
   }
 },
 createPageAd: function (pageUrl, width, height) {
  var ad = document.createElement("SuperDiamondAd")
  ad.class = "SuperDiamondAd"
  var adIframe = document.createElement("iframe")
  adIframe.src = pageurl
  adIframe.width = width
  adIframe.height = height
  ad.appendChild(adIframe)
  return ad;
 },
 createImageAd: function (imageUrl, url, width, height) {
  var ad = document.createElement("SuperDiamondAd")
  ad.class = "SuperDiamondAd"
  ad.addEventListener('click', function handleClick(event) {
   open(url)
  });
  var adImg = document.createElement("img")
  adImg.src = pageurl
  adImg.width = width
  adImg.height = height
  ad.appendChild(adImg)
  return ad;
 }
}
<link rel="stylesheet" href="styles.css">
SuperDiamondAds.css = document.createElement("link")
SuperDiamondAds.css.rel = "stylesheet"
SuperDiamondAds.css.href = "https://alexidians.github.io/Super-Diamond-Ads/ads.css"
