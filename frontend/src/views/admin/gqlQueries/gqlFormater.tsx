import React from "react";



type SetItemProps = {
    countryCode: string
    countryName: string
    
}

export default function GQLFormater({countryCode, countryName}:any) {
return (
<>
<p> {countryCode} : {countryName} </p>
<p> {countryName} </p>
</>

)
}