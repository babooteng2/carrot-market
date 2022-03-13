# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare

### installation

```node
npx create-next-app@latest --typescript
npm i next@latest react@rc react-dom@rc
npm i -D tailwindcss postcss autoprefixer
npm i @tailwindcss/forms
npm i prisma -D
```

## references

```node
https://heroicons.dev/
npx prisma init
https://docs.planetscale.com/concepts/planetscale-environment-setup
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
```
