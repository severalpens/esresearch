﻿curl -XPUT 127.0.0.1:9200/movies -d '
{
    "mappings": {
            "properties" " {
                "year" : {"type":"date"}
                    }
    }
}'

