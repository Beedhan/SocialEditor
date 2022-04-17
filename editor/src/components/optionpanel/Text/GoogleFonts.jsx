import { Select } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GoogleFonts = ({ target }) => {

    const [fontLists, setFontLists] = useState([]);

    useEffect(() => {
        fetchFonts()
    }, [])

    const fetchFonts = async () => {
        const apiKey = process.env.REACT_APP_GOOGLE_KEY
        const fontList = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${apiKey}`)
        setFontLists(fontList.data.items)
    }

    const selectData = () => {
        if (fontLists.length <= 0) { return [] }
        const data = fontLists.map(font => {
            return { value: font.family, label: font.family }
        })
        return data;
    }

    const handleFontChange = (e) => {
        window.WebFont.load({
            google: {
                families: [e]
            }
        });
        target.style.fontFamily = e;
    }
    return (
        <>
            {setFontLists.length >= 0 && (
                <>
                    <Select
                        label=""
                        className='w-full'
                        placeholder={target.style.fontFamily.replaceAll('"', "")}
                        onChange={handleFontChange}
                        searchable
                        data={selectData()}
                    />
                </>
            )}
        </>

    )
}

export default GoogleFonts