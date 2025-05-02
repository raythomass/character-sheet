import { useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSheetContext } from "../hooks/useSheetContext"
import { useGetSingleCharacter } from '../hooks/useGetSingleCharacter'

export const CharacterSheet = () => {
    const { id } = useParams()
    const { currentSheet } = useSheetContext()
    const { user } = useAuthContext()

    useGetSingleCharacter(id)

    if (!currentSheet) {
        return <h5 className="mt-16 text-center">You do not have access to this character</h5>
      }

    return (
        <div className="character-sheet">
            <h1>Character Sheet Page</h1>
            <p>{currentSheet.character_name}</p>
        </div>
    )
}