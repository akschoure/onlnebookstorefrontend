import {React , useEffect , useState}  from 'react';
export const Category = () => {

   const[category , setCategory ] = useState({});

    useEffect(
        () => {
            const fetchCategory = async() => {
                const response = await fetch ('http://localhost:7070/books?categoryIds=1,2');
                const data = await response.json();
                setCategory(data);
              
   };

    fetchCategory();

        }, []
    );

        return (
            <div className="Category">
            <h1>{category.categoryname}</h1>
           
                
 </div>
        
        );
    
}
