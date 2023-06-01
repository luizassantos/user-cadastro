import './styles/Steps.css'

import { AiOutlineUser } from 'react-icons/ai'

const Steps = ({currentStep}) => {
    return (
        <div className='steps'>
            <div className='step active'>
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className='step active'>
                
                <p>Endereço</p>
            </div>
        </div>
    )
}
export default Steps;