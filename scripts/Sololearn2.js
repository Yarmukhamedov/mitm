let body=JSON.parse($response.body);

body = {
  "success": true,
  "errors": [],
  "data": {
    "hasInfiniteHearts": true
  }
}

$done({body:JSON.stringify(body)});

