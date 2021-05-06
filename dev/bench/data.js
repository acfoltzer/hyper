window.BENCHMARK_DATA = {
  "lastUpdate": 1620317907747,
  "repoUrl": "https://github.com/acfoltzer/hyper",
  "entries": {
    "connect": [
      {
        "commit": {
          "author": {
            "email": "mohsen-alizadeh@users.noreply.github.com",
            "name": "Mohsen Alizadeh",
            "username": "mohsen-alizadeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573",
          "message": "docs(headers): no_inline doc on HeaderMap (#2525)",
          "timestamp": "2021-05-03T13:58:34-07:00",
          "tree_id": "72f2a5e2407fddbc549e5cbc070fc913c857db94",
          "url": "https://github.com/acfoltzer/hyper/commit/d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573"
        },
        "date": 1620317740571,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 61304,
            "range": "± 6852",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "mohsen-alizadeh@users.noreply.github.com",
            "name": "Mohsen Alizadeh",
            "username": "mohsen-alizadeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573",
          "message": "docs(headers): no_inline doc on HeaderMap (#2525)",
          "timestamp": "2021-05-03T13:58:34-07:00",
          "tree_id": "72f2a5e2407fddbc549e5cbc070fc913c857db94",
          "url": "https://github.com/acfoltzer/hyper/commit/d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573"
        },
        "date": 1620317769154,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64687,
            "range": "± 11018",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "mohsen-alizadeh@users.noreply.github.com",
            "name": "Mohsen Alizadeh",
            "username": "mohsen-alizadeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573",
          "message": "docs(headers): no_inline doc on HeaderMap (#2525)",
          "timestamp": "2021-05-03T13:58:34-07:00",
          "tree_id": "72f2a5e2407fddbc549e5cbc070fc913c857db94",
          "url": "https://github.com/acfoltzer/hyper/commit/d1d2f32a7358c1c7d489ebbb98f4cbfdca9bb573"
        },
        "date": 1620317892927,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76255,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6931744,
            "range": "± 522101",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32858,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 230750,
            "range": "± 6333",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52799588,
            "range": "± 1667341",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51392468,
            "range": "± 2007475",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54078614,
            "range": "± 1238596",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4091634,
            "range": "± 514717",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 41818,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 63790,
            "range": "± 1322",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 227705,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10264189,
            "range": "± 9428298",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10377874,
            "range": "± 9313317",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9957708,
            "range": "± 9365318",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64274937,
            "range": "± 4427716",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 82729085,
            "range": "± 13519587",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7034771,
            "range": "± 1118345",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67061,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 128953,
            "range": "± 3904",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}