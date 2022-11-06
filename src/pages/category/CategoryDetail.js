import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi'

const CategoryDetail = (props) => {
  console.log('detailprops', props)
  const params = useParams()
  console.log('params', params)
  const api = useApi()

  const [categoryDetail, setCategoryDetail] = useState(null)

  useEffect(() => {
    const queryData = {}
    queryData['productTaxons.taxon.code'] = params.categoryCode

    //api.get("shop/products?productTaxons.taxon.code="+params.categoryCode)

    api
      .get(`shop/products`, { params: queryData })
      .then((response) => {
        console.log('categorydetailRESPONSE', response)
      })
      .catch((err) => {
        console.log('categorydetailERR', err)
      })
  }, [])

  return <div>CATEGORY DETAİL</div>
}

export default CategoryDetail
