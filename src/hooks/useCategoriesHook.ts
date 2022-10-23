import { useState, useEffect } from 'react'

import { ICategory } from '../constants'

import categoriesJson from '../data/categories-filters.json'

const useCategoriesHook = () => {
  const [categories, setCategories] = useState<Array<ICategory>>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    setCategories(categoriesJson.categories)
  }, [])

  return {
    categories,
    setSelectedCategory,
    selectedCategory
  }
}

export {
  useCategoriesHook
}
