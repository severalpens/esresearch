curl -XGET 127.0.0.1:9200 -H "Authorization: *******************************************=="


curl -XGET 127.0.0.1:9200 -H "Content-Type: application/json" -u "elastic:**********"

curl -H "Content-Type: application/json"

curl -H "Content-Type: application/json" -XPUT '127.0.0.1:9200/shakespeare/_bulk' --data-binary @shakespeare_8.0.json


curl -H "Content-Type: application/json" -XGET  '127.0.0.1:9200/shakespeare/_search?pretty' -d '
{
    "query" : {
        "match_phrase" : {
            "text_entry" : "to be or not to be"
        }
    }
}