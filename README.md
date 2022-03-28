# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare

### installation

```node
npx create-next-app@latest --typescript
npm i next@latest react@rc react-dom@rc
npm i -D tailwindcss postcss autoprefixer
npm i @tailwindcss/forms
npm i prisma -D

npm i @prisma/client
클라이언트 최초 1회 생성(do not install for devDependency, it's working at server side)
npx prisma generate

If you use react ^18.0.0-rc.0 version, can see the messege "unable to resolve dependency"
Add "--legacy-peer-deps" at the end of command line.
npm i react-hook-form --legacy-peer-deps
```

## step to run project

```node
step1. open up 3 command pannel
step2. use one for database first. $pscale connect carrot-market
step3. you can see port already in use, then copy the port number which is changed.
step4. .env paste your changed port.
step5. use other pannel for prisma studio. $npx prisma studio, it is loaded from .env.
step6. finally, use the last pannel for run the project. $npm run dev.
```

## scoop for planetScale install

```node
window power shell 에서 실행
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
scoop install curl
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale

pscale auth login -> then, open browser -> confirm
pscale region list -> check SLUG (ex)ap-southeast
pscale database create <database> --region <region>
pscale connect <database> and keep open terminal while in use
complete .env file to set DATABASE_URL="mysql:<connected url>/<database>"

two option add to schema.prisma
client : previewFeatures = ["referentialIntegrity"]
db : previewFeatures = "prisma"

npx prisma db push
go to and check https://app.planetscale.com/<yourid>/<database>/main/schema

option - sql DB/query 확인 용
환경변수(window+r 커맨드 :sysdm.cpl ,3)에 C:\Program Files\MySQL\MySQL Server 8.0\bin 추가
pscale shell carrot-market main
npx prisma studio


```

## references

```node
https://heroicons.dev/
npx prisma init
https://docs.planetscale.com/concepts/planetscale-environment-setup
https://react-hook-form.com/api
```
