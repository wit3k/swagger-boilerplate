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
- `Spec` directory containing example specification

## Directories structure
Remember that only directory which content should be edited is `spec`
You can edit all yaml files and a given structure is only a proposition.
Most important files are:
- `index.yaml` your first step should be aditing this document
- `info.yaml` your second step, let the world know who is responsible
- `tags.yaml` the place to list all paths tags
- `paths.yaml` list all paths here. Putting every path pattern into separate file is highly suggested
- `definitions.yaml` list all definitions here. Putting every definition into separate file is highly suggested as well
- `Directories` - every directory defines a separate module for the system. Modules contain:
  - `paths`
    - yaml files with paths for the module. Every path pattern should end up in a new file
  - `definitions`
      - All needed data structures for the module

## Used conventions
- `patch` http actions follow RFC-6902 (http://tools.ietf.org/html/rfc6902)
  - aka `Please. Don't Patch Like An Idiot` (http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/)
    - ***TL;DR***
        - do **NOT** create new endpoint per edited field of resource
        - do **NOT** patch via sending partial object inside payload
        - do **NOT** patch via querry params
        - **DO patch** with "oplogish" array with list of atomic operations
        - plus my personal advice - DO patch with document version info to avoid unexpected overwrites 

## Todo
- Authentication
- API Testing
- Nested modules
- Hypermedia / HATEOAS
- API Versioning
