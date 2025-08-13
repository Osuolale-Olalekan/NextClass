const Image = async ({
  params,
}: {
  params: Promise<{ id: string; image: string }>
}) => {
  const { id, image } = await params
  return (
    <div>
      Image {id} {image}
    </div>
  )
}

export default Image
