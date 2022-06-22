import React from 'react'

export const useKeyPress = (keyTarget: string): boolean => {
    const [isKeyPressed, setIsKeyPressed] = React.useState<boolean>(false)

    const downHandler = (e: { key: string }): void => {
        if (e.key === keyTarget)
            setIsKeyPressed(true)
    }

    const upHandler = (e: { key: string }): void => {
        if (e.key === keyTarget)
            setIsKeyPressed(false)
    }

    React.useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)

        return () => {
            window.addEventListener('keydown', downHandler)
            window.addEventListener('keyup', upHandler)
        }

    }, [])

    return isKeyPressed
}
