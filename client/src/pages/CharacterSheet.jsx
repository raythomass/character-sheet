import { useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSheetContext } from "../hooks/useSheetContext"
import { useGetSingleCharacter } from '../hooks/useGetSingleCharacter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons'

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
            <div className="character-titles flex justify-between mt-6">
                <div className="character-ac-div flex flex-col items-center">
                    <small>Armor Class</small>
                    <h2>{currentSheet.armor_class}</h2>
                </div>
                <div className="character-name-div flex flex-col items-center">
                    <div className="character-name">
                        <h2>{currentSheet.character_name}</h2>
                    </div>
                    <div className="character-classes">
                        {currentSheet.class && currentSheet.class.map((classes) => (
                            <small>{classes.class_name} ({classes.subclass}) {classes.level} </small>
                        ))}
                    </div>
                </div>
                <div className="character-health-div flex flex-col items-center">
                    <small className="">Health</small>
                    <div className="flex gap-4">
                        <h4 className="character-temp-health text-zinc-400">{currentSheet.health.temp}</h4>
                        <h4 className>{currentSheet.health.current} / {currentSheet.health.max}</h4>
                    </div>
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