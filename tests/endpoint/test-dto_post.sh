curl --location 'http://localhost:9000/v1/test/test-dto' \
--header 'Content-Type: application/json' \
--data '{
    "name": "It works",
    "greaterThanSevenTeen": 55
}'