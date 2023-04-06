
import './flaglist.scss'


const FlagList = ({flatlist}) => {



    return (
        <div className=" container country-wrapper">
            {flatlist}
        </div>
    )
}

export default FlagList;