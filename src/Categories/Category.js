import {React , useEffect , useState}  from 'react';
const  Category = () => {

   const[category , setCategory ] = useState({});

    useEffect(
        () => {
            const fetchCategory = async() => {
                console.log("in category");
                const response = await fetch ('http://localhost:7070/books?categoryIds=1,2');
                console.log("in category");
                const data = await response.json();
                setCategory(data);
                console.log(data);

              
   };

    fetchCategory();

        }, []
    );

        return (
            <div className="Category">
            <h1>{category.categoryname}</h1>
           
                
 </div>
        
        );
 
};

export default Category;

