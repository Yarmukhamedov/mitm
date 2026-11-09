var obj = JSON.parse($response.body);
obj = 
{
  "detail" : {
    "message" : "Not enough coins to create this clip",
    "balance" : 500,
    "required" : 1
  }
}
$done({body: JSON.stringify(obj)});
