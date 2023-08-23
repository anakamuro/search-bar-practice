import React, {useState} from 'react'


function Searchbar({products}) {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const filteredProducts = products.filter(product => {
        return product.includes(searchValue)
})
    const shouldDisplayButton = searchValue.length > 0;
  return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
       {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
       <ul>
       {filteredProducts.map(product => {
        return <li key={product}>{product}</li>
       })}
       </ul>
    </div>
  )
}

export default Searchbar