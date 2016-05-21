# Swagger api boilerplate
This is an example repository with easilly editable and browsable swagger api
documentation based on a real life application for personal tasks management.


## Installation and first steps
1. Install needed dependencies:
 - npm
 - git
2. Clone this repository and run:
```
./install.sh
```

## Run
To run swagger-ui server, yaml server and open swagger-ui in browser simply run:
```
./run.sh
```

## Features included
- Swagger-ui (http://swagger.io/swagger-ui/)
- JSON Reference (https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)
  - with json-refs (https://github.com/whitlockjc/json-refs)

## Directories structure
Remember that only directory which content should be edited is `spec`
- `info`
  - Common information about documented project
- `definitions`
  - All needed data structures
- `paths`
  - All endpoints described in documentation

## Todo
- Authentication
- Nested namespaces
- Hypermedia
- HATEOAS
