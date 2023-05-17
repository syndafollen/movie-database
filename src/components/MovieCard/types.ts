export type CardProps = {
    title: string
    description: string
    releaseDate: string
    posterPath: string
    id: number
    handleAddToFavorite: (id: number) => void
    isFavorite: boolean
}