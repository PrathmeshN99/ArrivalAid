import React from 'react'
import * as xlsx from 'xlsx'
import { useNavigate} from 'react-router-dom';

export default function Excel() {
    
        const readExcel=async(e)=>{
        const file=e.target.files[0];
        const data= await  file.arrayBuffer(file);
        const excelfile=xlsx.read(data);
        const excelSheet=excelfile.Sheets[excelfile.SheetNames[0]];
        const exceljson=xlsx.utils.sheet_to_json(excelSheet)
        console.log(exceljson);

        }

        const navigate=useNavigate();

        function handleClick()
        {
            navigate('/')
               
        }
    
  return (
    <div>
     <p>Upload the excel File</p>
     <input type='file' onChange={(e) =>readExcel(e)}></input>
     <input type='submit' value='Submit' onClick={() =>handleClick()}/>
    </div>
  )
}
