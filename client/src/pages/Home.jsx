import { useAuthContext } from '../hooks/useAuthContext'
import { useSheetContext } from '../hooks/useSheetContext'
import { useGetAllCharacters } from '../hooks/useGetAllCharacters'
import { SheetCard } from '../components/SheetCard'

export const Home = () => {
    const { user } = useAuthContext()
    const { sheets } = useSheetContext()
    useGetAllCharacters()
    
    return(

        <div className='home'>
            <h1>My Characters</h1>
            <div className='home-card-container flex flex-wrap gap-10'>
            {sheets && sheets.map((sheet) => (
                <SheetCard key={sheet._id} sheet={sheet}/>
            ))}
            </div>
        </div>
    )
}