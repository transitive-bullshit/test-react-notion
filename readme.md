# React Notion vs React Notion X Comparison

> Bare-bones comparison of [react-notion](https://github.com/splitbee/react-notion) and [react-notion-x](https://github.com/NotionX/react-notion-x)

## React Notion

<a href="https://test-react-notion.vercel.app">
  <p align="center">
    <img alt="React Notion" src="https://raw.githubusercontent.com/transitive-bullshit/test-react-notion/master/media/nextjs-example-react-notion-bare-bones.png">
  </p>
</a>

## React Notion X

<a href="https://test-react-notion-x.vercel.app">
  <p align="center">
    <img alt="React Notion X" src="https://raw.githubusercontent.com/transitive-bullshit/test-react-notion/master/media/nextjs-example-react-notion-x-bare-bones.png">
  </p>
</a>

## Comparison

| Library                                                     | Demo                                           | Page Bundle Size | Page First Load JS | Shared First Load JS |
| ----------------------------------------------------------- | ---------------------------------------------- | ---------------- | ------------------ | -------------------- |
| [React Notion](https://github.com/splitbee/react-notion)    | [demo](https://test-react-notion.vercel.app)   | 16.3 KB          | 79 KB              | 62.7 KB              |
| [React Notion X](https://github.com/NotionX/react-notion-x) | [demo](https://test-react-notion-x.vercel.app) | 27.9 KB          | 90.6 KB            | 62.8 KB              |

## Observations

- Bare-bones `react-notion-x` is ~10-20 KB larger than `react-notion` but has support for all primitive blocks and opt-in support for all complex blocks.
- This is without spending any time or effort on optimizing `react-notion-x`. I'm sure we could get this down even more if the two projects worked together.
- About half of the demo pages in the [react-notion demo]() that use primitive blocks are buggy or have styling issues. They render correctly across the board with `react-notion-x`.
- `react-notion-x` supports easy opt-in to all of the more complex blocks (collections, equations, different embeds, etc).
- For this apples to apples comparison, `react-notion-x` shows how easy it is to use `getAllPagesInSpace` to pre-fetch all of the Notion pages and serve them via SSG.
  - Note that this takes a bit longer to build and is completely optional, but I think it's what 99% of people want in practice.
  - Note that `react-notion` uses SSR in their original demo because SSG is harder to make work when you don't have `getAllPagesInSpace` ahead of time. I chose to have both demos use SSG so their bundle sizes would be directly comparable, so that's why you may see a quick loading indicator on the `react-notion` demo.
  - Note that the default `react-notion` example which integrates with `next/link` didn't actually work for me, as it threw an obscure React bug, so I removed the component overrides for the purposes of this comparison.
- => **The two projects could absolutely accomplish the same goals of being both lightweight, robust, and extensive**.

## Misc Considerations

- `react-notion-x` is sponsored by [super.so](https://s.super.so/x) and is actively maintained.
- [nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) builds on top of `react-notion-x` to provide imho a best-in-class solution for free Notion-powered website hosting using Next.js and Vercel

## Why?

I put this quick comprison together, because I would really love for the two projects to **work together**, as I believe it's in the best interests of the React community and the spirit of open source overall.

Hopefully, this apples to apples comparison of the two projects will help make this goal a reality.

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

This project extends MIT-licensed work by [Timo Lins](https://twitter.com/timolins), [Tobias Lins](https://twitter.com/linstobias), [Sam Wight](https://samw.dev), and other contributors.

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
