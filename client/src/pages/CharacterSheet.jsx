import { useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSheetContext } from "../hooks/useSheetContext"
import { useGetSingleCharacter } from '../hooks/useGetSingleCharacter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import Stats from "../components/Stats"
import ArmorClass from "../components/ArmorClass"
import CharacterDetails from "../components/CharacterDetails"
import Health from "../components/Health"
import Skills from "../components/Skills"
import SavingThrows from "../components/SavingThrows"
import Senses from "../components/Senses"
import ExtraDetails from "../components/ExtraDetails"

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

  const getModifier = (score) => Math.floor((score - 10) / 2)

    return (
        <div className="character-sheet">
            <div className="character-titles flex justify-between mt-6 items-center border-2 border-amber-950">
                <ArmorClass ac={currentSheet.armor_class}/>
                <CharacterDetails 
                    name = {currentSheet.character_name}
                    characterClass = {currentSheet.class}
                    species = {currentSheet.species}
                />
                <Health health = {currentSheet.health}/>
            </div>
            <div className="extra-details-container border-2 border-amber-950">
              <ExtraDetails 
                proficiencyBonus = {currentSheet.proficiency_bonus}
                initiative = {currentSheet.initiative}
                walkingSpeed = {currentSheet.walking_speed}
                inspiration = {currentSheet.inspiration}
              />
            </div>
            <Stats stats = {currentSheet.stats}/>
            <div className="saving-sense-extra border-2 border-amber-950">
              <SavingThrows savingThrows = {currentSheet.saving_throws}/>
              <Senses senses = {currentSheet.senses}/>
              {/* <ExtraDetails 
                proficiencyBonus = {currentSheet.proficiency_bonus}
                initiative = {currentSheet.initiative}
                walkingSpeed = {currentSheet.walking_speed}
                inspiration = {currentSheet.inspiration}
              /> */}
            </div>
            <Skills 
                characterId = {currentSheet._id}
                skills = {currentSheet.skills}
                stats = {currentSheet.stats}
                proficiencyBonus = {currentSheet.proficiency_bonus}
            />
        </div>
    )
}