import React from 'react'
import { useState } from 'react'

export const useProActions = (deletePro) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (proId, imageUrl) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return { cancelled: true }
    }
    
    setIsDeleting(true)
    const result = await deletePro(proId, imageUrl)
    setIsDeleting(false)
    
    return result
  }

  return {
    isDeleting,
    handleDelete
  }
}