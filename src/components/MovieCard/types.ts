export type CardProps = {
    title: string
    releaseDate: string
    posterPath: string
    id: number
    handleAddToFavorite: (id: number) => void
    isFavorite: boolean
    description: string
}