var obj = JSON.parse($response.body);
obj = 
{
  "products" : [
    {
      "premium_status" : "ACTIVE",
      "product_id" : "com.adguard.annual",
      "expiration_date" : 1693497258000
    }
  ]
}

$done({body: JSON.stringify(obj)});