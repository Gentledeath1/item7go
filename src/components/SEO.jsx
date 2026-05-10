import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://item7go-rho.vercel.app'
const SITE_NAME = 'Item 7 Go'
const DEFAULT_IMAGE = `${SITE_URL}/images/logo.jpg`

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
}) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Fast Casual Dining on Iwo Road, Ibadan`

  const fullCanonical = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}