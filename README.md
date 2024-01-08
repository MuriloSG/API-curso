# API rest

## Dependências de desenvolvimento
1. **"@types/bcryptjs"**: "^2.4.4"
2. **"@types/cors"**: "^2.8.14"
3. **"@types/express"**: "^4.17.17"
4. **"@types/joi"**: "^17.2.3"
5. **"@types/jsonwebtoken"**: "^9.0.3"
6. **"@types/multer"**: "^1.4.7"
7. **"@types/node"**: "^20.6.0"
8. **"@types/swagger-ui-express"**: "^4.1.3"
9. **"@types/uuid"**: "^9.0.3"
10. **"@typescript-eslint/eslint-plugin"**: "^6.6.0"
11. **"@typescript-eslint/parser"**: "^6.6.0"
12. **"eslint"**: "^8.49.0"
13. **"eslint-config-prettier"**: "^9.0.0"
14. **"eslint-plugin-prettier"**: "^5.0.0"
15. **"eslint-plugin-react"**: "^7.33.2"
16. **"prettier"**: "^3.0.3"
17. **"ts-node-dev"**: "^2.0.0"
18. **"tsconfig-paths"**: "^4.2.0"
19. **"typescript"**: "^5.2.2"

## Dependências
1. **"bcryptjs"**: "^2.4.3"
2. **"celebrate"**: "^15.0.1"
3. **"class-transformer"**: "^0.5.1"
4. **"cors"**: "^2.8.5"
5. **"dotenv"**: "^16.3.1"
6. **"express"**: "^4.18.2"
7. **"express-async-errors"**: "^3.1.1"
8. **"jsonwebtoken"**: "^9.0.2"
9. **"multer"**: "^1.4.5-lts.1"
10. **"reflect-metadata"**: "^0.1.13"
11. **"rimraf"**: "^5.0.1"
12. **"sqlite3"**: "^5.1.6"
13. **"swagger-ui-express"**: "^5.0.0"
14. **"tsyringe"**: "^4.8.0"
15. **"typeorm"**: "^0.3.17"
16. **"uuid"**: "^9.0.0"

## Entidade Users
|   Atributo   |       Tipo            |
|--------------|-----------------------|
| id (uuid)    | string                |
| name         | string                |
| email        | string                |
| password     | string                |
| isAdmin      | boolean               |
| avatar       | string                |
| role         | Role                  |
| created_at   | Date                  |
| avatar_url   | string                |

### Casos de uso
**createAccessAndRefreshToken**: Gera tokens de acesso e atualização para autenticação do usuário.

**createLogin**: Autentica o usuário e retorna informações relevantes, incluindo tokens de acesso e atualização.

**createUser**: Cria um novo usuário com base nas informações fornecidas.

**listUsers**: Retorna uma lista de todos os usuários cadastrados.

**showProfile**: Retorna as informações do perfil do usuário.

**updateAvatar**: Atualiza a imagem do avatar do usuário.

**updateProfile**: Atualiza as informações do perfil do usuário.

## Entidade Roles
| Atributo     | Tipo                  |
|--------------|-----------------------|
| id (uuid)    | string                |
| name         | string                |
| created_at   | Date                  |