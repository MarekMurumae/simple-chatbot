Antud projekti raames on tehtud kerge vestlusrobot kasutades openai apit.

## Koodi struktuur
Tegemist on [Next.js](https://nextjs.org) Typescript rakendusega, mis kasutab Reacti hook'e. Fail Layout.tsx määrab rakenduse peamised paigutuse ja metaandmed ja kasutab Next.js'i, et määrata globaalsed fondid. Rakenduses on kasutusel üks CSS fail (global.css), kuid kasutab enamasti TailwindCSSi stiili määramiseks. Valisin TailwindCSS, sest seda on kerge kasutada. Rakenduse koodi loetavuse nimel on jagatud kood komponentideks, kasutatud index.ts faile import statementide lühendamiseks, kerimise funktsionaalsus teostatud läbi CSS'i ning kasutusel public kaust faviconi ja muude rakenduse tulevikus vajalike resource'ide hoidmiseks.

## Kasutaja sõbralikkus

Kasutaja sõbralikkuse nimel on rakendusesse lisatud vastavalt kuva suurusele muutuvad komponentid, automaatne ekraani kerimine ja nii päeva kui öö versioon. Ka värviskeemiks on valitud kasutaja jaoks võimalikult silmale kerge skeem. Lisaks on rakenduse osapoolte sõnumite pooled valitud sarnaselt teistele populaarsetele rakendustele.

## Automaatne testimine

Hetkel rakenduses puuduvad autommaat testid, tulevikus võiks lisada rakendusele [Jest](https://jestjs.io/docs/getting-started) testid. Testida võiks näiteks ChatMessage ja ThemeToggle komponentide renderdamist ja funktsionaalsust. Lisaks võiks testida ka openai api post requesti.

## Võimalikud ohud ja turvalisus
Rakenduse peamiseks ohuks on bottimine ja suur (suurem kui open ai praegune key lubab) kasutajate läbi käik. Kuigi Verceli tulemüür juba kaitseb mingil määral rünnakute eest on vähendamiseks võimalik sisse lülitada ka Verceli Attack Challenge Mode. Lisaks võib tulevikus lisada rakendusele kasutajate süsteemi, et vähendada massilisi bottimise rünnakuid. 

Ohuks on ka rakenduse api võti, kuid see on juba Verceli poolt kaitstud. Lisaks ei ole võti kätte saadav siit repositooriumist.

## Live

App is live at: https://simple-chatbot-liard.vercel.app/

## Running development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the project files.

## About project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
