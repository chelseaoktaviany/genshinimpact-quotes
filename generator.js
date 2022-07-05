function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

//quote arrays
var quotes = [
  '"Please, allow me to join you on your journey. Guarding you on your journey sounds far more entertaining than any of the usual Favonius stuff." -Kaeya Alberich',
  '"After the Grand Master left on his expedition, all the affairs of the Knights of Favonius, both big and small, have been left up to Jean. If only there was more I could do to help her..." -Amber',
  '"Kamisato... One of the most distinguished clans in all of Inazuma. Despite his trickery in regard to their affairs, he is nevertheless a loyal subject. His past misdeeds shall be excused." -Raiden Shogun',
  '"Her Royal Highness the Tsaritsa is actually a gentle soul. Too gentle, in fact, and that is why she had to harden herself. Likewise, she declared war against the whole world only because she dreams of peace. And because she made an enemy of the world, I had the chance to become acquainted with you." -Tartaglia',
  '"In truth, not every night out at sea is filled with wind and waves. When the weather is clear, the moonlight flows over the rippling water, and schools of fish circle its hull. At moments like that, when I look out into the distance from the prow, I feel like this journey is worth it... The only thing that takes away from that feeling is their singing. They are so loud.. do not they need to sleep?" -Kaedehara Kazuha',
];
