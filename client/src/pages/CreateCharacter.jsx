import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSheetContext } from "../hooks/useSheetContext";
import toast from "react-hot-toast";

export const CreateCharacter = () => {
    const { user } = useAuthContext()
    const { dispatch } = useSheetContext()
    const navigate = useNavigate()

    const [character_name, setCharacterName] = useState("")
    const [species, setSpecies] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [level, setLevel] = useState(1)
    const [stats, setStats] = useState({
        strength: 10, 
        dexterity: 10,
        constitution: 10,
        wisdom: 10,
        intelligence: 10,
        charisma: 10
    })

}