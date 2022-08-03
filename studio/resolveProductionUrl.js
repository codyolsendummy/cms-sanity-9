const productionUrl = new URL(
  process.env.SANITY_STUDIO_PRODUCTION_URL || 'http://localhost:3000'
)

export default function resolveProductionUrl(document) {
  if (!document.slug?.current) {
    return false
  }
  const searchParams = new URLSearchParams()
  searchParams.set('secret', process.env.SANITY_STUDIO_PREVIEW_SECRET || '')
  searchParams.set('slug', document.slug.current)
  return `${productionUrl.origin}/api/preview?${searchParams}`
}
