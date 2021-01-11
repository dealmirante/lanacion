import React  from 'react';
import '../styles.css';
import moment from 'moment';
import  'moment/locale/es';

export const NotasCard = (props) => {      

    const tags = props.taxonomy.tags;   

    tags.sort((a,b) => {
        const atext = a.text.toLowerCase();
        const btext = b.text.toLowerCase();
        
        if (atext < btext){
            return -1;
        }
        if (atext > btext) {
            return 1;
        }
        return 0;
    });
       

    return ( 
        <>
            <div className="news-cards">
                <img src= {props.promo_items.basic.url} alt="" />
                <h3>{props.headlines.basic}</h3>  

                {tags.map (item => (     
                    <a href={item.slug}>{item.text} </a>
                ))}

                <p>{moment(props.display_date).format('DD [de] MMMM [de] YYYY')}</p>
            </div>    
        </>
           
    )

}



