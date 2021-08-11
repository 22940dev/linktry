import { useCallback, useEffect, useState } from 'react'

export const useAvatar = ({
  avatarUrl,
  defaultImg = 'https://res.cloudinary.com/ddb4kkgtw/image/upload/v1628707063/drawkidglasses.png'
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isErrorAvatarUrl, setIsErrorAvatarUrl] = useState(false)
  const [avatarFetched, setAvatarFetched] = useState('')

  const fetchingAvatar = useCallback(() => {
    const throwError = () => {
      setIsErrorAvatarUrl(true)
      setIsLoading(false)
      setAvatarFetched(defaultImg)
    }

    if (avatarUrl === undefined || avatarUrl === null) {
      throwError()
    } else {
      setIsLoading(false)
      setIsErrorAvatarUrl(false)
      setAvatarFetched(avatarUrl)
    }
  })

  useEffect(() => {
    fetchingAvatar()
  }, [])

  return {
    isLoading,
    isErrorAvatarUrl,
    avatarFetched
  }
}
