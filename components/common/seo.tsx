import Head from 'next/head'
import * as React from 'react'
export interface SeoData {
  title: string
  description: string
  url: string
  thumbnailUrl: string
}

export interface SeoProps {
  data: SeoData
}

export function Seo({ data }: SeoProps) {
  const { title, description, url, thumbnailUrl } = data
  return (
    <Head>
      <title>Minh Phúc Blog: Trang chủ</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Minh Phúc Blog: Trang chủ" />
      <meta
        property="og:description"
        content="Nơi kiến thức Frontend được chia sẻ một cách đơn giản, dễ hiểu và đặc biệt là vui.
Bạn đã truy cập trang này 2 lần"
      />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="Minh Phúc Blog: Trang chủ" />
      <meta
        property="twitter:description"
        content="Nơi kiến thức Frontend được chia sẻ một cách đơn giản, dễ hiểu và đặc biệt là vui.
Bạn đã truy cập trang này 2 lần"
      />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  )
}
