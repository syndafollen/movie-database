import { ReactElement } from 'react'

export type MaybeProps = {
    when: boolean
    children: ReactElement
    fallback?: ReactElement
}