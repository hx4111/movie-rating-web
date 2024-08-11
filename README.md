# Movie-Rating Web 

This is a movie rating web applications create by Next.js 14 (app directory) and NextUI (v2).
![demo](https://reccloudsz.oss-cn-shenzhen.aliyuncs.com/tasks/output/media_conversion/2684f71e-8ea4-4206-b556-dd68c6dd13c6.gif?x-oss-credential=LTAI5tGjJnh66c1txANiRBQN/20240811/cn-shenzhen/oss/aliyun_v4_request&x-oss-date=20240811T040804Z&x-oss-expires=1800&x-oss-signature=b75f943b11ba40960077ca4e6d0751c26f8dbde3f445bc6197613a279fbd6692&x-oss-signature-version=OSS4-HMAC-SHA256)

## Backgroud

Movie rating web application, with homepage which show movie list, and detail page show movie detail.

## Design

1. Create by `npx create-next-app app` using nextui template
2. Structure:
    - app
        - detail/. // detail page
        - page.tsx // home page
    - components // components and client-side-render components
    - config // site configuration
    - interface // type defination
    - lib // server-side-render data
    - mocks // mock data generation
    - public // public static files
    - store // redux and reducer
    - styles // global css
3. Main functions:
    - Home page
        - home page can list all movies by SSR
        - home page can search movies by title input
        - route to movie detail page by click view button
    - Detail page
        - show movie detai infomation like Poster, rate, rate counts, director, stars, description and so on
        - can publish new comment and update comments list
        - can rating movie and update you rate on the page
4. Main technical:
    - nextjs and nextui create by template
    - SSR home page and detail page, with CSR dynamic component(search component, rating component)
    - mock data generate by faker.js
    - use redux to store rating data used by rating component

## How to Use

### Install dependencies

```bash
npm i
```

### Run on develop enverioment

```bash
npm run dev
```

Open browser on `http://localhost:3000`

## Other

The last time I used frontend technology was about five years ago. It took me about two days to build this demo web application, most time used on learning and debugging Next.js. 
There are quite a few differences compared to the time when I used to write frontend. The most significant change is that in Next.js <b>App Router mode, SSR is used by default</b>. This makes many design differences compared to the previous method of using Redux for frontend-backend separation. It's important to consider which content is suitable for SSR and which should only use CSR, as well as the relationship between dynamic subcomponents and top-level server-render components. This process has kept me interst on new technolegy and continuous learning.
