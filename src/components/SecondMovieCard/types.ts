export type SecondCardProps = {
    title: string
    releaseDate: string
    posterPath: string
    id: number
    handleAddToFavorite: (id: number) => void
    isFavorite: boolean
}