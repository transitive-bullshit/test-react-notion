import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import { NotionRenderer, BlockMapType } from 'react-notion'

export const getStaticProps = async (context) => {
  const pageId = context.params?.pageId

  if (!pageId) {
    return
  }

  console.log(pageId)
  const blockMap: BlockMapType = await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`
  ).then((res) => res.json())

  console.log(blockMap)

  return {
    props: {
      pageId,
      blockMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  // how to do this with react-notion?

  return {
    paths: [],
    fallback: true
  }
}

export default function NotionPage({ blockMap }) {
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    )
  }

  const title = blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0]

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NotionRenderer
        blockMap={blockMap}
        fullPage
        // customBlockComponents={{
        //   page: ({ blockValue, renderComponent }) => (
        //     <Link href={`/${blockValue.id}`}>{renderComponent()}</Link>
        //   )
        // }}
      />

      <style jsx global>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
