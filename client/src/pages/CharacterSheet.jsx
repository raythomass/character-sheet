import { useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSheetContext } from "../hooks/useSheetContext"
import { useGetSingleCharacter } from '../hooks/useGetSingleCharacter'

export const CharacterSheet = () => {
    const { id } = useParams()
    const { currentSheet } = useSheetContext()
    const { user } = useAuthContext()

    const { loading, error } = useGetSingleCharacter(id);

  if (loading) {
    return <h5 className="mt-16 text-center">Loading character sheet...</h5>;
  }

  if (error) {
    return <h5 className="mt-16 text-center text-red-500">{error}</h5>;
  }

  if (!user) {
    return <h5 className="mt-16 text-center">You do not have access to this character.</h5>;
  }

  const getModifier = (score) => Math.floor((score - 10) / 2);

    return (
        <div className="character-sheet">
            <div className="character-titles flex flex-col mt-6">
                <h3 className="">{currentSheet.character_name}</h3>
                <div className="flex gap-6">
                    <small>{currentSheet.species}</small>
                    {currentSheet.class && currentSheet.class.map((classes) => (
                            <small>{classes.class_name} {classes.level}</small>
                    ))}
                </div>
            </div>
            <div className="character-sheets-stats flex justify-between mt-4">
                <div className="stats flex flex-col justify-center items-center">
                    <small>Strength</small>
                    <h2>{getModifier(currentSheet.stats.strength)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.strength}</p>
                    </div>
                </div>
                <div className="stats flex flex-col justify-center items-center">
                    <small>Dexterity</small>
                    <h2>{getModifier(currentSheet.stats.dexterity)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.dexterity}</p>
                    </div>
                </div>
                <div className="stats flex flex-col justify-center items-center">
                    <small>Constitution</small>
                    <h2>{getModifier(currentSheet.stats.constitution)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.constitution}</p>
                    </div>
                </div>
                <div className="stats flex flex-col justify-center items-center">
                    <small>Intelligence</small>
                    <h2>{getModifier(currentSheet.stats.intelligence)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.intelligence}</p>
                    </div>
                </div>
                <div className="stats flex flex-col justify-center items-center">
                    <small>Wisdom</small>
                    <h2>{getModifier(currentSheet.stats.wisdom)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.wisdom}</p>
                    </div>
                </div>
                <div className="stats flex flex-col justify-center items-center">
                    <small>Charisma</small>
                    <h2>{getModifier(currentSheet.stats.charisma)}</h2>
                    <div className="stat-div">
                        <p>{currentSheet.stats.charisma}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}