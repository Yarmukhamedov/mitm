var obj = JSON.parse($response.body);
obj = 
{
  "status" : 1,
  "data" : {
    "premium" : true,
    "purchases" : [
      {
        "expiry_date" : 2116821356,
        "subscription" : "com.mubert.renewable.subscription.year.premium.trial"
      }
    ]
  },
  "method" : "AppCheckReceipt",
  "api_ver" : "api-app_2.0"
}
$done({body: JSON.stringify(obj)});