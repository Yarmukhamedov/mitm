var obj = JSON.parse($response.body);
obj = 
{
  "location" : {
    "country" : {
      "currencyType" : "UZS",
      "locale" : "uz",
      "id" : 1,
      "code" : "UZ",
      "flagUrl" : null,
      "phoneCode" : "+998",
      "updatedAt" : "2025-08-07T09:03:44.124984",
      "createdAt" : "2025-08-07T09:03:44.124984",
      "phoneMask" : "",
      "name" : "Uzbekistan"
    },
    "region" : {
      "id" : 21,
      "updatedAt" : "2025-08-07T09:03:44.664573",
      "name" : "Buxoro vil",
      "createdAt" : "2025-08-07T09:03:44.664573"
    },
    "city" : {
      "id" : 293,
      "updatedAt" : "2025-08-07T09:03:44.717078",
      "name" : "Buxoro shahri",
      "createdAt" : "2025-08-07T09:03:44.717078"
    }
  },
  "nextPaymentDate" : "2030-08-04",
  "tariff" : "PAID",
  "active" : false,
  "promoCode" : null,
  "paymentsGeoExempt" : false,
  "syncClientId" : "e5b0ddbb-1135-4988-89b2-9dde9417ca1b",
  "romchiAiEnabled" : true,
  "createdAt" : "2026-08-04T17:12:36.253712",
  "remainDays" : 0,
  "balance" : 0,
  "updatedAt" : "2026-08-26T23:00:37.942848",
  "id" : 99091,
  "betaTester" : false,
  "enabled" : true,
  "titleColor" : null,
  "role" : "DIRECTOR",
  "password" : "",
  "fullName" : "Mukhammad",
  "username" : "+998936827222"
}
$done({body: JSON.stringify(obj)});
