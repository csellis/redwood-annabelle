import BlogLayout from 'src/layouts/BlogLayout'
import PrizeCell from 'src/components/PrizeCell'

const PrizePage = ({ id }) => {
  return (
    <BlogLayout>
      <PrizeCell id={id} />
    </BlogLayout>
  )
}

export default PrizePage
