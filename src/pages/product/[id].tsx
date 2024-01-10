import { useRouter } from 'next/router'
import React from 'react'
import { api } from '~/utils/api'

const SingleProduct = () => {
    const router = useRouter()
    const id = router.query.id
    const {data:singleProductData} = api.product.getProductById.useQuery({
        id:id as string
      })
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct