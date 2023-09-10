import React, {useEffect, useState} from 'react';

const TestGet = () => {
    const [test, setTest] = useState('')

    const getDatas = async () => {
        try {
            const response = await fetch('/test')
                .then(r => r.json())

            setTest(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => getDatas, []);

    return (
        <div>
            <p>{test}</p>
        </div>
    )
}

export default TestGet
