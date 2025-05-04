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
            <h3 className="text-center">{currentSheet.character_name}</h3>
            <div className="character-sheets-stats flex justify-around mt-4 ml-14 mr-14">
                <div className="flex flex-col text-center">
                    <small>Strength</small>
                    <h2>{currentSheet.stats.strength}</h2>
                </div>
                <div className="flex flex-col text-center">
                    <small>Dexterity</small>
                    <h2>{currentSheet.stats.dexterity}</h2>
                </div>
                <div className="flex flex-col text-center">
                    <small>Constitution</small>
                    <h2>{currentSheet.stats.constitution}</h2>
                </div>
                <div className="flex flex-col text-center">
                    <small>Intelligence</small>
                    <h2>{currentSheet.stats.intelligence}</h2>
                </div>
                <div className="flex flex-col text-center">
                    <small>Wisdom</small>
                    <h2>{currentSheet.stats.wisdom}</h2>
                </div>
                <div className="flex flex-col text-center">
                    <small>Charisma</small>
                    <h2>{currentSheet.stats.charisma}</h2>
                </div>
            </div>
        </div>
    )
}