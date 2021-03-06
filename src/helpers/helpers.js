export function addImageToItems(data, items, type) {
  if (type === "fluid") {
    return items.map(item => {
      const image = data.allFile.edges.find(edge => {
        const imageSrc = edge.node.childImageSharp.fluid.src
        return imageSrc.includes(item.imagePath)
      })
      item.image = image
      return item
    })
  }
  return items.map(item => {
    const image = data.allFile.edges.find(edge => {
      const imageSrc = edge.node.childImageSharp.fixed.src
      return imageSrc.includes(item.imagePath)
    })
    item.image = image
    return item
  })
}
