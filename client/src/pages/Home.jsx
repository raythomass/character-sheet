import { useSheetContext } from '../hooks/useSheetContext'
import { useGetAllCharacters } from '../hooks/useGetAllCharacters'

export const Home = () => {
    const { sheets } = useSheetContext()
    useGetAllCharacters()
    
    return(
        <div className='home'>
            <h1>Home Page</h1>
            {sheets && sheets.map((sheet) => (
                <div key={sheet._id}>
                    <p>{sheet.character_name}</p>
                </div>
            ))}
        </div>
    )
}