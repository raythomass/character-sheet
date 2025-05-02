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
            <h1>Home Page</h1>
            {sheets && sheets.map((sheet) => (
                <div className='sheet-card-container mt-6'>
                    <SheetCard key={sheet._id} sheet={sheet}/>
                </div>
            ))}
        </div>
    )
}