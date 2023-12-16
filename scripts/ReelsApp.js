var obj = JSON.parse($response.body);
obj = 
{
  "data" : {
    "subscription" : {
      "is_trial" : true,
      "is_expired" : false
    }
  }
}

$done({body: JSON.stringify(obj)});
