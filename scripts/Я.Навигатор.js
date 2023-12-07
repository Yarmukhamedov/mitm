let body = JSON.parse($response.body);
if($response.body.includes("NO_PLUS")) {
	body.data.user.status = "PLUS"
}
else{
body.result.permissions = {
      "until" : "2099-12-31T23:59:59+00:00",
      "values" : [
        "landing-play",
        "feed-play",
        "radio-play",
        "mix-play",
        "radio-skips",
        "library-cache",
        "library-play",
        "high-quality",
        "ads-skips",
        "non-shuffled-play",
        "background-play",
        "play-premium-tracks",
        "auto-flow",
        "play-full-tracks",
        "play-radio-full-tracks"
      ],
      "default" : [
        "play-radio-full-tracks"
      ]
    }
body.result.plus = {
      "hasPlus" : true,
      "isTutorialCompleted" : false
    }
body.result.subscription = {
      "autoRenewable" : [
        {
          "vendor" : "Yandex",
          "product" : {
            "productId" : "ru.yandex.web.plus.native.30days.autorenewable.trial.until.01.09.2023.new_plus.family.299.promocode",
            "family" : true,
            "feature" : "new-plus",
            "commonPeriodDuration" : "P30D",
            "type" : "subscription",
            "P1Y" : 360,
            "price" : {
              "amount" : 299,
              "currency" : "RUB"
            },
            "debug" : true,
            "plus" : 1,
            "duration" : 30,
            "trialDuration" : 0,
            "features" : [
              "basic-music",
              "basic-plus",
              "passport-family",
              "music-src-default",
              "basic-kinopoisk"
            ]
          },
          "vendorHelpUrl" : "https:\/\/www.yandex.ru\/support\/music-app\/subscription.xml",
          "productId" : "ru.yandex.web.plus.native.30days.autorenewable.trial.until.01.09.2023.new_plus.family.299.promocode",
          "expires" : "2099-12-31T23:59:59+00:00",
          "finished" : 0
        }
      ],
      "nonAutoRenewableRemainder" : {
        "days" : 0
      },
      "hadAnySubscription" : true,
      "canStartTrial" : false,
      "mcdonalds" : false
    }
}
$done({body: JSON.stringify(body)});