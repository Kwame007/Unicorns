import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isAnonTrue, setAlias,  setGradYear } from '../features/review/reviewSlice'

const Step3 = () => {

    const userData = useSelector( state => state.review )
    const dispatch = useDispatch()
    const [years, setYears] = React.useState([])
    const [isAnon, setIsAnon] = React.useState(false)
    const aliasRef = React.useRef(null)
    const [aliasInput, setAliasInput] = useState(null)

    React.useEffect( () => {
    function yearArr() {
        const date = new Date()
        const y = []
        for(let i = 1850; i <= date.getFullYear(); i++){
            y.push(i)
        }
        return y;
    };
        setYears(yearArr())
    }, [])

    return(
        <>
            <div className="max-w-4xl space-y-12 my-12 mx-auto">

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
                    <h2 className="max-w-xl text-2xl font-semibold text-black text-left">Which year did you <span className="text-indigo-500">graduate</span>?<span className="text-sm font-normal text-slate-500 mx-0 block sm:mx-2  sm:inline-block">(Your alumni year group)</span></h2> 
                    <select className="w-40 focus:border-1 focus:ring-2 focus:ring-indigo-200 focus:outline-indigo-500 text-xl font-black text-black md:ml-5 md:text-right" value={userData.gradYear} onChange={ e => { dispatch(setGradYear(e.target.value))  }}>
                        <option className="">YYYY</option>
                        { years.map( (i, index) => (
                            <option key={index} value={i}>{i}</option>
                        )) }
                    </select>
                </div>
                <div className="flex items-center md:justify-between ">
                    <h2 className="max-w-xl text-2xl font-semibold text-black text-left">Do you want your review to be <span className="text-indigo-500">anonymous</span>?</h2>
                    <input type="checkbox" className="w-9 h-9 ml-5 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200 accent-indigo-500" value={userData.isAnon} onClick={() => { setIsAnon(!isAnon); dispatch(isAnonTrue())  }}/>
                </div>
                <div className={isAnon?`hidden`:`flex flex-col space-y-6`}>
                    <h2 className="max-w-xl text-2xl font-semibold text-black text-left">What was your <span className="text-indigo-500">alias</span>?<span className="mx-0 text-sm font-normal text-slate-500 block sm:mx-2 sm:inline-block">(What your mates know you as)</span></h2>
                    <input className="w-full px-5 py-2 text-xl border-2 border-black placeholder:text-slate-500 placeholder:text-xl placeholder:font-semibold md:w-10/12 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="e.g Topaz" onChange={ (e) => { setAliasInput(e.target.value); (dispatch(setAlias(aliasInput)))} } ref={aliasRef}/>
                </div>

            </div>
        </>
    )
}

export default Step3;
