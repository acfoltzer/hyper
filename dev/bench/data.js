window.BENCHMARK_DATA = {
  "lastUpdate": 1620321629623,
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
      },
      {
        "commit": {
          "author": {
            "email": "acfoltzer@fastly.com",
            "name": "Adam C. Foltzer",
            "username": "acfoltzer"
          },
          "committer": {
            "email": "acfoltzer@fastly.com",
            "name": "Adam C. Foltzer",
            "username": "acfoltzer"
          },
          "distinct": true,
          "id": "ccaeb4854fc933f64177c5591412f9bd893af50a",
          "message": "feat(error): #2462 predicates for too-large and status parse errors\n\nThe discussion in #2462 opened up some larger questions about more comprehensive approaches to the\nerror API, with the agreement that additional methods would be desirable in the short term. These\nmethods address an immediate need of our customers, so I would like to get them in first before we\nflesh out a future solution.\n\nOne potentially controversial choice here is to still return `true` from `is_parse_error()` for\nthese variants. I hope the naming of the methods make it clear that the new predicates are\nrefinements of the existing one, but I didn't want to change the behavior of `is_parse_error()`\nwhich would require a major version bump.",
          "timestamp": "2021-05-06T10:14:52-07:00",
          "tree_id": "a64db4ee4627f031f1a961ce368b46b3585210a3",
          "url": "https://github.com/acfoltzer/hyper/commit/ccaeb4854fc933f64177c5591412f9bd893af50a"
        },
        "date": 1620321622393,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70049,
            "range": "± 8727",
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
      },
      {
        "commit": {
          "author": {
            "email": "acfoltzer@fastly.com",
            "name": "Adam C. Foltzer",
            "username": "acfoltzer"
          },
          "committer": {
            "email": "acfoltzer@fastly.com",
            "name": "Adam C. Foltzer",
            "username": "acfoltzer"
          },
          "distinct": true,
          "id": "ccaeb4854fc933f64177c5591412f9bd893af50a",
          "message": "feat(error): #2462 predicates for too-large and status parse errors\n\nThe discussion in #2462 opened up some larger questions about more comprehensive approaches to the\nerror API, with the agreement that additional methods would be desirable in the short term. These\nmethods address an immediate need of our customers, so I would like to get them in first before we\nflesh out a future solution.\n\nOne potentially controversial choice here is to still return `true` from `is_parse_error()` for\nthese variants. I hope the naming of the methods make it clear that the new predicates are\nrefinements of the existing one, but I didn't want to change the behavior of `is_parse_error()`\nwhich would require a major version bump.",
          "timestamp": "2021-05-06T10:14:52-07:00",
          "tree_id": "a64db4ee4627f031f1a961ce368b46b3585210a3",
          "url": "https://github.com/acfoltzer/hyper/commit/ccaeb4854fc933f64177c5591412f9bd893af50a"
        },
        "date": 1620321610418,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59014,
            "range": "± 8670",
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