# Clean architecture template

This is a template for a clean architecture project in NodeJS.

### Template structure

```
├── package.json
├── src
│   ├── app
│   │   ├── users
│   │   │   ├── user.controller.ts
│   │   │   ├── user.dao.ts
│   │   │   ├── user.repository.impl.ts
│   │   │   ├── user.repository.ts
│   │   │   └── user.routes.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   ├── shared
│   │   ├── classes
│   │   │   └── user.class.ts
│   │   ├── connections
│   │   │   └── aws
│   │   │   │   └── s3.aws.ts
│   │   │   └── database
│   │   │   │   └── mongo.ts
│   │   ├── errors
│   │   │   └── error.extension.ts
│   │   ├── middlewares
│   │   │   └── auth.extension.ts
│   │   ├── models
│   │   │   └── user.model.ts
│   │   ├── utils
│   │   │   └── random-string-generator.util.ts
├── .gitignore
├── globals.ts
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
```
