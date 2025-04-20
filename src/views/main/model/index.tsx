
export const SearchResult = (datas, searchQuery) => {
  const results = datas?.pages[0].filter((img) =>
    img.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.alt_description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return results
}
