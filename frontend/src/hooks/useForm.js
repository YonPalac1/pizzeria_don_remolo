import { useState } from 'react'

function useForm(initialState = {}) {

    const [state, setState] = useState(initialState);

    const reset = () => {
        setState(initialState)
    }

    const handleInputChange = ({ target }) => {

        setState({
            ...state,
            [target.name]: target.value,
        })
    }

    return [state, handleInputChange, reset]
}

export default useForm
