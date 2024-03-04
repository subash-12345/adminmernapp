import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Last = () => {
  const [data, setData] = useState([]);
  const [maxCount, setMaxCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setData(response.data);
        findMaxCount(response.data); // Call function to find maximum count
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to find maximum count
  const findMaxCount = (data) => {
    if (data.length === 0) return; // If data is empty, return
    let max = data[0].count; // Assume first count as max
    for (let i = 1; i < data.length; i++) {
      if (data[i].count > max) {
        max = data[i].count; // Update max if current count is greater
      }
    }
    setMaxCount(max + 1); // Set the maximum count plus one state
  };

  return (
    <div>
      <div className='Pagecontent'>
	<table className="one" style={{marginLeft:"180px"}}> 
		<tr > 
			<th className='th'>Id </th> 
			<th className='th'>Title</th> 
			<th className='th'>Image</th> 
			<th className='th'>contend</th> 
			<th className='th'>logo</th> 
			<th className='th'>Review</th> 
			<th className='th'>Like</th> 
		</tr> 
		<tr> 
			<td className='td'>1</td> 
			<td className='td'>Lifestyle</td> 
			<td className='td'><img src="https://cdn.myhealthteams.com/graphic/624f0875d9e5c82370698a33/wquotes/MHT_DiabetesTeam_Article4_Carousel-ed78ed5eafedbd6441ab653583e9633c.webp?1678758980" className='C1' alt=""/></td> 
			<td className='td'>Life After 65 With Diabetes</td> 
			<td className='td'><img src="https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=1024x1024&w=is&k=20&c=vpQgpAb9OmQFkJYsCmhjlsiO6S68KUiBOukrhQKYwcg=" className="doctor" alt=''/></td> 
			<td className='td'>Medically reviewed by Robert Hurd, M.D.</td> 
			<td className='td'>{maxCount !== null && <p style={{color:"RED", fontWeight:"bold", fontSize:'20px',marginLeft:'10px'}}> {maxCount}</p>}</td> 
		</tr> 
	</table> 
	<br />    
    </div>
     
    </div>
  );
};

export default Last;
